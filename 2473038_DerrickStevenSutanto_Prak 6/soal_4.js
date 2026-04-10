function proses() {
    let input = document.getElementById("input").value;
    let mode = document.getElementById("mode").value;

    if (mode == "1") {
        let angka = parseInt(input);

        if (isNaN(angka) || angka < 0 || angka > 255) {
            alert("Input harus angka 0 - 255");
            return;
        }

        let hasil = "";
        let temp = angka;

        while (temp > 0) {
            let sisa = temp % 2;
            hasil = sisa + hasil;
            temp = Math.floor(temp / 2);
        }

        if (hasil == "") {
            hasil = "0";
        }

        while (hasil.length < 8) {
            hasil = "0" + hasil;
        }

        document.getElementById("output").value = hasil;
    }

    else {
        if (input.length != 8) {
            alert("Biner harus 8 digit!");
            return;
        }

        let valid = true;
        for (let i = 0; i < input.length; i++) {
            if (input[i] != "0" && input[i] != "1") {
                valid = false;
            }
        }

        if (!valid) {
            alert("Biner hanya boleh 0 dan 1!");
            return;
        }

        let hasil = 0;
        let pangkat = 0;

        for (let i = input.length - 1; i >= 0; i--) {
            if (input[i] == "1") {
                hasil = hasil + Math.pow(2, pangkat);
            }
            pangkat++;
        }

        document.getElementById("output").value = hasil;
    }
}

function resetForm() {
    document.getElementById("input").value = "";
    document.getElementById("output").value = "";
}