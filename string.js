const client = require('./client.js');

async function init() {
    // await client.set('user:4', 'Redis');
    await client.expire('user:4', 20);
    const res = await client.get('user:4');
    console.log('Result -> ', res);
}
init();
