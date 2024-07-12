const ods = [
    {
        id: 1,
        imagem: './imgs/ods1.jpg',
        description: `Erradicar a Pobreza
        É um objetivo global para ajudar as pessoas que não têm o suficiente para viver bem. Isso significa garantir que
        todos tenham comida suficiente, um lugar seguro para morar, acesso à educação e cuidados de saúde, e a chance
        de ter um bom trabalho. É como garantir que ninguém seja deixado para trás e que todos tenham oportunidades
        justas na vida.`,
    },
    {
        id:2,
        imagem:'./imgs/ods2.jpg',
        description:`Fome Zero.
        É um objetivo global garantir que todas as pessoas tenham o suficiente para comer. Isso significa trabalhar para
        que não haja mais fome no mundo, garantindo que as pessoas tenham acesso a alimentos saudáveis e nutritivos.
        Também envolve ajudar os agricultores a cultivar mais alimentos e melhorar as técnicas de agricultura para que
        possamos alimentar todo mundo de forma sustentável e saudável.`,
    },
    {
        id:3,
        imagem:'./imgs/ods3.jpg',
        description:`Saúde e Bem-Estar
        É um objetivo global para garantir que todas as pessoas possam viver vidas saudáveis e felizes. Isso significa ter
        acesso a cuidados de saúde de qualidade, como ir ao médico quando estiver doente e receber vacinas para
        prevenir doenças. Também envolve promover estilos de vida saudáveis, como fazer exercícios e comer alimentos
        nutritivos, para que todos possam se sentir bem e ter energia para fazer as coisas que amam.`,
    },{
        id:4,
        imagem:'./imgs/ods4.jpg',
        description:`Educação de Qualidade
        É um objetivo global para garantir que todas as crianças tenham a chance de ir para a escola e aprender coisas
        novas. Isso significa que todas as crianças devem ter acesso a uma boa educação, não importa onde vivam ou
        quais sejam suas circunstâncias. Também envolve garantir que as escolas tenham bons professores, livros e
        materiais para que todos possam aprender e se desenvolver da melhor forma possível.`,
    },
    {
        id:5,
        imagem:'./imgs/ods5.jpg',
        description:`Igualdade de Gênero
        É um objetivo global garantir que meninas e meninos tenham as mesmas oportunidades e direitos. Garantir que
        ninguém seja tratado de forma diferente por causa do seu gênero. Isso inclui coisas como garantir que meninas e
        mulheres tenham acesso à educação, empregos bons e oportunidades iguais para seguir seus sonhos. Também
        envolve acabar com a violência e discriminação baseada no gênero, para que todos possam viver em um mundo
        justo e igualitário.`,
    },
    {
        id:6,
        imagem:'./imgs/ods6.jpg',
        description:` Água Limpa e Saneamento
        É um objetivo global garantir que todas as pessoas tenham acesso a água limpa para beber e usar, e também a
        banheiros e sistemas de esgoto seguros. Garantir que ninguém tenha que ficar doente por beber água suja ou usar
        banheiros que não são seguros. Também envolve proteger os rios, lagos e oceanos para que a água continue limpa
        para todos e para os animais que vivem neles. É importante para que todos possam viver de forma saudável e
        segura.`,
    },
    {
        id:7,
        imagem:'./imgs/ods7.jpg',
        description:`Energia Limpa e Acessível
        É um objetivo global usar energia de maneiras que não prejudiquem o planeta e que todos tenham acesso a ela.
        Para que possamos ter eletricidade para nossas casas, escolas e hospitais sem poluir o ar ou causar mudanças
        climáticas. Também envolve usar mais energia de fontes como o sol e o vento, que são limpas e não se esgotam,
        para que possamos proteger o nosso planeta para as gerações futuras.`,
    },
    {
        id:8,
        imagem:'./imgs/ods8.jpg',
        description:`Trabalho Decente e Crescimento Econômico
        É um objetivo global garantir que as pessoas tenham bons empregos e que a economia do mundo cresça de uma
        forma que beneficie todos. Para que todos possam ter um trabalho justo, com um salário justo e condições de
        trabalho seguras. Também envolve ajudar as empresas a crescer de maneira sustentável e criar mais
        oportunidades de emprego para todos. É importante para que todos possam ter uma vida boa e digna.`,
    },
    {
        id:9,
        imagem:'./imgs/ods9.jpg',
        description:`Indústria, Inovação e Infraestrutura
        É um objetivo global tornar as coisas melhores e mais fáceis para todos. Criar coisas novas e úteis, como estradas,
        pontes e fábricas, para que possamos viver de forma mais confortável e segura. Também envolve usar novas ideias
        e tecnologias para resolver problemas e melhorar a vida das pessoas em todo o mundo. É importante para que
        possamos progredir e tornar o mundo um lugar melhor para todos viverem.`,
    },
    {
        id:10,
        imagem:'./imgs/ods10.jpg',
        description:`Redução das Desigualdades
        É um objetivo global tornar o mundo mais justo para todos. Para que ninguém seja deixado para trás e todos
        tenham oportunidades iguais, não importa onde vivam ou quem sejam. Isso envolve ajudar pessoas que estão
        em situações difíceis e garantir que todos tenham acesso aos mesmos direitos e serviços. É importante para
        que todos possam ter uma chance justa na vida e para que possamos viver juntos em paz e harmonia.`,
    },
    {
        id:11,
        imagem:'./imgs/ods11.jpg',
        description:`Cidades e Comunidades Sustentáveis
        É um objetivo global fazer nossas cidades e comunidades melhores para todos viverem. Para garantir que as
        cidades sejam seguras, limpas e divertidas, com parques, escolas e lugares legais para as pessoas se
        reunirem. Também envolve cuidar do meio ambiente, como plantar árvores e reciclar o lixo, para que
        possamos viver em um lugar saudável e feliz. É importante para que todos possam ter um lar feliz e seguro.`,
    },
    {
        id:12,
        imagem:'./imgs/ods12.jpg',
        description:`Consumo e Produção Sustentáveis
        É um objetivo global usar as coisas de forma inteligente para que elas durem mais tempo e não machuquem o
        planeta. Para que possamos comprar menos coisas que não precisamos e reutilizar mais o que já temos.
        Também envolve fazer as coisas de uma maneira que não cause tanto lixo ou poluição. É importante para que
        possamos proteger nosso planeta e garantir que haja coisas boas para as gerações futuras.`,
    },
    {
        id:13,
        imagem:'./imgs/ods13.jpg',
        description:`Ação Contra a Mudança Global do Clima
        É um objetivo global fazer coisas para proteger nosso planeta do aquecimento global. Para que possamos
        parar as coisas que estão fazendo nosso planeta ficar mais quente, como queimar muito combustível e cortar
        muitas árvores. Também envolve usar mais energia limpa, como o sol e o vento, e ajudar as pessoas e os
        animais que estão sendo afetados pelo clima extremo, como tempestades e secas. É importante para que
        possamos manter nosso planeta seguro e saudável.`,
    },
    {
        id:14,
        imagem:'./imgs/ods14.jpg',
        description:`Vida na Água
        É um objetivo global proteger os oceanos, rios e todos os lugares onde os animais aquáticos vivem. Para que
        os peixes, golfinhos e outras criaturas do mar tenham um lar seguro e saudável. Isso também envolve parar a
        poluição nos oceanos, como plásticos e produtos químicos, para que os animais possam viver felizes e
        saudáveis. É importante para garantir que o mundo aquático continue cheio de vida e beleza.`,
    },
    {
        id:15,
        imagem:'./imgs/ods15.jpg',
        description:`Vida Terrestre
        É um objetivo global cuidar das plantas, dos animais e dos lugares onde vivem. Para que as florestas, os
        animais selvagens e os lugares naturais permaneçam seguros e saudáveis. Isso envolve proteger as árvores
        das florestas, ajudar os animais em perigo e parar a poluição que está machucando a natureza. É importante
        para garantir que o mundo continue cheio de beleza e vida para as gerações futuras.
        `,
    },
    {
        id:16,
        imagem:'./imgs/ods16.jpg',
        description:`Paz, Justiça e Instituições Eficazes
        É um objetivo global trabalhar juntos para ter um mundo onde todos possam viver em paz, segurança e
        justiça. Para acabar com a violência, garantir que todos sejam tratados de forma justa e que as leis funcionem
        para proteger as pessoas. Também envolve ter governos e instituições que trabalhem bem para todos. É
        importante para que todos possam viver em um mundo onde se sintam seguros e respeitados.`,
    },
    {
        id:17,
        imagem:'./imgs/ods17.jpg',
        description:`Parcerias para a Implementação dos Objetivos
        É um objetivo global que todos trabalham juntos para fazer as coisas acontecerem. Para que países,
        organizações e pessoas colaborem e compartilhem ideias e recursos para resolver problemas importantes,
        como pobreza, fome e mudanças climáticas. Isso envolve trabalhar em equipe e ajudar uns aos outros para
        que possamos fazer do mundo um lugar melhor para todos. É importante para que possamos alcançar os
        outros objetivos de desenvolvimento de forma mais eficaz e rápida.`,
    },
];
function renderizarOds() {
    let cartoesOds = '';
    for (const odsV of ods) {
        const cartaoOds = `<div id="card-ods-${odsV.id}" style="
        background-color: #701313;
        box-shadow: 0 2.5vw 5vw -1.2vw rgba(70, 13, 13, 0.944);
        border-radius: 3rem;padding:1vw;
        margin-right: 2vw;
        width: 13vw;
        height: 13vw;
        display: flex;
        flex-direction: column;
        justify-content: stretch;
        align-content: flex-start; margin-top: 3vw;">
      <center><img id="imgVolunt"
        src="${odsV.imagem}"
        alt="membro1."
        style= "width: 10vw;
        margin-bottom: 1vw;
        background-color:white;
        height: 10vw; 
        border-radius: 2rem;"
      /></center>
      <p id="detalhes" style="font-size: 1.2vw; 
      color: #000;  
      text-align: center;color:white;margin-top:-0.6vw;
      display: none;">${odsV.description}</p>
        </div>`;
        cartoesOds += cartaoOds;
    }
    document.getElementById("ods-container").innerHTML = cartoesOds;

    const cartoes = document.querySelectorAll('#ods-container > div');
    cartoes.forEach((cartao) => {
        let detalhesVisivel = false;
        cartao.addEventListener('click', () => {
            if (!detalhesVisivel) {
                cartao.style.width = "28vw";
                cartao.style.height = "28vw";
                cartao.querySelector('#detalhes').style.display = 'block';
                detalhesVisivel = true;
            } else {
                cartao.style.width = "13vw";
                cartao.style.height = "13vw";
                cartao.querySelector('#detalhes').style.display = 'none';
                detalhesVisivel = false;
            }
        });
    });
}

const games = [
    {
        id:1,
        imagem:'./imgs/caixaR.png',
        nome:"Missão 2030: Desafio dos Ods",
        description:`Missão 2030: Desafios dos ODS é um jogo de tabuleiro onde 1 a 4 jogadores jogam em turnos obtendo pontuação
        respondendo corretamente as perguntas sobre o tema da carta, além de sofrer com consequências aleatórias que podem ser 
        positivas ou negativas.`,
    },
    
]


function renderizarGames(){
    let cartoesJogos = '';

    for(const jogodR of games)
    {
        const cartaoJogos = `<div id="card-jogo-${jogodR.id}" style="
        background-color: #F5F5DC; /* beige color */
        border-radius: 1rem;
        padding: 1vw;
        margin-right: 2vw;
        width: 35vw;
        height: 15vw;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 0.5vw;
      ">
        <img id="imgJogo"
          src="${jogodR.imagem}"
          alt="jogo"
          style="width: 20vw; height: 20vw; border-radius: 1rem; margin-left:-5vw; margin-top:-3vw;"
        />
        <div style="display: flex; flex-direction: column; justify-content: center;">
          <h3 id="nomeJogo" style="font-size: 1.3vw; color: #333; margin-bottom: 0.5vw;">${jogodR.nome}</h3>
          <p id="descricaoJogo" style="font-size: 1vw; color: #666; margin-top: 0;">${jogodR.description}</p>
          <button style="background-color: #4CAF50; color: #fff; padding: 0.5vw 1vw; border: none;margin-top:1vw; border-radius: 0.5rem; cursor: pointer;" onclick="window.location.href='https://missaoods.itch.io/misso-2030-desafios-dos-ods'">Conheça o jogo</button>
        </div>
      </div>`
      cartoesJogos += cartaoJogos;
    }
    document.getElementById("jogos-container").innerHTML = cartoesJogos;
}
document.addEventListener("DOMContentLoaded", function() {
    if (window.location.href.includes("sobre.html")) {
        renderizarOds();
        renderizarGames();
    }
});