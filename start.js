const {exec} = require('child_process');
const path = require('path');

exec('mediamtx',{
    cwd: path.join(__dirname, './')
});

const child =  exec('http-server -p 8933',{
    cwd: path.join(__dirname, './demo')
});

child.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

child.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

exec('start http://localhost:8933')
