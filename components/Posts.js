// THIS SHOULD BE CLIENT COMPONENT
import { useEffect, useState } from "react";

const  Posts = () => {
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        const fetchPost = async () =>{
            const postData = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
            // console.log(postData);
            // await new Promise((resolve,reject)=> {
            //     return setTimeout(resolve,5000)
            // })  
            const res = await postData.json();
            // console.log(res);
            setPosts(res);
        }
        fetchPost();
    },[])
    return (
        <>
            <h2>This is posts client component</h2>
            {posts.map((item)=>{
                return(
                    <div key={item.id}>{item.title}</div>
                )
            })}
        </>
    )
}

export default Posts;