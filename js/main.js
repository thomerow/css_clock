﻿(function () {
    var _timePrev = {
        hours: 0, minutes: 0, seconds: 0
    };

    var _elems = {
        seconds0: null,
        seconds1: null,
        minutes0: null,
        minutes1: null,
        hours0: null,
        hours1: null
    };

    var _heights = {
        seconds0: null,
        seconds1: null,
        minutes0: null,
        minutes1: null,
        hours0: null,
        hours1: null
    };

    var _fontLoadCheckIntervalID;

    function clockTimerHandler() {
        var now = new Date();

        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();

        if (seconds != _timePrev.seconds) {
            var strTranslate0 = "translate(0px, " + -((_heights.seconds0 / 10) * (seconds % 10)) + "px)";
            var strTranslate1 = "translate(0px, " + -((_heights.seconds1 / 6) * Math.floor(seconds / 10)) + "px)";
            _elems.seconds0.style.webkitTransform = 
            _elems.seconds0.style.transform = strTranslate0;
            _elems.seconds1.style.webkitTransform = 
            _elems.seconds1.style.transform = strTranslate1;

            _timePrev.seconds = seconds;
        }

        if (minutes != _timePrev.minutes) {
            var strTranslate0 = "translate(0px, " + -((_heights.minutes0 / 10) * (minutes % 10)) + "px)";
            var strTranslate1 = "translate(0px, " + -((_heights.minutes1 / 6) * Math.floor(minutes / 10)) + "px)";
            _elems.minutes0.style.webkitTransform = 
            _elems.minutes0.style.transform = strTranslate0;
            _elems.minutes1.style.webkitTransform = 
            _elems.minutes1.style.transform = strTranslate1;

            _timePrev.minutes = minutes;
        }

        if (hours != _timePrev.hours) {
            var strTranslate0 = "translate(0px, " + -((_heights.hours0 / 10) * (hours % 10)) + "px)";
            var strTranslate1 = "translate(0px, " + -((_heights.hours1 / 3) * Math.floor(hours / 10)) + "px)";
            _elems.hours0.style.webkitTransform = 
            _elems.hours0.style.transform = strTranslate0;
            _elems.hours1.style.webkitTransform = 
            _elems.hours1.style.transform = strTranslate1;

            _timePrev.hours = hours;
        }
    }

    function webFontLoadCheckTimerHandler() {
        if (_elems.seconds0.clientHeight != _heights.seconds0) {
            clearInterval(_fontLoadCheckIntervalID);
            getNumberBandHeights();
            _timePrev.hours = _timePrev.minutes = _timePrev.seconds = 0;
        }
    }

    function getNumberBandHeights() {
        _heights.seconds0 = _elems.seconds0.clientHeight;
        _heights.seconds1 = _elems.seconds1.clientHeight;
        _heights.minutes0 = _elems.minutes0.clientHeight;
        _heights.minutes1 = _elems.minutes1.clientHeight;
        _heights.hours0 = _elems.hours0.clientHeight;
        _heights.hours1 = _elems.hours1.clientHeight;
    }

    function init() {
        _elems.seconds0 = document.getElementById("seconds_0");
        _elems.seconds1 = document.getElementById("seconds_1");
        _elems.minutes0 = document.getElementById("minutes_0");
        _elems.minutes1 = document.getElementById("minutes_1");
        _elems.hours0 = document.getElementById("hours_0");
        _elems.hours1 = document.getElementById("hours_1");

        getNumberBandHeights();
    }

    function windowLoaded() {
        init();
        _fontLoadCheckIntervalID = setInterval(webFontLoadCheckTimerHandler, 200);
        setInterval(clockTimerHandler, 100);  // 10 Hz
    }

    window.addEventListener("load", windowLoaded)
}());
