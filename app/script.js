document.addEventListener("DOMContentLoaded", () => {
  const button1 = document.getElementById("quote-button");
  const button2 = document.getElementById("portfolio-button");
  const quoteBody = document.getElementById("quote");
  const author = document.getElementById("quoteAuthor");

  async function updateQuote() {
    try {
      const response = await fetch("https://stoic.tekloon.net/stoic-quote");
      if (!response.ok) {
        throw new Error("Failed to load quote, please try again.");
      }
      const data = await response.json();
      quoteBody.innerText = `"${data.data.quote}"`;
      author.innerText = `—${data.data.author}`;
    } catch (error) {
      quoteBody.textContent = error.message;
    }
  }

  button1.addEventListener("click", updateQuote);

  button2.addEventListener("click", function(){
    window.location.href = "https://theabarrios.github.io/tests/";
  });
});
