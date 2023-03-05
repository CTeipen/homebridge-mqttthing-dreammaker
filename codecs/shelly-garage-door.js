const State = {
  OPEN: "O",
  CLOSING: "c",
  STOP_CLOSING: "S",
  CLOSED: "C",
  OPENING: "o",
  STOP_OPENING: "S"
};

function rotate (state) {
    switch(state) {
        case State.CLOSED:
            return State.OPENING;

        case State.OPENING:
            return State.STOP_OPENING;

        case State.STOP_OPENING:
            return State.CLOSING;
        
        case State.CLOSING:
            return State.STOP_CLOSING;

        case State.STOP_CLOSING:
            return State.OPENING;

        case State.OPEN:
            return State.CLOSING;
    }
}

let state = State.CLOSED;

function init(params) {

    let { config, publish } = params;

    function encodeTargetDoorState ( message ) {
        // console.log("E encodeTargetDoorState before ", message, state);
        state = rotate(state);
        // console.log("E encodeTargetDoorState after ", message, state);
        // return message;
        return "on";
    }

    function decodeTargetDoorState ( message ) {
        // console.log("D decodeTargetDoorState before", JSON.parse(message), state);
        if(JSON.parse(message) == 1) {
            state = State.OPEN;
        }
        // console.log("D decodeTargetDoorState after", JSON.parse(message), state);
        // return message;
        return state;
    }

    function encodeCurrentDoorState ( message ) {
        // console.log("encodeCurrentDoorState", message, state);
        // return message;
        return "";
    }

    function decodeCurrentDoorState ( message ) {
        // console.log("D decodeCurrentDoorState before", JSON.parse(message), state);
        // console.log(JSON.parse(message) == 1);
        if(JSON.parse(message) == 1) {
            state = State.CLOSED;
        }
        // console.log("D decodeCurrentDoorState after", JSON.parse(message), state);
        // return message;
        return state;
    }






    function encodeobstructionDetected ( message ) {
        // console.log("E encodeobstructionDetected", message, state);
        // return message;
        return "";
    }

    function decodeobstructionDetected ( message ) {
        // console.log("D decodeobstructionDetected before", message.toString(), state);
        if(JSON.parse(message) == 1) {
            state = rotate(state);
            publish("shellies/shellyswitch25-98CDAC39A044/relay/0/command", "on")
        }
        // console.log("D decodeobstructionDetected after", message.toString(), state);
        // return message;
        return "";
    }





    function defaultEncodeFunction ( message ) {
        // console.log("defaultEncodeFunction", message, state);
        // return message;
        return "";
    }
    
    function defaultDecodeFunction ( message ) {
        // console.log("defaultDecodeFunction", message, state);
        // return message;
        return "";
    }


    return {
        properties: {
            targetDoorState: {
                encode: encodeTargetDoorState,
                decode: decodeTargetDoorState
            },
            currentDoorState: {
                // encode: encodeCurrentDoorState,
                decode: decodeCurrentDoorState
            },
            obstructionDetected: {
                encode: encodeobstructionDetected,
                decode: decodeobstructionDetected
            }
        },
        encode: defaultEncodeFunction,
        decode: defaultDecodeFunction
    };
}

module.exports = {
    init
};