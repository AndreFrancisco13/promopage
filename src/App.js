import React from "react";
import logo from "./assets/logo.png";
import selfone from "./assets/selfone.png";
import download1 from "./assets/download_1.png";
import download2 from "./assets/download_2.png";
import icone from "./assets/icone_titles.png";
import icone2 from "./assets/icone_titles2.png";
import selfone2 from "./assets/selfone_2.png";
import selfone3 from "./assets/selfone_3.png";
import selfonefooter from "./assets/footer-selfone.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { useEffect } from "react";
import { RiMentalHealthFill } from "react-icons/ri";
import { FaPeopleGroup } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";
import { IoMdFootball } from "react-icons/io";
import { FaRankingStar } from "react-icons/fa6";



function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 60;
        const sectionHeight = section.offsetHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
          link.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
      <section
        id="sobre"
        className="row mt-5 justify-content-center align-items-center"
      >
        <div className="col-12 col-md-6 p-3">
          <h1>
            Faz Download, <span className="color_primary">Aprende</span>, e Faz
            <span className="color_primary">Apostas</span>!
          </h1>
          <p className="fs-5">
            A aplicação é uma sandbox para principiantes e apostadores curiosos.
            Aqui, aprende os conceitos das apostas sem gastar dinheiro real,
            ganhando experiência e confiança.
          </p>
          <a href="https://www.google.com">
            <img
              src={download1}
              alt="download with google"
              className="img-download"
            />
          </a>
          <a href="https://www.apple.com">
            <img
              src={download2}
              alt="download with apple"
              className="img-download"
            />
          </a>
        </div>
        <div className=" col-12 col-md-6 p-3 ">
          <img src={selfone} alt="Selfone" className="img-1 img-fluid" />
        </div>
      </section>

      <section
        id="vantagens"
        className="row justify-content-center align-items-center"
      >
        <h2 className="text-title col-sm-12 col-md-10 text-center">
          <img src={icone} alt="icone de titulo" className="img-icone" />
          Uma plataforma cheia de vantagens
        </h2>
        <p className="fs-5 text-center col-md-8 col-12">
          Aprende sem arriscar, explora estratégias de forma segura e prepara-te
          para apostas reais com total confiança. Tudo isso num ambiente
          interativo, educativo e livre de custos!
        </p>
        <ul
          className="col-12 row justify-content-center mt-5"
          style={{ listStyleType: "none" }}
        >
          <li className="col-md-5 row justify-content-center align-items-center list-item p-4">
            <p className="number col-sm-12">1 <FaPeopleGroup className="pb-2" />
            </p>
            <p className="title col-sm-12">Entra na comunidade</p>
            <p className="col-sm-12">
              Uma plataforma que te permite juntares a uma comunidade que quer
              aprender mais e mais sobre apostas.
            </p>
          </li>
          <li className="col-md-5 row justify-content-center align-items-center list-item p-4">
            <p className="number col-sm-12">2 <GoGoal className="pb-2"/>
            </p>
            <p className="title col-sm-12">Completa os desafios</p>
            <p className="col-sm-12">
              Aprende os conceitos básicos sobre apostas ao desenvolveres os
              desafios que temos para ti.
            </p>
          </li>
          <li className="col-12 col-md-6 row justify-content-center align-items-center list-item m-3">
          
          <img src={selfone2} alt="Selfone" className="img-1 img-fluid" />
        
            </li>
          <li className="col-md-5 row justify-content-center align-items-center list-item item-3 p-4">
            <p className="number col-sm-12">3 <RiMentalHealthFill className="pb-2" />
            </p>
            <p className="title col-sm-12">
              Aprende a apostar de forma responsável
            </p>
            <p className="col-sm-12">
              Ao completar os desafios, vais aprender a apostar de forma
              responsável e segura. Além disso, vais poder testar como se fosse
              a tua situação financeira real.
            </p>
          </li>
          <li className="col-md-5 row justify-content-center align-items-center list-item p-4">
            <p className="number col-sm-12">4 <IoMdFootball className="pb-2" />
            </p>
            <p className="title col-sm-12">Testa com jogos reais</p>
            <p className="col-sm-12">
              No inicio, irão ser apresentados jogos ficticios para testares as
              tuas capacidades e aprenderes, mas com o tempo poderás apostar em
              jogos reais!
            </p>
          </li>
          <li className="col-md-5 row justify-content-center align-items-center list-item p-4">
            <p className="number col-sm-12">5 <FaRankingStar className="pb-2" />
            </p>
            <p className="title col-sm-12">
              Evolui na pontuação e destaca-te
            </p>
            <p className="col-sm-12">
              Completando os desafios, vais evoluir na pontuação e destacar-te
              na comunidade. Sê o melhor!
            </p>
          </li>
        </ul>
      </section>

      <section
        id="desafios"
        className="row justify-content-center align-items-center"
      >
        <h2 className="text-title col-sm-12 col-md-10 text-center">
        <img src={icone} alt="icone de titulo" className="img-icone" />
          Desafios que ensinam e motivam!
          
        </h2>
        <p className="fs-5 text-center col-md-8 col-12 mb-5">
        Supera desafios divertidos e educativos que te ajudam a dominar o mundo das apostas. Aprende na prática, testa os teus limites e acumula conquistas enquanto evoluis!
        </p>

        <div className="col-lg-6">
    <img src={selfone3} alt="icone de titulo" className="img-fluid" />
  </div>
  <div className="col-lg-6">
    <ul className="list-unstyled">
      <li className="mb-3">
        <p className="number-2"><span className="color_primary">1.Vê os desafios </span>  da plataforma</p>
      </li>
      <li className="mb-3">
        <p className="number-2"><span className="color_primary"> 2. Completa </span> os desafios</p>
      </li>
      <li className="mb-3">
        <p className="number-2"><span className="color_primary"> 3. Aprende </span> a cada aposta que fazes</p>
      </li>
      <li className="mb-3">
        <p className="number-2"><span className="color_primary">4.Desbloqueia </span> novos desafios</p>
      </li>
    </ul>
  </div>

      </section>

      <section
        className="row justify-content-center align-items-center footer"
      >
        <div className="col-md-6">
        <h1 className="color-secondary">Sê o próximo a entrar na comunidade</h1>
        <button className="btn btn-download mt-4 mb-4">Download Aqui</button>
        </div>
      
      <div className="col-md-6">
      <img src={selfonefooter} alt="icone de titulo" className="img-fluid" />
      </div>
      </section>
      
    </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md bg-navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            alt="Logo"
            className="logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end w-100">
            <li className="nav-item">
              <a className="nav-link" href="#sobre">
                Sobre
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#vantagens">
                Vantagens
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#desafios">
                Desafios
              </a>
            </li>
          </ul>
          <button className="btn btn-cta">Experimenta Já!</button>
        </div>
      </div>
    </nav>
  );
}

export default App;
