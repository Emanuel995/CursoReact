//funciones
const sumar = (a, b) => {
  return a + b;
};
const resultado = sumar(2, 5);
document.write("<h2>Resultado: " + resultado + "</h2>");

//operadores ternarios
const saldo = 1;
/*
if (saldo > 0) mensaje = "Tenes saldo";
else mensaje = "No tenes saldo";
*/
const mensaje = saldo > 0 ? "Tenes saldo" : "No tenes saldo";
document.write(mensaje);

//promise then catch
const p1 = new Promise((resolve, reject) => {});

p1.then(
  // Registrar el valor de la promesa cumplida
  (val) => {
    console.log("Manejar promesa cumplida (" + val + ") aquí.");
  }
).catch(
  // Registrar la razón del rechazo
  (reason) => {
    console.log("Manejar promesa rechazada (" + reason + ") aquí.");
  }
);

//fetch
/*
fetch("https://jsonplaceholder.typicode.com/users/1").then((resp) => {
  console.log(resp.json());
});
*/
//Axios
//con { data } entro diractamente al json donde esta la informacion
/*
axios.get("https://jsonplaceholder.typicode.com/users/1").then(({ data }) => {
  console.log(data);
});
*/
//async await
const peticion = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users/1"
  );
  return data;
};

const data = peticion().then(console.log);
