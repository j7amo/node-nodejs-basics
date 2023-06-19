import { exec } from 'child_process';

const spawnChildProcess = async (...args) => {
    // Write your code here
    const childProcess = exec(`node ./files/script.js ${args.join(' ')}`, (err, stdout, stdin) => {
        if (err) {
            console.log(`Error: ${err}`);
        }
    });

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
await spawnChildProcess(1, 2, 3);
