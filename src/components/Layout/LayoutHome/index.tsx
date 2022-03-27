import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type TypeHomePorps = {
  children: ReactNode;
  title?: string;
};

const LayoutHome: React.FC<TypeHomePorps> = ({ children, title }) => {
  return (
    <>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <span className="navbar-brand mb-0 h1">
            <Link className="text-white" to={'/'}>
              Github API
            </Link>
          </span>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <h1 className="fw-bold mt-5 display-4">{title}</h1>
          {children}
        </div>
      </div>
    </>
  );
};

export { LayoutHome };
