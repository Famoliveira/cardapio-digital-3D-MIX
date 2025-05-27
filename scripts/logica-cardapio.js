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

function criarTituloEstilizado(texto, tipoElemento = 'h2', classeCss = '') {
  const titulo = document.createElement(tipoElemento);
  titulo.classList.add('titulo-cardapio'); // Classe base para todos os títulos
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
            // Só rola se o conteúdo da categoria ativa não estiver visível abaixo do nav
            // e a seção de boas-vindas já estiver acima do nav
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

  // Atualiza link ativo na navegação
  document.querySelectorAll('.category-nav nav ul li a.active').forEach(activeLink => {
    activeLink.classList.remove('active');
  });
  const newActiveLink = document.querySelector(`.category-nav nav ul li a[data-category-id="${categoryId}"]`);
  if (newActiveLink) {
    newActiveLink.classList.add('active');

    // Scroll do item ativo na navegação para o centro
    if (navListElement && newActiveLink.parentElement) {
        const navRect = navListElement.getBoundingClientRect();
        const itemRect = newActiveLink.parentElement.getBoundingClientRect();

        // Calcula a posição de rolagem para centralizar o item
        const scrollLeftTarget = newActiveLink.parentElement.offsetLeft -
                                 navListElement.offsetLeft - // Subtrai o offset do nav ul se ele mesmo for scrollável
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
    if (Array.isArray(categoriaData)) {
      return categoriaData.some(item => item.destaque);
    } else if (typeof categoriaData === 'object' && categoriaData.tipoEstrutura === 'hierarquica') {
      // Verifica se tem subsecoes antes de tentar iterar
      return categoriaData.subsecoes && categoriaData.subsecoes.some(subsecao =>
        subsecao.grupos.some(grupo =>
          grupo.itens.some(item => item.destaque)
        )
      );
    }
    return false;
  });

  categorias.forEach(categoria => {
    let deveExibirCategoria = false;
    if (categoria.id === 'destaques') {
      // Só exibe "Destaques" se houver itens em destaque
      if (temItensEmDestaqueGeral) deveExibirCategoria = true;
    } else {
      // Para outras categorias, verifica se têm itens
      const categoriaData = cardapio[categoria.id];
      if (categoriaData) {
        if (Array.isArray(categoriaData) && categoriaData.length > 0) {
          deveExibirCategoria = true;
        } else if (typeof categoriaData === 'object' && categoriaData.tipoEstrutura === 'hierarquica' && categoriaData.subsecoes && categoriaData.subsecoes.length > 0) {
          // Verifica se há itens dentro dos grupos das subseções
          deveExibirCategoria = categoriaData.subsecoes.some(sub => sub.grupos.some(g => g.itens && g.itens.length > 0));
        }
      }
    }

    if (deveExibirCategoria) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = `#${categoria.id}`;
      a.dataset.categoryId = categoria.id; // Armazena o ID da categoria no link
      a.innerHTML = `
        <img src="${categoria.icon || 'assets/icons/burguer.png'}" alt="${categoria.nome}">
        <span class="nav-span">${categoria.nome}</span>
      `;

      a.addEventListener('click', (event) => {
        event.preventDefault(); // Previne o comportamento padrão do link
        const categoryIdToDisplay = a.dataset.categoryId;
        exibirCategoria(categoryIdToDisplay); // Chama a função para exibir a categoria

        // Atualiza a URL sem recarregar a página (opcional, para melhor UX e links compartilháveis)
        if (history.pushState) {
            history.pushState(null, null, `#${categoryIdToDisplay}`);
        } else {
            location.hash = `#${categoryIdToDisplay}`; // Fallback para navegadores mais antigos
        }
      });
      li.appendChild(a);
      navListElement.appendChild(li);
    }
  });
}

function criarCardItem(item, categoriaOriginalIdParaSeloEImagem, categoriaIdAtualSendoExibida) {
  const card = document.createElement('div');
  card.className = 'menu-card';

  if (item.destaque) {
    card.classList.add('item-destacado');
    let textoSelo;
    // Determina o texto do selo com base na categoria original do item, se estiver na seção "Destaques"
    const categoriaBaseParaSelo = item.originalCategoriaId || categoriaOriginalIdParaSeloEImagem;

    if (categoriaIdAtualSendoExibida === 'destaques') {
      const nomeSingular = singularMap[categoriaBaseParaSelo] || categoriaBaseParaSelo.slice(0, -1); // Remove 's' se não mapeado
      textoSelo = nomeSingular.charAt(0).toUpperCase() + nomeSingular.slice(1); // Capitaliza
    } else {
      textoSelo = "Destaque!"; // Texto padrão para destaque dentro da própria categoria
    }
    card.setAttribute('data-selo-texto', textoSelo);
  }

  let headerPriceHTML = '';
  let multiPricesHTML = '';

  if (item.precos && typeof item.precos === 'object') { // Para itens com múltiplos preços (ex: pizzas)
    multiPricesHTML = '<div class="card-prices-multisize">';
    for (const tamanho in item.precos) {
      const precoInfo = item.precos[tamanho];
      const precoValorFormatado = precoInfo.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      multiPricesHTML += `<span>${precoInfo.texto}: ${precoValorFormatado}</span>`;
    }
    multiPricesHTML += '</div>';
  } else if (typeof item.preco === 'number') { // Para itens com preço único
    const precoFormatado = item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    headerPriceHTML = `<span class="card-price-inline">${precoFormatado}</span>`;
  }


  const imagemItemSrc = `assets/sections/${categoriaOriginalIdParaSeloEImagem}/${item.id}.jpg`;
  const fallbackImageSrc = 'assets/logo-square.png'; // Imagem fallback caso a do item não carregue

  card.innerHTML = `
    <div class="card-image-wrapper">
      <div class="item-id-badge">${item.id}</div>
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
        ${headerPriceHTML}
      </div>
      <p class="card-description">${item.descricao}</p>
      ${multiPricesHTML}
    </div>
  `;

  return card;
}


function gerarSecaoCardapio(categoriaIdParaExibir) {
  const categoriaInfo = categorias.find(cat => cat.id === categoriaIdParaExibir);
  if (!categoriaInfo) return null; // Categoria não encontrada

  const section = document.createElement('section');
  section.classList.add('category-content-section'); // Classe base para a seção

  // Adiciona imagem de fundo se especificada na configuração da categoria
  if (categoriaInfo.imagemFundo) {
    section.classList.add('category-section-with-bg');
    section.style.backgroundImage = `url('${categoriaInfo.imagemFundo}')`;
  }

  const tituloPrincipalSecao = criarTituloEstilizado(categoriaInfo.nome, 'h2', 'titulo-categoria-principal');
  section.appendChild(tituloPrincipalSecao);

  const dadosDaCategoria = cardapio[categoriaIdParaExibir]; // Pega os dados da categoria atual

  if (categoriaIdParaExibir === 'destaques') {
    let destaquesEncontradosGeral = 0;

    // Itera sobre todas as categorias (exceto 'destaques') para encontrar itens em destaque
    categorias.forEach(categoriaOriginalInfo => {
      if (categoriaOriginalInfo.id === 'destaques') return; // Pula a própria categoria de destaques

      const dadosCategoriaOriginal = cardapio[categoriaOriginalInfo.id];
      if (!dadosCategoriaOriginal) return; // Pula se a categoria original não tiver dados

      const destaquesDestaCategoriaOriginal = [];

      // Coleta itens em destaque de categorias com estrutura de array
      if (Array.isArray(dadosCategoriaOriginal)) {
        dadosCategoriaOriginal.forEach(item => {
          if (item.destaque) {
            // Adiciona o ID da categoria original para referência no selo e imagem
            destaquesDestaCategoriaOriginal.push({ ...item, originalCategoriaId: categoriaOriginalInfo.id });
          }
        });
      }
      // Coleta itens em destaque de categorias com estrutura hierárquica
      else if (typeof dadosCategoriaOriginal === 'object' && dadosCategoriaOriginal.tipoEstrutura === 'hierarquica' && dadosCategoriaOriginal.subsecoes) {
        dadosCategoriaOriginal.subsecoes.forEach(subsecao => {
          subsecao.grupos.forEach(grupo => {
            grupo.itens.forEach(item => {
              if (item.destaque) {
                destaquesDestaCategoriaOriginal.push({ ...item, originalCategoriaId: categoriaOriginalInfo.id });
              }
            });
          });
        });
      }

      // Se encontrou destaques nesta categoria original, cria a subseção de destaques
      if (destaquesDestaCategoriaOriginal.length > 0) {
        destaquesEncontradosGeral++;

        const tituloSubCategoriaDestaques = criarTituloEstilizado(
          `${categoriaOriginalInfo.nome} em Destaque`, // Ex: "Pastéis em Destaque"
          'h3', // Usa H3 para o título do grupo de destaques
          'titulo-grupo-sabor' // Reutiliza a classe de estilo
        );
        section.appendChild(tituloSubCategoriaDestaques);

        const gridContainer = document.createElement('div');
        gridContainer.className = 'grid-container';

        // Ordena os destaques desta categoria original apenas por ID
        destaquesDestaCategoriaOriginal.sort((a, b) => parseInt(a.id) - parseInt(b.id));

        destaquesDestaCategoriaOriginal.forEach(itemDestaque => {
          // Passa o ID da categoria original para o selo e imagem
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
        if (section.classList.contains('category-section-with-bg')) { // Garante contraste com o fundo
            noHighlightsMessage.style.color = 'white';
        }
        section.appendChild(noHighlightsMessage);
    }

  } else { // Para categorias normais (não 'destaques')
    // const dadosDaCategoria = cardapio[categoriaIdParaExibir]; // Já definido no início da função

    if (dadosDaCategoria && dadosDaCategoria.tipoEstrutura === 'hierarquica') {
      // Se a categoria é hierárquica (subseções > grupos > itens)
      if (!dadosDaCategoria.subsecoes || dadosDaCategoria.subsecoes.length === 0) {
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
          if (subsecao.tituloSubsecao) {
            const tituloSub = criarTituloEstilizado(subsecao.tituloSubsecao, 'h3', 'titulo-grupo-sabor');
            section.appendChild(tituloSub);
          }

          if (subsecao.grupos && subsecao.grupos.length > 0) {
            subsecao.grupos.forEach(grupo => {
              // Adiciona título do grupo apenas se houver nome do grupo E itens nele
              if (grupo.nomeGrupo && grupo.itens && grupo.itens.length > 0) {
                const tituloGrupoEl = criarTituloEstilizado(grupo.nomeGrupo, 'h4', 'titulo-variacao-sabor');
                section.appendChild(tituloGrupoEl);
              }

              if (grupo.itens && grupo.itens.length > 0) {
                const gridContainer = document.createElement('div');
                gridContainer.className = 'grid-container';

                // Ordena os itens do grupo apenas por ID
                grupo.itens.sort((a, b) => {
                  // Certifica-se que os IDs são tratados como números para ordenação correta
                  return parseInt(a.id) - parseInt(b.id);
                });

                grupo.itens.forEach(item => {
                  const card = criarCardItem(item, categoriaIdParaExibir, categoriaIdParaExibir);
                  gridContainer.appendChild(card);
                });
                section.appendChild(gridContainer);
              } else if (grupo.nomeGrupo) { // Se o grupo tem nome mas não tem itens (ex: filtro resultou em vazio)
                  const noItemsMessage = document.createElement('p');
                  noItemsMessage.textContent = `Nenhum item disponível em ${grupo.nomeGrupo} no momento.`;
                  noItemsMessage.style.textAlign = 'center';
                  noItemsMessage.style.padding = '1rem 0'; // Padding vertical
                  if (section.classList.contains('category-section-with-bg')) {
                      noItemsMessage.style.color = 'white';
                  }
                  section.appendChild(noItemsMessage);
              }
            });
          } else if (subsecao.tituloSubsecao && (!subsecao.grupos || subsecao.grupos.length === 0)) {
              // Se a subseção tem título mas não tem grupos (ou grupos vazios)
              const noItemsMessage = document.createElement('p');
              noItemsMessage.textContent = `Nenhum item disponível em ${subsecao.tituloSubsecao} no momento.`;
              noItemsMessage.style.textAlign = 'center';
              noItemsMessage.style.padding = '1rem 0';
              if (section.classList.contains('category-section-with-bg')) {
                  noItemsMessage.style.color = 'white';
              }
              section.appendChild(noItemsMessage);
          }
        });
      }
    } else if (dadosDaCategoria && Array.isArray(dadosDaCategoria)) {
      // Se a categoria é um array simples de itens (estrutura antiga ou para categorias simples)
      const itensDaSecao = dadosDaCategoria;
      if (itensDaSecao.length === 0) {
          const noItemsMessage = document.createElement('p');
          noItemsMessage.textContent = 'Nenhum item disponível nesta categoria no momento.';
          noItemsMessage.style.textAlign = 'center';
          noItemsMessage.style.padding = '1rem';
           if (section.classList.contains('category-section-with-bg')) { // Garante contraste com o fundo
              noItemsMessage.style.color = 'white';
          }
          section.appendChild(noItemsMessage);
      } else {
          const gridContainer = document.createElement('div');
          gridContainer.className = 'grid-container';

          // Ordena os itens da seção apenas por ID
          itensDaSecao.sort((a, b) => {
            return parseInt(a.id) - parseInt(b.id);
          });

          itensDaSecao.forEach(item => {
            const card = criarCardItem(item, categoriaIdParaExibir, categoriaIdParaExibir);
            gridContainer.appendChild(card);
          });
          section.appendChild(gridContainer);
      }
    } else if (categoriaIdParaExibir !== 'destaques') { // Se não for destaques e não tiver dados ou estrutura conhecida
      const errorMessage = document.createElement('p');
      errorMessage.textContent = 'Nenhum item encontrado nesta categoria.';
      errorMessage.style.textAlign = 'center';
      errorMessage.style.padding = '1rem';
       if (section.classList.contains('category-section-with-bg')) { // Garante contraste com o fundo
          errorMessage.style.color = 'white';
      }
      section.appendChild(errorMessage);
    }
  }

  // Adicionar observações gerais no final da seção, se existirem para a categoria
  if (dadosDaCategoria && dadosDaCategoria.observacoesGerais && Array.isArray(dadosDaCategoria.observacoesGerais)) {
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
  // Número de WhatsApp e mensagem podem ser configurados aqui
  const numeroWhatsapp = "5522999964529"; // Substitua pelo número desejado
  const agora = new Date();
  const hora = agora.getHours();
  let saudacao;

  if (hora >= 5 && hora < 12) { saudacao = "Olá, bom dia!"; }
  else if (hora >= 12 && hora < 18) { saudacao = "Olá, boa tarde!"; }
  else { saudacao = "Olá, boa noite!"; }

  const mensagemCompleta = saudacao + " Vim do cardápio digital e gostaria de fazer um pedido.";
  whatsappLink.href = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagemCompleta)}`;

  // Atualiza também o botão flutuante, se existir
  const floatingButton = document.querySelector('.floating-delivery-button');
  if (floatingButton) {
    floatingButton.href = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagemCompleta)}`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  gerarNavegacao(); // Gera os links da navegação de categorias

  let categoriaInicial = 'destaques'; // Por padrão, tenta carregar destaques

  // Verifica se há itens em destaque para decidir a categoria inicial
  const temItensEmDestaqueGeral = Object.values(cardapio).some(catData => {
      if (Array.isArray(catData)) return catData.some(item => item.destaque);
      if (catData.tipoEstrutura === 'hierarquica' && catData.subsecoes) { // Adiciona verificação de catData.subsecoes
          return catData.subsecoes.some(sub => sub.grupos.some(g => g.itens.some(item => item.destaque)));
      }
      return false;
  });

  // Se não houver destaques, define a categoria inicial para a primeira categoria válida com itens
  if (!temItensEmDestaqueGeral && categorias.length > 1) {
      const primeiraCategoriaValida = categorias.find(cat =>
          cat.id !== 'destaques' &&
          cardapio[cat.id] &&
          (
              (Array.isArray(cardapio[cat.id]) && cardapio[cat.id].length > 0) ||
              (cardapio[cat.id].tipoEstrutura === 'hierarquica' &&
               cardapio[cat.id].subsecoes && // Adiciona verificação de subsecoes
               cardapio[cat.id].subsecoes.some(s => s.grupos.some(g => g.itens.length > 0)))
          )
      );
      if (primeiraCategoriaValida) {
          categoriaInicial = primeiraCategoriaValida.id;
      } else if (categorias.length > 0 && categorias[0].id !== 'destaques') {
          // Fallback para a primeira categoria da lista que não seja 'destaques'
          categoriaInicial = categorias[0].id;
      } else if (categorias.length > 1) {
           // Fallback para a segunda categoria se a primeira for 'destaques' e não houver destaques
           categoriaInicial = categorias[1].id;
      }
      // Se ainda assim não encontrar, pode ser que todas as categorias estejam vazias (exceto destaques vazia)
      // Nesse caso, 'destaques' será exibida com mensagem de "nenhum item".
  }


  // Verifica se há uma categoria na URL (hash) e se ela é válida e tem itens
  if (window.location.hash) {
    const hashCategory = window.location.hash.substring(1); // Remove o '#'
    const categoriaValidaNoHash = categorias.find(cat => cat.id === hashCategory);

    let temItensNaCategoriaDoHash = false;
    if (hashCategory === 'destaques') {
        temItensNaCategoriaDoHash = temItensEmDestaqueGeral;
    } else {
        const dadosCatHash = cardapio[hashCategory];
        if (dadosCatHash) {
            if (Array.isArray(dadosCatHash) && dadosCatHash.length > 0) {
                temItensNaCategoriaDoHash = true;
            } else if (typeof dadosCatHash === 'object' && dadosCatHash.tipoEstrutura === 'hierarquica' && dadosCatHash.subsecoes) {
                temItensNaCategoriaDoHash = dadosCatHash.subsecoes.some(sub => sub.grupos.some(g => g.itens && g.itens.length > 0));
            }
        }
    }

    if (categoriaValidaNoHash && temItensNaCategoriaDoHash ) {
      categoriaInicial = hashCategory; // Usa a categoria da URL se for válida e tiver itens
    } else if (categoriaValidaNoHash && !temItensNaCategoriaDoHash && hashCategory !== 'destaques') {
        // Se a categoria do hash é válida mas está vazia (e não é 'destaques'),
        // mantém a `categoriaInicial` já definida (que seria a primeira com itens, ou destaques).
        // Isso evita mostrar uma categoria vazia só porque estava na URL.
    } else if (!categoriaValidaNoHash) {
        // Se a categoria do hash não é válida, mantém a `categoriaInicial` definida anteriormente.
    }
    // Se a categoria do hash for 'destaques' e não houver destaques, `categoriaInicial` já terá sido ajustada.
  }

  exibirCategoria(categoriaInicial); // Exibe a categoria inicial ou da URL
  atualizarLinkWhatsapp(); // Configura o link do WhatsApp
});