const data = [
  {"time":"2017-04","addr":"七台河","count":"2","coordinate":"130.95,45.78","class":"city"},
  {"time":"2017-04","addr":"上海","count":"10099","coordinate":"121.4,31.2","class":"city"},
  {"time":"2017-04","addr":"东莞","count":"567","coordinate":"113.75,23.05","class":"city"},
  {"time":"2017-04","addr":"东营","count":"951","coordinate":"118.67,37.43","class":"city"},
  {"time":"2017-04","addr":"中国","count":"140","coordinate":"116.20,39.55","class":"country"},
  {"time":"2017-04","addr":"临汾","count":"4","coordinate":"111.52,36.08","class":"city"},
  {"time":"2017-04","addr":"临沂","count":"11","coordinate":"118.35,35.05","class":"city"},
  {"time":"2017-04","addr":"乌克兰","count":"459","coordinate":"30.28,50.30","class":"country"},
  {"time":"2017-04","addr":"乌鲁木齐","count":"466","coordinate":"87.62,43.82","class":"city"},
  {"time":"2017-04","addr":"乐山","count":"3","coordinate":"103.77,29.57","class":"city"},
  {"time":"2017-04","addr":"亚太地区","count":"806","coordinate":"127.08,13.92","class":"country"},
  {"time":"2017-04","addr":"遵义","count":"1","coordinate":"106.92,27.73","class":"city"},
  {"time":"2017-04","addr":"以色列","count":"2","coordinate":"35.12,31.47","class":"country"},
  {"time":"2017-04","addr":"佛山","count":"579","coordinate":"113.12,23.02","class":"city"},
  {"time":"2017-04","addr":"佳木斯","count":"2","coordinate":"130.37,46.82","class":"city"},
  {"time":"2017-04","addr":"俄罗斯","count":"281","coordinate":"37.35,55.45","class":"country"},
  {"time":"2017-04","addr":"保加利亚","count":"2","coordinate":"23.20,42.45","class":"country"},
  {"time":"2017-04","addr":"保定","count":"128","coordinate":"115.47,38.87","class":"city"},
  {"time":"2017-04","addr":"凉山彝族自治州","count":"3","coordinate":"102.27,27.9","class":"city"},
  {"time":"2017-04","addr":"克拉玛依","count":"694","coordinate":"84.87,45.6","class":"city"},
  {"time":"2017-04","addr":"克罗地亚","count":"2","coordinate":"15.58,45.50","class":"country"},
  {"time":"2017-04","addr":"兰州","count":"1151","coordinate":"103.82,36.07","class":"city"},
  {"time":"2017-04","addr":"呼和浩特","count":"255","coordinate":"111.73,40.83","class":"city"},
  {"time":"2017-04","addr":"阿拉善盟","count":"3","coordinate":"105.67,38.83","class":"city"},
  {"time":"2017-04","addr":"凉山彝族自治州","count":"3","coordinate":"102.27,27.9","class":"city"},
  {"time":"2017-04","addr":"加拿大","count":"74","coordinate":"-75.42,45.27","class":"country"},
  {"time":"2017-04","addr":"加蓬","count":"4","coordinate":"9.26,0.25","class":"country"},
  {"time":"2017-04","addr":"北京","count":"50332","coordinate":"116.40739499999995,39.904211","class":"city"},
  {"time":"2017-04","addr":"北美地区","count":"74","coordinate":"-73.42,43.27","class":"country"},
  {"time":"2017-04","addr":"十堰","count":"2","coordinate":"110.78,32.65","class":"city"},
  {"time":"2017-04","addr":"南京","count":"475","coordinate":"118.78,32.07","class":"city"},
  {"time":"2017-04","addr":"南充","count":"7","coordinate":"106.08,30.78","class":"city"},
  {"time":"2017-04","addr":"南充","count":"7","coordinate":"106.08,30.78","class":"city"},
  {"time":"2017-04","addr":"南宁","count":"1","coordinate":"108.37,22.82","class":"city"},
  {"time":"2017-04","addr":"南昌","count":"74","coordinate":"115.85,28.68","class":"city"},
  {"time":"2017-04","addr":"南通","count":"2","coordinate":"120.88,31.98","class":"city"},
  {"time":"2017-04","addr":"南阳","count":"47","coordinate":"112.52,33","class":"city"},
  {"time":"2017-04","addr":"南非","count":"1","coordinate":"-21.61,25.31","class":"country"},
  {"time":"2017-04","addr":"卢森堡","count":"1","coordinate":"6.09,49.37","class":"country"},
  {"time":"2017-04","addr":"印度尼西亚","count":"12","coordinate":"106.49,-6.09","class":"country"},
  {"time":"2017-04","addr":"厄瓜多尔","count":"1","coordinate":"-78.35,-0.15","class":"country"},
  {"time":"2017-04","addr":"厦门","count":"14","coordinate":"118.08,24.48","class":"city"},
  {"time":"2017-04","addr":"台州","count":"3","coordinate":"121.43,28.68","class":"city"},
  {"time":"2017-04","addr":"合肥","count":"110","coordinate":"117.25,31.83","class":"city"},
  {"time":"2017-04","addr":"吉安","count":"127","coordinate":"114.98,27.12","class":"city"},
  {"time":"2017-04","addr":"吉林","count":"177","coordinate":"126.55,43.83","class":"city"},
  {"time":"2017-04","addr":"吕梁","count":"2","coordinate":"111.13,37.52","class":"city"},
  {"time":"2017-04","addr":"呼伦贝尔","count":"2","coordinate":"119.77,49.22","class":"city"},
  {"time":"2017-04","addr":"呼和浩特","count":"13","coordinate":"111.73,40.83","class":"city"},
  {"time":"2017-04","addr":"咸阳","count":"7","coordinate":"34.32,108.70","class":"city"},
  {"time":"2017-04","addr":"哈尔滨","count":"50","coordinate":"126.53,45.8","class":"city"},
  {"time":"2017-04","addr":"哈萨克斯坦","count":"63","coordinate":"71.30,51.10","class":"country"},
  {"time":"2017-04","addr":"唐山","count":"119","coordinate":"118.2,39.63","class":"city"},
  {"time":"2017-04","addr":"商丘","count":"7","coordinate":"115.65,34.45","class":"city"},
  {"time":"2017-04","addr":"喀麦隆","count":"1","coordinate":"11.35,3.50","class":"country"},
  {"time":"2017-04","addr":"四平","count":"78","coordinate":"124.35,43.17","class":"city"},
  {"time":"2017-04","addr":"土耳其","count":"1","coordinate":"32.54,39.57","class":"country"},
  {"time":"2017-04","addr":"塞舌尔","count":"4","coordinate":"4.19,55.44","class":"country"},
  {"time":"2017-04","addr":"大庆","count":"3604","coordinate":"125.03,46.58","class":"city"},
  {"time":"2017-04","addr":"大连","count":"19","coordinate":"121.62,38.92","class":"city"},
  {"time":"2017-04","addr":"大连","count":"4","coordinate":"121.62,38.92","class":"city"},
  {"time":"2017-04","addr":"天津","count":"7726","coordinate":"117.20,39.13","class":"city"},
  {"time":"2017-04","addr":"太原","count":"125","coordinate":"112.55,37.87","class":"city"},
  {"time":"2017-04","addr":"娄底","count":"33","coordinate":"112,27.73","class":"city"},
  {"time":"2017-04","addr":"孝感","count":"1","coordinate":"113.92,30.93","class":"city"},
  {"time":"2017-04","addr":"安康","count":"4","coordinate":"109.02,32.68","class":"city"},
  {"time":"2017-04","addr":"定西","count":"6","coordinate":"104.62,35.58","class":"city"},
  {"time":"2017-04","addr":"宜宾","count":"11","coordinate":"104.62,28.77","class":"city"},
  {"time":"2017-04","addr":"宜昌","count":"2","coordinate":"111.28,30.7","class":"city"},
  {"time":"2017-04","addr":"宜春","count":"1","coordinate":"114.38,27.8","class":"city"},
  {"time":"2017-04","addr":"宿迁","count":"2","coordinate":"118.28,33.97","class":"city"},
  {"time":"2017-04","addr":"尼日利亚","count":"242","coordinate":"7.32,9.05","class":"country"},
  {"time":"2017-04","addr":"局域网","count":"14110","coordinate":"116.35,39.99","class":"city"},
  {"time":"2017-04","addr":"岳阳","count":"28","coordinate":"113.12,29.37","class":"city"},
  {"time":"2017-04","addr":"巴基斯坦","count":"9","coordinate":"73.10,33.40","class":"country"},
  {"time":"2017-04","addr":"巴西","count":"9","coordinate":"-47.55,-15.47","class":"country"},
  {"time":"2017-04","addr":"巴音郭楞蒙古自治州","count":"138","coordinate":"86.15,41.77","class":"city"},
  {"time":"2017-04","addr":"常州","count":"131","coordinate":"119.95,31.78","class":"city"},
  {"time":"2017-04","addr":"广元","count":"6","coordinate":"105.83,32.43","class":"city"},
  {"time":"2017-04","addr":"广安","count":"1","coordinate":"106.63,30.47","class":"city"},
  {"time":"2017-04","addr":"广州","count":"4141","coordinate":"113.27,23.13","class":"city"},
  {"time":"2017-04","addr":"庆阳","count":"46","coordinate":"107.63,35.73","class":"city"},
  {"time":"2017-04","addr":"廊坊","count":"1","coordinate":"116.7,39.52","class":"city"},
  {"time":"2017-04","addr":"延安","count":"149","coordinate":"109.48,36.6","class":"city"},
  {"time":"2017-04","addr":"开封","count":"242","coordinate":"114.3,34.8","class":"city"},
  {"time":"2017-04","addr":"张家界","count":"1","coordinate":"110.47,29.13","class":"city"},
  {"time":"2017-04","addr":"徐州","count":"2","coordinate":"117.18,34.27","class":"city"},
  {"time":"2017-04","addr":"德国","count":"45","coordinate":"13.25,52.30","class":"country"},
  {"time":"2017-04","addr":"德阳","count":"51","coordinate":"104.38,31.13","class":"city"},
  {"time":"2017-04","addr":"忻州","count":"30","coordinate":"112.73,38.42","class":"city"},
  {"time":"2017-04","addr":"惠州","count":"4","coordinate":"114.42,23.12","class":"city"},
  {"time":"2017-04","addr":"成都","count":"4608","coordinate":"104.07,30.67","class":"city"},
  {"time":"2017-04","addr":"凉山彝族自治州","count":"2","coordinate":"102.27,27.9","class":"city"},
  {"time":"2017-04","addr":"成都","count":"4","coordinate":"104.07,30.67","class":"city"},
  {"time":"2017-04","addr":"成都","count":"1","coordinate":"104.07,30.67","class":"city"},
  {"time":"2017-04","addr":"扬州","count":"145","coordinate":"119.4,32.4","class":"city"},
  {"time":"2017-04","addr":"承德","count":"19","coordinate":"117.93,40.97","class":"city"},
  {"time":"2017-04","addr":"抚州","count":"13","coordinate":"116.35,28","class":"city"},
  {"time":"2017-04","addr":"抚顺","count":"106","coordinate":"123.98,41.88","class":"city"},
  {"time":"2017-04","addr":"拉美地区","count":"22","coordinate":"-97.10,17.20","class":"country"},
  {"time":"2017-04","addr":"拉脱维亚","count":"1","coordinate":"24.08,56.53","class":"country"},
  {"time":"2017-04","addr":"挪威","count":"4","coordinate":"10.45,59.55","class":"country"},
  {"time":"2017-04","addr":"捷克","count":"1","coordinate":"14.22,50.05","class":"country"},
  {"time":"2017-04","addr":"摩尔多瓦共和国","count":"6","coordinate":"28.50,47.02","class":"country"},
  {"time":"2017-04","addr":"攀枝花","count":"3","coordinate":"101.72,26.58","class":"city"},
  {"time":"2017-04","addr":"斯洛伐克","count":"1","coordinate":"17.07,48.10","class":"country"},
  {"time":"2017-04","addr":"新余","count":"1","coordinate":"114.92,27.82","class":"city"},
  {"time":"2017-04","addr":"新加坡","count":"105","coordinate":"103.38,1.19","class":"country"},
  {"time":"2017-04","addr":"凉山彝族自治州","count":"78","coordinate":"102.27,27.9","class":"city"},
  {"time":"2017-04","addr":"博尔塔拉蒙古自治州","count":"3","coordinate":"82.07,44.9","class":"city"},
  {"time":"2017-04","addr":"楚雄彝族自治州","count":"5","coordinate":"101.55,25.03","class":"city"},
  {"time":"2017-04","addr":"巴音郭楞蒙古自治州","count":"4","coordinate":"86.15,41.77","class":"city"},
  {"time":"2017-04","addr":"巴音郭楞蒙古自治州","count":"4","coordinate":"86.15,41.77","class":"city"},
  {"time":"2017-04","addr":"无锡","count":"1096","coordinate":"120.3,31.57","class":"city"},
  {"time":"2017-04","addr":"日本","count":"1","coordinate":"139.46,35.42","class":"country"},
  {"time":"2017-04","addr":"昆明","count":"4","coordinate":"102.72,25.05","class":"city"},
  {"time":"2017-04","addr":"昌吉回族自治州","count":"3","coordinate":"87.3,44.02","class":"city"},
  {"time":"2017-04","addr":"晋中","count":"19","coordinate":"112.75,37.68","class":"city"},
  {"time":"2017-04","addr":"晋城","count":"1","coordinate":"112.83,35.5","class":"city"},
  {"time":"2017-04","addr":"景德镇","count":"5","coordinate":"117.17,29.27","class":"city"},
  {"time":"2017-04","addr":"曲靖","count":"7","coordinate":"103.8,25.5","class":"city"},
  {"time":"2017-04","addr":"杭州","count":"2369","coordinate":"120.15,30.28","class":"city"},
  {"time":"2017-04","addr":"松原","count":"256","coordinate":"124.82,45.13","class":"city"},
  {"time":"2017-04","addr":"松原","count":"7","coordinate":"124.82,45.13","class":"city"},
  {"time":"2017-04","addr":"桂林","count":"1","coordinate":"110.28,25.28","class":"city"},
  {"time":"2017-04","addr":"梅州","count":"2","coordinate":"116.12,24.28","class":"city"},
  {"time":"2017-04","addr":"榆林","count":"4","coordinate":"109.73,38.28","class":"city"},
  {"time":"2017-04","addr":"欧洲和中东地区","count":"9","coordinate":"51.50,48.33","class":"country"},
  {"time":"2017-04","addr":"武汉","count":"4661","coordinate":"114.30539299999998,30.593099","class":"city"},
  {"time":"2017-04","addr":"比利时","count":"37","coordinate":"4.21,50.51","class":"country"},
  {"time":"2017-04","addr":"沈阳","count":"277","coordinate":"123.43,41.8","class":"city"},
  {"time":"2017-04","addr":"沙特阿拉伯","count":"4","coordinate":"46.42,24.41","class":"country"},
  {"time":"2017-04","addr":"沧州","count":"3050","coordinate":"116.83,38.3","class":"city"},
  {"time":"2017-04","addr":"法国","count":"3","coordinate":"2.20,48.50","class":"country"},
  {"time":"2017-04","addr":"泰国","count":"1","coordinate":"100.35,13.45","class":"country"},
  {"time":"2017-04","addr":"泰安","count":"1","coordinate":"117.08,36.2","class":"city"},
  {"time":"2017-04","addr":"泰州","count":"3","coordinate":"119.92,32.45","class":"city"},
  {"time":"2017-04","addr":"泸州","count":"42","coordinate":"105.43,28.87","class":"city"},
  {"time":"2017-04","addr":"洛阳","count":"64","coordinate":"112.45,34.62","class":"city"},
  {"time":"2017-04","addr":"济南","count":"593","coordinate":"116.98,36.67","class":"city"},
  {"time":"2017-04","addr":"济宁","count":"1","coordinate":"116.58,35.42","class":"city"},
  {"time":"2017-04","addr":"海口","count":"3","coordinate":"110.32,20.03","class":"city"},
  {"time":"2017-04","addr":"淄博","count":"4","coordinate":"118.05,36.82","class":"city"},
  {"time":"2017-04","addr":"淮安","count":"1","coordinate":"119.02,33.62","class":"city"},
  {"time":"2017-04","addr":"深圳","count":"2024","coordinate":"114.05786499999999,22.543096","class":"city"},
  {"time":"2017-04","addr":"渭南","count":"1","coordinate":"109.5,34.5","class":"city"},
  {"time":"2017-04","addr":"湛江","count":"252","coordinate":"110.35,21.27","class":"city"},
  {"time":"2017-04","addr":"滨州","count":"19","coordinate":"117.97,37.38","class":"city"},
  {"time":"2017-04","addr":"潍坊","count":"1","coordinate":"119.15,36.7","class":"city"},
  {"time":"2017-04","addr":"潜江","count":"8","coordinate":"112.88,30.42","class":"city"},
  {"time":"2017-04","addr":"澳大利亚","count":"47","coordinate":"149.08,-35.15","class":"country"},
  {"time":"2017-04","addr":"濮阳","count":"31","coordinate":"115.03,35.77","class":"city"},
  {"time":"2017-04","addr":"烟台","count":"3","coordinate":"121.43,37.45","class":"city"},
  {"time":"2017-04","addr":"烟台","count":"2","coordinate":"121.43,37.45","class":"city"},
  {"time":"2017-04","addr":"焦作","count":"59","coordinate":"113.25,35.22","class":"city"},
  {"time":"2017-04","addr":"爱尔兰","count":"34","coordinate":"-6.15,53.21","class":"country"},
  {"time":"2017-04","addr":"爱沙尼亚","count":"4","coordinate":"24.48,59.22","class":"country"},
  {"time":"2017-04","addr":"玉林","count":"1","coordinate":"110.17,22.63","class":"city"},
  {"time":"2017-04","addr":"珠海","count":"3","coordinate":"113.57,22.27","class":"city"},
  {"time":"2017-04","addr":"瑞典","count":"1","coordinate":"18.03,59.20","class":"country"},
  {"time":"2017-04","addr":"盘锦","count":"139","coordinate":"122.07,41.12","class":"city"},
  {"time":"2017-04","addr":"石家庄","count":"600","coordinate":"114.52,38.05","class":"city"},
  {"time":"2017-04","addr":"石河子","count":"34","coordinate":"86.03,44.3","class":"city"},
  {"time":"2017-04","addr":"福州","count":"28","coordinate":"119.3,26.08","class":"city"},
  {"time":"2017-04","addr":"科特迪瓦","count":"2","coordinate":"-5.17,6.49","class":"country"},
  {"time":"2017-04","addr":"秦皇岛","count":"326","coordinate":"119.6,39.93","class":"city"},
  {"time":"2017-04","addr":"索马里","count":"2","coordinate":"45.25,2.02","class":"country"},
  {"time":"2017-04","addr":"绍兴","count":"1","coordinate":"120.57,30","class":"city"},
  {"time":"2017-04","addr":"绵阳","count":"6","coordinate":"104.73,31.47","class":"city"},
  {"time":"2017-04","addr":"绵阳","count":"608","coordinate":"104.73,31.47","class":"city"},
  {"time":"2017-04","addr":"罗马尼亚","count":"11","coordinate":"26.10,44.27","class":"country"},
  {"time":"2017-04","addr":"美国","count":"782","coordinate":"-77.02,39.91","class":"country"},
  {"time":"2017-04","addr":"肇庆","count":"257","coordinate":"112.47,23.05","class":"city"},
  {"time":"2017-04","addr":"芜湖","count":"4","coordinate":"118.38,31.33","class":"city"},
  {"time":"2017-04","addr":"苏丹","count":"4","coordinate":"32.35,15.31","class":"country"},
  {"time":"2017-04","addr":"苏州","count":"91","coordinate":"120.58,31.3","class":"city"},
  {"time":"2017-04","addr":"苏州","count":"1","coordinate":"120.58,31.3","class":"city"},
  {"time":"2017-04","addr":"英国","count":"187","coordinate":"-0.05,51.36","class":"country"},
  {"time":"2017-04","addr":"茂名","count":"30","coordinate":"110.92,21.67","class":"city"},
  {"time":"2017-04","addr":"荆州","count":"98","coordinate":"112.23,30.33","class":"city"},
  {"time":"2017-04","addr":"荷兰","count":"68","coordinate":"4.54,52.23","class":"country"},
  {"time":"2017-04","addr":"莱芜","count":"9","coordinate":"117.67,36.22","class":"city"},
  {"time":"2017-04","addr":"菏泽","count":"4","coordinate":"115.26,35.14","class":"city"},
  {"time":"2017-04","addr":"葫芦岛","count":"7","coordinate":"120.83,40.72","class":"city"},
  {"time":"2017-04","addr":"蒙古国","count":"62","coordinate":"45.73,103.79","class":"country"},
  {"time":"2017-04","addr":"衢州","count":"3","coordinate":"118.87,28.93","class":"city"},
  {"time":"2017-04","addr":"襄阳","count":"1","coordinate":"112.12,32.0","class":"city"},
  {"time":"2017-04","addr":"西双版纳傣族自治州","count":"32","coordinate":"100.8,22.02","class":"city"},
  {"time":"2017-04","addr":"西宁","count":"73","coordinate":"101.78,36.62","class":"city"},
  {"time":"2017-04","addr":"西安","count":"4951","coordinate":"108.93,34.27","class":"city"},
  {"time":"2017-04","addr":"西班牙","count":"31","coordinate":"-3.45,40.25","class":"country"},
  {"time":"2017-04","addr":"贵阳","count":"77","coordinate":"106.63,26.65","class":"city"},
  {"time":"2017-04","addr":"赣州","count":"9","coordinate":"114.93,25.83","class":"city"},
  {"time":"2017-04","addr":"遂宁","count":"1","coordinate":"105.57,30.52","class":"city"},
  {"time":"2017-04","addr":"遵义","count":"2","coordinate":"106.92,27.73","class":"city"},
  {"time":"2017-04","addr":"邯郸","count":"705","coordinate":"114.48,36.62","class":"city"},
  {"time":"2017-04","addr":"邯郸","count":"160","coordinate":"114.48,36.62","class":"city"},
  {"time":"2017-04","addr":"郑州","count":"485","coordinate":"113.62,34.75","class":"city"},
  {"time":"2017-04","addr":"鄂尔多斯","count":"7","coordinate":"109.8,39.62","class":"city"},
  {"time":"2017-04","addr":"酒泉","count":"1","coordinate":"98.52,39.75","class":"city"},
  {"time":"2017-04","addr":"酒泉","count":"113","coordinate":"98.52,39.75","class":"city"},
  {"time":"2017-04","addr":"重庆","count":"819","coordinate":"106.33,29.34","class":"city"},
  {"time":"2017-04","addr":"金华","count":"1","coordinate":"119.65,29.08","class":"city"},
  {"time":"2017-04","addr":"铁岭","count":"8","coordinate":"123.83,42.28","class":"city"},
  {"time":"2017-04","addr":"银川","count":"2","coordinate":"106.28,38.47","class":"city"},
  {"time":"2017-04","addr":"锦州","count":"3","coordinate":"121.13,41.1","class":"city"},
  {"time":"2017-04","addr":"镇江","count":"343","coordinate":"119.45,32.2","class":"city"},
  {"time":"2017-04","addr":"长春","count":"334","coordinate":"125.32,43.9","class":"city"},
  {"time":"2017-04","addr":"长沙","count":"59","coordinate":"112.93,28.23","class":"city"},
  {"time":"2017-04","addr":"长治","count":"1","coordinate":"113.12,36.2","class":"city"},
  {"time":"2017-04","addr":"阜新","count":"1","coordinate":"121.67,42.02","class":"city"},
  {"time":"2017-04","addr":"阳泉","count":"43","coordinate":"113.57,37.85","class":"city"},
  {"time":"2017-04","addr":"雅安","count":"1","coordinate":"103,29.98","class":"city"},
  {"time":"2017-04","addr":"青岛","count":"7582","coordinate":"120.38,36.07","class":"city"},
  {"time":"2017-04","addr":"南非","count":"6","coordinate":"-21.61,25.31","class":"country"},
  {"time":"2017-04","addr":"鞍山","count":"115","coordinate":"122.98,41.1","class":"city"},
  {"time":"2017-04","addr":"韩国","count":"5","coordinate":"126.58,37.31","class":"country"},
  {"time":"2017-04","addr":"香港","count":"42","coordinate":"114.08,22.2","class":"city"},
  {"time":"2017-04","addr":"马来西亚","count":"1","coordinate":"101.41,3.09","class":"country"},
  {"time":"2017-04","addr":"鸡西","count":"39","coordinate":"130.97,45.3","class":"city"},
  {"time":"2017-04","addr":"黄山","count":"2","coordinate":"118.33,29.72","class":"city"},
  {"time":"2017-04","addr":"黔南布依族苗族自治州","count":"1","coordinate":"107.52,26.27","class":"city"},
  {"time":"2017-04","addr":"凉山彝族自治州","count":"11","coordinate":"102.27,27.9","class":"city"},
  {"time":"2017-04","addr":"齐齐哈尔","count":"83","coordinate":"123.95,47.33","class":"city"}
]
let output = []
for(let index in data) {
  const element = data[index]
  if (true) {
    const temp = element.coordinate.split(",")
    if (output[index - 1] && element.addr === data[index - 1].addr) {
      console.log(element.addr)
    } else {
      output.push({
        name: element.addr,
        value: [parseInt(temp[0]), parseInt(temp[1]), parseInt(element.count)]
      })
    }
  }
}
console.log(JSON.stringify(output))