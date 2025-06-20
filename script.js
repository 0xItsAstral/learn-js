document.writeln("<h1>hello world</h1>"); // Menulis text di body

/* data string
\n = enter
\t = tab
\" = % \' "&'
\\ = \
*/

document.writeln("<textarea cols= '100' rows= '10'>");
document.write("hello \n");
document.write('"its astral"\n');
document.write("\tbelajar javascript\n");
document.write("\\github\\0xitsAstral");
document.writeln("</textarea>");

// Variabel var, let, const
// disarankan pakai let
// variabel const (constant) tidak dapat dirubah
let firstName = "Muhammad "; //string
let midleName = "Asgarul";
let lastName = "Tsani";
let fullName = firstName + midleName + lastName;
let usia = 21; //number
let hidup = true; //boolean
let status = null; //null

document.writeln("\n<h1>Variabel</h1>\n");
document.writeln("Nama: " + fullName);
document.writeln("</br>");
document.writeln("Usia: " + usia + " tahun");
document.writeln("</br>");
document.writeln("Hidup: " + hidup);
document.writeln("</br>");
document.writeln("Status: " + status);

//  operator mateatika
document.writeln("<h1>OPERASI MATEMATIKA</h1>");
document.writeln("<P>PERTAMBAHAN = +</P>");
document.writeln("<P>PENGURANGAN = -</P>");
document.writeln("<P>PERKALIAN = *</P>");
document.writeln("<P>EKPONENSIAL = **</P>");
document.writeln("<P>PEMBAGIAN = /</P>");
document.writeln("<P>BAGI HASIL = %</P>");

let result = 1 + 2; // 3
document.writeln("<p>1 + 2 = " + result + "</p>");
let originalResult = result;

result = result - 1; // 2
document.writeln("<p>3 - 1  = " + result + "</p>");
originalResult = result;

result = result * 2; // 4
document.writeln("<p>2 * 2 = " + result + "</p>");
originalResult = result;

// operator augmented asignment
// note: fungsi result = result dapat di persingkat menjadi result +=

// let result = 1 + 2; // 3
// document.writeln("<p>1 + 2 = " + result + "</p>");
// let originalResult = result;

// result -= 1; // 2
// document.writeln("<p>3 - 1  = " + result + "</p>");
// originalResult = result;

// result *= 2; // 4
// document.writeln("<p>2 * 2 = " + result + "</p>");
// originalResult = result;

document.writeln("<h1>OPERASI UNARY</h1>");

document.writeln("<P>Menandakan nilainy positif = +</P>");
document.writeln("<P>Menandakan nilainy negatif = -</P>");
document.writeln("<P>Increment, menaikkan 1 angka = ++</P>");
document.writeln("<P>Decrement, menurunkan 1 angka = --</P>");

let result1 = 1;
result1++; // 2 dts
document.writeln(result1);
document.writeln("</br>");
// mengconversi nilai -/+
result1 = -result1; // -2
document.writeln(result1);

document.writeln("<h1>OPERASI PERBANDINGAN</h1>");
// kurang dari <
// lebih dari >
// kurang dari atau sama dengan <=
// lebih dari atau sama dengan >=
// sama dengan ==
// sama dengan dan sama tipe ===
// != tidak sama dengan
// !== tidak sama dengan dan tidak sama tipe
let banding = 5 == "5"; //  True
banding = 5 === 5; // True
banding = 5 === "5"; // False
banding = 5 < 10; // True
banding = 5 > 10; // False

// String Template

const template = `name : $(firstName) $(midleName) $(lastName)`;
console.info(template);

// multipel string

let multiString = `
name : asgarul
age : 21
gender : male

`;

// Tipe Data Array

let dataArray = ["asgarul", "21", "male"];

console.info(dataArray);
dataArray.push("javascript");
console.info(dataArray);

// tipe data object

const orang = {
  nama: "asgarul",
  umur: 21,
  negara: "ID",
};
console.table(orang);

let aku = {};
aku["nama lengkap"] = "muhammad asgarul tsani";
console.info(aku["nama lengkap"]);

let kosong = {};

// if else exspression

let nilai = 10;

if (nilai >= 70) {
  document.writeln("<p>kamu lulus</p>");
} else {
  document.writeln("<p>kamu tidak lulus</p>");
}

