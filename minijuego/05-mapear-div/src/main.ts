document.addEventListener("DOMContentLoaded", () => {
  interface InfoCarta {
    idFoto: number;
    imagen: string;
  }

  const barajarCartas = <T>(array: T[]) => {
    array.sort(() => Math.random() - 0.5);
  };

  const arrayImagenes: InfoCarta[] = [
    {
      idFoto: 1,
      imagen:
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png",
    },
    {
      idFoto: 2,
      imagen:
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png",
    },
    {
      idFoto: 3,
      imagen:
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png",
    },
    {
      idFoto: 4,
      imagen:
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png",
    },
    {
      idFoto: 5,
      imagen:
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/3.png",
    },
    {
      idFoto: 6,
      imagen:
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/3.png",
    },
  ];

  let primeraImagen: HTMLImageElement | null = null;

  const comprobarImagenes = (
    div: HTMLDivElement,
    img: HTMLImageElement,
    indice: number
  ) => {
    div.addEventListener("click", () => {
      if (img.classList.contains("volteado")) {
        img.src = arrayImagenes[indice - 1].imagen;

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

  barajarCartas(arrayImagenes);

  const divContenedores = document.getElementsByClassName("contenedor");

  for (let i = 0; i < divContenedores.length; i++) {
    const divContenedor = divContenedores[i] as HTMLDivElement;

    const imagen = divContenedor.querySelector("img");

    const valorIndice: string | undefined = divContenedor.dataset.indice;

    if (valorIndice !== undefined && imagen instanceof HTMLImageElement) {
      comprobarImagenes(divContenedor, imagen, parseInt(valorIndice));
    }
  }
});
