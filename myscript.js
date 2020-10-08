
//función que hace **

function vistaModificada(unString){
    let f=unString.substring(0, 3);
    const substitute =unString.substring(3, unString.length);
    
    let e="";
    for(let i in substitute){ e+='*';}

   return f+e;
} 

//generador de th
function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for(let key of data) {
        let th = document.createElement('th');
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}
//generador de row
function generateTableRows(table, data) {
    let newRow = table.insertRow(-1);
    data.map((row, index)=> {
        let newCell = newRow.insertCell();
        let newText = document.createTextNode(row);
        newCell.appendChild(newText);
    });
}
