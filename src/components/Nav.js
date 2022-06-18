import {useState,useEffect} from 'react';
import { Link } from "react-router-dom";

function Nav(){

    const [item,setItem] = useState([]);
    const [page,setPage] = useState(1);
    const [time,setTime] = useState(59);

    useEffect(()=>{
        const news = async () =>{
            // console.log(process.env.REACT_APP_API_KEY)
            const data = await fetch("https://newsapi.org/v2/top-headlines?category=technology&language=en&pageSize=5&page="+page+"&apiKey="+process.env.REACT_APP_API_KEY);
            const items = await data.json();
            // console.log(items);
            setItem(items.articles);
            // console.log(item);
        };
        news();
    },[page]);

    useEffect(()=>{
        const plus = setInterval(() =>{
            setTime(time - 1);
            if(time === 0){
                setPage(page => page + 1)
                setTime(59)
            }
        },1000);
        return () => clearInterval(plus)
    },[time])

    

    return(
    <div className="bg-light snavbar col-3 border">
        <br></br>
        <ul>
            <Link to='/'><span className='h6 text-success'>Go to Home Page</span></Link>
        </ul>
        <br></br>
        <h5 className='text-black-50'>Latest Headlines from Google News API</h5>
        <br></br>
        <div>
            {item.map(i => {
                return(
                <div key={i.urlToImage} className='container'>
                    <h6><a className='text-danger' href={i.url} target='_'>{i.title}</a></h6>
                    <p className='text-right text-black-50 p-1'>{i.author} - {i.publishedAt.substring(0,10)}</p>
                </div>
                );
            })}
        </div>
        <br></br>
        <span className='h6'>New Headlines in : <span className='text-primary'>{time}</span></span>
    </div>
    );
}

export default Nav;