import { Termekek } from "./Termekek.js";
import { Aszinkron } from "./Aszinkron.js";

$(function () {
  const asszinkron = new Aszinkron();
  asszinkron.adatbe("adat.json", beolvasas);
});

function beolvasas(adat) {
  console.log(adat);
  console.log(adat.adatLISTA);
  new Termekek(adat.adatLISTA);
}
