import React, { Component } from 'react';
import AddStudent from "./AddStudent";
import StudentList from "./StudentList";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class StudentHome extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data:[],
        };
        this.loadData();
    }

    loadData=()=>{
        fetch('/list')
            .then(data=>data.json())
            .then(response=>this.setState({data:response}));
    };


    render(){
        return(
            <div>
                <Router>
                    <Link to="/add">Add Student</Link>
                    <StudentList array={this.state.data}/>
                    <Route path="/add" component={AddStudent}/>
                    <h1>Test</h1>
                </Router>
            </div>
        );
    }
}

export default StudentHome;