function hitung() {
    let input1 = document.getElementById("angka1").value;
    let input2 = document.getElementById("angka2").value;

    let nomor1 = parseInt(input1);
    let nomor2 = parseInt(input2);

    let cek1 = isNaN(nomor1);
    let cek2 = isNaN(nomor2);

    if (cek1 && cek2) {
        alert("Angka pertama dan kedua harus angka")
        return;
    } else if (cek1) {
        alert("Angka pertama bukan angka")
        return;
    } else if (cek2) {
        alert("Angka kedua bukan angka")
        return;
    }

    let h_tambah = nomor1 + nomor2;
    let h_kurang = nomor1 - nomor2;

    document.getElementById("tambah-pertama").innerHTML = nomor1;
    document.getElementById("tambah-kedua").innerHTML = nomor2;
    document.getElementById("tambah-hasil").innerHTML = h_tambah;

    document.getElementById("kurang-pertama").innerHTML = nomor1;
    document.getElementById("kurang-kedua").innerHTML = nomor2;
    document.getElementById("kurang-hasil").innerHTML = h_kurang;
}