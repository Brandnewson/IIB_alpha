//REVENUE - REGULAR BAR CHART
new Chart(document.getElementById("revenue-chart"), {
    type: 'line',
    data: {
      labels: ["12", "13", "14", "15", "16", "17", "18", "19", "20", "21"],
      datasets: [
        {
          label: "Revenue (thousands)",
          backgroundColor: ["#E9C46A","#E9C46A","#E9C46A","#E9C46A","#E9C46A","#E9C46A","#E9C46A","#E9C46A","#E9C46A","#E9C46A","#E9C46A"],
          data: [433,478,490,784,900, 1123, 1234, 3023, 5934, 8483]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Earnings YoY (All numbers in thousands)'
      },
      scales: {
        xAxes: [{
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
            }
        }],
        yAxes: [{
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
            }   
        }]
    },
    responsive: true,
    maintainAspectRatio: true
    }
});


//PE - REGULAR LINE CHART 
new Chart(document.getElementById("pe-chart"), {
    type: 'line',
    data: {
      labels: ["12", "13", "14", "15", "16", "17", "18", "19", "20", "21"],
      datasets: [
        {
          label: "PE (ratio)",
          backgroundColor: ["#E9C46A","#E9C46A","#E9C46A","#E9C46A","#E9C46A","#E9C46A","#E9C46A","#E9C46A","#E9C46A","#E9C46A","#E9C46A"],
          data: [1,2,1.3,1.4,1.5, 20, 5, 6.3, 4.7, 5.2]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'PE, PB, PEG, LIST MORE'
      },
      scales: {
        xAxes: [{
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
            }
        }],
        yAxes: [{
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
            }   
        }]
    }
    }
});
new Chart(document.getElementById("fair-value-chart"), {
  type: 'bar',
  data: {
    labels: ["Fair Value", "Current Price"],
    datasets: [
      {
        label: "$USD",
        backgroundColor: ["#F4A261","#E9C46A"],
        data: [3,4]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Earnings YoY (All numbers in thousands)'
    },
    scales: {
      xAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }
      }],
      yAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }   
      }]
  },
  responsive: true,
  maintainAspectRatio: true
  }
});
//ROECHART
new Chart(document.getElementById("ROE-chart"), {
  type: 'line',
  data: {
    labels: ["12", "13", "14", "15", "16", "17", "18", "19", "20", "21"],
    datasets: [
      {
        label: "ROE (Return on Equity)",
        backgroundColor: ["#F4A261","#F4A261","#F4A261","#F4A261","#F4A261","#F4A261","#F4A261","#F4A261","#F4A261","#F4A261","#F4A261"],
        data: [1,2,3,4,5,6,7,8,9,10]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'PE, PB, PEG, LIST MORE'
    },
    scales: {
      xAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }
      }],
      yAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }   
      }]
  }
  }
});
//EPSCHART
new Chart(document.getElementById("EPS-chart"), {
  type: 'line',
  data: {
    labels: ["12", "13", "14", "15", "16", "17", "18", "19", "20", "21"],
    datasets: [
      {
        label: "EPS (Earnings Per Share)",
        backgroundColor: ["#264653","#264653","#264653","#264653","#264653","#264653","#264653","#264653","#264653","#264653","#264653"],
        data: [1,2,3,4,5,6,7,8,9,10]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'PE, PB, PEG, LIST MORE'
    },
    scales: {
      xAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }
      }],
      yAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }   
      }]
  }
  }
});
//DIV-CHART
new Chart(document.getElementById("DIV-chart"), {
  type: 'line',
  data: {
    labels: ["12", "13", "14", "15", "16", "17", "18", "19", "20", "21"],
    datasets: [
      {
        label: "Divs/Share",
        backgroundColor: ["#E76F51","#E76F51","#E76F51","#E76F51","#E76F51","#E76F51","#E76F51","#E76F51","#E76F51","#E76F51","#E76F51"],
        data: [1,2,3,4,5,6,7,8,9,10]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'PE, PB, PEG, LIST MORE'
    },
    scales: {
      xAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }
      }],
      yAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }   
      }]
  }
  }
});
//CASHFLOW-CHART
new Chart(document.getElementById("CASHFLOW-chart"), {
  type: 'line',
  data: {
    labels: ["12", "13", "14", "15", "16", "17", "18", "19", "20", "21"],
    datasets: [
      {
        label: "FCF (Free Cashflow)",
        backgroundColor: ["#E9C46A","#E9C46A","#E9C46A","#E9C46A","#E9C46A","#E9C46A","#E9C46A","#E9C46A","#E9C46A","#E9C46A","#E9C46A"],
        data: [1,2,3,4,5,6,7,8,9,13]
      }, {
        label: "OCF (Operating Cashflow)",
        backgroundColor: ["#E76F51","#E76F51","#E76F51","#E76F51","#E76F51","#E76F51","#E76F51","#E76F51","#E76F51","#E76F51","#E76F51"],
        data: [0.9,1.9,2.9,3.9,4.9,5.9,6.9,7.9,8.9,9.9]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'PE, PB, PEG, LIST MORE'
    },
    scales: {
      xAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }
      }],
      yAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }   
      }]
  }
  }
});
//DEBT/ASSET CHART
new Chart(document.getElementById("DEBT-chart"), {
  type: 'line',
  data: {
    labels: ["12", "13", "14", "15", "16", "17", "18", "19", "20", "21"],
    datasets: [
      {
        label: "Debt/Asset",
        backgroundColor: ["#E76F51","#E76F51","#E76F51","#E76F51","#E76F51","#E76F51","#E76F51","#E76F51","#E76F51","#E76F51","#E76F51"],
        data: [1,2,3,4,5,6,7,8,9,10]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'PE, PB, PEG, LIST MORE'
    },
    scales: {
      xAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }
      }],
      yAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }   
      }]
  }
  }
});
//RETAINED EARNINGS CHART
new Chart(document.getElementById("RETAINED-chart"), {
  type: 'line',
  data: {
    labels: ["12", "13", "14", "15", "16", "17", "18", "19", "20", "21"],
    datasets: [
      {
        label: "Retained Earnings",
        backgroundColor: ["#F4A261","#F4A261","#F4A261","#F4A261","#F4A261","#F4A261","#F4A261","#F4A261","#F4A261","#F4A261","#F4A261"],
        data: [1,2,3,4,5,6,7,8,9,10]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'PE, PB, PEG, LIST MORE'
    },
    scales: {
      xAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }
      }],
      yAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }   
      }]
  }
  }
});
//ROIC-CHART
new Chart(document.getElementById("ROIC-chart"), {
  type: 'line',
  data: {
    labels: ["12", "13", "14", "15", "16", "17", "18", "19", "20", "21"],
    datasets: [
      {
        label: "ROIC (Return on Invested Capital)",
        backgroundColor: ["#264653","#264653","#264653","#264653","#264653","#264653","#264653","#264653","#264653","#264653","#264653"],
        data: [1,2,3,4,5,6,7,8,9,10]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'PE, PB, PEG, LIST MORE'
    },
    scales: {
      xAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }
      }],
      yAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }   
      }]
  }
  }
});
//MARGIN-CHART
new Chart(document.getElementById("MARGIN-chart"), {
  type: 'line',
  data: {
    labels: ["12", "13", "14", "15", "16", "17", "18", "19", "20", "21"],
    datasets: [
      {
        label: "Net Margin & Gross Margin",
        backgroundColor: ["#E9C46A","#E9C46A","#E9C46A","#E9C46A","#E9C46A","#E9C46A","#E9C46A","#E9C46A","#E9C46A","#E9C46A","#E9C46A"],
        data: [1,2,3,4,5,6,7,8,9,10]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'PE, PB, PEG, LIST MORE'
    },
    scales: {
      xAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }
      }],
      yAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }   
      }]
  }
  }
});
//NETTANGIBLE-CHART
new Chart(document.getElementById("NETTANGIBLE-chart"), {
  type: 'line',
  data: {
    labels: ["12", "13", "14", "15", "16", "17", "18", "19", "20", "21"],
    datasets: [
      {
        label: "Return on Net Tangible Assets",
        backgroundColor: ["#F4A261","#F4A261","#F4A261","#F4A261","#F4A261","#F4A261","#F4A261","#F4A261","#F4A261","#F4A261","#F4A261"],
        data: [1,2,3,4,5,6,7,8,9,10]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'PE, PB, PEG, LIST MORE'
    },
    scales: {
      xAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }
      }],
      yAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }   
      }]
  }
  }
});
//CAPEX-NETINCOME-chart
new Chart(document.getElementById("CAPEX-NETINCOME-chart"), {
  data: {
    labels: ["12", "13", "14", "15", "16", "17", "18", "19", "20", "21"],
    datasets: [
      {
        type: 'line',
        label: "CAPEX",
        backgroundColor: ["#E9C46A","#E9C46A","#E9C46A","#E9C46A","#E9C46A","#E9C46A","#E9C46A","#E9C46A","#E9C46A","#E9C46A","#E9C46A"],
        data: [4,8,7,12,10,15,19,22,25,29]
      }, {
        type: 'bar',
        label: 'Net Income',
        backgroundColor: ["#E76F51","#E76F51","#E76F51","#E76F51","#E76F51","#E76F51","#E76F51","#E76F51","#E76F51","#E76F51","#E76F51"],
        data: [1,2,3,4,5,6,7,8,9,10]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'PE, PB, PEG, LIST MORE'
    },
    scales: {
      xAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }
      }],
      yAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }   
      }]
  }
  }
});
//LONGTERM-BALANCE-CHART
new Chart(document.getElementById("LONGTERM-BALANCE-chart"), {
  type: 'bar',
  data: {
    labels: ["Assets", "Liabilities"],
    datasets: [
      {
        label: "Long Term Balance Sheet",
        backgroundColor: ["#264653","#2A9D8F"],
        data: [3,4]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Earnings YoY (All numbers in thousands)'
    },
    scales: {
      xAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }
      }],
      yAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }   
      }]
  },
  responsive: true,
  maintainAspectRatio: true
  }
});
//SHORTTERM-BALANCE-CHART
new Chart(document.getElementById("SHORTTERM-BALANCE-chart"), {
  type: 'bar',
  data: {
    labels: ["Assets", "Liabilities"],
    datasets: [
      {
        label: "Short Term Balance Sheet",
        backgroundColor: ["#264653","#2A9D8F"],
        data: [3,4]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Earnings YoY (All numbers in thousands)'
    },
    scales: {
      xAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }
      }],
      yAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }   
      }]
  },
  responsive: true,
  maintainAspectRatio: true
  }
});
//DEBT-EQUITY-chart
new Chart(document.getElementById("DEBT-EQUITY-chart"), {
  type: 'line',
  data: {
    labels: ["12", "13", "14", "15", "16", "17", "18", "19", "20", "21"],
    datasets: [
      {
        label: "Debt to Equity",
        backgroundColor: ["#264653","#264653","#264653","#264653","#264653","#264653","#264653","#264653","#264653","#264653","#264653"],
        data: [1,2,3,4,5,6,7,8,9,10]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'PE, PB, PEG, LIST MORE'
    },
    scales: {
      xAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }
      }],
      yAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }   
      }]
  }
  }
});
//BALANCE-SHEET-CHART
new Chart(document.getElementById("BALANCE-SHEET-chart"), {
  type: 'bar',
  data: {
    labels: ["Long term assets", "Long term debt", "Short term assets", "Short term debt"],
    datasets: [
      {
        label: "Overall Balance Sheet",
        backgroundColor: ["#264653","#2A9D8F"],
        data: [3,4,5,6]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Earnings YoY (All numbers in thousands)'
    },
    scales: {
      xAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }
      }],
      yAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }   
      }]
  },
  responsive: true,
  maintainAspectRatio: true
  }
});