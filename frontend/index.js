function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇
  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in

  const divs = document.querySelectorAll('section div');
  divs.forEach(div => div.classList.add('widget'));

  // 👉 TASK 2 - Build a "Quote of the Day" widget

  const quoteWidget = document.querySelector('.quoteoftheday');
  const quoteText = document.createElement('div');
  const quoteAuthor = document.createElement('div');
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  const quote = randomQuote.quote;
  const author = randomQuote.author;
  const date = randomQuote.date === null ? 'an uknown date' : randomQuote.date;

  quoteText.textContent = quote;
  quoteAuthor.textContent = `${author} in ${date}`;

  quoteWidget.appendChild(quoteText);
  quoteWidget.appendChild(quoteAuthor);

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  
  const corporateWidget = document.querySelector('.corporatespeak');
  

  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here

  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here

  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
