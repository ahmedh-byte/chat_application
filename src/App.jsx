import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { usePaths } from "./store";

export default function App() {
    const {paths}=usePaths();
  
  return (
    <div className="App">
       <Routes>
        {/* main layout*/ }

        <Route path="/" element={<MainLayout/>}>

          <Route index element={<h1>wellcome to chat Application</h1>}/>
          {
            paths.map((el,index)=>{
              return  <Route key={index} path={el.path} element={el.element}/>
            })
          }


        </Route>
        {/* main layout*/ }

        {/* second layout*/ }
       <Route path="/">
             <Route path="login"  element={ <h1>APPLICATION login</h1> }/>
             <Route path="register"  element={ <h1>APPLICATION register</h1> }/>
             <Route path="*"  element={ <h1>APPLICATION ERROR 404</h1> }/>

       </Route>
        {/* second layout*/ }
       
       

       </Routes>
    </div>
  )
}
