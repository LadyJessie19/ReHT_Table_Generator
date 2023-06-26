/* 
Name: ReHT
date: 2023-06-01
description: Create the class ReHT.
version: v0.3
*/

/* Usar bastante desse projeto aqui */

class ReHT {
  numCols;
  dataLength;
  colWidth;
  parentId;
  aNumTds;
  cellContent;
  constructor(numCols, dataLength, colWidth, parentId, aNumTds, cellContent) {
    this.numCols = numCols;
    this.dataLength = dataLength;
    this.colWidth = colWidth;
    this.parentId = parentId;
    this.aNumTds = aNumTds;
    this.cellContent = cellContent;
  }

  integerTableRows() {
    return Math.ceil(this.dataLength / this.numCols);
  }

  createTableHTML(nCols) {
    const nRows = this.integerTableRows(nCols);
    const eTable = document.getElementById(this.parentId);
    eTable.innerHTML = "";
    this.aNumTds = [];
    const table = document.createElement("table");
    for (let i = 0; i < nRows; i++) {
      const row = document.createElement("tr");
      for (let j = 0; j < nCols; j++) {
        const cell = document.createElement("td");
        this.aNumTds.push(cell);
        row.appendChild(cell);
      }
      table.appendChild(row);
    }
    return eTable.appendChild(table);
  }

  fCellContent(iNum) {
    return this.aNumTds[iNum] ? this.cellContent : "";
  }

  fillTds() {
    for (let iNum = 0; iNum < this.dataLength; iNum++) {
      const element = this.aNumTds[iNum];
      element.innerHTML = this.fCellContent(iNum);
    }
  }

  tableWidth() {
    for (let iNum = 0; iNum < this.aNumTds.length; iNum++) {
      const element = this.aNumTds[iNum];
      element.style.width = `${this.colWidth}px`;
    }
  };

  resize() {
    const nWindowWidth = window.innerWidth;
    const nTblWidth = this.numCols * this.colWidth + 100;
    const iFirst = nTblWidth - this.colWidth;
    const iSecond = nTblWidth - this.colWidth * 2;
    const iThird = nTblWidth - this.colWidth * 3;
    let newNumCols;
    if (nWindowWidth >= nTblWidth) {
      newNumCols = this.numCols;
    } else if (nTblWidth > nWindowWidth && nWindowWidth > iFirst) {
      newNumCols = this.numCols - 1;
    } else if (iFirst > nWindowWidth && nWindowWidth > iSecond) {
      newNumCols = this.numCols - 2;
    } else if (iSecond > nWindowWidth && nWindowWidth > iThird) {
      newNumCols = this.numCols - 3;
    } else if (nWindowWidth < iThird) {
      newNumCols = this.numCols - 4;
    }
    return this.newTable(newNumCols);
  }

  newTable(nCols) {
    this.createTableHTML(nCols);
    this.fillTds();
    this.tableWidth();
  }

  create() {
    this.createTableHTML(this.numCols);
    this.fillTds();
    this.tableWidth();
  }
}

export default ReHT;

//eof
