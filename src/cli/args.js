const parseArgs = () => {
    // Write your code here
    for (let i = 2; i < process.argv.length; i++) {
        if (process.argv[i].startsWith("--prop")) {
            console.log(`${process.argv[i].replace("--", "")} is ${process.argv[i + 1]}`);
        }
    }
};

parseArgs();