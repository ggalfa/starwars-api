import React, { Component } from 'react';
import api from './services/api';
import Header from './components/Header';
import './css/app.css';
// import Routes from './routes';


class App extends Component {
  state = {
    especies: [],
    especieInfo: {},
    page: 1,
  };

  componentDidMount() {
    this.loadEspecies();
  };

  loadEspecies = async(page = 1)  => {
    const response = await api.get(`/species?page=${page}`);
    const { results, ...especieInfo } = response.data;
    this.setState({ especies: results, especieInfo, page });
  };

  prevPage = () => {
    const { page } = this.state;
    if (page === 1) return;
    const pageNumber = page - 1;
    this.loadEspecies(pageNumber);
  };

  nextPage = () => {
      const { page, especieInfo } = this.state;
      if (page === especieInfo.pages) return;
      const pageNumber = page + 1;
      this.loadEspecies(pageNumber);
  };

  render() {

    const { especies, especieInfo, page } = this.state;

    return(
      <div className="listagem">
        <Header />
        <h1 className="title">Lista das Espécies</h1>
        {especies.map(especie => (
          <ul className="informe">
            <li key={especie.id}>
              <h2>
                <strong>Informação da Espécie: </strong>
              </h2>
              <p><strong>Nome: </strong>{especie.name}</p>
              <p><strong>Classificação: </strong>{especie.classification}</p>
              <p><strong>Designação: </strong>{especie.designation}</p>
              <p><strong>Altura Média: </strong>{especie.average_height}</p>
              <p><strong>Língua: </strong>{especie.language}</p> 
            </li>
          </ul>
        ))}
          <div className="actions">
            <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
            <button disabled={page === especieInfo.pages} onClick={this.nextPage}>Próximo</button>
          </div>
      </div>
    );
  }
}

export default App;
