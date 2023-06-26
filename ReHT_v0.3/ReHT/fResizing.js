import { newTable } from "./fTable.js";

/**
 * This function controls the cell size in the created table.
 * @param {number} nColWidth
 * @param {array} aNumTds
 */
export const tableWidth = (nColWidth, aNumTds) => {
    for (let iNum = 0; iNum < aNumTds.length; iNum++) {
      const element = aNumTds[iNum];
      element.style.width = `${nColWidth}px`;
    }
  };
  /**
   * This function allows the table's columns to keep up with the window size.
   * @param {number} iCol
   * @param {number} numWidth
   * @param {number} numTdWidth
   * @param {number} numTblWidth
   * @returns {number}
   */
  function tableWindowControl(iCol, numWidth, numTdWidth, numTblWidth) {
    const iFirst = numTblWidth - numTdWidth;
    const iSecond = numTblWidth - numTdWidth * 2;
    const iThird = numTblWidth - numTdWidth * 3;
    let numCols;
    if (numWidth >= numTblWidth) {
      numCols = iCol;
    } else if (numWidth < numTblWidth && numWidth > iFirst) {
      numCols = iCol - 1;
    } else if (numWidth < iFirst && numWidth > iSecond) {
      numCols = iCol - 2;
    } else if (numWidth < iSecond && numWidth > iThird) {
      numCols = iCol - 3;
    } else if (numWidth < iThird) {
      numCols = iCol - 4;
    }
    return numCols;
  }
  /**
   * makes it possible to the table to get along with the window width.
   * @param {number} iCol 
   * @param {number} nColWidth 
   * @param {array} aArray 
   * @param {string} sTable 
   */
  export const tableWindowResizing = (iCol, nColWidth, aArray, sTable) => {
    const numWidth = window.innerWidth;
    const numTblWidth = iCol * nColWidth + 100;
    const iCols = tableWindowControl(iCol, numWidth, nColWidth, numTblWidth);
    newTable(iCols, aArray, nColWidth, sTable);
  };

  //eof