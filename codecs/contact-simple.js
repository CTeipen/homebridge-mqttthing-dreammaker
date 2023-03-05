function init() {

    function encode( message ) {
        // console.log("encode ", message);
        return "";
    }

    function decode( message ) {
        // console.log("decode ", JSON.parse(message));
        return JSON.parse(message).state;
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