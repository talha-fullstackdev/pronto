import React from 'react'
import { Route ,Routes} from 'react-router-dom'
import Form from "../components/form/Form.jsx"
import WhatsappDashboard from '../components/whatsapp/WhatsappDashboard'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Form/>}/>
        <Route path="/whatsapp" element={<WhatsappDashboard/>}/>
 
    </Routes>
  )
}
export default AllRoutes