// scripts/logica-cardapio.js
import { cardapio, categorias } from './cardapio.js';

const singularMap = {
  combos: 'combo',
  pizzas: 'pizza',
  hamburgueres: 'hambúrguer',
  pasteis: 'pastel',
  esfihas: 'esfiha',
  crepes: 'crepe',
  batatas: 'batata',
  bebidas: 'bebida'
};

const activeCategoryContentContainer = document.getElementById('active-category-content');
const navListElement = document.querySelector('.category-nav nav ul');

function criarTituloEstilizado(texto, tipoElemento = 'h2', classeCss = '') {
  const titulo = document.createElement(tipoElemento);
  titulo.classList.add('titulo-cardapio');
  if (classeCss) {
    titulo.classList.add(classeCss);
  }
  titulo.textContent = texto;
  return titulo;
}

function exibirCategoria(categoryId) {
  if (!activeCategoryContentContainer) {
    console.error('Container para categoria ativa não encontrado!');
    return;
  }

  activeCategoryContentContainer.innerHTML = '';
  const secao = gerarSecaoCardapio(categoryId);

  if (secao) {
    activeCategoryContentContainer.appendChild(secao);

    const navHeight = document.querySelector('.category-nav')?.offsetHeight || 80;
    let finalScrollPosition = activeCategoryContentContainer.offsetTop - navHeight - 10;

    const boasVindasElement = document.querySelector('.boas-vindas');
    if (boasVindasElement && categoryId === 'destaques') {
        const boasVindasBottom = boasVindasElement.getBoundingClientRect().bottom;
        if (boasVindasBottom > navHeight) {
            if (activeCategoryContentContainer.getBoundingClientRect().top > window.innerHeight) {
                 window.scrollTo({ top: finalScrollPosition > 0 ? finalScrollPosition : 0, behavior: 'smooth'});
            }
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

  document.querySelectorAll('.category-nav nav ul li a.active').forEach(activeLink => {
    activeLink.classList.remove('active');
  });
  const newActiveLink = document.querySelector(`.category-nav nav ul li a[data-category-id="${categoryId}"]`);
  if (newActiveLink) {
    newActiveLink.classList.add('active');
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

function gerarNavegacao() {
  if (!navListElement) return;
  navListElement.innerHTML = ''; 

  const temItensEmDestaqueGeral = Object.values(cardapio).some(categoriaData => {
    if (!categoriaData) return false;
    if (Array.isArray(categoriaData)) { // Para estruturas antigas de array direto
      return categoriaData.some(item => item.destaque);
    } else if (typeof categoriaData === 'object' && categoriaData.tipoEstrutura === 'hierarquica' && categoriaData.subsecoes) {
      return categoriaData.subsecoes.some(subsecao =>
        subsecao.grupos && subsecao.grupos.some(grupo =>
          grupo.itens && grupo.itens.some(item => item.destaque)
        )
      );
    } else if (typeof categoriaData === 'object' && categoriaData.tipoEstrutura === 'simples' && categoriaData.itens) {
      return categoriaData.itens.some(item => item.destaque);
    }
    return false;
  });

  categorias.forEach(categoria => {
    let deveExibirCategoria = false;
    if (categoria.id === 'destaques') {
      if (temItensEmDestaqueGeral) deveExibirCategoria = true;
    } else {
      const categoriaData = cardapio[categoria.id];
      if (categoriaData) {
        if (Array.isArray(categoriaData) && categoriaData.length > 0) { // Estrutura antiga de array direto
          deveExibirCategoria = true;
        } else if (typeof categoriaData === 'object' && categoriaData.tipoEstrutura === 'hierarquica' && categoriaData.subsecoes && categoriaData.subsecoes.length > 0) {
          deveExibirCategoria = categoriaData.subsecoes.some(sub => sub.grupos && sub.grupos.some(g => g.itens && g.itens.length > 0));
        } else if (typeof categoriaData === 'object' && categoriaData.tipoEstrutura === 'simples' && categoriaData.itens && categoriaData.itens.length > 0) { // MODIFICADO: Checa tipo 'simples'
          deveExibirCategoria = true;
        }
      }
    }

    if (deveExibirCategoria) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = `#${categoria.id}`;
      a.dataset.categoryId = categoria.id;
      a.innerHTML = `
        <img src="${categoria.icon || 'assets/icons/default-icon.png'}" alt="${categoria.nome}">
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

function criarCardItem(item, categoriaIdParaPastaImagens, categoriaIdAtualSendoExibida) {
  const card = document.createElement('div');
  card.className = 'menu-card item';

  const categoriaOriginal = item.originalCategoriaId || categoriaIdParaPastaImagens;
  const uniqueItemId = `${categoriaOriginal}-${item.id}`;
  
  card.dataset.itemId = uniqueItemId;
  card.dataset.itemNome = item.nome;
  card.dataset.categoriaId = categoriaOriginal;
  card.dataset.originalItemId = item.id;
  
  let precoParaCarrinho = 0;
  if (typeof item.preco === 'number') {
    precoParaCarrinho = item.preco;
  } else if (item.precos && typeof item.precos === 'object') {
    const primeiroPreco = Object.values(item.precos)[0];
    precoParaCarrinho = primeiroPreco ? primeiroPreco.valor : 0;
  }
  card.dataset.itemPreco = precoParaCarrinho;

  if (item.destaque) {
    card.classList.add('item-destacado');
    let textoSelo;
    const categoriaBaseParaSelo = item.originalCategoriaId || categoriaIdParaPastaImagens;

    if (categoriaIdAtualSendoExibida === 'destaques') {
      const nomeSingular = singularMap[categoriaBaseParaSelo] || categoriaBaseParaSelo.slice(0, -1);
      textoSelo = nomeSingular.charAt(0).toUpperCase() + nomeSingular.slice(1);
    } else {
      textoSelo = "Destaque!";
    }
    card.setAttribute('data-selo-texto', textoSelo);
  }

  let headerPriceHTML = '';
  let multiPricesHTML = '';
  let priceSeparatorHTML = '';
  if (item.precos && typeof item.precos === 'object') {
    const precos = Object.values(item.precos);
    const menorPreco = Math.min(...precos.map(p => p.valor));
    const menorPrecoFormatado = menorPreco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    headerPriceHTML = `<span class="card-price-inline">${menorPrecoFormatado}*</span>`;
    multiPricesHTML = '<div class="card-prices-multisize"><span class="price-message">* A partir de - Escolha o tamanho</span></div>';
    priceSeparatorHTML = '<hr class="price-separator">';
  } else if (typeof item.preco === 'number') {
    const precoFormatado = item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    headerPriceHTML = `<span class="card-price-inline">${precoFormatado}</span>`;
  }

  const buttonText = (item.precos && typeof item.precos === 'object') ? 'Escolher' : 'Adicionar';
  const imagemItemJpgSrc = `assets/sections/${categoriaIdParaPastaImagens}/${item.id}.jpg`;
  const imagemItemJpegSrc = `assets/sections/${categoriaIdParaPastaImagens}/${item.id}.jpeg`;
  const fallbackImageSrc = 'assets/logo-square.png';
  card.innerHTML = `
    <div class="card-image-wrapper">
      <div class="item-id-badge">${item.id}</div>
      <img
        src="${imagemItemJpgSrc}"
        alt="${item.nome}"
        class="item-image"
        onerror="
          if (this.src.endsWith('.jpg')) {
            this.src='${imagemItemJpegSrc}';
          } else {
            this.onerror=null; 
            this.src='${fallbackImageSrc}';
            this.classList.add('fallback-image');
          }
        "
      >
    </div>
    <div class="card-details">
      <div class="card-header">
        <div class="card-title-section">
          <h3 class="card-title">${item.nome}</h3>
          <p class="card-description">${item.descricao}</p>
        </div>
        <div class="card-right-section">
          ${headerPriceHTML}
          <button class="btn-add">${buttonText}</button>
        </div>
      </div>
      ${priceSeparatorHTML}
      ${multiPricesHTML}
    </div>
  `;
  return card;
}

function gerarSecaoCardapio(categoriaIdParaExibir) {
  const categoriaInfo = categorias.find(cat => cat.id === categoriaIdParaExibir);
  if (!categoriaInfo) {
    console.warn(`Informações da categoria não encontradas para o ID: ${categoriaIdParaExibir}`);
    return null;
  }

  const section = document.createElement('section');
  section.classList.add('category-content-section');
  section.id = `section-${categoriaIdParaExibir}`;

  if (categoriaInfo.imagemFundo) {
    section.classList.add('category-section-with-bg');
    section.style.backgroundImage = `url('${categoriaInfo.imagemFundo}')`;
  }

  const tituloPrincipalSecao = criarTituloEstilizado(categoriaInfo.nome, 'h2', 'titulo-categoria-principal');
  section.appendChild(tituloPrincipalSecao);

  const dadosDaCategoria = cardapio[categoriaIdParaExibir];

  if (categoriaIdParaExibir === 'destaques') {
    let destaquesEncontradosGeral = 0;
    categorias.forEach(categoriaOriginalInfo => {
      if (categoriaOriginalInfo.id === 'destaques') return;
      const dadosCategoriaOriginal = cardapio[categoriaOriginalInfo.id];
      if (!dadosCategoriaOriginal) return;

      const destaquesDestaCategoriaOriginal = [];
      if (Array.isArray(dadosCategoriaOriginal)) { // Estrutura antiga de array direto
        dadosCategoriaOriginal.forEach(item => {
          if (item.destaque) {
            destaquesDestaCategoriaOriginal.push({ ...item, originalCategoriaId: categoriaOriginalInfo.id });
          }
        });
      } else if (typeof dadosCategoriaOriginal === 'object' && dadosCategoriaOriginal.tipoEstrutura === 'hierarquica' && dadosCategoriaOriginal.subsecoes) {
        dadosCategoriaOriginal.subsecoes.forEach(subsecao => {
          if (subsecao.grupos) {
            subsecao.grupos.forEach(grupo => {
              if (grupo.itens) {
                grupo.itens.forEach(item => {
                  if (item.destaque) {
                    destaquesDestaCategoriaOriginal.push({ ...item, originalCategoriaId: categoriaOriginalInfo.id });
                  }
                });
              }
            });
          }
        });
      } else if (typeof dadosCategoriaOriginal === 'object' && dadosCategoriaOriginal.tipoEstrutura === 'simples' && dadosCategoriaOriginal.itens) { // MODIFICADO: Checa tipo 'simples' para destaques
        dadosCategoriaOriginal.itens.forEach(item => {
          if (item.destaque) {
            destaquesDestaCategoriaOriginal.push({ ...item, originalCategoriaId: categoriaOriginalInfo.id });
          }
        });
      }

      if (destaquesDestaCategoriaOriginal.length > 0) {
        destaquesEncontradosGeral++;
        const tituloSubCategoriaDestaques = criarTituloEstilizado(
          `${categoriaOriginalInfo.nome} em Destaque`,
          'h3',
          'titulo-grupo-sabor'
        );
        section.appendChild(tituloSubCategoriaDestaques);
        const gridContainer = document.createElement('div');
        gridContainer.className = 'grid-container';
        destaquesDestaCategoriaOriginal.sort((a, b) => parseInt(a.id) - parseInt(b.id));
        destaquesDestaCategoriaOriginal.forEach(itemDestaque => {
          const card = criarCardItem(itemDestaque, itemDestaque.originalCategoriaId, categoriaIdParaExibir);
          gridContainer.appendChild(card);
        });
        section.appendChild(gridContainer);
      }
    });
    if (destaquesEncontradosGeral === 0) {
        const noHighlightsMessage = document.createElement('p');
        noHighlightsMessage.textContent = 'Nenhum item em destaque no momento.';
        noHighlightsMessage.style.textAlign = 'center';
        noHighlightsMessage.style.padding = '1rem';
        if (section.classList.contains('category-section-with-bg')) {
            noHighlightsMessage.style.color = 'white';
        }
        section.appendChild(noHighlightsMessage);
    }
  } else {
    if (dadosDaCategoria && dadosDaCategoria.tipoEstrutura === 'hierarquica') {
      const temItensNaCategoria = dadosDaCategoria.subsecoes &&
                                  dadosDaCategoria.subsecoes.length > 0 &&
                                  dadosDaCategoria.subsecoes.some(s => s.grupos && s.grupos.some(g => g.itens && g.itens.length > 0));
      if (!temItensNaCategoria) {
        const noItemsMessage = document.createElement('p');
        noItemsMessage.textContent = 'Nenhum item disponível nesta categoria no momento.';
        noItemsMessage.style.textAlign = 'center';
        noItemsMessage.style.padding = '1rem';
        if (section.classList.contains('category-section-with-bg')) {
          noItemsMessage.style.color = 'white';
        }
        section.appendChild(noItemsMessage);
      } else {
        dadosDaCategoria.subsecoes.forEach(subsecao => {
          if (subsecao.grupos && subsecao.grupos.some(g => g.itens && g.itens.length > 0)) {
            if (subsecao.tituloSubsecao) {
              const tituloSub = criarTituloEstilizado(subsecao.tituloSubsecao, 'h3', 'titulo-grupo-sabor');
              section.appendChild(tituloSub);
            }
            if (subsecao.grupos) {
              subsecao.grupos.forEach(grupo => {
                if (grupo.itens && grupo.itens.length > 0) {
                  if (grupo.nomeGrupo) {
                    const tituloGrupoEl = criarTituloEstilizado(grupo.nomeGrupo, 'h4', 'titulo-variacao-sabor');
                    section.appendChild(tituloGrupoEl);
                  }
                  const gridContainer = document.createElement('div');
                  gridContainer.className = 'grid-container';
                  grupo.itens.sort((a, b) => parseInt(a.id) - parseInt(b.id));
                  grupo.itens.forEach(item => {
                    const card = criarCardItem(item, categoriaIdParaExibir, categoriaIdParaExibir);
                    gridContainer.appendChild(card);
                  });
                  section.appendChild(gridContainer);
                }
              });
            }
          }
        });
      }
    } else if (dadosDaCategoria && dadosDaCategoria.tipoEstrutura === 'simples' && Array.isArray(dadosDaCategoria.itens)) { // MODIFICADO: Processa tipo 'simples'
      if (dadosDaCategoria.itens.length === 0) {
          const noItemsMessage = document.createElement('p');
          noItemsMessage.textContent = 'Nenhum item disponível nesta categoria no momento.';
          noItemsMessage.style.textAlign = 'center';
          noItemsMessage.style.padding = '1rem';
           if (section.classList.contains('category-section-with-bg')) {
              noItemsMessage.style.color = 'white';
          }
          section.appendChild(noItemsMessage);
      } else {
          const gridContainer = document.createElement('div');
          gridContainer.className = 'grid-container';
          dadosDaCategoria.itens.sort((a, b) => parseInt(a.id) - parseInt(b.id));
          dadosDaCategoria.itens.forEach(item => {
            const card = criarCardItem(item, categoriaIdParaExibir, categoriaIdParaExibir);
            gridContainer.appendChild(card);
          });
          section.appendChild(gridContainer);
      }
    } else if (dadosDaCategoria && Array.isArray(dadosDaCategoria)) { // Fallback para estrutura antiga (array direto)
        if (dadosDaCategoria.length === 0) {
            const noItemsMessage = document.createElement('p');
            noItemsMessage.textContent = 'Nenhum item disponível nesta categoria no momento.';
            noItemsMessage.style.textAlign = 'center';
            noItemsMessage.style.padding = '1rem';
             if (section.classList.contains('category-section-with-bg')) {
                noItemsMessage.style.color = 'white';
            }
            section.appendChild(noItemsMessage);
        } else {
            const gridContainer = document.createElement('div');
            gridContainer.className = 'grid-container';
            dadosDaCategoria.sort((a, b) => parseInt(a.id) - parseInt(b.id));
            dadosDaCategoria.forEach(item => {
              const card = criarCardItem(item, categoriaIdParaExibir, categoriaIdParaExibir);
              gridContainer.appendChild(card);
            });
            section.appendChild(gridContainer);
        }
    } else if (categoriaIdParaExibir !== 'destaques') {
      const errorMessage = document.createElement('p');
      errorMessage.textContent = 'Nenhum item encontrado nesta categoria.';
      errorMessage.style.textAlign = 'center';
      errorMessage.style.padding = '1rem';
       if (section.classList.contains('category-section-with-bg')) {
          errorMessage.style.color = 'white';
      }
      section.appendChild(errorMessage);
    }
  }

  if (dadosDaCategoria && dadosDaCategoria.observacoesGerais && Array.isArray(dadosDaCategoria.observacoesGerais) && dadosDaCategoria.observacoesGerais.length > 0) {
    const observacoesContainer = document.createElement('div');
    observacoesContainer.className = 'category-observacoes';
    const tituloObservacoes = criarTituloEstilizado('Observações Gerais', 'h4', 'titulo-observacoes-categoria');
    observacoesContainer.appendChild(tituloObservacoes);
    const ul = document.createElement('ul');
    dadosDaCategoria.observacoesGerais.forEach(obsText => {
      const li = document.createElement('li');
      li.textContent = obsText;
      ul.appendChild(li);
    });
    observacoesContainer.appendChild(ul);
    section.appendChild(observacoesContainer);
  }
  return section;
}

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

  if (hora >= 5 && hora < 12) { saudacao = "Olá, bom dia!"; }
  else if (hora >= 12 && hora < 18) { saudacao = "Olá, boa tarde!"; }
  else { saudacao = "Olá, boa noite!"; }

  const mensagemCompleta = saudacao + " Vim do cardápio digital e gostaria de fazer um pedido.";
  whatsappLink.href = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagemCompleta)}`;

  const floatingButton = document.querySelector('.floating-delivery-button');
  if (floatingButton) {
    floatingButton.href = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagemCompleta)}`;
  }
}

function handleHashChange() {
    let categoriaParaExibir = 'destaques'; 

    const temItensEmDestaqueGeral = Object.values(cardapio).some(catData => {
        if (!catData) return false;
        if (Array.isArray(catData)) return catData.some(item => item.destaque);
        if (catData.tipoEstrutura === 'hierarquica' && catData.subsecoes) {
            return catData.subsecoes.some(sub => sub.grupos && sub.grupos.some(g => g.itens && g.itens.some(item => item.destaque)));
        }
        if (catData.tipoEstrutura === 'simples' && catData.itens) { // MODIFICADO: Checa destaques em tipo 'simples'
            return catData.itens.some(item => item.destaque);
        }
        return false;
    });

    if (window.location.hash) {
        const hashCategory = window.location.hash.substring(1);
        const categoriaValidaNoHash = categorias.find(cat => cat.id === hashCategory);
        let temItensNaCategoriaDoHash = false;

        if (categoriaValidaNoHash) {
            if (hashCategory === 'destaques') {
                temItensNaCategoriaDoHash = temItensEmDestaqueGeral;
            } else {
                const dadosCatHash = cardapio[hashCategory];
                if (dadosCatHash) {
                    if (Array.isArray(dadosCatHash) && dadosCatHash.length > 0) {
                        temItensNaCategoriaDoHash = true;
                    } else if (typeof dadosCatHash === 'object' && dadosCatHash.tipoEstrutura === 'hierarquica' && dadosCatHash.subsecoes) {
                        temItensNaCategoriaDoHash = dadosCatHash.subsecoes.some(sub => sub.grupos && sub.grupos.some(g => g.itens && g.itens.length > 0));
                    } else if (typeof dadosCatHash === 'object' && dadosCatHash.tipoEstrutura === 'simples' && dadosCatHash.itens && dadosCatHash.itens.length > 0) { // MODIFICADO: Checa itens em tipo 'simples'
                        temItensNaCategoriaDoHash = true;
                    }
                }
            }
            if (temItensNaCategoriaDoHash) {
                categoriaParaExibir = hashCategory;
            }
        }
    }
    
    if (categoriaParaExibir === 'destaques' && !temItensEmDestaqueGeral) {
        const primeiraCategoriaDisponivel = categorias.find(cat =>
            cat.id !== 'destaques' &&
            cardapio[cat.id] &&
            (
                (Array.isArray(cardapio[cat.id]) && cardapio[cat.id].length > 0) ||
                (cardapio[cat.id].tipoEstrutura === 'hierarquica' &&
                 cardapio[cat.id].subsecoes &&
                 cardapio[cat.id].subsecoes.some(s => s.grupos && s.grupos.some(g => g.itens && g.itens.length > 0))) ||
                (cardapio[cat.id].tipoEstrutura === 'simples' && // MODIFICADO: Checa itens em tipo 'simples' para fallback
                 cardapio[cat.id].itens &&
                 cardapio[cat.id].itens.length > 0) 
            )
        );
        if (primeiraCategoriaDisponivel) {
            categoriaParaExibir = primeiraCategoriaDisponivel.id;
            if (window.location.hash || window.location.pathname.endsWith('/')) { 
                 if (history.replaceState) {
                    history.replaceState(null, null, `#${categoriaParaExibir}`);
                } else {
                    location.hash = `#${categoriaParaExibir}`;
                }
            }
        } else {
             categoriaParaExibir = categorias.find(c => c.id !== 'destaques')?.id || (categorias.length > 0 ? categorias[0].id : 'destaques');
        }
    }
    exibirCategoria(categoriaParaExibir);
}

document.addEventListener('DOMContentLoaded', () => {
  gerarNavegacao();
  handleHashChange();
  atualizarLinkWhatsapp();
  window.addEventListener('hashchange', handleHashChange);
});
