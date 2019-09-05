const Snoowrap = require('snoowrap');
const { CommentStream } = require('snoostorm');

const client = new Snoowrap({
    userAgent: process.env.userAgent,
    clientId: process.env.clientId,
    clientSecret: process.env.clientSecret,
    username: process.env.userName,
    password: process.env.passWord
    // thought ya could hack my bot?
});


const comments = new CommentStream(client, { subreddit: 'testingground4bots', limit: 20, pollTime: 10000 });

comments.on('item', (item) => {
    if(item.body == 'u/rickrollprevent'){
    item.reply("Click that link to get rick rolled. Want to check out my GitHub repo? [Click here.](https://github.com/imstupid1000/rickrollprevent)");
    console.log('rick roll alert!!!111');
} else{
        console.log("Nobody gettin' rick rolled this time");
     }
    
});