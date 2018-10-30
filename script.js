//alert("Working")
//THERES A SNAKE IN MY BOOT!

//--------------------------------COUNTER FUNCTION------------------------------
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
    document.getElementById('years').firstChild.nodeValue = years + " year(s) ";
    document.getElementById('days').firstChild.nodeValue = days + " day(s)";
    document.getElementById('hours').firstChild.nodeValue = hours + " hour(s)";
    document.getElementById('minutes').firstChild.nodeValue = mins + " min(s)";
    document.getElementById('seconds').firstChild.nodeValue = secs + " sec(s)";

    clearTimeout(upTime.to);
    upTime.to = setTimeout(function() { upTime(countTo); }, 1000);
    /*
     * Basic Count Up from Date and Time
     * Author: @mrwigster / trulycode.com
     */
}

//--------------------------------FACEBOOK-------------------------------

//RUN FACEBOOK SHARE FOR HTML ONCLICK 
function fbShare() {
    //alert("yes");
    FB.ui({
        method: 'share_open_graph',
        action_type: 'og.likes',
        action_properties: JSON.stringify({
            object: 'www.sadwallabies.com',
        })
    }, function(response) {
        // Debug response (optional)
        console.log(response);
    });
};

//FACEBOOK  SHARE INIT
window.fbAsyncInit = function() {
    FB.init({
        appId: '315419265714621',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v3.2'
    });
};

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//TWITTER SHARE INT

window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function(f) {
        t._e.push(f);
    };

    return t;
}(document, "script", "twitter-wjs"));