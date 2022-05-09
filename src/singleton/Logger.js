class Logger {
    constructor() {
        this.logs = [];
    }

    get count() {
        return this.logs.length;
    }

    log(message) {
        const timestamp = new Date().toISOString();
        this.logs.push({ message, timestamp });
        console.log(`${timestamp} - ${message}`);
    }
}

// class Singleton {
//     constructor() {
//         if (!Singleton.instance) {
//             Singleton.instance = new Logger();
//         }
//     }
//
//     getInstance() {
//         return Singleton.instance;
//     }
// }

// in node.js after calling the first time, it saves in the cache
module.exports = new Logger();