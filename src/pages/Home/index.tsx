import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutHome } from 'components/Layout/LayoutHome';

function Home() {
  return (
    <div className="App">
      <LayoutHome title="Desafio Github API">
        <h2 className="text-secondary mt-3 display-6">
          Bootcamp Spring React - DevSSuperior
        </h2>
        <div className="row">
          <div className="col">
            <Link className="btn btn-primary btn-md mt-3" to={'/repository'}>
              Começar
            </Link>
          </div>
        </div>
      </LayoutHome>
    </div>
  );
}

export default Home;
