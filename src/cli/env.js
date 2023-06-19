const parseEnv = () => {
    // Write your code here
    for (let [ envVarKey, envVarValue ] of Object.entries(process.env)) {
        if (envVarKey.startsWith('RSS_')) {
            console.log(`${envVarKey}=${envVarValue}`);
        }
    }
};

parseEnv();