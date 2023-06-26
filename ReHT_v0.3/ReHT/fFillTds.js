/**
 * This functions returns the content of each cell.
 * @param {array} aArray 
 * @param {element} eCol 
 * @param {element} eRow 
 * @param {number} iNum 
 * @returns {element}
 */
  function fCellContent(aArray, iNum) {/* It doesn't work! */
    return aArray[iNum] ? `<h2>${aArray[iNum].name}</h2>` : '';
  }
/**
 * Fill the inner cell with the data from the provided array.
 * @param {array} aArray
 * @param {array} aNumTds
 */
 export function fillTds(aArray, aNumTds) {
    for (let iNum = 0; iNum < aNumTds.length; iNum++) {
      const element = aNumTds[iNum];
      element.innerHTML = fCellContent(aArray, iNum);
    }
  }
  
  //eof