// Função de inicialização
document.addEventListener("DOMContentLoaded", () => {
  console.log("🍕 Pizza Modal System: Initializing...");  // Referências aos elementos
  const btnAddList = document.querySelectorAll(".btn-add");
  const cartBubble = document.getElementById("cart-bubble");
  const cartCount = document.getElementById("cart-count");
  const cartModal = document.getElementById("cart-modal");
  const cartClose = document.getElementById("cart-close");
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const finalizarPedidoBtn = document.getElementById("finalizar-pedido");
  
  // Elementos da modal de forma de pagamento
  const paymentModal = document.getElementById("payment-modal");
  const paymentClose = document.getElementById("payment-close");
  
  // Elementos do modal de seleção de tamanho
  const pizzaSizeModal = document.getElementById("pizza-size-modal");
  const pizzaSizeClose = document.getElementById("pizza-size-close");
  const pizzaNameElement = document.getElementById("pizza-name");
  const pizzaSizesContainer = document.getElementById("pizza-sizes-container");  // Carrega carrinho do localStorage ou cria vazio
  let cartData = JSON.parse(localStorage.getItem("cartData")) || [];
  let selectedPaymentMethod = null;

  // Atualiza contador ao carregar
  updateCartCount();
  
  // Restaura observação do localStorage
  const savedObservation = localStorage.getItem("cartObservation") || "";
  const observationInput = document.getElementById('cart-observation');
  if (observationInput) {
    observationInput.value = savedObservation;
    
    // Adiciona evento para salvar observação automaticamente
    observationInput.addEventListener('input', function() {
      localStorage.setItem("cartObservation", this.value);
    });
  }// Vincula evento de adicionar item usando delegação de eventos
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
  // Eventos para modal de forma de pagamento
  paymentClose.addEventListener("click", () => {
    paymentModal.style.display = "none";
  });

  // Eventos para modal de escolha do tipo de pedido
  const orderTypeClose = document.getElementById("order-type-close");
  orderTypeClose.addEventListener("click", () => {
    document.getElementById("order-type-modal").style.display = "none";
  });

  // Eventos para modal de lista do pedido
  const orderListClose = document.getElementById("order-list-close");
  orderListClose.addEventListener("click", () => {
    document.getElementById("order-list-modal").style.display = "none";
  });
  // Evento para botão "Fechar e Limpar Carrinho"
  const clearAndCloseBtn = document.getElementById("clear-and-close");
  clearAndCloseBtn.addEventListener("click", () => {
    clearCart();
    document.getElementById("order-list-modal").style.display = "none";
  });// Fecha modal ao clicar fora
  window.addEventListener("click", (event) => {
    if (event.target === cartModal) {
      cartModal.style.display = "none";
    }
    if (event.target === pizzaSizeModal) {
      pizzaSizeModal.style.display = "none";
    }
    if (event.target === paymentModal) {
      paymentModal.style.display = "none";
    }
    if (event.target === document.getElementById("order-type-modal")) {
      document.getElementById("order-type-modal").style.display = "none";
    }
    if (event.target === document.getElementById("order-list-modal")) {
      document.getElementById("order-list-modal").style.display = "none";
    }
  });
  // Eventos para modal de seleção de tamanho
  pizzaSizeClose.addEventListener("click", () => {
    pizzaSizeModal.style.display = "none";
  });  // Event listener para o botão de adicionar pizza ao carrinho
  document.addEventListener("click", (event) => {
    if (event.target.id === "add-pizza-to-cart-btn" && !event.target.disabled) {
      console.log("🛒 Add to cart button clicked!");
      const itemId = event.target.dataset.itemId;
      const itemName = event.target.dataset.itemName;
      console.log(`Adding pizza to cart: ${itemName} (ID: ${itemId})`);
      addPizzaToCart(itemId, itemName);
    }
  });// Evento para finalizar pedido (abre modal de escolha do tipo de pedido)
  finalizarPedidoBtn.addEventListener("click", () => {
    if (cartData.length === 0) {
      alert("Seu carrinho está vazio!");
      return;
    }
    
    // Fecha modal do carrinho e abre modal de escolha do tipo de pedido
    cartModal.style.display = "none";
    document.getElementById("order-type-modal").style.display = "block";
  });

  // Função para verificar se é uma pizza com múltiplos tamanhos
  function isPizzaWithMultipleSizes(itemElement) {
    return itemElement.querySelector('.card-prices-multisize') !== null;
  }  // Função para mostrar modal de seleção de tamanho
  function showPizzaSizeModal(itemId, itemName, itemElement) {
    console.log(`🍕 Opening pizza modal for: ${itemName} (ID: ${itemId})`);
    pizzaNameElement.textContent = itemName;
    pizzaSizesContainer.innerHTML = "";

    // Extrai o ID original do item para buscar no cardápio
    const originalItemId = itemElement.dataset.originalItemId || itemId.split('-').pop();
      // Reset da borda recheada ao abrir o modal
    const borderCheckbox = document.getElementById("border-checkbox");
    const borderFlavorContainer = document.getElementById("border-flavor-container");
    const addButton = document.getElementById("add-pizza-to-cart-btn");
    
    borderCheckbox.checked = false;
    borderFlavorContainer.style.display = "none";
    
    // Remove seleção de todos os cards de sabor
    document.querySelectorAll('.flavor-card').forEach(card => {
      card.classList.remove('selected');
    });
    
    // Remove seleção de todos os tamanhos
    document.querySelectorAll('.pizza-size-option').forEach(option => {
      option.classList.remove('selected');
    });
    
    // Desabilita o botão inicialmente
    addButton.disabled = true;
    addButton.textContent = "Selecione um tamanho";
    
    // Armazena o itemId no botão para uso posterior
    addButton.dataset.itemId = itemId;
    addButton.dataset.itemName = itemName;
    
    // Busca as informações de tamanho do cardápio
    const pizzaData = findPizzaData(originalItemId);
    if (pizzaData && pizzaData.precos) {
      Object.entries(pizzaData.precos).forEach(([tamanho, precoInfo]) => {
        const sizeOption = document.createElement("div");
        sizeOption.className = "pizza-size-option";
        sizeOption.dataset.tamanho = tamanho;
        sizeOption.dataset.preco = precoInfo.valor;
        sizeOption.dataset.texto = precoInfo.texto;
        sizeOption.innerHTML = `
          <div class="pizza-size-info">
            <div class="pizza-size-name">${precoInfo.texto}</div>
            <div class="pizza-size-description">${itemName}</div>
          </div>
          <div class="pizza-size-price">R$ ${precoInfo.valor.toFixed(2).replace('.', ',')}</div>
        `;
          // Event listener para seleção de tamanho (não adiciona automaticamente)
        sizeOption.addEventListener("click", () => {
          console.log(`🍕 Size selected: ${precoInfo.texto}`);
          // Remove seleção de outros tamanhos
          document.querySelectorAll('.pizza-size-option').forEach(option => {
            option.classList.remove('selected');
          });
          
          // Adiciona seleção ao tamanho clicado
          sizeOption.classList.add('selected');
          console.log("Size option marked as selected");
          
          // Atualiza o estado do botão
          updateAddButtonState();
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
    }    return null;
  }  // Função para atualizar o estado do botão adicionar
  function updateAddButtonState() {
    console.log("🔄 Updating add button state...");
    const addButton = document.getElementById("add-pizza-to-cart-btn");
    const borderCheckbox = document.getElementById("border-checkbox");
    const selectedSize = document.querySelector('.pizza-size-option.selected');
    
    console.log("Selected size:", selectedSize);
    console.log("Border checked:", borderCheckbox?.checked);
    
    if (!selectedSize) {
      addButton.disabled = true;
      addButton.textContent = "Selecione um tamanho";
      console.log("❌ No size selected - button disabled");
      return;
    }
      // Se tem tamanho selecionado, verifica se precisa de sabor da borda
    if (borderCheckbox.checked) {
      const selectedFlavor = document.querySelector('.flavor-card.selected');
      console.log("Selected flavor:", selectedFlavor);
      if (!selectedFlavor) {
        addButton.disabled = true;
        addButton.textContent = "Selecione o sabor da borda";
        console.log("❌ Border checked but no flavor selected - button disabled");
        return;
      }
    }
    
    // Se chegou aqui, pode habilitar o botão
    addButton.disabled = false;
    addButton.textContent = "Adicionar ao Carrinho";
    console.log("✅ All requirements met - button enabled");
  }

  // Função para adicionar pizza ao carrinho com as seleções feitas
  function addPizzaToCart(itemId, itemName) {
    const selectedSize = document.querySelector('.pizza-size-option.selected');
    const borderCheckbox = document.getElementById("border-checkbox");
    
    if (!selectedSize) {
      alert("Por favor, selecione um tamanho!");
      return;
    }
    
    const tamanho = selectedSize.dataset.tamanho;
    const preco = parseFloat(selectedSize.dataset.preco);
    const textoTamanho = selectedSize.dataset.texto;
    const tamanhoNome = textoTamanho.split('(')[0].trim();
    
    let precoFinal = preco;
    let nomeFinal = `${itemName} (${tamanhoNome})`;
    
    if (borderCheckbox.checked) {
      const selectedFlavorCard = document.querySelector('.flavor-card.selected');
      if (!selectedFlavorCard) {
        alert("Por favor, selecione o sabor da borda recheada!");
        return;
      }
      const saborBorda = selectedFlavorCard.dataset.flavor;
      precoFinal += 10.00; // Adiciona R$ 10,00 da borda
      nomeFinal += ` - Borda ${saborBorda}`;
    }
    
    // Usa o itemId único (categoria-id-tamanho) para garantir identificação única
    addToCart(`${itemId}-${tamanho}`, nomeFinal, precoFinal);
      // Fecha o modal
    const pizzaSizeModal = document.getElementById("pizza-size-modal");
    pizzaSizeModal.style.display = "none";
  }

  // Função para limpar carrinho
  function clearCart() {
    if (cartData.length === 0) return;
    
    if (confirm("Tem certeza que deseja limpar todo o carrinho?")) {
      cartData = [];
      saveCart();
      updateCartCount();
      renderCartItems();
      
      // Limpa também a observação
      const observationInput = document.getElementById('cart-observation');
      if (observationInput) {
        observationInput.value = '';
        localStorage.removeItem("cartObservation");
      }
      
      showAddToCartFeedback("Carrinho limpo!");
    }
  }
  // Função para limpar carrinho após finalizar pedido (sem confirmação)
  function clearCartAfterOrder() {
    if (cartData.length === 0) return;
    
    cartData = [];
    saveCart();
    updateCartCount();
    renderCartItems();
    
    // Limpa também a observação
    const observationInput = document.getElementById('cart-observation');
    if (observationInput) {
      observationInput.value = '';
      localStorage.removeItem("cartObservation");
    }
    
    showAddToCartFeedback("Pedido enviado! Carrinho limpo automaticamente.");
    
    // Fecha o modal do carrinho após um pequeno delay
    setTimeout(() => {
      cartModal.style.display = "none";
    }, 1500);
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
    updateCartCount();    showAddToCartFeedback(nome);
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
    
    // Define ícone e mensagem baseado no tipo de notificação
    let icon = "✓";
    let message = "";
    
    if (itemName.includes("Carrinho limpo")) {
      icon = "";
      message = itemName;
    } else if (itemName.includes("Borda") && itemName.includes("selecionada")) {
      icon = "✓";
      message = itemName;
    } else {
      icon = "✓";
      message = `${itemName} adicionado ao carrinho!`;
    }
    
    feedback.innerHTML = `
      <div class="feedback-content">
        ${icon} <strong>${message}</strong>
      </div>
    `;
    
    document.body.appendChild(feedback);
    
    // Remove o feedback após 3 segundos
    setTimeout(() => {
      if (feedback.parentNode) {
        feedback.remove();
      }    }, 3000);
  }

  // Renderiza itens no modal
  function renderCartItems() {
    cartItemsContainer.innerHTML = "";

    if (cartData.length === 0) {
      const emptyMessage = document.createElement("div");
      emptyMessage.className = "empty-cart-message";
      emptyMessage.innerHTML = `
        <p>Seu carrinho está vazio</p>
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
    finalizarPedidoBtn.style.cursor = "pointer";// Adiciona botão de limpar carrinho
    const clearCartButton = document.createElement("button");
    clearCartButton.className = "clear-cart-btn";
    clearCartButton.innerHTML = `Limpar Carrinho`;
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

  // Processa o pedido com a forma de pagamento selecionada
  function processOrder(paymentMethod) {
    selectedPaymentMethod = paymentMethod;
    
    const message = generateWhatsAppMessage();
    const url = "https://wa.me/5522999964529?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
    
    // Fecha a modal de pagamento
    paymentModal.style.display = "none";
    
    // Limpa o carrinho automaticamente após finalizar o pedido
    clearCartAfterOrder();
  }  // Gera mensagem para WhatsApp
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

    let message = `${saudacao}\n\n`;
    message += `*MEU PEDIDO:*\n`;
    message += `━━━━━━━━━━━━━━━━━━\n\n`;
    
    cartData.forEach((item, index) => {
      const subtotal = (item.preco * item.quantidade).toFixed(2).replace('.', ',');
      message += `${index + 1}. *${item.nome}*\n`;
      message += `   Quantidade: ${item.quantidade}x\n`;
      message += `   Valor unitário: R$ ${item.preco.toFixed(2).replace('.', ',')}\n`;
      message += `   Subtotal: R$ ${subtotal}\n\n`;
    });
    
    const totalValue = cartData.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
    const totalFormatted = totalValue.toFixed(2).replace('.', ',');
      message += `━━━━━━━━━━━━━━━━━━\n`;
    message += `*TOTAL: R$ ${totalFormatted}*\n`;
    message += `(frete não incluso)\n\n`;
    message += `*FORMA DE PAGAMENTO:* ${selectedPaymentMethod}\n\n`;
    
    // Adiciona observações se houver
    const observationInput = document.getElementById('cart-observation');
    const observation = observationInput ? observationInput.value.trim() : '';
    
    if (observation) {
      message += `*OBSERVAÇÕES:*\n${observation}\n\n`;
    }
    
    message += `Vim do cardápio digital da 3D MIX!\n`;
    message += `Gostaria de confirmar meu pedido e saber sobre o frete.`;

    return message;
  }// Event listener para checkbox da borda recheada
  document.addEventListener("change", (event) => {
    if (event.target.id === "border-checkbox") {
      const borderFlavorContainer = document.getElementById("border-flavor-container");
      
      if (event.target.checked) {
        borderFlavorContainer.style.display = "block";
      } else {
        borderFlavorContainer.style.display = "none";
        // Remove seleção de todos os cards
        document.querySelectorAll('.flavor-card').forEach(card => {
          card.classList.remove('selected');
        });      }
      
      // Atualiza o estado do botão
      const pizzaSizeModal = document.getElementById("pizza-size-modal");
      if (pizzaSizeModal.style.display === "block") {
        updateAddButtonState();
      }
    }
  });// Event listener para seleção de sabores da borda (cards)
  document.addEventListener("click", (event) => {
    if (event.target.closest('.flavor-card')) {
      const clickedCard = event.target.closest('.flavor-card');
      const flavorName = clickedCard.dataset.flavor;
        // Remove seleção de outros cards
      document.querySelectorAll('.flavor-card').forEach(card => {
        card.classList.remove('selected');
      });
      
      // Adiciona seleção ao card clicado
      clickedCard.classList.add('selected');
      
      // Mostra notificação de seleção do sabor
      showAddToCartFeedback(`Borda ${flavorName} selecionada`);
        // Atualiza o estado do botão
      const pizzaSizeModal = document.getElementById("pizza-size-modal");
      if (pizzaSizeModal.style.display === "block") {
        updateAddButtonState();
      }
    }
      // Event listener para seleção de forma de pagamento na modal de pagamento
    if (event.target.closest('.payment-card') && paymentModal.style.display === "block") {
      const clickedCard = event.target.closest('.payment-card');
      const paymentMethod = clickedCard.dataset.payment;
      
      // Processa o pedido imediatamente ao selecionar forma de pagamento
      processOrder(paymentMethod);
    }
  });

// ===== FUNCIONALIDADES DO TIPO DE PEDIDO =====

// Event listener para seleção do tipo de pedido
document.addEventListener("click", (event) => {
  if (event.target.closest('.order-type-card')) {
    const clickedCard = event.target.closest('.order-type-card');
    const orderType = clickedCard.dataset.orderType;
    
    // Remove seleção de todos os cards
    document.querySelectorAll('.order-type-card').forEach(card => {
      card.classList.remove('selected');
    });
    
    // Adiciona seleção ao card clicado
    clickedCard.classList.add('selected');
    
    // Aguarda um pouco para mostrar a seleção, depois procede
    setTimeout(() => {
      if (orderType === 'delivery') {
        // Para delivery, vai para o modal de pagamento
        document.getElementById("order-type-modal").style.display = "none";
        paymentModal.style.display = "block";
      } else if (orderType === 'balcao') {
        // Para balcão, mostra a lista organizada
        showOrderListForBalcao();
      }
      
      // Remove a seleção após processar
      setTimeout(() => {
        clickedCard.classList.remove('selected');
      }, 100);
    }, 300);
  }
});

// Função para mostrar lista do pedido para o balcão
function showOrderListForBalcao() {
  document.getElementById("order-type-modal").style.display = "none";
  renderOrderList();
  document.getElementById("order-list-modal").style.display = "block";
}

// Função para renderizar a lista do pedido
function renderOrderList() {
  const orderListItems = document.getElementById("order-list-items");
  const orderListTotal = document.getElementById("order-list-total");
  
  if (cartData.length === 0) {
    orderListItems.innerHTML = '<p style="text-align: center; color: #666;">Nenhum item no carrinho</p>';
    orderListTotal.innerHTML = 'Total: R$ 0,00';
    return;
  }
  
  let html = '';
  let total = 0;
  
  cartData.forEach(item => {
    const itemTotal = item.preco * item.quantidade;
    total += itemTotal;
    
    // Monta detalhes do item (tamanho, borda, etc.)
    let details = '';
    if (item.tamanho) {
      details += `Tamanho: ${item.tamanho}`;
    }
    if (item.bordaRecheada && item.saborBorda) {
      details += details ? ` | Borda: ${item.saborBorda}` : `Borda: ${item.saborBorda}`;
    }
      html += `
      <div class="order-list-item">
        <div class="order-list-item-info">
          <div class="order-list-item-name">${item.nome}</div>
          ${details ? `<div class="order-list-item-details">${details}</div>` : ''}
        </div>
        <div class="order-list-item-bottom">
          <div class="order-list-item-quantity">${item.quantidade}x</div>
          <div class="order-list-item-price">R$ ${itemTotal.toFixed(2).replace('.', ',')}</div>
        </div>
      </div>
    `;
  });
  
  orderListItems.innerHTML = html;
  orderListTotal.innerHTML = `Total: R$ ${total.toFixed(2).replace('.', ',')}`;
}
});