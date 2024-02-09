import React from 'react'
import { Container, Navbar } from 'react-bootstrap'


const Header = () => {
    return (
        <Navbar style={{ backgroundColor: '#010D6D', maxWidth: "100%" }} >
            <Container style={{ maxWidth: '100%' }}>
                <Navbar.Brand style={{ color: 'white' }}>QRCode Generator</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export { Header }