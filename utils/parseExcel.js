
//Import excel function

const XLSX = require('xlsx')

const parseFile = function (filname) {

    const wb = XLSX.readFile(filname)
    const nameOfSheet = wb.SheetNames
    return XLSX.utils.sheet_to_json(wb.Sheets[nameOfSheet[0]])

} 


module.exports = {
    parseFile : parseFile
}