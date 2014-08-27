// states.js
module.exports = {
    
    jsObj : {},
    xmlObj : function(xml) {
        
        if (typeof xml == "undefined") {
            var xml2js = require('xml2js');
            var builder = new xml2js.Builder();
            xml = builder.buildObject({});
        }
        
        return xml;
    },
    
    writeXML : function(obj) {
        var xml2js = require('xml2js');
        
        this.jsObj = obj;
    
        var builder = new xml2js.Builder();
        var xml = builder.buildObject(obj);
        
        var fs = require('fs');
        var path = 'state_files/XMLIN.xml',
        buffer = new Buffer(xml);
        
        fs.open(path, 'w', function(err, fd) {
            if (err) {
                throw 'error opening file: ' + err;
            } else {
                fs.write(fd, buffer, 0, buffer.length, null, function(err) {
                    if (err) throw 'error writing file: ' + err;
                    fs.close(fd, function() {
                        console.log('file written');
                    });
                });
            }
        });
    },
    
    readXML : function() {
        var fs = require('fs'),
        xml2js = require('xml2js');
    
        var parser = new xml2js.Parser();
        fs.readFile('state_files/XMLIN.xml', function(err, data) {
            parser.parseString(data, function (err, result) {
                console.log(result);
            });
        });
    }
};