// greetingCardUtils.js

function generateGreetingCard(recipientName, occasion, characterTraits) {
    const inspiringQuotes = [
      "Lost time is never found again. — Benjamin Franklin",
      "It’s not knowing what to do, it’s doing what you know. – Tony Robbins",
      "Focus on being productive instead of busy. — Tim Ferriss",
      "Make each day your masterpiece. – John Wooden",
      "Great acts are made up of small deeds. — Lao Tzu"
    ];
  
    // Select a random quote from the inspiringQuotes array
    const randomQuote = inspiringQuotes[Math.floor(Math.random() * inspiringQuotes.length)];
  
    // Construct the greeting card text
    const greetingCardText = `${randomQuote}\n\nDear ${recipientName},\nHappy ${occasion}! Your ${characterTraits} make you an incredible person. Have a fantastic day!`;
  
    return greetingCardText;
  }
  
  export default generateGreetingCard;
  