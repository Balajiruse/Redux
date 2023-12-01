//eslint-disable-next-line react/prop-types

import './App.css'
import { Route, Routes } from 'react-router-dom'
import All from './Router/All'
import Career from './Router/Career'
import CyberSecurity from './Router/CyberSecurity'
import DataScience from './Router/DataScience'
import FullStack from './Router/FullStack'




  return (
    <div className="app">
    
    <Routes> 
      <Route exact path="/"element={<All/>}/>
      <Route path="/doc/FullStack"element={<FullStack/>}/>
      <Route path="/doc/Science"element={<DataScience/>}/>
      <Route path="/doc/Security"element={<CyberSecurity/>}/>
      <Route path="/doc/Career"element={<Career/>}/>
    
    </Routes>

    </div>
  )
}

export default App;
