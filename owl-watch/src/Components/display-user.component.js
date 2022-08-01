import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Display from "../pages/display.js";
//import User from "user.model.js"



export default class DisplayUser extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.ref2 = React.createRef();

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeClass = this.onChangeClass.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeProjectName = this.onChangeProjectName.bind(this);
        this.onSubmitUser = this.onSubmitUser.bind(this)

        this.state = {
            username: '',
            class: '',
            duration: 0,
            date: new Date(),
            users: [],
            classes: [],
            projectName: ''
        }
    }


    // TODO: fix so that the list of users is actually fetched so that it can eventually be used in dropdown menu
    // TODO EVENTUALLY: remove because the username of the current user should be automatically understood after 
    // logging in (we haven't yet implememented log in feature)
    componentDidMount() {
        
       
        axios.get('http://localhost:3002/users/')
          .then(response => {
            if (response.data.length > 0) {
              this.setState({
                users: response.data.map(user => user.username),
                username: response.data[0].username
              })
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
        
    }
    onChangeClass(e) {
        this.setState({
            class: e.target.value
        });
    }
    onChangeProjectName(e) {
        this.setState({
            projectName: e.target.value
        });
    }
    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        });
    }
    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username,
            class: this.state.class,
            duration: this.state.duration,
            date: this.state.date,
            projectName: this.state.projectName
        };

        
        

            
        
        
        console.log(user);
        

        // TODO set up a proper update_classes post request
        
        //axios.post('http://localhost:3002/users/update_classes/:userid', user)
        //    .then(res => console.log(res.data));
        

        //window.location = '/display';

        this.setState({
            username: '',
            class: '',
            duration:0,
            date: ''
        })
    }

    onSubmitUser(e){
        e.preventDefault();
        

        axios.get('http://localhost:3002/users/username_classes/' + this.state.username)
        .then(res =>{
            
            if (res.data.length > 0) {
                console.log(res.data[0].className)
                this.setState({
                    classes: res.data.map(clas => clas.className),
                    class: res.data[0].className
                })
                console.log("Class" + this.state.class);
            }
        })
        .catch(err =>{
            console.log(err)
        });
    }

    
    //TODO EVENTUALLY: add stopwatch feature as well
    render() {
        return (
            <div>
                <h3>Create New Project</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <select ref={this.myRef}
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}>
                        {
                            this.state.users.map(function(user) {
                                return <option
                                    key={user}
                                    value={user}>{user}
                                    </option>;
                            })
                        }
                        </select>
                        <input type='button' value="choose user" className="btn btn-primary" onClick={this.onSubmitUser}></input>
                    </div>
                    <div className="form-group">
                        <label>Class: </label>
                        <select ref={this.ref2}
                        
                        className="form-control"
                        value={this.state.class}
                        onChange={this.onChangeClass}>
                        {
                                this.state.classes.map(function(clas) {
                                    return <option
                                        key={clas}
                                        value={clas}>{clas}
                                        </option>;
                                })

                        }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Project Name: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.onChangeClass}
                            onChange={this.onChangeClass}
                            />
                    </div>
                    <div className="form-group">
                        <label>Duration (in minutes): </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.onChangeDuration}
                            />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Project" className="btn btn-primary" />
                    </div>
                </form>
                <div>
                    <Display /> 
                </div>
            </div>
        )
    }
}