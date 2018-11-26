let sumarLento = (numero) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(numero + 1), 800);
        // puedo usar reject en vez de resolve para forzar el fallo
    });
}

let sumarRapido = (numero) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject("error en sumar rapido"), 900);
    });
}

// si hay un error en la funcion que termina primero la ejecucion se detiene
// me devuelve la respuesta mas rapida entre las promesas
Promise.race([sumarLento(5), sumarRapido(10)])
    .then(res => {
        console.log(res)
    })
    .catch(console.log)