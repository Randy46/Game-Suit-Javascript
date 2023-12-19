for (i = 3; i > 0; i--) {
    // menangkap pilihan player
    var p = prompt("pilih angka 1 - 10 " + "\nkamu memiliki " + i + " kesempatan");

    // menangkap pilihan komputer dan memasukan angka random
    var comp = Math.round(Math.random() * 10 + 1)

    // rules game
    if (p == comp) {
        alert('anda benar' + '\nangka yang benar adalah ' + comp)
        break;//keluar dari lopping jika hasil true
    } else if (p != comp) {
        alert('jawaban yang anda masukan salah' + '\nkesempatan anda ' + i + '\nBISA MAIN GAK SEH MASE :}')
    }
}
