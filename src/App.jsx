
import { NotFound } from "./pages/NotFound";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import { Toaster }  from "@/components/Ui/toaster";
import  Home  from "@/pages/Home";

function App() {
 

  return (
    <>
    <Toaster/>
      <BrowserRouter>
        <Routes>
          <Route index element ={<Home/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
