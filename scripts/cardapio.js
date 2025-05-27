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
    id: 'pasteis', nome: 'Pastéis', // A categoria principal é 'Pastéis'
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
  combos: [
    { id: 1, nome: 'Combo Exemplo', descricao: 'Descrição do combo exemplo.', preco: 35.90, destaque: true }
  ],
  pizzas: [
    { id: 1, nome: 'Pizza Exemplo', descricao: 'Descrição da pizza exemplo.', preco: 40.00, destaque: true }
  ],
  lanches: [
    { id: 1, nome: 'Lanche Exemplo', descricao: 'Descrição do lanche exemplo.', preco: 22.00, destaque: true }
  ],
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
              { id: 101, nome: 'Pastel de Carne Tradicional', descricao: 'Delicioso pastel de carne moída.', preco: 8.90, destaque: false },
              { id: 102, nome: 'Pastel de Carne com Ovo', descricao: 'Carne moída com ovo cozido.', preco: 8.90, destaque: false },
              { id: 103, nome: 'Pastel de Carne Acebolado', descricao: 'Carne moída com cebola refogada.', preco: 8.90, destaque: true },
            ]
          },
          {
            nomeGrupo: 'Frango',
            itens: [
              { id: 201, nome: 'Pastel de Frango com Catupiry', descricao: 'Frango desfiado com autêntico catupiry.', preco: 8.90, destaque: true },
              { id: 202, nome: 'Pastel de Frango com Milho', descricao: 'Frango desfiado com milho verde.', preco: 8.90, destaque: false },
              { id: 203, nome: 'Pastel de Frango Simples', descricao: 'Frango desfiado bem temperado.', preco: 8.90, destaque: false },
            ]
          },
          {
            nomeGrupo: 'Bacon',
            itens: [
              { id: 301, nome: 'Pastel de Bacon com Queijo', descricao: 'Bacon crocante com queijo mussarela.', preco: 8.90, destaque: false },
              { id: 302, nome: 'Pastel de Bacon com Milho e Queijo', descricao: 'Bacon, milho e mussarela.', preco: 8.90, destaque: false },
              { id: 303, nome: 'Pastel Duplo Bacon', descricao: 'Para os amantes de bacon.', preco: 8.90, destaque: false },
            ]
          },
          {
            nomeGrupo: 'Calabresa',
            itens: [
              { id: 401, nome: 'Pastel de Calabresa com Queijo', descricao: 'Calabresa fatiada com mussarela.', preco: 8.90, destaque: false },
              { id: 402, nome: 'Pastel de Calabresa Acebolada', descricao: 'Calabresa com cebola refogada.', preco: 8.90, destaque: false },
              { id: 403, nome: 'Pastel de Calabresa com Catupiry', descricao: 'Calabresa com catupiry cremoso.', preco: 8.90, destaque: false },
            ]
          },
          {
            nomeGrupo: 'Napolitano',
            itens: [
              { id: 501, nome: 'Pastel Napolitano', descricao: 'Queijo, presunto, tomate e orégano.', preco: 8.90, destaque: false },
              { id: 502, nome: 'Pastel Napolitano com Catupiry', descricao: 'Ainda mais cremoso.', preco: 8.90, destaque: false },
              { id: 503, nome: 'Pastel Napolitano Especial da Casa', descricao: 'Com nosso toque secreto.', preco: 8.90, destaque: false },
            ]
          },
          {
            nomeGrupo: 'Queijo',
            itens: [
              { id: 601, nome: 'Pastel de Mussarela', descricao: 'Clássico pastel de queijo mussarela.', preco: 8.90, destaque: false },
              { id: 602, nome: 'Pastel Quatro Queijos', descricao: 'Mussarela, provolone, parmesão e catupiry.', preco: 8.90, destaque: true },
              { id: 603, nome: 'Pastel de Queijo com Alho', descricao: 'Mussarela com um toque de alho frito.', preco: 8.90, destaque: false },
            ]
          },
          {
            nomeGrupo: 'Peito de Peru',
            itens: [
              { id: 701, nome: 'Pastel Peito de Peru com Queijo Branco', descricao: 'Leve e saboroso.', preco: 8.90, destaque: false },
              { id: 702, nome: 'Pastel Peito de Peru com Requeijão', descricao: 'Suave e cremoso.', preco: 8.90, destaque: false },
              { id: 703, nome: 'Pastel Peito de Peru com Tomate Seco', descricao: 'Combinação sofisticada.', preco: 8.90, destaque: false },
            ]
          },
          {
            nomeGrupo: 'Palmito',
            itens: [
              { id: 801, nome: 'Pastel de Palmito', descricao: 'Palmito macio e temperado.', preco: 8.90, destaque: false },
              { id: 802, nome: 'Pastel de Palmito com Queijo', descricao: 'Palmito com mussarela derretida.', preco: 8.90, destaque: false },
              { id: 803, nome: 'Pastel de Palmito com Catupiry', descricao: 'Palmito com catupiry cremoso.', preco: 8.90, destaque: false },
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
              { id: 901, nome: 'Pastel de Chocolate ao Leite', descricao: 'Delicioso chocolate ao leite derretido.', preco: 8.90, destaque: false },
              { id: 902, nome: 'Pastel de Chocolate com Morango', descricao: 'Chocolate com morangos frescos.', preco: 8.90, destaque: true },
              { id: 903, nome: 'Pastel de Chocolate Branco', descricao: 'Suave chocolate branco.', preco: 8.90, destaque: false },
            ]
          },
          {
            nomeGrupo: 'Doce de Leite',
            itens: [
              { id: 911, nome: 'Pastel de Doce de Leite Tradicional', descricao: 'Puro doce de leite cremoso.', preco: 8.90, destaque: false },
              { id: 912, nome: 'Pastel de Doce de Leite com Coco', descricao: 'Doce de leite com coco ralado.', preco: 8.90, destaque: false },
              { id: 913, nome: 'Pastel de Doce de Leite com Queijo', descricao: 'Combinação surpreendente.', preco: 8.90, destaque: false },
            ]
          },
          {
            nomeGrupo: 'Outros Doces',
            itens: [
              { id: 921, nome: 'Pastel de Banana com Canela', descricao: 'Banana fatiada com açúcar e canela.', preco: 8.90, destaque: false },
              { id: 922, nome: 'Pastel Romeu e Julieta', descricao: 'Goiabada com queijo minas.', preco: 8.90, destaque: false },
              { id: 923, nome: 'Pastel de Nutella com Banana', descricao: 'Nutella original com rodelas de banana.', preco: 8.90, destaque: false },
            ]
          }
        ]
      }
    ]
  },
  esfihas: {
    tipoEstrutura: 'hierarquica',
    subsecoes: [
      {
        tituloSubsecao: 'Esfihas Salgadas',
        idSubsecao: 'esfihas-salgadas-todas',
        grupos: [
          {
            nomeGrupo: 'Carne',
            itens: [
              { id: 101, nome: 'Esfiha de Carne Tradicional', descricao: 'Deliciosa esfiha de carne moída.', preco: 8.49, destaque: false },
              { id: 102, nome: 'Esfiha de Carne com Ovo', descricao: 'Carne moída com ovo cozido.', preco: 8.49, destaque: false },
              { id: 103, nome: 'Esfiha de Carne Acebolada', descricao: 'Carne moída com cebola refogada.', preco: 8.49, destaque: true }
            ]
          },
          {
            nomeGrupo: 'Frango',
            itens: [
              { id: 201, nome: 'Esfiha de Frango com Catupiry', descricao: 'Frango desfiado com autêntico catupiry.', preco: 8.49, destaque: true },
              { id: 202, nome: 'Esfiha de Frango com Milho', descricao: 'Frango desfiado com milho verde.', preco: 8.49, destaque: false },
              { id: 203, nome: 'Esfiha de Frango Simples', descricao: 'Frango desfiado bem temperado.', preco: 8.49, destaque: false }
            ]
          },
          {
            nomeGrupo: 'Bacon',
            itens: [
              { id: 301, nome: 'Esfiha de Bacon com Queijo', descricao: 'Bacon crocante com queijo mussarela.', preco: 8.49, destaque: false },
              { id: 302, nome: 'Esfiha de Bacon com Milho e Queijo', descricao: 'Bacon, milho e mussarela.', preco: 8.49, destaque: false },
              { id: 303, nome: 'Esfiha Duplo Bacon', descricao: 'Para os amantes de bacon.', preco: 8.49, destaque: false }
            ]
          },
          {
            nomeGrupo: 'Calabresa',
            itens: [
              { id: 401, nome: 'Esfiha de Calabresa com Queijo', descricao: 'Calabresa fatiada com mussarela.', preco: 8.49, destaque: false },
              { id: 402, nome: 'Esfiha de Calabresa Acebolada', descricao: 'Calabresa com cebola refogada.', preco: 8.49, destaque: false },
              { id: 403, nome: 'Esfiha de Calabresa com Catupiry', descricao: 'Calabresa com catupiry cremoso.', preco: 8.49, destaque: false }
            ]
          },
          {
            nomeGrupo: 'Napolitano',
            itens: [
              { id: 501, nome: 'Esfiha Napolitana', descricao: 'Queijo, presunto, tomate e orégano.', preco: 8.49, destaque: false },
              { id: 502, nome: 'Esfiha Napolitana com Catupiry', descricao: 'Ainda mais cremosa.', preco: 8.49, destaque: false },
              { id: 503, nome: 'Esfiha Napolitana Especial da Casa', descricao: 'Com nosso toque secreto.', preco: 8.49, destaque: false }
            ]
          },
          {
            nomeGrupo: 'Queijo',
            itens: [
              { id: 601, nome: 'Esfiha de Mussarela', descricao: 'Clássica esfiha de queijo mussarela.', preco: 8.49, destaque: false },
              { id: 602, nome: 'Esfiha Quatro Queijos', descricao: 'Mussarela, provolone, parmesão e catupiry.', preco: 8.49, destaque: true },
              { id: 603, nome: 'Esfiha de Queijo com Alho', descricao: 'Mussarela com um toque de alho frito.', preco: 8.49, destaque: false }
            ]
          },
          {
            nomeGrupo: 'Peito de Peru',
            itens: [
              { id: 701, nome: 'Esfiha Peito de Peru com Queijo Branco', descricao: 'Leve e saborosa.', preco: 8.49, destaque: false },
              { id: 702, nome: 'Esfiha Peito de Peru com Requeijão', descricao: 'Suave e cremosa.', preco: 8.49, destaque: false },
              { id: 703, nome: 'Esfiha Peito de Peru com Tomate Seco', descricao: 'Combinação sofisticada.', preco: 8.49, destaque: false }
            ]
          },
          {
            nomeGrupo: 'Palmito',
            itens: [
              { id: 801, nome: 'Esfiha de Palmito', descricao: 'Palmito macio e temperado.', preco: 8.49, destaque: false },
              { id: 802, nome: 'Esfiha de Palmito com Queijo', descricao: 'Palmito com mussarela derretida.', preco: 8.49, destaque: false },
              { id: 803, nome: 'Esfiha de Palmito com Catupiry', descricao: 'Palmito com catupiry cremoso.', preco: 8.49, destaque: false }
            ]
          }
        ]
      },
      {
        tituloSubsecao: 'Esfihas Doces',
        idSubsecao: 'esfihas-doces-todas',
        grupos: [
          {
            nomeGrupo: 'Chocolate',
            itens: [
              { id: 901, nome: 'Esfiha de Chocolate ao Leite', descricao: 'Deliciosa esfiha de chocolate ao leite derretido.', preco: 8.49, destaque: false },
              { id: 902, nome: 'Esfiha de Chocolate com Morango', descricao: 'Chocolate com morangos frescos.', preco: 8.49, destaque: true },
              { id: 903, nome: 'Esfiha de Chocolate Branco', descricao: 'Suave chocolate branco.', preco: 8.49, destaque: false }
            ]
          },
          {
            nomeGrupo: 'Doce de Leite',
            itens: [
              { id: 911, nome: 'Esfiha de Doce de Leite Tradicional', descricao: 'Puro doce de leite cremoso.', preco: 8.49, destaque: false },
              { id: 912, nome: 'Esfiha de Doce de Leite com Coco', descricao: 'Doce de leite com coco ralado.', preco: 8.49, destaque: false },
              { id: 913, nome: 'Esfiha de Doce de Leite com Queijo', descricao: 'Combinação surpreendente.', preco: 8.49, destaque: false }
            ]
          },
          {
            nomeGrupo: 'Outros Doces',
            itens: [
              { id: 921, nome: 'Esfiha de Banana com Canela', descricao: 'Banana fatiada com açúcar e canela.', preco: 8.49, destaque: false },
              { id: 922, nome: 'Esfiha Romeu e Julieta', descricao: 'Goiabada com queijo minas.', preco: 8.49, destaque: false },
              { id: 923, nome: 'Esfiha de Nutella com Banana', descricao: 'Nutella original com rodelas de banana.', preco: 8.49, destaque: false }
            ]
          }
        ]
      }
    ]
  },
  crepes: [
    { id: 1, nome: 'Crepe Exemplo', descricao: 'Descrição do crepe exemplo.', preco: 24.00, destaque: false }
  ],
  batatas: [
    { id: 1, nome: 'Batata Exemplo', descricao: 'Descrição da batata exemplo.', preco: 15.00, destaque: true }
  ],
  bebidas: [
    { id: 1, nome: 'Bebida Exemplo', descricao: 'Descrição da bebida exemplo.', preco: 6.00, destaque: false }
  ]
};

// Exportando os dados
export { cardapio, categorias };