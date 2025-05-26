// scripts/cardapio.js

// Configuração das categorias e seus nomes de exibição
const categorias = [
  {
    id: 'destaques', nome: 'Destaques',
    icon: 'assets/icons/destaques.png',
    imagemFundo: null // Destaques podem não ter um fundo específico, ou ter um genérico
  },
  {
    id: 'combos', nome: 'Combos',
    icon: 'assets/icons/combos.png',
    imagemFundo: 'assets/category-backgrounds/combos-bg.jpg' // Exemplo de caminho
  },
  {
    id: 'pizzas', nome: 'Pizzas',
    icon: 'assets/icons/pizzas.png',
    imagemFundo: 'assets/category-backgrounds/pizzas-bg.jpg' // Exemplo de caminho
  },
  {
    id: 'lanches', nome: 'Lanches',
    icon: 'assets/icons/lanches.png',
    imagemFundo: 'assets/category-backgrounds/lanches-bg.jpg' // Exemplo de caminho
  },
  {
    id: 'pasteis', nome: 'Pastéis',
    icon: 'assets/icons/pasteis.png',
    imagemFundo: 'assets/category-backgrounds/pasteis-bg.jpg' // Exemplo de caminho
  },
  {
    id: 'esfihas', nome: 'Esfihas',
    icon: 'assets/icons/esfihas.png',
    imagemFundo: 'assets/category-backgrounds/esfihas-bg.jpg' // Exemplo de caminho
  },
  {
    id: 'crepes', nome: 'Crepes',
    icon: 'assets/icons/crepes.png',
    imagemFundo: 'assets/category-backgrounds/crepes-bg.jpg' // Exemplo de caminho
  },
  {
    id: 'batatas', nome: 'Batatas',
    icon: 'assets/icons/batatas.png',
    imagemFundo: 'assets/category-backgrounds/batatas-bg.jpg' // Exemplo de caminho
  },
  {
    id: 'bebidas', nome: 'Bebidas',
    icon: 'assets/icons/bebidas.png',
    imagemFundo: 'assets/category-backgrounds/bebidas-bg.jpg' // Exemplo de caminho
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
    },
    {
      id: 5,
      nome: 'Pizza Quatro Queijos Suprema',
      descricao: 'Molho de tomate, mussarela, provolone, parmesão e gorgonzola selecionados.',
      preco: 52.00,
      destaque: true,
    },
    {
      id: 6,
      nome: 'Pizza Pepperoni Picante',
      descricao: 'Molho de tomate, mussarela, fatias generosas de pepperoni e um toque de pimenta calabresa.',
      preco: 49.90,
      destaque: false,
    },
    {
      id: 7,
      nome: 'Pizza Vegetariana Completa',
      descricao: 'Molho de tomate, mussarela, brócolis, champignon, pimentão, cebola, azeitonas e milho verde.',
      preco: 46.50,
      destaque: false,
    },
    {
      id: 8,
      nome: 'Pizza Lombinho com Abacaxi',
      descricao: 'Molho de tomate, mussarela, lombinho canadense defumado e fatias de abacaxi caramelizado.',
      preco: 51.00,
      destaque: false,
    },
    {
      id: 9,
      nome: 'Pizza Atum com Cebola Roxa',
      descricao: 'Molho de tomate, mussarela, atum sólido, cebola roxa e azeitonas pretas.',
      preco: 48.00,
      destaque: true,
    },
    {
      id: 10,
      nome: 'Pizza Rúcula com Tomate Seco',
      descricao: 'Molho de tomate, mussarela de búfala, rúcula fresca, tomate seco e lascas de parmesão.',
      preco: 53.50,
      destaque: false,
    },
    {
      id: 11,
      nome: 'Pizza Baiana Apimentada',
      descricao: 'Molho de tomate, mussarela, calabresa moída, pimenta vermelha, ovo e coentro.',
      preco: 49.00,
      destaque: false,
    },
    {
      id: 12,
      nome: 'Pizza Palmito Cremoso',
      descricao: 'Molho de tomate, mussarela, palmito pupunha em rodelas e um toque de catupiry.',
      preco: 47.00,
      destaque: false,
    },
    {
      id: 13,
      nome: 'Pizza Bacon Crocante',
      descricao: 'Molho de tomate, mussarela, fatias crocantes de bacon e milho verde.',
      preco: 50.50,
      destaque: true,
    },
    {
      id: 14,
      nome: 'Pizza Siciliana',
      descricao: 'Molho de tomate, mussarela, bacon, champignon, azeitonas verdes e um toque de aliche.',
      preco: 52.80,
      destaque: false,
    },
    {
      id: 15,
      nome: 'Pizza Strogonoff de Frango',
      descricao: 'Molho de tomate, mussarela, strogonoff de frango cremoso e batata palha.',
      preco: 54.00,
      destaque: false,
    },
    {
      id: 16,
      nome: 'Pizza Corn & Bacon',
      descricao: 'Molho de tomate, mussarela, milho verde e bacon em cubos generosos.',
      preco: 48.50,
      destaque: false,
    },
    {
      id: 17,
      nome: 'Pizza Carbonara',
      descricao: 'Molho branco especial, mussarela, bacon, ovos, queijo parmesão e pimenta do reino.',
      preco: 55.00,
      destaque: true,
    },
    {
      id: 18,
      nome: 'Pizza Dois Amores (Doce)',
      descricao: 'Metade chocolate ao leite, metade chocolate branco com morangos frescos.',
      preco: 50.00,
      destaque: false,
    },
    {
      id: 19,
      nome: 'Pizza Banana com Canela (Doce)',
      descricao: 'Mussarela, banana fatiada, açúcar, canela em pó e leite condensado.',
      preco: 46.00,
      destaque: false,
    },
    {
      id: 20,
      nome: 'Pizza Romeu e Julieta (Doce)',
      descricao: 'Mussarela, goiabada cremosa e queijo minas frescal.',
      preco: 47.50,
      destaque: true,
    },
    {
      id: 21,
      nome: 'Pizza Toscana',
      descricao: 'Molho de tomate, mussarela, calabresa moída, cebola e um toque de azeite.',
      preco: 49.50,
      destaque: false,
    },
    {
      id: 22,
      nome: 'Pizza da Casa 3D MIX',
      descricao: 'Ingredientes secretos do chef, uma explosão de sabores surpreendente e deliciosa.',
      preco: 58.00,
      destaque: true,
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
      nome: 'Esfiha Aberta de Carne',
      descricao: 'Massa fina e crocante, recheada com carne moída temperada com especiarias árabes e limão.',
      preco: 7.50,
      destaque: false,
    },
    {
      id: 2,
      nome: 'Esfiha Fechada de Queijo Branco',
      descricao: 'Massa macia, recheada com queijo branco fresco temperado e um toque de hortelã.',
      preco: 8.00,
      destaque: false,
    },
    {
      id: 3,
      nome: 'Esfiha Folhada de Calabresa',
      descricao: 'Massa folhada crocante, recheada com calabresa moída, cebola e um toque de pimenta.',
      preco: 8.50,
      destaque: true,
    },
    {
      id: 4,
      nome: 'Esfiha Doce de Chocolate com Morango',
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