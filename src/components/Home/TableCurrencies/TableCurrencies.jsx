import React, { useState, useEffect } from "react";
import { Table, Tag, Input } from "antd";
import { listAllCrypto } from "../../../services/api-services";
import { StockOutlined } from '@ant-design/icons'
const { Search } = Input;

function TableCurrencies() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  let loading = true

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
    loading = false;
    data.push({
      key: coin.id,
      name: coin.name,
      price: coin.current_price,
      image: coin.image,
      symbol: coin.symbol,
      supply: coin.circulating_supply,
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
      title: "Nombre",
      dataIndex: "name",
    },
    {
      title: "Precio",
      dataIndex: "price",
      render: (price) =>{ 
       const number = (new Intl.NumberFormat().format(price))
       return number+' €'
      }
    },
    {
      title: "Simbolo",
      dataIndex: "symbol",
      render: (symbol) => (symbol.toUpperCase())
    },
    {
      title: "Supply",
      dataIndex: "supply",
      render: (supply) => (new Intl.NumberFormat().format(supply))
    },
    {
      title: "Cambio de precio",
      dataIndex: "priceChange",
      key: "priceChange",
      render: (priceChange) => {
        let color;
        priceChange < 0 ? color = 'red' : color = 'green'
        return (
        <Tag color={color} key={priceChange}>
          {priceChange.toFixed(2)}{'% '}<StockOutlined style={{fontSize:20}}/>
        </Tag>
        )
      }
    },
    {
      title: "Capitalización del mercado",
      dataIndex: "marketcap",
      render: (marketcap) => (new Intl.NumberFormat().format(marketcap))
    },
  ];

  return (
    <div className="table-coins">
      <div className="coin-search">
        <h1 style={{marginBottom:30}}> CRIPTOMONEDAS </h1>
        <Search
          placeholder="Buscar..."
          allowClear
          onChange={handleChange}
          style={{ width: "50%", margin: "0 20px 30px 250px" }}
        />
      </div>
      <Table loading={loading} columns={columns} dataSource={data} />
    </div>
  );
}

export default TableCurrencies;
