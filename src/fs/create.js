import { promises as fsPromises } from 'fs';

const checkIfFileAlreadyExists = async (relativeFilePath) => {
    try {
        // Check the file existence
        const stat = await fsPromises.stat(relativeFilePath);

        return true;
    } catch (err) {
        // We'll end up here if the file does not exist
        return false;
    }
}

const create = async () => {
    // Write your code here
    const isFileAlreadyExists = await checkIfFileAlreadyExists("./files/fresh.txt");

    if (isFileAlreadyExists) {
        // If the file already exists we want to throw an error
        throw new Error("FS operation failed");
    }

    await fsPromises.writeFile("./files/fresh.txt", "I am fresh and young");
};

await create();