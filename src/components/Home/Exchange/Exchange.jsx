import React, { useState, useEffect } from "react";
import { Table, Input, Statistic } from "antd";
import { RiseOutlined, FallOutlined  } from '@ant-design/icons'
import { getExhanges } from "../../../services/api-services";
const { Search } = Input;

function Exchange() {
  const [exchange, setExchange] = useState([]);
  const [search, setSearch] = useState("");
  let loading = true
  
  useEffect(() => {
    getExhanges().then((resp) => {
      setExchange(resp)
    })
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredExchange = exchange.filter((exchange) =>
    exchange.name.toLowerCase().includes(search.toLowerCase())
  );

  const data = [];
  filteredExchange.forEach((exchange) => {
    loading = false
    data.push({
      key: exchange.id,
      name: exchange.name,
      antique: exchange.year_established,
      web: exchange.url,
      image: exchange.image,
      volume: exchange.trade_volume_24h_btc,
      country: exchange.country,
      rate: exchange.trust_score
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
      title: "Año de fundación",
      dataIndex: "antique",
    },
    {
      title: "País",
      dataIndex: "country",
    },
    {
      title: "Web",
      dataIndex: "web",
      render: (url) => <a>{url}</a>
    },
    {
      title: "Trading Bitcoin 24hrs",
      dataIndex: "volume",
      render: (volume) => (new Intl.NumberFormat().format(volume))
    },
    {
      title: "Ratio de confianza",
      dataIndex: "rate",
      render: (rate) => {
        let color;
        let icon
        // rate < 5 ? color = '#E82B0A' : color = '#45D009'
        if(rate < 5) {
          color = '#E82B0A'
          icon = <FallOutlined />
        } else if (rate < 7) {
          color = '#E8CA0A '
          icon = <FallOutlined />
        } else {
          color = '#45D009'
          icon = <RiseOutlined />
        }
        return (
          <Statistic
          value={rate}
          valueStyle={{color}}
          prefix={icon}
        />
        )
      }
    },
  ];

  return (
    <div className="table-coins">
      <div className="coin-search">
        <h1 style={{marginBottom:30}}> Exchanges </h1>
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

export default Exchange;
