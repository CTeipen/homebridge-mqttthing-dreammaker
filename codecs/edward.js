function init() {

    function decodeBatteryLevel( message ) {
        if(JSON.parse(message).cmd === 501) {
            return JSON.parse(message).power;
        }
        if(JSON.parse(message).cmd === 509 && JSON.parse(message).log.includes("percent=")) {
            const logText = JSON.parse(message).log;
            return logText.split("percent=")[1].split(",")[0];
        }
        return 0;
    }

    function decodCurrentTemperature( message ) {
        if(JSON.parse(message).cmd === 509 && JSON.parse(message).log.includes("temp=")) {
            const logText = JSON.parse(message).log;
            return Number.parseInt(logText.split("temp=")[1].split("\\n")[0]);
        }
        return 0;
    }

    function decodeStatusActive( message ) {
        if(JSON.parse(message).cmd === 501) {
            return !JSON.parse(message).station;
        }
        if(JSON.parse(message).cmd === 509 && JSON.parse(message).log.includes("I/waiting")) {
            return false;
        }
        return false;
    }

    function encode( message ) {
        // console.log("edward encode ", message);
        return "";
    }

    function decode( message ) {
        // console.log("edward decode ", JSON.parse(message));
        return "";
    }

    // return encode and decode functions
    return {
        properties: {
            batteryLevel: {
                decode: decodeBatteryLevel
            },
            currentTemperature: {
                decode: decodCurrentTemperature
            },
            statusActive: {
                decode: decodeStatusActive
            },
        },
        encode,
        decode
    }
    
}

module.exports = {
    init
};