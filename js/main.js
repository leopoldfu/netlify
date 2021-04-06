$(window).resize(function(){
      
      drawAgeChart();
      drawDailyTraffic();
      drawGenderChart();
      drawMediaChart();
      drawTreemapChart();
      drawBarchart();
    });
      google.charts.load('current', {'packages':['corechart','line','treemap']});
      google.charts.setOnLoadCallback(drawDailyTraffic);
      google.charts.setOnLoadCallback(drawAgeChart);
      google.charts.setOnLoadCallback(drawGenderChart);
      google.charts.setOnLoadCallback(drawMediaChart);
      google.charts.setOnLoadCallback(drawTreemapChart);
      google.charts.setOnLoadCallback(drawBarchart);

      
        function animateValue(id, start, end, duration) {
        var obj = document.getElementById(id);
        var range = end - start;
    // no timer shorter than 50ms (not really visible any way)
        var minTimer = 50;
    // calc step time to show all interediate values
        var stepTime = Math.abs(Math.floor(duration / range));
    
    // never go below minTimer
        stepTime = Math.max(stepTime, minTimer);
    
    // get current time and calculate desired end time
        var startTime = new Date().getTime();
        var endTime = startTime + duration;
        var timer;
    
        function run() {
        var now = new Date().getTime();
        var remaining = Math.max((endTime - now) / duration, 0);
        var value = Math.round(end - (remaining * range));
        if (id == 'sc5v'){obj.innerHTML = 'NT$' + value;}
        else {obj.innerHTML = value;}
        
        if (value == end) {
            clearInterval(timer);
        }
    }
    
    timer = setInterval(run, stepTime);
    run();
    }

      $(window).ready(function(){
      animateValue('sc1v',0, 101432119, 2000);  
      animateValue('sc2v',0, 129789, 2000);
      animateValue('sc3v',0, 98442, 2000);
      animateValue('sc4v',0, 2038, 2000);
      animateValue('sc5v',0, 598132, 2000);
    })
      
        


      function drawBarchart() {
      var data = google.visualization.arrayToDataTable([
        ['頁面', '瀏覽數'],
        ['分店地址',  1],
        ['經營團隊',  1],
        ['新品推薦',  5],
        ['最新活動',  6],
        ['影片介紹',  6]
      ]);

      var options = {
        chartArea: {width: '50%'},
        height: 400,
        animation: {
                duration: 1000,
                startup: true,
                easing: 'out'
            },
        hAxis: {
          title: '瀏覽數',
          minValue: 0,
          textStyle: {
            bold: true,
            fontSize: 12,
            color: '#4d4d4d'
          },
          titleTextStyle: {
            bold: true,
            fontSize: 18,
            color: '#4d4d4d'
          }
        },
        vAxis: {
          title: '頁面',
          textStyle: {
            fontSize: 14,
            bold: true,
            color: '#848484'
          },
          titleTextStyle: {
            fontSize: 14,
            bold: true,
            color: '#848484'
          }
        }
      };
      var chart = new google.visualization.BarChart(document.getElementById('barchart'));
      chart.draw(data, options);
    }

      function drawTreemapChart() {
        var data = google.visualization.arrayToDataTable([
          ['類型', 'Parent', '互動數'],
          ['All',  null, 0],
          ['商品瀏覽', 'All', 0],
          ['留言互動', 'All', 0],
          ['網頁觀看', 'All', 0],
          ['鞋類', '商品瀏覽', 0],
          ['男裝類', '商品瀏覽', 0],
          ['女裝類', '商品瀏覽', 0],
          ['運動鞋', '鞋類', 4],
          ['休閒鞋', '鞋類', 2],
          ['登山鞋', '鞋類', 2],
          ['上衣', '男裝類', 4],
          ['長褲', '男裝類', 3],
          ['西裝', '男裝類', 1],
          ['洋裝', '女裝類', 6],
          ['長裙', '女裝類', 4],
          ['女用長褲', '女裝類', 2],
          ['關於商品', '留言互動', 4],
          ['售後服務', '留言互動', 8],
          ['關於我們', '網頁觀看', 5],
          ['品牌理念', '網頁觀看', 7],
          ['分店地址', '網頁觀看', 15],
          ['經營團隊', '網頁觀看', 5],
          ['新品推薦', '網頁觀看', 6],
          ['最新活動', '網頁觀看', 7],
          ['影片介紹', '網頁觀看', 8]
        ]);

        tree = new google.visualization.TreeMap(document.getElementById('treemap_chart'));

        tree.draw(data, {
          minColor: '#f00',
          midColor: '#ddd',
          maxColor: '#0d0',
          headerHeight: 15,
          fontColor: 'black',
          showScale: true,
          height: 400,
          generateTooltip: showStaticTooltip
        });
        function showStaticTooltip(row, size, value){
        return '<div style="background:#fd9; padding:10px; border-style:solid">' +
           '<span style="font-family:Courier"><b>' + data.getValue(row, 0) +
           ': </b> ' + size + '</span></div>';
      }
      }
      

       function drawMediaChart() {
        // Some raw data (not necessarily accurate)
       var data = new google.visualization.DataTable();
        data.addColumn('date', '日期');
        data.addColumn('number', 'Google Display');
        data.addColumn('number', 'EDM');
        data.addColumn('number', 'Facebook');
        data.addColumn('number', 'Line');
        data.addColumn('number', 'Others');
        data.addColumn('number', 'Average');
        data.addRows([
        [new Date(2021,2,11), 12, 2, 12,6,6,(12+2+12+6+6)/5],
        [new Date(2021,2,12), 17, 2, 13,7,7,(17+2+13+7+7)/5],
        [new Date(2021,2,13), 15, 3, 12,6,7,(15+3+12+6+7)/5],
        [new Date(2021,2,14), 15, 3, 13,5,6,(15+3+13+5+6)/5],
        [new Date(2021,2,15), 12, 2, 14,5,5,(12+2+14+5+5)/5],
        [new Date(2021,2,16), 12, 1, 14,6,6,(12+1+14+6+6)/5],
        [new Date(2021,2,17), 13, 2, 14,7,7,(13+2+14+7+7)/5],
        [new Date(2021,2,18), 20, 2, 13,6,7,(20+2+13+6+7)/5],
        [new Date(2021,2,19), 11, 2, 12,7,8,(11+2+12+7+8)/5],
        [new Date(2021,2,20), 14, 1, 11,6,5,(14+1+11+6+5)/5],
        [new Date(2021,2,21), 18, 2, 12,7,6,(18+2+12+7+6)/5],
      ]);

        var options = {
          height: 400,
          vAxis: {title: 'Conversions'},
          hAxis: {title: 'Date'},
          seriesType: 'bars',
          series: {5: {type: 'line'}},
          animation: {
                duration: 1000,
                startup: true,
                easing: 'out'
            }
        };

        var chart = new google.visualization.ComboChart(document.getElementById('media_chart'));
        chart.draw(data, options);
      }
      
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
        animation: {
                duration: 1000,
                startup: true,
                easing: 'out'
            }
      };
      var chart1 = new google.visualization.LineChart(document.getElementById('demochart_div'));
      chart1.draw(data, options);
    }

    
      
      // Callback that draws the pie chart for Sarah's pizza.
      function drawAgeChart() {

        // Create the data table for Sarah's pizza.
        var data2 = new google.visualization.DataTable();
        data2.addColumn('string', 'Topping');
        data2.addColumn('number', 'Slices');
        data2.addRows([
          ['18-24', 120423],
          ['25-34', 293819],
          ['35-44', 189203],
          ['45-54', 103244],
          ['55-64', 64721],
          ['65+', 55261]
        ]);

        // Set options for Sarah's pie chart.
        var options = {
          height:400,
          chartArea:{left:'10%',top:'5%',width:'80%',height:'80%'},
          legend: {position: 'right', maxLines: 6, alignment: 'center'},
          pieHole: 0.5
        };

        // Instantiate and draw the chart for Sarah's pizza.
        var chart = new google.visualization.PieChart(document.getElementById('Demo_chart_div'));
        chart.draw(data2, options);
      }

      function drawGenderChart() {

        // Create the data table for Sarah's pizza.
        var data2 = new google.visualization.DataTable();
        data2.addColumn('string', 'Topping');
        data2.addColumn('number', 'Slices');
        data2.addRows([
          ['男性', 190423],
          ['女性', 203819],
          ['未知', 59203]
        ]);

        // Set options for Sarah's pie chart.
        var options = {
          height:400,
          chartArea:{left:'10%',top:'5%',width:'80%',height:'80%'},
          legend: {position: 'right', maxLines: 6, alignment: 'center'},
          pieHole: 0.5
        };

        // Instantiate and draw the chart for Sarah's pizza.
        var chart = new google.visualization.PieChart(document.getElementById('Demo_chart_div2'));
        chart.draw(data2, options);
      }
            
