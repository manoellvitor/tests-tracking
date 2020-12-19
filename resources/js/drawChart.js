axios.get('/api/v1.0/getallmotherboards').then((resp) => {
  drawChart(Object.keys(resp.data.Motherboards).length);
});

function drawChart(mobos) {
  var ctx = document.getElementById('totalHardwareChart').getContext('2d');
  var totalHardwareChart = new Chart(ctx, {
    resposive: true,
    type: 'pie',
    data: {
      labels: ['Motherboards', 'Annapurnas', 'DIMMs', 'FANs', 'CPUs'],
      datasets: [
        {
          label: 'Hardware tested',
          data: [mobos, 19, 3, 5, 2],
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
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
}
