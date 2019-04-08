import React, { Component } from 'react';

class AddStudent extends Component{

    submitStudentData=(e)=>{
        e.preventDefault();
        fetch('/add',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    studentID: e.target.studentID.value,
                    studentName: e.target.studentName.value,
                }),
            }
            );
            // .then()
    };

    render(){
        return(
            <div>
                <form onSubmit={this.submitStudentData}>
                    <label htmlFor="studentID">Student ID:</label>
                    <input type="text" id="studentID" name="studentID"/>

                    <label htmlFor="studentName">Student ID:</label>
                    <input type="text" id="studentName" name="studentName"/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddStudent;