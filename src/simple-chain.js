const chainMaker = {
  chains: [],
  string: '',
  getLength() {
    return this.chains.length;
  },
  addLink(value) {
    this.chains.push(value);
    return this;
  },
  removeLink(position) {
    if(position <= 0 || typeof position != 'number' || position >= this.chains.length) {
      this.chains = [];
      this.string = '';
      throw new Error();
    }
    else {
      this.chains.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chains.reverse();
    return this;
  },
  finishChain() {
    this.string = this.chains.reduce((accumulator, item, i, arr) => {
      accumulator += `( ${item} )`;
      if( i != arr.length - 1 ) {
        accumulator += '~~';
      }
      return accumulator;
    }, '');

    this.chains = [];

    return this.string;
  }
};

module.exports = chainMaker;
