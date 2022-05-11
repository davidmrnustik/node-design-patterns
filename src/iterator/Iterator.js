class Iterator {
    constructor(items = []) {
        this.index = 0;
        this.items = items;
    }

    first() {
        const [first] = this.items;
        this.index = 0;
        return first;
    }

    last() {
        // preventing mutation of an array, creating a copy of it
        const [last] = [...this.items].reverse();
        this.index = this.items.length - 1;
        return last;
    }

    next() {
        if (this.hasNext()) {
            this.index += 1;
        }

        return this.current();
    }

    prev() {
        if (this.index !== 0) {
            this.index -= 1;
        }

        return this.current();
    }

    current() {
        return this.items[this.index];
    }

    hasNext() {
        return this.index < this.items.length - 1;
    }
}

module.exports = Iterator;

