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
    id: 'lanches', nome: 'Lanches',
    icon: 'assets/icons/lanches.png',
    imagemFundo: 'assets/category-backgrounds/lanches-bg.jpg'
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
  combos: [ /* ... */ ],
  pizzas: [ /* ... */ ],
  pasteis: { // Conteúdo de pastéis conforme fornecido anteriormente
    tipoEstrutura: 'hierarquica',
    subsecoes: [
      {
        tituloSubsecao: 'Pastéis Salgados',
        idSubsecao: 'pasteis-salgados-todos',
        grupos: [
          {
            nomeGrupo: 'Carne',
            itens: [
              { id: 1, nome: 'Pastel de Carne', descricao: 'Tradicional recheio de carne moída.', preco: 8.90, destaque: false },
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
              { id: 16, nome: 'Pastel de Frango', descricao: 'Recheio clássico de frango desfiado.', preco: 8.90, destaque: false },
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
              { id: 53, nome: 'Pastel de Queijo', descricao: 'Mussarela clássica.', preco: 8.90, destaque: false },
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
              { id: 87, nome: 'Pastel de Romeu e Julieta', descricao: 'Goiabada com queijo.', preco: 8.90, destaque: false },
              { id: 88, nome: 'Pastel de Banana com Canela e Açúcar', descricao: 'Banana fatiada com canela e açúcar.', preco: 8.90, destaque: false },
              { id: 89, nome: 'Pastel de Banana, Queijo e Canela', descricao: 'Banana, mussarela e toque de canela.', preco: 8.90, destaque: false }
            ]
          }
        ]
      }
    ]
  },
  esfihas: { // Conteúdo de esfihas conforme fornecido anteriormente
    tipoEstrutura: 'hierarquica',
    subsecoes: [
      {
        tituloSubsecao: 'Esfihas Salgadas',
        idSubsecao: 'esfihas-salgadas-todos',
        grupos: [
          {
            nomeGrupo: 'Carne',
            itens: [
              { id: 1, nome: 'Esfiha de Carne', descricao: 'Tradicional recheio de carne moída.', preco: 8.49, destaque: false },
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
              { id: 16, nome: 'Esfiha de Frango', descricao: 'Recheio clássico de frango desfiado.', preco: 8.49, destaque: false },
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
              { id: 53, nome: 'Esfiha de Queijo', descricao: 'Mussarella clássica.', preco: 8.49, destaque: false },
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
              { id: 87, nome: 'Esfiha de Romeu e Julieta', descricao: 'Goiabada com queijo.', preco: 8.49, destaque: false },
              { id: 88, nome: 'Esfiha de Banana com Canela e Açúcar', descricao: 'Banana fatiada com canela e açúcar.', preco: 8.49, destaque: false },
              { id: 89, nome: 'Esfiha de Banana, Queijo e Canela', descricao: 'Banana, mussarela e toque de canela.', preco: 8.49, destaque: false }
            ]
          }
        ]
      }
    ]
  },
  crepes: [ /* ... */ ],
  batatas: [ /* ... */ ],
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
              { id: 1, nome: 'Coca-Cola Lata', descricao: 'Lata 350ml', preco: 8.00, destaque: false },
              { id: 2, nome: 'Refrigerante Lata (Sabores Diversos)', descricao: 'Lata 350ml', preco: 8.00, destaque: false },
              { id: 3, nome: 'H2OH!', descricao: 'Limão ou outros sabores - Garrafa 500ml', preco: 8.00, destaque: false },
              { id: 4, nome: 'Refrigerante Mini', descricao: 'Ideal para consumo individual', preco: 0.00, destaque: false }
            ]
          },
          {
            nomeGrupo: 'Garrafas 2 Litros',
            itens: [
              { id: 5, nome: 'Refrigerante 2L Coca-Cola', descricao: 'Garrafa 2 Litros', preco: 15.00, destaque: false },
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
              { id: 7, nome: 'Água Mineral sem Gás', descricao: 'Garrafa 500ml', preco: 2.50, destaque: false },
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
              { id: 9, nome: 'Suco em Lata', descricao: 'Sabores diversos - Lata 350ml', preco: 8.50, destaque: false },
              { id: 10, nome: 'Guaravita', descricao: 'Guaraná natural em copo 290ml', preco: 3.00, destaque: false },
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