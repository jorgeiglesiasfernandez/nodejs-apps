/**
 * @author Jorge Iglesias/Spain/IBM@ES
 * @description
 * <p>
 * Table model
 * </p>
 */

 /**
  * Add data to table
  */
function addData(table,head,data) {

  var qSelector = "#" + table + " tbody";
  var tbody = document.querySelector(qSelector);

  for (var i = 0; i < data.length; i++) {
    var d = '';
    var s = data[i];
    var id = table + '_' + s[head[0]];
    for (var ii = 0; ii < head.length; ii++) {
      d +=('<td>' + s[head[ii]] + '</td>');
    }

    var tr = document.createElement("tr");
    tr.innerHTML = d;
    tr.id = id;
    tbody.appendChild(tr);
  }
}
