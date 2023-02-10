/*
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Learn JavaScript</title>
    <script>
      // Code One
      document.getElementById("el").style.color = "red";  not found any element has this name or this value
    </script>
    <script>
      // Code Two
      window.onload = function () {
        document.getElementById("el").style.color = "red";
      };
    </script>
  </head>
  <body>
    <h1 id="el">Page Title</h1>
    <script>
      // Code Three
      document.getElementById("el").style.color = "red";
    </script>
  </body>
</html>
*/

document.write("<h1>Elzero</h1>");

document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontSize = "80px";
document.querySelector("h1").style.fontWeight = "bold";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.fontFamily = "Arial";
//-------------------------------------------------------------
console.log(
  "%cElzero %cWeb %cSchool",
  "color:red; font-size:40px;  ",
  "color:green; font-size:40px; font-weight:bold;  ",
  "color:blue; font-size:40px;  "
);
//-----------------------------------------------------------------
console.group("Group 1");
console.log("Massage One");
console.log("Massage Two");
console.group("Child Group");
console.log("Message One");
console.log("Message Two");
console.groupEnd();
console.group("grand child group");
console.log("Message One");
console.log("Message Two");
console.groupEnd();

console.groupEnd();
//----------------------  all group need the closed group (groupend)

console.group("Group 2");
console.log("Message One");
console.log("Message Two");
console.groupEnd();

//------------------------------------------------
console.table(["Elzero", "Ahmad", "sameh", "gamal", "Aya"]);
// console.table(["Elzero", "Ahmad", "sameh", "gamaal", "Aya"]);
// console.table(["Elzero", "Ahmad", "sameh", "gamaal", "Aya"]);
// console.table(["Elzero", "Ahmad", "sameh", "gamaal", "Aya"]);
// console.table(["Elzero", "Ahmad", "sameah", "gamal", "Aya"]);
//--------------------------------------------------------

/*
console.log("Iam In Console");
document.write("Iam In Page");
*/

//console.log("Iam In Console");
//document.write("Iam In Page");
