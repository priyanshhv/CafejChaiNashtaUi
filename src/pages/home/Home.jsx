import React, { useDebugValue, useEffect } from 'react';
import "./style.scss"
import HeroBanner from './heroBanner/HeroBanner';
import Trending from './trending/Category';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';
import Category from './trending/Category';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setAddress } from '../../store/homeSlice';



const Home = () => {
  const {menu} = useSelector((state)=>state.home);
  const dispatch = useDispatch();
    const location = useLocation();

  useEffect(() => {
    const arr = location.pathname.split("/").join(" ").slice(1);
    
    dispatch(setAddress(arr))
  }, []);
//  console.log(menu);
  return (
    <div className='homePage'>
        {
          <HeroBanner/>
        // <Trending/>
        // <Popular/>
        // <TopRated/> 
        }
        {
          Object.keys(menu)?.map((key) => {
            //console.log(menu[key],key);
            return <Category key={key} category={key} data={menu[key]}/>
          })
        }
    </div>
  );
}

export default Home;
