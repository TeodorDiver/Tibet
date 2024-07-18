import React, { useState, useEffect, useRef } from "react";
import styles from './Header.module.scss';
import { PiMountainsBold } from "react-icons/pi";
import { CiShoppingBasket } from "react-icons/ci";
import Orders from "../Orders";
import PriceListPDF from "../PriceListPDF";
import { saveAs } from 'file-saver';
import { pdf } from '@react-pdf/renderer';
import Modal from "../Modal"




export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false);

    const handleDownLoadPDF = async () => {
        const pdfBlob = await pdf(<PriceListPDF items={props.items} />).toBlob();
        saveAs(pdfBlob, 'PriceList.pdf');
    }

    const showOrders = (props) => {
        let summa = 0;

        props.orders.forEach(el => summa += Number.parseFloat(el.price));
        return (
            <>
                {props.orders.map(el => (
                    <Orders key={el.id} item={el}
                        onDelete={props.onDelete} />
                ))}
                <p className={styles.summa}>Итого: {new Intl.NumberFormat().format(summa)} $</p>
            </>
        );
    }

    const showNothing = () => {
        return (
            <div className={styles.empty}>
                <h2>Заказ пуст</h2>
            </div>
        );
    }

    const [modalActive, setModalActive] = useState(false);
    const modalRef = useRef()
    useEffect(() => {
        if (modalActive) {
        document.addEventListener('mousedown', handleClickOutside);
        } else {
        document.removeEventListener('mousedown', handleClickOutside);
        }
       
        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        };
        }, [modalActive]);
       
        const handleClickOutside = (event) => {
        if (!modalRef.current || !modalRef.current.contains(event.target)) {
        setModalActive(false);
        }
        };

    return (

        <header>
            <div>
                <PiMountainsBold className={styles.icon} />
                <span className={styles.logo}>Тибет</span>
                <ul className={styles.nav}>
                    <li onClick={() => setModalActive(true)}>О нас</li>
                    <li onClick={handleDownLoadPDF}>Скачать прайс-лист</li>
                </ul>
                <CiShoppingBasket onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`${styles.shopCartButton} ${cartOpen ? styles.active : ''}`} />
                {cartOpen && (
                    <div className={styles.shopCart}>
                        {props.orders.length > 0 ? showOrders(props) : showNothing()}
                    </div>
                )}
            </div>

            <div className={styles.presentation}></div>

            <Modal active={modalActive} setActive={setModalActive}><p>Lorem</p></Modal>
        </header>
    );
}