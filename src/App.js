import Header from "./components/Header";

function App(){
    return ( //JSX needs 1 element to be returned so we need to wrap in div or an fragment <> if multiple elements
        <>
        <Header />
        <div className='container'>
             <h1>My App</h1>
        </div>
        </>
    )
};



export default App;