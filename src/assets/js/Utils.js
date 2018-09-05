//添加事件(兼容方式)
function addEvent(dom, type, fn) {
  //对于支持DOM2级事件处理程序addeventListener方法的浏览器
  if (dom.addEventListener) {
    dom.addEventListener(type, fn, false);
  } else if (dom.attachEvent) {
    //对于不支持addEventListener方法但支持attchEvent方法的浏览器
    dom.attachEvent('on' + type, fn);
  }
  else {
    //对于不支持以上两种,但支持on+'事件名'的浏览器
    dom['on' + type] = fn;
  }
}
//获取事件对象
var getEvent = function (event) {
  //标准浏览器返回event      IE返回window.event
  return event || window.event;
}

//获取元素
var getTarget = function (event) {
  var event = getEvent(event);
  //标准浏览器返回event.target    IE返回event.srcElement;
  return event.target || event.srcElement;
}

//阻止默认行为
var preventDefault = function (event) {
  var event = getEvent(event);
  //标准浏览器
  if (event.preventDefault) {
    event.preventDefault();
  } else {
    //IE
    event.returnValue = false;
  }
}
//除去字符串两边空白
String.prototype.trim = function () {
  return this.replace(/(^\s*)|(\s*$)/g, "");
};

/*
 jsonp
 */
function JSONP(url, config) {
  var data = config.data || [];
  var paraArr = [], paraString = '';//get请求的参数。
  var urlArr;
  var callbackName;//每个回调函数一个名字。按时间戳。
  var script, head;//要生成script标签。head标签。
  var supportLoad;//是否支持 onload。是针对IE的兼容处理。
  var onEvent;//onload或onreadystatechange事件。
  var timeout = config.timeout || 0;//超时功能。

  for (var i in data) {
    if (data.hasOwnProperty(i)) {
      paraArr.push(encodeURIComponent(i) + "=" + encodeURIComponent(data[i]));
    }
  }

  urlArr = url.split("?");//链接中原有的参数。
  if (urlArr.length > 1) {
    paraArr.push(urlArr[1]);
  }

  callbackName = 'callback' + new Date().getTime();
  paraArr.push('callback=' + callbackName);
  paraString = paraArr.join("&");
  url = urlArr[0] + "?" + paraString;

  script = document.createElement("script");
  script.loaded = false;//为了实现IE下的onerror做的处理。JSONP的回调函数总是在script的onload事件（IE为onreadystatechange）之前就被调用了。因此我们在正向回调执行之时，为script标签添加一个属性，然后待到onload发生时，再检测有没有这个属性就可以判定是否请求成功，没有成功当然就调用我们的error。

  //将回调函数添加到全局。
  window[callbackName] = function (arg) {
    var callback = config.callback;
    callback(arg);
    script.loaded = true;
  }

  head = document.getElementsByTagName("head")[0];
  head.insertBefore(script, head.firstChild) //chrome下第二个参数不能为null
  script.src = url;

  supportLoad = "onload" in script;
  onEvent = supportLoad ? "onload" : "onreadystatechange";

  script[onEvent] = function () {

    if (script.readyState && script.readyState != "loaded") {
      return;
    }
    if (script.readyState == 'loaded' && script.loaded == false) {
      script.onerror();
      return;
    }
    //删除节点。
    (script.parentNode && script.parentNode.removeChild(script)) && (head.removeNode && head.removeNode(this));
    script = script[onEvent] = script.onerror = window[callbackName] = null;

  }

  script.onerror = function () {
    if (window[callbackName] == null) {
      console.log("请求超时，请重试！");
    }
    config.error && config.error();//如果有专门的error方法的话，就调用。
    (script.parentNode && script.parentNode.removeChild(script)) && (head.removeNode && head.removeNode(this));
    script = script[onEvent] = script.onerror = window[callbackName] = null;
  }

  if (timeout != 0) {
    setTimeout(function () {
      if (script && script.loaded == false) {
        window[callbackName] = null;//超时，且未加载结束，注销函数
        script.onerror();
      }
    }, timeout);
  }
}

//---------------------------------------------------
// 日期格式化
// 格式 YYYY/yyyy/YY/yy 表示年份
// MM/M 月份
// W/w 星期
// dd/DD/d/D 日期
// hh/HH/h/H 时间
// mm/m 分钟
// ss/SS/s/S 秒
//---------------------------------------------------
Date.prototype.Format = function (formatStr) {
  var str = formatStr;
  var Week = ['日', '一', '二', '三', '四', '五', '六'];

  str = str.replace(/yyyy|YYYY/, this.getFullYear());
  str = str.replace(/yy|YY/, (this.getYear() % 100) > 9 ? (this.getYear() % 100).toString() : '0' + (this.getYear() % 100));

  str = str.replace(/MM/, (this.getMonth() + 1) > 9 ? (this.getMonth() + 1).toString() : '0' + (this.getMonth() + 1));
  str = str.replace(/M/g, (this.getMonth() + 1));

  str = str.replace(/w|W/g, Week[this.getDay()]);

  str = str.replace(/dd|DD/, this.getDate() > 9 ? this.getDate().toString() : '0' + this.getDate());
  str = str.replace(/d|D/g, this.getDate());

  str = str.replace(/hh|HH/, this.getHours() > 9 ? this.getHours().toString() : '0' + this.getHours());
  str = str.replace(/h|H/g, this.getHours());
  str = str.replace(/mm/, this.getMinutes() > 9 ? this.getMinutes().toString() : '0' + this.getMinutes());
  str = str.replace(/m/g, this.getMinutes());

  str = str.replace(/ss|SS/, this.getSeconds() > 9 ? this.getSeconds().toString() : '0' + this.getSeconds());
  str = str.replace(/s|S/g, this.getSeconds());

  return str;
}

// function $$(selector, context) {
//   context = context || document;
//   var elements = context.querySelectorAll(selector);
//
//   return Array.prototype.slice.call(elements);
// }


// 获取浏览器窗口的可视区域的宽度
function getViewPortWidth() {
  return document.documentElement.clientWidth || document.body.clientWidth;
}

// 获取浏览器窗口的可视区域的高度
function getViewPortHeight() {
  return document.documentElement.clientHeight || document.body.clientHeight;
}

// 获取浏览器窗口水平滚动条的位置
function getScrollLeft() {
  return document.documentElement.scrollLeft || document.body.scrollLeft;
}

// 获取浏览器窗口垂直滚动条的位置
function getScrollTop() {
  return document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
}

function setScrollTop(value) {
  if (document.documentElement.scrollTop) {
    document.documentElement.scrollTop = value;
  } else if (window.pageYOffset) {
    window.pageYOffset = value;
  } else {
    document.body.scrollTop = value;
  }
}

//js 节流问题
var _throttle = function(func, wait, options) {
  /* options的默认值
   *  表示首次调用返回值方法时，会马上调用func；否则仅会记录当前时刻，当第二次调用的时间间隔超过wait时，才调用func。
   *  options.leading = true;
   * 表示当调用方法时，未到达wait指定的时间间隔，则启动计时器延迟调用func函数，若后续在既未达到wait指定的时间间隔和func函数又未被调用的情况下调用返回值方法，则被调用请求将被丢弃。
   *  options.trailing = true;
   * 注意：当options.trailing = false时，效果与上面的简单实现效果相同
   */
  var context, args, result;
  var timeout = null;
  var previous = 0;
  if (!options) options = {};
  var later = function() {
    previous = options.leading === false ? 0 : _.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  return function() {
    var now = _.now();
    if (!previous && options.leading === false) previous = now;
    // 计算剩余时间
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    // 当到达wait指定的时间间隔，则调用func函数
    // 精彩之处：按理来说remaining <= 0已经足够证明已经到达wait的时间间隔，但这里还考虑到假如客户端修改了系统时间则马上执行func函数。
    if (remaining <= 0 || remaining > wait) {
      // 由于setTimeout存在最小时间精度问题，因此会存在到达wait的时间间隔，但之前设置的setTimeout操作还没被执行，因此为保险起见，这里先清理setTimeout操作
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      // options.trailing=true时，延时执行func函数
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};
//
// /***
//  *
//  */
// /** Event handler for mouse wheel event.
//  *鼠标滚动事件
//  */
// var wheel = function (event) {
//   var delta = 0;
//   if (!event) /* For IE. */
//     event = window.event;
//   if (event.wheelDelta) { /* IE/Opera. */
//     delta = event.wheelDelta / 120;
//   } else if (event.detail) {
//     /** Mozilla case. */
//     /** In Mozilla, sign of delta is different than in IE.
//      * Also, delta is multiple of 3.
//      */
//     delta = -event.detail / 3;
//   }
//   /** If delta is nonzero, handle it.
//    * Basically, delta is now positive if wheel was scrolled up,
//    * and negative, if wheel was scrolled down.
//    */
//   if (delta)
//     handle(delta);
//   /** Prevent default actions caused by mouse wheel.
//    * That might be ugly, but we handle scrolls somehow
//    * anyway, so don't bother here..
//    */
//   if (event.preventDefault)
//     event.preventDefault();
//   event.returnValue = false;
// }
//
// /** Initialization code.
//  * If you use your own event management code, change it as required.
//  */
// if (window.addEventListener) {
//   /** DOMMouseScroll is for mozilla. */
//   window.addEventListener('DOMMouseScroll', wheel, false);
// }
// /** IE/Opera. */
// window.onmousewheel = document.onmousewheel = wheel;
//
// /** This is high-level function.
//  * It must react to delta being more/less than zero.
//  */
// var handle = function (delta,fn1,fn2) {
//   // var random_num = Math.floor((Math.random() * 100) + 50);
//   if (delta < 0) {
//     // alert("鼠标滑轮向下滚动：" + delta + "次！"); // 1
//     console.log("向下滑");
//     // return;
//   } else {
//     // alert("鼠标滑轮向上滚动：" + delta + "次！"); // -1
//     // $("btn_last_pic").onclick(random_num);
//     console.log("向上滑");
//     // return;
//   }
// }


