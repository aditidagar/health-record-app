/**
 * @property {ListNode} next
 * @property {*} value
 */
class ListNode {
    /** @type {*} */
    #value;
    /** @type {ListNode} */
    #next;

    /**
     * 
     * @param {*} value 
     * @param {ListNode} next 
     */
    constructor(value, next){
        this.#value = value;
        this.#next = next;
    }

    set value(value) {
        this.#value = value;
    }

    set next(next) {
        this.#next = next;
    }

    get value() {
        return this.#value;
    }

    get next() {
        return this.#next;
    }
}

/**
 * A Simple Queue implementaion
 */
class Queue {
    /** @type {number} */
    #length = 0
    /** @type {ListNode} */
    #first = null
    /** @type {ListNode} */
    #last = null

    enqueue(value) {
        const newNode = new ListNode(value, null);
        if (this.#last) {
            this.#last.next = newNode;
            this.#last = newNode;
        } else {
            this.#first = newNode;
            this.#last = newNode;
        }
        ++this.#length;
    }

    dequeue() {
        if (this.length > 0) {
            const node = this.#first;
            if (this.length == 1) {
                this.#first = null;
                this.#last = null;
            } else {
                this.#first = this.#first.next;
            }
            --this.#length;
            return node.value;
        } else {
            return null;
        }
    }

    empty() {
        return this.length === 0 ? true : false;
    }

    get length() {
        return this.#length;
    }
}



/**
 * ---------------------------------------------------------
 *             Helper functions
 * ---------------------------------------------------------
 */
/**
 * @typedef {Object} WrapperObject
 * @property {function(string):WrapperObject} getNext
 * @property {*} value 
 */
/**
 * A wrapper to get prop and throw error if
 * prop does not exist (undefied). You can 
 * pass in your own error callback to throw error
 * with meaningful message. The error will be
 * given the path as a string. 
 * 
 * The function will return 
 * errorCallback(path-to-non-existent-prop) if prop
 * does not exist. The default behavior is to throw
 * an Error.
 * @example
 * getProp(obj, prop).getNext(prop).value
 * // This will throw Error
 * // The path will be .prop.non_existent_prop
 * getProp(obj, prop).getNext(non_existent_prop).getNext(prop).value
 * @param {Object} object input object
 * @param {string} prop prop name
 * @param {function(string):void=} errorCallback the optional custom error callback
 * @returns {WrapperObject} the wrapper object
 */
function getProp (object, prop, errorCallback=(p)=>{throw Error(`obj${p} does not exists.`)}) {
    function getPropInner(innerObj, innerProp, path) {
        if (!innerObj.hasOwnProperty(innerProp)) {
            return errorCallback(path+`.${innerProp}`);
        };
        return {
            value: innerObj[innerProp],
            getNext: (nextProp) => {
                return getPropInner(innerObj[innerProp], nextProp, path+`.${innerProp}`);
            },
        }
    }
    return getPropInner(object, prop, '');
}

/**
 * Tests if prop exists for a given object.
 * @param {Object} object 
 * @param {string[]} props 
 */
function propsExist(object, props) {
    for (let i = 0 ; i != props.length ; ++i) {
        if (!object.hasOwnProperty(props[i])) {
            return false;
        }
    }
    return true;
}

/**
 * Checks if value is an Object.
 * @param {*} value 
 */
function isObject(value) {
    return typeof value === 'object' && value !== null
}

module.exports = {
    // data structure
    Queue: Queue,

    // helper function
    getProp: getProp,
    isObject: isObject,
    propsExist: propsExist,
}