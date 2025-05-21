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
      if (temItensEmDestaqueGeral) {
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
// Recebe o item e o ID da sua categoria original para gerar o caminho da imagem
function criarCardItem(item, itemOriginalCategoriaId) {
  const card = document.createElement('div');
  card.className = 'menu-card';
  if (item.destaque) {
    card.classList.add('item-destacado');
  }

  // Gera o caminho da imagem dinamicamente
  const nomeSingularCategoria = singularMap[itemOriginalCategoriaId] || itemOriginalCategoriaId.slice(0, -1); // Tenta remover 's' como fallback
  const imagemSrc = `assets/sections/${itemOriginalCategoriaId}/${nomeSingularCategoria}-${item.id}.jpg`;

  // Formata o preço para o padrão brasileiro (R$ X,XX)
  const precoFormatado = item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  card.innerHTML = `
    <div class="card-image-container">
      <img src="${imagemSrc}" alt="${item.nome}" class="card-image">
      <div class="card-price">${precoFormatado}</div>
    </div>
    <div class="card-content">
      <h3 class="card-title">${item.nome}</h3>
      <p class="card-description">${item.descricao}</p>
    </div>
  `;
  return card;
}

// Função para gerar o conteúdo de uma seção do cardápio
function gerarSecaoCardapio(categoriaIdParaExibir) {
  const categoriaInfo = categorias.find(cat => cat.id === categoriaIdParaExibir);
  if (!categoriaInfo) return null;

  const section = document.createElement('section');
  section.id = categoriaIdParaExibir;

  const h2 = document.createElement('h2');
  h2.textContent = categoriaInfo.nome;
  section.appendChild(h2);

  const gridContainer = document.createElement('div');
  gridContainer.className = 'grid-container';

  if (categoriaIdParaExibir === 'destaques') {
    const itensDestaqueGlobais = [];
    Object.entries(cardapio).forEach(([originalCategoriaId, itensDaCategoria]) => {
      if (Array.isArray(itensDaCategoria)) {
        itensDaCategoria.forEach(item => {
          if (item.destaque) {
            // Passamos o originalCategoriaId para o criarCardItem
            const card = criarCardItem(item, originalCategoriaId);
            gridContainer.appendChild(card);
            // Adiciona à lista se precisar ordenar ou processar depois, mas já cria o card aqui
            // itensDestaqueGlobais.push({ ...item, originalCategoriaId });
          }
        });
      }
    });
    // Se precisar ordenar os destaques, faria aqui antes de adicionar ao gridContainer
    // Por exemplo, se os cards fossem criados após a ordenação:
    // itensDestaqueGlobais.sort((a, b) => a.nome.localeCompare(b.nome)); // Exemplo de ordenação
    // itensDestaqueGlobais.forEach(itemComCatId => {
    //   const card = criarCardItem(itemComCatId, itemComCatId.originalCategoriaId);
    //   gridContainer.appendChild(card);
    // });

    if (gridContainer.children.length === 0) return null; // Não cria seção de destaques se vazia

  } else {
    const itensDaSecao = cardapio[categoriaIdParaExibir] || [];
    if (itensDaSecao.length === 0) return null; // Não cria seção se não tiver itens

    // Ordena os itens: destacados primeiro, depois por ID.
    itensDaSecao.sort((a, b) => {
      if (a.destaque && !b.destaque) return -1;
      if (!a.destaque && b.destaque) return 1;
      return a.id - b.id;
    });

    itensDaSecao.forEach(item => {
      // Passa o categoriaIdParaExibir que é o ID da categoria atual
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

  if (hora >= 5 && hora < 12) {
    saudacao = "Olá, bom dia!";
  } else if (hora >= 12 && hora < 18) {
    saudacao = "Olá, boa tarde!";
  } else {
    saudacao = "Olá, boa noite!";
  }

  const mensagemBase = " Vim do cardápio digital e gostaria de fazer um pedido.";
  const mensagemCompleta = saudacao + mensagemBase;
  const mensagemUrl = encodeURIComponent(mensagemCompleta);

  whatsappLink.href = `https://wa.me/${numeroWhatsapp}?text=${mensagemUrl}`;
}

// Inicializar o cardápio quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
  gerarNavegacao();
  gerarCardapio();
  atualizarLinkWhatsapp();

  const setupNavObserver = () => {
    const sections = document.querySelectorAll('.cardapio-digital section[id]');
    if (sections.length === 0) return;

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
    }, { threshold: 0.2, rootMargin: "-70px 0px -40% 0px" });

    sections.forEach(section => {
      navObserver.observe(section);
    });
  };
  
  setupNavObserver();
});