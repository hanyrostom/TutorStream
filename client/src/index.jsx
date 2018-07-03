import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { Redirect } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

/* Import Components */

import Login from './components/Login.jsx';
import Classroom from './components/Classroom.jsx';
import Sessions from './components/Sessions.jsx';
import Settings from './components/Settings.jsx';
import TestList from './components/TestList.jsx';
import TutorRegistration from './components/TutorRegistration.jsx';
import TutorReview from './components/TutorReview.jsx';
import SecretRoute from './SecretRoute.jsx';
import Home from './components/Home.jsx';
import StudentView from './components/StudentView.jsx';
import TestProfile from './components/TestProfile.jsx';
import TutorProfile from './components/TutorProfile.jsx';

/* Import Services */

import AuthService from './Auth/AuthService.js';
import AuthStatus from './Auth/AuthStatus.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id : null,
      tests: [],
      tutors: []
    };
    this.getID = this.getID.bind(this);
    this.getAllTests = this.getAllTests.bind(this);
    this.getTutors = this.getTutors.bind(this);
    this.getSelectTutors = this.getSelectTutors.bind(this);
  }

  getID (id) {
    this.setState({
      id : id
    })
  }

  getAllTests () {
    axios.get('/tests')
    .then(({data}) => {
      this.setState({
        tests : data
      });
    })
    .catch((err) => {
      console.error(err);
    })
  }

  getTutors () {
    axios.get('/tutors')
    .then(({data}) => {
      this.setState({
        tutors: data
      });
    })
    .catch((err) => {
      console.error('There was an error getting all the tutors: ', err);
    });
  }

  getSelectTutors() {
    axios.get('/tutors/selectTutors',{
      params : {
        test_id : id
      }
    })
    .then(({data}) => {
      this.setState({
        tutors : data
      });
    })
    .catch((err) => {
      console.error(err);
    })
  }

  componentDidMount() {
    this.getTutors();
    this.getAllTests();
  }

  render() {
    return (
      <div>
        <Navbar style={{ fontSize: `130%` }}>
          <Nav>
            <LinkContainer to={"/"}>
              <NavItem>Home</NavItem>
            </LinkContainer>
            <LinkContainer to={"/findTutor"}>
              <NavItem>Find A Tutor</NavItem>
            </LinkContainer>
            <LinkContainer to={`/sessions/${this.state.id}`}>
              <NavItem>All Sessions</NavItem>
            </LinkContainer>
            <LinkContainer to="/classroom">
              <NavItem>Classroom</NavItem>
            </LinkContainer>
            <LinkContainer to="/tutor">
              <NavItem>Become a Tutor</NavItem>
            </LinkContainer>
            <LinkContainer to="/settings">
              <NavItem>Settings</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar>

        
        <AuthStatus />
        
        <Route exact path='/' render={(routerProps) => (<Home {...routerProps} id={this.state.id} />)}></Route>
        <Route path='/login' render={(routerProps) => (<Login className='login' tests={this.state.tests} {...routerProps} id={this.state.id} getID={this.getID}/>)}></Route>
        <Route path='/tutors/:id' render={(routerProps) => (<TutorProfile {...routerProps} id={this.state.id}/>)}></Route>
        <Route path='/tests/:id' render={(routerProps) => (<TestProfile {...routerProps} id={this.state.id}/>)}></Route>
        <SecretRoute path='/findTutor' render={(routerProps) => (<StudentView {...routerProps} tests={this.state.tests} id={this.state.id}/>)}></SecretRoute>
        <SecretRoute path='/sessions/:id' render={(routerProps) => (<Sessions {...routerProps} id={this.state.id}/>)}></SecretRoute>
        <SecretRoute path='/classroom' render={(routerProps) => (<Classroom {...routerProps} setTestID={this.setTestID} id={this.state.id}/>)}></SecretRoute>
        <SecretRoute path='/tutor' render={(routerProps) => (<TutorRegistration {...routerProps} setTestID={this.setTestID} id={this.state.id}/>)}></SecretRoute>
        <SecretRoute path='/settings' render={(routerProps) => (<Settings {...routerProps} setTestID={this.setTestID} id={this.state.id}/>)}></SecretRoute>
      </div>
    )
  }
}

ReactDOM.render(<Router><App location={location}/></Router>, document.getElementById('app'))
export default App;