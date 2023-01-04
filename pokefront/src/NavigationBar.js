import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/" style={{fontFamily: "Kelly-Slab"}}>Pokemon Championships</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/catchnow">Catch Now!</Nav.Link>
                    <Nav.Link href="/threads">My Pokemons</Nav.Link>
                    <Nav.Link href="/pokedex">Pokedex</Nav.Link>
                    <Nav.Link href="/threads">Unowned Pokemons</Nav.Link>      
                    <Nav.Link href="/threads" className='justify-content-end'><a href="/logout" className="logout">Log out</a></Nav.Link>                                  
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
 
export default NavigationBar;