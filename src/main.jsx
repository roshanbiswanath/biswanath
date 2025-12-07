import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'
import Overlay from './Overlay'
import About from './About'
import Projects from './Projects'
import Footer from './Footer'
import ErrorBoundary from './ErrorBoundary'
import LoadingScreen from './LoadingScreen'

createRoot(document.querySelector('#root')).render(
  <>
    <LoadingScreen />
    <ErrorBoundary>
      <div style={{ position: 'relative', height: '100vh' }}>
        <App />
        <Overlay />
      </div>
    </ErrorBoundary>
    <About />
    <Projects />
    <Footer />
  </>
)
