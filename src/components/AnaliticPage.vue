<template>
          <h1>Аналитика</h1>
          <h3>Аналитика по визитам</h3>
</template>

<script>
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import date from "@/data/data.json";

export default {
          name: "AnaliticPage"
}
am5.ready(function () {

          // Create root element
          var root = am5.Root.new("chartdiv");


          // Set themes
          root.setThemes([
                    am5themes_Animated.new(root)
          ]);


          // Create chart
          var chart = root.container.children.push(am5xy.XYChart.new(root, {
                    panX: true,
                    panY: true,
                    wheelX: "panX",
                    wheelY: "zoomX",
                    pinchZoomX: true
          }));

          // Add cursor
          var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
                    behavior: "none"
          }));
          cursor.lineY.set("visible", true);


          // Create axes
          var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
                    maxDeviation: 0.5,
                    baseInterval: {
                              timeUnit: "day",
                              count: 1
                    },
                    renderer: am5xy.AxisRendererX.new(root, {
                              pan: "zoom"
                    }),
                    tooltip: am5.Tooltip.new(root, {})
          }));

          var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
                    maxDeviation: 1,
                    renderer: am5xy.AxisRendererY.new(root, {
                              pan: "zoom"
                    })
          }));


          // Add series
          var series = chart.series.push(am5xy.SmoothedXLineSeries.new(root, {
                    name: "Series",
                    xAxis: xAxis,
                    yAxis: yAxis,
                    valueYField: date.visits,
                    valueXField: date.date,
                    tooltip: am5.Tooltip.new(root, {
                              labelText: "{valueY}"
                    })
          }));

          series.fills.template.setAll({
                    visible: true,
                    fillOpacity: 0.2
          });

          series.bullets.push(function () {
                    return am5.Bullet.new(root, {
                              locationY: 0,
                              sprite: am5.Circle.new(root, {
                                        radius: 4,
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


          series.data.setAll(date);


          // Make stuff animate on load
          series.appear(1000);
          chart.appear(1000, 100);

}); // end am5.ready()
</script>

<style>
#chartdiv {
          width: 100%;
          height: 500px;
}
</style>