class VigenereCipheringMachine {
    constructor(reverse) {
        this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        this.reverse = reverse;
    }

    encrypt(message, key) {
        if (!message || !key)
            throw new Error();

        message = message.toUpperCase().split("");
        key = key.toUpperCase().split("");

        let i = 0;
        key = message.reduce((accum, symbol) => {
            if( i === key.length ) {
                i = 0;
            }
            let item;
            if ( this.alphabet.indexOf(symbol) !== -1 ) {
                item = key[i];
                i++;
            }
            else {
                item = '';
            }
            return [...accum, item];
        }, []);

        let result = message.reduce((accum, item, i) => {
            let symbol = this.alphabet.indexOf(item) !== -1 ? this.alphabet[(this.alphabet.indexOf(item) + this.alphabet.indexOf(key[i])) % this.alphabet.length] : item;
            return [...accum, symbol];
        }, []);

        return this.reverse === false ? result.reverse().join("") : result.join("");
    }

    decrypt(encryptedMessage, key) {
        if (!encryptedMessage || !key)
            throw new Error();

        encryptedMessage = encryptedMessage.toUpperCase().split("");
        key = key.toUpperCase().split("");

        let i = 0;
        key = encryptedMessage.reduce((accum, symbol) => {
            if( i === key.length ) {
                i = 0;
            }
            let item;
            if ( this.alphabet.indexOf(symbol) !== -1 ) {
                item = key[i];
                i++;
            }
            else {
                item = '';
            }
            return [...accum, item];
        }, []);

        let result = encryptedMessage.reduce((accum, item, i) => {
            let symbol = this.alphabet.indexOf(item) !== -1 ? this.alphabet[Math.abs(this.alphabet.indexOf(item) + this.alphabet.length - this.alphabet.indexOf(key[i])) % this.alphabet.length] : item;
            return [...accum, symbol];
        }, []);

        return this.reverse === false ? result.reverse().join("") : result.join("");

    }
}

module.exports = VigenereCipheringMachine;
