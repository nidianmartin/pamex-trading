import React from "react";
import { Link } from "react-router-dom";
import { VscGithubAlt } from "react-icons/vsc";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { SiInstagram, SiTreehouse } from "react-icons/si";

export default function Footer() {
  return (
    <div className="Pamex-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-12">
            <ul className="footer-center">
              <li>
                <Link to="https://github.com/nidianmartin">
                  <VscGithubAlt /> GitHub
                </Link>
              </li>
              <li>
                <Link to="https://www.linkedin.com/in/nidian-martin/">
                  <RiLinkedinBoxLine /> Linkedin
                </Link>
              </li>
              <li>
                <Link to="https://www.instagram.com/nidimartin/">
                  <SiInstagram /> Instagram
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-9 col-12">
              <h1 style={{color: "white"}}><SiTreehouse className="navbar-icon" />PAMEX TRADING</h1>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="row">
            <div className="col-lg-8 col-12">
              <p style={{ color: "white" }}>Copyright 2020 Pamex Trading.</p>
            </div>
            <div className="col-lg-4 col-12">
              <ul className="clearfix">
                <li>
                  <Link to="/signup">Crear Cuenta</Link>
                </li>
                <li>
                  <Link to="/">Politica de Privacidad</Link>
                </li>
                <li>
                  <Link to="/">Terminos de Uso</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
