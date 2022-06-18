import { useEffect,useState } from 'react';
import XMLParser from 'react-xml-parser';
import XMLData from '../data/blog_posts.xml';
import { Link } from "react-router-dom";


function News() {
    
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        getData();
    },[]);

    const getData = async () => {
        var datas = await fetch(XMLData);
        var textData = await datas.text();
        var data =new XMLParser().parseFromString(textData,"text/xml");
        setPosts(data.children);
        // console.log(data.children);
    }

    return (
      <div className="container">
        <br></br>
        <h3 className="text-left text-black-50">Posts And News</h3>
        <hr/>
        {posts.map((post,i) => {
            return(
                <div key={i}  className="media m-4 p-2">
                    <img className="align-self-center mr-3 img-sm" alt="" src={post.children[3].children[0].value}/>
                    <div className="media-body">
                        <Link to={`/${i}`} >
                            <h5 className="h5 mt-0">{post.children[2].value}</h5>
                        </Link>
                        <br/>
                        <p>{post.children[3].children[1].value}</p>
                        <p className="mb-0 text-right">By {post.children[1].value} - {post.children[0].value}</p>
                    </div>
                </div>
            );
        })}
      </div>
    );
  }
  
  export default News;