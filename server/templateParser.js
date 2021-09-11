const fparser = require('fast-xml-parser');
// const fs = require('fs');
// const util = require('util');
// const xmlParser = new xml2js.Parser();
const eParser = require('./elementParser');

const Queue = require('./util').Queue;
const getProp = (obj, name) => {
    return require('./util').getProp(obj, name);
}
const isObject = require('./util').isObject;

// const data = fs.readFileSync('./PKG_Adrenal.xml', 
//             {encoding:'utf8', flag:'r'}); 

// const res = fparser.parse(data, defaultOptions);

/**
 * The parser parses a raw sdc xml string into a form
 * template for backend processing. It has 3 methods for
 * parsing; the method preStep takes in a raw xml string 
 * and does some pre processing, for example, convert 
 * the xml into a json object and look for the 'FormDesign' 
 * field; the method parseElment accepts a json object 
 * that represents an element and parse it. for instance, 
 * it can be the raw json structure of <Question></Question> 
 * after inital parsing; the method finalStep (not used 
 * for now) will do some clean up and return the final 
 * parsed json. To perform every step, just call parse on, 
 * xml string.
 * 
 * The parseElment() uses element parsers that were added.
 * The element parser takes in an object, its name, attributes
 * and the parseElment() function so the step can be performed
 * recursively. It should return a parsed object if the input
 * can be parsed by this parser, or null otherwise so the 
 * method will move on to the next element parser in sequence.
 */
class TemplateParser {
    #parsers = []
    #defaultOptions = {
        attributeNamePrefix : '',
        attrNodeName: "@", 
        ignoreAttributes : false,
        format: false,
        supressEmptyNode: false,
    };
    /**
     * Add parser to this object.
     * @param {Parser} parser 
     */
    addElementParser(parser) {
        this.#parsers.push(parser);
    }

    /**
     * The step before the actual parsing. The JSON object is still
     * the raw object returned by xml parser.
     * @param {String} xml the xml string that needs to be parsed.
     */
    preStep(xml) {
        const object = fparser.parse(xml, this.#defaultOptions);
        if (!object) {
            throw Error('Invalid XML: Cannot parse given XML.')
        }
        // find FormDesign 
        const found = findFormDesign(object);
        if (!found) {
            throw Error('Invalid XML: FormDesign does not exist.')
        } 
        return found
    }

    /**
     * Returns the attributes of the object.
     * @param {JSON} object the raw JSON object returned after 
     *                      the inital parsing.
     */
    getAttribute(object) {
        return object['@'];
    }

    /**
     * The object should represent a valid element that can be parsed
     * by one of the added element parsers.
     * @param {JSON} object the object that needs to be parsed.
     * @param {String} name the type/name of the object. For example,
     *                      the <Question/> element will have 
     *                      name="Question"
     */
    parseElment(object, name) {
        for (let i = 0 ; i != this.#parsers.length ; ++i) {
            // note that you need to do this.parseElment.bind(this) 
            // because of the "this" problem. I am passing this function,
            // and the context of "this" will change so I need to
            // bind here
            const parsedObject = this.#parsers[i](object, name, this.getAttribute(object), this.parseElment.bind(this));
            if (parsedObject) {
                return parsedObject;
            }
        }
        // pattern not recognized
        return null;
    }

    /**
     * The final step of parsing. The input object should have all its
     * sub elements parsed.
     * @param {JSON} object the object that needs to be parsed.
     */
    finalStep(object) {
    }

    /**
     * The method performs an end to end parsing. It takes a xml string
     * and returns a parsed object.
     * @param {xml} xml 
     */
    parse(xml) {
        const parsed = {};
        const formDesign = this.preStep(xml);
        const procedureID = findProcedureID(formDesign);
        const name = findFormName(formDesign);

        // if (!formDesign.hasOwnProperty('Body')) {
        //     throw Error('Invalid XML: Body does not exist.');
        // }

        // similarly here you need to do this.parseElment.bind(this) 
        // because of the "this" problem.
        const childItems = eParser
            .parseChildItems(
                getProp(formDesign, 'Body')
                .getNext('ChildItems').value,
                this.parseElment.bind(this));
        parsed.body = childItems;
        parsed.procedureID = procedureID;
        parsed.name = name;
        return parsed;
    }
}

// some helper funtion
/**
 * Returns the FormDesign field. Return null if
 * not found.
 * @param {Object} object raw Object
 */
function findFormDesign(object) {
    return findField(object, 'FormDesign');
}

function findProcedureID(formDesign) {
    const propsArr = getProp(formDesign, 'Property').value;
    // I assume it's an array here
    for (const element of propsArr){
        if (getProp(element, '@').getNext('name').value === 'TemplateID') {
            return getProp(element, '@').getNext('val').value;
        }
    }
    throw Error('Invalid XML: No TemplateID.')
}

function findFormName(formDesign) {
    const propsArr = getProp(formDesign, 'Property').value;
    // I assume it's an array here
    for (const element of propsArr){
        if (getProp(element, '@').getNext('name').value === 'OfficialName') {
            return getProp(element, '@').getNext('val').value;
        }
    }
    throw Error('Invalid XML: No OfficialName.')
}

/**
 * Do bfs to find the required field.
 * @param {Object} object 
 * @param {string} field
 * @returns {Object} The FormDesign Object
 */
function findField(object, field) {
    const queue = new Queue();
    // do inital search and put stuff to queue
    for (const [key, value] of Object.entries(object)) {
        if (key === field) {
            return value;
        }
        queue.enqueue(value)
    }
    // do bfs
    while (!queue.empty()) {
        const pop = queue.dequeue();
        if (!isObject(pop)) {
            continue;
        }
        for (const [key, value] of Object.entries(pop)) {
            if (key === field) {
                return value;
            }
            queue.enqueue(value)
        }
    }
    // not found
    return null;
}


const templateParser = new TemplateParser()
eParser.parsers.forEach((parser) => {
    templateParser.addElementParser(parser);
})
// console.log(util.inspect(templateParser.parse(data), false, null));

module.exports.templateParser = templateParser;
