import tryunfo from '../assets/killertrunfo.mp4';
import trybetunes from '../assets/trybetunes.mp4';
import trybewallet from '../assets/TrybeWallet.mp4';
import appDeReceitas from '../assets/app-de-receitas.mp4';
import natours from '../assets/Natours.mp4';
import dragNdrop from '../assets/dragNdrop.mp4';


import imglosMantosBr from '../assets/losMantosBR.webp';
import imgLevitaTech from '../assets/levitaTech.webp';
import imgEshop from '../assets/eshop.webp';
import imgIbandece from '../assets/ibandce.webp';
import imgCasaMaze from '../assets/casaMaze.webp';
import imgVibrazMadeiras from '../assets/vibrazMadeiras.webp';

const allProjects = [
  {
    id: 12,
    name: 'Levita Tech',
    moduleCourse: 'Front-end',
    img: imgLevitaTech,
    // linkGitHub: 'https://github.com/daniellelsilva/drag-n-drop',
    linkPage: 'https://levitatech.com.br/',
    linkVideo: dragNdrop,
    technologies: 'Wordpress, HTML5, CSS3',
    text: 'Este foi um desafio desenvolvido para a Levita Tech, onde o objetivo foi criar um site com a cara da empresa e que ampliasse seu alcance a novos clientes. Além da funcionalidade, foquei no desenvolvimento de uma interação agradável e de fácil manuseio para os usuários.'
  },

  {
    id: 11,
    name: 'Los Mantos Br',
    moduleCourse: 'Front-end',
    img: imglosMantosBr,
    // linkGitHub: 'https://github.com/daniellelsilva/natours',
    linkPage: 'https://losmantosbr.com.br',
    linkVideo: natours,
    technologies: 'JS, HTML5, CSS3, Twig, Swiper, Bootstrap',
    text: 'Este foi um desafio desenvolvido para a Los Mantos Br, onde o objetivo foi criar um e-commerce que ampliasse as vendas do proprietário da loja. Além da funcionalidade, foquei no desenvolvimento de uma interação agradável para os usuários e busquei uma boa usabilidade e aparência na aplicação.'
  },
  
  {
    id: 10,
    name: 'Eshop',
    moduleCourse: 'Front-end',
    img: imgEshop,
    // linkGitHub: 'https://github.com/daniellelsilva/cook-it',
    linkPage: 'https://www.eshop.com.br/',
    linkVideo: appDeReceitas,
    technologies: 'JS, HTML5, CSS3, Twig, Swiper, Bootstrap',
    text: 'Este foi um desafio desenvolvido para a Eshop, onde o objetivo foi criar um e-commerce que ampliasse as vendas do proprietário da loja abordando seu amplo catálogo de produtos de marcas internacionais. Além da funcionalidade, foquei no desenvolvimento de uma interação agradável para os usuários e busquei uma boa usabilidade e aparência na aplicação.'
  },
  
  {
    id: 9,
    name: 'IBandCe',
    moduleCourse: 'Front-end',
    img: imgIbandece,
    // linkGitHub: 'https://github.com/daniellelsilva/TrybeWallet',
    linkPage: 'https://ibandce.com.br/',
    linkVideo: trybewallet,
    technologies: 'PHP, JS, CSS3, HTML5, Wordpress',
    text: 'A proposta do projeto foi criar a IBandCe, um site de notícias da Band Ceará que é uma emissora brasileira sediada em Fortaleza-ce. Apesar do site originalmente ter tido seu desenvolvimento solicitado em wordpress, devido as funcionalidades e a solicitação por parte do cliente de não fazer uso dos plugins da plataforma, foram utilizadas as linguagens PHP e JavaScript, além de tecnologias como HTML5 e CSS3, para gerar toda a interface e interação do site, tornando agradável a experiência do usuário.'
  },
  
  {
    id: 8,
    name: 'Casa Mazê',
    moduleCourse: 'Front-end',
    img: imgCasaMaze,
    // linkGitHub: 'https://github.com/daniellelsilva/trybetunes',
    linkPage: 'https://www.casamaze.com.br/',
    linkVideo: trybetunes,
    technologies: 'JS, HTML5, CSS3, Twig, Swiper, Bootstrap',
    text: 'Este foi um desafio desenvolvido para a Casa Mazê, onde o objetivo foi criar um e-commerce que ampliasse as vendas do proprietário da loja abordando seu amplo catálogo de produtos para casa. Além da funcionalidade, foquei no desenvolvimento de uma interação agradável para os usuários e busquei uma boa usabilidade e aparência na aplicação.'
  },

  {
    id: 7,
    name: 'Vibraz Madeiras',
    moduleCourse: 'Front-end',
    img: imgVibrazMadeiras,
    linkVideo: tryunfo,
    // linkGitHub: 'https://github.com/daniellelsilva/tryunfo',
    linkPage: 'https://vibrazmadeiras.com.br/',
    technologies: 'Wordpress, CSS3, HTML5',
    text: 'Neste projeto busquei desenvolver um site fluido e que mesclasse com o compromisso e precisão do trabalho executado pela Vibraz Madeiras. Foi solicitado a construção de um site que apresentasse o trabalho Vibraz e toda sua execelência.'
  },

  // {
  //   id: 6,
  //   name: 'Solar system',
  //   moduleCourse: 'Front-end',
  //   img: imgSolarSystem,
  //   linkVideo: solarSystem,
  //   linkGitHub: 'https://github.com/daniellelsilva/solar-system',
  //   linkPage: 'https://daniellelsilva.github.io/solar-system/',
  //   technologies: 'React, JSX, CSS3, HTML5',
  //   text: 'Este foi o primeiro projeto do módulo de Front-end e meu primeiro projeto em React, foi desenvolvido um modelo do sistema solar, sendo visualizado todos os planetas e missões espaciais.'
  // },

  // {
  //   id: 5,
  //   name: 'Shopping cart',
  //   moduleCourse: 'Fundamentos',
  //   img: imgShoppingCart,
  //   linkVideo: shoppingCart,
  //   linkGitHub: 'https://github.com/daniellelsilva/shopping-cart',
  //   linkPage: 'https://daniellelsilva.github.io/shopping-cart/',
  //   technologies: 'JavaScript, CSS3, HTML5',
  //   text: 'Primeiro projeto utilizando API! O objetivo do projeto foi desenvolver um carrinho de compras totalmente dinâmico, consumindo dados diretamente de uma API.'
  // },

  // {
  //   id: 4,
  //   name: 'To do list',
  //   moduleCourse: 'Fundamentos',
  //   img: imgToDoList,
  //   linkVideo: toDoList,
  //   linkGitHub: 'https://github.com/daniellelsilva/to-do-list',
  //   linkPage: 'https://daniellelsilva.github.io/to-do-list/',
  //   technologies: 'JavaScript, CSS3, HTML5',
  //   text: 'Projeto do bloco de fundamentos, foi utilizado CSS e Javascript para criar uma aplicação onde é possível adicionar e remover tarefas, marcar tarefa como feita, remover somente itens marcados, salvar a lista e remover todos os itens.'
  // },

  // {
  //   id: 3,
  //   name: 'Pixel-art',
  //   moduleCourse: 'Fundamentos',
  //   img: imgPixelArt,
  //   linkVideo: pixelArt,
  //   linkGitHub: 'https://github.com/daniellelsilva/pixel-art',
  //   linkPage: 'https://daniellelsilva.github.io/pixel-art/',
  //   technologies: 'JavaScript, CSS3, HTML5',
  //   text: 'Projeto do bloco de fundamentos, foi utilizada manipulação de DOM e Javascript para criar uma aplicação onde é possível fazer arte com pixels. As cores deveriam ser aleatórias e o quadro deve permitir mudar o número de pixels.'
  // },

  // {
  //   id: 2,
  //   name: 'Trybewarts',
  //   moduleCourse: 'Fundamentos',
  //   img: imgTrybewarts,
  //   linkVideo: trybewarts,
  //   linkGitHub: 'https://github.com/daniellelsilva/trybewarts',
  //   linkPage: 'https://daniellelsilva.github.io/trybewarts/',
  //   technologies: 'JavaScript, CSS3, HTML5',
  //   text: 'Projeto do bloco de fundamentos, o desafio era criar um formulário HTML para a escola de magia Trybewarts utilizando CSS flexbox e Javascript. O projeto foi desenvolvido em dupla com Nayara Vasconcelos.'
  // },

  // {
  //   id: 1,
  //   name: 'Primeiro portfólio',
  //   moduleCourse: 'Fundamentos',
  //   img: imgPrimeiroPortfolio,
  //   linkVideo: primeiroPortfolio,
  //   linkGitHub: 'https://github.com/daniellelsilva/primeiro-portfolio',
  //   linkPage: 'https://daniellelsilva.github.io',
  //   technologies: 'CSS3, HTML5',
  //   text: 'Primeiro projeto e primeiro portfólio, esta foi minha primeira experiência com algo relacionado a programação'
  // }
];


export default allProjects;