function getMobos() {
  return axios.get('/api/v1.0/getallmotherboards');
}

function getK2ts() {
  return axios.get('/api/v1.0/getallk2ts');
}

function getDimms() {
  return axios.get('/api/v1.0/getalldimms');
}

Promise.all([getMobos(), getDimms(), getK2ts()]).then(function (results) {
  const mobos = results[0];
  const dimms = results[1];
  const k2ts = results[2];

  drawChart(
    Object.keys(mobos.data.Motherboards).length,
    Object.keys(dimms.data.Dimms).length,
    Object.keys(k2ts.data.K2ts).length,
  );
  drawChartBar(mobos.data.Motherboards, dimms.data.Dimms);
});

// axios.get('/api/v1.0/getallmotherboards').then((resp) => {
//   drawChart(Object.keys(resp.data.Motherboards).length);
//   drawChartBar(resp.data.Motherboards);
// });

function drawChart(mobos, dimms, k2ts) {
  var ctx = document.getElementById('totalHardwareChart').getContext('2d');
  var totalHardwareChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Motherboards', 'Annapurnas', 'DIMMs', 'CPUs', 'FANs'],
      datasets: [
        {
          label: 'Hardware Tested',
          data: [mobos, k2ts, dimms, 55, 221],
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

function drawChartBar(mobos, dimms) {
  let moboFail = 0;
  let moboPass = 0;
  let dimmFail = 0;
  let dimmPass = 0;

  mobos.forEach((mobo) => {
    if (
      mobo.result == 'Fail' ||
      mobo.result == 'Faild' ||
      mobo.result == 'Fail Test'
    ) {
      moboFail++;
    } else if (mobo.result == 'Pass') {
      moboPass++;
    }
  });

  dimms.forEach((dimm) => {
    if (
      dimm.result == 'Fail' ||
      dimm.result == 'Faild' ||
      dimm.result == 'Fail Test'
    ) {
      dimmFail++;
    } else if (dimm.result == 'Pass') {
      dimmPass++;
    }
  });

  var ctx = document.getElementById('FailAndPass').getContext('2d');
  var FailAndPass = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Motherboards', 'Annapurnas', 'DIMMs', 'CPUs', 'FANs'],
      datasets: [
        {
          label: 'Fail',
          backgroundColor: [
            'rgba(255, 0, 0, 1)',
            'rgba(255, 0, 0, 1)',
            'rgba(255, 0, 0, 1)',
            'rgba(255, 0, 0, 1)',
            'rgba(255, 0, 0, 1)',
          ],
          borderColor: [
            'rgba(0, 0, 0, 255)',
            'rgba(0, 0, 0, 255)',
            'rgba(0, 0, 0, 255)',
            'rgba(0, 0, 0, 255)',
            'rgba(0, 0, 0, 255)',
          ],
          borderWidth: 1,
          data: [moboFail, 3, dimmFail, 10, 20],
        },
        {
          label: 'Pass',
          backgroundColor: [
            'rgba(0, 255, 0, 1)',
            'rgba(0, 255, 0, 1)',
            'rgba(0, 255, 0, 1)',
            'rgba(0, 255, 0, 1)',
            'rgba(0, 255, 0, 1)',
          ],
          borderColor: [
            'rgba(0, 0, 0, 255)',
            'rgba(0, 0, 0, 255)',
            'rgba(0, 0, 0, 255)',
            'rgba(0, 0, 0, 255)',
            'rgba(0, 0, 0, 255)',
          ],
          borderWidth: 1,
          data: [moboPass, 2, dimmPass, 45, 54],
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
      resposive: true,
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Overall Number of Failures and Success.',
      },
    },
  });
}
