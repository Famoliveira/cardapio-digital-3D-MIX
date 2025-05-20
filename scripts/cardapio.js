// scripts/cardapio.js

// Configuração das categorias e seus nomes de exibição
const categorias = [
  {
    id: 'destaques', nome: 'Destaques',
    icon: 'assets/icons/hamburgueres-icon.png'
  },
  {
    id: 'combos', nome: 'Combos',
    icon: 'assets/icons/hamburgueres-icon.png'
  },
  {
    id: 'hamburgueres', nome: 'Hambúrgueres',
    icon: 'assets/icons/hamburgueres-icon.png'
  },
  {
    id: 'pizzas', nome: 'Pizzas',
    icon: 'assets/icons/hamburgueres-icon.png'
  },
  {
    id: 'esfirras', nome: 'Esfirras',
    icon: 'assets/icons/hamburgueres-icon.png'
  },
  {
    id: 'pasteis', nome: 'Pastéis',
    icon: 'assets/icons/hamburgueres-icon.png'
  },
  {
    id: 'bebidas', nome: 'Bebidas',
    icon: 'assets/icons/hamburgueres-icon.png'
  }
];

// Dados do cardápio
const cardapio = {
  hamburgueres: [
    {
      id: 1,
      nome: 'X-Burger Clássico',
      descricao: 'Pão, hambúrguer 150g, queijo cheddar, alface, tomate e molho especial.',
      preco: 'R$ 23,50',
      destaque: true,
      imagem: 'assets/sections/hamburgueres/hamburguer-1.jpg'
    },
    {
      id: 2,
      nome: 'X-Salada Completo',
      descricao: 'Pão, hambúrguer 150g, queijo prato, ovo, presunto, alface, tomate, milho, ervilha e maionese caseira.',
      preco: 'R$ 27,00',
      destaque: false,
      imagem: 'assets/sections/hamburgueres/hamburguer-2.jpg'
    },
    {
      id: 3,
      nome: 'X-Bacon Artesanal',
      descricao: 'Pão brioche, hambúrguer de costela 180g, queijo mussarela, fatias crocantes de bacon, cebola caramelizada e barbecue.',
      preco: 'R$ 29,90',
      destaque: true,
      imagem: 'assets/sections/hamburgueres/hamburguer-3.jpg'
    },
    {
      id: 4,
      nome: 'Duplo Burger Cheddar',
      descricao: 'Pão australiano, dois hambúrgueres 100g, dobro de queijo cheddar, bacon em cubos e molho cheddar cremoso.',
      preco: 'R$ 32,50',
      destaque: false,
      imagem: 'assets/sections/hamburgueres/hamburguer-4.jpg'
    }
  ],
  pizzas: [
    {
      id: 1,
      nome: 'Pizza Margherita Especial',
      descricao: 'Molho de tomate italiano, mussarela de búfala, rodelas de tomate fresco, manjericão e um fio de azeite extra virgem.',
      preco: 'R$ 45,00',
      destaque: true,
      imagem: 'assets/sections/pizzas/pizza-1.jpg'
    },
    {
      id: 2,
      nome: 'Pizza Calabresa Acebolada',
      descricao: 'Molho de tomate, mussarela, calabresa fatiada, cebola roxa e azeitonas pretas.',
      preco: 'R$ 42,00',
      destaque: false,
      imagem: 'assets/sections/pizzas/pizza-2.jpg'
    },
    {
      id: 3,
      nome: 'Pizza Portuguesa Completa',
      descricao: 'Molho de tomate, mussarela, presunto, ovo cozido, cebola, pimentão, ervilha e azeitonas verdes.',
      preco: 'R$ 48,90',
      destaque: true,
      imagem: 'assets/sections/pizzas/pizza-3.jpg'
    },
    {
      id: 4,
      nome: 'Pizza Frango com Catupiry Original',
      descricao: 'Molho de tomate, mussarela, frango desfiado temperado e catupiry original gratinado.',
      preco: 'R$ 47,50',
      destaque: false,
      imagem: 'assets/sections/pizzas/pizza-4.jpg'
    }
  ],
  esfirras: [
    {
      id: 1,
      nome: 'Esfirra Aberta de Carne',
      descricao: 'Massa fina e crocante, recheada com carne moída temperada com especiarias árabes e limão.',
      preco: 'R$ 7,50',
      destaque: true,
      imagem: 'assets/sections/esfirras/esfirra-1.jpg'
    },
    {
      id: 2,
      nome: 'Esfirra Fechada de Queijo Branco',
      descricao: 'Massa macia, recheada com queijo branco fresco temperado e um toque de hortelã.',
      preco: 'R$ 8,00',
      destaque: false,
      imagem: 'assets/sections/esfirras/esfirra-2.jpg'
    },
    {
      id: 3,
      nome: 'Esfirra Folhada de Calabresa',
      descricao: 'Massa folhada crocante, recheada com calabresa moída, cebola e um toque de pimenta.',
      preco: 'R$ 8,50',
      destaque: true,
      imagem: 'assets/sections/esfirras/esfirra-3.jpg'
    },
    {
      id: 4,
      nome: 'Esfirra Doce de Chocolate com Morango',
      descricao: 'Massa doce, recheada com chocolate ao leite derretido e pedaços de morango fresco.',
      preco: 'R$ 9,00',
      destaque: false,
      imagem: 'assets/sections/esfirras/esfirra-4.jpg'
    }
  ],
  pasteis: [
    {
      id: 1,
      nome: 'Pastel de Camarão com Catupiry',
      descricao: 'Massa crocante recheada com camarões frescos salteados e catupiry cremoso.',
      preco: 'R$ 12,90',
      destaque: true,
      imagem: 'assets/sections/pasteis/pastel-1.jpg'
    },
    {
      id: 2,
      nome: 'Pastel de Carne Seca com Abóbora',
      descricao: 'Combinação perfeita de carne seca desfiada com purê de abóbora e queijo coalho.',
      preco: 'R$ 11,50',
      destaque: false,
      imagem: 'assets/sections/pasteis/pastel-2.jpg'
    },
    {
      id: 3,
      nome: 'Pastel de Queijo Padrão',
      descricao: 'O clássico pastel de feira, recheado com queijo mussarela derretido.',
      preco: 'R$ 9,00',
      destaque: true,
      imagem: 'assets/sections/pasteis/pastel-3.jpg'
    },
    {
      id: 4,
      nome: 'Pastel Romeu e Julieta',
      descricao: 'Deliciosa combinação de queijo minas com goiabada cremosa.',
      preco: 'R$ 10,00',
      destaque: false,
      imagem: 'assets/sections/pasteis/pastel-4.jpg'
    }
  ],
  bebidas: [
    {
      id: 1,
      nome: 'Suco Natural de Laranja',
      descricao: 'Suco feito com laranjas frescas espremidas na hora (400ml).',
      preco: 'R$ 9,50',
      destaque: true,
      imagem: 'assets/sections/bebidas/bebida-1.jpg'
    },
    {
      id: 2,
      nome: 'Refrigerante Lata',
      descricao: 'Coca-Cola, Guaraná Antarctica, Fanta Laranja (350ml).',
      preco: 'R$ 6,00',
      destaque: false,
      imagem: 'assets/sections/bebidas/bebida-2.jpg'
    },
    {
      id: 3,
      nome: 'Água Mineral com Gás',
      descricao: 'Garrafa de água mineral gaseificada (500ml).',
      preco: 'R$ 4,50',
      destaque: false,
      imagem: 'assets/sections/bebidas/bebida-3.jpg'
    },
    {
      id: 4,
      nome: 'Cerveja Long Neck',
      descricao: 'Heineken, Budweiser, Stella Artois (330ml).',
      preco: 'R$ 10,00',
      destaque: true,
      imagem: 'assets/sections/bebidas/bebida-4.jpg'
    }
  ],
  combos: [
    {
      id: 1,
      nome: 'Combo Clássico Individual',
      descricao: 'X-Burger Clássico + Batata Frita Média + Refrigerante Lata.',
      preco: 'R$ 35,90',
      destaque: true,
      imagem: 'assets/sections/combos/combo-1.jpg'
    },
    {
      id: 2,
      nome: 'Combo Casal Perfeito',
      descricao: '2 X-Salada Completo + Porção Grande de Batata com Cheddar e Bacon + 2 Refrigerantes Lata.',
      preco: 'R$ 69,90',
      destaque: true,
      imagem: 'assets/sections/combos/combo-2.jpg'
    },
    {
      id: 3,
      nome: 'Combo Família Feliz',
      descricao: '1 Pizza Grande (qualquer sabor) + 1 Refrigerante 2 Litros + 4 Esfirras Doces.',
      preco: 'R$ 89,90',
      destaque: false,
      imagem: 'assets/sections/combos/combo-3.jpg'
    }
  ]
};

// Exportando os dados para uso em outros arquivos
export { cardapio, categorias };