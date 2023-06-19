import { promises as fsPromises } from "fs";

const source = "./files";

const checkIfPathExists = async (relativePath) => {
    try {
        const stat = await fsPromises.stat(relativePath);

        return true;
    } catch (err) {
        return false;
    }
}

const list = async () => {
    // Write your code here
    const isSourceFolderExists = await checkIfPathExists(source);

    if (!isSourceFolderExists) {
        throw new Error("FS operation failed");
    }

    try {
        const fileNames = await fsPromises.readdir(source);

        for (let fileName of fileNames) {
            console.log(fileName);
        }
    } catch (err) {
        console.error(err);
    }
};

await list();