function init() {

    function encode( message ) {
        return "{\"child_lock\":" + (message === "Secured" ? 1 : 0) + "}";
    }

    function decode( message ) {
        return JSON.parse(message).child_lock === 1 ? "Secured" : "Unsecured"; // no-op
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