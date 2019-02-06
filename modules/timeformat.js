

function formatTime( timeSec ) {
    var hrs, min, sec;
    sec = Math.floor(timeSec % 60);
    min = Math.floor((timeSec / 60) % 60);
    hrs = Math.floor((timeSec / (60 * 60)) % 24);
    return {
        hour: hrs,
        minute: min,
        seconds: sec
    };
}

exports.timeFromSeconds = formatTime;