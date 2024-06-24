import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './index.scss'
import Items from "./components/Items";
import Categories from './components/Categories';

function App() {
  const[items,setItems] =useState([
    {
      id:1,
      title:'прямой рейс из Саратова',
      img:'SaratovAvia.jpg',
      desc:'живете в Саратове и готовы платить за комфорт? Прямой вылет из Саратова в Тибет будет выгодным приобритением: не нужно думать о маршруте, сосредоточтесь на путешествии',
      category:'самолет',
      price:'900'
    },
    {
      id:2,
      title:'рейс с пересадкой на Гоа',
      img:'goa.jpg',
      desc:'любите песчаные пляжи? пересадка на Гоа - отличная возможность для яркой пляжной фотосессии',
      category:'самолет',
      price:'1000'
    },
    {
      id:3,
      title:'рейс с пересадкой на Ваш выбор',
      img:'geolocation.jpg',
      desc:'для дам и господ, готовых вылететь прямо сейчас из любой точки мира - просто включите геолокацию на своем смартфоне. Мы вылетаем за Вами',
      category:'самолет',
      price:'2000'
    },
    {
      id:4,
      title:'отправление из Саратова',
      img:'SaratovVolga.jpg',
      desc:'Волга всегда таила в себе Великий путь',
      category:'на пароходе',
      price:'2500'
    },
    {
      id:5,
      title:'отправление из Санкт-Петербурга',
      img:'SPB.jpg',
      desc:'пройти по северным границам России - для экстремалов',
      category:'на пароходе',
      price:'3000'
    },
    {
      id:6,
      title:'отправление из Хабаровска',
      img:'Habarovsk.jpg',
      desc:'быстро и надежно',
      category:'на пароходе',
      price:'1000'
    },
    {
      id:7,
      title:'поездка из Саратова',
      img:'gazel.jpg',
      desc:'предлагается Газель с кондиционером и два водителя, количество мест ограничено',
      category:'на автобусе',
      price:'1500'
    },
    {
      id:8,
      title:'поездка из Москвы',
      img:'2yarus.jpg',
      desc:'комфортабельный двух-ярусный автобус, сменные водители поедут за Вами во 2 автобусе',
      category:'на автобусе',
      price:'2000'
    },
    {
      id:9,
      title:'поездка из Челябинска ',
      img:'Chelyabinsk.jpg',
      desc:'самый быстрый способ попасть в Тибет на колесах',
      category:'на автобусе',
      price:'1000'
    },
    {
      id:10,
      title:'с группой и гидом',
      img:'gid.jpg',
      desc:'для начинающих пеших туристов. Опытный гид не даст заскучать',
      category:'пешком',
      price:'1000'
    },
    {
      id:11,
      title:'только с группой',
      img:'group.jpg',
      desc:'для пробвинутых пеших туристов. От нас круглосуточная поддержка по Вотсап',
      category:'пешком',
      price:'20'
    },
    {
      id:12,
      title:'самостоятельно',
      img:'odin.jpg',
      desc:'для оптыных пеших туристов. Мы не будем отслеживать Вас. Ваше фото будет на главной странице нашего сайта все время, пока вы будете в пути.',
      category:'пешком',
      price:'10'
    }
  ]);
  const [orders, setOrders]=useState([]);

  const [currentItems,setCurrentItems]=useState([]);

  useEffect(()=>{
    setCurrentItems(items)
  },[items]);

const chooseCategory=(category)=>{
  if(category==='all'){
    setCurrentItems(items);
  }
  else{
    setCurrentItems(items.filter((el)=>el.category===category));
  }
}

  const addToOrder=(item)=>{
    if(!orders.some((el)=>el.id===item.id)){
      setOrders([...orders,item]);
    }
  }

  const deleteOrder=(id)=>{
    setOrders(orders.filter((el)=>el.id!==id));
  }

  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={deleteOrder}/>
      <Categories chooseCategory={chooseCategory}/>
      <Items allItems={currentItems} onAdd={addToOrder}/>
      <Footer />
    </div>
  );
}

export default App;


