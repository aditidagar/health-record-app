const util = require('../util');
const { assert } = require('chai');


describe("Testing Queue", () => {
    describe("#enqueue()", () => {
        it("should enqueue successfully", (done) => {
            const queue = new util.Queue();
            queue.enqueue(1);
            queue.enqueue(2);
            done();
        })
    })
    
    describe("#dequeue()", () => {
        it("should return null when queue is empty", () => {
            const queue = new util.Queue();
            assert.equal(queue.dequeue(), null);
            queue.enqueue(1);
            queue.dequeue();
            assert.equal(queue.dequeue(), null);
            queue.dequeue();
            assert.equal(queue.dequeue(), null);
        })
        it("should be LIFO", () => {
            const queue = new util.Queue();
            queue.enqueue(1);
            queue.enqueue(2);
            queue.enqueue(3);
            assert.equal(queue.dequeue(), 1);
            assert.equal(queue.dequeue(), 2);
            assert.equal(queue.dequeue(), 3);
        })
    })

    describe("#length", () => {
        it("should update length correctly", () => {
            const queue = new util.Queue();
            assert.equal(queue.length, 0);
            queue.enqueue(1);
            assert.equal(queue.length, 1);
            queue.enqueue(1);
            assert.equal(queue.length, 2);
            queue.dequeue();
            assert.equal(queue.length, 1);
            queue.dequeue();
            assert.equal(queue.length, 0);
            queue.dequeue();
            assert.equal(queue.length, 0);
        })
    })

  });