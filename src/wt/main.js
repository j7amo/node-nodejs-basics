import { cpus } from 'os';
import { Worker } from 'worker_threads';

const performCalculations = async () => {
    // Write your code here
    const startingNumber = 10;
    const cpusNumber = cpus().length;
    const workerPromises = [];

    for (let i = startingNumber; i < startingNumber + cpusNumber; i++) {
        const worker = new Worker('./worker.js');

        const workerPromise = new Promise((resolve, reject) => {
            worker
                .on('message', (message) => {
                    worker.terminate();
                    resolve({ status: 'resolved', data: message });
                })
                .on('error', (err) => reject({ status: 'error', data: null }));
        });

        workerPromises.push(workerPromise);
        worker.postMessage(i);
    }

    const results = await Promise.all(workerPromises);

    for (let result of results) {
        console.log(result);
    }
};

await performCalculations();