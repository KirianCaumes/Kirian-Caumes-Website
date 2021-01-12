module.exports = {
    // Will only be available on the server side
    serverRuntimeConfig: {

    },
    // Will be available on both server and client
    publicRuntimeConfig: {
        apiUrl: process.env.REACT_APP_API_URL,
        storageKey: process.env.REACT_APP_LOCAL_STORAGE_KEY,
        appName: 'Grand Theft Bootleg'
    },
}