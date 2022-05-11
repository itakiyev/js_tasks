/**
 * Специальный синтаксис для работы с промисами, который называется «async/await».
 */

const delay = ms => {
    return new Promise((r) => setTimeout(() => r(), ms))
}

// delay(2000).then(() => console.log('2 sec')) 

// Получаем данные с сервера
const url = 'https://jsonplaceholder.typicode.com/todos';

// const fetchTodos = () => {
//     console.log('Fetch todo started...')
//     return delay(2000).then(() => {
//         // fetch(url).then(response => response.json());
//         return fetch(url)
//     }).then(response => response.json());
// }

// fetchTodos()
//     .then(data => console.log('Data: ', data))

//--------------------------
// Улучшаем с  async...await

// async function fetchAsyncTodos()
const fetchAsyncTodos = async () => {
    try {
        await delay(2000);
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err)
    } finally {

    }

}

const data = fetchAsyncTodos().then(data =>  resolve(data));
console.log(data)