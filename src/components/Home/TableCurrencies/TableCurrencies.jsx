import React, { useState, useEffect } from "react";
import { Table, Tag, Input } from "antd";
import { listAllCrypto } from "../../../services/api-services";
const { Search } = Input;

function TableCurrencies() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    listAllCrypto().then((resp) => {
      setCoins(resp)
    })
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const data = [];
  filteredCoins.forEach((coin) => {
    data.push({
      key: coin.id,
      name: coin.name,
      price: coin.current_price,
      image: coin.image,
      symbol: coin.symbol,
      volume: coin.market_cap,
      priceChange: coin.price_change_percentage_24h,
      marketcap: coin.market_cap,
    });
  });

  const columns = [
    {
      title: "Logo",
      dataIndex: "image",
      render: (img) => <img src={img} alt="crypto" style={{ width: 30}} />,
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (price) => (new Intl.NumberFormat().format(price))
    },
    {
      title: "Symbol",
      dataIndex: "symbol",
      render: (symbol) => (symbol.toUpperCase())
    },
    {
      title: "Volume",
      dataIndex: "volume",
      render: (volume) => (new Intl.NumberFormat().format(volume))
    },
    {
      title: "Price Change",
      dataIndex: "priceChange",
      key: "priceChange",
      render: (priceChange) => {
        let color;
        priceChange < 0 ? color = 'red' : color = 'green'
        return (
        <Tag color={color} key={priceChange}>
          {priceChange.toFixed(2)}{" "}
        </Tag>
        )
      }
    },
    {
      title: "Market Cap",
      dataIndex: "marketcap",
      render: (marketcap) => (new Intl.NumberFormat().format(marketcap))
    },
  ];

  return (
    <div className="table-coins">
      <div className="coin-search">
        <h1 style={{marginBottom:30}}> CRYPTOCURRENCIY MARKET </h1>
        <Search
          placeholder="Search..."
          allowClear
          onChange={handleChange}
          style={{ width: "50%", margin: "0 20px 30px 250px" }}
        />
      </div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

export default TableCurrencies;
