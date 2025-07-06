import fs from 'fs';

function readFileWithPromise(filepath, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, encoding, (err, content) => {
            if (err) {
                reject(err);
            } else {
                resolve(content);       // resolve method will send out the signal to execute the then function of a user.
            }
        });
    });
}

function writeFileWithPromise(filepath, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filepath, content, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        })
    })
}

function unlinkFileWithPromise(filepath) {
    return new Promise((resolve, reject) => {
        fs.unlink(filepath, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        })
    })
}

readFileWithPromise('./hello.txt', 'utf-8')
    .then(content => writeFileWithPromise('./backup.txt', content))
    .then(() => unlinkFileWithPromise('./hello.txt'))
    .catch((err) => console.log(err))
    .finally(() => console.log('Operation completed'));
