import { Termek } from "./Termek.js";

export class Termekek {
  #adatLista = [];
  #kedvencekLista = [];
  constructor(adatLista) {

    this.#adatLista = ["", "", "", "", "", "", "", "", "", ""];
    this.#kedvencekLista = ["", "", "", "", "", "", "", "", "", ""];

    const szuloElem = $("article");
    for (let ix = 0; ix < length(aktAllapotLista); ix++) {
      const elem = new Termek(szuloElem, ix);
    }

    $(window).on("elemKattintas", (event) => {

    });
  }
}
