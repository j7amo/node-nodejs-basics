import { promises as fsPromises } from "fs";

const source = "./files/fileToRead.txt";

const checkIfPathExists = async (relativePath) => {
    try {
        const stat = await fsPromises.stat(relativePath);

        return true;
    } catch (err) {
        return false;
    }
}

const read = async () => {
    // Write your code here
    const isFileToReadExists = await checkIfPathExists(source);

    if (!isFileToReadExists) {
        throw new Error("FS operation failed");
    }

    try {
        const fileContent = await fsPromises.readFile(source, { encoding: 'utf8' });
        console.log(fileContent);
    } catch(err) {
        console.error(err);
    }
};

await read();