import React, { useState } from "react";
import { Input } from "antd";
const { Search } = Input;

export default function News() {
    const [search, setSearch] = useState("");

    const url = `https://lunarcrush.com/widgets/news?symbol=${search}&interval=1 Week&animation=false&theme=light`;
  
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
      <iframe
        src={url}
        id="news-articles"
        frameBorder="0"
        border="0"
        cellspacing="0"
        scrolling="yes"
        style={{width:"100%", height: "700px"}}
      ></iframe>
    </div>
  );
}
