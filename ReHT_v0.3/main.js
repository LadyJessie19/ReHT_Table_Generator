import { newTable } from "./ReHT/fTable.js"
import { tableWindowResizing } from "./ReHT/fResizing.js"

let iCollumns = 5;
let iWidth = 177;
const eElementId = "ar-tblParent";

const aData = [
    { id: 1, name: "Cell_1" },
    { id: 2, name: "Cell_2" },
    { id: 3, name: "Cell_3" },
    { id: 4, name: "Cell_4" },
    { id: 5, name: "Cell_5" },
    { id: 6, name: "Cell_6" },
    { id: 7, name: "Cell_7" },
    { id: 8, name: "Cell_8" },
    { id: 9, name: "Cell_9" },
    { id: 10, name: "Cell_10" },
    { id: 11, name: "Cell_11" },
];

window.addEventListener("load", () => {
    newTable(iCollumns, aData, iWidth, eElementId)
})
window.addEventListener("resize", () => {
    tableWindowResizing(iCollumns, iWidth, aData, eElementId)
})