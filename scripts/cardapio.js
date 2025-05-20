// scripts/cardapio.js

// Configuração das categorias e seus nomes de exibição
const categorias = [
  { 
    id: 'destaques', nome: 'Destaques', 
    icon: 'assets/icons/hamburgueres-icon.png' }, // Nova categoria no topo e com ícone específico
  { 
    id: 'combos', nome: 'Combos', 
    icon: 'assets/icons/hamburgueres-icon.png' },
  { 
    id: 'hamburgueres', nome: 'Hambúrgueres', 
    icon: 'assets/icons/hamburgueres-icon.png' },
  { 
    id: 'pizzas', nome: 'Pizzas', 
    icon: 'assets/icons/hamburgueres-icon.png' },
  { 
    id: 'esfirras', nome: 'Esfirras', 
    icon: 'assets/icons/hamburgueres-icon.png' },
  { 
    id: 'pasteis', nome: 'Pastéis', 
    icon: 'assets/icons/hamburgueres-icon.png' },
  { 
    id: 'bebidas', nome: 'Bebidas', 
    icon: 'assets/icons/hamburgueres-icon.png' } 
];

// Dados do cardápio
const cardapio = {
  hamburgueres: [
    {
      id: 1, // Para identificação única dentro da categoria hamburgueres
      nome: 'X-Burger',
      descricao: 'Pão, hambúrguer, queijo, alface, tomate e maionese',
      preco: 'R$ 18,90',
      destaque: true,
      imagem: 'assets/sections/hamburgueres/x-burger.png' // Exemplo de caminho de imagem
    },
    {
      id: 2,
      nome: 'X-Salada',
      descricao: 'Pão, hambúrguer, queijo, alface, tomate, cebola e maionese',
      preco: 'R$ 20,90',
      destaque: false,
      imagem: 'assets/sections/hamburgueres/x-salada.png'
    },
    {
      id: 3,
      nome: 'X-Bacon',
      descricao: 'Pão, hambúrguer, queijo, bacon, alface, tomate e maionese',
      preco: 'R$ 22,90',
      destaque: true,
      imagem: 'assets/sections/hamburgueres/x-bacon.png'
    },
    // ... outros hambúrgueres
  ],
  pizzas: [
    {
      id: 1, // Para identificação única dentro da categoria pizzas
      nome: 'Margherita',
      descricao: 'Molho de tomate, mussarela, tomate e manjericão',
      preco: 'R$ 39,90',
      destaque: true,
      imagem: 'assets/sections/pizzas/margherita.png'
    },
    // ... outras pizzas
  ],
  esfirras: [
    {
      id: 1,
      nome: 'Esfirra de Carne',
      descricao: 'Massa fina recheada com carne bovina temperada à moda árabe',
      preco: 'R$ 8,50',
      destaque: false, // Exemplo: não está em destaque
      imagem: 'assets/sections/esfirras/carne.png'
    },
    // ... outras esfirras
  ],
  pasteis: [
    // ... seus pasteis
  ],
  bebidas: [
    {
      id: 1,
      nome: 'Suco de Abacaxi',
      descricao: 'Laranja, Limão, Abacaxi, Maracujá (400ml)',
      preco: 'R$ 8,90',
      destaque: false,
      imagem: 'assets/sections/bebidas/suco-laranja.png'
    },
    {
      id: 2,
      nome: 'Suco Natural',
      descricao: 'Laranja, Limão, Abacaxi, Maracujá (400ml)',
      preco: 'R$ 8,90',
      destaque: true,
      imagem: 'assets/sections/bebidas/suco-laranja.png'
    },
    // ... outras bebidas
  ],
  combos: [
    {
      id: 1,
      nome: 'Combo Especial',
      descricao: 'Hambúrguer artesanal com batata frita e refrigerante de sua escolha',
      preco: 'R$ 29,90',
      destaque: true,
      imagem: 'assets/sections/combos/combo-especial.png'
    },
    // ... outros combos
  ]
  // Adicione mais categorias e itens conforme necessário
};


// Exportando os dados para uso em outros arquivos
export { cardapio, categorias };