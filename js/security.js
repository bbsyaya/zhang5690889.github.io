// This disables right click
var message = "Function Disabled!";

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

// no selection 
//disable mouse drag select start

document.onselectstart = new Function('return false');

function dMDown(e) { return false; }

function dOClick() { return true; }

document.onmousedown = dMDown;

document.onclick = dOClick;

$("#document").attr("unselectable", "on"); 

//disable mouse drag select end

//disable right click - context menu

document.oncontextmenu = new Function("return false");


//disable CTRL+A/CTRL+C through key board start

//use this function


function disableSelectCopy(e) {

// current pressed key

    var pressedKey = String.fromCharCode(e.keyCode).toLowerCase();

    if (e.ctrlKey && (pressedKey == "c" || pressedKey == "x" || pressedKey == "v" || pressedKey == "a")) {

        return false;

    }

}

document.onkeydown = disableSelectCopy;


//or use this function

$(function () {

    $(document).keydown(function (objEvent) {

        if (objEvent.ctrlKey || objEvent.metaKey) {

            if (objEvent.keyCode == 65 || objEvent.keyCode == 97) {

                return false;

            }

        //}

        }

    });

});