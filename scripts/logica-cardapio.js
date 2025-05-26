// scripts/logica-cardapio.js
import { cardapio, categorias } from './cardapio.js';

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

const activeCategoryContentContainer = document.getElementById('active-category-content');
const navListElement = document.querySelector('.category-nav nav ul');

// Função para exibir a categoria selecionada
function exibirCategoria(categoryId) {
  if (!activeCategoryContentContainer) {
    console.error('Container para categoria ativa não encontrado!');
    return;
  }

  activeCategoryContentContainer.innerHTML = ''; // Limpa o conteúdo anterior
  const secao = gerarSecaoCardapio(categoryId); // Gera o HTML da nova seção

  if (secao) {
    activeCategoryContentContainer.appendChild(secao);
    
    // Rolar a página para que o topo do conteúdo da categoria fique visível abaixo da navegação sticky
    const navHeight = document.querySelector('.category-nav')?.offsetHeight || 80;
    let finalScrollPosition = activeCategoryContentContainer.offsetTop - navHeight - 10; // 10px de margem para respiro

    // Evitar scroll para posições "estranhas" se a seção de boas-vindas for maior que a viewport + nav
    const boasVindasElement = document.querySelector('.boas-vindas');
    if (boasVindasElement && categoryId === 'destaques') {
        // Se a seção de boas-vindas ainda estiver ocupando a maior parte da tela, não forçar um scroll drástico
        // Esta lógica pode precisar de ajuste fino dependendo do comportamento desejado ao carregar "Destaques"
        const boasVindasBottom = boasVindasElement.getBoundingClientRect().bottom;
        if (boasVindasBottom > navHeight) { // Se o fim da boas-vindas está abaixo da nav
            // Não rola, ou rola apenas se o conteúdo dos destaques estiver fora da vista
            if (activeCategoryContentContainer.getBoundingClientRect().top > window.innerHeight) {
                 window.scrollTo({ top: finalScrollPosition > 0 ? finalScrollPosition : 0, behavior: 'smooth'});
            }
            // Caso contrário, o usuário provavelmente já está vendo o topo da seção de destaques.
        } else {
            window.scrollTo({ top: finalScrollPosition > 0 ? finalScrollPosition : 0, behavior: 'smooth'});
        }
    } else {
         window.scrollTo({ top: finalScrollPosition > 0 ? finalScrollPosition : 0, behavior: 'smooth'});
    }


  } else {
    activeCategoryContentContainer.innerHTML = '<p style="text-align:center; padding: 2rem;">Categoria não encontrada ou vazia.</p>';
    console.warn(`Seção para categoria "${categoryId}" não pôde ser gerada.`);
  }

  // Atualiza a classe 'active' nos links da navegação
  document.querySelectorAll('.category-nav nav ul li a.active').forEach(activeLink => {
    activeLink.classList.remove('active');
  });
  const newActiveLink = document.querySelector(`.category-nav nav ul li a[data-category-id="${categoryId}"]`);
  if (newActiveLink) {
    newActiveLink.classList.add('active');

    // Scroll da barra de navegação horizontal para o item ativo, se necessário
    if (navListElement && newActiveLink.parentElement) {
        const navRect = navListElement.getBoundingClientRect();
        const itemRect = newActiveLink.parentElement.getBoundingClientRect();
        
        const scrollLeftTarget = newActiveLink.parentElement.offsetLeft - 
                                 navListElement.offsetLeft - 
                                 (navRect.width / 2) + 
                                 (itemRect.width / 2);

        navListElement.scrollTo({
            left: scrollLeftTarget,
            behavior: 'smooth'
        });
    }
  }
}

// Função para gerar o menu de navegação de categorias
function gerarNavegacao() {
  if (!navListElement) return;
  navListElement.innerHTML = '';

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
      const a = document.createElement('a');
      a.href = `#${categoria.id}`; 
      a.dataset.categoryId = categoria.id; 
      a.innerHTML = `
        <img src="${categoria.icon || 'assets/icons/burguer.png'}" alt="${categoria.nome}">
        <span class="nav-span">${categoria.nome}</span>
      `;
      
      a.addEventListener('click', (event) => {
        event.preventDefault(); 
        const categoryIdToDisplay = a.dataset.categoryId;
        exibirCategoria(categoryIdToDisplay);
        
        if (history.pushState) {
            history.pushState(null, null, `#${categoryIdToDisplay}`);
        } else {
            location.hash = `#${categoryIdToDisplay}`;
        }
      });
      li.appendChild(a);
      navListElement.appendChild(li);
    }
  });
}

// Função para criar um card de item do cardápio (ADICIONADA NUMERAÇÃO)
function criarCardItem(item, categoriaOriginalId) {
  const card = document.createElement('div');
  card.className = 'menu-card';
  if (item.destaque) {
    card.classList.add('item-destacado');
  }
  const precoFormatado = item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const nomeSingularCategoria = singularMap[categoriaOriginalId] || categoriaOriginalId.slice(0, -1);
  const imagemItemSrc = `assets/sections/${categoriaOriginalId}/${nomeSingularCategoria}-${item.id}.jpg`; 
  const fallbackImageSrc = 'assets/logo-square.png';

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
        <div class="item-identifier">
          <span class="item-id-number">${item.id}.</span>
          <h3 class="card-title">${item.nome}</h3>
        </div>
        <span class="card-price-inline">${precoFormatado}</span>
      </div>
      <p class="card-description">${item.descricao}</p>
    </div>
  `;
  return card;
}

// Função para gerar o HTML de uma única seção do cardápio (ORDENAÇÃO MODIFICADA)
function gerarSecaoCardapio(categoriaIdParaExibir) {
  const categoriaInfo = categorias.find(cat => cat.id === categoriaIdParaExibir);
  if (!categoriaInfo) return null;

  const section = document.createElement('section');
  section.classList.add('category-content-section'); 

  // Aplica a imagem de fundo se estiver definida no objeto da categoria (incluindo destaques)
  if (categoriaInfo.imagemFundo) { 
    section.classList.add('category-section-with-bg');
    section.style.backgroundImage = `url('${categoriaInfo.imagemFundo}')`;
  }

  const h2 = document.createElement('h2');
  h2.textContent = categoriaInfo.nome;
  section.appendChild(h2);

  const gridContainer = document.createElement('div');
  gridContainer.className = 'grid-container';

  if (categoriaIdParaExibir === 'destaques') {
    let destaquesEncontrados = 0;
    // Coleta todos os itens de destaque e depois os ordena se necessário
    const todosOsDestaques = [];
    Object.entries(cardapio).forEach(([originalCategoriaId, itensDaCategoria]) => {
      if (Array.isArray(itensDaCategoria) && categorias.find(c => c.id === originalCategoriaId)) {
        itensDaCategoria.forEach(item => {
          if (item.destaque) {
            // Adiciona o item e sua categoria original para possível ordenação posterior
            todosOsDestaques.push({ ...item, originalCategoriaId }); 
          }
        });
      }
    });

    // Ordena os destaques (opcional, exemplo: por nome ou ID original)
    // todosOsDestaques.sort((a,b) => a.nome.localeCompare(b.nome)); // Exemplo por nome
    // todosOsDestaques.sort((a,b) => parseInt(a.id) - parseInt(b.id)); // Exemplo por ID original

    todosOsDestaques.forEach(itemDestaque => {
        const card = criarCardItem(itemDestaque, itemDestaque.originalCategoriaId);
        gridContainer.appendChild(card);
        destaquesEncontrados++;
    });
    
    if (destaquesEncontrados === 0) {
        const noHighlightsMessage = document.createElement('p');
        noHighlightsMessage.textContent = 'Nenhum item em destaque no momento.';
        noHighlightsMessage.style.textAlign = 'center';
        noHighlightsMessage.style.padding = '1rem';
        if (section.classList.contains('category-section-with-bg')) {
            noHighlightsMessage.style.color = 'white'; 
        }
        gridContainer.appendChild(noHighlightsMessage);
    }
  } else {
    const itensDaSecao = cardapio[categoriaIdParaExibir] || [];
    if (itensDaSecao.length === 0) {
        const noItemsMessage = document.createElement('p');
        noItemsMessage.textContent = 'Nenhum item disponível nesta categoria no momento.';
        noItemsMessage.style.textAlign = 'center';
        noItemsMessage.style.padding = '1rem';
         if (section.classList.contains('category-section-with-bg')) {
            noItemsMessage.style.color = 'white';
        }
        gridContainer.appendChild(noItemsMessage);
    } else {
        // MODIFICADO: Ordena os itens apenas pelo ID.
        itensDaSecao.sort((a, b) => parseInt(a.id) - parseInt(b.id)); // Garante ordenação numérica

        itensDaSecao.forEach(item => {
          const card = criarCardItem(item, categoriaIdParaExibir);
          gridContainer.appendChild(card);
        });
    }
  }
  section.appendChild(gridContainer);
  return section;
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
  
  let categoriaInicial = 'destaques';
  if (window.location.hash) {
    const hashCategory = window.location.hash.substring(1); 
    // Verifica se a categoria do hash existe no array de categorias
    const categoriaValidaNoHash = categorias.find(cat => cat.id === hashCategory);
    // E verifica se essa categoria (se não for 'destaques') tem itens ou se é 'destaques' e há destaques globais
    const temItensNaCategoriaDoHash = cardapio[hashCategory] && cardapio[hashCategory].length > 0;
    const temDestaquesGlobais = Object.values(cardapio).flat().some(item => item.destaque);

    if (categoriaValidaNoHash && (hashCategory === 'destaques' ? temDestaquesGlobais : temItensNaCategoriaDoHash) ) {
      categoriaInicial = hashCategory;
    }
  }
  
  exibirCategoria(categoriaInicial); 
  atualizarLinkWhatsapp();
});