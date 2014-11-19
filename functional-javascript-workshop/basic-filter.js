function getShortMessages(messages) {
    var messages = messages.filter(function (msg) {
        return msg.message.length < 50
    })
    return messages.map(function (msg) {
        return msg.message
    })
}
module.exports = getShortMessages
