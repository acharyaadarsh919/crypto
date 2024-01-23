import  { useEffect, useState } from 'react';
import axios from 'axios';
import Coin from './Product';
import Loader from './Loader';

const Home = () => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchAllCoins = async () => {
            try{
                const { data } = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=20");
                console.log(data);
                setCoins(data);
                setLoading(false);
            } catch(error) {
                alert("Not Working")
                setLoading(false);
            }
            
        }
        fetchAllCoins(); 

    },[])

  return (
    <div className='home'>
        {
            loading ? <Loader /> : coins.map((obj)=> (
                <Coin 
                name ={obj.name} 
                symbol = {obj.symbol} 
                image={obj.image} 
                price={obj.current_price} 
                key={obj.id} 
                />
            ))
        }
    </div>
  )
}

export default Home