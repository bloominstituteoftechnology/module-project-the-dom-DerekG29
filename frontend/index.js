function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇
  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in

  const divs = document.querySelectorAll('section div');
  divs.forEach(div => div.classList.add('widget'));
  const widgets = document.querySelectorAll('.widget');
  widgets.forEach((widget, index) => 
    widget.setAttribute('tabindex', `${index + 1}`)
  )

  // 👉 TASK 2 - Build a "Quote of the Day" widget

  const quoteWidget = document.querySelector('.quoteoftheday');
  const quoteText = document.createElement('div');
  const quoteAuthor = document.createElement('div');
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  const quote = randomQuote.quote;
  const author = randomQuote.author;
  const date = randomQuote.date === null ? 'an unknown date' : randomQuote.date;

  quoteText.textContent = quote;
  quoteAuthor.textContent = `${author} in ${date}`;

  quoteWidget.appendChild(quoteText);
  quoteWidget.appendChild(quoteAuthor);

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  
  const corporateWidget = document.querySelector('.corporatespeak');
  const corporateText = document.createElement('p');

  const verb1 = verbs[Math.floor(Math.random() * verbs.length)];
  const verb2 = verbs[Math.floor(Math.random() * verbs.length)];
  const noun1 = nouns[Math.floor(Math.random() * nouns.length)];
  const noun2 = nouns[Math.floor(Math.random() * nouns.length)];
  const adverb1 = adverbs[Math.floor(Math.random() * adverbs.length)];
  const adverb2 = adverbs[Math.floor(Math.random() * adverbs.length)];

  const textTemplate = `We need to ${verb1} our ${noun1} ${adverb1} in order to ${verb2} our ${noun2} ${adverb2}.`;

  corporateText.textContent = textTemplate;
  
  corporateWidget.appendChild(corporateText);
  
  // 👉 TASK 4 - Build a "Countdown" widget
  
  const countdownWidget = document.querySelector('.countdown');
  const countdownText = document.createElement('p');

  countdownWidget.appendChild(countdownText);

  countdownText.textContent = 'T-minus 5...';

  let count = 4;

  setInterval(function() {
    if (count > 0) {
      countdownText.textContent = `T-minus ${count}...`;
      count--;
    }
    else {
      countdownText.textContent = 'Liftoff! 🚀';
      clearInterval(this);
    }
  }, 1000);

  // 👉 TASK 5 - Build a "Friends" widget

  const friendsWidget = document.querySelector('.friends');
  const friendsText = document.createElement('p');

  const randomPerson = people[Math.floor(Math.random() * people.length)];
  const name = `${randomPerson.fname} ${randomPerson.lname}`;
  const birthYear = randomPerson.dateOfBirth.slice(0, 4);
  const friendIDs = randomPerson.friends;
  const friendNames = friendIDs.length ? [] : false;

  if (friendNames) {
    friendIDs.forEach(id => {
      for (let i = 0; i < people.length; i++) {
        if (people[i].id === id) {
          friendNames.push(`${people[i].fname} ${people[i].lname}`);
        }
      }
    })
    friendNames.forEach((name, idx) => {
      if (idx === friendNames.length - 1) friendNames[idx] = `${name}.`;
      else if (idx === friendNames.length - 2) friendNames[idx] = `${name} and`;
      else friendNames[idx] = `${name},`;
    })
  }

  const friendString = friendNames
    ? 'is friends with ' + friendNames.join(' ')
    : 'has no friends.';

  friendsText.textContent = `${name} was born in ${birthYear} and ${friendString}`;
  
  friendsWidget.appendChild(friendsText);

  // 👉 TASK 6 - Make it so user can tab through the widgets


  // Luis Gonzalez was born in 1990 and has no friends.


  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
