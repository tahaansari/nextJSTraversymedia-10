// THIS SHOULD BE SERVER COMPONENT

// const Comments = async () => {
//     const fetchComments = await fetch("https://jsonplaceholder.typicode.com/comments?_limit=10");
//     const fetchCommentsData = await fetchComments.json();
//     console.log(fetchCommentsData)
//     return(
//         <>
//             <h2>This is server comments component</h2>
//         </>
//     )
// }

async function Comments(){
    const fetchComments = await fetch("https://jsonplaceholder.typicode.com/comments?_limit=10");
    const fetchCommentsData = await fetchComments.json();
    console.log(fetchCommentsData)
    return(
        <>
            <h2>This is server comments component</h2>
        </>
    )
}

export default Comments;