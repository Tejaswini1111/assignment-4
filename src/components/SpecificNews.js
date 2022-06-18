import { useEffect,useState } from 'react';
import XMLParser from 'react-xml-parser';
import XMLData from '../data/blog_posts.xml';
import { useParams } from "react-router-dom";


function SpecificNews() {
    
    const [posts,setPosts] = useState([]);
    const {id} = useParams();

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
        {posts.map((post,i) => {
            if(i === Number(id)){
                return(
                    <div key={i} className="container">
                        <br></br>
                        <h3 className="text-center">{post.children[2].value}</h3>
                        <br></br>
                        <p className='text-center'>{post["children"][3]["children"][1]["value"]}</p>
                        <div key={i} className='text-center'><img className='align-center img-bg' alt='' src={post["children"][3]["children"][0]["value"]}/></div>
                        <br />
                        <p className='align-center ml-5'>{post["children"][4]["value"]}</p>
                        <br />
                        <p className='text-right'>By {post["children"][1]["value"]} - {post["children"][0]["value"]}</p>
                    </div>
                );
            }
            else{
                return null;
            }
        })}
      </div>
    );
  }
  
  export default SpecificNews;