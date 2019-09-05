const Snoowrap = require('snoowrap');
const { CommentStream } = require('snoostorm');

const client = new Snoowrap({
    userAgent: process.env.userAgent,
    clientId: process.env.clientId,
    clientSecret: process.env.clientSecret,
    username: process.env.userName,
    password: process.env.passWord
    // thought ya could hack my bot? too bad
});


const comments = new CommentStream(client, { subreddit: 'all', limit: 25, pollTime: 10000 });

comments.on('item', (item) => {
    if (item.body == 'https://youtu.be/dQw4w9WgXcQ') {
        item.reply("Click that link to get rick rolled. Want to check out my GitHub repo? [Click here.](https://github.com/imstupid1000/rickrollprevent)");
        console.log('rick roll alert!!!111 what am i doing ');
    } else if (item.body == 'https://www.youtube.com/watch?v=dQw4w9WgXcQ') {
        item.reply("Click that link to get rick rolled. Want to check out my GitHub repo? [Click here.](https://github.com/imstupid1000/rickrollprevent)")
        console.log('also rick roll alerttt')
    };
});