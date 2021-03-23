$(window).resize(function(){
  		drawDemoVisualization();
  		drawSarahChart();
  		drawTimeLineChart();
  		drawLineChart();
		});
      google.charts.load('current', {'packages':['corechart','timeline','line']});
      // Draw the Demochart when Charts is loaded.
      google.charts.setOnLoadCallback(drawDemoVisualization);
      // Draw the pie chart for Sarah's pizza when Charts is loaded.
      google.charts.setOnLoadCallback(drawSarahChart);
      google.charts.setOnLoadCallback(drawTimeLineChart);
      google.charts.setOnLoadCallback(drawLineChart);;
  

      function drawDemoVisualization() {
        // Some raw data (not necessarily accurate)
        var data1 = google.visualization.arrayToDataTable([
          ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
          ['2004/05',  165,      938,         522,             998,           450,      614.6],
          ['2005/06',  135,      1120,        599,             1268,          288,      682],
          ['2006/07',  157,      1167,        587,             807,           397,      623],
          ['2007/08',  139,      1110,        615,             968,           215,      609.4],
          ['2008/09',  136,      691,         629,             1026,          366,      569.6]
        ]);

        var options = {
          title : 'Monthly Coffee Production by Country',
          vAxis: {title: 'Cups'},
          hAxis: {title: 'Month'},
          seriesType: 'bars',
          series: {5: {type: 'line'}},
          crosshair: { trigger: 'both' },
          animation:{
        	duration: 1000,
        	easing: 'out',
        	startup: true
      		}
        };

        var chart1 = new google.visualization.ComboChart(document.getElementById('demochart_div'));
        var chart2 = new google.visualization.ComboChart(document.getElementById('demochart_div2'));
        chart1.draw(data1, options);
        chart2.draw(data1, options);
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