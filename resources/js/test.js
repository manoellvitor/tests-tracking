window.onload = function () {
  var a = document.getElementById('mobo');
  var chart = document.getElementById('chartID');
  var title = document.getElementById('titleID');

  let mobosData = axios.get('/api/v1.0/getallmotherboards');
  console.log(mobosData);

  const x = `
 <h2>Motherboards that have been tested</h2>
  <div class="table-responsive">
    <table class="table table-striped table-sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Header</th>
          <th>Header</th>
          <th>Header</th>
          <th>Header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1,001</td>
          <td>Lorem</td>
          <td>ipsum</td>
          <td>dolor</td>
          <td>sit</td>
        </tr>
        <tr>
          <td>1,002</td>
          <td>amet</td>
          <td>consectetur</td>
          <td>adipiscing</td>
          <td>elit</td>
        </tr>
        
      </tbody>
    </table>
  </div>
</main>
</div>
</div>
        `;

  a.onclick = function () {
    chart.remove();
    title.innerHTML = 'Motherboards';
    document.getElementById('table').innerHTML =
      document.getElementById('table').innerHTML + x;
    return false;
  };
};
