import React, { useState } from 'react';

import { LayoutHome } from 'components/Layout/LayoutHome';
import { api } from 'app/http';
import { BASE_URL } from 'app/utils/Request';
import { TypeGitHub } from 'app/types/TypeGitHub';

type FormData = {
  login: string;
};

function Repository() {
  const [user, setUser] = useState<TypeGitHub>();
  const [formData, setFormData] = useState<FormData>({
    login: '',
  });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    api
      .get<TypeGitHub>(`${BASE_URL}/users/${formData?.login}`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        setUser(undefined);
      });
  };

  return (
    <LayoutHome>
      <div className="col">
        <div className="row col bg-primary bg-opacity-25 rounded-3 p-4">
          <h1 className="display-6 text-dark">Encontre um perfil Github</h1>
          <form onSubmit={handleOnSubmit} className="mt-3">
            <input
              className="form-control"
              type="text"
              placeholder="Usuário Github"
              aria-label="default input example"
              name="login"
              value={formData?.login}
              onChange={handleOnChange}
            />
            <button type="submit" className="btn btn-primary mt-3">
              Encontrar
            </button>
          </form>
        </div>
        {user && (
          <div className="row col bg-secondary bg-opacity-25 rounded-3 p-4 mt-5">
            <div className="col-sm-12 col-md-6 col-lg-3 d-flex align-items-center justify-content-center mb-3">
              <img
                src={user?.avatar_url}
                alt={user?.name}
                className="rounded-circle img-thumbnail "
              />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-9 bg-white rounded-3 p-2">
              <h2 className="text-primary fs-5">Informações</h2>
              <input
                className="form-control border border-1 border-secondary"
                type="text"
                aria-label="default input example"
                value={`Perfil: ${user?.url}`}
                disabled
              />
              <input
                className="form-control border border-1 border-secondary mt-2"
                type="text"
                aria-label="default input example"
                value={`Seguidores: ${user?.followers}`}
                disabled
              />
              <input
                className="form-control border border-1 border-secondary mt-2"
                type="text"
                aria-label="default input example"
                value={`Localidade: ${
                  user?.location === null ? 'Brasil' : user?.location
                }`}
                disabled
              />
              <input
                className="form-control border border-1 border-secondary mt-2"
                type="text"
                aria-label="default input example"
                value={`Nome: ${user?.name}`}
                disabled
              />
            </div>
          </div>
        )}
      </div>
    </LayoutHome>
  );
}

export default Repository;
