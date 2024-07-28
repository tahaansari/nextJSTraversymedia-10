// THIS SHOULD BE SERVER COMPONENT

async function getComments() {
  const fetchComments = await fetch("https://jsonplaceholder.typicode.com/comments?_limit=10");
  return fetchComments.json();
}

export default async function Comments() {
  const comments = await getComments();
  console.log(comments);
  return (
    <>
      <h2>This is server comments component</h2>
    </>
  );
}

// async function Comments(){
//     const fetchComments = await fetch("https://jsonplaceholder.typicode.com/comments?_limit=10");
//     const fetchCommentsData = await fetchComments.json();
//     console.log(fetchCommentsData)
//     return(
//         <>
//             <h2>This is server comments component</h2>
//         </>
//     )
// }
