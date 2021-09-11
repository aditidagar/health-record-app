
// const ELEMENT_NAME = ['Section', 'Question', 'DisplayedItem', 'ListItem']

const propsExist = require('./util').propsExist;

const parseChildItems = (childItems, parserFunction) => {
    const parsedChildItems = [];
    // go through every subelement and parse them.
    for (const [key, value] of Object.entries(childItems)) {
        // check if it's an array
        // this happens for example, when there are multiple
        // <Question> elements under the same <Section> tag.
        if (Array.isArray(value)) {
            value.forEach((element) => {
                const parsed = parserFunction(element, key);
                if (parsed) {
                    parsedChildItems.push(parsed);
                }
            })
        } else {
            const parsed = parserFunction(value, key);
            if (parsed) {
                parsedChildItems.push(parsed);
            }
        }
    }
    // now do the re-ordering. This is because subelements are not
    // in order anymore after being parsed to JSON. However, we can 
    // still use the attribute "order" to do the re-ordering. 
    parsedChildItems.sort((a, b) => {
        if (a.order < b.order) {
            return -1;
        } else {
            return 1;
        }
    })
    return parsedChildItems;
}

const parseList = (list, parser) => {
    return parseChildItems(list, parser);
}



const parseResponseField = (object) => {
    if (!propsExist(object, ['Response'])) {
        throw Error('Invalid ResponseField.');
    }
    const attributes = object['@'];
    const parsed = parseDType(object['Response']);
    if (!parsed) {
        throw Error(`Unknow dType for ResponseField: \n${JSON.stringify(object['Response'], null, 2)}`)
    }
    parsed.responseRequired = !propsExist(attributes, ['responseRequired']) ? 
                              true : attributes.responseRequired;
    parsed.textAfterResponse = !propsExist(object, ['TextAfterResponse']) ? 
                              '' : ((object.TextAfterResponse)['@']).val;
    return parsed;
}

const parseDType = (object) => {
    // console.log(JSON.stringify(object));
    if(propsExist(object, ['string'])) {
        return parseDTypeString(object);
    } else if (propsExist(object, ['integer'])) {
        return parseDTypeInteger(object);
    } else if (propsExist(object, ['decimal'])) {
        return parseDTypeDecimal(object);
    } else {
        return null;
    }
}

const parseDTypeString = (object) => {
    const result = {};
    result.dType = 'string';
    const maxLength = (object.string)['@']?.maxLength;
    if (maxLength) {
        result.maxLength = maxLength;
    }
    return result;
}

const parseDTypeInteger = (object) => {
    const result = {};
    result.dType = 'integer';
    const maxInclusive = (object.integer)['@']?.maxInclusive;
    if (maxInclusive) {
        result.maxInclusive = maxInclusive;
    }
    const minInclusive = (object.integer)['@']?.minInclusive;
    if (minInclusive) {
        result.minInclusive = minInclusive;
    }
    return result;
}

const parseDTypeDecimal = (object) => {
    const result = {};
    result.dType = 'decimal';
    const maxInclusive = (object.decimal)['@']?.maxInclusive;
    if (maxInclusive) {
        result.maxInclusive = maxInclusive;
    }
    const minInclusive = (object.decimal)['@']?.minInclusive;
    if (minInclusive) {
        result.minInclusive = minInclusive;
    }
    const fractionDigits = (object.decimal)['@']?.fractionDigits;
    if (fractionDigits) {
        result.fractionDigits = fractionDigits;
    }
    const totalDigits = (object.decimal)['@']?.totalDigits;
    if (totalDigits) {
        result.totalDigits = totalDigits;
    }
    return result;
}

class DisplayTypeParser{
    /**
     * Parse the object given its name (or type), attributes
     * and an element parser that can be used to parse recursively.
     * @param {JSON} object the raw object that needs to be parsed.
     * @param {String} name the name (or type) of the object.
     * @param {JSON} attributes the attributes of the object.
     * @param {*} parser the element parser that can be used to parse recursively.
     */
    parse(object, name, attributes, parser) {
        if (!propsExist(attributes, ['ID', 'order'])) {
            throw Error(`Required attribute(s) does not exist when parsing: ${name}`);
        }
        const parsed = {};
        parsed.ID = attributes.ID;
        parsed.order = parseInt(attributes.order);
        parsed.title = !propsExist(attributes, ['title'])? '' : attributes.title;
        return parsed;
    }
}

class DisplayedItemParser extends DisplayTypeParser{
    /**
     * Parse the object given its name (or type), attributes
     * and an element parser that can be used to parse recursively.
     * @param {JSON} object the raw object that needs to be parsed.
     * @param {String} name the name (or type) of the object.
     * @param {JSON} attributes the attributes of the object.
     * @param {*} parser the element parser that can be used to parse recursively.
     */
    parse(object, name, attributes, parser) {
        if (name !== 'DisplayedItem') {
            return null;
        } 
        const parsed = super.parse(object, name, attributes, parser);
        if (!parsed) {
            return null;
        }
        parsed.type = 'DisplayedItem';
        return parsed;
    }
}

class OptionParser extends DisplayTypeParser{
    /**
     * Parse the object given its name (or type), attributes
     * and an element parser that can be used to parse recursively.
     * @param {JSON} object the raw object that needs to be parsed.
     * @param {String} name the name (or type) of the object.
     * @param {JSON} attributes the attributes of the object.
     * @param {*} parser the element parser that can be used to parse recursively.
     */
    parse(object, name, attributes, parser) {
        if (name !== 'ListItem') {
            return null;
        }
        const parsed = super.parse(object, name, attributes, parser);
        if (!parsed) {
            return null;
        }
        parsed.selectionDeselectsSiblings = !propsExist(attributes, ['selectionDeselectsSiblings']) ?
                                            false : attributes.selectionDeselectsSiblings;
        if (propsExist(object, ['ListItemResponseField'])) {
            parsed.responseField = parseResponseField(object.ListItemResponseField);
        }
        if (propsExist(object, ['ChildItems'])) {
            parsed.childItems = parseChildItems(object.ChildItems, parser);
        } 
        parsed.type = "Option";
        return parsed;
    }
}

class RepeatingTypeParser extends DisplayTypeParser{
    /**
     * Parse the object given its name (or type), attributes
     * and an element parser that can be used to parse recursively.
     * @param {JSON} object the raw object that needs to be parsed.
     * @param {String} name the name (or type) of the object.
     * @param {JSON} attributes the attributes of the object.
     * @param {*} parser the element parser that can be used to parse recursively.
     */
    parse(object, name, attributes, parser) {
        const parsed = super.parse(object, name, attributes, parser);
        if (!parsed) {
            return null;
        }
        // check if not minCard, default to 1;
        parsed.minCard = (!propsExist(attributes, ['minCard'])) ? 1: attributes.minCard;
        parsed.maxCard = (!propsExist(attributes, ['maxCard'])) ? 1: attributes.maxCard;
        return parsed;
    }
}

class SectionParser extends RepeatingTypeParser{
    /**
     * Parse the object given its name (or type), attributes
     * and an element parser that can be used to parse recursively.
     * @param {JSON} object the raw object that needs to be parsed.
     * @param {String} name the name (or type) of the object.
     * @param {JSON} attributes the attributes of the object.
     * @param {*} parser the element parser that can be used to parse recursively.
     */
    parse(object, name, attributes, parser) {
        if (name !== 'Section') {
            return null;
        }
        const parsed = super.parse(object, name, attributes, parser);
        if (!parsed) {
            return null;
        }
        parsed.type = "Section";
        parsed.childItems = parseChildItems(object.ChildItems, parser);
        return parsed;
    }
}

class QRParser extends RepeatingTypeParser{
    /**
     * Parse the object given its name (or type), attributes
     * and an element parser that can be used to parse recursively.
     * @param {JSON} object the raw object that needs to be parsed.
     * @param {String} name the name (or type) of the object.
     * @param {JSON} attributes the attributes of the object.
     * @param {*} parser the element parser that can be used to parse recursively.
     */
    parse(object, name, attributes, parser) {
        if (name !== 'Question' || !propsExist(object, ['ResponseField'])) {
            return null;
        }
        const parsed = super.parse(object, name, attributes, parser);
        if (!parsed) {
            return null;
        }
        parsed.responseField = parseResponseField(object.ResponseField);
        if (propsExist(object, ['ChildItems'])) {
            parsed.childItems = parseChildItems(object.ChildItems, parser);
        }
        parsed.type = 'QR';
        return parsed;
    }
}

class QSParser extends RepeatingTypeParser{
    /**
     * Parse the object given its name (or type), attributes
     * and an element parser that can be used to parse recursively.
     * @param {JSON} object the raw object that needs to be parsed.
     * @param {String} name the name (or type) of the object.
     * @param {JSON} attributes the attributes of the object.
     * @param {*} parser the element parser that can be used to parse recursively.
     */
    parse(object, name, attributes, parser) {
        if (name !== 'Question' || !propsExist(object, ['ListField']) 
            || ((object.ListField)['@'].maxSelections !== undefined 
            && (object.ListField)['@'].maxSelections !== '1')) {
            return null;
        }
        const parsed = super.parse(object, name, attributes, parser);
        if (!parsed) {
            return null;
        }
        // now parse List.ListItem
        parsed.list = parseList(object.ListField.List, parser);
        if (propsExist(object, ['ChildItems'])) {
            parsed.childItems = parseChildItems(object.ChildItems, parser);
        }
        parsed.type = 'QS';
        return parsed;
    }
}

class QMParser extends RepeatingTypeParser{
    /**
     * Parse the object given its name (or type), attributes
     * and an element parser that can be used to parse recursively.
     * @param {JSON} object the raw object that needs to be parsed.
     * @param {String} name the name (or type) of the object.
     * @param {JSON} attributes the attributes of the object.
     * @param {*} parser the element parser that can be used to parse recursively.
     */
    parse(object, name, attributes, parser) {
        if (name !== 'Question' || !propsExist(object, ['ListField']) ||
            ((object.ListField)['@'].maxSelections === undefined 
            && (object.ListField)['@'].maxSelections === '1')) {
            return null;
        }
        const parsed = super.parse(object, name, attributes, parser);
        if (!parsed) {
            return null;
        }
        parsed.maxSelections = (object.ListField)['@'].maxSelections;
        parsed.minSelections = (object.ListField)['@'].minSelections === undefined ?
                               1 : (object.ListField)['@'].minSelections;
        // now parse List.ListItem
        parsed.list = parseList(object.ListField.List, parser);
        if (propsExist(object, ['ChildItems'])) {
            parsed.childItems = parseChildItems(object.ChildItems, parser);
        }
        parsed.type = 'QM';
        return parsed;
    }
}

module.exports = ({
    parsers: [
        new DisplayedItemParser().parse,
        new OptionParser().parse,
        new SectionParser().parse,
        new QRParser().parse,
        new QSParser().parse,
        new QMParser().parse
    ],
    parseChildItems: parseChildItems
})