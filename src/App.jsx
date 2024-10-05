import Sidebar from './components/sidebar/SideBar'
import Header from './components/header/Header'
import Form from './components/form/Form'
import './App.css'
function App() {
  return (
    <>
    <main  className='flex gap-6'>
      <Sidebar/>
      <div className="flex flex-col w-full mr-4">
      <Header/>
      {/* <Form/> */}
      </div>
     

      </main>
    </>
  )
}

export default App
