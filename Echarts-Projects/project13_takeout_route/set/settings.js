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

// 如果使用百度地图作为底图，需要申请 AccessToken，并将 html 文档中的相应的参数进行替换
// 百度地图样式
var mapStyle = [{
  "featureType": "land",
  "elementType": "geometry",
  "stylers": {
    "color": "#f5f6f7ff"
  }
}, {
  "featureType": "water",
  "elementType": "geometry",
  "stylers": {
    "color": "#c4d7f5ff"
  }
}, {
  "featureType": "green",
  "elementType": "geometry",
  "stylers": {
    "color": "#dcf2d5ff"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry.fill",
  "stylers": {
    "color": "#ffe59eff"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry.stroke",
  "stylers": {
    "color": "#f5d48cff"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry.fill",
  "stylers": {
    "color": "#fff6ccff"
  }
}, {
  "featureType": "provincialway",
  "elementType": "geometry.fill",
  "stylers": {
    "color": "#fff6ccff"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry.fill",
  "stylers": {
    "color": "#fff6ccff"
  }
}, {
  "featureType": "arterial",
  "elementType": "geometry.fill",
  "stylers": {
    "color": "#fff6ccff"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry.stroke",
  "stylers": {
    "color": "#f2dc9dff"
  }
}, {
  "featureType": "provincialway",
  "elementType": "geometry.stroke",
  "stylers": {
    "color": "#f2dc9dff"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry.stroke",
  "stylers": {
    "color": "#f2dc9dff"
  }
}, {
  "featureType": "arterial",
  "elementType": "geometry.stroke",
  "stylers": {
    "color": "#f2dc9dff"
  }
}, {
  "featureType": "building",
  "elementType": "geometry.sidefill",
  "stylers": {
    "color": "#e6ebf0ff"
  }
}, {
  "featureType": "building",
  "elementType": "geometry.topfill",
  "stylers": {
    "color": "#e6ebf0ff"
  }
}, {
  "featureType": "building",
  "elementType": "geometry.stroke",
  "stylers": {
    "color": "#d8e2ebff"
  }
}, {
  "featureType": "tertiaryway",
  "elementType": "geometry.fill",
  "stylers": {
    "color": "#ffffffff"
  }
}, {
  "featureType": "tertiaryway",
  "elementType": "geometry.stroke",
  "stylers": {
    "color": "#dfe4ebff"
  }
}, {
  "featureType": "fourlevelway",
  "elementType": "geometry.fill",
  "stylers": {
    "color": "#ffffffff"
  }
}, {
  "featureType": "fourlevelway",
  "elementType": "geometry.stroke",
  "stylers": {
    "color": "#dfe4ebff"
  }
}, {
  "featureType": "local",
  "elementType": "geometry.fill",
  "stylers": {
    "color": "#ffffffff"
  }
}, {
  "featureType": "local",
  "elementType": "geometry.stroke",
  "stylers": {
    "color": "#dfe4ebff"
  }
}, {
  "featureType": "scenicspotsway",
  "elementType": "geometry.fill",
  "stylers": {
    "color": "#ffffffff"
  }
}, {
  "featureType": "scenicspotsway",
  "elementType": "geometry.stroke",
  "stylers": {
    "color": "#dfe4ebff"
  }
}, {
  "featureType": "universityway",
  "elementType": "geometry.stroke",
  "stylers": {
    "color": "#dfe4ebff"
  }
}, {
  "featureType": "universityway",
  "elementType": "geometry.fill",
  "stylers": {
    "color": "#ffffffff"
  }
}, {
  "featureType": "vacationway",
  "elementType": "geometry.stroke",
  "stylers": {
    "color": "#dfe4ebff"
  }
}, {
  "featureType": "vacationway",
  "elementType": "geometry.fill",
  "stylers": {
    "color": "#ffffffff"
  }
}, {
  "featureType": "town",
  "elementType": "labels.text",
  "stylers": {
    "fontsize": 18
  }
}, {
  "featureType": "town",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#9ca0a3ff"
  }
}, {
  "featureType": "town",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#ffffff00"
  }
}, {
  "featureType": "highway",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#c0792dff"
  }
}, {
  "featureType": "highway",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#ffffff00"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#c0792dff"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#ffffff60"
  }
}, {
  "featureType": "provincialway",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#c0792dff"
  }
}, {
  "featureType": "provincialway",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#ffffff00"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#c0792dff"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#ffffff00"
  }
}, {
  "featureType": "arterial",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#ffffff00"
  }
}, {
  "featureType": "arterial",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#c0792dff"
  }
}, {
  "featureType": "arterial",
  "elementType": "labels.text",
  "stylers": {
    "fontsize": 24
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels.text",
  "stylers": {
    "fontsize": 24
  }
}, {
  "featureType": "provincialway",
  "elementType": "labels.text",
  "stylers": {
    "fontsize": 24
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels.text",
  "stylers": {
    "fontsize": 24
  }
}, {
  "featureType": "highway",
  "elementType": "labels.text",
  "stylers": {
    "fontsize": 24
  }
}, {
  "featureType": "scenicspotslabel",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#9ca0a3ff"
  }
}, {
  "featureType": "scenicspotslabel",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#ffffff00"
  }
}, {
  "featureType": "scenicspotslabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "educationlabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "on"
  }
}, {
  "featureType": "educationlabel",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#9ca0a3ff"
  }
}, {
  "featureType": "educationlabel",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#ffffff00"
  }
}, {
  "featureType": "medicallabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "on"
  }
}, {
  "featureType": "medicallabel",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#9ca0a3ff"
  }
}, {
  "featureType": "medicallabel",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#ffffff00"
  }
}, {
  "featureType": "entertainmentlabel",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#9ca0a3ff"
  }
}, {
  "featureType": "entertainmentlabel",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#ffffff00"
  }
}, {
  "featureType": "estatelabel",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#9ca0a3ff"
  }
}, {
  "featureType": "estatelabel",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#ffffff00"
  }
}, {
  "featureType": "estatelabel",
  "elementType": "labels.icon",
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
  "featureType": "businesstowerlabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "businesstowerlabel",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#9ca0a3ff"
  }
}, {
  "featureType": "businesstowerlabel",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#ffffff00"
  }
}, {
  "featureType": "companylabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "companylabel",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#9ca0a3ff"
  }
}, {
  "featureType": "companylabel",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#ffffff00"
  }
}, {
  "featureType": "governmentlabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "on"
  }
}, {
  "featureType": "governmentlabel",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#9ca0a3ff"
  }
}, {
  "featureType": "governmentlabel",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#ffffff00"
  }
}, {
  "featureType": "restaurantlabel",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#9ca0a3ff"
  }
}, {
  "featureType": "restaurantlabel",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#ffffff00"
  }
}, {
  "featureType": "restaurantlabel",
  "elementType": "labels.icon",
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
  "featureType": "hotellabel",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#ffffff00"
  }
}, {
  "featureType": "hotellabel",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#9ca0a3ff"
  }
}, {
  "featureType": "shoppinglabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "on"
  }
}, {
  "featureType": "shoppinglabel",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#ffffff00"
  }
}, {
  "featureType": "shoppinglabel",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#9ca0a3ff"
  }
}, {
  "featureType": "lifeservicelabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "lifeservicelabel",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#ffffff00"
  }
}, {
  "featureType": "lifeservicelabel",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#9ca0a3ff"
  }
}, {
  "featureType": "carservicelabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "carservicelabel",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#ffffff00"
  }
}, {
  "featureType": "carservicelabel",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#9ca0a3ff"
  }
}, {
  "featureType": "transportationlabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "on"
  }
}, {
  "featureType": "transportationlabel",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#ffffff00"
  }
}, {
  "featureType": "transportationlabel",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#9ca0a3ff"
  }
}, {
  "featureType": "financelabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "financelabel",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#ffffff00"
  }
}, {
  "featureType": "financelabel",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#9ca0a3ff"
  }
}, {
  "featureType": "tertiaryway",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#9ca0a3ff"
  }
}, {
  "featureType": "tertiaryway",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#ffffff00"
  }
}, {
  "featureType": "tertiaryway",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "fourlevelway",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "fourlevelway",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#9ca0a3ff"
  }
}, {
  "featureType": "fourlevelway",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#ffffff00"
  }
}, {
  "featureType": "local",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#9ca0a3ff"
  }
}, {
  "featureType": "local",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#ffffff00"
  }
}, {
  "featureType": "local",
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
  "featureType": "lifeservicelabel",
  "elementType": "labels",
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
  "featureType": "financelabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "scenicspotslabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "on"
  }
}, {
  "featureType": "manmade",
  "elementType": "geometry",
  "stylers": {
    "color": "#f5f6f7ff"
  }
}, {
  "featureType": "subway",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "12,13",
    "level": "12"
  }
}, {
  "featureType": "subway",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "12,13",
    "level": "13"
  }
}, {
  "featureType": "subway",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "12,13",
    "level": "12"
  }
}, {
  "featureType": "subway",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "12,13",
    "level": "13"
  }
}, {
  "featureType": "subwaylabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "13,13",
    "level": "13"
  }
}, {
  "featureType": "subwaylabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "13,13",
    "level": "13"
  }
}, {
  "featureType": "subwaylabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "13,13",
    "level": "13"
  }
}, {
  "featureType": "railway",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "scenicspotslabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "10,15",
    "level": "10"
  }
}, {
  "featureType": "scenicspotslabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "10,15",
    "level": "11"
  }
}, {
  "featureType": "scenicspotslabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "10,15",
    "level": "12"
  }
}, {
  "featureType": "scenicspotslabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "10,15",
    "level": "13"
  }
}, {
  "featureType": "scenicspotslabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "10,15",
    "level": "14"
  }
}, {
  "featureType": "scenicspotslabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "10,15",
    "level": "15"
  }
}, {
  "featureType": "scenicspotslabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "10,15",
    "level": "10"
  }
}, {
  "featureType": "scenicspotslabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "10,15",
    "level": "11"
  }
}, {
  "featureType": "scenicspotslabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "10,15",
    "level": "12"
  }
}, {
  "featureType": "scenicspotslabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "10,15",
    "level": "13"
  }
}, {
  "featureType": "scenicspotslabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "10,15",
    "level": "14"
  }
}, {
  "featureType": "scenicspotslabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "10,15",
    "level": "15"
  }
}, {
  "featureType": "scenicspotslabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "10,15",
    "level": "10"
  }
}, {
  "featureType": "scenicspotslabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "10,15",
    "level": "11"
  }
}, {
  "featureType": "scenicspotslabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "10,15",
    "level": "12"
  }
}, {
  "featureType": "scenicspotslabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "10,15",
    "level": "13"
  }
}, {
  "featureType": "scenicspotslabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "10,15",
    "level": "14"
  }
}, {
  "featureType": "scenicspotslabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "10,15",
    "level": "15"
  }
}, {
  "featureType": "district",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#9ca0a3ff"
  }
}, {
  "featureType": "district",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#ffffffff"
  }
}, {
  "featureType": "city",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#9ca0a3ff"
  }
}, {
  "featureType": "city",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#ffffffff"
  }
}, {
  "featureType": "city",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "on"
  }
}, {
  "featureType": "country",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#9ca0a3ff"
  }
}, {
  "featureType": "country",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#ffffffff"
  }
}, {
  "featureType": "continent",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#a77726ff"
  }
}, {
  "featureType": "continent",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#ffffffff"
  }
}, {
  "featureType": "medicallabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "13,16",
    "level": "13"
  }
}, {
  "featureType": "medicallabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "13,16",
    "level": "14"
  }
}, {
  "featureType": "medicallabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "13,16",
    "level": "15"
  }
}, {
  "featureType": "medicallabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "13,16",
    "level": "16"
  }
}, {
  "featureType": "medicallabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "13,16",
    "level": "13"
  }
}, {
  "featureType": "medicallabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "13,16",
    "level": "14"
  }
}, {
  "featureType": "medicallabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "13,16",
    "level": "15"
  }
}, {
  "featureType": "medicallabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "13,16",
    "level": "16"
  }
}, {
  "featureType": "medicallabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "13,16",
    "level": "13"
  }
}, {
  "featureType": "medicallabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "13,16",
    "level": "14"
  }
}, {
  "featureType": "medicallabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "13,16",
    "level": "15"
  }
}, {
  "featureType": "medicallabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "13,16",
    "level": "16"
  }
}, {
  "featureType": "entertainmentlabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "12,17",
    "level": "12"
  }
}, {
  "featureType": "entertainmentlabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "12,17",
    "level": "13"
  }
}, {
  "featureType": "entertainmentlabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "12,17",
    "level": "14"
  }
}, {
  "featureType": "entertainmentlabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "12,17",
    "level": "15"
  }
}, {
  "featureType": "entertainmentlabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "12,17",
    "level": "16"
  }
}, {
  "featureType": "entertainmentlabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "12,17",
    "level": "17"
  }
}, {
  "featureType": "entertainmentlabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "12,17",
    "level": "12"
  }
}, {
  "featureType": "entertainmentlabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "12,17",
    "level": "13"
  }
}, {
  "featureType": "entertainmentlabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "12,17",
    "level": "14"
  }
}, {
  "featureType": "entertainmentlabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "12,17",
    "level": "15"
  }
}, {
  "featureType": "entertainmentlabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "12,17",
    "level": "16"
  }
}, {
  "featureType": "entertainmentlabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "12,17",
    "level": "17"
  }
}, {
  "featureType": "entertainmentlabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "12,17",
    "level": "12"
  }
}, {
  "featureType": "entertainmentlabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "12,17",
    "level": "13"
  }
}, {
  "featureType": "entertainmentlabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "12,17",
    "level": "14"
  }
}, {
  "featureType": "entertainmentlabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "12,17",
    "level": "15"
  }
}, {
  "featureType": "entertainmentlabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "12,17",
    "level": "16"
  }
}, {
  "featureType": "entertainmentlabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "12,17",
    "level": "17"
  }
}, {
  "featureType": "estatelabel",
  "elementType": "labels.text",
  "stylers": {
    "fontsize": 23
  }
}, {
  "featureType": "estatelabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "13,16",
    "level": "13"
  }
}, {
  "featureType": "estatelabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "13,16",
    "level": "14"
  }
}, {
  "featureType": "estatelabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "13,16",
    "level": "15"
  }
}, {
  "featureType": "estatelabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "13,16",
    "level": "16"
  }
}, {
  "featureType": "estatelabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "13,16",
    "level": "13"
  }
}, {
  "featureType": "estatelabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "13,16",
    "level": "14"
  }
}, {
  "featureType": "estatelabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "13,16",
    "level": "15"
  }
}, {
  "featureType": "estatelabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "13,16",
    "level": "16"
  }
}, {
  "featureType": "estatelabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "13,16",
    "level": "13"
  }
}, {
  "featureType": "estatelabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "13,16",
    "level": "14"
  }
}, {
  "featureType": "estatelabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "13,16",
    "level": "15"
  }
}, {
  "featureType": "estatelabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "13,16",
    "level": "16"
  }
}, {
  "featureType": "businesstowerlabel",
  "elementType": "labels.text",
  "stylers": {
    "fontsize": 23
  }
}, {
  "featureType": "businesstowerlabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "12,16",
    "level": "12"
  }
}, {
  "featureType": "businesstowerlabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "12,16",
    "level": "13"
  }
}, {
  "featureType": "businesstowerlabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "12,16",
    "level": "14"
  }
}, {
  "featureType": "businesstowerlabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "12,16",
    "level": "15"
  }
}, {
  "featureType": "businesstowerlabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "12,16",
    "level": "16"
  }
}, {
  "featureType": "businesstowerlabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "12,16",
    "level": "12"
  }
}, {
  "featureType": "businesstowerlabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "12,16",
    "level": "13"
  }
}, {
  "featureType": "businesstowerlabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "12,16",
    "level": "14"
  }
}, {
  "featureType": "businesstowerlabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "12,16",
    "level": "15"
  }
}, {
  "featureType": "businesstowerlabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "12,16",
    "level": "16"
  }
}, {
  "featureType": "businesstowerlabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "12,16",
    "level": "12"
  }
}, {
  "featureType": "businesstowerlabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "12,16",
    "level": "13"
  }
}, {
  "featureType": "businesstowerlabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "12,16",
    "level": "14"
  }
}, {
  "featureType": "businesstowerlabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "12,16",
    "level": "15"
  }
}, {
  "featureType": "businesstowerlabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "12,16",
    "level": "16"
  }
}, {
  "featureType": "governmentlabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "13,17",
    "level": "13"
  }
}, {
  "featureType": "governmentlabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "13,17",
    "level": "14"
  }
}, {
  "featureType": "governmentlabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "13,17",
    "level": "15"
  }
}, {
  "featureType": "governmentlabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "13,17",
    "level": "16"
  }
}, {
  "featureType": "governmentlabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "13,17",
    "level": "17"
  }
}, {
  "featureType": "governmentlabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "13,17",
    "level": "13"
  }
}, {
  "featureType": "governmentlabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "13,17",
    "level": "14"
  }
}, {
  "featureType": "governmentlabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "13,17",
    "level": "15"
  }
}, {
  "featureType": "governmentlabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "13,17",
    "level": "16"
  }
}, {
  "featureType": "governmentlabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "13,17",
    "level": "17"
  }
}, {
  "featureType": "governmentlabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "13,17",
    "level": "13"
  }
}, {
  "featureType": "governmentlabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "13,17",
    "level": "14"
  }
}, {
  "featureType": "governmentlabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "13,17",
    "level": "15"
  }
}, {
  "featureType": "governmentlabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "13,17",
    "level": "16"
  }
}, {
  "featureType": "governmentlabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "13,17",
    "level": "17"
  }
}, {
  "featureType": "restaurantlabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "13,18",
    "level": "13"
  }
}, {
  "featureType": "restaurantlabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "13,18",
    "level": "14"
  }
}, {
  "featureType": "restaurantlabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "13,18",
    "level": "15"
  }
}, {
  "featureType": "restaurantlabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "13,18",
    "level": "16"
  }
}, {
  "featureType": "restaurantlabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "13,18",
    "level": "17"
  }
}, {
  "featureType": "restaurantlabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "13,18",
    "level": "18"
  }
}, {
  "featureType": "restaurantlabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "13,18",
    "level": "13"
  }
}, {
  "featureType": "restaurantlabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "13,18",
    "level": "14"
  }
}, {
  "featureType": "restaurantlabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "13,18",
    "level": "15"
  }
}, {
  "featureType": "restaurantlabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "13,18",
    "level": "16"
  }
}, {
  "featureType": "restaurantlabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "13,18",
    "level": "17"
  }
}, {
  "featureType": "restaurantlabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "13,18",
    "level": "18"
  }
}, {
  "featureType": "restaurantlabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "13,18",
    "level": "13"
  }
}, {
  "featureType": "restaurantlabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "13,18",
    "level": "14"
  }
}, {
  "featureType": "restaurantlabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "13,18",
    "level": "15"
  }
}, {
  "featureType": "restaurantlabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "13,18",
    "level": "16"
  }
}, {
  "featureType": "restaurantlabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "13,18",
    "level": "17"
  }
}, {
  "featureType": "restaurantlabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "13,18",
    "level": "18"
  }
}, {
  "featureType": "hotellabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "14,16",
    "level": "14"
  }
}, {
  "featureType": "hotellabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "14,16",
    "level": "15"
  }
}, {
  "featureType": "hotellabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "14,16",
    "level": "16"
  }
}, {
  "featureType": "hotellabel",
  "elementType": "labels.text",
  "stylers": {
    "fontsize": 22,
    "curZoomRegionId": "0",
    "curZoomRegion": "14,16",
    "level": "14"
  }
}, {
  "featureType": "hotellabel",
  "elementType": "labels.text",
  "stylers": {
    "fontsize": 22,
    "curZoomRegionId": "0",
    "curZoomRegion": "14,16",
    "level": "15"
  }
}, {
  "featureType": "hotellabel",
  "elementType": "labels.text",
  "stylers": {
    "fontsize": 22,
    "curZoomRegionId": "0",
    "curZoomRegion": "14,16",
    "level": "16"
  }
}, {
  "featureType": "hotellabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "14,16",
    "level": "14"
  }
}, {
  "featureType": "hotellabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "14,16",
    "level": "15"
  }
}, {
  "featureType": "hotellabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "14,16",
    "level": "16"
  }
}, {
  "featureType": "hotellabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "14,16",
    "level": "14"
  }
}, {
  "featureType": "hotellabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "14,16",
    "level": "15"
  }
}, {
  "featureType": "hotellabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "14,16",
    "level": "16"
  }
}, {
  "featureType": "shoppinglabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "11,16",
    "level": "11"
  }
}, {
  "featureType": "shoppinglabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "11,16",
    "level": "12"
  }
}, {
  "featureType": "shoppinglabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "11,16",
    "level": "13"
  }
}, {
  "featureType": "shoppinglabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "11,16",
    "level": "14"
  }
}, {
  "featureType": "shoppinglabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "11,16",
    "level": "15"
  }
}, {
  "featureType": "shoppinglabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "11,16",
    "level": "16"
  }
}, {
  "featureType": "shoppinglabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "11,16",
    "level": "11"
  }
}, {
  "featureType": "shoppinglabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "11,16",
    "level": "12"
  }
}, {
  "featureType": "shoppinglabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "11,16",
    "level": "13"
  }
}, {
  "featureType": "shoppinglabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "11,16",
    "level": "14"
  }
}, {
  "featureType": "shoppinglabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "11,16",
    "level": "15"
  }
}, {
  "featureType": "shoppinglabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "11,16",
    "level": "16"
  }
}, {
  "featureType": "shoppinglabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "11,16",
    "level": "11"
  }
}, {
  "featureType": "shoppinglabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "11,16",
    "level": "12"
  }
}, {
  "featureType": "shoppinglabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "11,16",
    "level": "13"
  }
}, {
  "featureType": "shoppinglabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "11,16",
    "level": "14"
  }
}, {
  "featureType": "shoppinglabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "11,16",
    "level": "15"
  }
}, {
  "featureType": "shoppinglabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "11,16",
    "level": "16"
  }
}, {
  "featureType": "shoppinglabel",
  "elementType": "labels.text",
  "stylers": {
    "fontsize": 23
  }
}, {
  "featureType": "hotellabel",
  "elementType": "labels.text",
  "stylers": {
    "fontsize": 23
  }
}, {
  "featureType": "restaurantlabel",
  "elementType": "labels.text",
  "stylers": {
    "fontsize": 23
  }
}, {
  "featureType": "governmentlabel",
  "elementType": "labels.text",
  "stylers": {
    "fontsize": 23
  }
}, {
  "featureType": "companylabel",
  "elementType": "labels.text",
  "stylers": {
    "fontsize": 24
  }
}, {
  "featureType": "entertainmentlabel",
  "elementType": "labels.text",
  "stylers": {
    "fontsize": 23
  }
}, {
  "featureType": "medicallabel",
  "elementType": "labels.text",
  "stylers": {
    "fontsize": 23
  }
}, {
  "featureType": "educationlabel",
  "elementType": "labels.text",
  "stylers": {
    "fontsize": 23
  }
}, {
  "featureType": "scenicspotslabel",
  "elementType": "labels.text",
  "stylers": {
    "fontsize": 23
  }
}, {
  "featureType": "airportlabel",
  "elementType": "labels.text",
  "stylers": {
    "fontsize": 23
  }
}, {
  "featureType": "water",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#9ca0a3ff"
  }
}, {
  "featureType": "water",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#ffffffff"
  }
}, {
  "featureType": "manmade",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#9ca0a3ff"
  }
}, {
  "featureType": "manmade",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#ffffff00"
  }
}, {
  "featureType": "education",
  "elementType": "labels",
  "stylers": {
    "visibility": "on"
  }
}, {
  "featureType": "transportationlabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "12,13",
    "level": "12"
  }
}, {
  "featureType": "transportationlabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "12,13",
    "level": "13"
  }
}, {
  "featureType": "transportationlabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "12,13",
    "level": "12"
  }
}, {
  "featureType": "transportationlabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "12,13",
    "level": "13"
  }
}, {
  "featureType": "transportationlabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "12,13",
    "level": "12"
  }
}, {
  "featureType": "transportationlabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "12,13",
    "level": "13"
  }
}, {
  "featureType": "educationlabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "11,14",
    "level": "11"
  }
}, {
  "featureType": "educationlabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "11,14",
    "level": "12"
  }
}, {
  "featureType": "educationlabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "11,14",
    "level": "13"
  }
}, {
  "featureType": "educationlabel",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "11,14",
    "level": "14"
  }
}, {
  "featureType": "educationlabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "11,14",
    "level": "11"
  }
}, {
  "featureType": "educationlabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "11,14",
    "level": "12"
  }
}, {
  "featureType": "educationlabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "11,14",
    "level": "13"
  }
}, {
  "featureType": "educationlabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "11,14",
    "level": "14"
  }
}, {
  "featureType": "educationlabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "11,14",
    "level": "11"
  }
}, {
  "featureType": "educationlabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "11,14",
    "level": "12"
  }
}, {
  "featureType": "educationlabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "11,14",
    "level": "13"
  }
}, {
  "featureType": "educationlabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "11,14",
    "level": "14"
  }
}, {
  "featureType": "transportationlabel",
  "elementType": "labels.text",
  "stylers": {
    "fontsize": 23
  }
}, {
  "featureType": "manmade",
  "elementType": "labels.text",
  "stylers": {
    "fontsize": 23
  }
}, {
  "featureType": "scenicspots",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#ab76b6ff"
  }
}, {
  "featureType": "scenicspots",
  "elementType": "labels.text",
  "stylers": {
    "fontsize": 23
  }
}]