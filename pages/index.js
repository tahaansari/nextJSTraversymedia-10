export default function Home({posts}) {
  return (
    <>
      <h1>Hom e page</h1>
      {posts.map(item=>{
        return <div key={item.id} >
          {item.title}
          <br/>
          <br/>
        </div>
      })}
    </>
  ) 
}


export const getStaticProps = async () =>{
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json()).then(data=>data)
  console.log(posts)

  return {
    props: {posts:posts}
  }
}