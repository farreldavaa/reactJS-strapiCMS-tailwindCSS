import { LandingPage, BlogContentPage, RegisterPage, LoginPage} from "./pages"
import {Routes, Route} from 'react-router-dom'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/register" element={<RegisterPage/>}></Route>
        <Route path="/auth" element={<LoginPage/>}></Route>
        <Route path="/blog/:id" element={<BlogContentPage/>}></Route>
      </Routes>
    </div>
  )
}