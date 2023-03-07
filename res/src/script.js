function readTextFile(file) {

  var rawFile = new XMLHttpRequest();
  var allText = "";
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status === 0) {
        allText = rawFile.responseText;
      }
    }
  }
  rawFile.send(null);
  return allText;
}

function generatePassword() {

  //colorS
  let colors = ['#51434A', '#6E6466', '#DDC7BA', '#F2E9E1', '#F7F4F3'];

  //get a random word from the txt file
  let words = readTextFile("res/words.txt").split('\n');

  //reove all p tags
  $('#password').empty();

  for (let i = 0; i < $('#length').val(); i++) {

    let randomWord = words[Math.floor(Math.random() * words.length)];
    let newP = document.createElement('p');

    //create a new paragraph element for each word with a random color and size
    newP.style.display = 'inline';
    newP.style.fontSize = Math.floor(Math.random() * 30) + 30 + 'px';
    newP.style.color = colors[Math.floor(Math.random() * colors.length)];
    //word spacing
    newP.style.marginRight = '0px';
    //line height
    newP.style.lineHeight = '0px';
    //letter spacing
    newP.style.letterSpacing = '0px';


    //check if the length of the word is greater than 0
    newP.innerHTML = randomWord + ' ';

    document.getElementById('password').appendChild(newP);

  }

}

