function init() {

    function encodePower( message ) {
        return "{\"power\":" + message + "}";
    }

    function decodePower( message ) {
        return JSON.parse(message).power; // no-op
    }

    function encodeSpeed( message ) {
        if(message > 1) {
            return "{\"speed\":" + message + "}";
        }
        return message; // no-op
    }

    function decodeSpeed( message ) {
        return JSON.parse(message).speed; // no-op
    }

    // return encode and decode functions
    return {
        properties: {
            on: {
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