// Task-1. Bir funksiya yaziriq, bizden string goturur parametr kimi,
//  string olan butun herfler boyukdurse ve ya kicikdirse true yazdirsin.
//  Eksa Halda false yazdirsin.

// "Sərxan" => false; "SƏRXAN" => true; "sərxan" => true;

//Task-1
// function checkWord(str) {
//   //Kenan               kenan
//   if (str == str.toLowerCase() || str == str.toUpperCase()) {
//     return true;
//   }
//   return false;
// }

// console.log(checkWord("EMIL"));

// Task 2. Arrayin Join methodu kimi , custom bir function yazmalisiniz.
// function parametr olaraq bir array qebul elesin, ve bir string qebul elesin.
// bu arrayin indekslerini bu string vasitesi ile ayirsin. Eyniyle Join methodunun elediyinin
// custom olaraq yazmalisiniz.

// Hazir join methodundan istifade elemek olmaz :D

// let arr = ["Banana","Kiwi","Mango"] => sizin function(gonderdiyiniz stringe gore stringleri ayirir)
// ("Banana","Kiwi","Mango");

// function customJoin(arr, str = "*") {
//     // debugger
//   let result = "";
//   for (let i = 0; i <arr.length-1; i++) {
//     result += arr[i] + str;
//   }
//   result += arr[arr.length-1]
//   return result;
// }
// console.log(customJoin(["Nazile", "Emil", "Veli","Cavid","Namiq"], "*"));

//           0         1     2      3        4
// let arr = ["Nazile","Veli","Emil","Namiq","Samir","Kamil"]

// console.log(arr[arr.length-2]);
