class ListNode {
    /**
     * @param {any} value
     */
    constructor(value) {
        this.value = value || null;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this._head = null;
    }

    /**
     * @param {any} value
     */
    append(value) {
        const node = new ListNode(value);

        if (this._head === null) {
            this._head = node;
            return;
        }

        let current = this._head;
        while (current.next) {
            current = current.next;
        }

        current.next = node;
    }

    /**
     * @param {any} value
     */
    prepend(value) {
        const node = new ListNode(value);
        const current = this._head;

        if (current) node.next = current;

        this._head = node;
    }

    size() {
        let current = this._head;
        let count = 0;

        while (current) {
            count++;
            current = current.next;
        }

        return count;
    }

    get head() {
        return this._head;
    }

    get tail() {
        let current = this._head;

        while (current && current.next) {
            current = current.next;
        }

        return current;
    }

    /**
     * @param {number} index
     */
    at(index) {
        let count = 0;
        let current = this._head;

        while (current) {
            if (count === index) break;
            count++;
            current = current.next;
        }

        return current;
    }

    pop() {
        let current = this._head;
        let previous;

        while (current && current.next) {
            previous = current;
            current = current.next;
        }

        if (previous) previous.next = null;
        else this._head = null;
    }

    toString() {
        let current = this._head;
        let listString = "";

        if (!current) listString = "()";

        while (current) {
            if (current.next) listString += `(${current.value}) -> `;
            else listString += `(${current.value})`;

            current = current.next;
        }

        return listString;
    }
}

export default LinkedList;
