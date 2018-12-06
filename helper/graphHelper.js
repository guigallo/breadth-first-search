const fs = require('fs');

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

  fileToObject(files) {
    if(files.uploadFile !== undefined) {
      const data = fs.readFileSync(files.uploadFile.path, 'utf-8');
      const json = JSON.parse(data);

      const validateJson = this.validateJson(json);
      if(validateJson.length > 0) {
        return { errors: validateJson };
      }

      return json;
    } else {
      return { errors: ['file invalid'] };
    }
  }
}