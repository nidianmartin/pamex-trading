import React, { useState } from "react";
import { Input } from "antd";
const { Search } = Input;

export default function Dashboard() {
  const [search, setSearch] = useState("");

  const url = `https://lunarcrush.com/widgets/candlestick?symbol=${search}&interval=1 Week&animation=false&theme=dark`;
  const galaxyScore = `https://lunarcrush.com/widgets/galaxyscore?symbol=${search}&interval=1 Week&animation=false&theme=dark`;
  const altRank = `https://lunarcrush.com/widgets/altrank?symbol=${search}&interval=1 Week&animation=false&theme=light`

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <Search
        placeholder="Buscar..."
        allowClear
        onChange={handleChange}
        style={{ width: "50%", margin: "0 20px 30px 250px" }}
      />
    <div>

      <h3>Galaxy Score ™</h3>
      <iframe
        src={galaxyScore}
        id="galaxy-score"
        frameBorder="0"
        border="0"
        cellspacing="0"
        scrolling="no"
        style={{ width: "100%", height: 300 }}
      ></iframe>
    <h3>AltRank ™</h3>
      <iframe
        src={altRank}
        id="altRank"
        frameBorder="0"
        border="0"
        cellspacing="0"
        scrolling="no"
        style={{ width: "100%", height: 300 }}
        ></iframe>
    <h3>Velas</h3>
      <iframe
        src={url}
        id="candlestick"
        frameBorder="0"
        border="0"
        cellspacing="0"
        scrolling="no"
        style={{ width: "100%", height: "450px" }}
      ></iframe>
    </div>
    </div>
  );
}
