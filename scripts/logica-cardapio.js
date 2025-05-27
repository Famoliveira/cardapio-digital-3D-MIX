// scripts/logica-cardapio.js
import { cardapio, categorias } from './cardapio.js'; //

const singularMap = {
  combos: 'combo',
  pizzas: 'pizza',
  lanches: 'lanche',
  pasteis: 'pastel',
  esfihas: 'esfiha',
  crepes: 'crepe',
  batatas: 'batata',
  bebidas: 'bebida'
}; //

const activeCategoryContentContainer = document.getElementById('active-category-content'); //
const navListElement = document.querySelector('.category-nav nav ul'); //

// Função para exibir a categoria selecionada
function exibirCategoria(categoryId) {
  if (!activeCategoryContentContainer) {
    console.error('Container para categoria ativa não encontrado!');
    return;
  } //

  activeCategoryContentContainer.innerHTML = ''; // Limpa o conteúdo anterior //
  const secao = gerarSecaoCardapio(categoryId); // Gera o HTML da nova seção //

  if (secao) {
    activeCategoryContentContainer.appendChild(secao); //
    
    const navHeight = document.querySelector('.category-nav')?.offsetHeight || 80; //
    let finalScrollPosition = activeCategoryContentContainer.offsetTop - navHeight - 10;  //

    const boasVindasElement = document.querySelector('.boas-vindas'); //
    if (boasVindasElement && categoryId === 'destaques') {
        const boasVindasBottom = boasVindasElement.getBoundingClientRect().bottom; //
        if (boasVindasBottom > navHeight) { 
            if (activeCategoryContentContainer.getBoundingClientRect().top > window.innerHeight) {
                 window.scrollTo({ top: finalScrollPosition > 0 ? finalScrollPosition : 0, behavior: 'smooth'}); //
            }
        } else {
            window.scrollTo({ top: finalScrollPosition > 0 ? finalScrollPosition : 0, behavior: 'smooth'}); //
        }
    } else {
         window.scrollTo({ top: finalScrollPosition > 0 ? finalScrollPosition : 0, behavior: 'smooth'}); //
    }

  } else {
    activeCategoryContentContainer.innerHTML = '<p style="text-align:center; padding: 2rem;">Categoria não encontrada ou vazia.</p>'; //
    console.warn(`Seção para categoria "${categoryId}" não pôde ser gerada.`); //
  }

  document.querySelectorAll('.category-nav nav ul li a.active').forEach(activeLink => {
    activeLink.classList.remove('active'); //
  });
  const newActiveLink = document.querySelector(`.category-nav nav ul li a[data-category-id="${categoryId}"]`); //
  if (newActiveLink) {
    newActiveLink.classList.add('active'); //

    if (navListElement && newActiveLink.parentElement) {
        const navRect = navListElement.getBoundingClientRect(); //
        const itemRect = newActiveLink.parentElement.getBoundingClientRect(); //
        
        const scrollLeftTarget = newActiveLink.parentElement.offsetLeft - 
                                 navListElement.offsetLeft - 
                                 (navRect.width / 2) + 
                                 (itemRect.width / 2); //

        navListElement.scrollTo({
            left: scrollLeftTarget,
            behavior: 'smooth'
        }); //
    }
  }
}

function gerarNavegacao() {
  if (!navListElement) return; //
  navListElement.innerHTML = ''; //

  const temItensEmDestaqueGeral = Object.values(cardapio).flat().some(item => item.destaque); //

  categorias.forEach(categoria => {
    let deveExibirCategoria = false; //
    if (categoria.id === 'destaques') {
      if (temItensEmDestaqueGeral) deveExibirCategoria = true; //
    } else {
      if (cardapio[categoria.id] && cardapio[categoria.id].length > 0) deveExibirCategoria = true; //
    }

    if (deveExibirCategoria) {
      const li = document.createElement('li'); //
      const a = document.createElement('a'); //
      a.href = `#${categoria.id}`;  //
      a.dataset.categoryId = categoria.id;  //
      a.innerHTML = `
        <img src="${categoria.icon || 'assets/icons/burguer.png'}" alt="${categoria.nome}">
        <span class="nav-span">${categoria.nome}</span>
      `; //
      
      a.addEventListener('click', (event) => {
        event.preventDefault();  //
        const categoryIdToDisplay = a.dataset.categoryId; //
        exibirCategoria(categoryIdToDisplay); //
        
        if (history.pushState) {
            history.pushState(null, null, `#${categoryIdToDisplay}`); //
        } else {
            location.hash = `#${categoryIdToDisplay}`; //
        }
      });
      li.appendChild(a); //
      navListElement.appendChild(li); //
    }
  });
}

// Função para criar um card de item do cardápio
function criarCardItem(item, categoriaOriginalId, categoriaIdAtualSendoExibida) {
  const card = document.createElement('div'); //
  card.className = 'menu-card'; //

  if (item.destaque) {
    card.classList.add('item-destacado'); //
    let textoSelo; //
    
    if (categoriaIdAtualSendoExibida === 'destaques') {
      // Na seção 'Destaques', mostrar nome da categoria original (singular, capitalizado, SEM '!')
      const nomeSingular = singularMap[item.originalCategoriaId] || item.originalCategoriaId.slice(0, -1); //
      textoSelo = nomeSingular.charAt(0).toUpperCase() + nomeSingular.slice(1);  //
    } else {
      // Em outras seções, se o item for destaque, mostrar "Destaque!" (COM '!')
      textoSelo = "Destaque!"; //
    }
    card.setAttribute('data-selo-texto', textoSelo); //
  }

  const precoFormatado = item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); //
  const nomeSingularCategoria = singularMap[categoriaOriginalId] || categoriaOriginalId.slice(0, -1); //
  const imagemItemSrc = `assets/sections/${categoriaOriginalId}/${nomeSingularCategoria}-${item.id}.jpg`;  //
  const fallbackImageSrc = 'assets/logo-square.png'; //

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
  `; //
  return card; //
}

// Função para gerar o HTML de uma única seção do cardápio
function gerarSecaoCardapio(categoriaIdParaExibir) {
  const categoriaInfo = categorias.find(cat => cat.id === categoriaIdParaExibir); //
  if (!categoriaInfo) return null; //

  const section = document.createElement('section'); //
  section.classList.add('category-content-section');  //

  if (categoriaInfo.imagemFundo) { 
    section.classList.add('category-section-with-bg'); //
    section.style.backgroundImage = `url('${categoriaInfo.imagemFundo}')`; //
  }

  const h2 = document.createElement('h2'); //
  h2.textContent = categoriaInfo.nome; //
  section.appendChild(h2); //

  const gridContainer = document.createElement('div'); //
  gridContainer.className = 'grid-container'; //

  if (categoriaIdParaExibir === 'destaques') {
    let destaquesEncontrados = 0; //
    const todosOsDestaques = []; //
    Object.entries(cardapio).forEach(([originalCategoriaId, itensDaCategoria]) => {
      if (Array.isArray(itensDaCategoria) && categorias.find(c => c.id === originalCategoriaId)) { //
        itensDaCategoria.forEach(item => {
          if (item.destaque) {
            todosOsDestaques.push({ ...item, originalCategoriaId });  //
          }
        });
      }
    });

    todosOsDestaques.forEach(itemDestaque => {
        const card = criarCardItem(itemDestaque, itemDestaque.originalCategoriaId, categoriaIdParaExibir);  //
        gridContainer.appendChild(card); //
        destaquesEncontrados++; //
    });
    
    if (destaquesEncontrados === 0) {
        const noHighlightsMessage = document.createElement('p'); //
        noHighlightsMessage.textContent = 'Nenhum item em destaque no momento.'; //
        noHighlightsMessage.style.textAlign = 'center'; //
        noHighlightsMessage.style.padding = '1rem'; //
        if (section.classList.contains('category-section-with-bg')) {
            noHighlightsMessage.style.color = 'white';  //
        }
        gridContainer.appendChild(noHighlightsMessage); //
    }
  } else {
    const itensDaSecao = cardapio[categoriaIdParaExibir] || []; //
    if (itensDaSecao.length === 0) {
        const noItemsMessage = document.createElement('p'); //
        noItemsMessage.textContent = 'Nenhum item disponível nesta categoria no momento.'; //
        noItemsMessage.style.textAlign = 'center'; //
        noItemsMessage.style.padding = '1rem'; //
         if (section.classList.contains('category-section-with-bg')) {
            noItemsMessage.style.color = 'white'; //
        }
        gridContainer.appendChild(noItemsMessage); //
    } else {
        // NOVA LÓGICA DE ORDENAÇÃO AQUI:
        itensDaSecao.sort((a, b) => {
          // Se 'a' é destaque e 'b' não é, 'a' vem primeiro
          if (a.destaque && !b.destaque) return -1;
          // Se 'b' é destaque e 'a' não é, 'b' vem primeiro
          if (!a.destaque && b.destaque) return 1;
          // Se ambos são destaques ou ambos não são, ordena pelo id
          return parseInt(a.id) - parseInt(b.id); //
        });

        itensDaSecao.forEach(item => {
          const card = criarCardItem(item, categoriaIdParaExibir, categoriaIdParaExibir); //
          gridContainer.appendChild(card); //
        });
    }
  }
  section.appendChild(gridContainer); //
  return section; //
}

function atualizarLinkWhatsapp() {
  const whatsappLink = document.getElementById('whatsapp-order-link'); //
  if (!whatsappLink) {
    console.warn('AVISO: Elemento do link do WhatsApp com ID "whatsapp-order-link" não foi encontrado no HTML.'); //
    return;
  }
  const numeroWhatsapp = "5522999964529"; //
  const agora = new Date(); //
  const hora = agora.getHours(); //
  let saudacao; //
  if (hora >= 5 && hora < 12) saudacao = "Olá, bom dia!"; //
  else if (hora >= 12 && hora < 18) saudacao = "Olá, boa tarde!"; //
  else saudacao = "Olá, boa noite!"; //
  const mensagemCompleta = saudacao + " Vim do cardápio digital e gostaria de fazer um pedido."; //
  whatsappLink.href = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagemCompleta)}`; //
}

document.addEventListener('DOMContentLoaded', () => {
  gerarNavegacao();  //
  
  let categoriaInicial = 'destaques'; //
  if (window.location.hash) {
    const hashCategory = window.location.hash.substring(1);  //
    const categoriaValidaNoHash = categorias.find(cat => cat.id === hashCategory); //
    const temItensNaCategoriaDoHash = cardapio[hashCategory] && cardapio[hashCategory].length > 0; //
    const temDestaquesGlobais = Object.values(cardapio).flat().some(item => item.destaque); //

    if (categoriaValidaNoHash && (hashCategory === 'destaques' ? temDestaquesGlobais : temItensNaCategoriaDoHash) ) { //
      categoriaInicial = hashCategory; //
    }
  }
  
  exibirCategoria(categoriaInicial);  //
  atualizarLinkWhatsapp(); //
});