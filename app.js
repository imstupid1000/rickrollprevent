const Snoowrap = require('snoowrap');
const { CommentStream } = require('snoostorm');

const client = new Snoowrap({
    userAgent: process.env.userAgent,
    clientId: process.env.clientId,
    clientSecret: process.env.clientSecret,
    username: process.env.userName,
    password: process.env.passWord
});


const comments = new CommentStream(client, { subreddit: 'all', limit: 20, pollTime: 10000 });

comments.on('item', (item) => {
    if(item.body == 'https://youtu.be/dQw4w9WgXcQ'){
    item.reply("Click that link to get rick rolled. (I'm a bot.)");
    console.log(item.body);
} else{
        console.log('aa');
     }
    
});