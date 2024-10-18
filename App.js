import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
function App() {
         const [products,setproducts] = useState(null)
         const[pageno,setpageno] = useState(1)
     
     const fetchproducts = async()=>{
       var response = await fetch("https://dummyjson.com/products?limit=100")
              var jsondata = await response.json()
              setproducts(jsondata.products)

     }
     function handlepage(currentpage){
      setpageno(currentpage)
     }

     useEffect(() => {
        fetchproducts()
     }, [])
     

  return (
    <div>  
      <div className='img-container'>
        {products&&products.slice(pageno*10-10,pageno*10-1).map(prod=>(

            <div key={prod.id} style={{ marginBottom: '20px' }} className='image'>
              <img src={prod.images[0]} alt={prod.name} style={{ width: '100px', height: 'auto' }}/> 
            </div>


        )




        )}   
       
        
         
         
        </div>
         
         <div className='numberdiv'>
          <span style={{border:"1px solid black",padding:"20px"}} onClick={()=>handlepage(pageno-1)}>◀️

          </span>
         {[...Array(10)].map((_, i) => (
          <span key={i+1} style={{border:"1px solid black",padding:"20px",cursor:"pointer"}} className={pageno==i+1?"selectedpage":"nonselectedpage"} onClick={()=>handlepage(i+1)} >{i + 1}</span>
          ))}
          <span style={{border:"1px solid black",padding:"20px"}} onClick={()=>handlepage(pageno+1)}>▶️</span>
         </div>

        </div>   
       
  );
}

export default App;
