import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';

const read = async () => {
    // Write your code here
    try {
        await pipeline(
            createReadStream('./files/fileToRead.txt'),
            process.stdout
        );
    } catch (err) {
        console.error(err);
    }
};

await read();