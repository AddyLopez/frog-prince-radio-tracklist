import { playlist } from "./playlist-data.js";

const table = document.getElementById("table");

const createTableHead = (table) => {
  const columnHeaders = [
    "#",
    "song",
    "artist",
    "album",
    "duration",
    "released",
  ];
  const tableHead = table.createTHead(); // specific method of HTMLTableElement, preferable to generic createElement method
  const row = tableHead.insertRow(); // specific method of HTMLTableElement
  for (let columnHeader of columnHeaders) {
    const th = document.createElement("th");
    const text = document.createTextNode(columnHeader);
    th.appendChild(text);
    row.appendChild(th);
  }
};

const createTable = (table, data) => {
  for (let element of data) {
    const row = table.insertRow();
    for (let property in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[property]);
      cell.appendChild(text);
    }
  }
};

createTable(table, playlist);
createTableHead(table);

console.log(playlist);
