var gear = require("../../gearbox.js");
var cmd = 'say';

var init = function (message,userDB,DB) {

    if (message.author.id != '88120564400553984') return message.reply('Only my master can send me direct orders. now begone!');

 // message.delete()
 message.channel.send("Meow!")

}
 module.exports = {
    pub:true,
    cmd: cmd,
    perms: 3,
    init: init,
    cat: 'misc'
};