// scripts/logica-cardapio.js
import { cardapio, categorias } from './cardapio.js';

// Função para gerar o menu de navegação de categorias
function gerarNavegacao() {
  const navContainer = document.querySelector('.category-nav nav ul');
  if (!navContainer) return;
  navContainer.innerHTML = '';

  const temItensEmDestaque = Object.values(cardapio).flat().some(item => item.destaque);

  categorias.forEach(categoria => {
    let deveExibirCategoria = false;

    if (categoria.id === 'destaques') {
      if (temItensEmDestaque) {
        deveExibirCategoria = true;
      }
    } else {
      if (cardapio[categoria.id] && cardapio[categoria.id].length > 0) {
        deveExibirCategoria = true;
      }
    }

    if (deveExibirCategoria) {
      const li = document.createElement('li');
      li.innerHTML = `
        <a href="#${categoria.id}">
          <img src="${categoria.icon || 'assets/icons/burguer.png'}" alt="${categoria.nome}">
          <span class="nav-span">${categoria.nome}</span>
        </a>
      `;
      navContainer.appendChild(li);
    }
  });
}

// Função para criar um card de item do cardápio
function criarCardItem(item) {
  const card = document.createElement('div');
  card.className = 'menu-card';
  if (item.destaque) {
    card.classList.add('item-destacado');
  }

  card.innerHTML = `
    <div class="card-image-container">
      <img src="${item.imagem}" alt="${item.nome}" class="card-image">
      <div class="card-price">${item.preco}</div>
    </div>
    <div class="card-content">
      <h3 class="card-title">${item.nome}</h3>
      <p class="card-description">${item.descricao}</p>
    </div>
  `;
  return card;
}

// Função para gerar o conteúdo de uma seção do cardápio
function gerarSecaoCardapio(categoriaId) {
  const categoriaInfo = categorias.find(cat => cat.id === categoriaId);
  if (!categoriaInfo) return null;

  let itensDaSecao = [];
  let tituloSecao = categoriaInfo.nome;

  if (categoriaId === 'destaques') {
    Object.values(cardapio).forEach(listaDeItensNaCategoria => {
      if (Array.isArray(listaDeItensNaCategoria)) {
        listaDeItensNaCategoria.forEach(item => {
          if (item.destaque) {
            itensDaSecao.push(item);
          }
        });
      }
    });
  } else {
    itensDaSecao = cardapio[categoriaId] || [];
  }

  if (itensDaSecao.length === 0) return null;

  const section = document.createElement('section');
  section.id = categoriaId;

  const h2 = document.createElement('h2');
  h2.textContent = tituloSecao;
  section.appendChild(h2);

  const gridContainer = document.createElement('div');
  gridContainer.className = 'grid-container';

  itensDaSecao.forEach(item => {
    const card = criarCardItem(item);
    gridContainer.appendChild(card);
  });

  section.appendChild(gridContainer);
  return section;
}

// Função para gerar todo o cardápio
function gerarCardapio() {
  const cardapioContainer = document.querySelector('.cardapio-digital');
  const footer = document.querySelector('footer');
  if (!cardapioContainer || !footer) return;

  const secoesAntigas = cardapioContainer.querySelectorAll('section');
  secoesAntigas.forEach(sec => sec.remove());

  categorias.forEach(categoria => {
    const secao = gerarSecaoCardapio(categoria.id);
    if (secao) {
      cardapioContainer.insertBefore(secao, footer);
    }
  });
}

// Função para atualizar o link do WhatsApp com mensagem dinâmica
function atualizarLinkWhatsapp() {
  const whatsappLink = document.getElementById('whatsapp-order-link');
  if (!whatsappLink) {
    console.warn('AVISO: Elemento do link do WhatsApp com ID "whatsapp-order-link" não foi encontrado no HTML.');
    return;
  }

  const numeroWhatsapp = "5522999964529"; // Número da lanchonete
  const agora = new Date();
  const hora = agora.getHours();
  let saudacao;

  if (hora >= 5 && hora < 12) { // Das 5:00 às 11:59
    saudacao = "Olá, bom dia!";
  } else if (hora >= 12 && hora < 18) { // Das 12:00 às 17:59
    saudacao = "Olá, boa tarde!";
  } else { // Das 18:00 às 4:59 (incluindo madrugada)
    saudacao = "Olá, boa noite!";
  }

  const mensagemBase = " Vim do cardápio digital e gostaria de fazer um pedido.";
  const mensagemCompleta = saudacao + mensagemBase;
  const mensagemUrl = encodeURIComponent(mensagemCompleta);

  whatsappLink.href = `https://wa.me/${numeroWhatsapp}?text=${mensagemUrl}`;
  console.log("Link do WhatsApp gerado e atribuído:", whatsappLink.href); // Para depuração
}

// Inicializar o cardápio quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
  gerarNavegacao();
  gerarCardapio();
  atualizarLinkWhatsapp(); // Chama a função para configurar o link do WhatsApp

  // IntersectionObserver para destacar a categoria ativa na navegação
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        document.querySelectorAll('.category-nav nav ul li a').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.cardapio-digital section[id]').forEach(section => {
    navObserver.observe(section);
  });

  // IntersectionObserver para animação dos cards ao rolar
  const cardAnimationObserverOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };

  const cardAnimationObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      } else {
        entry.target.classList.remove('is-visible');
      }
    });
  }, cardAnimationObserverOptions);

  document.querySelectorAll('.menu-card').forEach(card => {
    cardAnimationObserver.observe(card);
  });
});