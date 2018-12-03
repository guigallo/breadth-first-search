//let graph = require('./data/sample').json();
let graph = require('./data/sample-friendly-name').json();
const Queue = require('./Classes/Queue');
let queue = new Queue();

//startGraph({ start: '940ac7c2-44c3-4f76-8f44-58d019755ca9'});
startGraph();
function startGraph(args = {}) {
  let startFrom;
  if(args.hasOwnProperty('start')) {
    startFrom = findNode(args.start);
  } else {
    startFrom = graph.nodes[0];
  }
  if(args.hasOwnProperty('end')) {
    console.log('implementar final busca');
  }

  processNode(startFrom);
}

function findNode(id) {
  return graph.nodes.find(node => node.id === id);
}

function processNode(node, message) {
  if(node.status === undefined) {
    node.status = 'searched';
  
    if(message === undefined) {
      console.log(`source: start\ttarget: ${node.id}`);
    } else {
      console.log(message)
    }
    
    node.ports.forEach(port => {
      port.links.forEach(link => {
        queue.put(link);
      });
    });
    processQueue();
  }
}

function processQueue() {
  for(let i = 0; queue.actual.length; i++) {
    const link = graph.links.find(link => link.id === queue.next());
    const targetNode = graph.nodes.find(node => node.id === link.target);
    
    queue.freeSpace();
    
    const message = `source: ${link.source}\ttarget: ${link.target}`;
    processNode(targetNode, message);
  }
}