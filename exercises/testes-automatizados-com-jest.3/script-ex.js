function getNumber() {
    const number = Math.floor(Math.random() * 100);
    return number;
}

module.exports = { getNumber }