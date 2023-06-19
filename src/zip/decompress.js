import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

const decompress = async () => {
    // Write your code here
    try {
        await pipeline(
            createReadStream('./files/archive.gz'),
            createUnzip(),
            createWriteStream('./files/fileToCompress.txt')
        );
    } catch(err) {
        console.error(err);
    }
};

await decompress();