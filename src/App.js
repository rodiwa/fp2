import React from 'react';
import './App.css';
import FormThingie from './components/FormThingie'

import { connect } from 'react-redux';
import { initDBAction } from './actions'

// test data only
import database from './data/database.json'

// the view
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUid: {  },
      database: database,
      dbError: false
    }
  }

  componentDidMount() {
    this.firebase = global.firebase
    this.firebaseui = global.firebaseui
    this.ui = new this.firebaseui.auth.AuthUI(this.firebase.auth());

    this.initialiseSignIn()
    this.handleAuthStateChange()
    this.updateDbToStore()
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
      } else {  
       currentUid = null;
       this.handleUpdateCurrentUser()
       console.log("no user signed in");
      }  
     });
  }

  updateDbToStore() {
    this.props.initDBAction(database)
  }

  getDataFromFbRealtimeDB(uid) {
    const db = this.firebase.database()
    return db.ref(`/data/`).once('value')
      .then((snapshot) => {
        console.log(snapshot.val())
        this.setState({
          database: snapshot.val()
        })
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
      })
      this.initialiseSignIn()
    }).catch(function(error) {
      console.error('Error when logging out user')
      console.error(error)
    });
  }

  render() {
    const { currentUid, database } = this.state
    return (
      <div className="App">
        <header className="app-header">
          { currentUid && <input type="button" onClick={() => this.handleLogoutUser()} value="Logout"></input> }
        </header>
        { !currentUid && <div id="firebaseui-auth-container"></div> }
        { database && (
          <div>
            <FormThingie database={this.state.database} ></FormThingie>
          </div>
        ) }
      </div>
    );
  }
}

// the container

const mapStateToProps = (state) => {
  return {
    database: state.database
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initDBAction: (database) => { dispatch(initDBAction(database)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
