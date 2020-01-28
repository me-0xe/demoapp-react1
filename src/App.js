import React from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

class App extends React.Component {
  state = {
    users: [],
    isLoading: false
  };

  mapUsers = (apiUsers) => {
    return apiUsers.map((user) => ({
      img: user.avatar_url,
      url: user.url,
      login: user.login
    }));
  };

  async componentDidMount() {
    this.setState({isLoading:true});
    const result = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({users: this.mapUsers(result.data), isLoading:false});
  }

  render() {
    return (
      <div className="App">
        <Navbar title="Github Finder"/>
        <Users loading={this.loading} users={this.state.users} />
      </div>
    );
  }
}

export default App;
