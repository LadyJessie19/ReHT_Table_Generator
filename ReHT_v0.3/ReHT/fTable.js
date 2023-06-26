import { fillTds } from "./fFillTds.js";
import { tableWidth } from "./fResizing.js";

let aNumTds = [];

/**
 * calculates how many rows the table must have to allocate the data items properly.
 * @param {number} nNumCol
 * @param {number} nNumProd
 * @returns {number}
 */
function calculateTableRows(nNumCol, nNumProd) {
  return Math.ceil(nNumProd / nNumCol);
}
/**
 * Creates an HTML table at the location where it is imported. The parameters determine the number of columns (nNumCols) and rows (nNumRows) for the table.
 * @param {string} sTable
 * @param {number} nNumCols
 * @param {array} aArray
 * @returns {HTMLElement}
 */
function createTableHTML(sTable, nNumCols, aArray) {
  const nRows = calculateTableRows(nNumCols, aArray.length);
  const eTable = document.getElementById(sTable);
  eTable.innerHTML = "";
  aNumTds = [];
  const table = document.createElement("table");
  for (let i = 0; i < nRows; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < nNumCols; j++) {
      const cell = document.createElement("td");
      aNumTds.push(cell);
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  return eTable.appendChild(table);
}
/**
 * Creates an HTML table with the specified parameters.
 * @param {number} nCols
 * @param {array} aArray
 * @param {number} nColWidth
 * @param {string} sTable
 */
export const newTable = (nCols, aArray, nColWidth, sTable) => {
  createTableHTML(sTable, nCols, aArray);
  fillTds(aArray, aNumTds);
  tableWidth(nColWidth, aNumTds);
};

//eof
