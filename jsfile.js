var arrayOfMovies=["The Avengers","Iron Man","Captain America","Doctor Strange","Avengers: Age of Ultron","Captain Marvel","Guardians of the Galaxy"]

//3.Write a console statement that outputs the list of movie titles
console.log(arrayOfMovies.join());

//Write a statement that reverses and outputs the contents of the list - without changing the original list
var newarrayOfMovies = [...arrayOfMovies].reverse();
console.log(newarrayOfMovies.join());

//Write a statement that puts a movie on to the end of the original list and output using a console statement

arrayOfMovies.push("Thor");
console.log(arrayOfMovies.join());

//Write a statement that puts a movie on to the start of the original list and output using a console statement

arrayOfMovies.unshift("Iron Man 2");
console.log(arrayOfMovies.join());

//Write a statement that inserts a movie as the second item in the list
arrayOfMovies.splice(1,0,"Thor: Ragnarok")
console.log(arrayOfMovies.join());

//Write a statement that inserts the list into the html page as as list of paragraphs (<p> tag)

document.getElementById("paragraphs").innerHTML= "<p>"+ arrayOfMovies.join("</p> <p>") +"</p>";

//Write a statement that inserts the list into the html page as an ORDERED (OL) list
document.getElementById("ordered").innerHTML= "<ol> <li>" +arrayOfMovies.join("</li> <li>") +"</li> </ol>";
