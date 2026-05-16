var dataArray = [];

function tambahData() {

    var dataBaru = document.getElementById("data").value;
    var angka = parseFloat(dataBaru);


    if (!isNaN(angka)) {
        dataArray.push(angka);
        document.getElementById("data").value = "";
    } else {
        alert("Masukkan angka")
    }
}

function jalankanOperasi() {
    var operasi = document.getElementById("pilihanOperasi").value;
    var hasilInput = document.getElementById("hasil");

    if (operasi === "Display") {
        hasilInput.value = dataArray.join(", ");
    }
    else if (operasi === "Count") {
        hasilInput.value = dataArray.length;
    }
    else if (operasi === "Sum") {
        var total = 0;
        for (var i = 0; i < dataArray.length; i++) {
            total += dataArray[i];
        }
        hasilInput.value = total;
    }
    else if (operasi === "Average") {
        if (dataArray.length === 0) { hasilInput.value = 0; return; }
        var total = 0;
        for (var i = 0; i < dataArray.length; i++) {
            total += dataArray[i];
        }
        hasilInput.value = (total / dataArray.length).toFixed(2);
    }
    else if (operasi === "Max") {
        if (dataArray.length === 0) { hasilInput.value = ""; return; }
        hasilInput.value = Math.max.apply(null, dataArray);
    }
    else if (operasi === "Min") {
        if (dataArray.length === 0) { hasilInput.value = ""; return; }
        hasilInput.value = Math.min.apply(null, dataArray);
    }
    else if (operasi === "Ganjil") {
        var ganjil = dataArray.filter(num => num % 2 !== 0);
        hasilInput.value = ganjil.join(", ");
    }
    else if (operasi === "Genap") {
        var genap = dataArray.filter(num => num % 2 === 0);
        hasilInput.value = genap.join(", ");
    }
    else if (operasi === "Hapus") {
        dataArray = []; 
        hasilInput.value = "";
        document.getElementById("pilihanOperasi").value = ""; 
    }
}