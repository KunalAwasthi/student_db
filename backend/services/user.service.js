const fs = require('fs');

let getAllUsers = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(process.env.USER_DB, 'utf8', (err, data) => {
            if(err) {
                reject(err);
            }
            resolve(JSON.parse(data));
        });
    });
}

let getUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
        fs.readFile(process.env.USER_DB, 'utf8', (err, data) => {
            if(err) {
                reject(err);
            }
            let users = JSON.parse(data), 
            user = users.find((user) => user.email === email);
            resolve(user);
        });
    });
}

module.exports = {getAllUsers, getUserByEmail};