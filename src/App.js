import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Counter from './component/Counter';
import Comp1 from './component/Comp1';
import Comp2 from './component/Comp2';
import FormApi from './component/FormApi';
import TableApi from './component/TableApi';
import { useEffect } from 'react';
import { getUserAction } from './redux/actions/UserTokenApiAction';
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chart from './component/Chart';

function App() {
  const state = useSelector(state=>state)
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getUserAction())
  }, [])
  const [cookies, setCookie, removeCookie] = useCookies(['cookie']);
  let x = new Date()
  x.setMinutes(x.getMinutes()+2)
  console.log(x);
  const addcokkies=()=>{
    setCookie("user","oscar",{path:'/',expires:x})
    setCookie("cookie","career",{path:"/about"})
  }
  const getcokkies=()=>{
    console.log(cookies);
  }
  const delcokkies=()=>{
    removeCookie("user")
  }
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Comp2></Comp2>}/>
        <Route path='/about' element={<Comp1/>}/> */}
      </Routes>
    </BrowserRouter>
    <div className="">
  {/* <Counter/>
  <Comp1/>
  <Comp2/> */}
  {/* <FormApi/>
  <TableApi/> */}
  {/* <h1>{cookies.user}</h1>
    <button onClick={addcokkies}>Add </button>
    <button onClick={getcokkies}>Get </button>
    <button onClick={delcokkies}>remove </button> */}
<Chart/>
    </div>
    </>
  );
}

export default App;
