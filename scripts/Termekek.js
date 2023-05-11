import { Termek } from "./Termek.js";

export class Termekek {
  #adatLista = [];
  #kedvencekLista = [];

  constructor(adatLista) {
    this.#adatLista = adatLista;
    this.#kedvencekLista;
    
    const szuloElem = $("article");
    for (let ix = 0; ix < adatLista.length; ix++) {
      const termek = new Termek(adatLista[ix], szuloElem);
    }
    $(window).on("elemKattintas", (event) => {
      this.#kedvencekLista.push(event.detail);
    });
  }
}
