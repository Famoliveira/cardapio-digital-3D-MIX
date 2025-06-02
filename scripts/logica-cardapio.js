// scripts/logica-cardapio.js
import { cardapio, categorias } from './cardapio.js';

const singularMap = {
  combos: 'combo',
  pizzas: 'pizza',
  hamburgueres: 'hambúrguer', // Chave em minúsculas, valor para selo
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
            // Se a seção de boas vindas estiver visível abaixo da navegação
            // E o conteúdo da categoria ativa estiver fora da tela (abaixo)
            if (activeCategoryContentContainer.getBoundingClientRect().top > window.innerHeight) {
                 window.scrollTo({ top: finalScrollPosition > 0 ? finalScrollPosition : 0, behavior: 'smooth'});
            }
            // Se o conteúdo já estiver visível ou parcialmente visível, não rola,
            // a menos que a rolagem seja para cima (finalScrollPosition pode ser negativo ou pequeno)
            // A condição original de apenas rolar se finalScrollPosition > 0 já cobre isso.
        } else {
            // Se a seção de boas vindas não estiver obstruindo a visão do início do conteúdo
            window.scrollTo({ top: finalScrollPosition > 0 ? finalScrollPosition : 0, behavior: 'smooth'});
        }
    } else {
         // Para outras categorias ou se boasVindasElement não existir
         window.scrollTo({ top: finalScrollPosition > 0 ? finalScrollPosition : 0, behavior: 'smooth'});
    }

  } else {
    activeCategoryContentContainer.innerHTML = '<p style="text-align:center; padding: 2rem;">Categoria não encontrada ou vazia.</p>';
    console.warn(`Seção para categoria "${categoryId}" não pôde ser gerada.`);
  }

  // Atualiza o link ativo na navegação
  document.querySelectorAll('.category-nav nav ul li a.active').forEach(activeLink => {
    activeLink.classList.remove('active');
  });
  const newActiveLink = document.querySelector(`.category-nav nav ul li a[data-category-id="${categoryId}"]`);
  if (newActiveLink) {
    newActiveLink.classList.add('active');

    // Centraliza o item ativo na navegação horizontal, se possível
    if (navListElement && newActiveLink.parentElement) {
        const navRect = navListElement.getBoundingClientRect();
        const itemRect = newActiveLink.parentElement.getBoundingClientRect();

        // Calcula a posição de rolagem para centralizar o item
        const scrollLeftTarget = newActiveLink.parentElement.offsetLeft -
                                 navListElement.offsetLeft - // Ajuste para a posição do navListElement
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
  navListElement.innerHTML = ''; // Limpa a navegação existente

  // Verifica se há algum item em destaque em qualquer categoria
  const temItensEmDestaqueGeral = Object.values(cardapio).some(categoriaData => {
    if (!categoriaData) return false;
    if (Array.isArray(categoriaData)) {
      return categoriaData.some(item => item.destaque);
    } else if (typeof categoriaData === 'object' && categoriaData.tipoEstrutura === 'hierarquica') {
      return categoriaData.subsecoes && categoriaData.subsecoes.some(subsecao =>
        subsecao.grupos && subsecao.grupos.some(grupo =>
          grupo.itens && grupo.itens.some(item => item.destaque)
        )
      );
    }
    return false;
  });

  categorias.forEach(categoria => {
    let deveExibirCategoria = false;
    if (categoria.id === 'destaques') {
      // Só exibe a categoria "Destaques" se houver itens em destaque
      if (temItensEmDestaqueGeral) deveExibirCategoria = true;
    } else {
      // Para outras categorias, verifica se há itens
      const categoriaData = cardapio[categoria.id];
      if (categoriaData) {
        if (Array.isArray(categoriaData) && categoriaData.length > 0) {
          deveExibirCategoria = true;
        } else if (typeof categoriaData === 'object' && categoriaData.tipoEstrutura === 'hierarquica' && categoriaData.subsecoes && categoriaData.subsecoes.length > 0) {
          // Verifica se alguma subseção tem grupos com itens
          deveExibirCategoria = categoriaData.subsecoes.some(sub => sub.grupos && sub.grupos.some(g => g.itens && g.itens.length > 0));
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

        // Atualiza o hash da URL sem recarregar a página
        if (history.pushState) {
            history.pushState(null, null, `#${categoryIdToDisplay}`);
        } else {
            // Fallback para navegadores mais antigos
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
  card.className = 'menu-card item'; // Adiciona classe 'item' para o carrinho

  // Cria ID único combinando categoria e item ID para evitar conflitos
  const categoriaOriginal = item.originalCategoriaId || categoriaIdParaPastaImagens;
  const uniqueItemId = `${categoriaOriginal}-${item.id}`;
  
  // Adiciona atributos de dados para o carrinho
  card.dataset.itemId = uniqueItemId;
  card.dataset.itemNome = item.nome;
  card.dataset.categoriaId = categoriaOriginal;
  card.dataset.originalItemId = item.id;
  
  // Define o preço para o carrinho (usa preço único ou o primeiro preço múltiplo)
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
      const nomeSingular = singularMap[categoriaBaseParaSelo] || categoriaBaseParaSelo.slice(0, -1); // Fallback simples
      textoSelo = nomeSingular.charAt(0).toUpperCase() + nomeSingular.slice(1);
    } else {
      textoSelo = "Destaque!";
    }
    card.setAttribute('data-selo-texto', textoSelo);
  }

  let headerPriceHTML = '';
  let multiPricesHTML = '';
  let priceSeparatorHTML = '';  // Verifica se o item tem múltiplos preços (estrutura de objeto 'precos')
  if (item.precos && typeof item.precos === 'object') {
    // Para itens com múltiplos preços, mostra apenas o menor preço no header com asterisco
    const precos = Object.values(item.precos);
    const menorPreco = Math.min(...precos.map(p => p.valor));
    const menorPrecoFormatado = menorPreco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    headerPriceHTML = `<span class="card-price-inline">${menorPrecoFormatado}*</span>`;
    
    // Substitui os preços múltiplos por uma mensagem simples
    multiPricesHTML = '<div class="card-prices-multisize"><span class="price-message">* A partir de - Escolha o tamanho</span></div>';
    priceSeparatorHTML = '<hr class="price-separator">';
  // Verifica se o item tem um preço único (propriedade 'preco')
  } else if (typeof item.preco === 'number') {
    const precoFormatado = item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    headerPriceHTML = `<span class="card-price-inline">${precoFormatado}</span>`;
  }

  // Define o texto do botão baseado no tipo de item
  const buttonText = (item.precos && typeof item.precos === 'object') ? 'Escolher' : 'Adicionar';

  // Define o caminho da imagem do item
  // categoriaIdParaPastaImagens deve ser o ID da categoria original do item (ex: "hamburgueres", "pizzas")
  const imagemItemJpgSrc = `assets/sections/${categoriaIdParaPastaImagens}/${item.id}.jpg`;
  const imagemItemJpegSrc = `assets/sections/${categoriaIdParaPastaImagens}/${item.id}.jpeg`;
  const fallbackImageSrc = 'assets/logo-square.png'; // Imagem fallback
  card.innerHTML = `
    <div class="card-image-wrapper">
      <div class="item-id-badge">${item.id}</div>
      <img
        src="${imagemItemJpgSrc}"
        alt="${item.nome}"
        class="item-image"
        onerror="
          if (this.src.endsWith('.jpg')) { // If .jpg failed, try .jpeg
            this.src='${imagemItemJpegSrc}';
          } else { // If .jpeg also failed (or it wasn't .jpg initially), use fallback
            this.onerror=null; 
            this.src='${fallbackImageSrc}';
            this.classList.add('fallback-image');
          }
        "
      >
    </div>    <div class="card-details">
      <div class="card-header">
        <div class="card-title-section">
          <h3 class="card-title">${item.nome}</h3>
          <p class="card-description">${item.descricao}</p>        </div>
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
    return null; // Retorna null se a categoria não for encontrada
  }

  const section = document.createElement('section');
  section.classList.add('category-content-section');
  section.id = `section-${categoriaIdParaExibir}`; // Adiciona um ID à seção para referência

  // Adiciona imagem de fundo se definida para a categoria
  if (categoriaInfo.imagemFundo) {
    section.classList.add('category-section-with-bg');
    section.style.backgroundImage = `url('${categoriaInfo.imagemFundo}')`;
  }

  // Cria e adiciona o título principal da seção (nome da categoria)
  const tituloPrincipalSecao = criarTituloEstilizado(categoriaInfo.nome, 'h2', 'titulo-categoria-principal');
  section.appendChild(tituloPrincipalSecao);

  const dadosDaCategoria = cardapio[categoriaIdParaExibir];

  // Lógica para a categoria "Destaques"
  if (categoriaIdParaExibir === 'destaques') {
    let destaquesEncontradosGeral = 0;

    // Itera sobre todas as categorias definidas em `categorias` para encontrar itens em destaque
    categorias.forEach(categoriaOriginalInfo => {
      // Pula a própria categoria "destaques" para evitar recursão ou processamento desnecessário
      if (categoriaOriginalInfo.id === 'destaques') return;

      const dadosCategoriaOriginal = cardapio[categoriaOriginalInfo.id]; // Busca os dados da categoria original
      if (!dadosCategoriaOriginal) return; // Pula se a categoria original não tiver dados no cardápio

      const destaquesDestaCategoriaOriginal = [];

      // Coleta itens em destaque da categoria original
      if (Array.isArray(dadosCategoriaOriginal)) { // Se a categoria original for um array simples de itens
        dadosCategoriaOriginal.forEach(item => {
          if (item.destaque) {
            // Adiciona o item à lista de destaques, guardando o ID da sua categoria original
            destaquesDestaCategoriaOriginal.push({ ...item, originalCategoriaId: categoriaOriginalInfo.id });
          }
        });
      } else if (typeof dadosCategoriaOriginal === 'object' && dadosCategoriaOriginal.tipoEstrutura === 'hierarquica' && dadosCategoriaOriginal.subsecoes) {
        // Se a categoria original tiver uma estrutura hierárquica (subseções, grupos)
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
      }

      // Se foram encontrados destaques para esta categoria original
      if (destaquesDestaCategoriaOriginal.length > 0) {
        destaquesEncontradosGeral++;

        // Cria um título para o grupo de destaques desta categoria original (Ex: "Pizzas em Destaque")
        const tituloSubCategoriaDestaques = criarTituloEstilizado(
          `${categoriaOriginalInfo.nome} em Destaque`,
          'h3',
          'titulo-grupo-sabor' // Reutiliza a classe de título de grupo para consistência visual
        );
        section.appendChild(tituloSubCategoriaDestaques);

        const gridContainer = document.createElement('div');
        gridContainer.className = 'grid-container'; // Container para os cards de destaque

        // Ordena os itens de destaque pelo ID
        destaquesDestaCategoriaOriginal.sort((a, b) => parseInt(a.id) - parseInt(b.id));

        destaquesDestaCategoriaOriginal.forEach(itemDestaque => {
          // Cria o card, passando o ID da categoria original para buscar a imagem da pasta correta
          const card = criarCardItem(itemDestaque, itemDestaque.originalCategoriaId, categoriaIdParaExibir);
          gridContainer.appendChild(card);
        });
        section.appendChild(gridContainer); // Adiciona o grid com os cards à seção
      }
    });

    // Se nenhum item de destaque for encontrado em nenhuma categoria
    if (destaquesEncontradosGeral === 0) {
        const noHighlightsMessage = document.createElement('p');
        noHighlightsMessage.textContent = 'Nenhum item em destaque no momento.';
        noHighlightsMessage.style.textAlign = 'center';
        noHighlightsMessage.style.padding = '1rem';
        if (section.classList.contains('category-section-with-bg')) { // Ajusta cor do texto para fundos com imagem
            noHighlightsMessage.style.color = 'white';
        }
        section.appendChild(noHighlightsMessage);
    }

  } else { // Lógica para categorias normais (não "Destaques")
    if (dadosDaCategoria && dadosDaCategoria.tipoEstrutura === 'hierarquica') {
      // Verifica se há subseções e se elas contêm itens
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
          // Só processa a subseção se ela tiver grupos com itens
          if (subsecao.grupos && subsecao.grupos.some(g => g.itens && g.itens.length > 0)) {
            if (subsecao.tituloSubsecao) {
              const tituloSub = criarTituloEstilizado(subsecao.tituloSubsecao, 'h3', 'titulo-grupo-sabor');
              section.appendChild(tituloSub);
            }
            if (subsecao.grupos) {
              subsecao.grupos.forEach(grupo => {
                if (grupo.itens && grupo.itens.length > 0) {
                  if (grupo.nomeGrupo) { // Adiciona título do grupo se existir
                    const tituloGrupoEl = criarTituloEstilizado(grupo.nomeGrupo, 'h4', 'titulo-variacao-sabor');
                    section.appendChild(tituloGrupoEl);
                  }
                  const gridContainer = document.createElement('div');
                  gridContainer.className = 'grid-container';
                  grupo.itens.sort((a, b) => parseInt(a.id) - parseInt(b.id)); // Ordena itens
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
    } else if (dadosDaCategoria && Array.isArray(dadosDaCategoria)) { // Se for uma lista simples de itens
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
    } else if (categoriaIdParaExibir !== 'destaques') { // Se não for "Destaques" e não tiver dados
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

  // Adiciona observações gerais da categoria, se existirem
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
  const numeroWhatsapp = "5522999964529"; // Seu número de WhatsApp
  const agora = new Date();
  const hora = agora.getHours();
  let saudacao;

  // Define a saudação baseada na hora do dia
  if (hora >= 5 && hora < 12) { saudacao = "Olá, bom dia!"; }
  else if (hora >= 12 && hora < 18) { saudacao = "Olá, boa tarde!"; }
  else { saudacao = "Olá, boa noite!"; }

  const mensagemCompleta = saudacao + " Vim do cardápio digital e gostaria de fazer um pedido.";
  whatsappLink.href = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagemCompleta)}`;

  // Atualiza também o botão flutuante de delivery, se existir
  const floatingButton = document.querySelector('.floating-delivery-button');
  if (floatingButton) {
    floatingButton.href = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagemCompleta)}`;
  }
}

// Função para lidar com a mudança de hash na URL e carregar a categoria correta
function handleHashChange() {
    let categoriaParaExibir = 'destaques'; // Categoria padrão

    // Verifica se há itens em destaque para decidir se "Destaques" deve ser a padrão ou se precisa de fallback
    const temItensEmDestaqueGeral = Object.values(cardapio).some(catData => {
        if (!catData) return false;
        if (Array.isArray(catData)) return catData.some(item => item.destaque);
        if (catData.tipoEstrutura === 'hierarquica' && catData.subsecoes) {
            return catData.subsecoes.some(sub => sub.grupos && sub.grupos.some(g => g.itens && g.itens.some(item => item.destaque)));
        }
        return false;
    });

    if (window.location.hash) {
        const hashCategory = window.location.hash.substring(1);
        const categoriaValidaNoHash = categorias.find(cat => cat.id === hashCategory);
        let temItensNaCategoriaDoHash = false;

        if (categoriaValidaNoHash) { // Se o hash corresponde a uma categoria válida
            if (hashCategory === 'destaques') {
                temItensNaCategoriaDoHash = temItensEmDestaqueGeral;
            } else {
                const dadosCatHash = cardapio[hashCategory];
                if (dadosCatHash) { // Verifica se a categoria do hash tem dados
                    if (Array.isArray(dadosCatHash) && dadosCatHash.length > 0) {
                        temItensNaCategoriaDoHash = true;
                    } else if (typeof dadosCatHash === 'object' && dadosCatHash.tipoEstrutura === 'hierarquica' && dadosCatHash.subsecoes) {
                        temItensNaCategoriaDoHash = dadosCatHash.subsecoes.some(sub => sub.grupos && sub.grupos.some(g => g.itens && g.itens.length > 0));
                    }
                }
            }
            if (temItensNaCategoriaDoHash) {
                categoriaParaExibir = hashCategory; // Define a categoria do hash para exibição
            }
            // Se a categoria do hash for válida mas não tiver itens (e não for 'destaques' sem destaques gerais),
            // mantém a categoriaParaExibir como 'destaques' (ou o fallback abaixo se 'destaques' estiver vazia).
        }
    }
    
    // Fallback se a categoria "Destaques" for a selecionada (ou padrão) mas não houver itens em destaque
    if (categoriaParaExibir === 'destaques' && !temItensEmDestaqueGeral) {
        // Tenta encontrar a primeira categoria *disponível* que não seja "Destaques"
        const primeiraCategoriaDisponivel = categorias.find(cat =>
            cat.id !== 'destaques' && // Não é a própria categoria 'destaques'
            cardapio[cat.id] && // Tem dados no cardápio
            ( // E tem itens (seja array ou hierárquico)
                (Array.isArray(cardapio[cat.id]) && cardapio[cat.id].length > 0) ||
                (cardapio[cat.id].tipoEstrutura === 'hierarquica' &&
                 cardapio[cat.id].subsecoes &&
                 cardapio[cat.id].subsecoes.some(s => s.grupos && s.grupos.some(g => g.itens && g.itens.length > 0)))
            )
        );
        if (primeiraCategoriaDisponivel) {
            categoriaParaExibir = primeiraCategoriaDisponivel.id;
            // Se a URL tinha um hash inválido ou apontava para destaques vazios, atualiza para a primeira válida
            if (window.location.hash || window.location.pathname.endsWith('/')) { // Evita mudar hash se já estiver na raiz sem hash
                 if (history.replaceState) {
                    history.replaceState(null, null, `#${categoriaParaExibir}`);
                } else {
                    location.hash = `#${categoriaParaExibir}`;
                }
            }
        } else {
            // Caso extremo: nenhuma categoria tem itens, exibe a primeira da lista (que não seja destaques) ou destaques mesmo vazia.
             categoriaParaExibir = categorias.find(c => c.id !== 'destaques')?.id || (categorias.length > 0 ? categorias[0].id : 'destaques');
        }
    }
    exibirCategoria(categoriaParaExibir);
}

// Event listener para quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', () => {
  gerarNavegacao();      // Gera os links de navegação das categorias
  handleHashChange();    // Exibe a categoria inicial baseada no hash da URL ou define um padrão
  atualizarLinkWhatsapp(); // Configura o link do WhatsApp com a saudação correta

  // Adiciona um event listener para lidar com mudanças no hash da URL (navegação por links internos)
  window.addEventListener('hashchange', handleHashChange);
});
