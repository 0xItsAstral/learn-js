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

// next operator mateatika pzn