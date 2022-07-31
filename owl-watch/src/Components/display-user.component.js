import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Display from "../pages/display.js";

export default class DisplayUser extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeClass = this.onChangeClass.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);

        this.state = {
            username: '',
            class: '',
            duration: 0,
            date: new Date(),
            users: []
        }
    }


    // TODO: fix so that the list of users is actually fetched so that it can eventually be used in dropdown menu
    // TODO EVENTUALLY: remove because the username of the current user should be automatically understood after logging in (we haven't yet implememented log in feature)
    componentDidMount() {
        /*
        this.setState({
            users: ['test user'],
            username: 'test user'
         })
        */
       
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
          })
          
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
    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        });
    }
    onChangeDate(e) {
        this.setState({
            date: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username,
            class: this.state.class,
            duration: this.state.duration,
            date: this.state.date
        };

        console.log(user);

        // TODO set up a proper update_classes post request
        /*
        axios.post('http://localhost:3002/users/add', user)
            .then(res => console.log(res.data));
        */

        window.location = '/display';
    }

    //TODO EVENTUALLY: once log in is configured, class should be a dropdown menu of the classes that student is enrolled in
    //TODO EVENTUALLY: add stopwatch feature as well
    render() {
        return (
            <div>
                <h3>Create New Work Log</h3>
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
                    </div>
                    <div className="form-group">
                        <label>Class: </label>
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
                        <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                    </div>
                </form>
                <div>
                    <Display />
                </div>
            </div>
        )
    }
}