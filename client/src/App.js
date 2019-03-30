import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      users :[]
    }
  }
  componentDidMount(){
    axios.get('/users/users').then(users=> {
      console.log(users);
      this.setState({users:users.data})})
  }
  render() {
    const users=  this.state.users ?this.state.users.map(user=>{
      return <p key={user.id}>{user.name}</p>
    }):null
    return (
      <div>
       {users}
      </div>
    );
  }
}

export default App;
