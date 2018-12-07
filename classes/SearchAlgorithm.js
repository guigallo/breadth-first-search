const Graph = require('../classes/Graph');
const Queue = require('../classes/Queue');

let graph;
let queue;
let processed;

function processNode(node, link) {
  if(node.status === undefined) {
    node.status = 'searched';
  
    if(link === undefined) {
      processed.push({ source: 'start', link: '', target: node.id });
    } else {
      processed.push({ source: link.source, link: link.id, target: link.target });
    }
    
    node.ports.forEach(port =>
      port.links.forEach(link =>
        queue.put(link)
      )
    );

    processQueue();
  }
}

function processQueue() {
  for(let i = 0; queue.actual.length; i++) {
    const link = graph.getLinkById(queue.next());
    const targetNode = graph.getNodeById(link.target);
    
    queue.freeSpace();
    
    processNode(targetNode, link);
  }
}

class SearchAlgorithm {
  constructor(graphActual) {
    graph = null;
    queue = new Queue();
    processed = [];

    if(graphActual instanceof Graph) {
      graph = graphActual;
    } else {
      throw new Error('SearchAlgorith constructor should receive an instance of Graph');
    }
  }

  start() {
    let startNode;
    if (graph.startFrom === null) {
      startNode = graph.getFirstNode();
    } else {
      startNode = graph.getNodeById(graph.startFrom);
    }

    processNode(startNode);
    return processed;
  }

}

module.exports = SearchAlgorithm;