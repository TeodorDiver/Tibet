import React, { useState } from "react";
import styles from './Header.module.scss';
import { PiMountainsBold } from "react-icons/pi";
import { CiShoppingBasket } from "react-icons/ci";

export default function Header() {
    let [cartOpen, setCartOpen] = useState(false);

    return (
        <header>
            <div>
                <PiMountainsBold className={styles.icon} />
                <span className={styles.logo}>Тибет</span>
                <ul className={styles.nav}>
                    <li>О нас</li>
                    <li>Контакты</li>
                    <li>Личный кабинет</li>
                </ul>
                <CiShoppingBasket onClick={()=>setCartOpen(cartOpen= !cartOpen)} className={`${styles.shopCartButton} ${cartOpen ? styles.active : ''}`} />
                {cartOpen && (
                <div className={styles.shopCart}>

                </div>
            )}
            </div>


            <div className={styles.presentation}></div>
        </header>
    );
}