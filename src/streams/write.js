import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

const write = async () => {
    // Write your code here
    try {
        await pipeline(
            process.stdin,
            createWriteStream('./files/fileToWrite.txt')
        );
    } catch(err) {
        console.error(err);
    }
};

await write();