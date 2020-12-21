window.onload = function () {
  var a = document.getElementById('searchBtn');
  var chart = document.getElementById('chartID');
  var title = document.getElementById('titleID');
  var table = document.getElementById('table');
  var searchInput = document.getElementById('searchInput');
  var flag = 0;

  const xhttp = new XMLHttpRequest();

  xhttp.open('GET', '/api/v1.0/searchbysn/' + searchInput, false);
  console.log(searchInput.value);
  xhttp.send();

  a.onclick = function () {
    if (flag == 0) {
      chart.remove();
      title.innerHTML = 'Search';

      const searchData = JSON.parse(xhttp.responseText);

      searchData.Motherboards.forEach((mobo) => {
        const x = `
      <tr>
        <td>${mobo.testedDate}</td>
        <td>${mobo.assetId}</td>
        <td>${mobo.macAddress}</td>
        <td>${mobo.tester}</td>
        <td>${mobo.result}</td>
        <td>${mobo.comments}</td>
      </tr>
      
    `;
        document.getElementById('table').removeAttribute('hidden');
        document.getElementById('tbody').innerHTML =
          document.getElementById('tbody').innerHTML + x;
      });

      flag++;
      return false;
    } else {
      table.remove();
    }
  };
};
