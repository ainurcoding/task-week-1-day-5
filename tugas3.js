
// nilaiAwal, nilaiAkhir, dataArray
const SeleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    let nilaiTerseleksi = [];

    if (dataArray.length < 5) {
        console.log("Jumlah angka dalam dataArray harus lebih dari 5");
    }
    if (nilaiAkhir < nilaiAwal) {
        console.log("Nilai akhir harus lebih besar dari nilai awal");
    }

    dataArray.forEach((value) => {
        if (value >= nilaiAwal && value <= nilaiAkhir) {
            nilaiTerseleksi.push(value);
        }
    })
    if (dataArray.length < 5 || nilaiAwal > nilaiAkhir) {
        return;
    } else if (nilaiTerseleksi.length == 0) {
        console.log("Nilai Tidak ditemukan");
    } else {
        console.log(nilaiTerseleksi.sort(function (a, b) { return a - b }))
    }


}

SeleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8])
// Output:
// [8, 14, 17]

SeleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8])
// Output:
// “Nilai akhir harus lebih besar dari nilai awal”

SeleksiNilai(5, 17 , [2, 25, 4])
// Output:
// “Jumlah angka dalam dataArray harus lebih dari 5”

SeleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18])
// Output:
// “Nilai tidak ditemukan”
