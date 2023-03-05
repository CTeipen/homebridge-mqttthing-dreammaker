function init() {

    function encode( message ) {
        return "{\"light\":" + message + "}";
    }

    function decode( message ) {
        return JSON.parse(message).light; // no-op
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