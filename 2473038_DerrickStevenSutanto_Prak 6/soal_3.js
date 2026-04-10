function cek() {
    let input = document.getElementById("tinggi").value;
    let angka = parseInt(input);

    if (isNaN(angka) || angka <= 0) {
        alert("Harus angka positif!");
        return;
    }

    let container = document.getElementById("hasil");
    let totalKolom = 2 * angka - 1;
    let htmlTable = "<table>";

    for (let i = 1; i <= angka; i++) {
        htmlTable += "<tr>";

        let jumlahKotak = 2 * i - 1;
        let spasiSamping = (totalKolom - jumlahKotak) / 2;

        for (let j = 1; j <= totalKolom; j++) {
            if (j > spasiSamping && j <= (spasiSamping + jumlahKotak)) {
                htmlTable += "<td class='td-piramid'></td>";
            } else {
                htmlTable += "<td></td>";
            }
        }
        htmlTable += "</tr>";
    }

    htmlTable += "</table>";
    container.innerHTML = htmlTable;
}