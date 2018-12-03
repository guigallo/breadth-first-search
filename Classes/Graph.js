const sample = require('../data/sample-friendly-name').json();

class Graph {
  constructor(json, args = {}) {
    this.graph = json;

    this.startFrom = null;
    if(args.hasOwnProperty('start')) {
      startFrom = args.start;
    }
    if(args.hasOwnProperty('end')) {
      console.log('implementar final busca');
    }
  }
}

module.exports = Graph;