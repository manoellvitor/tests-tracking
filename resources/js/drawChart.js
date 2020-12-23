axios.get('/api/v1.0/getallmotherboards').then((resp) => {
  drawChart(Object.keys(resp.data.Motherboards).length);
  drawChartBar(resp.data.Motherboards);
});

function drawChart(mobos) {
  var ctx = document.getElementById('totalHardwareChart').getContext('2d');
  var totalHardwareChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Motherboards', 'Annapurnas', 'DIMMs', 'CPUs', 'FANs'],
      datasets: [
        {
          label: 'Hardware Tested',
          data: [mobos, 192, 35, 55, 221],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
          ],
          borderColor: [
            'rgba(0, 0, 0, 255)',
            'rgba(0, 0, 0, 255)',
            'rgba(0, 0, 0, 255)',
            'rgba(0, 0, 0, 255)',
            'rgba(0, 0, 0, 255)',
          ],
          borderWidth: 2,
        },
      ],
    },
    options: {
      resposive: true,
      title: {
        display: true,
        text: 'Overall Number of Hardware Tested.',
      },
    },
  });
}

function drawChartBar(mobos) {
  let fail = 0;
  let pass = 0;

  mobos.forEach((mobo) => {
    if (mobo.result == 'Fail') {
      fail++;
    } else if (mobo.result == 'Pass') {
      pass++;
    }
  });

  var ctx = document.getElementById('FailAndPass').getContext('2d');
  var FailAndPass = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Motherboards', 'Annapurnas', 'Fail', 'Pass', 'FANs'],
      datasets: [
        {
          label: 'Fail',
          backgroundColor: ['rgba(255, 0, 0, 1)'],
          borderColor: ['rgba(0, 0, 0, 255)'],
          borderWidth: 1,
          data: [fail],
        },
        {
          label: 'Pass',
          backgroundColor: ['rgba(0, 255, 0, 1)'],
          borderColor: ['rgba(0, 0, 0, 255)'],
          borderWidth: 1,
          data: [pass],
        },
      ],
    },
    options: {
      resposive: true,
      title: {
        display: true,
        text: 'Overall Number of Failures and Success.',
      },
    },
  });
}
