import { promises as fsPromises } from "fs";

const source = "./files/fileToRemove.txt";

const checkIfPathExists = async (relativePath) => {
    try {
        const stat = await fsPromises.stat(relativePath);

        return true;
    } catch (err) {
        return false;
    }
}

const remove = async () => {
    // Write your code here
    const isFileToRemoveExists = await checkIfPathExists(source);

    if (!isFileToRemoveExists) {
        throw new Error("FS operation failed");
    }

    try {
        await fsPromises.rm(source);
    } catch (err) {
        console.error(err);
    }
};

await remove();