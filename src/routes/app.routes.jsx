import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { Training } from '../pages/Training'
import { Project } from '../pages/Project'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/training" element={<Training />} />
      <Route path="/project" element={<Project />}></Route>
    </Routes>
  )
}
