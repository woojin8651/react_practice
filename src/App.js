import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Home} from './component/Home'
import {AddUser} from './component/AddUser'
import {EditUser} from './component/EditUser'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <div style ={{maxWidth:"30rem",margin:"4rem auto"}}>
            <Router>
                <h1>Nav</h1>
                <Switch>
                    <Route path="/add" component={AddUser}/>
                    <Route path="/edit/:id" component={EditUser}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
