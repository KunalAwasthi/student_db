const fs = require('fs');

let getAllStudents = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(process.env.STUDENT_DB, 'utf8', (err, data) => {
            if(err) {
                reject(err);
            }
            resolve(JSON.parse(data));
        });
    });
}

let getStudentByEmail = (email) => {
    return new Promise((resolve, reject) => {
        fs.readFile(process.env.STUDENT_DB, 'utf8', (err, data) => {
            if(err) {
                reject(err);
            }
            let students = JSON.parse(data), 
            student = students.find((user) => user.email === email);
            resolve(student);
        });
    });
}