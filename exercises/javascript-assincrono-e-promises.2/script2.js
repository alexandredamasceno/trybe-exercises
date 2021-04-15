const promiseArray = () => {
    let myArray = [];
    for (let i = 0; i < 10; i += 1){
        myArray.push((Math.floor(Math.random() * 51)** 2))
    }
    let sumArray = myArray.reduce((acc, curr) => acc + curr, 0);
    const promise = new Promise((resolve, reject) => {
        if ( sumArray < 8000) {
            resolve(sumArray);
        } else {
            reject();
        }
    }).then((response) => [2, 3, 5, 10].map(n => (response / n)))
    .then((arr) => console.log(arr.reduce((acc, curr) => acc + curr, 0)))
    .catch(() => console.log("É mais de oito mil! Essa promise deve estar quebrada!"));

    
}
promiseArray()
