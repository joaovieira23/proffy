import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/45154356?s=460&u=3ae25f40bfcf6c661c7fad6f27ea1f471acf88ac&v=4" alt="João Victor Vieira" />
        <div>
          <strong>João Victor Vieira</strong>
          <span>Matemática</span>
        </div>
      </header>
      <p>Entusiasta das melhores tecnologias de matemática avançada
            <br /><br />
          Apaixonado por números e por mudar a vida das pessoas através da matemática. Mais de 200 mil pessoas já foram impactadas com alguma de minhas aulas
          </p>

      <footer>
        <p>
          Preço/Hora
              <strong>R$ 150,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  );
}

export default TeacherItem