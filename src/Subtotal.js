import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';

export default function Subtotal() {

    const history = useHistory();

    const [ { basket }, dispatch ] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat renderText={(value)=>(
                <>
                    <p>
                        Subtotal ({basket.length}): <strong> {value} </strong>
                    </p>
                    <small className="subtotal__gift">
                        <input className="subtotal__input" type="checkout" /> This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />
            <button className="subtotal__button" onClick={e => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}
