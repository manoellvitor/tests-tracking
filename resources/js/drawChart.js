function getMobos() {
  return axios.get('/api/v1.0/getallmotherboards');
}

function getK2ts() {
  return axios.get('/api/v1.0/getallk2ts');
}

function getK2cs() {
  return axios.get('/api/v1.0/getallk2cs');
}

function getK2xs() {
  return axios.get('/api/v1.0/getallk2xs');
}

function getDimms() {
  return axios.get('/api/v1.0/getalldimms');
}

Promise.all([getMobos(), getDimms(), getK2ts(), getK2cs(), getK2xs()]).then(
  function (results) {
    const mobos = results[0];
    const dimms = results[1];
    const k2ts = results[2];
    const k2cs = results[3];
    const k2xs = results[4];
    const annas =
      Object.keys(k2ts.data.K2ts).length +
      Object.keys(k2cs.data.K2cs).length +
      Object.keys(k2xs.data.K2xs).length;

    drawChart(
      Object.keys(mobos.data.Motherboards).length,
      Object.keys(dimms.data.Dimms).length,
      annas,
    );
    drawChartBar(
      mobos.data.Motherboards,
      dimms.data.Dimms,
      k2ts.data.K2ts,
      k2cs.data.K2cs,
      k2xs.data.K2xs,
    );
  },
);

function drawChart(mobos, dimms, annas) {
  var ctx = document.getElementById('totalHardwareChart').getContext('2d');
  var totalHardwareChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Motherboards', 'Annapurnas', 'DIMMs', 'CPUs', 'FANs'],
      datasets: [
        {
          label: 'Hardware Tested',
          data: [mobos, annas, dimms, 200, 300],
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

function drawChartBar(mobos, dimms, k2ts, k2cs, k2xs) {
  let moboFail = 0;
  let moboPass = 0;
  let dimmFail = 0;
  let dimmPass = 0;
  let k2tFail = 0;
  let k2tPass = 0;
  let k2cfail = 0;
  let k2cPass = 0;
  let k2xfail = 0;
  let k2xPass = 0;

  let annasFail = 0;
  let annasPass = 0;

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

  k2ts.forEach((k2t) => {
    if (
      k2t.result == 'Fail' ||
      k2t.result == 'Faild' ||
      k2t.result == 'Fail Test' ||
      k2t.result == 'Failed'
    ) {
      k2tFail++;
    } else if (k2t.result == 'Pass') {
      k2tPass++;
    }
  });

  annasFail = k2tFail;
  annasPass = k2tPass;

  k2cs.forEach((k2c) => {
    if (
      k2c.result == 'Fail' ||
      k2c.result == 'Faild' ||
      k2c.result == 'Fail Test' ||
      k2c.result == 'Failed'
    ) {
      k2cfail++;
    } else if (k2c.result == 'Pass') {
      k2cPass++;
    }
  });

  annasFail = annasFail + k2cfail;
  annasPass = annasPass + k2cPass;

  k2xs.forEach((k2x) => {
    if (
      k2x.result == 'Fail' ||
      k2x.result == 'Faild' ||
      k2x.result == 'Fail Test' ||
      k2x.result == 'Failed'
    ) {
      k2xfail++;
    } else if (k2x.result == 'Pass') {
      k2xPass++;
    }
  });

  annasFail = annasFail + k2xfail;
  annasPass = annasPass + k2xPass;

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
          data: [moboFail, annasFail, dimmFail, 10, 20],
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
          data: [moboPass, annasPass, dimmPass, 45, 54],
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
