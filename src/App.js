import { Container, Head, Titulo, BemVindo } from './styles';

/*
usar npm install --save styled-components
*/
function App() {
  return (
    <Container>
      <Head>
        <Titulo>Projeto Styled</Titulo>
      </Head>

      <BemVindo cor="0000FF" tamanho={35}>
        Bem vindo ao Sistema!
      </BemVindo>

    </Container>
  );
}

export default App;

/*
<div className="container">
  <header className="header">
    <a className="titulo">Projeto Styled</a>
  </header>

  <h1>Bem vindo ao Sistema!</h1>
</div>
*/