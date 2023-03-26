import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'
import { Logo } from '@pmndrs/branding'

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', color: 'white' }}>
      <a href="" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px', color: 'white' }}>
        WEBER MOBILITY AB
        <br />
      </a>
      <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}></div>
      <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px', color: 'white' }}>COMING SOON!</div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <>
    <Overlay />
    {/* <Logo style={{ position: 'absolute', bottom: 40, left: 40, width: 30 }} /> */}
    <App />
  </>
)
