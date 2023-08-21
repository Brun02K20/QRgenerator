import logo from './logo.svg';
import './App.css';
import { QRCode } from 'react-qr-code';

function App() {

  return (
    <div>
      <h1>Código QR Generado</h1>
      <QRCode value='https://www.youtube.com/watch?v=vJ4UAqSf2d4'></QRCode>
    </div>
  );
}

export default App;
