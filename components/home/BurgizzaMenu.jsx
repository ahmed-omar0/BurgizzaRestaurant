import styles from '../../styles/Home.module.css';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import {FaAngleDoubleRight} from 'react-icons/fa'

const BurgizzaMenu = () => {
    const menuItems  = []
    const pizza = useSelector(state => state.pizza)
    const burger = useSelector(state => state.burger)
    // Loop Pizza
    if (pizza.length > 0) {
        for (let i = 0; i < 2; i++){
            menuItems.push(
                <div className={styles.item} key={pizza[i].id}>
                    <div className={styles.image_container}>
                        <Link href="/menu"><img src={pizza[i].image} alt={pizza[i].name}/></Link>
                    </div>
                    <h2><Link href="/menu">{pizza[i].name}</Link></h2>
                    <p>{pizza[i].ingredients}</p>
                    <div className={styles.stars}>
                        {
                            Array.from({length: 5}, (_ , index) => {
                                return(
                                    pizza[i].stars >= index + 1 ? <BsStarFill key={index + 125}/> :
                                    pizza[i].stars >= index + .5 ? <BsStarHalf key={index + 1200}/> :
                                    <BsStar key={index + 10000}/>
                                )
                            })
                        }
                    </div>
                    {
                        pizza[i].best ? <span className={styles.best}>Popular</span> : false
                    }
                </div>
            )
        }
    }   
     // Loop Burger
    if (burger.length > 0) {
        for (let i = 0; i < 2; i++){
            menuItems.push(
                <div className={styles.item} key={burger[i].id}>
                    <div className={styles.image_container}>
                    <Link href="/menu"><img src={burger[i].image} alt={burger[i].name}/></Link>
                    </div>
                    <h2><Link href="/menu">{burger[i].name}</Link></h2>
                    <p>{burger[i].description}</p>
                    <div className={styles.stars}>
                        {
                            Array.from({length: 5}, (_ , index) => {
                                return(
                                    burger[i].stars > index + .5 ? <BsStarFill key={index + 100}/> :
                                    burger[i].stars >= index + .5 ? <BsStarHalf key={index + 500}/> :
                                    <BsStar key={index + 1000}/>
                                )
                            })
                        }
                    </div>
                    {
                        burger[i].best ? <span className={styles.best}>Popular</span> : false
                    }
                </div>
            )
        }
    }
    return (
        <section className={ "container " + styles.burgizza_menu}>
            <h2>Burgizza Menu</h2>
            <div className= { styles.menu_items }>
                {menuItems}
            </div>
            <Link href="/menu">
                <a className={styles.more}>
                    More --
                    <FaAngleDoubleRight/>
                </a>
            </Link>
        </section>
    );
}
 
export default BurgizzaMenu;