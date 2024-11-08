import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Admin from './Admin'
import Login from './Login'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'

import Images from './images.js';

function App() {

  return (
    <div className = "App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Home/>} />
          <Route path='/boletines' element= {<Boletines/>} />
          <Route path='/boletines/:id' element= {<ViewBoletin/>} />
          <Route path='/admin' element={<Admin/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/admin/create' element={<CreateUser/>}></Route>
          <Route path='/admin/update/:id' element={<UpdateUser/>}></Route>
          <Route path="/admin/all-drafts" element={<AllDrafts />}/>
          <Route path="/admin/create-newsletters" element={<CreateNewsletters />} />
          <Route path="/admin/single-draft" element={<SingleDraft />} />          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
