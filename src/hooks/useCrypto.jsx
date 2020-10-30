import React, { Fragment, useState }  from 'react'

const useCrypto = (label, stateInitial, cryptos) => {

    const [state, setState] = useState(stateInitial);

    const SelectCripto = () => (
        <Fragment>
            <label className="label-currencie">{label}</label>
            <select className="select-currencie"
                onChange={ e => setState(e.target.value)}
                value={state}
            >
                <option value="">- Select -</option>
                {cryptos.map(crypto => (
                    <option key={crypto.CoinInfo.Id} value={crypto.CoinInfo.Name}>{crypto.CoinInfo.FullName}</option>
                ))}
            </select>
        </Fragment>
    );

    return [state, SelectCripto, setState];
}

export default useCrypto;