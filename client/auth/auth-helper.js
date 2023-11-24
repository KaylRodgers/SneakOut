class AuthManager {

    authenticate(jwt, cb) {
      if (typeof window !== "undefined") {
        sessionStorage.setItem('jwt', JSON.stringify(jwt));
      }
      cb();
    }
  
    isAuthenticated() {
      if (typeof window === "undefined") {
        return false;
      }
      return !!sessionStorage.getItem('jwt');
    }
  }
  
  // Export the AuthManager class
  export default AuthManager;