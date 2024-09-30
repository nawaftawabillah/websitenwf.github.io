function validateName() {
    let userInput = prompt("Masukkan nama Anda:");

    while (!userInput || !/^[a-zA-Z]+$/.test(userInput)) {
        if (!userInput) {
            alert("Error!!: Nama tidak boleh kosong. Harap masukkan nama.");
        } else {
            alert("Error!!: Anda memasukkan nomor atau karakter tidak valid.Nama harus terdiri dari huruf saja.");
        }
        userInput = prompt("Masukkan nama Anda lagi:");
    }

    alert(`Selamat Datang  ${userInput}` + ' Yang Manis');
}

// Memanggil fungsi untuk memulai proses validasi
validateName();