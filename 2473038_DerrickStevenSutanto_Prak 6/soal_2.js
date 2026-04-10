let angka;
let inputValid = false;

while (!inputValid) {
    let userInput = prompt("A number?");

    if (userInput !== null) {
        angka = parseInt(userInput);

        if (!isNaN(angka)) {
            inputValid = true;
        }
    }
}

let tabelHTML = "<table>";
for (let i = 1; i <= angka; i++) {
    let hasil = i * angka;
    tabelHTML += `
                <tr>
                    <td>${i}</td>
                    <td class="simbol">x</td>
                    <td>${angka}</td>
                    <td class="simbol">=</td>
                    <td>${hasil}</td>
                </tr>
                `;
}
tabelHTML += "</table>";

document.getElementById("tabel-container").innerHTML = tabelHTML;