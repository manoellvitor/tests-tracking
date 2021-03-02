// function exportTableToExcel(tableID, filename = '') {
//   var downloadLink;
//   var dataType = 'application/vnd.ms-excel';
//   var tableSelect = document.getElementById(tableID);
//   var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');

//   // Specify file name
//   filename = filename ? filename + '.xls' : 'hardware_tested.xls';

//   // Create download link element
//   downloadLink = document.createElement('a');

//   document.body.appendChild(downloadLink);

//   if (navigator.msSaveOrOpenBlob) {
//     var blob = new Blob(['\ufeff', tableHTML], {
//       type: dataType,
//     });
//     navigator.msSaveOrOpenBlob(blob, filename);
//   } else {
//     // Create a link to the file
//     downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

//     // Setting the file name
//     downloadLink.download = filename;

//     //triggering the function
//     downloadLink.click();
//   }
// }

function exportTableToExcel() {
  let table = document.getElementsByTagName('table'); // you can use document.getElementById('tableId') as well by providing id to the table tag
  TableToExcel.convert(table[0], {
    // html code may contain multiple tables so here we are refering to 1st table tag
    name: `exportedTable.xlsx`, // fileName you could use any name
    sheet: {
      name: 'Sheet 1', // sheetName
    },
  });
}
