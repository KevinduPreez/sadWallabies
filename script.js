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

//RUN FACEBOOK SHARE FOR HTML ONCLICK 
function fbShare() {
    //alert("yes");
            FB.ui({
            method: 'share_open_graph',
            action_type: 'og.likes',
            action_properties: JSON.stringify({
                object: 'https://kevindupreez.github.io/sadWallabies/',
            })
        }, function(response) {
            // Debug response (optional)
            console.log(response);
        });
/*

    FB.ui({
        method: 'share',
        display: 'popup',
        href: 'https://developers.facebook.com/docs/',
    }, function(response) {}); 

*/
};
//FACEBOOK  SHARE INIT
    window.fbAsyncInit = function() {
        FB.init({
            appId: '315419265714621',
            autoLogAppEvents: true,
            xfbml: true,
            version: 'v3.2'
        });
/*
        FB.ui({
            method: 'share_open_graph',
            action_type: 'og.likes',
            action_properties: JSON.stringify({
                object: 'https://kevindupreez.github.io/sadWallabies/',
            })
        }, function(response) {
            // Debug response (optional)
            console.log(response);
        });
*/
    };

    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) { return; }
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
