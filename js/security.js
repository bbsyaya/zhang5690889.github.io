//Didsable text selection
function disabletext(e) {
    return false
}

function reEnable() {
    return true
}

//if the browser is IE4+
document.onselectstart = new Function("return false")

//if the browser is NS6
if (window.sidebar) {
    document.onmousedown = disabletext
    document.onclick = reEnable
}


//disable f12
document.onkeydown = function(e) {
    if (e.which == 17 || e.which == 18 || e.which == 91 || e.which == 93 || e.which == 123 || e.which == 224) {
        return false;
    }
}

//disable ctrl shift i
window.addEventListener("keydown", function(e) {
    if (e.ctrlKey && (e.which == 16 || e.which == 73 || e.which == 74)) {
        e.preventDefault();
    }
})
document.keypress = function(e) {
    if (e.ctrlKey && (e.which == 16 || e.which == 73 || e.which == 74)) {}
    return false;
};

window.addEventListener("keydown", function(e) {
    if (e.ctrlKey && (e.which == 65 || e.which == 66 || e.which == 67 || e.which == 70 || e.which == 80 || e.which == 83 || e.which == 85)) {
        e.preventDefault();
    }
})
document.keypress = function(e) {
    if (e.ctrlKey && (e.which == 65 || e.which == 66 || e.which == 67 || e.which == 70 || e.which == 80 || e.which == 83 || e.which == 85)) {}
    return false;
};

//diable right click
document.oncontextmenu = function(e) {
    var t = e || window.event;
    var elm = t.target || t.srcElement;
    if (elm.nodeName == "A" || elm.type == 'text' || elm.type == 'password')
        return true;
    return false;
}