const imagenAMostrar: string =
  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/6.png";

const div = document.getElementById("contenedor");

if (div && div instanceof HTMLDivElement) {
  const divImagen = document.createElement("div");
  divImagen.className = "imagen";
  div.appendChild(divImagen);

  const fondoImagen = document.createElement("div");
  fondoImagen.className = "fondo-imagen";
  divImagen.appendChild(fondoImagen);

  const imagenMuestra = document.createElement("img");
  divImagen.appendChild(imagenMuestra);
  divImagen.addEventListener("click", () => {
    imagenMuestra.classList.toggle("volteado");

    //Cambiar imagen después de que termine la animación (0.5 segundos en este caso)
    setTimeout(() => {
      if (imagenMuestra.classList.contains("volteado")) {
        imagenMuestra.src = imagenAMostrar;
      } else {
        imagenMuestra.src = imagenAMostrar;
      }
    }),
      500;
  });
}
