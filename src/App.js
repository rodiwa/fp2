import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUid: null,
      isLoaded: null,
      database: null,
      dbError: false
    }
  }

  componentDidMount() {
    this.firebase = global.firebase
    this.firebaseui = global.firebaseui
    this.ui = new this.firebaseui.auth.AuthUI(this.firebase.auth());

    this.initialiseSignIn()
    this.handleAuthStateChange()
  }

  initialiseSignIn() {
    const uiConfig = {
      signInOptions: [
        this.firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ],
      'signInFlow': 'popup'
    }

    this.ui.start('#firebaseui-auth-container', uiConfig);
  }

  handleAuthStateChange() {
    let { currentUid } = this.state
    this.firebase.auth().onAuthStateChanged((user) => {
      if (user && user.uid !== currentUid) {
       this.handleUpdateCurrentUser(this.createUser(user))
       this.getDataFromFbRealtimeDB(user.uid)
       this.setIsLoaded(true)
      } else {  
       currentUid = null;
       this.handleUpdateCurrentUser()
       console.log("no user signed in");
      }  
     });
  }

  getDataFromFbRealtimeDB(uid) {
    const db = this.firebase.database()
    console.log(uid)
    return db.ref(`/data/`).once('value')
      .then((snapshot) => {
        console.log(snapshot.val())
        this.setState({
          database: snapshot.val()
        })
    })
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

  handleLogoutUser() {
    this.firebase.auth().signOut().then(() => {
      this.setState({
        currentUid: null,
        database: null,
        isLoaded: null
      })
      this.initialiseSignIn()
    }).catch(function(error) {
      console.error('Error when logging out user')
      console.error(error)
    });
  }

  render() {
    const { currentUid, isLoaded, database } = this.state
    return (
      <div className="App">
        <header className="app-header">
          { currentUid && <input type="button" onClick={() => this.handleLogoutUser()} value="Logout"></input> }
        </header>
        { !currentUid && (
          <div id="firebaseui-auth-container"></div>
        ) }
        { (currentUid && isLoaded) && (
          <div>
            logged in
          </div>
        ) }

        { database && (
          <div>
            <span>database is loaded</span>
          </div>
        )
          
        }
      </div>
    );
  }
}

export default App;
