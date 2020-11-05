import React, { Fragment, useState } from "react";

const useCurrencie = (label, stateInitial, coins) => {
  const [state, actualizarState] = useState(stateInitial);

  const SelectCripto = () => (
    <Fragment>
      <label className="label-currencie">{label}</label>
      <select
        className="select-currencie"
        onChange={(e) => actualizarState(e.target.value)}
        value={state}
      >
        <option value="">- Seleccionar -</option>
        {coins.map((coin) => (
          <option key={coin.code} value={coin.code}>
            {coin.name}
          </option>
        ))}
      </select>
    </Fragment>
  );

  return [state, SelectCripto, actualizarState];
};

export default useCurrencie;
