import { playlist } from "./playlist-data.js";

const table = document.getElementById("table");
const columnHeaders = ["#", "song", "artist", "album", "duration", "released"];

const createTableHead = (table, data) => {
  const tableHead = table.createTHead(); // specific method of HTMLTableElement, preferable to generic createElement method
  const row = tableHead.insertRow(); // specific method of HTMLTableElement
  for (let element of data) {
    const th = document.createElement("th");
    const text = document.createTextNode(element);
    th.appendChild(text);
    row.appendChild(th);
  }
};

/*const createTable = (table, data) => {
  let ids = Object.keys(artists);
  for (let artist in artists) {
    const row = table.insertRow();
    let cell = row.insertCell();
    let idText = document.createTextNode(ids[artist]);
    cell.appendChild(idText);
  }
};*/

createTableHead(table, columnHeaders);
//createTable(table, columnHeaders);

console.log(playlist);
