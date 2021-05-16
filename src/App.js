import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import Coin from "./components/Coin";

function App() {
  const [coins, setCoins] = useState([]);
  // const [search, setSearch] = useState([]);
  // const proxy = "https //cors-anywhere.herokuapp.com";
  useEffect(() => {
    axios
      .get("https://api.binance.com/api/v3/ticker/24hr")
      .then((res) => {
        setCoins(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // const handleChange = (e) => {
  //   // console.log(e.target.value);
  //   setSearch(e.target.value);
  // };

  const handleFiltered = coins.filter((coin) => coin);
  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        {/* <form>
          <input
            type="text"
            placeholder="Search"
            // onChange={handleChange}
            className="coin-input"
          />
        </form> */}
      </div>
      {handleFiltered.map((coin) => {
        return (
          <Coin
            key={coin.lastId}
            askPrice={coin.askPrice}
            prevClosePrice={coin.prevClosePrice}
            priceChangePercent={coin.priceChangePercent}
            symbol={coin.symbol}
            volume={coin.volume}
            price={coin.priceChange}
            marketCap={coin.quoteVolume}
          />
        );
      })}
    </div>
  );
}

export default App;
