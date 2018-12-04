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

  getFirstNode() {
    return this.graph.nodes[0];
  }

  getNodeById(id) {
    return this.graph.nodes.find(node => node.id === id);
  }

  getLinkById(linkId) {
    return this.graph.links.find(link => link.id === linkId);
  }
}

module.exports = Graph;