var os = require('os');
var time = require('./timeformat');

function getOSinfo() {
    var type = os.type();
    if (type === 'Darwin') {
        type = 'OSX';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var timeObj = time.timeFromSeconds(uptime);
    var userInfo = os.userInfo();
    console.log('System: ', type);
    console.log('Release: ', release);
    console.log('CPU: ',cpu);
    console.log('Uptime: ', timeObj.hour + 'hrs : ', timeObj.minute + 'min : ' + timeObj.seconds + 'sec');
    console.log('Username: ', userInfo.username);
    console.log('Home dir: ', userInfo.homedir);
}

exports.print = getOSinfo;