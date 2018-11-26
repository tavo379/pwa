var sumarUno = (numero, callback) => {
    setTimeout(() => {
        callback(numero + 1)
    }, 800);
}

sumarUno(5, (newValue) => {
    sumarUno(newValue, (newSeconValue) => {
        console.log(newSeconValue);
    });
});