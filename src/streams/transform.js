import { pipeline } from 'stream/promises';
import { TransformStream } from 'stream/web';

const transform = async () => {
    // Write your code here
    const transform = new TransformStream({
        transform(chunk, controller) {
            controller.enqueue(`${chunk.toString().trim().split('').reverse().join('')}\n`);
        }
    });

    try {
        await pipeline(
            process.stdin,
            transform,
            process.stdout
        );
    } catch(err) {
        console.error(err);
    }
};

await transform();