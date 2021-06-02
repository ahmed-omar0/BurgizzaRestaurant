import Link from 'next/link';
// Import Icons
import { AiFillCloseCircle } from 'react-icons/ai';
import { FaTrashRestore } from 'react-icons/fa';
import { BiCommentError } from 'react-icons/bi';
// Redux & Actions
import { useDispatch, useSelector } from 'react-redux';
import { removeBurgerFromCart } from '../../redux/burger/burgerActions';
import { removePizzaFromCart } from '../../redux/pizza/pizzaActions'

const Cart = ({toggleCart , cartRef}) => {
    const burgerCart = useSelector(state => state.Burger.burgerCart);
    let burger = [];
    const pizzaCart = useSelector(state => state.Pizza.pizzaCart);
    let pizza = [];
    const dispatch = useDispatch();
    const prices = []
    let totalPrice;

    // Loop Burger Items In Cart
    if(burgerCart.length > 0){
        for(let i = 0; i < burgerCart.length; i++){
            prices.push(burgerCart[i].price * burgerCart[i].quantity)
            burger.push(
                <li key={burgerCart[i].id}>
                        <div className="image-container">
                            <img src={burgerCart[i].image} alt={burgerCart[i].name}/>
                            <span>{burgerCart[i].quantity}</span>
                        </div>
                        <div className="item-details">
                            <h3>{burgerCart[i].name}</h3>
                            <h4>{burgerCart[i].quantity} * {burgerCart[i].price}$</h4>
                            <h5>Total: {burgerCart[i].quantity * burgerCart[i].price}$</h5>
                            <FaTrashRestore className="delete" onClick={() => dispatch(removeBurgerFromCart(burgerCart[i]))}/>
                        </div>
                </li>
            )
        }
    }

    // Loop Pizza Items In Cart
    if(pizzaCart.length > 0){
        for(let i = 0; i < pizzaCart.length; i++){
            prices.push(pizzaCart[i].price * pizzaCart[i].quantity)
            pizza.push(
                <li key={pizzaCart[i].id}>
                    <div className="image-container">
                        <img src={pizzaCart[i].image} alt={pizzaCart[i].name}/>
                        <span>{pizzaCart[i].quantity}</span>
                    </div>
                    <div className="item-details">
                        <h3>{pizzaCart[i].name}</h3>
                        <h4>{pizzaCart[i].quantity} * {pizzaCart[i].price}$</h4>
                        <h5>Total: {pizzaCart[i].quantity * pizzaCart[i].price}$</h5>
                        <FaTrashRestore className="delete" onClick={() => dispatch(removePizzaFromCart(pizzaCart[i]))}/>
                    </div>
                </li>
            )
        }
    }

    // Calculate Total Price In The Cart & Total Items In The Cart
    pizzaCart.length || burgerCart.length ?
        totalPrice = prices.reduce((prevValue, currentValue) => {
            return prevValue + currentValue
        }) : null

    return (
        <div className="cart" ref={cartRef}>
            <AiFillCloseCircle onClick={toggleCart}/>
            {
                burger.length || pizza.length ?
                <ul className="list-of-items">
                    {burger}
                    {pizza}
                </ul>
                :
                <ul className="list-of-items">
                    <li className="empty-cart">
                        <BiCommentError/>
                        <h2>Cart Is Empty</h2>
                        <p>Choose Some Products</p>
                    </li>
                </ul>
            }
            {
                burger.length || pizza.length ?
                <div className="cart-footer">
                    <span>{`Total Price: ${totalPrice}$`}</span>
                    <Link href='/checkout'>
                        <a className="check-out" onClick={toggleCart}>Check Out</a>
                    </Link> 
                </div>
                :
                <Link href='/menu'>
                    <a className="our-menu" onClick={toggleCart}>Our Menu</a>
                </Link> 
            }
        </div>
    );
}
 
export default Cart;