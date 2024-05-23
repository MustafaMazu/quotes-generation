var quotes = [

    {quote: "Be yourself; everyone else is already taken",
      author :` Marilyn Monroe`}, 

{quote : "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me",
author : `Oscar Wilde`},


{quote :  "So many books, so little time" ,
author :` Frank Zappa`},


{quote : "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
author :` Albert Einstein `}
]







function generateQuote() {

    var randomIndex = Math.floor(Math.random() * quotes.length);


    var randomQuote = quotes[randomIndex];


    document.getElementById('quote').innerHTML = `" `+ randomQuote.quote + `"`

    document.getElementById('author').innerHTML = '-- ' + randomQuote.author
    
}

generateQuote()


