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
            <a target="_blank" rel="noreferrer" href="https://road-accident-app.herokuapp.com/">
              Road Accident Statistics System
            </a>
          </div>
        </div>
        <div className="card">
          <i class="fas fa-cart-plus"></i>
          <div>
            <a target="_blank" rel="noreferrer" href="https://cart-shop.herokuapp.com/">
              Web Shop
            </a>
          </div>
        </div>
        <div className="card">
        <i class="fas fa-book"></i>
          <div>
            <a target="_blank" rel="noreferrer" href="https://online-register-web.herokuapp.com/">
            Online course registration system
            </a>
          </div>
        </div>
        <div className="card">
        <i class="fas fa-file-code"></i>
          <div>
            <a target="_blank" rel="noreferrer" href="https://developers-meetup.herokuapp.com/">
            Developers Meet Up
            </a>
          </div>
        </div>     
      </div>
    </div>
  );
}
