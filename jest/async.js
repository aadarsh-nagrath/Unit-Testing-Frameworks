// async.js
function fetchData(callback) {
    setTimeout(() => {
        callback('hemlo world');
    }, 1000);
}

function fetchPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('hemlo world');
        }, 1000);
    });
}

module.exports = { fetchData, fetchPromise };
