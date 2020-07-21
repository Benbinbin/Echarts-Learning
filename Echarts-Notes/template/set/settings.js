// 此脚本用于修改图表的参数

// 路线属性
var colorOrWidth = 3; // 当路线除了地理坐标数据外，还有 value 值数据，可以用不同的视觉通道对数据进行编译。0 代表既不用色彩也不用宽度来表示值，1 代表用色彩，2 代表用宽度，3 代表二者皆用
var theColorRamp = ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027']; // 路线颜色预设可选值
var theWidthRatio = 0.2 // 宽度与值的比值

// 固定属性，当该属性没有和值相关，会自动设成如下值
var theColor = 'rgb(200, 35, 45)'; // 线的颜色
var theWidth = 2; // 线的宽度
var theOpac = 0.3; // 线的透明度

// 地图相关
var theCenter = [114.265018, 30.594985]; // 中心点坐标
var theZoom = 12; //视角远近 数字

// 动画效果
var effectShow = true; // 是否展示动画
var theSpeed = 0; // 尾迹速度，当尾迹速度不等于 0 时，使用单次循环时间作为速度依据
var thePeriod = 6; // 单次循环时间，只有当尾迹速度为 0 时才能生效
var theEffWidth = 8; // 尾迹宽度
var theEffLength = 0.3; // 尾迹长度

/*
如果使用百度地图作为底图，需要申请 AccessToken，并将 html 文档中的相应的参数进行替换

< script type = "text/javascript"
src = "http://api.map.baidu.com/api?v=2.0&ak=L1gyDQb7Dx8YpXVcVly71IHK8GfpCV9d" > < /script>
将以上语句中的 ak=?替换为自己申请的 AccessToken
*/

// 百度地图样式
var mapStyle = [{
  "featureType": "land",
  "elementType": "geometry",
  "stylers": {
    "color": "#242f3eff"
  }
}, {
  "featureType": "manmade",
  "elementType": "geometry",
  "stylers": {
    "color": "#242f3eff"
  }
}, {
  "featureType": "water",
  "elementType": "geometry",
  "stylers": {
    "color": "#17263cff"
  }
}, {
  "featureType": "road",
  "elementType": "geometry.fill",
  "stylers": {
    "color": "#9e7d60ff"
  }
}, {
  "featureType": "road",
  "elementType": "geometry.stroke",
  "stylers": {
    "color": "#554631ff"
  }
}, {
  "featureType": "districtlabel",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#d69563ff"
  }
}, {
  "featureType": "districtlabel",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#17263cff",
    "weight": 3
  }
}, {
  "featureType": "poilabel",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#d69563ff"
  }
}, {
  "featureType": "poilabel",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#17263cff",
    "weight": 3
  }
}, {
  "featureType": "subway",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "railway",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "poilabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "subwaylabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "subwaylabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "tertiarywaysign",
  "elementType": "labels",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "tertiarywaysign",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "provincialwaysign",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "provincialwaysign",
  "elementType": "labels",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "nationalwaysign",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "nationalwaysign",
  "elementType": "labels",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "highwaysign",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "highwaysign",
  "elementType": "labels",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "green",
  "elementType": "geometry",
  "stylers": {
    "color": "#263b3eff"
  }
}, {
  "featureType": "nationalwaysign",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#d0021bff"
  }
}, {
  "featureType": "nationalwaysign",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#ffffffff"
  }
}, {
  "featureType": "city",
  "elementType": "labels",
  "stylers": {
    "visibility": "on"
  }
}, {
  "featureType": "city",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "city",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#d69563ff"
  }
}, {
  "featureType": "city",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#17263cff"
  }
}, {
  "featureType": "water",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#d69563ff"
  }
}, {
  "featureType": "water",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#242f3eff"
  }
}, {
  "featureType": "local",
  "elementType": "geometry.fill",
  "stylers": {
    "color": "#38414eff"
  }
}, {
  "featureType": "local",
  "elementType": "geometry.stroke",
  "stylers": {
    "color": "#ffffff00"
  }
}, {
  "featureType": "fourlevelway",
  "elementType": "geometry.fill",
  "stylers": {
    "color": "#38414eff"
  }
}, {
  "featureType": "fourlevelway",
  "elementType": "geometry.stroke",
  "stylers": {
    "color": "#ffffff00"
  }
}, {
  "featureType": "tertiaryway",
  "elementType": "geometry.fill",
  "stylers": {
    "color": "#38414eff"
  }
}, {
  "featureType": "tertiaryway",
  "elementType": "geometry.stroke",
  "stylers": {
    "color": "#ffffff00"
  }
}, {
  "featureType": "tertiaryway",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#759879ff"
  }
}, {
  "featureType": "fourlevelway",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#759879ff"
  }
}, {
  "featureType": "highway",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#759879ff"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry.fill",
  "stylers": {
    "color": "#9e7d60ff"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry.stroke",
  "stylers": {
    "color": "#554631ff"
  }
}, {
  "featureType": "provincialway",
  "elementType": "geometry.fill",
  "stylers": {
    "color": "#9e7d60ff"
  }
}, {
  "featureType": "provincialway",
  "elementType": "geometry.stroke",
  "stylers": {
    "color": "#554631ff"
  }
}, {
  "featureType": "tertiaryway",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#1a2e1cff"
  }
}, {
  "featureType": "fourlevelway",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#1a2e1cff"
  }
}, {
  "featureType": "highway",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#1a2e1cff"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#1a2e1cff"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#759879ff"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry.fill",
  "stylers": {
    "color": "#9e7d60ff"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry.stroke",
  "stylers": {
    "color": "#554631ff"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry.fill",
  "stylers": {
    "color": "#9e7d60ff"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry.stroke",
  "stylers": {
    "color": "#554631ff"
  }
}, {
  "featureType": "arterial",
  "elementType": "geometry.fill",
  "stylers": {
    "color": "#9e7d60ff"
  }
}, {
  "featureType": "arterial",
  "elementType": "geometry.stroke",
  "stylers": {
    "color": "#554631fa"
  }
}, {
  "featureType": "medicallabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "medicallabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "entertainmentlabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "entertainmentlabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "estatelabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "estatelabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "businesstowerlabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "businesstowerlabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "companylabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "companylabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "governmentlabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "governmentlabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "restaurantlabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "restaurantlabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "hotellabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "hotellabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "shoppinglabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "shoppinglabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "lifeservicelabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "lifeservicelabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "carservicelabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "carservicelabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "financelabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "financelabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "otherlabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "otherlabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "airportlabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "on"
  }
}, {
  "featureType": "airportlabel",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#d69563ff"
  }
}, {
  "featureType": "airportlabel",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#17263cff"
  }
}, {
  "featureType": "airportlabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "highway",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "6"
  }
}, {
  "featureType": "highway",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "7"
  }
}, {
  "featureType": "highway",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "8"
  }
}, {
  "featureType": "highway",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "9"
  }
}, {
  "featureType": "highway",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "10"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "6"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "7"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "8"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "9"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "10"
  }
}, {
  "featureType": "nationalway",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "6"
  }
}, {
  "featureType": "nationalway",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "7"
  }
}, {
  "featureType": "nationalway",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "8"
  }
}, {
  "featureType": "nationalway",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "9"
  }
}, {
  "featureType": "nationalway",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "10"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "6"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "7"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "8"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "9"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "10"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "6"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "7"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "8"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "9"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "10"
  }
}, {
  "featureType": "highway",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "6"
  }
}, {
  "featureType": "highway",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "7"
  }
}, {
  "featureType": "highway",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "8"
  }
}, {
  "featureType": "highway",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "9"
  }
}, {
  "featureType": "highway",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "10"
  }
}, {
  "featureType": "provincialway",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "8,9",
    "level": "8"
  }
}, {
  "featureType": "provincialway",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "8,9",
    "level": "9"
  }
}, {
  "featureType": "provincialway",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "8,9",
    "level": "8"
  }
}, {
  "featureType": "provincialway",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "8,9",
    "level": "9"
  }
}, {
  "featureType": "provincialway",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "8,9",
    "level": "8"
  }
}, {
  "featureType": "provincialway",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "8,9",
    "level": "9"
  }
}, {
  "featureType": "cityhighway",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "6"
  }
}, {
  "featureType": "cityhighway",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "7"
  }
}, {
  "featureType": "cityhighway",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "8"
  }
}, {
  "featureType": "cityhighway",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "9"
  }
}, {
  "featureType": "cityhighway",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "10"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "6"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "7"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "8"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "9"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "10"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "6"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "7"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "8"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "9"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "10"
  }
}, {
  "featureType": "arterial",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "9,10",
    "level": "9"
  }
}, {
  "featureType": "arterial",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "9,10",
    "level": "10"
  }
}, {
  "featureType": "arterial",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "9,10",
    "level": "9"
  }
}, {
  "featureType": "arterial",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "9,10",
    "level": "10"
  }
}, {
  "featureType": "arterial",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "9,10",
    "level": "9"
  }
}, {
  "featureType": "arterial",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "9,10",
    "level": "10"
  }
}, {
  "featureType": "building",
  "elementType": "geometry.topfill",
  "stylers": {
    "color": "#2a3341ff"
  }
}, {
  "featureType": "building",
  "elementType": "geometry.sidefill",
  "stylers": {
    "color": "#313b4cff"
  }
}, {
  "featureType": "building",
  "elementType": "geometry.stroke",
  "stylers": {
    "color": "#1a212eff"
  }
}, {
  "featureType": "road",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#759879ff"
  }
}, {
  "featureType": "road",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#1a2e1cff"
  }
}, {
  "featureType": "provincialway",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#759879ff"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#759879ff"
  }
}, {
  "featureType": "arterial",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#759879ff"
  }
}, {
  "featureType": "provincialway",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#1a2e1cff"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#1a2e1cff"
  }
}, {
  "featureType": "arterial",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#1a2e1cff"
  }
}, {
  "featureType": "local",
  "elementType": "labels",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "manmade",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#d69563ff"
  }
}, {
  "featureType": "manmade",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#17263cff"
  }
}, {
  "featureType": "subwaystation",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "transportationlabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "transportationlabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "estate",
  "elementType": "geometry",
  "stylers": {
    "color": "#2a3341ff"
  }
}]