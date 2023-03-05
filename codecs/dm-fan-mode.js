function init() {

    function encodePower( message ) {
        return "{\"mode\":" + message + "}";
    }

    function decodePower( message ) {
        return JSON.parse(message).mode; // no-op
    }

    function encodeSpeed( message ) {
        if(message > 1) {
            return "{\"mode\":" + message + "}";
        }
        return message; // no-op
    }

    function decodeSpeed( message ) {
        return JSON.parse(message).mode; // no-op
    }

    // return encode and decode functions
    return {
        properties: {
            active: {
                encode: encodePower,
                decode: decodePower
            }
        },
        encode: encodeSpeed,
        decode: decodeSpeed
    }
    
}

module.exports = {
    init
};