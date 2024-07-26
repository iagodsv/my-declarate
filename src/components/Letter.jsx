import React from 'react';
import Carousel from './Carousel';
import './Letter.css'; // Certifique-se de adicionar o CSS para a carta

const Letter = () => {
  return (
    <div className="letter-container">
      <div className="letter">
        <div className="letter-top">
          {/* Parte superior da carta */}
        </div>
        <div className="letter-content">
          <h1>Meu Amor...</h1>
          <p>
            Preparei essa surpresa para dedicar a você todo o meu amor e, assim como eu, imagino a saudade que esteja sentindo. 
            Por isso, toda vez que sentir saudade, leia este texto e escute esta música. 
            Estarei pensando em você nesse mesmo momento e, com uma ajudinha de nossas fotos, trago nossas lembranças juntas, 
            que em pouco tempo se tornaram momentos maravilhosos e que me fizeram ter a certeza de que é você que eu quero para 
            sempre ao meu lado. Não vejo a hora de poder dar um abraço bem apertado em você, matar essa minha vontade de te beijar 
            e poder realizar todos os momentos que pensei com você aqui do meu lado, as inúmeras oportunidades que teremos e, 
            principalmente, viagens. Sei que tem sido muito difícil para você, meu anjo. Sei como está o estresse por conta do 
            banco e com toda essa mudança, mas pode ter certeza de que eu farei sempre o impossível para mostrar para você que nada 
            disso foi em vão!
          </p>
          <br/>

          <p className="poem">
            <span className="bold">Dois Corações em Distância<br/></span>
            <br/>
            Em noites calmas, olho o céu estrelado,<br/>
            Buscando teu olhar no brilho de uma estrela.<br/>
            Dois corações, em caminhos separados,<br/>
            Mas unidos pelo amor, que o tempo não congela.<br/>
            <br/>
            Teu sorriso, memória que me aquece,<br/>
            Em dias frios, tua voz é meu abrigo.<br/>
            Ainda que a distância nos impeça,<br/>
            Te sinto perto, em cada sonho contigo.<br/>
            <br/>
            O mar que nos separa é vasto e profundo,<br/>
            Mas nosso amor é forte, não conhece fim.<br/>
            Cada onda sussurra teu nome ao mundo,<br/>
            E me lembra que sempre estarás em mim.<br/>
            <br/>
            Cartas e mensagens, palavras de saudade,<br/>
            Pontes de amor que cruzam o infinito.<br/>
            Promessas de um dia, na eternidade,<br/>
            Onde estaremos juntos, no mesmo trilho.<br/>
            <br/>
            E mesmo longe, sinto teu coração,<br/>
            Batendo junto ao meu, em sincronia.<br/>
            Nosso amor é eterno, pura devoção,<br/>
            Dois corpos distantes, mas almas em harmonia.
          </p>

        </div>
      </div>
      <Carousel />
    </div>
  );
};

export default Letter;
