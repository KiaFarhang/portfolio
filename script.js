"use strict";

function toggleDisplayMobile(e) {
    var t = e.target.parentElement,
        i = t.getElementsByTagName("div"),
        l = i[0],
        s = t.firstChild.nextSibling;
    console.log(s), l.classList.toggle("show"), s.classList.toggle("selected") }

function toggleDisplay(e) {
    function t(e) {
        var t = document.createDocumentFragment();
        t.appendChild(e.cloneNode(!0)), t.firstChild.classList.toggle("show"), a.appendChild(t) }

    function i(e) {
        var t = e.getElementsByTagName("p"),
            i = t[0],
            l = n.getElementsByTagName("p"),
            s = l[0];
        return i.isEqualNode(s) }
    var l = e.target.parentElement,
        s = l.getElementsByTagName("div"),
        n = s[0],
        a = (l.firstChild.nextSibling, document.getElementById("displayZone"));
    a.firstChild ? i(a) ? a.removeChild(a.firstChild) : (a.removeChild(a.firstChild), t(n)) : t(n) }
var items = document.querySelectorAll("h4");
if (screen.width < 768)
    for (var i = 0; i < items.length; i++) items[i].addEventListener("click", toggleDisplayMobile);
else
    for (var _i = 0; _i < items.length; _i++) items[_i].addEventListener("click", toggleDisplay);
