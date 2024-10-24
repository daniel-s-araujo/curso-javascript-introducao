console.log(`\n Trabalhando com loops`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 18;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada;

let contador = 0;
let destinoExiste = false;

while (contador < 3) {
  if (listaDeDestinos[contador] == destino) {
    destinoExiste = true;
    break;
  }

  contador += 1;
}

console.log("Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste) {
  console.log("Boa Viagem");
} else {
  console.log("Não foi possível efetuar a compra.");
}

for (let i = 0; i < 3; i++) {
  if (listaDeDestinos[i] == destino) {
    destinoExiste = true;
    break;
  }
}
