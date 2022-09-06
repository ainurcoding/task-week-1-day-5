// 1
/**
 * Buat dan jelaskanlah 10 method bawaan JavaScript (Built-in Function) beserta contoh penggunaannya
 * (kecuali : split, reverse, join, foreach);
 */

// Number method

// a : toFixed()

// digunakan untuk pembulatan ke desimal terdekat
// var num = 177.1734;
// var num2 = 177.9234
// console.log(num.toFixed()); // 177
// console.log(num2.toFixed()); // 178

// // bisa juga pembulatan untuk jumlah digit setelah titik desimal
// console.log(num.toFixed(1)); // 177.2

// b : toPrecision()
// method ini mengembalikan string yang mewakili objek angka ke presisi yang ditentukan

// var num = new Number(17.12345);
// console.log(num.toPrecision()); // 17.12345
// console.log(num.toPrecision(6)); // 17.1234
// console.log(num.toPrecision(2)); // 17

// c : toString()

// method ini mengembalikan string yang mewakili objek yang ditentukan. Method toString() memparsing argumen pertamanya, dan mencoba mengembalikan representasi string dalam radix (basis) yang ditentukan.

// num = new Number(4);
// console.log(typeof num.toString());

// // jika parameter di dalam fungsi tsb diberi value 2, maka hasilnya akan di konversi ke biner
// console.log(typeof num.toString(2));

// str1 =  new String("Hi Guys");
// console.log(typeof str1) //object
// console.log(typeof str1.toString()); // string

// d : valueOf()
// method ini mengembalikan primitif nilai dari object number yang ditentukan
// var num = new Number(15.11224);
// console.log(num); // [Number: 15.11224]
// console.log(num.valueOf(num)) // 15.11224


// String methods
// e : charAt
// var bootcampName = "Pijar Camp5";
// console.log(bootcampName.charAt(0)) //P

// // untuk mendapat index terakhir
// console.log(bootcampName.charAt(bootcampName.length-1)) //5

// f : charCodeAt
/**
 * method ini mengembalikan angka yang menunjukkan nilai Unicode karakter pada indeks yang diberikan.
 * kecocokan langsung dari pengkodean karakter ASCII (American Standard Code for Information Interchange)
 */

// var str1 = "This is JavaScript";
// // secara default apabila parameter kosong ia akan mengkonversi huruf awal 
// console.log(str1.charCodeAt()); // 84

// // mengkonversi huruf paling akhir / karakter paling akhir
// console.log(str1.charCodeAt(str1.length-1)); //116

// g : concat()
/**
 * method ini menambahkan 2 atau lebih string dan mengembalikannya sebagai single string
 */

// var str1 = "Budi";
// var str2 = "Makan";
// var str3 = "Nasi";
// var concatStr = str1.concat(str2 + str3)
// console.log(concatStr); //BudiMakanNasi

// h : indexOf()
/**
 * method ini mengembalikan indeks di dalam objek string panggilan dari kemunculan pertama dari nilai
 * yang ditentukan, memulai pencarian di index atau -1 jika  nilainya tidak ditemukan
 */

// var str = "This is JavaScript";
// console.log(str.indexOf("This")); // 0
// console.log(str.indexOf("It")); // -1
// console.log(str.indexOf("Ja")); // 8

// date method
// i : Date()
/**
 * mengembalikan waktu dan tanggal sesuai kapan pemanggilannya
 */

// var dt = Date();
// console.log(`Date and Time: ${dt}`); // output akan menyesuaikan waktu pemanggilannya

// j : getDate()
/**
 * method getDate() mengembalikan hari dalam sebulan untuk tanggal yang ditentukan menurut waktu setempat. 
 * Nilai yang dikembalikan oleh getDate() adalah bilangan bulat antara 1 dan 31
 */

// var dt = new Date();
// console.log(dt);
// console.log(`getDate():  ${dt.getDate()}`) // getDate(): 4




