
/**
 * Imitating server request
 */

// console.log('Request data...')

// setTimeout(() => {
//     console.log('Preparing data...')

//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }

//     setTimeout(() => {
//         backendData.modified = true;
//         console.log('Data recieved', backendData)
//     }, 2000)
// }, 2000)


/**
 * Example #2
 */

// const p = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('Preparing data...')
//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             status: 'working'
//         }
//         resolve(backendData)
//     }, 2000)
// })

p.then((data) => {
    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true;
            resolve(data)
        }, 2000)
    })

    p2.then(clientData => {
        console.log('Data received', clientData)
    })
})

// Improved promise then
p.then((data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true;
            // reject(data)
            resolve(data)
        }, 2000)
    })
        .then((clientData) => {
            console.log('Data received', clientData)
            clientData.fromPromise = true;
            return clientData;
        }).then(data => {
            console.log('Modified', data)
        })
        .catch(err => console.error('Error: ', err))
        .finally(() => console.log('Finally'))
})

/**
 * Example #3
 */

const sleep = ms => {
    return new Promise(resolve => setTimeout(() => {
        resolve()
    }, ms))
}

// sleep(2000).then(() => console.log('After 2 seconds'))
// sleep(3000).then(() => console.log('After 3 seconds'))

Promise.all([sleep(2000), sleep(5000)])
    .then(() => {
        console.log('All promises')
    })

Promise.race([sleep(2000), sleep(5000)])
    .then(() => {
        console.log('Race promises')
    })