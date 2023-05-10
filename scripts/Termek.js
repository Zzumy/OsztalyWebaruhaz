export class Termek {
  #adat;
  #divElem;
  #buttonElem;

  constructor(adat, szuloElem) {
    szuloElem.append(`<div class="elem"><p></p><button></button></div>`);
    this.#divElem = $("article div:last-child");
    this.#pElem = $("article div:last-child p");
    this.#buttonElem = $("article div:last-child button");

    this.#divElem.on("click", () => {
      this.esemenyTrigger();
    });
  }

  esemenyTrigger() {
    const esemeny = new CustomEvent("elemKattintas", { detail: this });
    window.dispatchEvent(esemeny);
  }
}
