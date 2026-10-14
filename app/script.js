document.addEventListener("DOMContentLoaded", () => {
  const button1 = document.getElementById("quote-button");
  const button2 = document.getElementById("portfolio-button");
  const quoteBody = document.getElementById("quote");
  const author = document.getElementById("quoteAuthor");

  const API_URL = "https://quoteslate.vercel.app/api/quotes/random?count=50";
  const CACHE_KEY = "quoteCache";

  async function getQuote() {
    let cache = JSON.parse(localStorage.getItem(CACHE_KEY)) || [];

    if (cache.length === 0) {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Failed to load quotes, please try again.");
      }
      cache = await response.json();
    }

    const pick = cache.shift();

    localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
    return pick;
  }

  async function updateQuote() {
    try {
      const q = await getQuote();
      quoteBody.textContent = `"${q.quote}"`;
      author.textContent = `—${q.author}`;
    } catch (error) {
      console.error(error);
      quoteBody.textContent = "Something went wrong. Please try again.";
      author.textContent = "";
    }
  }

  button1.addEventListener("click", updateQuote);

  button2.addEventListener("click", function () {
    window.location.href = "https://theabarrios.github.io/tests/";
  });
});
