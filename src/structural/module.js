class Session {
  user;

  login() {}
  logout() {}
  signin() {}
}

let sessionInstance;

// exporting module
export class SessionFactory {
  createSession() {
    if (!sessionInstance) {
      sessionInstance = new Session();
    }
    return sessionInstance;
  }
}

// exporting default module
export default Session;

// importing modules
// import Session, { SessionFactory } from "[file pass]";
