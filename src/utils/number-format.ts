/*
* 数字格式化
* number：要格式化的数字
* decimals：保留几位小数
* */
export const numberFormat = (number: number | string = 0, decimals = 0) => {
    number = (number + '').replace(/[^0-9+-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        s = [],
        toFixedFix = function (n: number, prec: number) {
            var k = Math.pow(10, prec);
            return '' + Math.ceil(n * k) / k;
        };

    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    var re = /(-?\d+)(\d{3})/;
    while (re.test(s[0])) {
        s[0] = s[0].replace(re, "$1" + ',' + "$2");
    }

    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join('.');
}