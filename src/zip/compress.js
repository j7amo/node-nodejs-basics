import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

const compress = async () => {
    // Write your code here
    try {
        await pipeline(
            createReadStream('./files/fileToCompress.txt'),
            createGzip(),
            createWriteStream('./files/archive.gz')
        );
    } catch(err) {
        console.error(err);
    }
};

await compress();