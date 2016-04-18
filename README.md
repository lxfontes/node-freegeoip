freegeoip.net bindings for NodeJS.

[![Build Status](https://travis-ci.org/lxfontes/node-freegeoip.png)](https://travis-ci.org/lxfontes/node-freegeoip)

# Install

The usual

    npm install node-freegeoip


# Usage


    var freegeoip = require('node-freegeoip');

    var ip = '127.0.0.1';
    freegeoip.getLocation(ip, function(err, location) {
        console.log(location);
    });

If you concerned about latency, you can set the maximum time to wait for a response from freegeoip.net. It is set to 3000 milliseconds by default.

    freegeoip.maxLatency = 750;

# Running your own server ?

Set the default server prior queries


    var freegeoip = require('node-freegeoip');

    freegeoip.setUrl('http://myserver.info/json/');

    var ip = '127.0.0.1';
    freegeoip.getLocation(ip, function(err, location) {
      console.log(location);
    });
