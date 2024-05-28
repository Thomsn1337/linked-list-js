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
        /**
         * @type {ListNode | null}
         */
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

    /**
     * @returns {number}
     */
    size() {
        let current = this._head;
        let count = 0;

        while (current) {
            count++;
            current = current.next;
        }

        return count;
    }

    /**
     * @returns {ListNode | null}
     */
    get head() {
        return this._head;
    }

    /**
     * @returns {ListNode | null}
     */
    get tail() {
        let current = this._head;

        while (current && current.next) {
            current = current.next;
        }

        return current;
    }

    /**
     * @param {number} index
     * @returns {ListNode | null}
     */
    at(index) {
        if (index > this.size())
            throw new RangeError("Index out of list range");

        let current = this._head;
        let count = 0;

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

    /**
     * @param {any} value
     * @returns {boolean}
     */
    contains(value) {
        let current = this._head;

        while (current) {
            if (current.value === value) {
                return true;
            }

            current = current.next;
        }

        return false;
    }

    /**
     * @param {any} value
     * @returns {number | null}
     */
    find(value) {
        let current = this._head;
        let count = 0;

        while (current) {
            if (current.value === value) return count;

            count++;
            current = current.next;
        }

        return null;
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

    /**
     * @param {number} index
     * @param {any} value
     */
    insertAt(index, value) {
        if (index > this.size())
            throw new RangeError("Index out of list range");
        else if (index === 0) this.prepend(value);
        else if (index === this.size()) this.append(value);
        else {
            let current = this._head;
            let previous;
            let count = 0;

            const node = new ListNode(value);

            while (current) {
                if (count === index && previous) {
                    node.next = current;
                    previous.next = node;
                }

                count++;
                previous = current;
                current = current.next;
            }
        }
    }

    /**
     * @param {number} index
     */
    removeAt(index) {
        if (index >= this.size())
            throw new RangeError("Index out of list range");
        else if (index + 1 === this.size()) this.pop();
        else {
            let current = this._head;

            if (index === 0 && current) {
                this._head = current.next;
                current.next = null;
            } else if (current) {
                let previous;
                let count = 0;

                while (current) {
                    if (count === index && previous) {
                        previous.next = current.next;
                        current.next = null;
                    }

                    count++;
                    previous = current;
                    current = current.next;
                }
            } else return;
        }
    }
}

export default LinkedList;
