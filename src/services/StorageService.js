const StorageService  = {
    setAuthToken (authtoken) {
        localStorage.setItem("auth_token", authtoken)
    },
    getAuthToken () {
        return localStorage.getItem("auth_token")
    },
    clearStorage () {
        localStorage.clear();
    }
}

export default StorageService;



