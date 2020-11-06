import React from "react";

export default function Influencers() {
  return (
    <div>
      <iframe
        title="Influencers"
        src="https://lunarcrush.com/widgets/influencers?filter_string=btc&interval=1 Week&theme=dark"
        id="candlestick"
        frameBorder="0"
        border="0"
        scrolling="no"
        style={{ width: "100%", height: "654px" }}
      ></iframe>
    </div>
  );
}
