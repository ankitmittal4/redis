const client = require('./client');

async function init() {
    await client.lpush('messages', '44');
    await client.lpush('messages', '512');
    const res = await client.lpop('messages');
    console.log('res: ', res);
}

init();
