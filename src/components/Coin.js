import React from "react";
import "../components/Coin.css";

const Coin = ({
  priceChange,
  priceChangePercent,
  prevClosePrice,
  symbol,
  price,
  volume,
  marketCap,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <p className="coin-symbol">{symbol}</p>
          <h1>{priceChange}</h1>
          <h1>{prevClosePrice}</h1>
        </div>
        <div className="coin-data">
          <p className="coin-price">${price}</p>
          <p className="coin-volume">${volume.toLocaleString()}</p>
          {/* {priceChangePercent < 0 ? (
            <p className="coin-percent red">{priceChangePercent.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{priceChangePercent.toFixed(2)}%</p>
          )} */}
          <p>%{priceChangePercent}</p>
          <p className="coin-marketcap">
            Mkt Cap: ${marketCap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
