function init() {

    function encodePower( message ) {
        if(!!message) {
            return "{\"power_delay\":30}";
        } else {
            return "{\"power_delay\":" + 0 + "}";
        }
    }

    function decodePower( message ) {
        return JSON.parse(message).power_delay > 0; // no-op
    }

    function encodeSpeed( message ) {
        return "{\"power_delay\":" + message + "}";
    }

    function decodeSpeed( message ) {
        return JSON.parse(message).power_delay; // no-op
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