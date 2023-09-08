import { artists } from "./artists-data.js";

const columnHeaders = ["#", "song", "artist", "album", "duration", "released"];

const createTableHead = (table, data) => {
  const tableHead = table.createTHead(); // specific method of HTMLTableElement, preferable to generic createElement method
  const row = tableHead.insertRow(); // specific method of HTMLTableElement
  for (let columnHeader of columnHeaders) {
    const th = document.createElement("th");
    const text = document.createTextNode(columnHeader);
    th.appendChild(text);
    row.appendChild(th);
  }
};

const table = document.getElementById("table");
createTableHead(table, columnHeaders);

console.log(artists);
