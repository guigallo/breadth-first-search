let message;

function hasPropertyArray(json, property, value = 'json') {
  if(json.hasOwnProperty(property)) {
    if(! Array.isArray(json[property])) {
      message.push(`${property} property is not an array`);
      return false;
    }

    return true;
  } else {
    message.push(`${value} has no ${property} property`);
    return false;
  }
}

function hasProperties(name, obj, ...props) {
  props.forEach(prop => {
    if(! obj.hasOwnProperty(prop)) {
      message.push(`${name} has no property ${prop}`);
    }
  });
}

module.exports =  {
  validateJson(json) {
    message = [];

    if(hasPropertyArray(json, 'links') && json.links.length > 0) {
      json.links.forEach(link => {
        hasProperties('link', link, 'source', 'id', 'target');
      });
    }

    if(hasPropertyArray(json, 'nodes') && json.nodes.length > 0) {
      json.nodes.forEach(node => {
        hasProperties('nodes', node, 'id');
        hasPropertyArray(node, 'ports', 'nodes');
      });
    }

    return message;
  },

  validateFile(files) {
    if(files.uploadFile !== undefined) {
      return this.validateJson(files.uploadFile);
    } else {
      return ['file invalid'];
    }
  }
}