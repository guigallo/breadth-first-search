const fs = require('fs');

module.exports = {
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

  saveJson(body) {
    if(body !== undefined) {
      const json = JSON.stringify(body);
      const fileName = `uploads/${new Date().getTime()}.json`;
      fs.writeFile(fileName , json, function(err) {
        if(err) {
          console.log(err);
          return false;
        }
      });

      return true;
    } else {
      return false;
    }
  }
}