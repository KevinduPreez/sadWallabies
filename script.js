//alert("Working")
//THERES A SNAKE IN MY BOOT!
window.onload = function() {
    // Month,Day,Year,Hour,Minute,Second
    upTime('aug,16,2003,17:05:00'); // ****** Change this line!
};

function upTime(countTo) {
    now = new Date();
    countTo = new Date(countTo);
    difference = (now - countTo);
    days = Math.floor(difference / (60 * 60 * 1000 * 24) * 1);
    years = Math.floor(days / 365);
    if (years > 1) { days = days - (years * 365) }
    hours = Math.floor((difference % (60 * 60 * 1000 * 24)) / (60 * 60 * 1000) * 1);
    mins = Math.floor(((difference % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) / (60 * 1000) * 1);
    secs = Math.floor((((difference % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) % (60 * 1000)) / 1000 * 1);
    document.getElementById('years').firstChild.nodeValue = years + " years ";
    document.getElementById('days').firstChild.nodeValue = days + " days";
    document.getElementById('hours').firstChild.nodeValue = hours + " hours";
    document.getElementById('minutes').firstChild.nodeValue = mins + " mins";
    document.getElementById('seconds').firstChild.nodeValue = secs + " secs";

    clearTimeout(upTime.to);
    upTime.to = setTimeout(function() { upTime(countTo); }, 1000);
}

/*
 * Basic Count Up from Date and Time
 * Author: @mrwigster / trulycode.com
 */


function fbShare() {
    alert("yes");
    FB.ui({
        method: 'share',
        display: 'popup',
        href: 'https://developers.facebook.com/docs/',
    }, function(response) {});
};





$(window).scroll(function() {
    var x = $(this).scrollTop();
    $("#main-container").css('background-position', '0% ' + parseInt(+x / 1.5) + 'px');
});