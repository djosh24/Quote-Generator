const apiURL = 'https://api.quotable.io/random';
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

async function getQuote(url) {
  const response = await fetch(apiURL);
  var data = await response.json();
  
  console.log(data); 
  
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}

getQuote(apiURL);

function post(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " ---- by " + author.innerHTML, "Tweet Window", "Width= 600, height=300");
}