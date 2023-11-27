document.addEventListener("DOMContentLoaded", () => {
  const img1: string =
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/6.png";
  const img2: string =
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png";

  let primeraImagen: HTMLImageElement | null = null;

  const comprobarImagenes = (
    div: HTMLDivElement,
    img: HTMLImageElement,
    src: string
  ) => {
    div.addEventListener("click", () => {
      if (img.classList.contains("volteado")) {
        img.src = src;
        img.classList.remove("volteado");

        if (primeraImagen === null) {
          primeraImagen = img;
        } else {
          setTimeout(() => {
            if (primeraImagen?.src !== img.src) {
              primeraImagen?.classList.add("volteado");
              img.classList.add("volteado");
            }
            primeraImagen = null;
          }, 500);
        }
      } else {
        img.classList.add("volteado");
      }
    });
  };

  const divImagen1 = document.getElementById("div-imagen1");
  const divImagen2 = document.getElementById("div-imagen2");

  if (
    divImagen1 &&
    divImagen1 instanceof HTMLDivElement &&
    divImagen2 &&
    divImagen2 instanceof HTMLDivElement
  ) {
    const imagen1 = document.getElementById("imagen1");
    const imagen2 = document.getElementById("imagen2");
    if (
      imagen1 &&
      imagen1 instanceof HTMLImageElement &&
      imagen2 &&
      imagen2 instanceof HTMLImageElement
    ) {
      comprobarImagenes(divImagen1, imagen1, img1);
      comprobarImagenes(divImagen2, imagen2, img2);
    }
  }
});
