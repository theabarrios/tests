document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("quote-button");
  const quoteBody = document.getElementById("quoteBody");

  async function updateQuote() {
    try {
      const response = await fetch("https://dummyjson.com/quotes/random");
      if (!response.ok) {
        throw new Error("Failed to load quote, please try again.");
      }
      const data = await response.json();
      quoteBody.innerText = `"${data.quote}" — ${data.author}`;
    } catch (error) {
      quoteBody.textContent = error.message;
    }
  }

  button.addEventListener("click", updateQuote);
});
