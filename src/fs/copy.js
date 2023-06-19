import { promises as fsPromises } from "fs";

const checkIfPathAlreadyExists = async (relativePath) => {
    try {
        const stat = await fsPromises.stat(relativePath);

        return true;
    } catch (err) {
        return false;
    }
}

const copy = async () => {
    // Write your code here
    const isSourceFolderExists = await checkIfPathAlreadyExists("./files");
    const isDestinationFolderExists = await checkIfPathAlreadyExists("./files_copy");

    if (!isSourceFolderExists || isDestinationFolderExists) {
        throw new Error("FS operation failed");
    }

    try {
        await fsPromises.cp("./files", "./files_copy", { recursive: true });
    } catch (err) {
        console.error(err);
    }
};

await copy();
