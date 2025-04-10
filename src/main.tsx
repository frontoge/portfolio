import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {BrowserRouter, Route, Routes} from "react-router";

import Index from './pages/index.tsx'
import Layout from './pages/layout.tsx';
import Projects from './pages/projects.tsx';
import NotFound from './pages/notfound.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Index />} />
					<Route path="projects" element={<Projects/>} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
    </BrowserRouter>
  </StrictMode>
)
