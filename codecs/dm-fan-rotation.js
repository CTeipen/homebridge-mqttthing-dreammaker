function init() {

    function encodePower( message ) {
        return "{\"roll_enable\":" + message + "}";
    }

    function decodePower( message ) {
        return JSON.parse(message).roll_enable; // no-op
    }

    function encodeSpeed( message ) {
        if(message > 1) {
            return "{\"roll_angle\":" + message + "}";
        }
        return message; // no-op
    }

    function decodeSpeed( message ) {
        return JSON.parse(message).roll_angle; // no-op
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