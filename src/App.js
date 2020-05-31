import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUid: null,
      isLoaded: null
    }

    this.handleUpdateCurrentUser = this.handleUpdateCurrentUser.bind(this)
  }
  componentDidMount() {
    this.firebase = global.firebase
    this.firebaseui = global.firebaseui

    const ui = new this.firebaseui.auth.AuthUI(this.firebase.auth());

    const uiConfig = {
      signInOptions: [
        // List of OAuth providers supported.
        this.firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ],
      'signInFlow': 'popup'
    }

    ui.start('#firebaseui-auth-container', uiConfig);

    let { currentUid } = this.state

    this.firebase.auth().onAuthStateChanged((user) => {
      if (user && user.uid !== currentUid) {
       console.log(user)
       this.handleUpdateCurrentUser(this.createUser(user))
       this.setIsLoaded(true)
      } else {  
       currentUid = null;
       this.handleUpdateCurrentUser()
       console.log("no user signed in");  
      }  
     });  
  }

  setIsLoaded(isLoaded = false) {
    this.setState({
      isLoaded
    })
  }

  createUser(user) {
    return {
      displayName: user.displayName,
      uid: user.uid
    }
  }

  handleUpdateCurrentUser(currentUid = null) {
    this.setState({ currentUid })
  }

  render() {
    const { currentUid, isLoaded } = this.state
    return (
      <div className="App">
        <header className="app-header">
          Header
        </header>
        { (!isLoaded || !currentUid) && (
          <div>
            <span>Authenticating...</span>
          </div>
        ) }
        { (!currentUid && !isLoaded) && (
          <div id="firebaseui-auth-container"></div>
        ) }
        { (currentUid && isLoaded) && (
          <div>
            logged in
          </div>
        ) }
      </div>
    );
  }
}

export default App;
