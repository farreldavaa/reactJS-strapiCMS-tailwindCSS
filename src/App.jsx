import { LandingPage, BlogContentPages} from "./pages"
import {Routes, Route} from 'react-router-dom'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/blog/:id" element={<BlogContentPages/>}></Route>
      </Routes>
    </div>
  )
}