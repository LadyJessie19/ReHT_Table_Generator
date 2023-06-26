# ReHT (Responsive HTML Table)

consertar esse manual. Atualizar a description
Version 3.3


```
Project Name: ReHT (Responsive HTML Table);
Description: ReHT is a table generator with the current user especifications.
Author: Jéssica Moura;
Revision: Miguel Gastelumendi;
Company: SAtelier - Software Atelier 2023;
Website: https://www.satelier.com.br/;
Contact: jessie.moura19@gmail.com;
Version: 1.0; 
Status: "At development";
Started: 2023-04-14;
Ended: 2023-05-23;
Last update: 2023-05-25;
```
## What is ReHT? 

ReHT is a table creator which allows the user to set the **number of collumns**, the **collumn width** and the **content of each cell** at the created table.

### ReHT Folder:

It contains all the JavaScript files with the necessary functions for creating the table (_fTable.js_), for populating the created cells with the content from the file _aData.js_ (_fFillTds.js_), for making the table responsive according to the window size (_fResizing.js_).

## How to use ReHT - files creation:

To use ReHT, you will require two files: an HTML file and a JavaScript file.

The HTML file serves as the container for the table, while the JavaScript file contains all the necessary information to create the table, such as the table's content, the number of columns, and even the column widths. 

The .js ensures that the *newTable* and *tableWindowResizing* functions are triggered at the appropriate times (on page load and window resize, respectively), allowing for dynamic table creation and responsiveness.

Below are the main configurations that are essential for utilizing this program.

### ```index.html```

This is the HTML project body, where the table will be placed.

#### *Script*:

The script tag is used to load a JavaScript file named "main.js" as a module, and the defer attribute ensures that it is executed at an appropriate time during the page loading process.

```<script type="module" src="main.js" defer></script>```

#### *Style*:

A style tag can be used for demostration purposes.

```
<style>
    table {
        padding: 1%;
        text-align: center;
        border-collapse: collapse;
    }
    td {
        border: 1px solid black;
        padding: 8px;
    }
</style>
```

#### *Div "ar-tblParent"*:

This div is where the table will be placed with the specifications from the current ReHT user. In the _main.js_ file, the constant _eElementId_ has the value _"ar-tblParent"_ as a string, so that the table can be dynamically rendered in the _index.html_ file.

```<div id="ar-tblParent"></div>```

---

### ```main.js```

 This javascript file is controling the table and the data that is beign used within the table. Along with the html file, this file is perfoming the DOM manipulation with the demostration form.

### *Import Section:*

These import statements are pulling in specific functions or variables from different JavaScript files. It allows the current file to access and use the functionality defined in those files.

* ``import { newTable } from "./ReHT/fTable.js"`` 
This line imports the named export newTable from the file fTable.js located in the ./ReHT directory. The newTable function is responsible for creating and rendering the table based on the provided data.

* ``import { tableWindowResizing } from "./ReHT/fResizing.js"`` 
This line imports the named export tableWindowResizing from the file fResizing.js located in the ./ReHT directory. The tableWindowResizing function is responsible for making the table responsive according to the window size.

### *Variables Section*:

This piece code sets up variables to create a table using the _newTable_ function. 

* `iColumns` represents the number of columns in the table. It should be replaced with the actual number of columns you want to have in the table.

* `iWidth` represents the width of the columns in pixels. It should be replaced with the desired width for the columns, specified as a number without the "px" unit.

* `eElementId` represents the ID of the HTML element that will be the parent container for the table. Should be replaced with the ID of the div element in the HTML file where you want to place the table.

* `aData` is an empty array that will hold the data to be displayed in the table. You should populate this array with the actual data you want to show in the table.

```
let iCollumns = 'the_number_of_columns_in_here';
let iWidth = 'the_columns_width_in_px_in_here';
const eElementId = "ar-tblParent";
let aData = [];
```

##### === Example for *aData* ===:

```
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
  { id: 11, name: "Cell_11" }
];
```

### *Event Listeners Section*:

This code section sets up various event listeners to handle user interactions. It handles resizing of the window, button clicks, changes in input fields, and updates to the textarea content, all of which are used to update variables and trigger functions responsible for creating, rendering, and modifying the table.

* `` window("onload") `` This code line is adding an event listener to the window's "load" event. When the page finishes loading, the _newTable_ function is called with the specified arguments. This allows the newTable function to be executed once the page is fully loaded.

```
window.addEventListener("load", () => {
    newTable(iCollumns, aCopyData, iWidth, eElementId)
})
```

* `` window("resize") `` This line adds an event listener to the window object for the "resize" event. When the window is resized, the _tableWindowResizing_ function is called. This is  responsible for handling the responsive behavior of the table when the window size changes.

```
window.addEventListener("resize", () => {
    tableWindowResizing(iCollumns, iWidth, aCopyData, eElementId)
})
```
---

#### Last Notes:

* The _main.js_ script importation must be set as a module in the _type_ atributte;

* The div where the table will be created needs to have the id set with _"ar-tblParent"_. If is needed to change, don't forget to change the const _eElementId_ value with the same string;