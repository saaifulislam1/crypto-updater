import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import "./Coin.css";
const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        {/* Top section */}
        <div className="coin">
          <img src={image} alt={name} />
          <div>
            <h1>{name}</h1>
            <p className="coin-symbol">{symbol}</p>
          </div>
        </div>

        {/* Data section */}
        <div className="coin-data">
          <p className="coin-price">${price.toLocaleString()}</p>
          <p>
            {priceChange < 0 ? (
              <span className="coin-percent red">
                <FaArrowDown className="arrow-icon" /> {priceChange.toFixed(2)}%
              </span>
            ) : (
              <span className="coin-percent green">
                <FaArrowUp className="arrow-icon" /> {priceChange.toFixed(2)}%
              </span>
            )}
          </p>
          <p className="coin-volume">Vol: {volume.toLocaleString()}</p>
          <p className="coin-marketcap">
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
