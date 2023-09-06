import { artists } from "./artists-data.js";

const generateTableHead = (table) => {
  const tableHead = table.createTHead();
};

const table = document.getElementById("table");
generateTableHead(table);

console.log(artists);

/* Full title of Fiona Apple's "When the Pawn...": "When the Pawn Hits the Conflicts He Thinks Like a King What He Knows Throws the Blows When He Goes to the Fight and He'll Win the Whole Thing 'fore He Enters the Ring There's No Body to Batter When Your Mind Is Your Might So  When You Go Solo, You Hold Your Own Hand and Remember that Depth  Is The Greatest of Heights and If You Know Where You Stand, Then You Know Where to Land and If You Fall It Won't Matter, Cuz You'll Know that You're Right" */
