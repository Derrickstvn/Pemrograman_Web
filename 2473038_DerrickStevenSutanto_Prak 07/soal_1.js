function call_onKeyPress(ob) {
    var obval = ob.value;

    if (obval.length > 256) {
        ob.value = obval.substr(0, 256)
        obval = ob.value;
    }

    document.getElementById("txt2").value = obval.length + "/256";
}