const arrayImagenes: string[] = [
  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png",
  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png",
  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/3.png",
  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/4.png",
  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/5.png",
  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/6.png",
];

//Funcion para barajar el array de imágenes de forma aleatoria
const barajarImagenes = <T>(array: T[]): T[] => {
  const newArray = [...array]; // Crear una copia del array original para no modificarlo directamente

  // Utilizamos la función sort con una función de comparación aleatoria
  newArray.sort(() => Math.random() - 0.5);

  return newArray;
};

// Barajar el array de imágenes
const imagenesBarajadas = barajarImagenes(arrayImagenes);

// Ahora, imagenesBarajadas contiene las imágenes en un orden aleatorio
console.log("Array original:", arrayImagenes);
console.log("Array barajado:", imagenesBarajadas);

const numeros: number[] = [4, 2, 8, 1, 6];

const numerosOrdenados = numeros.sort((a, b) => a - b);

console.log(numerosOrdenados);
