import "./App.css";
import avatar from "./assests/avatar.png";

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="glass">
          <div className="dashboard">
            <div className="user">
              <img src={avatar} alt="" />
              <h3>Md. Shafiul Islam</h3>
              <p>Front End Developer</p>
            </div>
            <div className="links">
            <div className="link">
                <i class="fas fa-phone"></i>
                <h6>01778816069</h6>
              </div>
              <div className="link">
                <i class="fas fa-envelope-square"></i>
                <h6>shafiswe@gmail.com</h6>
              </div>
              <div className="link">
                <i class="fab fa-github"></i>
                <h6><a target="_blank" href="https://github.com">Github</a></h6>
              </div>
              <div className="link">
                <i class="fab fa-linkedin"></i>
                <h6><a target="_blank" href="https://www.linkedin.com/in/md-shafiul-islam-521b21169/">Linkedin</a></h6>
              </div>
            </div>
            <div className="pro">
              <button>Resume</button>
              <button>Projects</button>
            </div>
          </div>
          <div className="games">
            <div className="status">
              <h1>Front End Development Skills</h1>
              <input type="text" />
            </div>
            <div className="cards">
              <div className="card">
              <i class="fab fa-js"></i>
                <div>JavaScript</div>
              </div>
              <div className="card">
                <i class="fab fa-js"></i>
                <div>ES6/ES7</div>
              </div>
              <div className="card">
              <i class="fab fa-react"></i>
                <div>React Js</div>
              </div>
              <div className="card">
              <i class="fab fa-react"></i>
                <div>Redux Js</div>
              </div>
              <div className="card">
              <i class="fab fa-react"></i>
                <div>React Native</div>
              </div>
              <div className="card">
              <i class="fab fa-css3-alt"></i>
                <div>CSS3</div>
              </div>
              <div className="card">
              <i class="fab fa-sass"></i>
                <div>Sass/Scss</div>
              </div>
              <div className="card">
              <i class="fab fa-bootstrap"></i>
                <div>Bootstrap 4/5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </div>
  );
}

export default App;
