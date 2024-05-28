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
        this.head = null;
    }

    /**
     * @param {any} value
     */
    append(value) {
        const node = new ListNode(value);

        if (this.head === null) {
            this.head = node;
            return;
        }

        let current = this.head;
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
        const current = this.head;

        if (current) node.next = current;

        this.head = node;
    }

    toString() {
        let current = this.head;
        let listString = "";

        while (current) {
            if (current.next) listString += `(${current.value}) -> `;
            else listString += `(${current.value})`;

            current = current.next;
        }

        return listString;
    }
}

export default LinkedList;
