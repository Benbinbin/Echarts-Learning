// 此脚本用于修改图表的参数

// 颜色分配
var colorRamp = ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026'];
var theOpac   = 1; // 透明度 0-1

// 地图相关
var theCenter = [121.49917602539062,31.197531659727318]; // 中心点坐标
var theZoom   = 9; //视角远近 数字
var theBear   = 270; // 地图旋转角度，正北为0，正东为90，正西为270，以此类推
var thePitch  = 30;   // 地图俯瞰角度，0为顶视图，60以上效果甚微

// 设置 mapbox 参数
var mapStyle = 'mapbox://styles/benbinbin/ckcyjoeg51m6u1iqvmvy3xf6u'; // 底图样式
var mapAccessToken = 'pk.eyJ1IjoiYmVuYmluYmluIiwiYSI6ImNrY3lmYXBpNDA5YjYydW1tNzdnYjVtOWoifQ.2qf0pRu__rRGlbtuPa7mfQ';   // 地图 token

// 点柱设置
var barSize   = 0.2; // 点柱大小
var barCorner = 0.5; // 点柱倒角，取值范围 0-1

// 光源设置
var theShadow = true; // 是否设置光源阴影
var theAlpha  = -40; // 光源高度
var theBeta   = 20; // 光源方向
