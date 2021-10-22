import Container from 'react-bootstrap/Container';
import Section from './components/Section';
import MainMap from './components/MainMap';
import Header from './components/Header';

const App = () => (
  <>
    <Container>
      <Header></Header>
      <MainMap></MainMap>
      <Section></Section>
    </Container>
  </>
);

export default App;