const fs = require('fs');
const dateHelper = require('../helper/dateHelper');

module.exports = {
  // deprecated
  move(files) {
    if(files.uploadFile !== undefined) {
      const oldpath = files.uploadFile.path;

      const hash = files.uploadFile.lastModifiedDate.getTime();
      const fileName = files.uploadFile.name;
      const newPath = `uploads/${hash}_${fileName}`;
      
      fs.rename(oldpath, newPath, function(err) {
        if(err) {
          console.log(err);
          return false;
        }
      });

      return true;
    } else {
      return false;
    }
  },
  
  getFiles() {
    const graphs = []
    return new Promise((resolve, reject) => {
      fs.readdir('uploads/', (err, files) => {
        files.forEach(file =>
          graphs.push(this.nameToStat(file))
        );
        graphs.length > 0 ? resolve(graphs) : reject();
      })
    });
  },

  getFileByName(name) {
    const stat = this.nameToStat(name);
    return new Promise((resolve, reject) => {
      const file = JSON.parse(fs.readFileSync(`uploads/${name}.json`, 'utf-8'));

      file ? resolve({ stat, file }) : reject();
    });
  },

  nameToStat(file) {
    const name = file.replace('.json', '');
    const arr = name.split('_');
    const url = '/graphs/' + name;
    const date = new Date(parseInt(arr[0]));

    return {
      name, url, date,
      dateString: dateHelper.dateToString(date),
      id: arr[1],
      links: arr[2],
      nodes: arr[3],
    }
  },

  saveJson(body, date = new Date()) {
    if(body !== undefined) {
      const json = JSON.stringify(body);
      const fileName = `uploads/${date.getTime()}_${body.id}_${body.links.length}_${body.nodes.length}.json`;

      fs.writeFileSync(fileName , json, function(err) {
        if(err)
          throw new Error('File not save');
      });
      
      return true;
    } else {
      return false;
    }
  }
}