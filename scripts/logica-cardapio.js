// scripts/logica-cardapio.js
import { cardapio, categorias } from './cardapio.js';

// Função para gerar o menu de navegação de categorias
function gerarNavegacao() {
  const navContainer = document.querySelector('.category-nav nav ul');
  if (!navContainer) return;
  navContainer.innerHTML = '';

  const temItensEmDestaqueGeral = Object.values(cardapio).flat().some(item => item.destaque);

  categorias.forEach(categoria => {
    let deveExibirCategoria = false;

    if (categoria.id === 'destaques') {
      // A categoria 'destaques' só deve ser exibida na navegação se houver algum item em destaque no cardápio.
      if (temItensEmDestaqueGeral) {
        deveExibirCategoria = true;
      }
    } else {
      // Para outras categorias, verifica se existem itens nelas.
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
    // Opcional: Ordenar a seção de destaques principal, por exemplo, por nome.
    // itensDaSecao.sort((a, b) => a.nome.localeCompare(b.nome));
  } else {
    itensDaSecao = cardapio[categoriaId] || [];
    if (itensDaSecao.length > 0) {
      // Ordena os itens: destacados primeiro, depois por ID.
      itensDaSecao.sort((a, b) => {
        if (a.destaque && !b.destaque) {
          return -1; // 'a' (destaque) vem antes de 'b' (não destaque)
        }
        if (!a.destaque && b.destaque) {
          return 1;  // 'b' (destaque) vem antes de 'a' (não destaque)
        }
        // Se ambos são destaques ou ambos não são, ordena por ID para consistência.
        return a.id - b.id;
      });
    }
  }

  if (itensDaSecao.length === 0 && categoriaId === 'destaques') {
    // Não cria a seção "Destaques" se não houver itens em destaque.
    return null;
  }
  if (itensDaSecao.length === 0 && categoriaId !== 'destaques') {
    // Para outras categorias, não cria a seção se não houver itens.
    return null;
  }


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
  gerarNavegacao(); // Gera a navegação primeiro
  gerarCardapio();  // Depois gera o cardápio (que depende da navegação para o IntersectionObserver)
  atualizarLinkWhatsapp(); // Configura o link do WhatsApp

  // IntersectionObserver para destacar a categoria ativa na navegação
  // Adia a configuração do IntersectionObserver até que o cardápio seja gerado.
  const setupNavObserver = () => {
    const sections = document.querySelectorAll('.cardapio-digital section[id]');
    if (sections.length === 0) {
      // Se ainda não há seções, tenta novamente em breve.
      // Isso pode acontecer se gerarCardapio for muito rápido e o DOM não estiver totalmente pronto
      // ou se não houver itens em nenhuma categoria (incluindo destaques).
      // No entanto, a lógica de não criar a seção "Destaques" se vazia já deve cuidar disso.
      // requestAnimationFrame(setupNavObserver); // Pode ser uma opção mais robusta se houver problemas de timing
      return;
    }

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
    }, { threshold: 0.2, rootMargin: "-70px 0px -40% 0px" }); // Ajuste no rootMargin para melhor detecção

    sections.forEach(section => {
      navObserver.observe(section);
    });
  };
  
  // A função setupCardAnimationObserver e sua chamada foram removidas.
  setupNavObserver();

  // Se houver atualizações dinâmicas no cardápio que recriem os cards ou seções,
  // lembre-se de re-executar setupNavObserver()
  // ou de desconectar os observers antigos e reconectar aos novos elementos.
});