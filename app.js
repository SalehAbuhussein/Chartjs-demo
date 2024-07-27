const hoverline = {
  id: 'hoverLine',
  afterDatasetsDraw(chart, args, plugins) {
    const { ctx, tooltip, chartArea: { top, bottom }, scales: { x } } = chart;

    if (tooltip._active.length > 0) {
      const xCoordinate = x.getPixelForValue(tooltip.dataPoints[0].dataIndex);

      ctx.save();
      
      ctx.beginPath();
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = "#8D96AB";
      ctx.moveTo(xCoordinate, top);
      ctx.lineTo(xCoordinate, bottom);
      ctx.stroke();
      ctx.closePath();
    }
  }
}

const ctx = document.getElementById('chart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: [
      '12 Sep', 
      '13 Sep', 
      '14 Sep', 
      '15 Sep', 
      '16 Sep', 
      '17 Sep',
      '18 Sep',
      '19 Sep',
      '20 Sep',
      '21 Sep',
      '22 Sep',
      '23 Sep',
      '24 Sep',
      '25 Sep',
      '26 Sep',
      '27 Sep',
      '28 Sep',
      '29 Sep',
      '30 Sep',
    ],
    datasets: [{
      data: [50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0],
    }],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 10,
      }
    },
    plugins: {
      legend: {
        display: false
      },
    },
    scales: {
      x: {
        offset: true,
        border: {
          dash: [5, 5]
        },
        ticks: {
          maxRotation: 90,
          align: 'end'
        },
        reverse: true
      },
      y: {
        beginAtZero: true,
        offset: true,
        ticks: {
          display: false
        },
        grid: {
          drawTicks: false
        },
      }
    }
  },
  plugins: [hoverline]
});

const ctx2 = document.getElementById('chart2');

const formattedLabels = Chart.getChart('chart').config.data.labels.map(label => {
  const parts = label.split(' ');
  return parts.length === 2 ? [parts[0], parts[1]] : label;
});

console.log(formattedLabels);

const chartInstance = Chart.getChart('chart');

Chart.getChart('chart').config.data.labels = formattedLabels;
Chart.getChart('chart').update();


let chartWidth = chartInstance.config.data.datasets[0].data.length * (80);

if (window.innerWidth > 767) {
    chartInstance.canvas.parentNode.style.width = chartWidth + 'px';
    chartInstance.canvas.parentNode.parentNode.style.width = chartWidth + 'px';
} else {
    chartWidth = chartInstance.config.data.datasets[0].data.length * (35)
    chartInstance.canvas.parentNode.style.width = chartWidth + 'px';
}

new Chart(ctx2, {
  type: 'line',
  data: {
    labels: [
      '12 Sep', 
      '13 Sep', 
      '14 Sep', 
      '15 Sep', 
      '16 Sep', 
      '17 Sep',
      '18 Sep',
      '19 Sep',
      '20 Sep',
      '21 Sep',
      '22 Sep',
      '23 Sep',
      '24 Sep',
      '25 Sep',
      '26 Sep',
      '27 Sep',
      '28 Sep',
      '29 Sep',
      '30 Sep',
    ],
    datasets: [{
      data: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    }],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        bottom: 25
      }
    },
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        offset: true,
        border: {
          dash: [5, 5]
        },
        ticks: {
          display: false,
        },
        grid: {
          drawTicks: false
        }
      },
      y: {
        beginAtZero: true,
        offset: true,
        afterFit: (ctx) => {
          ctx.width = 25;
        }
      }
    }
  },
  plugins: [hoverline]
});
