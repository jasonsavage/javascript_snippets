function scrollToBottom () {
    // selectors
    var $messages = $('#messages');
    var $newMessage = $messages.children('li:last-child');
    // heights
    var clientHeight = $messages.prop('clientHeight');
    var scrollTop = $messages.prop('scrollTop');
    var scrollHeight = $messages.prop('scrollHeight');
    var newMessageHeight = $newMessage.innerHeight();
    var lastMessageHeight = $newMessage.prev().innerHeight();

    if(clientHeight + scrollTop + newMessageHeight + lastMessageHeight >= scrollHeight) {
        $messages.scrollTop(scrollHeight);
    }
}
