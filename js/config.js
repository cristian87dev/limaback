// config.js
module.exports = {
    pathRoot : "",
    data : {},
    readFile : function() {
        var fs = require('fs');
        var file = this.pathRoot + 'config.json';
        
        fs.readFile(file, 'utf8', function (err, data) {
          if (err) {
            console.log('Error: ' + err);
            return;
          }
         
          this.data = JSON.parse(data);
          console.log(this.data);
        }).apply(this);
        
    },
    writeFile : function() {
        
    }
};