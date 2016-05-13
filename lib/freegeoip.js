var request = require('request');

var serverUrl = "http://freegeoip.net/json/";

exports.setUrl = function(u) {
    serverUrl = u;
};

exports.getUrl = function() {
    return serverUrl;
};

exports.maxLatency = 3000;

exports.getLocation = function(ip, callback) {
      if(typeof callback === 'function') {
      // Callback based
      request.get({
          url: serverUrl + ip,
          json: true,
          timeout: exports.maxLatency,
      }, function(err, r, loc) {
          if (err) {
              return callback(err);
          }
          if (r.statusCode != 200) {
              return callback("Likely throttled");
          }
          return callback(null, loc);
      });
    } else {
      // Promises based
      return new Promise(function(resolve,reject) {
        request.get({
            url: serverUrl + ip,
            json: true,
            timeout: exports.maxLatency,
        }, function(err, r, loc) {
            if (err) {
                reject(err);
            }
            if (r.statusCode != 200) {
                reject("Likely throttled");
            } else {
              resolve(loc);
            }
        });
      });
    }
};
