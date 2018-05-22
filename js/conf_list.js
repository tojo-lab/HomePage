(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var HTML_TABLE = "";
var query = "https://www.illc.uva.nl/NewsandEvents/Events/Conferences/";
$.ajax({
    type: 'GET',
    url: query,
    dataType: 'html'
})
    .then(function ($html) {
    return getJsonFromHTML($html.results[0]);
}, function () { return 'task2 fail'; }).then(function ($objs) {
    for (var i = 0; i < $objs.length; i++) {
        var _detail_url = query + $objs[i].detail_url;
        var _conf_date = $objs[i].conf_date;
        var _conf_name = $objs[i].conf_name;
        var _conf_place = $objs[i].conf_place;
        var _deadline = function () {
            var hoge = $objs[i].deadline;
            if (hoge === undefined) {
                return "-";
            }
            else {
                return hoge;
            }
        };
        HTML_TABLE += "<tr>";
        HTML_TABLE += "<td>" + _deadline() + "</td>";
        HTML_TABLE += "<td style=\"width:120px\">" + _conf_date + "</td>";
        HTML_TABLE += "<td>" + _conf_name + "</td>";
        HTML_TABLE += "<td>" + _conf_place + "</td>";
        HTML_TABLE += "<td><a href=\"" + _detail_url + "\"  target=\"_blank\">detail</a></td>";
        HTML_TABLE += "</tr>";
    }
    ;
    var _html = "            <table id=\"id_sorttable\" class=\"tablesorter \">\n                <thead>\n                    <tr>\n                        <th>submission<br>deadline</th>\n                        <th>date<br></th>\n                        <th>conference name</th>\n                        <th>place<br></th>\n                        <th>link<br></th>\n                    </tr>\n                </thead>" +
        HTML_TABLE +
        "</table>";
    document.getElementById("id_conf_list").innerHTML = _html; //writeHtml(HTML_TABLE)
});
function getJsonFromHTML($html) {
    var _object_list = [];
    var $html2 = $html.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
    var _topic_cfp_conf = $($html2).find(".linklist");
    var _cfp = _topic_cfp_conf[1];
    var _conf = _topic_cfp_conf[2];
    var _list_cfp = $(_cfp).find("li a");
    var _loop_1 = function () {
        var _detail_url = $(_list_cfp[i]).attr('href');
        var _common = _list_cfp[i].innerText.split("(deadline:");
        var _deadline = _common[1]; // 締切
        var _conf_date = function () {
            var hoge = _common[0].split(","); // 会議日時
            if (hoge.length === 1) {
                return "";
            }
            else {
                return hoge[0];
            }
        };
        var _date_name = _common[0].split(",");
        var _conf_name_place = function () {
            if (_date_name.length === 1) {
                return {
                    name: _date_name[0],
                    place: ""
                };
            }
            else {
                var _common2 = _common[0].split(",");
                _common2.shift();
                var _place = _common2.pop();
                if (_common2.length === 1) {
                    return {
                        name: _common2.join(","),
                        place: _place
                    };
                }
                else {
                    _common2.pop();
                    return {
                        name: _common2.join(","),
                        place: _place
                    };
                }
            }
        };
        _object_list[i] = {
            detail_url: _detail_url,
            conf_date: formatDate(_conf_date()),
            conf_name: _conf_name_place().name,
            conf_place: _conf_name_place().place,
            deadline: formatDate(_deadline)
        };
    };
    for (var i = _list_cfp.length - 1; i >= 0; i--) {
        _loop_1();
    }
    return _object_list;
}
function formatDate($date) {
    if ($date !== undefined && $date !== "") {
        var aaa_1 = $date
            .replace("Monday", "")
            .replace("Tuesday", "")
            .replace("Wednesday ", "")
            .replace("Thursday ", "")
            .replace("Friday", "")
            .replace("Saturday", "")
            .replace("Sunday", "")
            .split(" ")
            .filter(function (x) { return x !== ""; })
            .filter(function (x) { return x !== "\n"; })
            .filter(function (x) { return x !== ")\n"; });
        var _year = aaa_1[aaa_1.length - 1]
            .replace(")", "")
            .replace("20", "'");
        var _month = aaa_1[aaa_1.length - 2]
            .replace("January", "01")
            .replace("February", "02")
            .replace("March", "03")
            .replace("April", "04")
            .replace("May", "05")
            .replace("June", "06")
            .replace("July", "07")
            .replace("August", "08")
            .replace("September", "09")
            .replace("October", "10")
            .replace("November", "11")
            .replace("December", "12");
        var _day = function () {
            aaa_1.pop();
            aaa_1.pop();
            var bbb = aaa_1.join("").split(")");
            if (bbb.length === 1) {
                return bbb[0];
            }
            else {
                return bbb[1] + "<br><span style=\"color:red;\">" + bbb[0] + ")</span>";
            }
        };
        return _year + "/" + _month + "/" + _day();
    }
    else {
        return "";
    }
}

},{}]},{},[1]);
