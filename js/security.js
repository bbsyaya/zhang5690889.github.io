// This disables selection and right click
function clickIE4() {
    if (event.button == 2) {
        return false;
    }
}
function clickNS4(e) {
    if (document.layers || document.getElementById && !document.all) {
        if (e.which == 2 || e.which == 3) {
            return false;
        }
    }
}
if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown = clickNS4;
}
else if (document.all && !document.getElementById) {
    document.onmousedown = clickIE4;
}
document.oncontextmenu = new Function("return false")
document.onselectstart = new Function('return false');
function dMDown(e) { return false; }
function dOClick() { return true; }
document.onmousedown = dMDown;
document.onclick = dOClick;
document.oncontextmenu = new Function("return false");
function disableSelectCopy(e) {
    var pressedKey = String.fromCharCode(e.keyCode).toLowerCase();
    if (e.ctrlKey && (pressedKey == "c" || pressedKey == "x" || pressedKey == "v" || pressedKey == "a")) {

        return false;
    }
}
document.onkeydown = disableSelectCopy;
document.onkeydown = function (objEvent) {

        if (objEvent.ctrlKey || objEvent.metaKey) {

            if (objEvent.keyCode == 65 || objEvent.keyCode == 97) {

                return false;
            }
        }

    };

// diable F12
    document.onkeypress = function (event) {
        event = (event || window.event);
        if (event.keyCode == 123) {
           //alert('No F-12');
            return false;
        }
    }
    document.onmousedown = function (event) {
        event = (event || window.event);
        if (event.keyCode == 123) {
            //alert('No F-keys');
            return false;
        }
    }
document.onkeydown = function (event) {
        event = (event || window.event);
        if (event.keyCode == 123) {
            //alert('No F-keys');
            return false;
        }
    }