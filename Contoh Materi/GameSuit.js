//lopping 
var tanya = "true";

while (tanya) {
    // menangkap pilihan player
    var p = prompt("pilih = gajah, semut, orang");

    //menangkap pilihan computer
    // membangkitkan pilihan random
    var comp = Math.random();

    if (comp < 0.34) {
        comp = 'gajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'orang'
    } else {
        comp = 'semut'
    }


    // rules game
    var hasil = '';

    if (p == comp) {
        hasil = "seri"
    } else if (p == "gajah") {
        // if (comp == orang) {
        //     hasil = "menang"
        // } else {
        //     hasil = "kalah"
        // }
        hasil = (comp == "orang") ? 'menang' : 'kalah';
    } else if (p == "orang") {
        hasil = (comp == "gajah") ? 'kalah' : ' menang';
    } else if (p == "semut") {
        hasil = (comp == "orang") ? 'kalah' : 'menang';
    } else {
        hasil = 'kamu memasukan hasil yang salah'
    }

    //tampilan hasil

    alert('kamu memilih ' + p + ' dan komputer memilih ' + comp + ' \nmaka hasilnya kamu = ' + hasil);

    tanya = confirm("lagi");
}
alert("terima kasih suidah main")