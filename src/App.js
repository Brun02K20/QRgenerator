import logo from './logo.svg';
import './App.css';
import { QRCode } from 'react-qr-code';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, Card, Form } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Header } from './components/Header.js';

function App() {

  const [link, setLink] = useState("")
  const { register, setValue, reset, handleSubmit, formState: { errors }, control } = useForm()

  const onSubmit = (data) => {
    setLink(data.link)
  }

  return (
    <div className='row'>
      <div className='col s12 center'>
        <Header></Header>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Form style={{ width: '96%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', borderRadius: '4px' }}>
            <Card style={{ width: '100%', marginTop: '24px' }}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{ padding: "16px" }}>
                <Form.Label style={{ marginLeft: "8px", color: "#010D6D", fontWeight: "700" }}>LINK*</Form.Label>
                <Controller
                  name="link" // nombre del campo, este nombre es el que se va a usar en la funcion que envia los datos al backend
                  control={control} // esto va asi SI O SI, si no, no anda nada
                  rules={
                    {
                      required: {
                        value: true,
                        message: 'El link es requerido'
                      }
                    }
                  } // las reglas son validaciones, podemos validar longitud de caracteres por ejemplo
                  render={({ field }) => (
                    // Form.Control es el campo que se va a mostrar por pantalla, y render es la funcion que permite mostrarlo
                    <Form.Control
                      type="text"
                      placeholder="Ingresá el link del video" // placeholder es el instructivo de que tiene que ingresar el usuario en ese campo
                      defaultValue=""
                      {...field}
                    />
                  )}
                />
                {/* si alguna validacion declarada en el objeto rules no funciona, se muestra el respectivo mensaje */}
                {errors.link && <span style={{ color: 'darkred', marginLeft: "8px" }}>{errors.link.message}</span>}
              </Form.Group>
            </Card>
          </Form>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button style={{ backgroundColor: '#010D6D', border: 'none' }} variant="success" onClick={handleSubmit(onSubmit)}>
            Obtener QR
          </Button>
        </div>
      </div>

      <br></br>
      {link && (
        <div className='row'>
          <div className='col s12 center'>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: "8px" }}>
              <div style={{ width: '96%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', borderRadius: '4px' }}>
                <Card style={{ width: '96%', marginTop: '24px', marginBottom: "8px" }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '16px' }}>
                    <h1>Código QR Generado</h1>
                    <QRCode value={link}></QRCode>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>

      )}
    </div>
  );
}

export default App;
