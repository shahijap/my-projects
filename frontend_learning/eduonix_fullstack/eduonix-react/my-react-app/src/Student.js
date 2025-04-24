import React, { Fragment, useState } from "react";

const Student = () => {
    const [studentId, setStudentId] = useState("");
    const [studentName, setStudentName] = useState("");
    console.log('student');
    // interacting react and nodejs
    const submitForm = async e => {
        //to prevent a form from refreshing the page on submit
        e.preventDefault();
        try {
            const body = { studentId, studentName };
            // fetch method is used to send a request to the backend server
            await fetch('http://localhost:8080/student', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            //denotes default location for this
            window.location = '/';
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <Fragment>
            <h1>Student form</h1>
            <h2>Add a student</h2>
            <h3>Enter student id and student name: </h3>
            <form onSubmit={submitForm}>
                <div>
                    <label>Student Id:</label>
                    <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} style={{ margin: 10 }}/>
                </div>
                <div>
                    <label>Student Name:</label>
                    <input type="text" value={studentName} onChange={(e) => setStudentName(e.target.value)} style={{ margin: 10 }} />
                    <input type="submit" value="submit" />
                </div>
            </form>
        </Fragment>
    );
}
export default Student;