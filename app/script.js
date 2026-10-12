const api_url ="https://zenquotes.io/api/random/";

async function getQuote(url) {
  try{
    const response = await fetch(url);
    if(!response.ok){
      throw new Error("Failed to Load Quote, Please try again.");
    }
    var data = await response.json();
    document.getElementById("quoteBody").innerHTML= data[0].h;
  }catch(error){
    document.getElementById("quoteBody").innerText= error.message;
  }
}

const button1 = document.getElementById("quote-button");

  button1.addEventListener("click", function() {
      getQuote(api_url);
  });

/*const button2 = document.getElementById("portfolio-button");

  button2.addEventListener("click", function(){
    window.location.href = "portfolio link";
  });*/

