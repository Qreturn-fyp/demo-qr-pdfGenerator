import './App.css'
import QRCodeGenerator from "./components/QRCodeGenerator";

function App() {

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-6">QR Code Generator</h1>
        <QRCodeGenerator />
      </div>
    </div>
    </>
  )
}

export default App
