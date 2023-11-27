import { tablero, cartas } from "./modelo";
import {
  voltearLaCarta,
  parejaEncontrada,
  sonPareja,
  sePuedeVoltearLaCarta,
  esPartidaCompleta,
  iniciaPartida,
  resetearTablero,
  barajarCartas,
} from "./motor";

const divContenedores = document.querySelectorAll(".contenedor");
export var cartasBarajadas = barajarCartas(cartas);

let primeraImagen: HTMLImageElement | null = null;

export const comprobarImagenes = (img: HTMLImageElement, indice: number) => {
  if (img.classList.contains("volteado")) {
    switch (tablero.estadoPartida) {
      case "CeroCartasLevantadas": //se ha clickado en la primera carta
        if (sePuedeVoltearLaCarta(tablero, indice)) {
          img.src = cartasBarajadas[indice].imagen;
          img.classList.remove("volteado");
          voltearLaCarta(tablero, indice);
          primeraImagen = img;
          tablero.estadoPartida = "UnaCartaLevantada";
        }
        break;
      case "UnaCartaLevantada": //se ha clickado en una segunda carta
        if (sePuedeVoltearLaCarta(tablero, indice)) {
          img.src = cartasBarajadas[indice].imagen;
          img.classList.remove("volteado");
          voltearLaCarta(tablero, indice);
          if (sonPareja(tablero)) {
            parejaEncontrada(tablero);
            tablero.indiceCartaVolteadaA = undefined;
            tablero.indiceCartaVolteadaB = undefined;
          } else {
            setTimeout(() => {
              img.classList.add("volteado");
              primeraImagen?.classList.add("volteado");
              tablero.indiceCartaVolteadaA = undefined;
              tablero.indiceCartaVolteadaB = undefined;
            }, 500);
          }
          if (!esPartidaCompleta(tablero)) {
            tablero.estadoPartida = "CeroCartasLevantadas";
          } else {
            tablero.estadoPartida = "PartidaCompleta";
            showPopup();
          }
        }
        break;
    }
  }
};

export const crearListeners = () => {
  for (let i = 0; i < divContenedores.length; i++) {
    const divContenedor = divContenedores[i] as HTMLDivElement;

    const imagen = divContenedor.querySelector("img");

    const valorIndice: string | undefined = divContenedor.dataset.indice;

    if (valorIndice !== undefined && imagen instanceof HTMLImageElement) {
      divContenedor.addEventListener("click", () => {
        comprobarImagenes(imagen, parseInt(valorIndice) - 1);
      });
    }
  }
};

const resetearPartida = () => {
  for (let i = 0; i < divContenedores.length; i++) {
    const divContenedor = divContenedores[i] as HTMLDivElement;

    const imagen = divContenedor.querySelector("img");

    imagen?.classList.add("volteado");
    resetearTablero(tablero);
    cartasBarajadas = barajarCartas(tablero.cartas);
  }
};

export const eventoBoton = () => {
  const boton = document.getElementById("boton");
  if (boton && boton instanceof HTMLButtonElement) {
    boton.addEventListener("click", () => {
      if (tablero.estadoPartida === "PartidaCompleta") {
        resetearPartida();
        console.log(tablero.estadoPartida);
        closePopup();
      } else {
        iniciaPartida(tablero);
        cartasBarajadas = barajarCartas(tablero.cartas);
        crearListeners();
      }
    });
  }
};

/*
  POP-UP
*/

const popup = document.getElementById("popup-container");

// Función para mostrar el pop-up
const showPopup = () => {
  if (popup && popup instanceof HTMLElement) {
    popup.style.display = "block";
    popup.classList.add("popup-enter");
  }
};

// Función para cerrar el pop-up
const closePopup = () => {
  if (popup && popup instanceof HTMLElement) {
    popup.style.display = "none";
    popup.classList.remove("popup-enter");
  }
};
