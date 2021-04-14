// const divideNumbers = (response) => {
//     response.map(resp => {
//         if (resp.length === 4) {
//             resp /
//         }
//     })
// }

const promiseArray = () => {
    let myArray = [];
    for (let i = 0; i < 10; i += 1){
        myArray.push((Math.floor(Math.random() * 51)** 2))
    }
    let sumArray = myArray.reduce((acc, curr) => acc + curr, 0);
    const promise = new Promise((resolve, reject) => {
        if ( sumArray < 8000) {
            resolve(myArray);
        } else {
            reject(sumArray);
        }
    }).then(() => console.log('Promise resolvida')).catch((error) => console.log(`Promise rejeitada`));
}
promiseArray()