class MessageParser {
    constructor(actionProvider) {
        this.actionProvider = actionProvider;
    }

    parse(Message) {
        console.log(Message);
    }
}

export default MessageParser;