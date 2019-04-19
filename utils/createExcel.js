
//used to create test excel book

const XLSX = require('xlsx')

const workbook = new XLSX.utils.book_new()

var ws_name = "Names";
 
/* make worksheet */
var ws_data = [['Name', 'Number']]

for (let index = 0; index < 20000; index++) {
  /* Add the worksheet to the workbook */
  ws_data.push( ["test"+index, 33+index] )
}

var ws = XLSX.utils.aoa_to_sheet(ws_data)
XLSX.utils.book_append_sheet(workbook, ws, ws_name);

XLSX.writeFile(workbook, 'testFile.xlsx')