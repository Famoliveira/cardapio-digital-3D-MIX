// scripts/logica-cardapio.js
import { cardapio, categorias } from './cardapio.js';

// Mapa para ajudar a obter o nome singular da categoria para o caminho da imagem
const singularMap = {
  combos: 'combo',
  pizzas: 'pizza',
  lanches: 'lanche',
  pasteis: 'pastel',
  esfihas: 'esfiha',
  crepes: 'crepe',
  batatas: 'batata',
  bebidas: 'bebida'
};

// Função para gerar o menu de navegação de categorias
function gerarNavegacao() {
  const navContainer = document.querySelector('.category-nav nav ul');
  if (!navContainer) return;
  navContainer.innerHTML = '';

  const temItensEmDestaqueGeral = Object.values(cardapio).flat().some(item => item.destaque);

  categorias.forEach(categoria => {
    let deveExibirCategoria = false;
    if (categoria.id === 'destaques') {
      if (temItensEmDestaqueGeral) deveExibirCategoria = true;
    } else {
      if (cardapio[categoria.id] && cardapio[categoria.id].length > 0) deveExibirCategoria = true;
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

// Função para criar um card de item do cardápio (MODIFICADA PARA INCLUIR IMAGEM)
function criarCardItem(item, categoriaOriginalId) {
  const card = document.createElement('div');
  card.className = 'menu-card';
  if (item.destaque) {
    card.classList.add('item-destacado');
  }

  const precoFormatado = item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  // Determina o caminho da imagem do item
  const nomeSingularCategoria = singularMap[categoriaOriginalId] || categoriaOriginalId.slice(0, -1); // Fallback simples
  const imagemItemSrc = `assets/sections/${categoriaOriginalId}/${nomeSingularCategoria}-${item.id}.jpg`;
  const fallbackImageSrc = 'assets/logo-square.png'; // Imagem padrão

  card.innerHTML = `
    <div class="card-image-wrapper">
      <img 
        src="${imagemItemSrc}" 
        alt="${item.nome}" 
        class="item-image" 
        onerror="this.onerror=null; this.src='${fallbackImageSrc}'; this.classList.add('fallback-image');"
      >
    </div>
    <div class="card-details">
      <div class="card-header">
        <h3 class="card-title">${item.nome}</h3>
        <span class="card-price-inline">${precoFormatado}</span>
      </div>
      <p class="card-description">${item.descricao}</p>
    </div>
  `;
  return card;
}

// Função para gerar o conteúdo de uma seção do cardápio (AJUSTADA)
function gerarSecaoCardapio(categoriaIdParaExibir) {
  const categoriaInfo = categorias.find(cat => cat.id === categoriaIdParaExibir);
  if (!categoriaInfo) return null;

  const section = document.createElement('section');
  section.id = categoriaIdParaExibir;

  if (categoriaIdParaExibir !== 'destaques' && categoriaInfo.imagemFundo) {
    section.classList.add('category-section-with-bg');
    section.style.backgroundImage = `url('${categoriaInfo.imagemFundo}')`;
  }

  const h2 = document.createElement('h2');
  h2.textContent = categoriaInfo.nome;
  section.appendChild(h2);

  const gridContainer = document.createElement('div');
  gridContainer.className = 'grid-container';

  if (categoriaIdParaExibir === 'destaques') {
    Object.entries(cardapio).forEach(([originalCategoriaId, itensDaCategoria]) => {
      if (Array.isArray(itensDaCategoria) && categorias.find(c => c.id === originalCategoriaId)) { // Garante que a categoria original existe
        itensDaCategoria.forEach(item => {
          if (item.destaque) {
            // Passa o ID da categoria original do item para criarCardItem
            const card = criarCardItem(item, originalCategoriaId);
            gridContainer.appendChild(card);
          }
        });
      }
    });
    if (gridContainer.children.length === 0) return null;
  } else {
    const itensDaSecao = cardapio[categoriaIdParaExibir] || [];
    if (itensDaSecao.length === 0) return null;

    itensDaSecao.sort((a, b) => {
      if (a.destaque && !b.destaque) return -1;
      if (!a.destaque && b.destaque) return 1;
      return a.id - b.id; // Supondo que ID é numérico para ordenação
    });

    itensDaSecao.forEach(item => {
      // Passa o ID da categoria atual (que é a original neste caso)
      const card = criarCardItem(item, categoriaIdParaExibir);
      gridContainer.appendChild(card);
    });
  }

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

// Função para atualizar o link do WhatsApp
function atualizarLinkWhatsapp() {
  const whatsappLink = document.getElementById('whatsapp-order-link');
  if (!whatsappLink) {
    console.warn('AVISO: Elemento do link do WhatsApp com ID "whatsapp-order-link" não foi encontrado no HTML.');
    return;
  }
  const numeroWhatsapp = "5522999964529";
  const agora = new Date();
  const hora = agora.getHours();
  let saudacao;
  if (hora >= 5 && hora < 12) saudacao = "Olá, bom dia!";
  else if (hora >= 12 && hora < 18) saudacao = "Olá, boa tarde!";
  else saudacao = "Olá, boa noite!";
  const mensagemCompleta = saudacao + " Vim do cardápio digital e gostaria de fazer um pedido.";
  whatsappLink.href = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagemCompleta)}`;
}

// Inicializar o cardápio quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
  gerarNavegacao();
  gerarCardapio();
  atualizarLinkWhatsapp();

  const setupNavObserver = () => {
    const sections = document.querySelectorAll('.cardapio-digital section[id]');
    const navElement = document.querySelector('.category-nav nav ul');

    if (sections.length === 0 || !navElement) return;

    let activeSectionId = null;
    const navHeight = document.querySelector('.category-nav')?.offsetHeight || 80;

    const observerOptions = {
      root: null,
      rootMargin: `-${navHeight + 5}px 0px -55% 0px`, // Adicionado +5px de folga
      threshold: 0.01
    };

    const navObserver = new IntersectionObserver((entries) => {
      let currentVisibleSections = [];
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          currentVisibleSections.push(entry);
        }
      });

      if (currentVisibleSections.length > 0) {
        currentVisibleSections.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        const newActiveSectionId = currentVisibleSections[0].target.id;

        if (activeSectionId !== newActiveSectionId) {
          if (activeSectionId) {
            const oldActiveLink = document.querySelector(`.category-nav nav ul li a[href="#${activeSectionId}"]`);
            if (oldActiveLink) oldActiveLink.classList.remove('active');
          }

          const newActiveLink = document.querySelector(`.category-nav nav ul li a[href="#${newActiveSectionId}"]`);
          if (newActiveLink) {
            newActiveLink.classList.add('active');
            activeSectionId = newActiveSectionId;

            const listItem = newActiveLink.parentElement;
            if (listItem) {
              const navRect = navElement.getBoundingClientRect();
              const itemRect = listItem.getBoundingClientRect();
              const scrollLeftTarget = listItem.offsetLeft - navElement.offsetLeft - (navRect.width / 2) + (itemRect.width / 2);
              navElement.scrollTo({ left: scrollLeftTarget, behavior: 'smooth' });
            }
          }
        }
      }
    }, observerOptions);

    sections.forEach(section => navObserver.observe(section));
  };
  
  setupNavObserver();
});