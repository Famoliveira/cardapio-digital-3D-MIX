// scripts/cardapio.js

// Configuração das categorias e seus nomes de exibição
const categorias = [
  {
    id: 'destaques', nome: 'Destaques',
    icon: 'assets/icons/destaques.png',
    imagemFundo: 'assets/category-backgrounds/destaques-bg.jpg'
  },
  {
    id: 'combos', nome: 'Combos',
    icon: 'assets/icons/combos.png',
    imagemFundo: 'assets/category-backgrounds/combos-bg.jpg'
  },
  {
    id: 'pizzas', nome: 'Pizzas',
    icon: 'assets/icons/pizzas.png',
    imagemFundo: 'assets/category-backgrounds/pizzas-bg.jpg'
  },
  {
    id: 'hamburgueres', // ID corrigido: minúsculas
    nome: 'Hambúrgueres', // Nome de exibição
    icon: 'assets/icons/hamburgueres.png', // Caminho corrigido: minúsculas
    imagemFundo: 'assets/category-backgrounds/hamburgueres-bg.jpg' // Caminho corrigido: minúsculas
  },
  {
    id: 'pasteis', nome: 'Pastéis',
    icon: 'assets/icons/pasteis.png',
    imagemFundo: 'assets/category-backgrounds/pasteis-bg.jpg'
  },
  {
    id: 'esfihas', nome: 'Esfihas',
    icon: 'assets/icons/esfihas.png',
    imagemFundo: 'assets/category-backgrounds/esfihas-bg.jpg'
  },
  {
    id: 'crepes', nome: 'Crepes',
    icon: 'assets/icons/crepes.png',
    imagemFundo: 'assets/category-backgrounds/crepes-bg.jpg'
  },
  {
    id: 'batatas', nome: 'Batatas',
    icon: 'assets/icons/batatas.png',
    imagemFundo: 'assets/category-backgrounds/batatas-bg.jpg'
  },
  {
    id: 'bebidas', nome: 'Bebidas',
    icon: 'assets/icons/bebidas.png',
    imagemFundo: 'assets/category-backgrounds/bebidas-bg.jpg'
  }
];

// Dados do cardápio
const cardapio = {
  combos: {
    tipoEstrutura: 'hierarquica',
    observacoesGerais: [
      "Pizza de bacon não entra no combo.",
      "Borda recheada: Catupiry, Cheddar, Chocolate ou Queijo – R$ 10,00",
      "Consulte nossos refrigerantes disponíveis para os combos.",
      "Sabor das pizzas para combo: exceto a opção 3D MIX.",
      "Pizzas pedidas para serem embaladas terão um acréscimo de apenas R$ 1,00 por embalagem."
    ],
    subsecoes: [
      {
        tituloSubsecao: 'Combos de Pizza',
        idSubsecao: 'combos-pizza',
        grupos: [
          {
            itens: [
              { id: 1, nome: 'Combo 1', descricao: 'Pizza Grande (35 cm) + Pizza Grande (35 cm) + Pizza Pequena Doce', preco: 94.90, destaque: true },
              { id: 2, nome: 'Combo 2', descricao: 'Pizza Grande (35 cm) + Pizza Pequena (doce ou salgada) + Refrigerante', preco: 77.00, destaque: false },
              { id: 3, nome: 'Combo 3', descricao: 'Pizza Família (40 cm) + Pizza Grande (35 cm)', preco: 91.90, destaque: false },
              { id: 4, nome: 'Combo 4', descricao: 'Pizza Família (40 cm) + Pizza Família (40 cm) + Pizza Grande (35 cm) (doce ou salgada)', preco: 119.90, destaque: false },
              { id: 5, nome: 'Combo 5', descricao: '3 Pizzas Grandes (35 cm)', preco: 105.90, destaque: false },
              { id: 6, nome: 'Combo 6', descricao: 'Pizza Média (30 cm) + Refrigerante', preco: 41.90, destaque: false },
              { id: 7, nome: 'Combo 7', descricao: 'Na compra de uma Pizza Gigante, você ganha um Refrigerante', preco: 74.90, destaque: true }
            ]
          }
        ]
      },
      {
        tituloSubsecao: 'Combos de Lanche',
        idSubsecao: 'combos-lanche',
        grupos: [
          {
            itens: [
              { id: 8, nome: 'Trio 19', descricao: 'X-tudo + Batata pequena + 1 Guaravita', preco: 32.00, destaque: true },
              { id: 9, nome: 'Combo Mix', descricao: 'X-tudo + 1 Milk Shake (300 ml)', preco: 29.90, destaque: true },
              { id: 10, nome: 'Combo X-Egg', descricao: '5 Egg Burguer + leve 1 Refrigerante', preco: 59.90, destaque: false },
              { id: 11, nome: 'Combo Bom de Boca', descricao: '2 Hambúrgueres + 1 porção de batata + leve 2 Guaravitas grátis', preco: 45.00, destaque: false },
              { id: 12, nome: 'Super Combo (Egg Burguer)', descricao: '3 Egg Burguer + 1 Refrigerante + 1 Batata Grande', preco: 49.90, destaque: false },
              { id: 13, nome: 'Mega Combo', descricao: '3 × Egg Bacon + 3 porções de batata + 1 refrigerante', preco: 79.90, destaque: false },
              { id: 14, nome: 'Dia do X-Bacon', descricao: '3 × X-Bacon + 3 porções de batata + 1 refrigerante (ganhe o refri!)', preco: 73.00, destaque: false },
              { id: 15, nome: 'Combo Top', descricao: '3 × Egg Burguer + 3 porções de batata + 1 refrigerante', preco: 59.90, destaque: false },
              { id: 16, nome: 'Super Combo (X-Tudo)', descricao: '3 × X-Tudo + porções de batata + 1 refrigerante', preco: 94.50, destaque: false },
              { id: 17, nome: 'Trio 04', descricao: '1 × X-Egg Burguer + batata pequena + 1 Guaravita', preco: 21.00, destaque: false },
              { id: 18, nome: 'Trio 28', descricao: '1 × X-Grill (com carne de picanha) + batata pequena + 1 Guaravita', preco: 24.50, destaque: false }
            ]
          }
        ]
      },
      {
        tituloSubsecao: 'Semana dose dupla',
        idSubsecao: 'semana-dose-dupla',
        grupos: [
          {
            itens: [
              { id: 19, nome: 'Hambúrguer + Hambúrguer + Guaravita', descricao: '2 Hambúrguer simples acompanhados de 1 Guaravita.', preco: 13.00, destaque: true },
              { id: 20, nome: 'X-Burguer + X-Burguer + Guaravita', descricao: '2 X-Burguer acompanhados de 1 Guaravita.', preco: 19.80, destaque: false },
              { id: 21, nome: 'X-Egg Burguer + X-Egg Burguer + Guaravita', descricao: '2 X-Egg Burguer acompanhados de 1 Guaravita.', preco: 24.90, destaque: false },
              { id: 22, nome: 'X-Frango + X-Frango + Guaravita', descricao: '2 X-Frango acompanhados de 1 Guaravita.', preco: 32.90, destaque: false },
              { id: 23, nome: 'X-Egg Frango + X-Egg Frango + Guaravita', descricao: '2 X-Egg Frango acompanhados de 1 Guaravita.', preco: 34.90, destaque: false },
              { id: 24, nome: 'X-Bacon + X-Bacon + Guaravita', descricao: '2 X-Bacon acompanhados de 1 Guaravita.', preco: 32.90, destaque: false },
              { id: 25, nome: 'X-Egg Bacon + X-Egg Bacon + Guaravita', descricao: '2 X-Egg Bacon acompanhados de 1 Guaravita.', preco: 35.90, destaque: false }
            ]
          }
        ]
      }
    ]
  },
  pizzas: {
    tipoEstrutura: 'hierarquica',
    observacoesGerais: [
      "Borda recheada: Catupiry, Cheddar, Chocolate ou Queijo – R$ 10,00",
      "Pizzas pedidas para serem embaladas terão um acréscimo de apenas R$ 1,00 por embalagem."
    ],
    subsecoes: [
      {
        tituloSubsecao: 'Pizzas Salgadas',
        idSubsecao: 'pizzas-salgadas',
        grupos: [
          {
            nomeGrupo: 'Sabores Salgados',
            itens: [
              { id: 1, nome: 'Calabresa', descricao: 'Molho especial, mussarela, orégano e calabresa.', precos: { grande: { texto: 'Grande (8 fatias)', valor: 43.00 }, familia: { texto: 'Família (12 fatias)', valor: 52.00 }, gigante: { texto: 'Gigante (16 fatias)', valor: 69.90 } }, destaque: true },
              { id: 2, nome: 'Toscana', descricao: 'Molho especial, mussarela, orégano, calabresa, azeitonas pretas e cebola.', precos: { grande: { texto: 'Grande (8 fatias)', valor: 43.00 }, familia: { texto: 'Família (12 fatias)', valor: 52.00 }, gigante: { texto: 'Gigante (16 fatias)', valor: 69.90 } }, destaque: false },
              { id: 3, nome: 'Portuguesa', descricao: 'Molho especial, mussarela, orégano, calabresa, azeitona, presunto, tomate, cebola, pimentão e ovos cozidos.', precos: { grande: { texto: 'Grande (8 fatias)', valor: 43.00 }, familia: { texto: 'Família (12 fatias)', valor: 52.00 }, gigante: { texto: 'Gigante (16 fatias)', valor: 69.00 } }, destaque: true },
              { id: 4, nome: 'Americana', descricao: 'Molho especial, mussarela, orégano, azeitona, ovos cozidos e bacon.', precos: { grande: { texto: 'Grande (8 fatias)', valor: 45.00 }, familia: { texto: 'Família (12 fatias)', valor: 55.00 }, gigante: { texto: 'Gigante (16 fatias)', valor: 69.90 } }, destaque: false },
              { id: 5, nome: '4 Queijos', descricao: 'Molho especial, mussarela, orégano, gorgonzola e parmesão.', precos: { grande: { texto: 'Grande (8 fatias)', valor: 43.00 }, familia: { texto: 'Família (12 fatias)', valor: 52.00 }, gigante: { texto: 'Gigante (16 fatias)', valor: 69.90 } }, destaque: true },
              { id: 6, nome: 'Ao Alho', descricao: 'Molho especial, mussarela, orégano e alho torrado.', precos: { grande: { texto: 'Grande (8 fatias)', valor: 43.00 }, familia: { texto: 'Família (12 fatias)', valor: 52.00 }, gigante: { texto: 'Gigante (16 fatias)', valor: 69.90 } }, destaque: false },
              { id: 7, nome: 'Marguerita', descricao: 'Molho especial, mussarela, orégano, tomate e manjericão.', precos: { grande: { texto: 'Grande (8 fatias)', valor: 43.00 }, familia: { texto: 'Família (12 fatias)', valor: 52.00 }, gigante: { texto: 'Gigante (16 fatias)', valor: 69.90 } }, destaque: true },
              { id: 8, nome: 'Frango', descricao: 'Molho especial, mussarela, orégano e frango desfiado.', precos: { grande: { texto: 'Grande (8 fatias)', valor: 45.00 }, familia: { texto: 'Família (12 fatias)', valor: 55.00 }, gigante: { texto: 'Gigante (16 fatias)', valor: 69.90 } }, destaque: false },
              { id: 9, nome: 'Frango c/ Catupiry', descricao: 'Molho especial, mussarela, orégano, frango desfiado e Catupiry.', precos: { grande: { texto: 'Grande (8 fatias)', valor: 45.00 }, familia: { texto: 'Família (12 fatias)', valor: 55.00 }, gigante: { texto: 'Gigante (16 fatias)', valor: 69.90 } }, destaque: true },
              { id: 10, nome: 'Frango c/ Catupiry e Palmito', descricao: 'Molho especial, mussarela, orégano, frango desfiado, Catupiry e palmito.', precos: { grande: { texto: 'Grande (8 fatias)', valor: 45.00 }, familia: { texto: 'Família (12 fatias)', valor: 55.00 }, gigante: { texto: 'Gigante (16 fatias)', valor: 69.90 } }, destaque: false },
              { id: 11, nome: 'Frango c/ Catupiry e Champignon', descricao: 'Molho especial, mussarela, orégano, frango desfiado, Catupiry e champignon.', precos: { grande: { texto: 'Grande (8 fatias)', valor: 45.00 }, familia: { texto: 'Família (12 fatias)', valor: 55.00 }, gigante: { texto: 'Gigante (16 fatias)', valor: 69.90 } }, destaque: false },
              { id: 12, nome: 'Peito de Peru', descricao: 'Molho especial, mussarela, orégano e peito de peru desfiado.', precos: { grande: { texto: 'Grande (8 fatias)', valor: 43.00 }, familia: { texto: 'Família (12 fatias)', valor: 52.00 }, gigante: { texto: 'Gigante (16 fatias)', valor: 69.90 } }, destaque: false },
              { id: 13, nome: 'Três Porquinhos', descricao: 'Molho especial, mussarela, bacon, presunto, calabresa e orégano.', precos: { grande: { texto: 'Grande (8 fatias)', valor: 45.00 }, familia: { texto: 'Família (12 fatias)', valor: 55.00 }, gigante: { texto: 'Gigante (16 fatias)', valor: 69.90 } }, destaque: false },
              { id: 14, nome: '3D Mix (Monte a sua)', descricao: 'Monte sua pizza com até 4 sabores (Consulte sabores participantes).', precos: { grande: { texto: 'Grande (8 fatias)', valor: 45.00 }, familia: { texto: 'Família (12 fatias)', valor: 55.00 }, gigante: { texto: 'Gigante (16 fatias)', valor: 69.90 } }, destaque: false }
            ]
          }
        ]
      },
      {
        tituloSubsecao: 'Pizzas Doces',
        idSubsecao: 'pizzas-doces',
        grupos: [
          {
            nomeGrupo: 'Sabores Doces',
            itens: [
              { id: 15, nome: 'Chocolate', descricao: 'Chocolate em calda e mussarela.', precos: { media: { texto: 'Média (4/8 fatias)', valor: 29.80 }, grande: { texto: 'Grande (8 fatias)', valor: 39.60 } }, destaque: false },
              { id: 16, nome: 'Chocolate c/ Banana', descricao: 'Chocolate em calda, fatias de banana e mussarela.', precos: { media: { texto: 'Média (4/8 fatias)', valor: 29.80 }, grande: { texto: 'Grande (8 fatias)', valor: 39.60 } }, destaque: false },
              { id: 17, nome: 'Brigadeiro', descricao: 'Chocolate em calda, granulado e mussarela.', precos: { media: { texto: 'Média (4/8 fatias)', valor: 29.80 }, grande: { texto: 'Grande (8 fatias)', valor: 39.60 } }, destaque: true },
              { id: 18, nome: 'Prestígio', descricao: 'Chocolate em calda, coco ralado e mussarela.', precos: { media: { texto: 'Média (4/8 fatias)', valor: 29.80 }, grande: { texto: 'Grande (8 fatias)', valor: 39.60 } }, destaque: true },
              { id: 19, nome: 'Banana c/ Canela', descricao: 'Mussarela, banana, canela e açúcar.', precos: { media: { texto: 'Média (4/8 fatias)', valor: 29.80 }, grande: { texto: 'Grande (8 fatias)', valor: 39.60 } }, destaque: false }
            ]
          }
        ]
      }
    ]
  },
  hamburgueres: { // Chave corrigida: minúsculas
    tipoEstrutura: 'hierarquica',
    subsecoes: [
      {
        tituloSubsecao: 'Hambúrguer com Carne',
        idSubsecao: 'hamburgueres-carne',
        grupos: [
          {
            itens: [
              { id: 1, nome: 'HAMBÚRGUER', descricao: 'Pão, carne, salada, molho e cebola', preco: 7.00, destaque: false },
              { id: 2, nome: 'X-BÚRGUER', descricao: 'Pão, carne, salada, queijo, molho e cebola', preco: 9.90, destaque: false },
              { id: 3, nome: 'EGG BÚRGUER', descricao: 'Pão, carne, salada, ovo, molho e cebola', preco: 9.90, destaque: false },
              { id: 4, nome: 'X-EGG BÚRGUER', descricao: 'Pão, carne, salada, queijo, ovo, molho e cebola', preco: 12.50, destaque: true },
              { id: 5, nome: 'DOUBLE BÚRGUER', descricao: 'Pão, 2 carnes, salada, molho e cebola', preco: 9.90, destaque: false },
              { id: 6, nome: 'DOUBLE X-BÚRGUER', descricao: 'Pão, 2 carnes, 2 queijos, salada, molho e cebola', preco: 17.90, destaque: true },
              { id: 7, nome: 'DOUBLE EGG BÚRGUER', descricao: 'Pão, 2 carnes, 2 ovos, salada, molho e cebola', preco: 17.90, destaque: false },
              { id: 8, nome: 'DOUBLE EGG X-BÚRGUER', descricao: 'Pão, 2 carnes, 2 queijos, 2 ovos, salada, molho e cebola', preco: 21.00, destaque: false },
            ]
          }
        ]
      },
      {
        tituloSubsecao: 'Hambúrguer com Frango',
        idSubsecao: 'hamburgueres-frango',
        grupos: [
          {
            itens: [
              { id: 9, nome: 'FRANGO BÚRGUER', descricao: 'Pão, frango, salada, molho e cebola', preco: 14.90, destaque: false },
              { id: 10, nome: 'X-FRANGO', descricao: 'Pão, frango, salada, queijo, molho e cebola', preco: 16.90, destaque: false },
              { id: 11, nome: 'EGG FRANGO', descricao: 'Pão, frango, salada, ovo, molho e cebola', preco: 16.90, destaque: false },
              { id: 12, nome: 'X-EGG FRANGO', descricao: 'Pão, frango, salada, queijo, ovo, molho e cebola', preco: 18.90, destaque: false },
            ]
          }
        ]
      },
      {
        tituloSubsecao: 'Hambúrguer com Bacon',
        idSubsecao: 'hamburgueres-bacon',
        grupos: [
          {
            itens: [
              { id: 13, nome: 'X-BACON', descricao: 'Pão, carne, queijo, bacon, salada, molho e cebola', preco: 16.90, destaque: true },
              { id: 14, nome: 'X-EGG BACON', descricao: 'Pão, carne, queijo, bacon, ovo, salada, molho e cebola', preco: 18.90, destaque: false },
              { id: 15, nome: 'DOUBLE X-BACON', descricao: 'Pão, 2 carnes, 2 queijos, 2 bacon, salada, molho e cebola', preco: 25.90, destaque: false },
              { id: 16, nome: 'DOUBLE X-EGG BACON', descricao: 'Pão, 2 carnes, 2 queijos, 2 ovos, 2 bacon, salada, molho e cebola', preco: 26.90, destaque: false },
              { id: 17, nome: 'X-BACON FRANGO', descricao: 'Pão, frango, queijo, bacon, salada, molho e cebola', preco: 20.90, destaque: false },
              { id: 18, nome: 'X-EGG BACON FRANGO', descricao: 'Pão, frango, queijo, ovo, bacon, salada, molho e cebola', preco: 22.90, destaque: false },
              { id: 19, nome: 'X-TUDO', descricao: 'Pão, carne, frango, bacon, ovo, queijo, salada, molho e cebola', preco: 23.50, destaque: true },
            ]
          }
        ]
      },
      {
        tituloSubsecao: 'Hambúrguer com Calabresa',
        idSubsecao: 'hamburgueres-calabresa',
        grupos: [
          {
            itens: [
              { id: 20, nome: 'X-CALABRESA', descricao: 'Pão, carne, calabresa, queijo, salada, molho e cebola', preco: 16.90, destaque: false },
              { id: 21, nome: 'X-EGG CALABRESA', descricao: 'Pão, carne, calabresa, queijo, ovo, salada, molho e cebola', preco: 18.90, destaque: false },
              { id: 22, nome: 'DOUBLE X-CALABRESA', descricao: 'Pão, 2 carnes, 2 queijos, 2 calabresas, salada, molho e cebola', preco: 25.90, destaque: false },
              { id: 23, nome: 'DOUBLE X-EGG CALABRESA', descricao: 'Pão, 2 carnes, 2 calabresas, 2 queijos, 2 ovos, salada, molho e cebola', preco: 27.50, destaque: false },
              { id: 24, nome: 'X-FRANGOBRESA', descricao: 'Pão, frango, calabresa, queijo, salada, molho e cebola', preco: 21.50, destaque: false },
              { id: 25, nome: 'X-EGG FRANGOBRESA', descricao: 'Pão, frango, calabresa, queijo, ovo, salada, molho e cebola', preco: 22.90, destaque: false },
              { id: 26, nome: 'X-TUDOBRESA', descricao: 'Pão, carne, calabresa, frango, ovo, queijo, salada, molho e cebola', preco: 24.90, destaque: false },
            ]
          }
        ]
      },
      {
        tituloSubsecao: 'Hambúrguer com Picanha',
        idSubsecao: 'hamburgueres-picanha',
        grupos: [
          {
            itens: [
              { id: 27, nome: 'GRILL BÚRGUER', descricao: 'Pão, hamb. de picanha, salada, molho e cebola', preco: 11.50, destaque: false },
              { id: 28, nome: 'X-GRILL', descricao: 'Pão, hamb. de picanha, queijo, salada, molho e cebola', preco: 16.00, destaque: false },
              { id: 29, nome: 'EGG GRILL', descricao: 'Pão, hamb. de picanha, ovo, salada, molho e cebola', preco: 16.00, destaque: false },
              { id: 30, nome: 'X-EGG GRILL', descricao: 'Pão, hamb. de picanha, ovo, queijo, salada, molho e cebola', preco: 18.50, destaque: false },
              { id: 31, nome: 'DOUBLE GRILL', descricao: 'Pão, 2 hamb. de picanha, salada, molho e cebola', preco: 17.50, destaque: false },
              { id: 32, nome: 'DOUBLE X-GRILL', descricao: 'Pão, 2 hamb. de picanha, 2 queijos, salada, molho e cebola', preco: 20.00, destaque: false },
              { id: 33, nome: 'DOUBLE EGG GRILL', descricao: 'Pão, 2 hamb. de picanha, 2 ovos, salada, molho e cebola', preco: 20.00, destaque: false },
              { id: 34, nome: 'DOUBLE EGG X-GRILL', descricao: 'Pão, 2 hamb. de picanha, 2 ovos, 2 queijos, salada, molho e cebola', preco: 22.90, destaque: false },
              { id: 35, nome: 'GRILL BACON', descricao: 'Pão, hamb. de picanha, queijo, bacon, salada, molho e cebola', preco: 20.00, destaque: false },
              { id: 36, nome: 'GRILL EGG BACON', descricao: 'Pão, hamb. de picanha, bacon, ovo, queijo, salada, molho e cebola', preco: 23.00, destaque: false },
              { id: 37, nome: 'GRILL CALABRESA', descricao: 'Pão, hamb. de picanha, calabresa, queijo, salada, molho e cebola', preco: 21.50, destaque: false },
              { id: 38, nome: 'GRILL EGG CALABRESA', descricao: 'Pão, hamb. de picanha, calabresa, ovo, queijo, salada, molho e cebola', preco: 23.50, destaque: false },
              { id: 39, nome: 'DOUBLE GRILL BACON', descricao: 'Pão, 2 hamb. de picanha, 2 bacon, 2 queijos, salada, molho e cebola', preco: 26.50, destaque: false },
              { id: 40, nome: 'DOUBLE EGG GRILL BACON', descricao: 'Pão, 2 hamb. de picanha, 2 bacon, 2 ovos, 2 queijos, salada, molho e cebola', preco: 30.90, destaque: false },
              { id: 41, nome: 'DOUBLE GRILL CALABRESA', descricao: 'Pão, 2 hamb. de picanha, 2 calabresas, 2 queijos, salada, molho e cebola', preco: 27.00, destaque: false },
              { id: 42, nome: 'DOUBLE EGG GRILL CALABRESA', descricao: 'Pão, 2 hamb. de picanha, 2 calabresas, 2 ovos, 2 queijos, salada, molho e cebola', preco: 29.90, destaque: false },
            ]
          }
        ]
      },
      {
        tituloSubsecao: 'Hambúrguer Mix',
        idSubsecao: 'hamburgueres-mix',
        grupos: [
          {
            itens: [
              { id: 43, nome: 'GALLISBÚRGUER', descricao: 'Pão, carne, frango, salada, molho e cebola', preco: 11.50, destaque: false },
              { id: 44, nome: 'X-GALLISBÚRGUER', descricao: 'Pão, carne, frango, queijo, salada, molho e cebola', preco: 19.90, destaque: false },
              { id: 45, nome: 'X-EGG GALLISBÚRGUER', descricao: 'Pão, carne, frango, queijo, ovo, salada, molho e cebola', preco: 21.00, destaque: false },
              { id: 46, nome: 'GRILL GALLIS', descricao: 'Pão, hamb. de picanha, frango, salada, molho e cebola', preco: 21.50, destaque: false },
              { id: 47, nome: 'X-GRILL GALLIS', descricao: 'Pão, hamb. de picanha, frango, queijo, salada, molho e cebola', preco: 22.50, destaque: false },
              { id: 48, nome: 'X-EGG GRILL GALLIS', descricao: 'Pão, hamb. de picanha, frango, queijo, ovo, salada, molho e cebola', preco: 23.90, destaque: false },
              { id: 49, nome: 'BIG BOCÃO', descricao: 'Pão, carne, frango, bacon, calabresa, ovo, queijo, salada, molho e cebola', preco: 26.90, destaque: true },
              { id: 50, nome: 'GRILL TUDO', descricao: 'Pão, hamb. de picanha, frango, bacon, ovo, queijo, salada, molho e cebola', preco: 28.50, destaque: false },
              { id: 51, nome: 'GRILL TUDOBRESA', descricao: 'Pão, hamb. de picanha, frango, calabresa, ovo, queijo, salada, molho e cebola', preco: 29.70, destaque: false },
              { id: 52, nome: 'TSUNAMI', descricao: 'Pão, hamb. de picanha, frango, 2 calabresas, 2 ovos, bacon, queijo, salada, molho e cebola', preco: 35.00, destaque: false },
              { id: 53, nome: 'BOM DE BOCA', descricao: 'Pão, 2 carnes, 2 hamb. de picanha, frango, 2 calabresas, 2 ovos, 2 bacon, 2 queijos, salada, molho e cebola', preco: 45.00, destaque: false },
            ]
          }
        ]
      }
    ]
  },
  pasteis: {
    tipoEstrutura: 'hierarquica',
    subsecoes: [
      {
        tituloSubsecao: 'Pastéis Salgados',
        idSubsecao: 'pasteis-salgados-todos',
        grupos: [
          {
            nomeGrupo: 'Carne',
            itens: [
              { id: 1, nome: 'Pastel de Carne', descricao: 'Tradicional recheio de carne moída.', preco: 8.90, destaque: true },
              { id: 2, nome: 'Pastel de Carne com Queijo e Orégano', descricao: 'Carne moída com mussarela e toque de orégano.', preco: 8.90, destaque: false },
              { id: 3, nome: 'Pastel de Carne com Ovo e Azeitona', descricao: 'Carne moída com ovo cozido e azeitonas fatiadas.', preco: 8.90, destaque: false },
              { id: 4, nome: 'Pastel de Carne com Ovo, Azeitona e Catupiry', descricao: 'Carne, ovo, azeitona e catupiry cremoso.', preco: 8.90, destaque: false },
              { id: 5, nome: 'Pastel de Carne com Banana e Queijo', descricao: 'Carne com banana caramelizada e mussarela.', preco: 8.90, destaque: false },
              { id: 6, nome: 'Pastel de Carne com Azeitona e Provolone', descricao: 'Carne com azeitonas e provolone derretido.', preco: 8.90, destaque: false },
              { id: 7, nome: 'Pastel de Carne com Ovo e Queijo', descricao: 'Carne, ovo e mussarela.', preco: 8.90, destaque: false },
              { id: 8, nome: 'Pastel de Carne com Ovo, Azeitona e Queijo', descricao: 'Carne, ovo, azeitonas e mussarela.', preco: 8.90, destaque: false },
              { id: 9, nome: 'Pastel de Carne com Provolone', descricao: 'Carne com provolone cremoso.', preco: 8.90, destaque: false },
              { id: 10, nome: 'Pastel de Carne com Napolitano', descricao: 'Carne com queijo, presunto, tomate e orégano.', preco: 8.90, destaque: false },
              { id: 11, nome: 'Pastel de Carne com Palmito', descricao: 'Carne com palmito macio.', preco: 8.90, destaque: false },
              { id: 12, nome: 'Pastel de Carne com Ovo e Milho', descricao: 'Carne, ovo e milho verde.', preco: 8.90, destaque: false },
              { id: 13, nome: 'Pastel de Carne com Ovo', descricao: 'Carne moída com ovo cozido.', preco: 8.90, destaque: false },
              { id: 14, nome: 'Pastel de Carne com Azeitona', descricao: 'Carne com azeitonas fatiadas.', preco: 8.90, destaque: false },
              { id: 15, nome: 'Pastel de Carne com Presunto', descricao: 'Carne com presunto fatiado.', preco: 8.90, destaque: false }
            ]
          },
          {
            nomeGrupo: 'Frango',
            itens: [
              { id: 16, nome: 'Pastel de Frango', descricao: 'Recheio clássico de frango desfiado.', preco: 8.90, destaque: true },
              { id: 17, nome: 'Pastel de Frango com Cheddar', descricao: 'Frango desfiado com cheddar cremoso.', preco: 8.90, destaque: false },
              { id: 18, nome: 'Pastel de Frango com Catupiry', descricao: 'Frango com catupiry autêntico.', preco: 8.90, destaque: false },
              { id: 19, nome: 'Pastel de Frango com Palmito', descricao: 'Frango desfiado com palmito.', preco: 8.90, destaque: false },
              { id: 20, nome: 'Pastel de Frango com Napolitano', descricao: 'Frango com queijo, presunto, tomate e orégano.', preco: 8.90, destaque: false },
              { id: 21, nome: 'Pastel de Frango com Catupiry e Palmito', descricao: 'Frango, catupiry e palmito.', preco: 8.90, destaque: false },
              { id: 22, nome: 'Pastel de Frango com Provolone', descricao: 'Frango com provolone derretido.', preco: 8.90, destaque: false },
              { id: 23, nome: 'Pastel de Frango com Queijo', descricao: 'Frango desfiado com mussarela.', preco: 8.90, destaque: false },
              { id: 24, nome: 'Pastel de Frango com Ovo', descricao: 'Frango com ovo cozido.', preco: 8.90, destaque: false },
              { id: 25, nome: 'Pastel de Frango com Queijo e Ovo', descricao: 'Frango, mussarela e ovo.', preco: 8.90, destaque: false },
              { id: 26, nome: 'Pastel de Frango com Azeitona', descricao: 'Frango com azeitonas fatiadas.', preco: 8.90, destaque: false },
              { id: 27, nome: 'Pastel de Frango com Azeitona e Ovo', descricao: 'Frango, azeitonas e ovo.', preco: 8.90, destaque: false },
              { id: 28, nome: 'Pastel de Frango com Presunto', descricao: 'Frango com presunto fatiado.', preco: 8.90, destaque: false }
            ]
          },
          {
            nomeGrupo: 'Bacon',
            itens: [
              { id: 29, nome: 'Pastel de Bacon', descricao: 'Bacon crocante.', preco: 8.90, destaque: false },
              { id: 30, nome: 'Pastel de Bacon com Queijo', descricao: 'Bacon com mussarela.', preco: 8.90, destaque: false },
              { id: 31, nome: 'Pastel de Bacon com Queijo e Palmito', descricao: 'Bacon, mussarela e palmito.', preco: 8.90, destaque: false },
              { id: 32, nome: 'Pastel de Bacon com Catupiry', descricao: 'Bacon com catupiry cremoso.', preco: 8.90, destaque: false },
              { id: 33, nome: 'Pastel de Bacon com Frango', descricao: 'Bacon com frango desfiado.', preco: 8.90, destaque: false },
              { id: 34, nome: 'Pastel de Bacon com Carne', descricao: 'Bacon e carne moída.', preco: 8.90, destaque: false },
              { id: 35, nome: 'Pastel de Bacon com Palmito', descricao: 'Bacon com palmito.', preco: 8.90, destaque: false },
              { id: 36, nome: 'Pastel de Bacon com Cheddar', descricao: 'Bacon com cheddar cremoso.', preco: 8.90, destaque: false },
              { id: 37, nome: 'Pastel de Bacon com Presunto', descricao: 'Bacon com presunto fatiado.', preco: 8.90, destaque: false },
              { id: 38, nome: 'Pastel de Bacon com Provolone', descricao: 'Bacon com provolone.', preco: 8.90, destaque: false }
            ]
          },
          {
            nomeGrupo: 'Calabresa',
            itens: [
              { id: 39, nome: 'Pastel de Calabresa', descricao: 'Calabresa fatiada.', preco: 8.90, destaque: false },
              { id: 40, nome: 'Pastel de Calabresa com Queijo', descricao: 'Calabresa e mussarela.', preco: 8.90, destaque: false },
              { id: 41, nome: 'Pastel de Calabresa com Queijo e Palmito', descricao: 'Calabresa, mussarela e palmito.', preco: 8.90, destaque: false },
              { id: 42, nome: 'Pastel de Calabresa com Catupiry', descricao: 'Calabresa com catupiry.', preco: 8.90, destaque: false },
              { id: 43, nome: 'Pastel de Calabresa com Presunto', descricao: 'Calabresa e presunto.', preco: 8.90, destaque: false },
              { id: 44, nome: 'Pastel de Calabresa com Frango', descricao: 'Calabresa e frango desfiado.', preco: 8.90, destaque: false },
              { id: 45, nome: 'Pastel de Calabresa com Carne', descricao: 'Calabresa e carne moída.', preco: 8.90, destaque: false },
              { id: 46, nome: 'Pastel de Calabresa com Palmito', descricao: 'Calabresa e palmito.', preco: 8.90, destaque: false },
              { id: 47, nome: 'Pastel de Calabresa com Cheddar', descricao: 'Calabresa com cheddar.', preco: 8.90, destaque: false },
              { id: 48, nome: 'Pastel de Calabresa com Provolone', descricao: 'Calabresa com provolone.', preco: 8.90, destaque: false }
            ]
          },
          {
            nomeGrupo: 'Napolitano',
            itens: [
              { id: 49, nome: 'Pastel de Napolitano', descricao: 'Queijo, presunto, tomate e orégano.', preco: 8.90, destaque: false },
              { id: 50, nome: 'Pastel de Napolitano com Catupiry', descricao: 'Recheio cremoso com catupiry.', preco: 8.90, destaque: false },
              { id: 51, nome: 'Pastel de Napolitano com Tomate', descricao: 'Queijo, presunto e tomate fresco.', preco: 8.90, destaque: false },
              { id: 52, nome: 'Pastel de Napolitano com Cheddar', descricao: 'Napolitano com toque de cheddar.', preco: 8.90, destaque: false }
            ]
          },
          {
            nomeGrupo: 'Queijo',
            itens: [
              { id: 53, nome: 'Pastel de Queijo', descricao: 'Mussarela clássica.', preco: 8.90, destaque: true },
              { id: 54, nome: 'Pastel de Queijo com Tomate, Cebola e Orégano', descricao: 'Mussarela com tomate, cebola e orégano.', preco: 8.90, destaque: false },
              { id: 55, nome: 'Pastel de Três Queijos', descricao: 'Prato, Provolone e Catupiry.', preco: 8.90, destaque: false },
              { id: 56, nome: 'Pastel de Dois Queijos', descricao: 'Prato e Catupiry.', preco: 8.90, destaque: false },
              { id: 57, nome: 'Pastel de Quatro Queijos', descricao: 'Prato, Provolone, Cheddar e Catupiry.', preco: 8.90, destaque: false },
              { id: 58, nome: 'Pastel de Queijo com Palmito e Orégano', descricao: 'Mussarela com palmito e orégano.', preco: 8.90, destaque: false },
              { id: 59, nome: 'Pastel de Queijo com Azeitona e Orégano', descricao: 'Mussarela com azeitonas e orégano.', preco: 8.90, destaque: false },
              { id: 60, nome: 'Pastel de Queijo com Palmito e Catupiry', descricao: 'Mussarela, palmito e catupiry.', preco: 8.90, destaque: false }
            ]
          },
          {
            nomeGrupo: 'Peito de Peru',
            itens: [
              { id: 61, nome: 'Pastel de Peito de Peru', descricao: 'Peito de peru defumado.', preco: 8.90, destaque: false },
              { id: 62, nome: 'Pastel de Peito de Peru com Tomate, Cebola e Orégano', descricao: 'Peito de peru com tomate, cebola e orégano.', preco: 8.90, destaque: false },
              { id: 63, nome: 'Pastel de Peito de Peru com Queijo', descricao: 'Peito de peru com mussarela.', preco: 8.90, destaque: false },
              { id: 64, nome: 'Pastel de Peito de Peru com Provolone', descricao: 'Peito de peru com provolone.', preco: 8.90, destaque: false },
              { id: 65, nome: 'Pastel de Peito de Peru com Frango', descricao: 'Mix de peru e frango.', preco: 8.90, destaque: false },
              { id: 66, nome: 'Pastel de Peito de Peru com Catupiry e Orégano', descricao: 'Peru com catupiry e orégano.', preco: 8.90, destaque: false },
              { id: 67, nome: 'Pastel de Peito de Peru com Azeitona e Orégano', descricao: 'Peru com azeitonas e orégano.', preco: 8.90, destaque: false },
              { id: 68, nome: 'Pastel de Peito de Peru com Palmito e Orégano', descricao: 'Peru com palmito e orégano.', preco: 8.90, destaque: false },
              { id: 69, nome: 'Pastel de Peito de Peru com Catupiry e Palmito', descricao: 'Peru com catupiry e palmito.', preco: 8.90, destaque: false },
              { id: 70, nome: 'Pastel de Peito de Peru com Cheddar', descricao: 'Peru com cheddar cremoso.', preco: 8.90, destaque: false }
            ]
          },
          {
            nomeGrupo: 'Palmito',
            itens: [
              { id: 71, nome: 'Pastel de Palmito', descricao: 'Palmito macio e temperado.', preco: 8.90, destaque: false },
              { id: 72, nome: 'Pastel de Palmito com Catupiry e Orégano', descricao: 'Palmito com catupiry e orégano.', preco: 8.90, destaque: false },
              { id: 73, nome: 'Pastel de Palmito com Provolone e Cebola', descricao: 'Palmito, provolone e cebola.', preco: 8.90, destaque: false },
              { id: 74, nome: 'Pastel de Palmito com Cheddar', descricao: 'Palmito com cheddar.', preco: 8.90, destaque: false },
              { id: 75, nome: 'Pastel de Palmito com Tomate, Cebola e Azeitona', descricao: 'Palmito com tomate, cebola e azeitona.', preco: 8.90, destaque: false }
            ]
          }
        ]
      },
      {
        tituloSubsecao: 'Pastéis Doces',
        idSubsecao: 'pasteis-doces-todos',
        grupos: [
          {
            nomeGrupo: 'Chocolate',
            itens: [
              { id: 76, nome: 'Pastel de Chocolate Branco e Preto', descricao: 'Mix de chocolate branco e preto derretidos.', preco: 8.90, destaque: false },
              { id: 77, nome: 'Pastel de Chocolate Preto', descricao: 'Chocolate meio amargo.', preco: 8.90, destaque: false },
              { id: 78, nome: 'Pastel de Chocolate Branco', descricao: 'Suave chocolate branco.', preco: 8.90, destaque: false },
              { id: 79, nome: 'Pastel de Chocolate Preto com Banana e Canela', descricao: 'Chocolate meio amargo com banana e toque de canela.', preco: 8.90, destaque: false },
              { id: 80, nome: 'Pastel de Prestígio', descricao: 'Chocolate com coco ralado.', preco: 8.90, destaque: false }
            ]
          },
          {
            nomeGrupo: 'Doce de Leite',
            itens: [
              { id: 81, nome: 'Pastel de Doce de Leite Tradicional', descricao: 'Doce de leite cremoso.', preco: 8.90, destaque: false },
              { id: 82, nome: 'Pastel de Doce de Leite com Coco', descricao: 'Doce de leite com coco ralado.', preco: 8.90, destaque: false },
              { id: 83, nome: 'Pastel de Doce de Leite, Chocolate, Banana e Queijo', descricao: 'Combinação de doce de leite, chocolate, banana e mussarela.', preco: 8.90, destaque: false },
              { id: 84, nome: 'Pastel de Doce de Leite, Banana, Queijo e Ameixa', descricao: 'Doce de leite com banana, mussarela e ameixa.', preco: 8.90, destaque: false },
              { id: 85, nome: 'Pastel de Doce de Leite com Queijo e Ameixa', descricao: 'Doce de leite, mussarela e ameixa.', preco: 8.90, destaque: false },
              { id: 86, nome: 'Pastel de Doce de Leite e Ameixa', descricao: 'Doce de leite com ameixa.', preco: 8.90, destaque: false }
            ]
          },
          {
            nomeGrupo: 'Outros Doces',
            itens: [
              { id: 87, nome: 'Pastel de Romeu e Julieta', descricao: 'Goiabada com queijo.', preco: 8.90, destaque: true },
              { id: 88, nome: 'Pastel de Banana com Canela e Açúcar', descricao: 'Banana fatiada com canela e açúcar.', preco: 8.90, destaque: false },
              { id: 89, nome: 'Pastel de Banana, Queijo e Canela', descricao: 'Banana, mussarela e toque de canela.', preco: 8.90, destaque: false }
            ]
          }
        ]
      }
    ]
  },
  esfihas: {
    tipoEstrutura: 'hierarquica',
    observacoesGerais: [
      "PROMOÇÃO: Compre 5 esfihas e GANHE +1!"
    ],
    subsecoes: [
      {
        tituloSubsecao: 'Esfihas Salgadas',
        idSubsecao: 'esfihas-salgadas-todos',
        grupos: [
          {
            nomeGrupo: 'Carne',
            itens: [
              { id: 1, nome: 'Esfiha de Carne', descricao: 'Tradicional recheio de carne moída.', preco: 8.49, destaque: true },
              { id: 2, nome: 'Esfiha de Carne com Queijo e Orégano', descricao: 'Carne moída com mussarela e toque de orégano.', preco: 8.49, destaque: false },
              { id: 3, nome: 'Esfiha de Carne com Ovo e Azeitona', descricao: 'Carne moída com ovo cozido e azeitonas fatiadas.', preco: 8.49, destaque: false },
              { id: 4, nome: 'Esfiha de Carne com Ovo, Azeitona e Catupiry', descricao: 'Carne, ovo, azeitona e catupiry cremoso.', preco: 8.49, destaque: false },
              { id: 5, nome: 'Esfiha de Carne com Banana e Queijo', descricao: 'Carne com banana caramelizada e mussarela.', preco: 8.49, destaque: false },
              { id: 6, nome: 'Esfiha de Carne com Azeitona e Provolone', descricao: 'Carne com azeitonas e provolone derretido.', preco: 8.49, destaque: false },
              { id: 7, nome: 'Esfiha de Carne com Ovo e Queijo', descricao: 'Carne, ovo e mussarela.', preco: 8.49, destaque: false },
              { id: 8, nome: 'Esfiha de Carne com Ovo, Azeitona e Queijo', descricao: 'Carne, ovo, azeitonas e mussarela.', preco: 8.49, destaque: false },
              { id: 9, nome: 'Esfiha de Carne com Provolone', descricao: 'Carne com provolone cremoso.', preco: 8.49, destaque: false },
              { id: 10, nome: 'Esfiha de Carne com Napolitano', descricao: 'Carne com queijo, presunto, tomate e orégano.', preco: 8.49, destaque: false },
              { id: 11, nome: 'Esfiha de Carne com Palmito', descricao: 'Carne com palmito macio.', preco: 8.49, destaque: false },
              { id: 12, nome: 'Esfiha de Carne com Ovo e Milho', descricao: 'Carne, ovo e milho verde.', preco: 8.49, destaque: false },
              { id: 13, nome: 'Esfiha de Carne com Ovo', descricao: 'Carne moída com ovo cozido.', preco: 8.49, destaque: false },
              { id: 14, nome: 'Esfiha de Carne com Azeitona', descricao: 'Carne com azeitonas fatiadas.', preco: 8.49, destaque: false },
              { id: 15, nome: 'Esfiha de Carne com Presunto', descricao: 'Carne com presunto fatiado.', preco: 8.49, destaque: false }
            ]
          },
          {
            nomeGrupo: 'Frango',
            itens: [
              { id: 16, nome: 'Esfiha de Frango', descricao: 'Recheio clássico de frango desfiado.', preco: 8.49, destaque: true },
              { id: 17, nome: 'Esfiha de Frango com Cheddar', descricao: 'Frango desfiado com cheddar cremoso.', preco: 8.49, destaque: false },
              { id: 18, nome: 'Esfiha de Frango com Catupiry', descricao: 'Frango com catupiry autêntico.', preco: 8.49, destaque: false },
              { id: 19, nome: 'Esfiha de Frango com Palmito', descricao: 'Frango desfiado com palmito.', preco: 8.49, destaque: false },
              { id: 20, nome: 'Esfiha de Frango com Napolitano', descricao: 'Frango com queijo, presunto, tomate e orégano.', preco: 8.49, destaque: false },
              { id: 21, nome: 'Esfiha de Frango com Catupiry e Palmito', descricao: 'Frango, catupiry e palmito.', preco: 8.49, destaque: false },
              { id: 22, nome: 'Esfiha de Frango com Provolone', descricao: 'Frango com provolone derretido.', preco: 8.49, destaque: false },
              { id: 23, nome: 'Esfiha de Frango com Queijo', descricao: 'Frango desfiado com mussarela.', preco: 8.49, destaque: false },
              { id: 24, nome: 'Esfiha de Frango com Ovo', descricao: 'Frango com ovo cozido.', preco: 8.49, destaque: false },
              { id: 25, nome: 'Esfiha de Frango com Queijo e Ovo', descricao: 'Frango, mussarela e ovo.', preco: 8.49, destaque: false },
              { id: 26, nome: 'Esfiha de Frango com Azeitona', descricao: 'Frango com azeitonas fatiadas.', preco: 8.49, destaque: false },
              { id: 27, nome: 'Esfiha de Frango com Azeitona e Ovo', descricao: 'Frango, azeitonas e ovo.', preco: 8.49, destaque: false },
              { id: 28, nome: 'Esfiha de Frango com Presunto', descricao: 'Frango com presunto fatiado.', preco: 8.49, destaque: false }
            ]
          },
          {
            nomeGrupo: 'Bacon',
            itens: [
              { id: 29, nome: 'Esfiha de Bacon', descricao: 'Bacon crocante.', preco: 8.49, destaque: false },
              { id: 30, nome: 'Esfiha de Bacon com Queijo', descricao: 'Bacon com mussarela.', preco: 8.49, destaque: false },
              { id: 31, nome: 'Esfiha de Bacon com Queijo e Palmito', descricao: 'Bacon, mussarela e palmito.', preco: 8.49, destaque: false },
              { id: 32, nome: 'Esfiha de Bacon com Catupiry', descricao: 'Bacon com catupiry cremoso.', preco: 8.49, destaque: false },
              { id: 33, nome: 'Esfiha de Bacon com Frango', descricao: 'Bacon com frango desfiado.', preco: 8.49, destaque: false },
              { id: 34, nome: 'Esfiha de Bacon com Carne', descricao: 'Bacon e carne moída.', preco: 8.49, destaque: false },
              { id: 35, nome: 'Esfiha de Bacon com Palmito', descricao: 'Bacon com palmito.', preco: 8.49, destaque: false },
              { id: 36, nome: 'Esfiha de Bacon com Cheddar', descricao: 'Bacon com cheddar cremoso.', preco: 8.49, destaque: false },
              { id: 37, nome: 'Esfiha de Bacon com Presunto', descricao: 'Bacon com presunto fatiado.', preco: 8.49, destaque: false },
              { id: 38, nome: 'Esfiha de Bacon com Provolone', descricao: 'Bacon com provolone.', preco: 8.49, destaque: false }
            ]
          },
          {
            nomeGrupo: 'Calabresa',
            itens: [
              { id: 39, nome: 'Esfiha de Calabresa', descricao: 'Calabresa fatiada.', preco: 8.49, destaque: false },
              { id: 40, nome: 'Esfiha de Calabresa com Queijo', descricao: 'Calabresa e mussarela.', preco: 8.49, destaque: false },
              { id: 41, nome: 'Esfiha de Calabresa com Queijo e Palmito', descricao: 'Calabresa, mussarela e palmito.', preco: 8.49, destaque: false },
              { id: 42, nome: 'Esfiha de Calabresa com Catupiry', descricao: 'Calabresa com catupiry.', preco: 8.49, destaque: false },
              { id: 43, nome: 'Esfiha de Calabresa com Presunto', descricao: 'Calabresa e presunto.', preco: 8.49, destaque: false },
              { id: 44, nome: 'Esfiha de Calabresa com Frango', descricao: 'Calabresa e frango desfiado.', preco: 8.49, destaque: false },
              { id: 45, nome: 'Esfiha de Calabresa com Carne', descricao: 'Calabresa e carne moída.', preco: 8.49, destaque: false },
              { id: 46, nome: 'Esfiha de Calabresa com Palmito', descricao: 'Calabresa e palmito.', preco: 8.49, destaque: false },
              { id: 47, nome: 'Esfiha de Calabresa com Cheddar', descricao: 'Calabresa com cheddar.', preco: 8.49, destaque: false },
              { id: 48, nome: 'Esfiha de Calabresa com Provolone', descricao: 'Calabresa com provolone.', preco: 8.49, destaque: false }
            ]
          },
          {
            nomeGrupo: 'Napolitano',
            itens: [
              { id: 49, nome: 'Esfiha de Napolitano', descricao: 'Queijo, presunto, tomate e orégano.', preco: 8.49, destaque: false },
              { id: 50, nome: 'Esfiha de Napolitano com Catupiry', descricao: 'Recheio cremoso com catupiry.', preco: 8.49, destaque: false },
              { id: 51, nome: 'Esfiha de Napolitano com Tomate', descricao: 'Queijo, presunto e tomate fresco.', preco: 8.49, destaque: false },
              { id: 52, nome: 'Esfiha de Napolitano com Cheddar', descricao: 'Napolitano com toque de cheddar.', preco: 8.49, destaque: false }
            ]
          },
          {
            nomeGrupo: 'Queijo',
            itens: [
              { id: 53, nome: 'Esfiha de Queijo', descricao: 'Mussarella clássica.', preco: 8.49, destaque: true },
              { id: 54, nome: 'Esfiha de Queijo com Tomate, Cebola e Orégano', descricao: 'Mussarela com tomate, cebola e orégano.', preco: 8.49, destaque: false },
              { id: 55, nome: 'Esfiha de Três Queijos', descricao: 'Prato, Provolone e Catupiry.', preco: 8.49, destaque: false },
              { id: 56, nome: 'Esfiha de Dois Queijos', descricao: 'Prato e Catupiry.', preco: 8.49, destaque: false },
              { id: 57, nome: 'Esfiha de Quatro Queijos', descricao: 'Prato, Provolone, Cheddar e Catupiry.', preco: 8.49, destaque: false },
              { id: 58, nome: 'Esfiha de Queijo com Palmito e Orégano', descricao: 'Mussarela com palmito e orégano.', preco: 8.49, destaque: false },
              { id: 59, nome: 'Esfiha de Queijo com Azeitona e Orégano', descricao: 'Mussarela com azeitonas e orégano.', preco: 8.49, destaque: false },
              { id: 60, nome: 'Esfiha de Queijo com Palmito e Catupiry', descricao: 'Mussarela, palmito e catupiry.', preco: 8.49, destaque: false }
            ]
          },
          {
            nomeGrupo: 'Peito de Peru',
            itens: [
              { id: 61, nome: 'Esfiha de Peito de Peru', descricao: 'Peito de peru defumado.', preco: 8.49, destaque: false },
              { id: 62, nome: 'Esfiha de Peito de Peru com Tomate, Cebola e Orégano', descricao: 'Peito de peru com tomate, cebola e orégano.', preco: 8.49, destaque: false },
              { id: 63, nome: 'Esfiha de Peito de Peru com Queijo', descricao: 'Peito de peru com mussarela.', preco: 8.49, destaque: false },
              { id: 64, nome: 'Esfiha de Peito de Peru com Provolone', descricao: 'Peito de peru com provolone.', preco: 8.49, destaque: false },
              { id: 65, nome: 'Esfiha de Peito de Peru com Frango', descricao: 'Mix de peru e frango.', preco: 8.49, destaque: false },
              { id: 66, nome: 'Esfiha de Peito de Peru com Catupiry e Orégano', descricao: 'Peru com catupiry e orégano.', preco: 8.49, destaque: false },
              { id: 67, nome: 'Esfiha de Peito de Peru com Azeitona e Orégano', descricao: 'Peru com azeitonas e orégano.', preco: 8.49, destaque: false },
              { id: 68, nome: 'Esfiha de Peito de Peru com Palmito e Orégano', descricao: 'Peru com palmito e orégano.', preco: 8.49, destaque: false },
              { id: 69, nome: 'Esfiha de Peito de Peru com Catupiry e Palmito', descricao: 'Peru com catupiry e palmito.', preco: 8.49, destaque: false },
              { id: 70, nome: 'Esfiha de Peito de Peru com Cheddar', descricao: 'Peru com cheddar cremoso.', preco: 8.49, destaque: false }
            ]
          },
          {
            nomeGrupo: 'Palmito',
            itens: [
              { id: 71, nome: 'Esfiha de Palmito', descricao: 'Palmito macio e temperado.', preco: 8.49, destaque: false },
              { id: 72, nome: 'Esfiha de Palmito com Catupiry e Orégano', descricao: 'Palmito com catupiry e orégano.', preco: 8.49, destaque: false },
              { id: 73, nome: 'Esfiha de Palmito com Provolone e Cebola', descricao: 'Palmito, provolone e cebola.', preco: 8.49, destaque: false },
              { id: 74, nome: 'Esfiha de Palmito com Cheddar', descricao: 'Palmito com cheddar.', preco: 8.49, destaque: false },
              { id: 75, nome: 'Esfiha de Palmito com Tomate, Cebola e Azeitona', descricao: 'Palmito com tomate, cebola e azeitona.', preco: 8.49, destaque: false }
            ]
          }
        ]
      },
      {
        tituloSubsecao: 'Esfihas Doces',
        idSubsecao: 'esfihas-doces-todos',
        grupos: [
          {
            nomeGrupo: 'Chocolate',
            itens: [
              { id: 76, nome: 'Esfiha de Chocolate Branco e Preto', descricao: 'Mix de chocolate branco e preto derretidos.', preco: 8.49, destaque: false },
              { id: 77, nome: 'Esfiha de Chocolate Preto', descricao: 'Chocolate meio amargo.', preco: 8.49, destaque: false },
              { id: 78, nome: 'Esfiha de Chocolate Branco', descricao: 'Suave chocolate branco.', preco: 8.49, destaque: false },
              { id: 79, nome: 'Esfiha de Chocolate Preto com Banana e Canela', descricao: 'Chocolate meio amargo com banana e toque de canela.', preco: 8.49, destaque: false },
              { id: 80, nome: 'Esfiha de Prestígio', descricao: 'Chocolate com coco ralado.', preco: 8.49, destaque: false }
            ]
          },
          {
            nomeGrupo: 'Doce de Leite',
            itens: [
              { id: 81, nome: 'Esfiha de Doce de Leite Tradicional', descricao: 'Doce de leite cremoso.', preco: 8.49, destaque: false },
              { id: 82, nome: 'Esfiha de Doce de Leite com Coco', descricao: 'Doce de leite com coco ralado.', preco: 8.49, destaque: false },
              { id: 83, nome: 'Esfiha de Doce de Leite, Chocolate, Banana e Queijo', descricao: 'Combinação de doce de leite, chocolate, banana e mussarela.', preco: 8.49, destaque: false },
              { id: 84, nome: 'Esfiha de Doce de Leite, Banana, Queijo e Ameixa', descricao: 'Doce de leite com banana, mussarela e ameixa.', preco: 8.49, destaque: false },
              { id: 85, nome: 'Esfiha de Doce de Leite com Queijo e Ameixa', descricao: 'Doce de leite, mussarela e ameixa.', preco: 8.49, destaque: false },
              { id: 86, nome: 'Esfiha de Doce de Leite e Ameixa', descricao: 'Doce de leite com ameixa.', preco: 8.49, destaque: false }
            ]
          },
          {
            nomeGrupo: 'Outros Doces',
            itens: [
              { id: 87, nome: 'Esfiha de Romeu e Julieta', descricao: 'Goiabada com queijo.', preco: 8.49, destaque: true },
              { id: 88, nome: 'Esfiha de Banana com Canela e Açúcar', descricao: 'Banana fatiada com canela e açúcar.', preco: 8.49, destaque: false },
              { id: 89, nome: 'Esfiha de Banana, Queijo e Canela', descricao: 'Banana, mussarela e toque de canela.', preco: 8.49, destaque: false }
            ]
          }
        ]
      }
    ]
  },
  crepes: {
    tipoEstrutura: 'hierarquica',
    subsecoes: [
      {
        tituloSubsecao: 'Crepes Salgados',
        idSubsecao: 'crepes-salgados',
        grupos: [
          {
            nomeGrupo: 'Frango',
            itens: [
              { id: 1, nome: 'Frango', descricao: 'Crepe recheado com frango temperado.', preco: 19.90, destaque: true },
              { id: 2, nome: 'Frango com cheddar', descricao: 'Crepe recheado com frango e queijo cheddar.', preco: 19.90, destaque: false },
              { id: 3, nome: 'Frango com catupiry', descricao: 'Crepe recheado com frango e catupiry.', preco: 19.90, destaque: false },
              { id: 4, nome: 'Frango com catupiry e palmito', descricao: 'Crepe recheado com frango, catupiry e palmito.', preco: 19.90, destaque: false }
            ]
          },
          {
            nomeGrupo: 'Carne',
            itens: [
              { id: 5, nome: 'Carne com queijo', descricao: 'Crepe recheado com carne desfiada e queijo derretido.', preco: 19.90, destaque: true },
              { id: 6, nome: 'Carne com queijo, ovo, tomate e cebola', descricao: 'Crepe recheado com carne desfiada, queijo, ovo, tomate e cebola.', preco: 19.90, destaque: false }
            ]
          },
          {
            nomeGrupo: 'Calabresa',
            itens: [
              { id: 7, nome: 'Calabresa com cheddar', descricao: 'Crepe recheado com calabresa fatiada e queijo cheddar.', preco: 19.90, destaque: true },
              { id: 8, nome: 'Calabresa com catupiry', descricao: 'Crepe recheado com calabresa fatiada e catupiry.', preco: 19.90, destaque: false },
              { id: 9, nome: 'Calabresa com mussarela', descricao: 'Crepe recheado com calabresa fatiada e mussarela.', preco: 19.90, destaque: false },
              { id: 10, nome: 'Calabresa, mussarela, tomate e cebola', descricao: 'Crepe recheado com calabresa, mussarela, tomate e cebola.', preco: 19.90, destaque: false }
            ]
          },
          {
            nomeGrupo: 'Outros Sabores Salgados',
            itens: [
              { id: 11, nome: 'Peito de peru, tomate, cebola e orégano', descricao: 'Crepe recheado com peito de peru, tomate, cebola e orégano.', preco: 19.90, destaque: false },
              { id: 12, nome: 'Napolitano com cebola e tomate', descricao: 'Crepe recheado ao estilo Napolitano (queijo, tomate e cebola).', preco: 19.90, destaque: false },
              { id: 13, nome: 'Quatro queijos', descricao: 'Crepe recheado com quatro tipos de queijo derretido.', preco: 19.90, destaque: false }
            ]
          }
        ]
      },
      {
        tituloSubsecao: 'Crepes Doces',
        idSubsecao: 'crepes-doces',
        grupos: [
          {
            nomeGrupo: 'Chocolate',
            itens: [
              { id: 14, nome: 'Chocolate preto', descricao: 'Crepe recheado com chocolate amargo derretido.', preco: 19.90, destaque: false },
              { id: 15, nome: 'Chocolate preto e chocolate branco', descricao: 'Crepe recheado com contrastes de chocolate amargo e branco.', preco: 19.90, destaque: false },
              { id: 16, nome: 'Prestígio', descricao: 'Crepe recheado com chocolate e coco ralado, inspirado no clássico “Prestígio”.', preco: 19.90, destaque: false },
              { id: 17, nome: 'Brigadeiro', descricao: 'Crepe recheado com creme de chocolate e granulado, estilo brigadeiro.', preco: 19.90, destaque: false },
              { id: 18, nome: 'Chocolate com amendoim', descricao: 'Crepe recheado com chocolate e pedacinhos de amendoim.', preco: 19.90, destaque: false },
              { id: 19, nome: 'Chocolate com banana, canela e açúcar', descricao: 'Crepe recheado com chocolate, rodelas de banana, polvilhado com canela e açúcar.', preco: 19.90, destaque: false }
            ]
          },
          {
            nomeGrupo: 'Goiabada',
            itens: [
              { id: 20, nome: 'Romeu e Julieta', descricao: 'Crepe recheado com goiabada e queijo, no estilo Romeu e Julieta.', preco: 19.90, destaque: false }
            ]
          }
        ]
      }
    ]
  },

  batatas: [ /* Suas batatas aqui, se houver */ ],
  bebidas: {
    tipoEstrutura: 'hierarquica',
    subsecoes: [
      {
        tituloSubsecao: 'Refrigerantes',
        idSubsecao: 'bebidas-refrigerantes',
        grupos: [
          {
            nomeGrupo: 'Latas e Individuais',
            itens: [
              { id: 1, nome: 'Coca-Cola Lata', descricao: 'Lata 350ml', preco: 8.00, destaque: true },
              { id: 2, nome: 'Refrigerante Lata (Sabores Diversos)', descricao: 'Lata 350ml', preco: 8.00, destaque: false },
              { id: 3, nome: 'H2OH!', descricao: 'Limão ou outros sabores - Garrafa 500ml', preco: 8.00, destaque: false },
              { id: 4, nome: 'Refrigerante Mini', descricao: 'Ideal para consumo individual', preco: 5.00, destaque: false }
            ]
          },
          {
            nomeGrupo: 'Garrafas 2 Litros',
            itens: [
              { id: 5, nome: 'Refrigerante 2L Coca-Cola', descricao: 'Garrafa 2 Litros', preco: 15.00, destaque: true },
              { id: 6, nome: 'Refrigerante 2L (Outros Sabores)', descricao: 'Garrafa 2 Litros', preco: 10.00, destaque: false }
            ]
          }
        ]
      },
      {
        tituloSubsecao: 'Águas',
        idSubsecao: 'bebidas-aguas',
        grupos: [
          {
            nomeGrupo: 'Opções de Água',
            itens: [
              { id: 7, nome: 'Água Mineral sem Gás', descricao: 'Garrafa 500ml', preco: 2.50, destaque: true },
              { id: 8, nome: 'Água Mineral com Gás', descricao: 'Garrafa 500ml', preco: 3.50, destaque: false }
            ]
          }
        ]
      },
      {
        tituloSubsecao: 'Sucos e Outras Bebidas',
        idSubsecao: 'bebidas-sucos-outros',
        grupos: [
          {
            nomeGrupo: 'Variedades',
            itens: [
              { id: 9, nome: 'Suco em Lata', descricao: 'Sabores diversos - Lata 350ml', preco: 8.50, destaque: true },
              { id: 10, nome: 'Guaravita', descricao: 'Guaraná natural em copo 290ml', preco: 3.00, destaque: true },
              { id: 11, nome: 'Guaraviton', descricao: 'Bebida energética à base de guaraná', preco: 8.00, destaque: false },
              { id: 12, nome: 'Ice Tea (Chá Gelado)', descricao: 'Sabores diversos', preco: 6.50, destaque: false }
            ]
          }
        ]
      }
    ]
  }
};

// Exportando os dados
export { cardapio, categorias };

// Tornando disponível globalmente para o carrinho
window.cardapio = cardapio;
window.categorias = categorias;