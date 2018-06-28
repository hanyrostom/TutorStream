import React from 'react'
import ReactDOM from 'react-dom'
import StudentView from './components/student/StudentView.jsx'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isAunthenticated: false
        }
    }
    render() {
        return (
        <BrowserRouter> 

            <Switch>
              <Route exact path = "/" render={(props) => {
                  return (<div>
                      <Login {...props}/>
                      <Signup {...props}/>
                  </div>);
              }}
              >
              </Route>
              <Route exact path = "/student" component={StudentView}></Route>
            </Switch>
        </BrowserRouter>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('app'))