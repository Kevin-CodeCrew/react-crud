import React, { Component } from 'react';

class StudentList extends Component{
    deleteStudent=(e)=>{
        fetch('/delete',
            {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    studentID: e.target.name,
                }),
            }
        );
    };

    render(){
        const mappedArray = this.props.array.map(
            (eachElement)=>{
                return(<div>
                    <p>{eachElement.studentID} {eachElement.studentName} <a href="#" name={eachElement.studentID} onClick={this.deleteStudent}>Delete</a></p>
                </div>)
            }
        );
        return(
            <div>{mappedArray}</div>
        );
    }
}

export default StudentList;