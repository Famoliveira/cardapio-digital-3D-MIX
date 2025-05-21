// scripts/cardapio.js

// Configuração das categorias e seus nomes de exibição
const categorias = [
  {
    id: 'destaques', nome: 'Destaques',
    icon: 'assets/icons/destaques.png'
  },
  {
    id: 'combos', nome: 'Combos',
    icon: 'assets/icons/combos.png'
  },
  {
    id: 'pizzas', nome: 'Pizzas',
    icon: 'assets/icons/pizzas.png'
  },
  {
    id: 'lanches', nome: 'Lanches',
    icon: 'assets/icons/lanches.png'
  },
  {
    id: 'pasteis', nome: 'Pastéis',
    icon: 'assets/icons/pasteis.png'
  },
  {
    id: 'esfihas', nome: 'Esfihas',
    icon: 'assets/icons/esfihas.png'
  },
  {
    id: 'crepes', nome: 'Crepes',
    icon: 'assets/icons/crepes.png'
  },
  {
    id: 'batatas', nome: 'Batatas',
    icon: 'assets/icons/batatas.png'
  },
  {
    id: 'bebidas', nome: 'Bebidas',
    icon: 'assets/icons/bebidas.png'
  }
];

// Dados do cardápio
const cardapio = {
  combos: [
    {
      id: 1,
      nome: 'Combo Clássico Individual',
      descricao: 'X-Burger Clássico + Batata Frita Média + Refrigerante Lata.',
      preco: 40.90,
      destaque: true,
    },
    {
      id: 2,
      nome: 'Combo Casal Perfeito',
      descricao: '2 X-Salada Completo + Porção Grande de Batata com Cheddar e Bacon + 2 Refrigerantes Lata.',
      preco: 69.90,
      destaque: false,
    },
    {
      id: 3,
      nome: 'Combo Família Feliz',
      descricao: '1 Pizza Grande (qualquer sabor) + 1 Refrigerante 2 Litros + 4 esfihas Doces.',
      preco: 89.90,
      destaque: true,
    }
  ],
  pizzas: [
    {
      id: 1,
      nome: 'Pizza Margherita Especial',
      descricao: 'Molho de tomate italiano, mussarela de búfala, rodelas de tomate fresco, manjericão e um fio de azeite extra virgem.',
      preco: 45.00,
      destaque: false,
    },
    {
      id: 2,
      nome: 'Pizza Calabresa Acebolada',
      descricao: 'Molho de tomate, mussarela, calabresa fatiada, cebola roxa e azeitonas pretas.',
      preco: 42.00,
      destaque: true,
    },
    {
      id: 3,
      nome: 'Pizza Portuguesa Completa',
      descricao: 'Molho de tomate, mussarela, presunto, ovo cozido, cebola, pimentão, ervilha e azeitonas verdes.',
      preco: 48.90,
      destaque: false,
    },
    {
      id: 4,
      nome: 'Pizza Frango com Catupiry Original',
      descricao: 'Molho de tomate, mussarela, frango desfiado temperado e catupiry original gratinado.',
      preco: 47.50,
      destaque: false,
    }
  ],
  lanches: [
    {
      id: 1,
      nome: 'X-Burger Clássico',
      descricao: 'Pão, hambúrguer 150g, queijo cheddar, alface, tomate e molho especial.',
      preco: 23.50,
      destaque: false,
    },
    {
      id: 2,
      nome: 'X-Salada Completo',
      descricao: 'Pão, hambúrguer 150g, queijo prato, ovo, presunto, alface, tomate, milho, ervilha e maionese caseira.',
      preco: 27.00,
      destaque: false,
    },
    {
      id: 3,
      nome: 'X-Bacon Artesanal',
      descricao: 'Pão brioche, hambúrguer de costela 180g, queijo mussarela, fatias crocantes de bacon, cebola caramelizada e barbecue.',
      preco: 29.90,
      destaque: true,
    },
    {
      id: 4,
      nome: 'Duplo Burger Cheddar',
      descricao: 'Pão australiano, dois hambúrgueres 100g, dobro de queijo cheddar, bacon em cubos e molho cheddar cremoso.',
      preco: 32.50,
      destaque: false,
    }
  ],
  pasteis: [
    {
      id: 1,
      nome: 'Pastel de Camarão com Catupiry',
      descricao: 'Massa crocante recheada com camarões frescos salteados e catupiry cremoso.',
      preco: 12.90,
      destaque: false,
    },
    {
      id: 2,
      nome: 'Pastel de Carne Seca com Abóbora',
      descricao: 'Combinação perfeita de carne seca desfiada com purê de abóbora e queijo coalho.',
      preco: 11.50,
      destaque: false,
    },
    {
      id: 3,
      nome: 'Pastel de Queijo Padrão',
      descricao: 'O clássico pastel de feira, recheado com queijo mussarela derretido.',
      preco: 9.00,
      destaque: false,
    },
    {
      id: 4,
      nome: 'Pastel Romeu e Julieta',
      descricao: 'Deliciosa combinação de queijo minas com goiabada cremosa.',
      preco: 10.00,
      destaque: false,
    }
  ],
  esfihas: [
    {
      id: 1,
      nome: 'esfiha Aberta de Carne',
      descricao: 'Massa fina e crocante, recheada com carne moída temperada com especiarias árabes e limão.',
      preco: 7.50,
      destaque: false,
    },
    {
      id: 2,
      nome: 'esfiha Fechada de Queijo Branco',
      descricao: 'Massa macia, recheada com queijo branco fresco temperado e um toque de hortelã.',
      preco: 8.00,
      destaque: false,
    },
    {
      id: 3,
      nome: 'esfiha Folhada de Calabresa',
      descricao: 'Massa folhada crocante, recheada com calabresa moída, cebola e um toque de pimenta.',
      preco: 8.50,
      destaque: true,
    },
    {
      id: 4,
      nome: 'esfiha Doce de Chocolate com Morango',
      descricao: 'Massa doce, recheada com chocolate ao leite derretido e pedaços de morango fresco.',
      preco: 9.00,
      destaque: false,
    }
  ],
  crepes: [
    {
      id: 1,
      nome: 'Crepe de Frango com Catupiry',
      descricao: 'Delicioso crepe recheado com frango desfiado e catupiry cremoso.',
      preco: 22.00,
      destaque: false,
    },
    {
      id: 2,
      nome: 'Crepe de Chocolate com Morango',
      descricao: 'Irresistível crepe doce com chocolate derretido e morangos frescos.',
      preco: 20.00,
      destaque: false,
    },
    {
      id: 3,
      nome: 'Crepe de Queijo com Presunto',
      descricao: 'Clássico crepe salgado com queijo derretido e presunto de qualidade.',
      preco: 19.50,
      destaque: false,
    }
  ],
  batatas: [
    {
      id: 1,
      nome: 'Batata Frita Simples (Porção)',
      descricao: 'Porção generosa de batatas fritas crocantes e sequinhas.',
      preco: 15.00,
      destaque: true,
    },
    {
      id: 2,
      nome: 'Batata Frita com Cheddar e Bacon (Porção)',
      descricao: 'Batatas fritas cobertas com cheddar cremoso e bacon crocante em cubos.',
      preco: 25.00,
      destaque: false,
    },
    {
      id: 3,
      nome: 'Batata Rústica com Alecrim (Porção)',
      descricao: 'Deliciosas batatas rústicas temperadas com alecrim e azeite.',
      preco: 18.00,
      destaque: false,
    }
  ],
  bebidas: [
    {
      id: 1,
      nome: 'Suco Natural de Laranja',
      descricao: 'Suco feito com laranjas frescas espremidas na hora (400ml).',
      preco: 9.50,
      destaque: false,
    },
    {
      id: 2,
      nome: 'Refrigerante Lata',
      descricao: 'Coca-Cola, Guaraná Antarctica, Fanta Laranja (350ml).',
      preco: 6.00,
      destaque: true,
    },
    {
      id: 3,
      nome: 'Água Mineral com Gás',
      descricao: 'Garrafa de água mineral gaseificada (500ml).',
      preco: 4.50,
      destaque: false,
    },
    {
      id: 4,
      nome: 'Pepsi lata',
      descricao: 'latinha de pespi 350ml',
      preco: 7.50,
      destaque: true,
    },
  ]
};

// Exportando os dados para uso em outros arquivos
export { cardapio, categorias };