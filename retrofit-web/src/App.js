import Container from 'react-bootstrap/Container';

import MainMap from './components/MainMap';
import Header from './components/Header';

function App() {
  return (
    <Container>
      <Header></Header>
      <MainMap></MainMap>
    </Container>
  );
}

export default App;