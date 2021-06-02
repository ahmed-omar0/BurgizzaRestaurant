import Link from 'next/link'
import { useRef } from 'react';
// Import Icons
import { AiFillCloseCircle } from 'react-icons/ai';
import { RiShoppingCartFill } from 'react-icons/ri';
import { useSelector } from 'react-redux';
// Import Components
import Cart from './Cart';

const Navbar = () => {
    const menuRef = useRef();
    const menuIconRef = useRef();
    const cartRef = useRef();
    const toggleOpenClass = e => {
        menuRef.current.classList.toggle('open');
        menuIconRef.current.classList.toggle('open');
    }
    const toggleCart = () => {
        cartRef.current.classList.toggle('open');
    }
    const numOfPizzaInCart =  useSelector(state => state.Pizza.numOfPizzaInCart)
    const numOfBurgerInCart =  useSelector(state => state.Burger.numOfBurgerInCart)
    return (
        <nav>
            <div className="logo">
                <h1>Burgizza</h1>
            </div>
            {
                window.innerWidth <= 991.99 ? 
                <div className="cart-icon">
                    <RiShoppingCartFill onClick={toggleCart}/>
                    {
                        numOfBurgerInCart + numOfPizzaInCart > 0 ? <span onClick={toggleCart}>{ numOfBurgerInCart + numOfPizzaInCart }</span> :null
                    }
                </div>
                : null
            }
            <div className="collapse-menu" ref={menuRef}>
                <AiFillCloseCircle onClick={toggleOpenClass}/>
                <ul>
                    <li onClick={toggleOpenClass}>
                        <Link href="/">Home</Link>
                    </li>
                    <li onClick={toggleOpenClass}>
                        <Link href="/about">About</Link>
                    </li>
                    <li onClick={toggleOpenClass}>
                        <Link href="/menu">Menu</Link>
                    </li>
                    <li onClick={toggleOpenClass}>
                        <Link href="/login">LogIn</Link>
                    </li>
                    {
                        window.innerWidth > 992 ? 
                        <li className="cart-icon">
                            <RiShoppingCartFill onClick={toggleCart}/>
                            {numOfBurgerInCart + numOfPizzaInCart > 0 ? <span onClick={toggleCart}>{ numOfBurgerInCart + numOfPizzaInCart }</span> : null}
                        </li> 
                        : null
                    }
                </ul>
            </div>
            <div className="menu-icons" onClick={toggleOpenClass} ref={menuIconRef}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <Cart toggleCart={toggleCart} cartRef={cartRef}/>
        </nav>
    );
}
 
export default Navbar;