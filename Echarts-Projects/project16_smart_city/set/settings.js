// 此脚本用于修改图表的参数

// 路线属性，设置路线数据中 value 值使用何种视觉通道进行映射
var colorOrWidth = 2; // 0 代表既不用色彩也不用宽度来表示值，1 代表用色彩，2代表用宽度，3代表二者皆用
var theColorRamp = ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027']; // 路线颜色
var theWidthRatio = 0.005 // 宽度与值的比值

// 固定属性，当该属性没有和值相关，会自动设成如下值
var theColor = 'rgb(300,40,0)'; // 路线颜色
var theWidth = 1 // 路线粗细
var theOpac = 0.1; // 透明度 0-1

// 地图相关
var theCenter = [120.151087, 30.249492]; // 中心点坐标
var theZoom = 15; //视角远近 数字
var theBear = 0; // 地图旋转角度，正北为0，正东为90，正西为270，以此类推
var thePitch = 90; // 地图俯瞰角度，0为顶视图，60以上效果甚微

// 设置 mapbox 参数
var mapStyle = 'mapbox://styles/yipeiz/cjb788d051eue2rp5hhq2jw2h'; // 底图样式
var mapAccessToken = 'pk.eyJ1IjoiYmVuYmluYmluIiwiYSI6ImNrZDU4aGZvZTAzNW0zMnQxcWtsZGhsYTQifQ.2aH_JPLLwMABzcaa5_Rr0w'; // 地图 token

// 动画效果
var effectShow = true; // 是否展示动画
var theSpeed = 50; // 尾迹速度
var theEffWidth = 1; // 尾迹宽度
var theEffLength = 10; // 尾迹长度
var theEffOpac = 1; // 尾迹透明度

// 建筑相关
var theRough = 0.5; // 表面粗糙度
var theMetal = 0.5; // 金属质感
var theDT = 'asset/woods.jpg'; // 表面贴图，不需要贴图改为 ‘’即可
var theAC = 'asset/globe_light2.hdr'; // 环境光贴图
