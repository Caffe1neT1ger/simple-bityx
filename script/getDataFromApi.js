var BTC_PRICE;

(async function getData() {
  try {
    let request = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin"
    );

    let response = await request.json();

    BTC_PRICE = response[0]["current_price"];
  } catch (error) {
    console.log(error);
  }
})();

let binUSDT = 1;
let coinUSDT = 1.5;
window.onload = async function () {
  
//   let request = await fetch(
//     "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin"
//   );
//   let response = await request.json();
//   binUSDT = response[0]["current_price"];
//   document.querySelector("#coinBTCRate").innerHTML =
//   String(data.USD) + "  USD";
await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {

      binUSDT =data[0]["current_price"];
      document.querySelector("#binBTCRate").innerHTML =
      '$'+ String(data[0]["current_price"].toFixed(2));


      coinUSDT = Number(binUSDT * (Math.random() * (1.015 - 1.01) + 1.01)).toFixed(2);
      document.querySelector("#coinBTCRate").innerHTML =
       '$'+ String( coinUSDT);
    });
  await fetch(
    "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD&extraParams=MyCryptoApp1"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // coinUSDT = data.USD;
      // document.querySelector("#coinBTCRate").innerHTML =
      //  '$'+ String(data.USD.toFixed(2));
    });
};

function calculate() {
  let enteredAmount = document.getElementById("enteredAmount").value;

  let profitResult = document.getElementById("profit");

  let profit = Math.ceil(enteredAmount);
    console.log(binUSDT,coinUSDT)
  profitResult.innerHTML = String( ((coinUSDT / binUSDT) * profit - profit).toFixed(2)) +  "$";
  // profitResult.innerHTML = String( ((1.05) * profit - profit).toFixed(2)) +  "$";
}
