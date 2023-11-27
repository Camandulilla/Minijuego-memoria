import { Carta, Tablero } from "./modelo";

export const barajarCartas = (cartas: Carta[]): Carta[] => {
  cartas.sort(() => Math.random() - 0.5);
  return cartas;
};

/*
    Una carta se puede voltear si no está encontrada y no está ya volteada, o no hay dos cartas ya volteadas
  */
export const sePuedeVoltearLaCarta = (
  tablero: Tablero,
  indice: number
): boolean => {
  const carta = tablero.cartas[indice];

  if (!carta.encontrada) {
    if (
      tablero.indiceCartaVolteadaA === undefined ||
      tablero.indiceCartaVolteadaB === undefined
    ) {
      return true;
    }
  }
  return false;
};

export const voltearLaCarta = (tablero: Tablero, indice: number): void => {
  if (sePuedeVoltearLaCarta(tablero, indice)) {
    if (tablero.indiceCartaVolteadaA === undefined) {
      tablero.indiceCartaVolteadaA = indice;
    } else {
      if (tablero.indiceCartaVolteadaB === undefined) {
        tablero.indiceCartaVolteadaB = indice;
      }
    }
  }
};

/*
    Dos cartas son pareja si en el array de tablero de cada una tienen el mismo id
  */
export const sonPareja = (tablero: Tablero): boolean => {
  const idA: number = tablero.cartas[tablero.indiceCartaVolteadaA!].idFoto;
  const idB: number = tablero.cartas[tablero.indiceCartaVolteadaB!].idFoto;

  return idA === idB;
};

/*
    Aquí asumimos ya que son pareja, lo que hacemos es marcarlas como encontradas y comprobar si la partida esta completa.
  */
export const parejaEncontrada = (tablero: Tablero): void => {
  tablero.cartas[tablero.indiceCartaVolteadaA!].encontrada = true;
  tablero.cartas[tablero.indiceCartaVolteadaB!].encontrada = true;
};

/*
    Esto lo podemos comprobar o bien utilizando every, o bien utilizando un contador (cartasEncontradas)
  */
export const esPartidaCompleta = (tablero: Tablero): boolean => {
  return tablero.cartas.every((carta) => carta.encontrada);
};

/*
  Iniciar partida
  */
export const iniciaPartida = (tablero: Tablero): void => {
  tablero.estadoPartida = "CeroCartasLevantadas";
};

export const resetearTablero = (tablero: Tablero): void => {
  tablero.cartas.forEach((c) => (c.encontrada = false));
  tablero.estadoPartida = "CeroCartasLevantadas";
};
