function tablaDeMultiplicar() {
    console.log("Tabla de multiplicar");
    console.log("--------------------");

    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} * ${j} = ${i * j}`);
        }
        console.log("--------------------");
    }
}

tablaDeMultiplicar();
console.log("Fin de la tabla de multiplicacion");