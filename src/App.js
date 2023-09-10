function App(){
    const title = 'Blog Post';
    const body = 'This is my blog post';
    const comments = [
        {id: 1, text: 'Comment one'},
        {id: 2, text: 'Comment two'},
        {id: 3, text: 'Comment three'},
    ]

    return ( //JSX needs 1 element to be returned so we need to wrap in div or an fragment <> if multiple elements
        <div className='container'>
        <h1>{title}</h1>
        <p>{body}</p>
         <div className="comments">
            <h3>Comments ({comments.length})</h3>
            <ul>
                {comments.map((comment, index)=>(
                    <li key={index} >{comment.text}</li>
                ))}
            </ul>
         </div>
        </div>
    )
};



export default App;