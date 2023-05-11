export class Termek {
  #adat;
  #divElem;
  #buttonElem;

  constructor(adat, szuloElem) {
    this.#adat = adat;
    szuloElem.append(`
      <div class="divElem">
        <img src="css/kepek/${this.#adat.kep}" alt="kep">
        <h2 class="pElem">${this.#adat.nev}</h2>
        <p class="pElem">${this.#adat.fajta}</p>
        <p class="pElem">${this.#adat.kor}</p>
        <button>Kedvencekhez</button>
      </div>
    `);
    this.#divElem = szuloElem.children(".divElem:last-child");
    this.#buttonElem = this.#divElem.children("buttton");

    this.#divElem.on("click", () => {
      this.esemenyTrigger();
    });
  }

  getAdat() {
    return this.#adat;
  }

  esemenyTrigger() {
    const esemeny = new CustomEvent("elemKattintas", { detail: this });
    window.dispatchEvent(esemeny);
  }
}
