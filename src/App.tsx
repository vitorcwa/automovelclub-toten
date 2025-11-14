import './global.css'
import AppRoutes from "./routes.tsx";
import Footer from './components/Footer/Index.js'

export default function App() {
  return (
    <div className="wrapper">
      <AppRoutes />
      <Footer />
    </div>
  )
}