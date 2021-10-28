jQuery.extend({
    RAjax: function(a) {
        var o = $.extend({},
            {
                cache: false,
                type: 'get',
                dataType: "json",
                format: "json",
                async: true,
                timeout: 50000,
                showLoading: false,
                toggleBtn: null,
                logoutFlag:"00",//会话掉线返回标识
                logoutFuc:function () {
                    window.layermsg("当前会员已掉线，请重新登录！");
                    _.delay(function () {
                            window.location.href = "/";
                        },
                        2000);
                },//会话掉线回调方法
                toggleBtnClass:"btn-disabled"
            },
            a);
        var loadingIndex,toggleBtnClass=o.toggleBtnClass;
        if (o.type.toLocaleLowerCase() == "post" && !o.contentType) {
            o.contentType = "application/x-www-form-urlencoded; charset=utf-8";
        }
        o.data = o.data || {};
        o.data.format = o.format;
        o.beforeSend = function() {
            if (o.toggleBtn instanceof $) {
                o.toggleBtn.addClass(toggleBtnClass);
            }
            if (o.showLoading === true) {
                loadingIndex =layer.load(1, {
                    shade: [0.1, '#fff'] //0.1透明度的白色背景
                });
            }
            if (a.beforeSend) {
                return a.beforeSend.call(this);
            }
        }
        o.success = function(result) {
            if (o.toggleBtn instanceof $) {
                o.toggleBtn.removeClass(toggleBtnClass);
            }
            if (o.showLoading === true) {
                layer.close(loadingIndex);
            }
            if (a.success) {
                if (result.Success == true) {
                    return a.success.call(this, result.Data);
                } else {
                    if (o.logoutFlag && result.Massage == o.logoutFlag) {
                        if (typeof(o.logoutFuc) == "function") {
                            o.logoutFuc();
                        } 
                    }else {
                        if (a.error) {
                            return a.error.call(this, result.Massage);
                        }else{
                            alert(result.Massage);
                        }
                    }
                }
            }
        }
        o.error = function(jqXHR, textStatus, errorThrown) {
            if (o.toggleBtn instanceof $) {
                o.toggleBtn.removeClass(toggleBtnClass);
            }
            if (o.showLoading === true && loadingIndex) {
                layer.close(loadingIndex);
            }
            //alert("请求数据超时，请稍候再试");
            if (jqXHR.status != 0) {
                if (a.error) {
                    return a.error.call(this, jqXHR, textStatus, errorThrown);
                }
            }
        }
        if (o.toggleBtn && o.toggleBtn.hasClass(toggleBtnClass)) {
            return false;
        } else {
            $.ajax(o);
        }
    }
});

(function($) {
        if (!$.Number) {
            $.Number = {};
        }

    /**
     * 加法函数，用来得到精确的加法结果
     ** 说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
     ** 调用：$.Number.add(arg1,arg2)
     ** 返回值：arg1加上arg2的精确结果
     * @param arg1
     * @param arg2
     * @return {number}
     */
    $.Number.add = function(arg1, arg2) {
        var r1, r2, m, c;
        try {
            r1 = arg1.toString().split(".")[1].length;
        } catch (e) {
            r1 = 0;
        }
        try {
            r2 = arg2.toString().split(".")[1].length;
        } catch (e) {
            r2 = 0;
        }
        c = Math.abs(r1 - r2);
        m = Math.pow(10, Math.max(r1, r2));
        if (c > 0) {
            var cm = Math.pow(10, c);
            if (r1 > r2) {
                arg1 = Number(arg1.toString().replace(".", ""));
                arg2 = Number(arg2.toString().replace(".", "")) * cm;
            } else {
                arg1 = Number(arg1.toString().replace(".", "")) * cm;
                arg2 = Number(arg2.toString().replace(".", ""));
            }
        } else {
            arg1 = Number(arg1.toString().replace(".", ""));
            arg2 = Number(arg2.toString().replace(".", ""));
        }
        return (arg1 + arg2) / m;
    }

    /**
     * 减法函数，用来得到精确的减法结果
     ** 说明：javascript的减法结果会有误差，在两个浮点数相减的时候会比较明显。这个函数返回较为精确的减法结果。
     ** 调用：$.Number.sub(arg1,arg2)
     ** 返回值：arg1加上arg2的精确结果
     * @param arg1
     * @param arg2
     * @return {string}
     */
    $.Number.sub = function(arg1, arg2) {
        var r1, r2, m, n;
        try {
            r1 = arg1.toString().split(".")[1].length;
        } catch (e) {
            r1 = 0;
        }
        try {
            r2 = arg2.toString().split(".")[1].length;
        } catch (e) {
            r2 = 0;
        }
        m = Math.pow(10, Math.max(r1, r2)); //last modify by deeka //动态控制精度长度
        n = (r1 >= r2) ? r1 : r2;
        return ((arg1 * m - arg2 * m) / m).toFixed(n);
    }

    /**
     * 乘法函数，用来得到精确的乘法结果
     ** 说明：javascript的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。
     ** 调用：$.Number.mul(arg1,arg2)
     ** 返回值：arg1乘以 arg2的精确结果
     * @param arg1
     * @param arg2
     * @return {number}
     */
    $.Number.mul = function(arg1, arg2) {
        var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
        try {
            m += s1.split(".")[1].length;
        } catch (e) {
        }
        try {
            m += s2.split(".")[1].length;
        } catch (e) {
        }
        return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
    }

    /**
     * 除法函数，用来得到精确的除法结果
     ** 说明：javascript的除法结果会有误差，在两个浮点数相除的时候会比较明显。这个函数返回较为精确的除法结果。
     ** 调用：$.Number.div(arg1,arg2)
     ** 返回值：arg1除以arg2的精确结果
     * @param arg1
     * @param arg2
     * @return {number}
     */
    $.Number.div = function(arg1, arg2) {
        var t1 = 0, t2 = 0, r1, r2;
        try {
            t1 = arg1.toString().split(".")[1].length;
        } catch (e) {
        }
        try {
            t2 = arg2.toString().split(".")[1].length;
        } catch (e) {
        }
        with (Math) {
            r1 = Number(arg1.toString().replace(".", ""));
            r2 = Number(arg2.toString().replace(".", ""));
            return (r1 / r2) * pow(10, t2 - t1);
        }
    }
    /**
     * 自定义组合函数(就是数学排列组合里的C)
     *     求m个数中任选n个数有多少种组合(即不考虑顺序)
     * @param m
     * @param n
     * @returns {number}
     */
    $.Number.combination = function (m, n) {
        return $.Number.factorial(m, n) / $.Number.factorial(n, n);//就是Cmn(上面是n，下面是m) = Amn(上面是n，下面是m)/Ann(上下都是n) 
    }
    /**
     * 自定义排列函数(就是数学排列组合里的A)
     *     求m个数中任选n个数有多少种排序(即考虑顺序)
     * @param m
     * @param n
     * @returns {number}
     */
    $.Number.arrange = function (m, n) {
        return $.Number.factorial(m, n);//就是数学里的Amn,上面是n，下面是m
    }
    /**
     * 自定义一个阶乘函数，就是有n个数相乘，从m开始，每个数减1，如factorial(5,4)就是5*(5-1)*(5-2)*(5-3),相乘的数有4个
     * @param m
     * @param n
     * @returns {number}
     */
    $.Number.factorial = function (m, n) {
        var num = 1;
        var count = 0;
        for (var i = m; i > 0; i--) {
            if (count == n) {//当循环次数等于指定的相乘个数时，即跳出for循环
                break;
            }
            num = num * i;
            count++;
        }
        return num;
    }
    if (!$.Date) {
        $.Date = {
            SECOND: "s",
            MINUTE: "m",
            HOUR: "H",
            DAY: "d",
            MONTH: "M",
            YEAR: "y"
        };
    }

    /**
     * 返回大于等于其数字参数的最小整数。
     * @param value
     * @param format
     * @return {Date}
     */
    $.Date.ceil = function (value, format) {
        return $.Date._parseDate(value, format, true);
    }

    /**
     * 返回小于等于其数值参数的最大整数
     * @param value
     * @param format
     * @return {Date}
     */
    $.Date.floor = function (value, format) {
        return $.Date._parseDate(value, format, false);
    }

    /**
     *
     * @param value
     * @param format
     * @return {Date}
     */
    $.Date.parseDate = function (value, format) {
        return $.Date.floor(value, format);
    }

    /**
     *
     * @param value
     * @param format
     * @param isFillMax   true|false，不足位是否通过最大值进行填充，默认是根据最小值进行填充
     * @return {Date}
     */
    $.Date._parseDate = function (value, format, isFillMax) {
        format = format || "yyyyMMddHHmmss";

        //如果传入的值是日期类型，那么按照指定格式的要求进行设置，其它值都设置成0，保证前后值得一致性
        if (_.isDate(value)) {
            value = $.Date.formatDate(value, format);
        }

        if (value == null || (_.isString(value) && $.trim(value) == ""))
            return null;

        value = value.replace(/\W+/g, ""); //无格式的字符串
        value = value + "00000000000000";  //这里为了避免值的长度不符合太短，因此用0补足，以便后面进行截取

        var yearFormat = $.trim(format.replace(/[^y]/g, "") || "");
        var monthFormat = $.trim(format.replace(/[^M]/g, "") || "");
        var dayFormat = $.trim(format.replace(/[^d]/g, "") || "");
        var hourFormat = $.trim(format.replace(/[^H]/g, "") || "");
        var minFormat = $.trim(format.replace(/[^m]/g, "") || "");
        var secondFormat = $.trim(format.replace(/[^s]/g, "") || "");

        var startPos = 0,
            year, month, day, hour, min, second;

        var yearLength = yearFormat.length;
        year = yearLength == 0 ? 0 : value.substr(startPos, yearLength);
        year = parseInt(year, 10);
        if (year > 0) {
            (year < 100) && (year += (year > 29) ? 1900 : 2000);
        }else{
            year = 1900;
        }
        startPos += yearLength;

        var monthLength = monthFormat.length;
        month = monthLength == 0 ? 0 : value.substr(startPos, monthLength);
        month = parseInt(month, 10);
        if (month == 0) {
            month = isFillMax ? 11 : 0;
        }else{
            month = month - 1;
        }

        startPos += monthLength;

        var dayLength = dayFormat.length;
        day = dayLength == 0 ? 0 : value.substr(startPos, dayLength);
        day = parseInt(day, 10);
        if (day == 0) {
            day = isFillMax ? $.Date.getDaysInMonth(year, month) : 1;
        }
        startPos += dayLength;

        var hourLength = hourFormat.length;
        hour = hourLength == 0 ? 0 : value.substr(startPos, hourLength);
        hour = parseInt(hour, 10);
        if (hour == 0) {
            hour = isFillMax ? 23 : 0;
        }
        startPos += hourLength;

        var minLength = minFormat.length;
        min = minLength == 0 ? 0 : value.substr(startPos, minLength);
        min = parseInt(min, 10);
        if (min == 0) {
            min = isFillMax ? 59 : 0;
        }
        startPos += minLength;

        var secondLength = secondFormat.length;
        second = secondLength == 0 ? 0 : value.substr(startPos, secondLength);
        second = parseInt(second, 10);
        if (second == 0) {
            second = isFillMax ? 59 : 0;
        }

        var milliseconds = isFillMax ? 999 : 0;   //毫秒数也设置成0

        return new Date(year, month, day, hour, min, second, milliseconds);
    }

    /**
     * 获取指定月份的最大天数
     * @param year
     * @param month
     * @return {Number}
     */
    $.Date.getDaysInMonth = function (year, month) {
        month = parseInt(month, 10) + 1;
        var temp = new Date(year, month, 0);
        return temp.getDate();
    }

    /**
     * 根据给定的值及值得格式，获取对应的毫秒数
     * @param value
     * @param valueFormat
     * @return {*|Number}
     */
    $.Date.getMilliseconds = function (value, valueFormat) {
        var date = $.Date.parseDate(value, valueFormat);
        return date ? date.getTime() : null;
    }
    /**
     * 根据给定的值及值得格式，获取当前日期时间
     * @param valueFormat
     * @returns {*}
     */
    $.Date.getCurrDateTime = function (valueFormat) {
        return $.Date.formatDate(new Date(), valueFormat);
    }
    /**
     * 格式化毫秒数：将给定的毫秒数转换成指定的格式
     * @param milliseconds
     * @param format
     * @return {*}
     */
    $.Date.formatMilliseconds = function (milliseconds, format) {
        if (milliseconds == null || milliseconds == "")
            return "";
        var date = new Date();                // 创建 Date 对象。
        date.setTime(milliseconds);    // 设置毫秒数。
        return $.Date.formatDate(date, format);
    }
    /**
     * 格式化毫秒数或者14位日期字符串：将给定的毫秒数或字付串转换成指定的格式,针对两日以内的时间显示友好的中文提示
     * @param milliseconds
     * @return {*}
     */
    $.Date.formatMillisecondsToFriendly = function (milliseconds) {
        if (milliseconds == null || milliseconds == "")
            return "";
        var today = new Date();//今日0点0分0秒
        today.setHours(0);
        today.setMinutes(0);
        today.setSeconds(0);
        var todayMilliseconds = today.getTime();
        var format = "yyyy-MM-dd";
        if (milliseconds >= todayMilliseconds) {//今天
            var nowMilliseconds = new Date().getTime(); //当前时间

            if (nowMilliseconds - milliseconds < 5 * 60 * 1000) {
                return "五分钟内";
            } else if (nowMilliseconds - milliseconds < 60 * 60 * 1000) {
                return "一小时内";
            }
            format = "HH:mm";
        } else {
            var yestodayMilliseconds = todayMilliseconds - 24 * 60 * 60 * 1000; //昨日0点0分0秒

            if (milliseconds >= yestodayMilliseconds) {
                return "昨日";
            } else {
                var currYearFirstDay = new Date();//今年1月1日0点0分0秒
                currYearFirstDay.setMonth(0);
                currYearFirstDay.setDate(1);
                currYearFirstDay.setHours(0);
                currYearFirstDay.setMinutes(0);
                currYearFirstDay.setSeconds(0);
                var currYearFirstDayMilliseconds = currYearFirstDay.getTime();

                if (milliseconds >= currYearFirstDayMilliseconds) {
                    format = "M月d日";
                }
            }
        }

        var date = new Date();                // 创建 Date 对象。
        date.setTime(milliseconds);    // 设置毫秒数。
        return $.Date.formatDate(date, format);
    }

    /**
     * 将给定格式的日期字符串转换成指定格式的日期字符串
     *
     * @param str 要格式化的日期
     * @param replaceFormat str相匹配的格式
     * @param withFormat 要转换成的新格式
     */
    $.Date.format = function (str, replaceFormat, withFormat) {

        if (replaceFormat == null || $.trim(replaceFormat) == "" || withFormat == null || $.trim(withFormat) == "") {
            alert("您未指定日期转换前或转换后的格式，无法进行转换！");
            return;
        }

        if (str == null || $.trim(str) == "")
            return "";

        str = str.replace(/\W+/g, ""); //无格式的字符串
        str = str + "00000000000000";  //这里为了避免值的长度不符合太短，因此用0补足，以便后面进行截取

        var result = withFormat;

        var replaceYear = $.trim(replaceFormat.replace(/[^y]/g, "") || "");
        var replaceMonth = $.trim(replaceFormat.replace(/[^M]/g, "") || "");
        var replaceDay = $.trim(replaceFormat.replace(/[^d]/g, "") || "");
        var replaceHour = $.trim(replaceFormat.replace(/[^H]/g, "") || "");
        var replaceMin = $.trim(replaceFormat.replace(/[^m]/g, "") || "");
        var replaceSecond = $.trim(replaceFormat.replace(/[^s]/g, "") || "");

        var withYear = $.trim(withFormat.replace(/[^y]/g, "") || "");
        var withMonth = $.trim(withFormat.replace(/[^M]/g, "") || "");
        var withDay = $.trim(withFormat.replace(/[^d]/g, "") || "");
        var withHour = $.trim(withFormat.replace(/[^H]/g, "") || "");
        var withMin = $.trim(withFormat.replace(/[^m]/g, "") || "");
        var withSecond = $.trim(withFormat.replace(/[^s]/g, "") || "");

        var startPos = 0;
        var zeroStr = "0000";
        var withValue = "";

        var yearLength = replaceYear.length;
        if (withYear != "") {
            withValue = yearLength == 0 ? zeroStr.substring(0, withYear.length) : str.substr(startPos, yearLength);
            result = result.replace(withYear, withValue);
        }
        startPos += yearLength;

        var monthLength = replaceMonth.length;
        if (withMonth != "") {
            withValue = monthLength == 0 ? zeroStr.substring(0, withMonth.length) : str.substr(startPos, monthLength);
            result = result.replace(withMonth, withValue);
        }
        startPos += monthLength;

        var dayLength = replaceDay.length;
        if (withDay != "") {
            withValue = dayLength == 0 ? zeroStr.substring(0, withDay.length) : str.substr(startPos, dayLength);
            result = result.replace(withDay, withValue);
        }
        startPos += dayLength;

        var hourLength = replaceHour.length;
        if (withHour != "") {
            withValue = hourLength == 0 ? zeroStr.substring(0, withHour.length) : str.substr(startPos, hourLength);
            result = result.replace(withHour, withValue);
        }
        startPos += hourLength;

        var minLength = replaceMin.length;
        if (withMin != "") {
            withValue = minLength == 0 ? zeroStr.substring(0, withMin.length) : str.substr(startPos, minLength);
            result = result.replace(withMin, withValue);
        }
        startPos += minLength;

        var secondLength = replaceSecond.length;
        if (withSecond != "") {
            withValue = secondLength == 0 ? zeroStr.substring(0, withSecond.length) : str.substr(startPos, secondLength);
            result = result.replace(withSecond, withValue);
        }

        return result;
    }

    /**
     * 将日期转换成指定格式的字符串
     *
     * @param date 要格式化的日期
     * @param format str要转换成的格式
     */
    $.Date.formatDate = function (date, format) {
        if (date == null)
            return "";

        var result = format ? format : "yyyy-MM-dd HH:mm:ss";
        var weekArray = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");

        var yy = date.getYear();
        var M = date.getMonth() + 1;
        var d = date.getDate();
        var h = date.getHours() % 12;
        var H = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        var DDD = date.getDay();

        var yyyy = date.getFullYear();
        var MM = $.Date.lpad(M, 2, "0");
        var dd = $.Date.lpad(d, 2, "0");
        var hh = $.Date.lpad(h, 2, "0");
        var HH = $.Date.lpad(H, 2, "0");
        var mm = $.Date.lpad(m, 2, "0");
        var ss = $.Date.lpad(s, 2, "0");
        result = result.replace("yyyy", yyyy).replace("MM", MM).replace("dd", dd);
        result = result.replace("HH", HH).replace("hh", hh).replace("mm", mm).replace("ss", ss);
        result = result.replace("yy", yy).replace("M", M).replace("d", d);
        result = result.replace("H", H).replace("h", h).replace("m", m).replace("s", s);
        result = result.replace("DDD", weekArray[DDD]);
        return result;
    }

    $.Date.lpad = function (str, length, padStr) {
        str = str + "";
        while (str.length < length) {
            str = padStr + str;
        }
        return str;
    }

    /**
     * 取得指定的日期
     * @param str 要转换的相对时间 字符串型
     * @param interval 要加减的日期
     * @param value    要加减的值
     * @return Date 类型的日期
     */
    $.Date.getDate = function (str, interval, value) {
        if (str == null || $.trim(str) == "")
            return null;

        str = $.trim(str);
        var length = str.length;
        var result = new Date();
        if (length >= 4)
            result.setFullYear(parseInt(str.substr(0, 4), 10));
        if (length >= 6)
            result.setMonth(parseInt(str.substr(4, 2), 10) - 1);
        if (length >= 8)
            result.setDate(parseInt(str.substr(6, 2), 10));
        if (length >= 10)
            result.setHours(parseInt(str.substr(8, 2), 10));
        if (length >= 12)
            result.setMinutes(parseInt(str.substr(10, 2), 10));
        if (length >= 14)
            result.setSeconds(parseInt(str.substr(12, 2), 10));

        result = $.Date.addDate(result, interval, value);

        return result;
    }

    /**
     * 取得指定的日期
     * @param dateObj   要转换的相对时间 Date类型
     * @param interval  要加减的日期
     * @param value
     * @return {*}
     */
    $.Date.addDate = function (dateObj, interval, value) {
        var result = null;
        if (dateObj == null)
            return result;

        value = parseInt(value, 10) || 0;
        result = dateObj;

        if (interval == $.Date.YEAR)
            result.setFullYear(result.getFullYear() + value);
        if (interval == $.Date.MONTH)
            result.setMonth(result.getMonth() + value);
        if (interval == $.Date.DAY)
            result.setDate(result.getDate() + value);
        if (interval == $.Date.HOUR)
            result.setHours(result.getHours() + value);
        if (interval == $.Date.MINUTE)
            result.setMinutes(result.getMinutes() + value);
        if (interval == $.Date.SECOND)
            result.setSeconds(result.getSeconds() + value);

        return result;
    }

    /**
     * 日期加减
     * @param str
     * @param interval
     * @param value
     * @return {String}
     */
    $.Date.add = function (str, interval, value) {

        if (str == null || $.trim(str) == "")
            return "";

        str = $.trim(str);
        var length = str.length;
        var dateObj = $.Date.getDate(str, interval, value);

        var result = "";
        if (length >= 4)
            result = dateObj.getFullYear();
        if (length >= 6) {
            var mo = dateObj.getMonth() + 1;
            if (mo < 10)
                result += "0";
            result += "" + mo;
        }
        if (length >= 8) {
            var d = dateObj.getDate();
            if (d < 10)
                result += "0";
            result += "" + d;
        }
        if (length >= 10) {
            var h = dateObj.getHours();
            if (h < 10)
                result += "0";
            result += "" + h;
        }
        if (length >= 12) {
            var mi = dateObj.getMinutes();
            if (mi < 10)
                result += "0";
            result += "" + mi;
        }
        if (length >= 14) {
            var s = dateObj.getSeconds();
            if (s < 10)
                result += "0";
            result += "" + s;
        }
        return result;
    }
    $.fn.extend({
        Tabs: function(options) {
            // 处理参数
            options = $.extend({
                    event: 'mouseover',
                    timeout: 0,
                    auto: 0,
                    scroll: false,
                    tabContentClass: 'tab_box',
                    tabMenuClass: 'tab_menu',
                    activeClass: 'current',
                    hideClass: 'hide',
                    callback: null
                },
                options);

            var self = $(this),
                tabBox = self.find('div.' + options.tabContentClass).children('div'),
                menu = self.find('ul.' + options.tabMenuClass),
                items = menu.find('li'),
                timer,
                activeClass = options.activeClass,
                hideClass = options.hideClass;

            var tabHandle = function(elem) {
                    elem.siblings('li')
                        .removeClass(activeClass)
                        .end()
                        .addClass(activeClass);

                    tabBox.siblings('div')
                        .addClass(hideClass)
                        .end()
                        .eq(elem.index())
                        .removeClass(hideClass);
                },

                delay = function(elem, time) {
                    time ? setTimeout(function() { tabHandle(elem); }, time) : tabHandle(elem);
                },

                start = function() {
                    if (!options.auto) return;
                    timer = setInterval(autoRun, options.auto);
                },

                autoRun = function() {
                    var current = menu.find('li.current'),
                        firstItem = items.eq(0),
                        len = items.length,
                        index = current.index() + 1,
                        item = index === len ? firstItem : current.next('li'),
                        i = index === len ? 0 : index;

                    current.removeClass(activeClass);
                    item.addClass(activeClass);

                    tabBox.siblings('div')
                        .addClass(hideClass)
                        .end()
                        .eq(i)
                        .removeClass(hideClass);
                };

            items.bind(options.event,
                function() {
                    delay($(this), options.timeout);
                    if (options.callback) {
                        options.callback(self);
                    }
                    if (options.scroll === true) {
                        var $this = $(this);
                        $('body').animate({
                                scrollTop: $this.offset().top
                            },
                            300);
                    }
                });

            if (options.auto) {
                start();
                self.hover(function() {
                        clearInterval(timer);
                        timer = undefined;
                    },
                    function() {
                        start();
                    });
            }

            return this;
        },
        serializeObject: function() {
            var obj = {};
            var count = 0;
            $.each(this.serializeArray(),
                function(i, o) {
                    var n = o.name, v = $.trim(o.value);
                    count++;
                    obj[n] = obj[n] === undefined
                        ? v
                        : $.isArray(obj[n])
                        ? obj[n].concat(v)
                        : [obj[n], v];
                });
            return obj;
        }
    });
})(jQuery);