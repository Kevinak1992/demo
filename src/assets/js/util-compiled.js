/**
 * 解析url参数
 * @example ?id=12345&a=b
 * @return Object {id:12345,a:b}
 */
export function urlParse() {
  var url = window.location.search;
  var obj = {};
  var reg = /[?&][^?&]+=[^?&]+/g;
  var arr = url.match(reg);
  // ['?id=12345', '&a=b']
  if (arr) {
    arr.forEach(function (item) {
      var tempArr = item.substring(1).split('=');
      var key = decodeURIComponent(tempArr[0]);
      var val = decodeURIComponent(tempArr[1]);
      obj[key] = val;
    });
  }
  return obj;
};

//# sourceMappingURL=util-compiled.js.map