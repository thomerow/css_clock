(function () {
    var elems = {
        seconds0: null,
        seconds1: null,
        minutes0: null,
        minutes1: null,
        hours0: null,
        hours1: null
    };

    var heights = {
        seconds0: null,
        seconds1: null,
        minutes0: null,
        minutes1: null,
        hours0: null,
        hours1: null
    };

    function handleTimer() {
        var now = new Date();

        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();

        elems.seconds0.style.top = -((heights.seconds0 / 10) * (seconds % 10)) + "px";
    }

    function getNumberBandHeights() {
        elems.seconds0 = document.getElementById("seconds_0");
        elems.seconds1 = document.getElementById("seconds_1");
        elems.minutes0 = document.getElementById("minutes_0");
        elems.minutes1 = document.getElementById("minutes_1");
        elems.hours0 = document.getElementById("seconds_0");
        elems.hours1 = document.getElementById("seconds_1");

        heights.seconds0 = elems.seconds0.clientHeight;
        heights.seconds1 = elems.seconds1.clientHeight;
        heights.minutes0 = elems.minutes0.clientHeight;
        heights.minutes1 = elems.minutes1.clientHeight;
        heights.hours0 = elems.hours0.clientHeight;
        heights.hours1 = elems.hours1.clientHeight;
    }

    function init() {
        getNumberBandHeights();
    }

    function loaded() {
        init();
        setInterval(handleTimer, 100);
    }

    document.addEventListener("DOMContentLoaded", loaded)
}());