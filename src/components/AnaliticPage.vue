<template>
          <div class="altc-container">
                    <h1>Аналитика</h1>
                    <div></div>
                    <h3>Аналитика по визитам</h3>
          </div>
</template>

<script>
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

export default {
          name: "AnaliticPage"
}

am5.ready(function () {
          if (localStorage.getItem("Leadhit") == "5f8475902b0be670555f1bb3") {
                    document.querySelector("#chartdiv").setAttribute("style", "display:block")

                    // Create root element
                    var root = am5.Root.new("chartdiv");

                    // Set themes
                    root.setThemes([
                              am5themes_Animated.new(root)
                    ]);

                    var dateArr = [
                              { date: new Date(2020, 7, 1).getTime(), value: 213 },
                              { date: new Date(2020, 7, 2).getTime(), value: 249 },
                              { date: new Date(2020, 7, 3).getTime(), value: 179 },
                              { date: new Date(2020, 7, 4).getTime(), value: 170 },
                              { date: new Date(2020, 7, 5).getTime(), value: 184 },
                              { date: new Date(2020, 7, 6).getTime(), value: 202 },
                              { date: new Date(2020, 7, 7).getTime(), value: 198 },
                              { date: new Date(2020, 7, 8).getTime(), value: 168 },
                              { date: new Date(2020, 7, 9).getTime(), value: 176 },
                              { date: new Date(2020, 7, 10).getTime(), value: 171 },
                              { date: new Date(2020, 7, 11).getTime(), value: 190 },
                              { date: new Date(2020, 7, 12).getTime(), value: 154 },
                              { date: new Date(2020, 7, 13).getTime(), value: 246 },
                              { date: new Date(2020, 7, 14).getTime(), value: 250 },
                              { date: new Date(2020, 7, 15).getTime(), value: 227 },
                              { date: new Date(2020, 7, 16).getTime(), value: 140 },
                              { date: new Date(2020, 7, 17).getTime(), value: 170 },
                              { date: new Date(2020, 7, 18).getTime(), value: 125 },
                              { date: new Date(2020, 7, 19).getTime(), value: 106 },
                              { date: new Date(2020, 7, 20).getTime(), value: 207 },
                              { date: new Date(2020, 7, 21).getTime(), value: 222 },
                              { date: new Date(2020, 7, 22).getTime(), value: 198 },
                              { date: new Date(2020, 7, 23).getTime(), value: 204 },
                              { date: new Date(2020, 7, 24).getTime(), value: 213 },
                              { date: new Date(2020, 7, 25).getTime(), value: 145 },
                              { date: new Date(2020, 7, 26).getTime(), value: 166 },
                              { date: new Date(2020, 7, 27).getTime(), value: 163 },
                              { date: new Date(2020, 7, 28).getTime(), value: 135 },
                              { date: new Date(2020, 7, 29).getTime(), value: 45 }

                    ];

                    // Create chart
                    var chart = root.container.children.push(am5xy.XYChart.new(root, {
                              panX: true,
                              panY: true,
                              wheelX: "panX",
                              wheelY: "zoomX"
                    }));

                    // Add cursor
                    var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
                              behavior: "none"
                    }));
                    cursor.lineY.set("visible", false);

                    // Create axes
                    var xAxis = chart.xAxes.push(am5xy.GaplessDateAxis.new(root, {
                              maxDeviation: 0.1,
                              groupData: false,
                              baseInterval: {
                                        timeUnit: "day",
                                        count: 1
                              },
                              renderer: am5xy.AxisRendererX.new(root, {
                                        minGridDistance: 50
                              }),
                              tooltip: am5.Tooltip.new(root, {})
                    }));

                    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
                              maxDeviation: 1,
                              renderer: am5xy.AxisRendererY.new(root, {
                              })
                    }));

                    // Add series
                    var series = chart.series.push(am5xy.LineSeries.new(root, {
                              minBulletDistance: 10,
                              xAxis: xAxis,
                              yAxis: yAxis,
                              valueYField: "value",
                              valueXField: "date",
                              tooltip: am5.Tooltip.new(root, {
                                        pointerOrientation: "horizontal",
                                        labelText: "{valueY}"
                              })
                    }));

                    series.data.setAll(dateArr);

                    series.bullets.push(function () {
                              return am5.Bullet.new(root, {
                                        sprite: am5.Circle.new(root, {
                                                  radius: 5,
                                                  stroke: root.interfaceColors.get("background"),
                                                  strokeWidth: 2,
                                                  fill: series.get("fill")
                                        })
                              });
                    });

                    // Add scrollbar
                    chart.set("scrollbarX", am5.Scrollbar.new(root, {
                              orientation: "horizontal"
                    }));

                    series.appear(1000, 100);
                    chart.appear(1000, 100);
          }
          else {
                    window.location.href = 'http://localhost:8080/#/';
          }
});


</script>

<style>
.altc-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
}

#chartdiv {
          width: 100%;
          height: 500px;
}
</style>