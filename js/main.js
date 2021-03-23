$(window).resize(function(){
      drawDemoVisualization();
      drawSarahChart();
      drawTimeLineChart();
      drawLineChart();
      drawDailyTraffic();
    });
      google.charts.load('current', {'packages':['corechart','line']});
      // Draw the Demochart when Charts is loaded.
      google.charts.setOnLoadCallback(drawDailyTraffic);
      // Draw the pie chart for Sarah's pizza when Charts is loaded.
      google.charts.setOnLoadCallback(drawSarahChart);
      google.charts.setOnLoadCallback(drawTimeLineChart);
      google.charts.setOnLoadCallback(drawLineChart);
      
      function drawDailyTraffic() {
      var data = new google.visualization.DataTable();
      data.addColumn('date', '日期');
      data.addColumn('number', 'Google Display');
      data.addColumn('number', 'EDM');
      data.addColumn('number', 'Facebook');
      data.addColumn('number', 'Line');
      data.addColumn('number', 'Others');

      data.addRows([
        [new Date(2021,2,11), 1234, 312, 987,572,132],
        [new Date(2021,2,12), 1728, 314, 912,583,148],
        [new Date(2021,2,13), 1553, 332, 932,501,173],
        [new Date(2021,2,14), 1456, 389, 966,583,129],
        [new Date(2021,2,15), 1123, 377, 950,577,104],
        [new Date(2021,2,16), 1267, 342, 959,548,166],
        [new Date(2021,2,17), 1272, 375, 982,532,172],
        [new Date(2021,2,18), 1948, 382, 965,587,182],
        [new Date(2021,2,19), 1127, 359, 945,590,194],
        [new Date(2021,2,20), 1387, 301, 923,572,101],
        [new Date(2021,2,21), 1848, 338, 909,559,110],
      ]);

      var options = {
        height: 400,
        hAxis: {
          title: '日期'
        },
        vAxis: {
          title: '流量',
          
        },
        legend: {
          position: 'bottom'
        },
        chartArea: {width: '80%', height: '70%'},
      };
      var chart1 = new google.visualization.LineChart(document.getElementById('demochart_div'));
      chart1.draw(data, options);
      var chart2 = new google.visualization.LineChart(document.getElementById('demochart_div2'));
      chart2.draw(data, options);
    }

    
      
      // Callback that draws the pie chart for Sarah's pizza.
      function drawSarahChart() {

        // Create the data table for Sarah's pizza.
        var data2 = new google.visualization.DataTable();
        data2.addColumn('string', 'Topping');
        data2.addColumn('number', 'Slices');
        data2.addRows([
          ['Mushrooms', 1],
          ['Onions', 1],
          ['Olives', 2],
          ['Zucchini', 2],
          ['Pepperoni', 1]
        ]);

        // Set options for Sarah's pie chart.
        var options = {title:'How Much Pizza Sarah Ate Last Night',
                       height:400,
                       is3D: true};

        // Instantiate and draw the chart for Sarah's pizza.
        var chart1 = new google.visualization.PieChart(document.getElementById('Sarah_chart_div'));
        var chart2 = new google.visualization.PieChart(document.getElementById('Sarah_chart_div2'));
        chart1.draw(data2, options);
        chart2.draw(data2, options);
      }
      // Callback that draws timeline chart.
      function drawTimeLineChart() {
        var container = document.getElementById('timeline');
        var chart = new google.visualization.Timeline(container);
        var dataTable = new google.visualization.DataTable();

        dataTable.addColumn({ type: 'string', id: 'President' });
        dataTable.addColumn({ type: 'date', id: 'Start' });
        dataTable.addColumn({ type: 'date', id: 'End' });
        dataTable.addRows([
          [ 'Washington', new Date(1789, 3, 30), new Date(1797, 2, 4) ],
          [ 'Adams',      new Date(1797, 2, 4),  new Date(1801, 2, 4) ],
          [ 'Jefferson',  new Date(1801, 2, 4),  new Date(1809, 2, 4) ]]);

        chart.draw(dataTable);
      }
      
      function drawLineChart(){
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Day');
      data.addColumn('number', 'Guardians of the Galaxy');
      data.addColumn('number', 'The Avengers');
      data.addColumn('number', 'Transformers: Age of Extinction');

      data.addRows([
        [1,  37.8, 80.8, 41.8],
        [2,  30.9, 69.5, 32.4],
        [3,  25.4,   57, 25.7],
        [4,  11.7, 18.8, 10.5],
        [5,  11.9, 17.6, 10.4],
        [6,   8.8, 13.6,  7.7],
        [7,   7.6, 12.3,  9.6],
        [8,  12.3, 29.2, 10.6],
        [9,  16.9, 42.9, 14.8],
        [10, 12.8, 30.9, 11.6],
        [11,  5.3,  7.9,  4.7],
        [12,  6.6,  8.4,  5.2],
        [13,  4.8,  6.3,  3.6],
        [14,  4.2,  6.2,  3.4]
      ]);

      var options = {
        chart: {
          title: 'Box Office Earnings in First Two Weeks of Opening',
          subtitle: 'in millions of dollars (USD)'
        },
      };
      var chart = new google.charts.Line(document.getElementById('line_chart'));

      chart.draw(data, google.charts.Line.convertOptions(options));
      }

      function drawDemoVisualization() {
        // Some raw data (not necessarily accurate)
        var data1 = google.visualization.arrayToDataTable([
          ['日期', 'EDM', 'Google Display', 'Facebook', 'Line', 'Google Search', 'Others'],
          ['03/11',  165,      938,         522,             998,           450,      614.6],
          ['03/12',  135,      1120,        599,             1268,          288,      682],
          ['03/13',  157,      1167,        587,             807,           397,      623],
          ['03/14',  139,      1110,        615,             968,           215,      609.4],
          ['03/15',  136,      691,         629,             1026,          366,      569.6]
        ]);

        var options = {
          title : '每日進站流量',
          vAxis: {title: '流量'},
          hAxis: {title: '日期'},
          seriesType: 'bars',
          series: {5: {type: 'line'}},
          crosshair: { trigger: 'both' },
          height:400,
          animation:{
          duration: 1000,
          easing: 'out',
          startup: true
          }
        };

        var chart1 = new google.visualization.ComboChart(document.getElementById('none'));
        var chart2 = new google.visualization.ComboChart(document.getElementById('none'));
        chart1.draw(data1, options);
        chart2.draw(data1, options);
      }