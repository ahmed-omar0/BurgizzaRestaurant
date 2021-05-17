import styles from '../../styles/Home.module.css';
import { useSelector } from 'react-redux';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

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
                        <img src={pizza[i].image} alt={pizza[i].name}/>
                    </div>
                    <h2>{pizza[i].name}</h2>
                    <p>{pizza[i].ingredients}</p>
                    <div className={styles.stars}>
                        {
                            Array.from({length: 5}, (_ , index) => {
                                return(
                                    pizza[i].stars >= index + 1 ? <BsStarFill/> :
                                    pizza[i].stars >= index + .5 ? <BsStarHalf/> :
                                    <BsStar/>
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
                        <img src={burger[i].image} alt={burger[i].name}/>
                    </div>
                    <h2>{burger[i].name}</h2>
                    <p>{burger[i].description}</p>
                    <div className={styles.stars}>
                        {
                            Array.from({length: 5}, (_ , index) => {
                                return(
                                    burger[i].stars > index + .5 ? <BsStarFill/> :
                                    burger[i].stars >= index + .5 ? <BsStarHalf/> :
                                    <BsStar/>
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
        </section>
    );
}
 
export default BurgizzaMenu;