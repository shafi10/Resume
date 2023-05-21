import React from "react";

export default function Project() {
  return (
    <div className="games">
      <div className="status">
        <h1>Projects</h1>
        <input type="text" />
      </div>
      <div className="cards">
        <div className="card">
          <i class="fas fa-car"></i>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.prothomalo.com"
            >
              The Daily Prothom Alo
            </a>
          </div>
        </div>
        <div className="card">
          <i class="fas fa-cart-plus"></i>
          <div>
            <a target="_blank" rel="noreferrer" href="https://medeasy.health/">
              MedEasy
            </a>
          </div>
        </div>
        <div className="card">
          <i class="fas fa-book"></i>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.haal.fashion/"
            >
              Haal Fashion
            </a>
          </div>
        </div>
        <div className="card">
          <i class="fas fa-file-code"></i>
          <div>
            <a target="_blank" rel="noreferrer" href="https://erp.ibos.io/">
              IBos ERP
            </a>
          </div>
        </div>
        <div className="card">
          <i class="fas fa-file-code"></i>
          <div>
            <a target="_blank" rel="noreferrer" href="https://shopfrontend.vercel.app/">
              E-Commerce Template
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
