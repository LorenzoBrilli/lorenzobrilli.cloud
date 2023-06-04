function toggleMenu(){
    document.getElementById("menu").classList.toggle('expanded');
    document.getElementById("menucloser").classList.toggle('expanded');
}
function showAbout(){
    toggleMenu();
    if (!document.getElementById("desc").classList.contains('visible')) {
        document.getElementById("logo").classList.toggle('logoabout');
        document.getElementById("desc").classList.toggle('visible');
        document.getElementById("about").innerHTML = ``
    }
}

// ----- Cookie Banner ----- //
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + "; SameSite=Lax";
}
function checkCookieConsent(){
    // check banner already closed
    let bannerClosed = getCookie("cookie-banner-closed")
    let banner = document.getElementById("cookie-banner")
    if (banner != null){
        if (bannerClosed == "true") banner.classList.add("is-hidden")
        else banner.classList.remove("is-hidden")
    }
    // check cookie-consent
    let consent = getCookie("cookie-consent")
    consent = consent == 'true'
    // check if iframe is present
    let bandcampdiv = document.getElementById('bandcampdiv')
    if (bandcampdiv != null){
        if (consent) bandcampdiv.innerHTML = `<iframe id="bandcampplayer" src="https://bandcamp.com/EmbeddedPlayer/album=4289591263/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/" seamless><a href="http://antonelse.bandcamp.com/album/spectral-environment-i">Spectral Environment I by Antonio Giganti</a></iframe>`
        else bandcampdiv.innerHTML = ``
    }
    // check if cookie control panel is present
    let consent_cookie_yes = document.getElementById('cookie-yes')
    let consent_cookie_no = document.getElementById('cookie-no')
    if (consent_cookie_yes != null){
        if (consent) consent_cookie_yes.checked = true
        else consent_cookie_no.checked = true
    }
}
function consentCookies(){
    setCookie("cookie-banner-closed","true",30)
    setCookie("cookie-consent","true",30)
    checkCookieConsent();
}
function rejectCookies(){
    setCookie("cookie-banner-closed","true",30)
    setCookie("cookie-consent","false",30)
    checkCookieConsent();
}
checkCookieConsent()