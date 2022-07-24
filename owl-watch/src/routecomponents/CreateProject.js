import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

export default class CreateProject extends Component {
    constructor(props){
        super(props)

        this.state = {
            projectName: '',
            TimeSpent: 0


        }
    }
    onChangeProject(e){

    }
    render() {
        return(
            <div>
                <p> You are on Create Project component</p>
            </div>
        )
    }
}