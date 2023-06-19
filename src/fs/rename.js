import {promises as fsPromises} from "fs";

const source = "./files/wrongFilename.txt";
const destination = "./files/properFilename.md";

const checkIfPathAlreadyExists = async (relativePath) => {
    try {
        const stat = await fsPromises.stat(relativePath);

        return true;
    } catch (err) {
        return false;
    }
}

const rename = async () => {
    // Write your code here
    const isSourceExists = await checkIfPathAlreadyExists(source);
    const isDestinationExists = await checkIfPathAlreadyExists(destination);

    if (!isSourceExists || isDestinationExists) {
        throw new Error("FS operation failed");
    }

    try {
        await fsPromises.rename(source, destination);
    } catch (err) {
        console.error(err);
    }
};

await rename();