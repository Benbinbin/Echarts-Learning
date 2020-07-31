// 城市, 城市_lng, 城市_lat
let cities = [
  ['雅安', 102.661567, 29.913642],
  ['景德镇', 117.269338, 29.307125],
  ['南宁', 108.464016, 23.058413],
  ['无锡', 120.35163, 31.661544],
  ['松原', 124.475154, 44.800198],
  ['天津', 117.332395, 39.308554],
  ['忻州', 112.430271, 38.691438],
  ['河源', 114.957578, 24.041916],
  ['崇左', 107.275594, 22.502504],
  ['亳州', 116.182134, 33.432538],
  ['泉州', 118.255655, 25.21117],
  ['广安', 106.663515, 30.424938],
  ['本溪', 124.077614, 41.190786],
  ['烟台', 120.80546, 37.236477],
  ['绥化', 126.616088, 46.890019],
  ['台州', 121.089649, 28.792008],
  ['舟山', 122.139172, 30.055394],
  ['茂名', 110.952666, 22.015237],
  ['晋城', 112.705076, 35.610698],
  ['鹤岗', 130.315054, 47.760119],
  ['拉萨', 91.10288, 30.033452],
  ['平凉', 107.228487, 35.20449],
  ['惠州', 114.497757, 23.245028],
  ['揭阳', 116.116729, 23.337536],
  ['镇江', 119.481985, 32.066775],
  ['辽源', 125.304837, 42.809734],
  ['安顺', 105.951366, 25.995682],
  ['新余', 114.851203, 27.847231],
  ['吉安', 114.822849, 26.973],
  ['宝鸡', 107.201964, 34.378313],
  ['铜陵', 117.894387, 30.94486],
  ['芜湖', 118.326618, 31.066737],
  ['荆州', 112.655928, 29.84848],
  ['吉林', 126.84129, 43.57746],
  ['保山', 98.972573, 24.979054],
  ['丽水', 119.510528, 28.198296],
  ['十堰', 110.440278, 32.458175],
  ['宿州', 117.212165, 33.859665],
  ['广州', 113.53531, 23.357246],
  ['佛山', 112.945082, 23.012775],
  ['商丘', 115.699501, 34.290971],
  ['张掖', 99.90172, 38.923585],
  ['毕节', 105.210245, 27.068433],
  ['鹤壁', 114.354193, 35.644908],
  ['晋中', 112.961856, 37.32793],
  ['西安', 108.789504, 34.110782],
  ['天水', 105.74015, 34.650472],
  ['随州', 113.424642, 31.829691],
  ['昭通', 103.998145, 27.652586],
  ['滁州', 118.098885, 32.544985],
  ['中山', 113.389491, 22.522114],
  ['宜春', 115.061146, 28.570098],
  ['克拉玛依', 85.244088, 45.606783],
  ['鹰潭', 117.10685, 28.225382],
  ['漳州', 117.441201, 24.383196],
  ['焦作', 113.117443, 35.106131],
  ['百色', 107.035773, 23.661488],
  ['益阳', 111.808649, 28.333433],
  ['内江', 104.907949, 29.641108],
  ['南阳', 112.286516, 33.046253],
  ['莱芜', 117.651839, 36.286707],
  ['营口', 122.487313, 40.359756],
  ['周口', 114.878293, 33.724344],
  ['四平', 124.473024, 43.569145],
  ['乐山', 103.532404, 29.178283],
  ['信阳', 114.883649, 32.08166],
  ['宜宾', 104.635831, 28.571277],
  ['聊城', 115.881984, 36.458088],
  ['定西', 104.450809, 35.118872],
  ['黄石', 115.022554, 29.928136],
  ['常州', 119.679057, 31.692554],
  ['嘉峪关', 98.195783, 39.816487],
  ['长春', 125.76674, 44.376873],
  ['白银', 105.025181, 36.245205],
  ['贵港', 109.998176, 23.310032],
  ['商洛', 109.898496, 33.649088],
  ['厦门', 118.110688, 24.683045],
  ['郴州', 113.13484, 25.8117],
  ['平顶山', 113.014207, 33.796872],
  ['固原', 106.182674, 35.949387],
  ['深圳', 113.981097, 22.661217],
  ['朔州', 112.731073, 39.451543],
  ['通辽', 121.57732, 43.818989],
  ['银川', 106.341245, 38.219284],
  ['临汾', 111.374331, 36.235388],
  ['长治', 112.916015, 36.476157],
  ['汕尾', 115.532048, 23.015488],
  ['酒泉', 96.225551, 40.458181],
  ['九江', 115.437787, 29.32798],
  ['安阳', 114.636914, 35.483243],
  ['怀化', 110.069226, 27.54273],
  ['丹东', 124.406589, 40.548591],
  ['六盘水', 104.651763, 25.854751],
  ['漯河', 113.902628, 33.656818],
  ['安康', 108.929656, 32.757398],
  ['乌兰察布', 112.459882, 41.680864],
  ['东莞', 113.877718, 22.985248],
  ['双鸭山', 132.144829, 46.307246],
  ['池州', 117.366095, 30.283839],
  ['枣庄', 117.310288, 35.03256],
  ['杭州', 119.484701, 29.90498],
  ['泰州', 120.057552, 32.295852],
  ['阿拉善盟', 102.484793, 40.499734],
  ['呼伦贝尔', 121.178174, 49.651952],
  ['曲靖', 103.938952, 25.701321],
  ['淄博', 118.0105, 36.59147],
  ['德阳', 104.430668, 31.133976],
  ['延安', 109.320506, 36.437659],
  ['重庆', 107.864385, 30.055374],
  ['日照', 119.134088, 35.584176],
  ['柳州', 109.379697, 24.937061],
  ['运城', 111.086591, 35.194934],
  ['钦州', 109.024508, 22.183301],
  ['黄山', 118.077165, 29.906089],
  ['咸阳', 108.449413, 34.827231],
  ['咸宁', 114.174915, 29.625916],
  ['赣州', 115.270276, 25.70677],
  ['抚顺', 124.653899, 41.832797],
  ['绵阳', 104.705358, 31.846863],
  ['石嘴山', 106.517789, 38.975501],
  ['六安', 116.312146, 31.756059],
  ['邯郸', 114.545553, 36.550924],
  ['泸州', 105.462114, 28.550865],
  ['韶关', 113.772863, 24.817502],
  ['乌海', 106.882873, 39.566963],
  ['张家界', 110.529991, 29.392047],
  ['沧州', 116.752696, 38.265766],
  ['三明', 117.397601, 26.299336],
  ['东营', 118.615798, 37.630332],
  ['七台河', 130.862745, 45.897278],
  ['石家庄', 114.442846, 38.128959],
  ['太原', 112.314062, 37.959541],
  ['达州', 107.642724, 31.36394],
  ['岳阳', 113.255373, 29.06454],
  ['锦州', 122.127607, 41.705694],
  ['滨州', 117.864584, 37.575764],
  ['玉溪', 102.678677, 24.227228],
  ['盐城', 120.175286, 33.515356],
  ['三亚', 109.417993, 18.392068],
  ['新乡', 114.092212, 35.267077],
  ['绍兴', 120.628874, 29.712672],
  ['淮北', 116.694558, 33.74921],
  ['泰安', 117.035711, 36.000986],
  ['保定', 115.168614, 39.022294],
  ['鄂州', 114.805509, 30.44902],
  ['苏州', 120.641803, 31.375971],
  ['广元', 105.779659, 32.260691],
  ['阳江', 111.774205, 22.038302],
  ['衡水', 115.852177, 37.636265],
  ['衡阳', 112.57342, 26.79253],
  ['长沙', 113.152959, 28.229513],
  ['北京', 116.409349, 40.184118],
  ['珠海', 113.251443, 22.161989],
  ['佳木斯', 132.200215, 47.255087],
  ['河池', 107.840099, 24.644518],
  ['徐州', 117.480706, 34.258777],
  ['防城港', 108.00251, 21.882239],
  ['淮安', 118.961845, 33.356152],
  ['攀枝花', 101.731413, 26.806194],
  ['大庆', 124.317028, 46.527883],
  ['开封', 114.534457, 34.608638],
  ['洛阳', 112.024228, 34.286277],
  ['蚌埠', 117.327664, 33.111987],
  ['抚州', 116.433349, 27.509297],
  ['鄂尔多斯', 108.618594, 39.409253],
  ['云浮', 111.791609, 22.864599],
  ['宿迁', 118.518044, 33.784582],
  ['濮阳', 115.18618, 35.81815],
  ['安庆', 116.594269, 30.610675],
  ['葫芦岛', 120.192864, 40.626174],
  ['南通', 120.996757, 32.189372],
  ['阜阳', 115.701808, 32.915863],
  ['萍乡', 113.900286, 27.515516],
  ['巴中', 107.038189, 32.015597],
  ['常德', 111.523851, 29.297441],
  ['沈阳', 123.136692, 42.093659],
  ['白城', 123.010021, 45.342611],
  ['大连', 122.219576, 39.612432],
  ['通化', 125.948225, 41.9508],
  ['荆门', 112.60923, 31.071077],
  ['上饶', 117.949765, 28.760084],
  ['北海', 109.335613, 21.679399],
  ['呼和浩特', 111.399371, 40.581008],
  ['江门', 112.667788, 22.298084],
  ['济宁', 116.675392, 35.378547],
  ['阜新', 121.959474, 42.285698],
  ['合肥', 117.286266, 31.977158],
  ['株洲', 113.519553, 27.116393],
  ['福州', 119.15689, 26.064196],
  ['遵义', 107.086352, 28.167662],
  ['白山', 127.28561, 42.067664],
  ['青岛', 120.143936, 36.456033],
  ['大同', 113.719411, 39.901785],
  ['南充', 106.204344, 31.195942],
  ['巴彦淖尔', 107.564662, 41.58784],
  ['孝感', 113.879115, 31.119196],
  ['玉林', 110.182564, 22.44287],
  ['庆阳', 107.594395, 36.1648],
  ['阳泉', 113.501903, 38.061953],
  ['娄底', 111.208382, 27.858884],
  ['三门峡', 110.760617, 34.229732],
  ['湖州', 119.871227, 30.746197],
  ['铜仁', 108.544585, 27.968721],
  ['扬州', 119.47141, 32.73759],
  ['马鞍山', 118.613763, 31.532378],
  ['襄阳', 111.93766, 31.934451],
  ['宜昌', 111.136025, 30.748268],
  ['潍坊', 119.075692, 36.536594],
  ['湛江', 110.303802, 20.464033],
  ['鸡西', 132.302426, 45.543172],
  ['赤峰', 118.904959, 43.194734],
  ['驻马店', 114.148797, 32.924377],
  ['丽江', 100.524833, 26.941914],
  ['黄冈', 115.348967, 30.718266],
  ['肇庆', 112.202555, 23.539726],
  ['汉中', 107.104141, 33.088908],
  ['兰州', 103.638543, 36.348906],
  ['贵阳', 106.707306, 26.842993],
  ['兴安盟', 121.385673, 46.215799],
  ['盘锦', 121.997809, 41.082524],
  ['郑州', 113.471851, 34.626363],
  ['辽阳', 123.411642, 41.125395],
  ['渭南', 109.856936, 34.951823],
  ['普洱', 100.718373, 23.185917],
  ['成都', 103.501068, 30.508688],
  ['淮南', 116.733046, 32.75687],
  ['衢州', 118.677517, 28.934079],
  ['宁德', 119.525337, 27.152589],
  ['唐山', 118.340533, 39.735886],
  ['铁岭', 124.172162, 42.640902],
  ['武汉', 114.338092, 30.625654],
  ['梅州', 116.078669, 24.201815],
  ['鞍山', 123.311254, 40.42449],
  ['桂林', 110.511767, 25.351945],
  ['乌鲁木齐', 87.809463, 43.531305],
  ['梧州', 110.973372, 23.200293],
  ['榆林', 109.553991, 38.037981],
  ['湘潭', 112.530369, 27.70491],
  ['临沂', 118.279789, 35.309265],
  ['资阳', 104.953341, 30.180276],
  ['自贡', 104.961214, 29.221795],
  ['菏泽', 115.68968, 35.153399],
  ['临沧', 99.633436, 23.82194],
  ['眉山', 103.641301, 30.06193],
  ['吕梁', 111.262529, 37.676789],
  ['邢台', 114.819198, 37.211683],
  ['嘉兴', 120.75392, 30.654869],
  ['牡丹江', 129.889484, 44.592662],
  ['中卫', 105.706395, 36.569345],
  ['包头', 110.218042, 41.64185],
  ['陇南', 105.209135, 33.593883],
  ['清远', 112.87591, 24.311465],
  ['宣城', 118.856128, 30.690931],
  ['许昌', 113.709213, 34.072765],
  ['温州', 120.010122, 27.662599],
  ['齐齐哈尔', 124.533879, 47.696763],
  ['邵阳', 110.915651, 26.872617],
  ['南昌', 116.024443, 28.663362],
  ['黑河', 126.996352, 49.253099],
  ['朝阳', 120.009997, 41.510374],
  ['上海', 121.404085, 31.084462],
  ['龙岩', 116.739194, 25.292066],
  ['承德', 117.551042, 41.340428],
  ['海口', 110.425852, 19.831096],
  ['金华', 119.954269, 29.116454],
  ['汕头', 116.55553, 23.330681],
  ['德州', 116.645413, 37.244336],
  ['昆明', 102.875102, 25.385298],
  ['哈尔滨', 127.962992, 45.636991],
  ['莆田', 118.879675, 25.45714],
  ['廊坊', 116.535845, 39.111755],
  ['吴忠', 107.056493, 37.62845],
  ['伊春', 129.199228, 47.799658],
  ['宁波', 121.462284, 29.719588],
  ['遂宁', 105.470484, 30.631113],
  ['连云港', 119.131888, 34.532909],
  ['威海', 121.982231, 37.119131],
  ['西宁', 101.451114, 36.814294],
  ['张家口', 115.029979, 40.861148],
  ['永州', 111.769541, 25.690873],
  ['秦皇岛', 119.183889, 40.088488],
  ['南平', 118.143818, 27.339471],
  ['南京', 118.842464, 31.928759],
  ['铜川', 109.175339, 35.298121],
  ['济南', 117.083259, 36.732532]
]