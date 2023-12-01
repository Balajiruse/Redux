
import './App.css'
import Main from './Todo/main'
import WorkSpace from './Todo/workspace'

function App() {

  return (
   <div className="app ">
    <WorkSpace>
      <Main/>
    </WorkSpace>
   </div>
  )
}

export default App
