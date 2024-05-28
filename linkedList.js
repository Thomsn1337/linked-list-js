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
}

export default LinkedList;
