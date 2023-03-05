function init() {

    function encode( message ) {
        return "{\"sound\":" + message + "}";
    }

    function decode( message ) {
        return JSON.parse(message).sound; // no-op
    }

    // return encode and decode functions
    return {
        encode,
        decode
    }
    
}

module.exports = {
    init
};