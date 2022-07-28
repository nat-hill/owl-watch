import React, { Component } from 'react';
//import DatePicker from 'react-datepicker';
import axios from 'axios';
//import "react-datepicker/dist/react"

export default class CreateProject extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      ID:'',
      username: '',
      password: '',
      gradeyear:'',
      date: new Date(),
      
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    }

    console.log(user);

    axios.post('http://localhost:3002/users/updateclass/:id', user)
      .then(res => console.log(res.data));

    this.setState({
      username: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Since we know know ID, want to change any projects? </h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}





//   constructor(props) {
//     super(props);

//     this.onChangeUsername = this.onChangeUsername.bind(this);
//     this.onChangePassword = this.onChangePassword.bind(this);
//     this.onChangeGradeyear = this.onChangeGradeyear.bind(this);
//     //this.onChangeClasses = this.onChangeClasses.bind(this);
//     this.onChangeDate = this.onChangeDate.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);

//     this.state = {
//       username: '',
//       password: '',
//       gradeyear: '',
//       //classes: '',
//       date: new Date(),
//       users: []
//     }
//   }

//   componentDidMount() {
//     axios.get('http://localhost:3002/users/')
//       .then(response => {
//         if (response.data.length > 0) {
//           this.setState({
//             users: response.data.map(user => user.username),
//             username: response.data[0].username
//           })
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       })

//   }

//   onChangeUsername(e) {
//     this.setState({
//       username: e.target.value
//     })
//   }

//   onChangePassword(e) {
//     this.setState({
//        password: e.target.value
//     })
//   }

//   onChangeGradeyear(e) {
//     this.setState({
//       gradeyear: e.target.value
//     })
//   }

//   onChangeDate(date) {
//     this.setState({
//       date: date
//     })
//   }

//   onSubmit(e) {
//     e.preventDefault();

//     const user = {
//       username: this.state.username,
//       password: this.state.password,
//       gradeyear: this.state.gradeyear,
//       date: this.state.date
//     }

//     console.log(user);

//     axios.post('http://localhost:3002/users/add', user)
//       .then(res => console.log(res.data));

//     window.location = '/';
//   }

//   render() {
//     return (
//     <div>
//       <h3>Create New User</h3>
//       <form onSubmit={this.onSubmit}>
//         <div className="form-group"> 
//           <label>Username: </label>
//           <select ref="userInput"
//               required
//               value={this.state.username}
//               onChange={this.onChangeUsername}>
//               {
//                 this.state.users.map(function(user) {
//                   return <option 
//                     key={user}
//                     value={user}>{user}
//                     </option>;
//                 })
//               }
//           </select>
//         </div>
//         <div className="form-group"> 
//           <label>password: </label>
//           <input  type="text"
//               required
//               className="form-control"
//               value={this.state.password}
//               onChange={this.onChangePassword}
//               />
//         </div>
//         <div className="form-group">
//           <label> Gradeyear: </label>
//           <input 
//               type="text" 
//               className="form-control"
//               value={this.state.gradeyear}
//               onChange={this.onChangeGradeyear}
//               />
//         </div>
//         <div className="form-group">
//           <label>Date: </label>
//           <div>
//             <DatePicker
//               selected={this.state.date}
//               onChange={this.onChangeDate}
//             />
//           </div>
//         </div>

//         <div className="form-group">
//           <input type="submit" value="Create User" className="btn btn-primary" />
//         </div>
//       </form>
//     </div>
//     )
//   }
// }