import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Dashboard from './components/Dashboard/Dashboard';
import Pertanyaan from './components/Pertanyaan/Pertanyaan';
import User from './components/User/User';
import TambahSoal from './components/Pertanyaan/TambahSoal/TambahSoal';
import TambahUser from './components/User/TambahUser/TambahUser';
import Sidebar from './components/Sidebar/Sidebar';

class App extends Component {
  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <Route path="/" exact component={SignUp} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/Pertanyaan" component={Pertanyaan} />
          <Route path="/User" component={User} />
          <Route path="/TambahSoal" component={TambahSoal} />
          <Route path="/TambahUser" component={TambahUser} />
          <Route path="/Sidebar" component={Sidebar} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
