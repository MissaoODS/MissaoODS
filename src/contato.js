const equipe = [
    {
        id:1,
        foto:'./imgs/img1.png',
        nome:"Caio Cesar Camargo",
        idade:24,
        cargo:"Desenvolvedor Web e Jogos",
        numero:"5513988639835",
        email:"caiocesarpaula29@gmail.com",
        qr:'./imgs/qrCaio.png',
    },
    {
        id:2,
        foto:'./imgs/img1.png',
        nome:"Cendy",
        idade:24,
        cargo:"Repórter",
        numero:"5513991740565",
        email:"",
        qr:'./imgs/qrCendy.png',
    },
    {
        id:3,
        foto:'./imgs/gregory.jpeg',
        nome:"Gregory Valentim",
        idade:26,
        cargo:"Desenvolvedor de Jogos",
        numero:"5513991267227",
        email:"gregory_valentim@hotmail.com",
        qr:'./imgs/qrGrego.png',
    },
    {
        id:4,
        foto:'./imgs/img1.png',
        nome:"Laura Cecatto",
        idade:24,
        cargo:"Médica Veterinária",
        numero:"5513996857360",
        email:"",
        qr:'./imgs/qrLaura.png',
    },
    {
        id:5,
        foto:'./imgs/img1.png',
        nome:"Luiz Guilherme",
        idade:24,
        cargo:"Repórter",
        numero:"5513991761083",
        email:"",
        qr:'./imgs/qrLuiz.png',
    },
]


function renderizarEquipe(){
    let cartoesEquipe = '';
    
    for(const equipeR of equipe) {
      const cartaoEquipe = `
        <div id="card-Equipe-${equipeR.id}" style="
          background-color: #F5F5DC; 
          border-radius: 1rem;
          padding: 1vw;
          position: relative;
          margin-right: 2vw;
          width: 35vw;
          height: 13vw;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 0.5vw;
        ">
          <div class="card-top">
            <img id="imgEquipe" src="${equipeR.foto}" alt="Equipe" style="width: 12vw; height: 10vw; border-radius: 8rem; margin-left: 1vw; margin-top: 1vw;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-left: 2vw;">
              <h3 id="nomeEquipe" style="font-size: 1.3vw; color: #333; margin-bottom: 0.5vw;">${equipeR.nome}</h3>
              <p id="idadeEquipe" style="font-size: 1vw; color: #666; margin-top: 0;">${equipeR.idade} anos</p>
              <p id="cargoEquipe" style="font-size: 1vw; color: #666; margin-top: 0;">${equipeR.cargo}</p>
              <p id="cargoEquipe" style="font-size: 1vw; color: #666; margin-top: 0;">${equipeR.email}</p>
              <button id="contatar-btn" style="background-color: #F5F5DC; height:3vw; width:7vw; padding: 1vw; border-radius: 1rem; margin-top: 1vw;cursor:pointer;">Contatar</button>
            </div>
          </div>
          <div class="card-bottom" style="display:none">
            <div style="display: flex; justify-content: space-between;">
              <a href="https://wa.me/${equipeR.numero}" target="_blank" style="text-decoration: none; color: #333;">
                <button style="background-color: #4CAF50; color: #fff; padding: 0.5vw 1vw; border: none; border-radius: 0.5rem; cursor: pointer;margin-top:2vw;margin-right:4vw;">Link</button>
              </a>
              <h2 style="margin-top:2vw;margin-right:4vw;">ou</h2>
              <img id="imgEquipe" src="${equipeR.qr}" alt="Equipe" style="width: 15vw; height: 15vw; border-radius: 1rem; margin-left: 1vw; margin-top: -3vw;"/>
            </div>
          </div>
        </div>
      `;
      cartoesEquipe += cartaoEquipe;
    }
    document.getElementById('contato-container').innerHTML = cartoesEquipe;
    
    // Add event listener to contatar-btn
    const contatarBtns = document.querySelectorAll('#contatar-btn');
    contatarBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const cardEquipe = e.target.parentNode.parentNode.parentNode;
        const cardBottom = cardEquipe.querySelector('.card-bottom');
        
        if (cardBottom.style.display === 'none') {
          cardEquipe.style.width = '45vw';
          cardEquipe.style.height = '25vw';
          cardBottom.style.display = 'block';
        } else {
          cardEquipe.style.width = '35vw';
          cardEquipe.style.height = '13vw';
          cardBottom.style.display = 'none';
        }
      });
    });
  }
  document.addEventListener("DOMContentLoaded", function() {
    if (window.location.href.includes("contato.html")) {
        renderizarEquipe();
    }
});