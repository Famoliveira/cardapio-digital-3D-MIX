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
  lanches: [ /* ... */ ],
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
              { id: 101, nome: 'Pastel de Carne', descricao: 'Tradicional recheio de carne moída.', preco: 8.90, destaque: false },
              { id: 102, nome: 'Pastel de Carne com Queijo e Orégano', descricao: 'Carne moída com mussarela e toque de orégano.', preco: 8.90, destaque: false },
              { id: 103, nome: 'Pastel de Carne com Ovo e Azeitona', descricao: 'Carne moída com ovo cozido e azeitonas fatiadas.', preco: 8.90, destaque: false },
              { id: 104, nome: 'Pastel de Carne com Ovo, Azeitona e Catupiry', descricao: 'Carne, ovo, azeitona e catupiry cremoso.', preco: 8.90, destaque: false },
              { id: 105, nome: 'Pastel de Carne com Banana e Queijo', descricao: 'Carne com banana caramelizada e mussarela.', preco: 8.90, destaque: false },
              { id: 106, nome: 'Pastel de Carne com Azeitona e Provolone', descricao: 'Carne com azeitonas e provolone derretido.', preco: 8.90, destaque: false },
              { id: 107, nome: 'Pastel de Carne com Ovo e Queijo', descricao: 'Carne, ovo e mussarela.', preco: 8.90, destaque: false },
              { id: 108, nome: 'Pastel de Carne com Ovo, Azeitona e Queijo', descricao: 'Carne, ovo, azeitonas e mussarela.', preco: 8.90, destaque: false },
              { id: 109, nome: 'Pastel de Carne com Provolone', descricao: 'Carne com provolone cremoso.', preco: 8.90, destaque: false },
              { id: 110, nome: 'Pastel de Carne com Napolitano', descricao: 'Carne com queijo, presunto, tomate e orégano.', preco: 8.90, destaque: false },
              { id: 111, nome: 'Pastel de Carne com Palmito', descricao: 'Carne com palmito macio.', preco: 8.90, destaque: false },
              { id: 112, nome: 'Pastel de Carne com Ovo e Milho', descricao: 'Carne, ovo e milho verde.', preco: 8.90, destaque: false },
              { id: 113, nome: 'Pastel de Carne com Ovo', descricao: 'Carne moída com ovo cozido.', preco: 8.90, destaque: false },
              { id: 114, nome: 'Pastel de Carne com Azeitona', descricao: 'Carne com azeitonas fatiadas.', preco: 8.90, destaque: false },
              { id: 115, nome: 'Pastel de Carne com Presunto', descricao: 'Carne com presunto fatiado.', preco: 8.90, destaque: false }
            ]
          },
          {
            nomeGrupo: 'Frango',
            itens: [
              { id: 201, nome: 'Pastel de Frango', descricao: 'Recheio clássico de frango desfiado.', preco: 8.90, destaque: false },
              { id: 202, nome: 'Pastel de Frango com Cheddar', descricao: 'Frango desfiado com cheddar cremoso.', preco: 8.90, destaque: false },
              { id: 203, nome: 'Pastel de Frango com Catupiry', descricao: 'Frango com catupiry autêntico.', preco: 8.90, destaque: false },
              { id: 204, nome: 'Pastel de Frango com Palmito', descricao: 'Frango desfiado com palmito.', preco: 8.90, destaque: false },
              { id: 205, nome: 'Pastel de Frango com Napolitano', descricao: 'Frango com queijo, presunto, tomate e orégano.', preco: 8.90, destaque: false },
              { id: 206, nome: 'Pastel de Frango com Catupiry e Palmito', descricao: 'Frango, catupiry e palmito.', preco: 8.90, destaque: false },
              { id: 207, nome: 'Pastel de Frango com Provolone', descricao: 'Frango com provolone derretido.', preco: 8.90, destaque: false },
              { id: 208, nome: 'Pastel de Frango com Queijo', descricao: 'Frango desfiado com mussarela.', preco: 8.90, destaque: false },
              { id: 209, nome: 'Pastel de Frango com Ovo', descricao: 'Frango com ovo cozido.', preco: 8.90, destaque: false },
              { id: 210, nome: 'Pastel de Frango com Queijo e Ovo', descricao: 'Frango, mussarela e ovo.', preco: 8.90, destaque: false },
              { id: 211, nome: 'Pastel de Frango com Azeitona', descricao: 'Frango com azeitonas fatiadas.', preco: 8.90, destaque: false },
              { id: 212, nome: 'Pastel de Frango com Azeitona e Ovo', descricao: 'Frango, azeitonas e ovo.', preco: 8.90, destaque: false },
              { id: 213, nome: 'Pastel de Frango com Presunto', descricao: 'Frango com presunto fatiado.', preco: 8.90, destaque: false }
            ]
          },
          {
            nomeGrupo: 'Bacon',
            itens: [
              { id: 301, nome: 'Pastel de Bacon', descricao: 'Bacon crocante.', preco: 8.90, destaque: false },
              { id: 302, nome: 'Pastel de Bacon com Queijo', descricao: 'Bacon com mussarela.', preco: 8.90, destaque: false },
              { id: 303, nome: 'Pastel de Bacon com Queijo e Palmito', descricao: 'Bacon, mussarela e palmito.', preco: 8.90, destaque: false },
              { id: 304, nome: 'Pastel de Bacon com Catupiry', descricao: 'Bacon com catupiry cremoso.', preco: 8.90, destaque: false },
              { id: 305, nome: 'Pastel de Bacon com Frango', descricao: 'Bacon com frango desfiado.', preco: 8.90, destaque: false },
              { id: 306, nome: 'Pastel de Bacon com Carne', descricao: 'Bacon e carne moída.', preco: 8.90, destaque: false },
              { id: 307, nome: 'Pastel de Bacon com Palmito', descricao: 'Bacon com palmito.', preco: 8.90, destaque: false },
              { id: 308, nome: 'Pastel de Bacon com Cheddar', descricao: 'Bacon com cheddar cremoso.', preco: 8.90, destaque: false },
              { id: 309, nome: 'Pastel de Bacon com Presunto', descricao: 'Bacon com presunto fatiado.', preco: 8.90, destaque: false },
              { id: 310, nome: 'Pastel de Bacon com Provolone', descricao: 'Bacon com provolone.', preco: 8.90, destaque: false }
            ]
          },
          {
            nomeGrupo: 'Calabresa',
            itens: [
              { id: 401, nome: 'Pastel de Calabresa', descricao: 'Calabresa fatiada.', preco: 8.90, destaque: false },
              { id: 402, nome: 'Pastel de Calabresa com Queijo', descricao: 'Calabresa e mussarela.', preco: 8.90, destaque: false },
              { id: 403, nome: 'Pastel de Calabresa com Queijo e Palmito', descricao: 'Calabresa, mussarela e palmito.', preco: 8.90, destaque: false },
              { id: 404, nome: 'Pastel de Calabresa com Catupiry', descricao: 'Calabresa com catupiry.', preco: 8.90, destaque: false },
              { id: 405, nome: 'Pastel de Calabresa com Presunto', descricao: 'Calabresa e presunto.', preco: 8.90, destaque: false },
              { id: 406, nome: 'Pastel de Calabresa com Frango', descricao: 'Calabresa e frango desfiado.', preco: 8.90, destaque: false },
              { id: 407, nome: 'Pastel de Calabresa com Carne', descricao: 'Calabresa e carne moída.', preco: 8.90, destaque: false },
              { id: 408, nome: 'Pastel de Calabresa com Palmito', descricao: 'Calabresa e palmito.', preco: 8.90, destaque: false },
              { id: 409, nome: 'Pastel de Calabresa com Cheddar', descricao: 'Calabresa com cheddar.', preco: 8.90, destaque: false },
              { id: 410, nome: 'Pastel de Calabresa com Provolone', descricao: 'Calabresa com provolone.', preco: 8.90, destaque: false }
            ]
          },
          {
            nomeGrupo: 'Napolitano',
            itens: [
              { id: 501, nome: 'Pastel de Napolitano', descricao: 'Queijo, presunto, tomate e orégano.', preco: 8.90, destaque: false },
              { id: 502, nome: 'Pastel de Napolitano com Catupiry', descricao: 'Recheio cremoso com catupiry.', preco: 8.90, destaque: false },
              { id: 503, nome: 'Pastel de Napolitano com Tomate', descricao: 'Queijo, presunto e tomate fresco.', preco: 8.90, destaque: false },
              { id: 504, nome: 'Pastel de Napolitano com Cheddar', descricao: 'Napolitano com toque de cheddar.', preco: 8.90, destaque: false }
            ]
          },
          {
            nomeGrupo: 'Queijo',
            itens: [
              { id: 601, nome: 'Pastel de Queijo', descricao: 'Mussarela clássica.', preco: 8.90, destaque: false },
              { id: 602, nome: 'Pastel de Queijo com Tomate, Cebola e Orégano', descricao: 'Mussarela com tomate, cebola e orégano.', preco: 8.90, destaque: false },
              { id: 603, nome: 'Pastel de Três Queijos', descricao: 'Prato, Provolone e Catupiry.', preco: 8.90, destaque: false },
              { id: 604, nome: 'Pastel de Dois Queijos', descricao: 'Prato e Catupiry.', preco: 8.90, destaque: false },
              { id: 605, nome: 'Pastel de Quatro Queijos', descricao: 'Prato, Provolone, Cheddar e Catupiry.', preco: 8.90, destaque: false },
              { id: 606, nome: 'Pastel de Queijo com Palmito e Orégano', descricao: 'Mussarela com palmito e orégano.', preco: 8.90, destaque: false },
              { id: 607, nome: 'Pastel de Queijo com Azeitona e Orégano', descricao: 'Mussarela com azeitonas e orégano.', preco: 8.90, destaque: false },
              { id: 608, nome: 'Pastel de Queijo com Palmito e Catupiry', descricao: 'Mussarela, palmito e catupiry.', preco: 8.90, destaque: false }
            ]
          },
          {
            nomeGrupo: 'Peito de Peru',
            itens: [
              { id: 701, nome: 'Pastel de Peito de Peru', descricao: 'Peito de peru defumado.', preco: 8.90, destaque: false },
              { id: 702, nome: 'Pastel de Peito de Peru com Tomate, Cebola e Orégano', descricao: 'Peito de peru com tomate, cebola e orégano.', preco: 8.90, destaque: false },
              { id: 703, nome: 'Pastel de Peito de Peru com Queijo', descricao: 'Peito de peru com mussarela.', preco: 8.90, destaque: false },
              { id: 704, nome: 'Pastel de Peito de Peru com Provolone', descricao: 'Peito de peru com provolone.', preco: 8.90, destaque: false },
              { id: 705, nome: 'Pastel de Peito de Peru com Frango', descricao: 'Mix de peru e frango.', preco: 8.90, destaque: false },
              { id: 706, nome: 'Pastel de Peito de Peru com Catupiry e Orégano', descricao: 'Peru com catupiry e orégano.', preco: 8.90, destaque: false },
              { id: 707, nome: 'Pastel de Peito de Peru com Azeitona e Orégano', descricao: 'Peru com azeitonas e orégano.', preco: 8.90, destaque: false },
              { id: 708, nome: 'Pastel de Peito de Peru com Palmito e Orégano', descricao: 'Peru com palmito e orégano.', preco: 8.90, destaque: false },
              { id: 709, nome: 'Pastel de Peito de Peru com Catupiry e Palmito', descricao: 'Peru com catupiry e palmito.', preco: 8.90, destaque: false },
              { id: 710, nome: 'Pastel de Peito de Peru com Cheddar', descricao: 'Peru com cheddar cremoso.', preco: 8.90, destaque: false }
            ]
          },
          {
            nomeGrupo: 'Palmito',
            itens: [
              { id: 801, nome: 'Pastel de Palmito', descricao: 'Palmito macio e temperado.', preco: 8.90, destaque: false },
              { id: 802, nome: 'Pastel de Palmito com Catupiry e Orégano', descricao: 'Palmito com catupiry e orégano.', preco: 8.90, destaque: false },
              { id: 803, nome: 'Pastel de Palmito com Provolone e Cebola', descricao: 'Palmito, provolone e cebola.', preco: 8.90, destaque: false },
              { id: 804, nome: 'Pastel de Palmito com Cheddar', descricao: 'Palmito com cheddar.', preco: 8.90, destaque: false },
              { id: 805, nome: 'Pastel de Palmito com Tomate, Cebola e Azeitona', descricao: 'Palmito com tomate, cebola e azeitona.', preco: 8.90, destaque: false }
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
              { id: 901, nome: 'Pastel de Chocolate Branco e Preto', descricao: 'Mix de chocolate branco e preto derretidos.', preco: 8.90, destaque: false },
              { id: 902, nome: 'Pastel de Chocolate Preto', descricao: 'Chocolate meio amargo.', preco: 8.90, destaque: false },
              { id: 903, nome: 'Pastel de Chocolate Branco', descricao: 'Suave chocolate branco.', preco: 8.90, destaque: false },
              { id: 904, nome: 'Pastel de Chocolate Preto com Banana e Canela', descricao: 'Chocolate meio amargo com banana e toque de canela.', preco: 8.90, destaque: false },
              { id: 905, nome: 'Pastel de Prestígio', descricao: 'Chocolate com coco ralado.', preco: 8.90, destaque: false }
            ]
          },
          {
            nomeGrupo: 'Doce de Leite',
            itens: [
              { id: 931, nome: 'Pastel de Doce de Leite Tradicional', descricao: 'Doce de leite cremoso.', preco: 8.90, destaque: false },
              { id: 932, nome: 'Pastel de Doce de Leite com Coco', descricao: 'Doce de leite com coco ralado.', preco: 8.90, destaque: false },
              { id: 933, nome: 'Pastel de Doce de Leite, Chocolate, Banana e Queijo', descricao: 'Combinação de doce de leite, chocolate, banana e mussarela.', preco: 8.90, destaque: false },
              { id: 934, nome: 'Pastel de Doce de Leite, Banana, Queijo e Ameixa', descricao: 'Doce de leite com banana, mussarela e ameixa.', preco: 8.90, destaque: false },
              { id: 935, nome: 'Pastel de Doce de Leite com Queijo e Ameixa', descricao: 'Doce de leite, mussarela e ameixa.', preco: 8.90, destaque: false },
              { id: 936, nome: 'Pastel de Doce de Leite e Ameixa', descricao: 'Doce de leite com ameixa.', preco: 8.90, destaque: false }
            ]
          },
          {
            nomeGrupo: 'Outros Doces',
            itens: [
              { id: 951, nome: 'Pastel de Romeu e Julieta', descricao: 'Goiabada com queijo.', preco: 8.90, destaque: false },
              { id: 952, nome: 'Pastel de Banana com Canela e Açúcar', descricao: 'Banana fatiada com canela e açúcar.', preco: 8.90, destaque: false },
              { id: 953, nome: 'Pastel de Banana, Queijo e Canela', descricao: 'Banana, mussarela e toque de canela.', preco: 8.90, destaque: false }
            ]
          }
        ]
      }
    ]
  },
  // Seção de Esfihas, espelhando todos os sabores de Pastéis
esfihas: {
  tipoEstrutura: 'hierarquica',
  subsecoes: [
    {
      tituloSubsecao: 'Esfihas Salgadas',
      idSubsecao: 'esfihas-salgadas-todos',
      grupos: [
        {
          nomeGrupo: 'Carne',
          itens: [
            { id: 1101, nome: 'Esfiha de Carne', descricao: 'Tradicional recheio de carne moída.', preco: 8.49, destaque: false },
            { id: 1102, nome: 'Esfiha de Carne com Queijo e Orégano', descricao: 'Carne moída com mussarela e toque de orégano.', preco: 8.49, destaque: false },
            { id: 1103, nome: 'Esfiha de Carne com Ovo e Azeitona', descricao: 'Carne moída com ovo cozido e azeitonas fatiadas.', preco: 8.49, destaque: false },
            { id: 1104, nome: 'Esfiha de Carne com Ovo, Azeitona e Catupiry', descricao: 'Carne, ovo, azeitona e catupiry cremoso.', preco: 8.49, destaque: false },
            { id: 1105, nome: 'Esfiha de Carne com Banana e Queijo', descricao: 'Carne com banana caramelizada e mussarela.', preco: 8.49, destaque: false },
            { id: 1106, nome: 'Esfiha de Carne com Azeitona e Provolone', descricao: 'Carne com azeitonas e provolone derretido.', preco: 8.49, destaque: false },
            { id: 1107, nome: 'Esfiha de Carne com Ovo e Queijo', descricao: 'Carne, ovo e mussarela.', preco: 8.49, destaque: false },
            { id: 1108, nome: 'Esfiha de Carne com Ovo, Azeitona e Queijo', descricao: 'Carne, ovo, azeitonas e mussarela.', preco: 8.49, destaque: false },
            { id: 1109, nome: 'Esfiha de Carne com Provolone', descricao: 'Carne com provolone cremoso.', preco: 8.49, destaque: false },
            { id: 1110, nome: 'Esfiha de Carne com Napolitano', descricao: 'Carne com queijo, presunto, tomate e orégano.', preco: 8.49, destaque: false },
            { id: 1111, nome: 'Esfiha de Carne com Palmito', descricao: 'Carne com palmito macio.', preco: 8.49, destaque: false },
            { id: 1112, nome: 'Esfiha de Carne com Ovo e Milho', descricao: 'Carne, ovo e milho verde.', preco: 8.49, destaque: false },
            { id: 1113, nome: 'Esfiha de Carne com Ovo', descricao: 'Carne moída com ovo cozido.', preco: 8.49, destaque: false },
            { id: 1114, nome: 'Esfiha de Carne com Azeitona', descricao: 'Carne com azeitonas fatiadas.', preco: 8.49, destaque: false },
            { id: 1115, nome: 'Esfiha de Carne com Presunto', descricao: 'Carne com presunto fatiado.', preco: 8.49, destaque: false }
          ]
        },
        {
          nomeGrupo: 'Frango',
          itens: [
            { id: 1201, nome: 'Esfiha de Frango', descricao: 'Recheio clássico de frango desfiado.', preco: 8.49, destaque: false },
            { id: 1202, nome: 'Esfiha de Frango com Cheddar', descricao: 'Frango desfiado com cheddar cremoso.', preco: 8.49, destaque: false },
            { id: 1203, nome: 'Esfiha de Frango com Catupiry', descricao: 'Frango com catupiry autêntico.', preco: 8.49, destaque: false },
            { id: 1204, nome: 'Esfiha de Frango com Palmito', descricao: 'Frango desfiado com palmito.', preco: 8.49, destaque: false },
            { id: 1205, nome: 'Esfiha de Frango com Napolitano', descricao: 'Frango com queijo, presunto, tomate e orégano.', preco: 8.49, destaque: false },
            { id: 1206, nome: 'Esfiha de Frango com Catupiry e Palmito', descricao: 'Frango, catupiry e palmito.', preco: 8.49, destaque: false },
            { id: 1207, nome: 'Esfiha de Frango com Provolone', descricao: 'Frango com provolone derretido.', preco: 8.49, destaque: false },
            { id: 1208, nome: 'Esfiha de Frango com Queijo', descricao: 'Frango desfiado com mussarela.', preco: 8.49, destaque: false },
            { id: 1209, nome: 'Esfiha de Frango com Ovo', descricao: 'Frango com ovo cozido.', preco: 8.49, destaque: false },
            { id: 1210, nome: 'Esfiha de Frango com Queijo e Ovo', descricao: 'Frango, mussarela e ovo.', preco: 8.49, destaque: false },
            { id: 1211, nome: 'Esfiha de Frango com Azeitona', descricao: 'Frango com azeitonas fatiadas.', preco: 8.49, destaque: false },
            { id: 1212, nome: 'Esfiha de Frango com Azeitona e Ovo', descricao: 'Frango, azeitonas e ovo.', preco: 8.49, destaque: false },
            { id: 1213, nome: 'Esfiha de Frango com Presunto', descricao: 'Frango com presunto fatiado.', preco: 8.49, destaque: false }
          ]
        },
        {
          nomeGrupo: 'Bacon',
          itens: [
            { id: 1301, nome: 'Esfiha de Bacon', descricao: 'Bacon crocante.', preco: 8.49, destaque: false },
            { id: 1302, nome: 'Esfiha de Bacon com Queijo', descricao: 'Bacon com mussarela.', preco: 8.49, destaque: false },
            { id: 1303, nome: 'Esfiha de Bacon com Queijo e Palmito', descricao: 'Bacon, mussarela e palmito.', preco: 8.49, destaque: false },
            { id: 1304, nome: 'Esfiha de Bacon com Catupiry', descricao: 'Bacon com catupiry cremoso.', preco: 8.49, destaque: false },
            { id: 1305, nome: 'Esfiha de Bacon com Frango', descricao: 'Bacon com frango desfiado.', preco: 8.49, destaque: false },
            { id: 1306, nome: 'Esfiha de Bacon com Carne', descricao: 'Bacon e carne moída.', preco: 8.49, destaque: false },
            { id: 1307, nome: 'Esfiha de Bacon com Palmito', descricao: 'Bacon com palmito.', preco: 8.49, destaque: false },
            { id: 1308, nome: 'Esfiha de Bacon com Cheddar', descricao: 'Bacon com cheddar cremoso.', preco: 8.49, destaque: false },
            { id: 1309, nome: 'Esfiha de Bacon com Presunto', descricao: 'Bacon com presunto fatiado.', preco: 8.49, destaque: false },
            { id: 1310, nome: 'Esfiha de Bacon com Provolone', descricao: 'Bacon com provolone.', preco: 8.49, destaque: false }
          ]
        },
        {
          nomeGrupo: 'Calabresa',
          itens: [
            { id: 1401, nome: 'Esfiha de Calabresa', descricao: 'Calabresa fatiada.', preco: 8.49, destaque: false },
            { id: 1402, nome: 'Esfiha de Calabresa com Queijo', descricao: 'Calabresa e mussarela.', preco: 8.49, destaque: false },
            { id: 1403, nome: 'Esfiha de Calabresa com Queijo e Palmito', descricao: 'Calabresa, mussarela e palmito.', preco: 8.49, destaque: false },
            { id: 1404, nome: 'Esfiha de Calabresa com Catupiry', descricao: 'Calabresa com catupiry.', preco: 8.49, destaque: false },
            { id: 1405, nome: 'Esfiha de Calabresa com Presunto', descricao: 'Calabresa e presunto.', preco: 8.49, destaque: false },
            { id: 1406, nome: 'Esfiha de Calabresa com Frango', descricao: 'Calabresa e frango desfiado.', preco: 8.49, destaque: false },
            { id: 1407, nome: 'Esfiha de Calabresa com Carne', descricao: 'Calabresa e carne moída.', preco: 8.49, destaque: false },
            { id: 1408, nome: 'Esfiha de Calabresa com Palmito', descricao: 'Calabresa e palmito.', preco: 8.49, destaque: false },
            { id: 1409, nome: 'Esfiha de Calabresa com Cheddar', descricao: 'Calabresa com cheddar.', preco: 8.49, destaque: false },
            { id: 1410, nome: 'Esfiha de Calabresa com Provolone', descricao: 'Calabresa com provolone.', preco: 8.49, destaque: false }
          ]
        },
        {
          nomeGrupo: 'Napolitano',
          itens: [
            { id: 1501, nome: 'Esfiha de Napolitano', descricao: 'Queijo, presunto, tomate e orégano.', preco: 8.49, destaque: false },
            { id: 1502, nome: 'Esfiha de Napolitano com Catupiry', descricao: 'Recheio cremoso com catupiry.', preco: 8.49, destaque: false },
            { id: 1503, nome: 'Esfiha de Napolitano com Tomate', descricao: 'Queijo, presunto e tomate fresco.', preco: 8.49, destaque: false },
            { id: 1504, nome: 'Esfiha de Napolitano com Cheddar', descricao: 'Napolitano com toque de cheddar.', preco: 8.49, destaque: false }
          ]
        },
        {
          nomeGrupo: 'Queijo',
          itens: [
            { id: 1601, nome: 'Esfiha de Queijo', descricao: 'Mussarella clássica.', preco: 8.49, destaque: false },
            { id: 1602, nome: 'Esfiha de Queijo com Tomate, Cebola e Orégano', descricao: 'Mussarela com tomate, cebola e orégano.', preco: 8.49, destaque: false },
            { id: 1603, nome: 'Esfiha de Três Queijos', descricao: 'Prato, Provolone e Catupiry.', preco: 8.49, destaque: false },
            { id: 1604, nome: 'Esfiha de Dois Queijos', descricao: 'Prato e Catupiry.', preco: 8.49, destaque: false },
            { id: 1605, nome: 'Esfiha de Quatro Queijos', descricao: 'Prato, Provolone, Cheddar e Catupiry.', preco: 8.49, destaque: false },
            { id: 1606, nome: 'Esfiha de Queijo com Palmito e Orégano', descricao: 'Mussarela com palmito e orégano.', preco: 8.49, destaque: false },
            { id: 1607, nome: 'Esfiha de Queijo com Azeitona e Orégano', descricao: 'Mussarela com azeitonas e orégano.', preco: 8.49, destaque: false },
            { id: 1608, nome: 'Esfiha de Queijo com Palmito e Catupiry', descricao: 'Mussarela, palmito e catupiry.', preco: 8.49, destaque: false }
          ]
        },
        {
          nomeGrupo: 'Peito de Peru',
          itens: [
            { id: 1701, nome: 'Esfiha de Peito de Peru', descricao: 'Peito de peru defumado.', preco: 8.49, destaque: false },
            { id: 1702, nome: 'Esfiha de Peito de Peru com Tomate, Cebola e Orégano', descricao: 'Peito de peru com tomate, cebola e orégano.', preco: 8.49, destaque: false },
            { id: 1703, nome: 'Esfiha de Peito de Peru com Queijo', descricao: 'Peito de peru com mussarela.', preco: 8.49, destaque: false },
            { id: 1704, nome: 'Esfiha de Peito de Peru com Provolone', descricao: 'Peito de peru com provolone.', preco: 8.49, destaque: false },
            { id: 1705, nome: 'Esfiha de Peito de Peru com Frango', descricao: 'Mix de peru e frango.', preco: 8.49, destaque: false },
            { id: 1706, nome: 'Esfiha de Peito de Peru com Catupiry e Orégano', descricao: 'Peru com catupiry e orégano.', preco: 8.49, destaque: false },
            { id: 1707, nome: 'Esfiha de Peito de Peru com Azeitona e Orégano', descricao: 'Peru com azeitonas e orégano.', preco: 8.49, destaque: false },
            { id: 1708, nome: 'Esfiha de Peito de Peru com Palmito e Orégano', descricao: 'Peru com palmito e orégano.', preco: 8.49, destaque: false },
            { id: 1709, nome: 'Esfiha de Peito de Peru com Catupiry e Palmito', descricao: 'Peru com catupiry e palmito.', preco: 8.49, destaque: false },
            { id: 1710, nome: 'Esfiha de Peito de Peru com Cheddar', descricao: 'Peru com cheddar cremoso.', preco: 8.49, destaque: false }
          ]
        },
        {
          nomeGrupo: 'Palmito',
          itens: [
            { id: 1801, nome: 'Esfiha de Palmito', descricao: 'Palmito macio e temperado.', preco: 8.49, destaque: false },
            { id: 1802, nome: 'Esfiha de Palmito com Catupiry e Orégano', descricao: 'Palmito com catupiry e orégano.', preco: 8.49, destaque: false },
            { id: 1803, nome: 'Esfiha de Palmito com Provolone e Cebola', descricao: 'Palmito, provolone e cebola.', preco: 8.49, destaque: false },
            { id: 1804, nome: 'Esfiha de Palmito com Cheddar', descricao: 'Palmito com cheddar.', preco: 8.49, destaque: false },
            { id: 1805, nome: 'Esfiha de Palmito com Tomate, Cebola e Azeitona', descricao: 'Palmito com tomate, cebola e azeitona.', preco: 8.49, destaque: false }
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
            { id: 1901, nome: 'Esfiha de Chocolate Branco e Preto', descricao: 'Mix de chocolate branco e preto derretidos.', preco: 8.49, destaque: false },
            { id: 1902, nome: 'Esfiha de Chocolate Preto', descricao: 'Chocolate meio amargo.', preco: 8.49, destaque: false },
            { id: 1903, nome: 'Esfiha de Chocolate Branco', descricao: 'Suave chocolate branco.', preco: 8.49, destaque: false },
            { id: 1904, nome: 'Esfiha de Chocolate Preto com Banana e Canela', descricao: 'Chocolate meio amargo com banana e toque de canela.', preco: 8.49, destaque: false },
            { id: 1905, nome: 'Esfiha de Prestígio', descricao: 'Chocolate com coco ralado.', preco: 8.49, destaque: false }
          ]
        },
        {
          nomeGrupo: 'Doce de Leite',
          itens: [
            { id: 1931, nome: 'Esfiha de Doce de Leite Tradicional', descricao: 'Doce de leite cremoso.', preco: 8.49, destaque: false },
            { id: 1932, nome: 'Esfiha de Doce de Leite com Coco', descricao: 'Doce de leite com coco ralado.', preco: 8.49, destaque: false },
            { id: 1933, nome: 'Esfiha de Doce de Leite, Chocolate, Banana e Queijo', descricao: 'Combinação de doce de leite, chocolate, banana e mussarela.', preco: 8.49, destaque: false },
            { id: 1934, nome: 'Esfiha de Doce de Leite, Banana, Queijo e Ameixa', descricao: 'Doce de leite com banana, mussarela e ameixa.', preco: 8.49, destaque: false },
            { id: 1935, nome: 'Esfiha de Doce de Leite com Queijo e Ameixa', descricao: 'Doce de leite, mussarela e ameixa.', preco: 8.49, destaque: false },
            { id: 1936, nome: 'Esfiha de Doce de Leite e Ameixa', descricao: 'Doce de leite com ameixa.', preco: 8.49, destaque: false }
          ]
        },
        {
          nomeGrupo: 'Outros Doces',
          itens: [
            { id: 1951, nome: 'Esfiha de Romeu e Julieta', descricao: 'Goiabada com queijo.', preco: 8.49, destaque: false },
            { id: 1952, nome: 'Esfiha de Banana com Canela e Açúcar', descricao: 'Banana fatiada com canela e açúcar.', preco: 8.49, destaque: false },
            { id: 1953, nome: 'Esfiha de Banana, Queijo e Canela', descricao: 'Banana, mussarela e toque de canela.', preco: 8.49, destaque: false }
          ]
        }
      ]
    }
  ]
},
  crepes: [ /* ... */ ],
  batatas: [ /* ... */ ],
  bebidas: [ /* ... */ ]
};

// Exportando os dados
export { cardapio, categorias };