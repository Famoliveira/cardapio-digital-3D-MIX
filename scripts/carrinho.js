// Função de inicialização
document.addEventListener("DOMContentLoaded", () => {
  // Referências aos elementos
  const btnAddList = document.querySelectorAll(".btn-add");
  const cartBubble = document.getElementById("cart-bubble");
  const cartCount = document.getElementById("cart-count");
  const cartModal = document.getElementById("cart-modal");
  const cartClose = document.getElementById("cart-close");
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const finalizarPedidoBtn = document.getElementById("finalizar-pedido");
  
  // Elementos do modal de seleção de tamanho
  const pizzaSizeModal = document.getElementById("pizza-size-modal");
  const pizzaSizeClose = document.getElementById("pizza-size-close");
  const pizzaNameElement = document.getElementById("pizza-name");
  const pizzaSizesContainer = document.getElementById("pizza-sizes-container");

  // Carrega carrinho do localStorage ou cria vazio
  let cartData = JSON.parse(localStorage.getItem("cartData")) || [];

  // Atualiza contador ao carregar
  updateCartCount();  // Vincula evento de adicionar item usando delegação de eventos
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-add")) {
      const parentItem = event.target.closest(".item");
      if (parentItem) {
        const itemId = parentItem.dataset.itemId;
        const nome = parentItem.dataset.itemNome;
        const preco = parseFloat(parentItem.dataset.itemPreco);

        // Verifica se é uma pizza com múltiplos tamanhos
        if (isPizzaWithMultipleSizes(parentItem)) {
          showPizzaSizeModal(itemId, nome, parentItem);
        } else {
          addToCart(itemId, nome, preco);
        }
      }
    }
  });

  // Evento para abrir modal
  cartBubble.addEventListener("click", () => {
    renderCartItems();
    cartModal.style.display = "block";
  });

  // Evento para fechar modal
  cartClose.addEventListener("click", () => {
    cartModal.style.display = "none";
  });
  // Fecha modal ao clicar fora
  window.addEventListener("click", (event) => {
    if (event.target === cartModal) {
      cartModal.style.display = "none";
    }
    if (event.target === pizzaSizeModal) {
      pizzaSizeModal.style.display = "none";
    }
  });

  // Eventos para modal de seleção de tamanho
  pizzaSizeClose.addEventListener("click", () => {
    pizzaSizeModal.style.display = "none";
  });

  // Evento para finalizar pedido (WhatsApp)
  finalizarPedidoBtn.addEventListener("click", () => {
    const message = generateWhatsAppMessage();
    const url = "https://wa.me/5522999964529?text=" + encodeURIComponent(message);
    window.open(url, "_blank");  });

  // Função para verificar se é uma pizza com múltiplos tamanhos
  function isPizzaWithMultipleSizes(itemElement) {
    return itemElement.querySelector('.card-prices-multisize') !== null;
  }

  // Função para mostrar modal de seleção de tamanho
  function showPizzaSizeModal(itemId, itemName, itemElement) {
    pizzaNameElement.textContent = itemName;
    pizzaSizesContainer.innerHTML = "";

    // Busca as informações de tamanho do cardápio
    const pizzaData = findPizzaData(itemId);
    if (pizzaData && pizzaData.precos) {
      Object.entries(pizzaData.precos).forEach(([tamanho, precoInfo]) => {
        const sizeOption = document.createElement("div");
        sizeOption.className = "pizza-size-option";
        sizeOption.innerHTML = `
          <div class="pizza-size-info">
            <div class="pizza-size-name">${precoInfo.texto}</div>
            <div class="pizza-size-description">${itemName}</div>
          </div>
          <div class="pizza-size-price">R$ ${precoInfo.valor.toFixed(2).replace('.', ',')}</div>
        `;
          sizeOption.addEventListener("click", () => {
          // Extrai apenas o nome do tamanho (ex: "Grande" de "Grande (8 fatias)")
          const tamanhoNome = precoInfo.texto.split('(')[0].trim();
          addToCart(`${itemId}-${tamanho}`, `${itemName} (${tamanhoNome})`, precoInfo.valor);
          pizzaSizeModal.style.display = "none";
        });

        pizzaSizesContainer.appendChild(sizeOption);
      });
    }

    pizzaSizeModal.style.display = "block";
  }
  // Função para encontrar dados da pizza no cardápio
  function findPizzaData(itemId) {
    try {
      // Acessa o cardápio global se estiver disponível
      if (typeof cardapio !== 'undefined' && cardapio.pizzas && cardapio.pizzas.subsecoes) {
        const allPizzas = [];
        cardapio.pizzas.subsecoes.forEach(subsecao => {
          if (subsecao.grupos) {
            subsecao.grupos.forEach(grupo => {
              if (grupo.itens) {
                allPizzas.push(...grupo.itens);
              }
            });
          }
        });
        return allPizzas.find(pizza => pizza.id == itemId);
      }
    } catch (error) {
      console.warn('Erro ao buscar dados da pizza:', error);
    }
    return null;
  }

  // Função para limpar carrinho
  function clearCart() {
    if (cartData.length === 0) return;
    
    if (confirm("Tem certeza que deseja limpar todo o carrinho?")) {
      cartData = [];
      saveCart();
      updateCartCount();
      renderCartItems();
      showAddToCartFeedback("Carrinho limpo!");
    }
  }

  // Função para adicionar ou incrementar item no carrinho
  function addToCart(itemId, nome, preco) {
    let found = cartData.find((item) => item.itemId === itemId);
    if (found) {
      found.quantidade++;
    } else {
      cartData.push({
        itemId,
        nome,
        preco,
        quantidade: 1
      });
    }
    saveCart();
    updateCartCount();
    showAddToCartFeedback(nome);
  }
  // Mostra feedback visual quando item é adicionado
  function showAddToCartFeedback(itemName) {
    // Remove feedback anterior se existir
    const existingFeedback = document.querySelector('.add-to-cart-feedback');
    if (existingFeedback) {
      existingFeedback.remove();
    }

    const feedback = document.createElement('div');
    feedback.className = 'add-to-cart-feedback';
    
    // Define ícone baseado na mensagem
    const icon = itemName.includes("Carrinho limpo") ? "🗑️" : "✅";
    
    feedback.innerHTML = `
      <div class="feedback-content">
        ${icon} <strong>${itemName}</strong>${itemName.includes("Carrinho limpo") ? "" : " adicionado ao carrinho!"}
      </div>
    `;
    
    document.body.appendChild(feedback);
    
    // Remove o feedback após 3 segundos
    setTimeout(() => {
      if (feedback.parentNode) {
        feedback.remove();
      }
    }, 3000);
  }// Renderiza itens no modal
  function renderCartItems() {
    cartItemsContainer.innerHTML = "";    if (cartData.length === 0) {
      const emptyMessage = document.createElement("div");
      emptyMessage.className = "empty-cart-message";
      emptyMessage.innerHTML = `
        <p>🛒 Seu carrinho está vazio</p>
        <p>Adicione alguns itens deliciosos do nosso cardápio!</p>
      `;
      cartItemsContainer.appendChild(emptyMessage);
      cartTotal.innerText = "Total: R$ 0,00";
      
      // Desabilita o botão finalizar pedido
      finalizarPedidoBtn.disabled = true;
      finalizarPedidoBtn.style.opacity = "0.5";
      finalizarPedidoBtn.style.cursor = "not-allowed";
      return;
    }

    // Reabilita o botão finalizar pedido
    finalizarPedidoBtn.disabled = false;
    finalizarPedidoBtn.style.opacity = "1";
    finalizarPedidoBtn.style.cursor = "pointer";

    // Adiciona botão de limpar carrinho
    const clearCartButton = document.createElement("button");
    clearCartButton.className = "clear-cart-btn";
    clearCartButton.innerHTML = `🗑️ Limpar Carrinho`;
    clearCartButton.addEventListener("click", clearCart);
    cartItemsContainer.appendChild(clearCartButton);

    cartData.forEach((item, index) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "cart-item";

      const infoDiv = document.createElement("div");
      infoDiv.className = "cart-item-info";
      
      const nameSpan = document.createElement("div");
      nameSpan.className = "cart-item-name";
      nameSpan.innerText = item.nome;

      const priceSpan = document.createElement("div");
      priceSpan.className = "cart-item-price";
      priceSpan.innerText = `R$ ${item.preco.toFixed(2).replace('.', ',')}`;

      infoDiv.appendChild(nameSpan);
      infoDiv.appendChild(priceSpan);

      const quantityControls = document.createElement("div");
      quantityControls.className = "quantity-controls";

      const btnDecrement = document.createElement("button");
      btnDecrement.innerText = "−";
      btnDecrement.setAttribute("title", "Diminuir quantidade");
      btnDecrement.addEventListener("click", () => {
        if (item.quantidade > 1) {
          item.quantidade--;
        } else {
          cartData.splice(index, 1);
        }
        saveCart();
        renderCartItems();
        updateCartCount();
      });

      const qtSpan = document.createElement("span");
      qtSpan.className = "quantity-display";
      qtSpan.innerText = item.quantidade;

      const btnIncrement = document.createElement("button");
      btnIncrement.innerText = "+";
      btnIncrement.setAttribute("title", "Aumentar quantidade");
      btnIncrement.addEventListener("click", () => {
        item.quantidade++;
        saveCart();
        renderCartItems();
        updateCartCount();
      });

      quantityControls.appendChild(btnDecrement);
      quantityControls.appendChild(qtSpan);
      quantityControls.appendChild(btnIncrement);

      itemDiv.appendChild(infoDiv);
      itemDiv.appendChild(quantityControls);

      cartItemsContainer.appendChild(itemDiv);
    });

    // Atualiza total
    const totalValue = cartData.reduce((acc, item) => {
      return acc + item.preco * item.quantidade;
    }, 0);
    cartTotal.innerHTML = `
      <strong>Total: R$ ${totalValue.toFixed(2).replace('.', ',')}</strong>
      <small style="display: block; font-size: 0.9rem; font-weight: normal; color: #666; margin-top: 0.25rem;">
        *Frete não incluso
      </small>
    `;
  }

  // Atualiza o contador do carrinho
  function updateCartCount() {
    const totalQtd = cartData.reduce((acc, item) => acc + item.quantidade, 0);
    cartCount.innerText = totalQtd;
  }

  // Salva alterações no localStorage
  function saveCart() {
    localStorage.setItem("cartData", JSON.stringify(cartData));
  }
  // Gera mensagem para WhatsApp
  function generateWhatsAppMessage() {
    const now = new Date();
    const hour = now.getHours();
    let saudacao;

    // Define saudação baseada na hora
    if (hour >= 5 && hour < 12) {
      saudacao = "Olá, bom dia!";
    } else if (hour >= 12 && hour < 18) {
      saudacao = "Olá, boa tarde!";
    } else {
      saudacao = "Olá, boa noite!";
    }

    let message = `${saudacao} 😊\n\n`;
    message += `🛒 *MEU PEDIDO:*\n`;
    message += `━━━━━━━━━━━━━━━━━━\n\n`;
    
    cartData.forEach((item, index) => {
      const subtotal = (item.preco * item.quantidade).toFixed(2).replace('.', ',');
      message += `${index + 1}. *${item.nome}*\n`;
      message += `   Quantidade: ${item.quantidade}x\n`;
      message += `   Subtotal: R$ ${subtotal}\n\n`;
    });
    
    const totalValue = cartData.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
    const totalFormatted = totalValue.toFixed(2).replace('.', ',');
    
    message += `━━━━━━━━━━━━━━━━━━\n`;
    message += `💰 *TOTAL: R$ ${totalFormatted}*\n`;
    message += `_(sem frete incluso)_\n\n`;
    message += `📍 Vim do cardápio digital da 3D MIX!\n`;
    message += `Gostaria de confirmar meu pedido e saber sobre o frete. 🚚`;

    return message;
  }
});