import Link from 'next/link'
import { useRef } from 'react';
import {AiFillCloseCircle} from 'react-icons/ai';

const Navbar = () => {
    const menuRef = useRef();
    const menuIconRef = useRef();
    const toggleOpenClass = e => {
        menuRef.current.classList.toggle('open');
        menuIconRef.current.classList.toggle('open');
    }
    return (
        <nav>
            <div className="logo">
                <h1>Burgizza</h1>
            </div>
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
                </ul>
            </div>
            <div className="menu-icons" onClick={toggleOpenClass} ref={menuIconRef}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
}
 
export default Navbar;