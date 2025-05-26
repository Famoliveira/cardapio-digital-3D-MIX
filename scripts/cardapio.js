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
  combos: [
    { id: 1, nome: 'Combo X-Burger Individual', descricao: 'X-Burger + Fritas Pequena + Refri Lata.', preco: 35.90, destaque: true },
    { id: 2, nome: 'Combo X-Salada Duplo', descricao: '2 X-Salada + Fritas Grande + 2 Refri Lata.', preco: 68.50, destaque: false },
    { id: 3, nome: 'Combo Mega Lanche Família', descricao: '4 Lanches Variados + Porção de Batata com Cheddar e Bacon + Refri 2L.', preco: 120.00, destaque: false },
    { id: 4, nome: 'Combo Pizza & Refri', descricao: '1 Pizza Grande (qualquer sabor) + Refri 2L.', preco: 75.00, destaque: false },
    { id: 5, nome: 'Combo Pastelaria Feliz', descricao: '4 Pastéis Salgados + 2 Pastéis Doces + Caldo de Cana 1L.', preco: 55.90, destaque: false },
    { id: 6, nome: 'Combo Esfiha Mania', descricao: '10 Esfihas Salgadas Variadas + 5 Esfihas Doces + Refri 1L.', preco: 65.00, destaque: false },
    { id: 7, nome: 'Combo Crepe Leve', descricao: '1 Crepe Salgado + 1 Suco Natural 400ml.', preco: 32.00, destaque: false },
    { id: 8, nome: 'Combo Batatão Supremo', descricao: 'Porção Gigante de Batata com Cheddar, Bacon e Calabresa + 2 Molhos Especiais.', preco: 45.00, destaque: false },
    { id: 9, nome: 'Combo Almoço Executivo', descricao: 'Prato Feito + Suco de Laranja + Sobremesa do Dia.', preco: 39.90, destaque: false },
    { id: 10, nome: 'Combo Lanche da Tarde', descricao: '1 Salgado Assado + 1 Suco Natural + 1 Fatia de Bolo.', preco: 25.00, destaque: false },
    { id: 11, nome: 'Combo Kids Burger', descricao: 'Mini Burger + Mini Fritas + Mini Refri + Surpresa.', preco: 29.90, destaque: false },
    { id: 12, nome: 'Combo Pizza Casal', descricao: '1 Pizza Média (2 sabores) + 2 Refri Lata.', preco: 59.90, destaque: false },
    { id: 13, nome: 'Combo Vegetariano Especial', descricao: 'Lanche Vegetariano + Suco Detox + Salada de Frutas.', preco: 42.50, destaque: false },
    { id: 14, nome: 'Combo Happy Hour Amigos', descricao: 'Porção de Frios + Porção de Pastéis (10 un) + 4 Cervejas Long Neck.', preco: 99.00, destaque: false },
    { id: 15, nome: 'Combo Noite de Cinema', descricao: '1 Pizza Doce Grande + Pipoca Grande + Refri 2L.', preco: 60.00, destaque: false }
  ],
  pizzas: [
    // Sabores Tradicionais
    { id: 1, nome: 'Pizza Mussarela', descricao: 'Molho de tomate fresco e cobertura generosa de mussarela.', preco: 40.00, destaque: true },
    { id: 2, nome: 'Pizza Calabresa', descricao: 'Molho de tomate, mussarela e fatias de calabresa selecionada.', preco: 42.00, destaque: true },
    { id: 3, nome: 'Pizza Margherita', descricao: 'Molho de tomate, mussarela, rodelas de tomate fresco e manjericão.', preco: 44.00, destaque: true },
    { id: 4, nome: 'Pizza Presunto', descricao: 'Molho de tomate, mussarela e presunto de alta qualidade.', preco: 41.00, destaque: false },
    { id: 5, nome: 'Pizza Frango com Catupiry', descricao: 'Molho de tomate, mussarela, frango desfiado e catupiry original.', preco: 48.00, destaque: true },
    { id: 6, nome: 'Pizza Portuguesa', descricao: 'Molho de tomate, mussarela, presunto, ovo, cebola, pimentão e azeitonas.', preco: 49.00, destaque: false },
    { id: 7, nome: 'Pizza Quatro Queijos', descricao: 'Molho de tomate e uma combinação de mussarela, provolone, parmesão e catupiry.', preco: 52.00, destaque: false },
    { id: 8, nome: 'Pizza Milho com Bacon', descricao: 'Molho de tomate, mussarela, milho verde e bacon crocante.', preco: 47.00, destaque: false },
    { id: 9, nome: 'Pizza Atum', descricao: 'Molho de tomate, mussarela, atum sólido e cebola.', preco: 48.50, destaque: false },
    { id: 10, nome: 'Pizza Napolitana', descricao: 'Molho de tomate, mussarela, rodelas de tomate e parmesão ralado.', preco: 45.00, destaque: false },
    // Sabores Especiais
    { id: 11, nome: 'Pizza Pepperoni', descricao: 'Molho de tomate, mussarela e fatias picantes de pepperoni.', preco: 50.00, destaque: false },
    { id: 12, nome: 'Pizza Rúcula com Tomate Seco', descricao: 'Molho de tomate, mussarela de búfala, rúcula fresca e tomate seco.', preco: 53.00, destaque: false },
    { id: 13, nome: 'Pizza Lombinho Canadense', descricao: 'Molho de tomate, mussarela, lombinho canadense e catupiry.', preco: 51.00, destaque: false },
    { id: 14, nome: 'Pizza Vegetariana Especial', descricao: 'Molho de tomate, mussarela, abobrinha, berinjela, pimentões coloridos e champignon.', preco: 49.50, destaque: false },
    { id: 15, nome: 'Pizza Camarão com Catupiry', descricao: 'Molho de tomate, mussarela, camarões salteados e catupiry cremoso.', preco: 65.00, destaque: true },
    { id: 16, nome: 'Pizza Calabresa Acebolada Especial', descricao: 'Molho de tomate, mussarela, calabresa artesanal, cebola roxa e orégano fresco.', preco: 46.00, destaque: false },
    { id: 17, nome: 'Pizza Palmito Nobre', descricao: 'Molho de tomate, mussarela e generosas fatias de palmito pupunha.', preco: 49.00, destaque: false },
    { id: 18, nome: 'Pizza Brócolis com Alho Crocante', descricao: 'Molho de tomate, mussarela, brócolis ninja e alho frito crocante.', preco: 47.50, destaque: false },
    { id: 19, nome: 'Pizza Cinco Queijos', descricao: 'Mussarela, provolone, parmesão, gorgonzola e catupiry.', preco: 54.00, destaque: false },
    { id: 20, nome: 'Pizza da Casa 3D MIX', descricao: 'Ingredientes selecionados pelo chef, uma surpresa de sabores.', preco: 59.00, destaque: true },
    { id: 21, nome: 'Pizza Toscana', descricao: 'Molho de tomate, mussarela, calabresa moída e parmesão.', preco: 48.00, destaque: false },
    { id: 22, nome: 'Pizza Siciliana', descricao: 'Molho de tomate, mussarela, bacon, champignon e azeitonas verdes.', preco: 51.50, destaque: false },
    { id: 23, nome: 'Pizza Aliche', descricao: 'Molho de tomate, filés de aliche importado, rodelas de tomate e parmesão.', preco: 55.00, destaque: false },
    { id: 24, nome: 'Pizza Strogonoff de Carne', descricao: 'Molho de tomate, mussarela, strogonoff de carne e batata palha.', preco: 56.00, destaque: false },
    { id: 25, nome: 'Pizza Strogonoff de Frango', descricao: 'Molho de tomate, mussarela, strogonoff de frango e batata palha.', preco: 54.00, destaque: false },
    // Pizzas Doces
    { id: 26, nome: 'Pizza Chocolate com Morango', descricao: 'Massa com cobertura de chocolate ao leite e morangos frescos fatiados.', preco: 45.00, destaque: false },
    { id: 27, nome: 'Pizza Banana com Canela', descricao: 'Mussarela, banana fatiada, açúcar, canela e leite condensado.', preco: 42.00, destaque: false },
    { id: 28, nome: 'Pizza Romeu e Julieta', descricao: 'Mussarela, goiabada cremosa e queijo minas frescal.', preco: 43.00, destaque: false },
    { id: 29, nome: 'Pizza Prestígio', descricao: 'Chocolate ao leite, coco ralado e leite condensado.', preco: 46.00, destaque: false },
    { id: 30, nome: 'Pizza Chocolate Branco com Nozes', descricao: 'Chocolate branco nobre com pedaços de nozes.', preco: 48.00, destaque: false }
  ],
  lanches: [
    // Clássicos
    { id: 1, nome: 'X-Burger', descricao: 'Pão, hambúrguer artesanal 150g, queijo mussarela e maionese da casa.', preco: 22.00, destaque: false },
    { id: 2, nome: 'X-Salada', descricao: 'Pão, hambúrguer 150g, queijo, alface, tomate, milho, ervilha e maionese.', preco: 25.00, destaque: false },
    { id: 3, nome: 'X-Bacon', descricao: 'Pão, hambúrguer 150g, queijo, fatias crocantes de bacon e maionese.', preco: 27.00, destaque: false },
    { id: 4, nome: 'X-Egg', descricao: 'Pão, hambúrguer 150g, queijo, ovo frito e maionese.', preco: 24.00, destaque: false },
    { id: 5, nome: 'X-Tudo', descricao: 'Pão, hambúrguer 150g, queijo, bacon, ovo, presunto, alface, tomate, milho, ervilha e maionese.', preco: 32.00, destaque: true },
    { id: 6, nome: 'Misto Quente', descricao: 'Pão de forma, presunto e queijo derretido na chapa.', preco: 12.00, destaque: false },
    { id: 7, nome: 'Americano', descricao: 'Pão de forma, presunto, queijo, ovo, alface e tomate.', preco: 18.00, destaque: false },
    { id: 8, nome: 'Bauru Simples', descricao: 'Pão francês, presunto, queijo mussarela e tomate.', preco: 15.00, destaque: false },
    // Especiais
    { id: 9, nome: 'Burger Artesanal Picanha', descricao: 'Pão brioche, hambúrguer de picanha 200g, queijo cheddar, cebola caramelizada e molho barbecue.', preco: 35.00, destaque: false },
    { id: 10, nome: 'Burger Duplo Cheddar Bacon', descricao: 'Pão australiano, 2 hambúrgueres 100g, dobro de cheddar, bacon em cubos e molho especial.', preco: 33.00, destaque: false },
    { id: 11, nome: 'Burger Vegetariano Gourmet', descricao: 'Pão integral, hambúrguer de grão de bico, queijo coalho, rúcula, tomate seco e maionese de ervas.', preco: 29.00, destaque: false },
    { id: 12, nome: 'Sanduíche de Frango Grelhado', descricao: 'Pão ciabatta, filé de frango grelhado, queijo prato, alface americana e molho tártaro.', preco: 26.00, destaque: false },
    { id: 13, nome: 'Sanduíche Natural de Atum', descricao: 'Pão integral, pasta de atum com maionese light, cenoura ralada e alface.', preco: 20.00, destaque: false },
    { id: 14, nome: 'Burger Crispy Chicken', descricao: 'Pão com gergelim, filé de frango empanado super crocante, queijo, alface e maionese picante.', preco: 28.00, destaque: false },
    { id: 15, nome: 'X-Calabresa Acebolada', descricao: 'Pão, hambúrguer 150g, queijo, calabresa fatiada e acebolada.', preco: 26.50, destaque: false },
    { id: 16, nome: 'Burger Costela Desfiada', descricao: 'Pão de cerveja, costela bovina desfiada lentamente, queijo provolone e vinagrete.', preco: 34.00, destaque: false },
    { id: 17, nome: 'X-Picanha Salada', descricao: 'Pão, hambúrguer de picanha 180g, queijo, alface, tomate e molho especial.', preco: 36.00, destaque: false },
    { id: 18, nome: 'Hot Dog Tradicional', descricao: 'Pão de hot dog, salsicha, purê de batata, milho, ervilha, batata palha e queijo ralado.', preco: 15.00, destaque: false },
    { id: 19, nome: 'Hot Dog Duplo Especial', descricao: 'Pão de hot dog, 2 salsichas, bacon, cheddar cremoso, cebola crispy e molho barbecue.', preco: 22.00, destaque: false },
    { id: 20, nome: 'Burger Onion Rings', descricao: 'Pão, hambúrguer 180g, queijo cheddar, bacon, anéis de cebola empanados e molho ranch.', preco: 31.00, destaque: false },
    { id: 21, nome: 'X-Frango Catupiry', descricao: 'Pão, filé de frango desfiado, catupiry original, milho e batata palha.', preco: 27.50, destaque: false },
    { id: 22, nome: 'Sanduíche de Pernil', descricao: 'Pão francês, pernil assado e fatiado, vinagrete especial da casa.', preco: 25.00, destaque: false },
    { id: 23, nome: 'Burger Vegano', descricao: 'Pão vegano, hambúrguer à base de plantas, queijo vegano, alface, tomate e maionese vegana.', preco: 30.00, destaque: false },
    { id: 24, nome: 'X-Coração', descricao: 'Pão, hambúrguer 150g, queijo, coração de galinha na chapa e maionese.', preco: 28.50, destaque: false },
    { id: 25, nome: 'Sanduíche de Metro (Frango)', descricao: 'Baguete de metro recheada com frango desfiado, salada e maionese (serve 4 pessoas).', preco: 70.00, destaque: false },
    { id: 26, nome: 'Sanduíche de Metro (Misto)', descricao: 'Baguete de metro recheada com presunto, queijo, salada e maionese (serve 4 pessoas).', preco: 65.00, destaque: false },
    { id: 27, nome: 'Mini X-Burger Kids', descricao: 'Pão pequeno, hambúrguer 90g e queijo.', preco: 18.00, destaque: false },
    { id: 28, nome: 'X-Burger Duplo', descricao: 'Pão, 2 hambúrgueres 150g, dobro de queijo e maionese.', preco: 30.00, destaque: false },
    { id: 29, nome: 'Burger Gorgonzola', descricao: 'Pão artesanal, hambúrguer 180g, queijo gorgonzola, rúcula e geleia de pimenta.', preco: 33.50, destaque: false },
    { id: 30, nome: 'O Incrível Smash Burger', descricao: 'Pão brioche selado na manteiga, 2 carnes smash 100g, cheddar cremoso e picles.', preco: 29.50, destaque: false }
  ],
  pasteis: [
    // Salgados Tradicionais
    { id: 1, nome: 'Pastel de Carne', descricao: 'Recheio clássico de carne moída bem temperada.', preco: 9.00, destaque: false },
    { id: 2, nome: 'Pastel de Queijo', descricao: 'Mussarela derretida e cremosa.', preco: 8.50, destaque: false },
    { id: 3, nome: 'Pastel de Frango', descricao: 'Frango desfiado e temperado com carinho.', preco: 9.50, destaque: false },
    { id: 4, nome: 'Pastel de Palmito', descricao: 'Palmito macio e saboroso.', preco: 10.00, destaque: false },
    { id: 5, nome: 'Pastel de Pizza', descricao: 'Mussarela, presunto, tomate e orégano.', preco: 10.50, destaque: false },
    // Salgados com Adicionais
    { id: 6, nome: 'Pastel de Carne com Queijo', descricao: 'Carne moída com queijo mussarela derretido.', preco: 11.00, destaque: false },
    { id: 7, nome: 'Pastel de Frango com Catupiry', descricao: 'Frango desfiado com o autêntico Catupiry.', preco: 12.00, destaque: true },
    { id: 8, nome: 'Pastel de Calabresa com Queijo', descricao: 'Calabresa fatiada com queijo mussarela.', preco: 11.50, destaque: false },
    { id: 9, nome: 'Pastel de Palmito com Catupiry', descricao: 'Palmito cremoso com Catupiry.', preco: 12.50, destaque: false },
    { id: 10, nome: 'Pastel Quatro Queijos', descricao: 'Mussarela, provolone, parmesão e catupiry.', preco: 13.00, destaque: false },
    // Especiais Salgados
    { id: 11, nome: 'Pastel de Camarão', descricao: 'Camarões frescos e temperados.', preco: 15.00, destaque: false },
    { id: 12, nome: 'Pastel de Camarão com Catupiry', descricao: 'Deliciosos camarões com Catupiry cremoso.', preco: 17.00, destaque: false },
    { id: 13, nome: 'Pastel de Carne Seca com Catupiry', descricao: 'Carne seca desfiada com Catupiry e cebola.', preco: 14.00, destaque: false },
    { id: 14, nome: 'Pastel de Bacalhau', descricao: 'Lascas de bacalhau refogado com azeitonas e pimentão.', preco: 16.00, destaque: false },
    { id: 15, nome: 'Pastel Nordestino', descricao: 'Carne de sol desfiada, queijo coalho e coentro.', preco: 13.50, destaque: false },
    { id: 16, nome: 'Pastel Vegetariano Completo', descricao: 'Brócolis, palmito, milho, ervilha e queijo branco.', preco: 12.00, destaque: false },
    { id: 17, nome: 'Pastel de Strogonoff de Frango', descricao: 'Recheio cremoso de strogonoff de frango.', preco: 13.00, destaque: false },
    { id: 18, nome: 'Pastel Marguerita', descricao: 'Mussarela, tomate fresco e manjericão.', preco: 11.00, destaque: false },
    // Doces
    { id: 19, nome: 'Pastel de Chocolate', descricao: 'Chocolate ao leite derretido.', preco: 10.00, destaque: false },
    { id: 20, nome: 'Pastel de Banana com Canela', descricao: 'Banana fatiada com açúcar e canela.', preco: 9.50, destaque: false },
    { id: 21, nome: 'Pastel Romeu e Julieta', descricao: 'Goiabada cremosa com queijo minas.', preco: 10.50, destaque: false },
    { id: 22, nome: 'Pastel de Doce de Leite', descricao: 'Doce de leite caseiro e cremoso.', preco: 9.00, destaque: false },
    { id: 23, nome: 'Pastel de Chocolate com Morango', descricao: 'Chocolate ao leite com pedaços de morango fresco.', preco: 12.00, destaque: false },
    { id: 24, nome: 'Pastel Prestígio', descricao: 'Chocolate com coco ralado.', preco: 11.00, destaque: false },
    { id: 25, nome: 'Pastel de Nutella com Banana', descricao: 'Nutella original com rodelas de banana.', preco: 14.00, destaque: true },
    { id: 26, nome: 'Pastel de Queijo com Leite Condensado', descricao: 'Queijo mussarela com leite condensado por cima.', preco: 10.00, destaque: false },
    { id: 27, nome: 'Pastel Especial da Casa (Doce)', descricao: 'Surpresa doce do chef.', preco: 13.00, destaque: false },
    { id: 28, nome: 'Mini Pastéis (Porção com 12)', descricao: 'Mix de mini pastéis salgados (carne, queijo, frango).', preco: 25.00, destaque: false },
    { id: 29, nome: 'Mini Pastéis Doces (Porção com 10)', descricao: 'Mix de mini pastéis doces (chocolate, banana).', preco: 22.00, destaque: false },
    { id: 30, nome: 'Pastel de Vento', descricao: 'Apenas a massa crocante e sequinha.', preco: 6.00, destaque: false }
  ],
  esfihas: [
    // Salgadas Abertas
    { id: 1, nome: 'Esfiha Aberta de Carne', descricao: 'Carne moída temperada com especiarias árabes.', preco: 6.00, destaque: false },
    { id: 2, nome: 'Esfiha Aberta de Queijo', descricao: 'Queijo mussarela derretido.', preco: 5.50, destaque: false },
    { id: 3, nome: 'Esfiha Aberta de Frango com Catupiry', descricao: 'Frango desfiado com catupiry original.', preco: 7.00, destaque: false },
    { id: 4, nome: 'Esfiha Aberta de Calabresa', descricao: 'Calabresa moída e levemente apimentada.', preco: 6.50, destaque: false },
    // Salgadas Fechadas
    { id: 5, nome: 'Esfiha Fechada de Carne', descricao: 'Recheio tradicional de carne moída.', preco: 6.50, destaque: false },
    { id: 6, nome: 'Esfiha Fechada de Queijo Branco', descricao: 'Queijo branco fresco com hortelã.', preco: 6.00, destaque: false },
    { id: 7, nome: 'Esfiha Fechada de Frango', descricao: 'Frango desfiado e bem temperado.', preco: 7.00, destaque: false },
    { id: 8, nome: 'Esfiha Fechada de Palmito', descricao: 'Palmito cremoso.', preco: 7.50, destaque: false },
    // Especiais
    { id: 9, nome: 'Esfiha Folhada de Camarão', descricao: 'Massa folhada crocante com recheio de camarão.', preco: 9.00, destaque: false },
    { id: 10, nome: 'Esfiha Aberta Quatro Queijos', descricao: 'Mussarela, provolone, parmesão e catupiry.', preco: 8.00, destaque: false },
    { id: 11, nome: 'Esfiha Fechada de Carne Seca com Abóbora', descricao: 'Carne seca desfiada com purê de abóbora.', preco: 8.50, destaque: true },
    // Doces
    { id: 12, nome: 'Esfiha Doce de Chocolate', descricao: 'Chocolate ao leite cremoso.', preco: 7.00, destaque: false },
    { id: 13, nome: 'Esfiha Doce de Banana com Canela', descricao: 'Banana com açúcar e canela.', preco: 6.50, destaque: false },
    { id: 14, nome: 'Esfiha Doce Romeu e Julieta', descricao: 'Goiabada com queijo.', preco: 7.00, destaque: false },
    { id: 15, nome: 'Esfiha Doce de Chocolate Branco', descricao: 'Chocolate branco de alta qualidade.', preco: 7.50, destaque: false },
    { id: 16, nome: 'Esfiha Aberta de Zaatar', descricao: 'Tradicional tempero árabe à base de tomilho, gergelim e sumagre.', preco: 5.00, destaque: false },
    { id: 17, nome: 'Esfiha Fechada de Espinafre com Ricota', descricao: 'Recheio leve de espinafre com ricota temperada.', preco: 7.00, destaque: false },
    { id: 18, nome: 'Esfiha Aberta de Atum', descricao: 'Atum sólido com cebola e azeite.', preco: 7.50, destaque: false },
    { id: 19, nome: 'Esfiha Folhada de Frango', descricao: 'Massa folhada com recheio de frango cremoso.', preco: 8.00, destaque: false },
    { id: 20, nome: 'Esfiha Doce de Nutella', descricao: 'A original Nutella cremosa.', preco: 9.00, destaque: false }
  ],
  crepes: [
    // Salgados
    { id: 1, nome: 'Crepe de Frango com Catupiry', descricao: 'Frango desfiado, catupiry, milho e orégano.', preco: 24.00, destaque: false },
    { id: 2, nome: 'Crepe Quatro Queijos', descricao: 'Mussarela, provolone, parmesão e catupiry.', preco: 25.00, destaque: false },
    { id: 3, nome: 'Crepe de Presunto e Queijo', descricao: 'Presunto de qualidade e mussarela derretida.', preco: 22.00, destaque: false },
    { id: 4, nome: 'Crepe de Calabresa com Cheddar', descricao: 'Calabresa fatiada com cheddar cremoso e cebola.', preco: 23.00, destaque: false },
    { id: 5, nome: 'Crepe de Carne Seca com Cream Cheese', descricao: 'Carne seca desfiada com cream cheese Philadelphia.', preco: 27.00, destaque: true },
    { id: 6, nome: 'Crepe Vegetariano', descricao: 'Palmito, champignon, tomate seco, rúcula e mussarela.', preco: 24.50, destaque: false },
    { id: 7, nome: 'Crepe de Strogonoff de Carne', descricao: 'Strogonoff de carne com champignon e batata palha.', preco: 26.00, destaque: false },
    { id: 8, nome: 'Crepe Camarão ao Molho Branco', descricao: 'Camarões puxados no alho e óleo ao molho branco cremoso.', preco: 30.00, destaque: false },
    // Doces
    { id: 9, nome: 'Crepe de Chocolate com Morango', descricao: 'Chocolate ao leite derretido com morangos frescos.', preco: 22.00, destaque: false },
    { id: 10, nome: 'Crepe de Nutella com Banana', descricao: 'Nutella original com rodelas de banana e castanhas.', preco: 25.00, destaque: false },
    { id: 11, nome: 'Crepe de Doce de Leite com Coco', descricao: 'Doce de leite caseiro com coco ralado fresco.', preco: 21.00, destaque: false },
    { id: 12, nome: 'Crepe Romeu e Julieta', descricao: 'Goiabada cremosa com queijo minas derretido.', preco: 23.00, destaque: false },
    { id: 13, nome: 'Crepe Prestígio', descricao: 'Chocolate ao leite, coco ralado e leite condensado.', preco: 23.50, destaque: false },
    { id: 14, nome: 'Crepe Sensação', descricao: 'Chocolate ao leite, morangos e leite condensado.', preco: 24.00, destaque: false },
    { id: 15, nome: 'Crepe de Chocolate Branco com Amêndoas', descricao: 'Chocolate branco nobre com lascas de amêndoas torradas.', preco: 26.00, destaque: false }
  ],
  batatas: [
    { id: 1, nome: 'Batata Frita Simples (Média)', descricao: 'Porção média de batatas fritas crocantes.', preco: 15.00, destaque: false },
    { id: 2, nome: 'Batata Frita Simples (Grande)', descricao: 'Porção grande de batatas fritas crocantes.', preco: 22.00, destaque: false },
    { id: 3, nome: 'Batata com Cheddar e Bacon (Média)', descricao: 'Batatas fritas cobertas com cheddar cremoso e bacon.', preco: 20.00, destaque: true },
    { id: 4, nome: 'Batata com Cheddar e Bacon (Grande)', descricao: 'Porção generosa de fritas com cheddar e bacon.', preco: 28.00, destaque: false },
    { id: 5, nome: 'Batata Rústica com Alecrim e Páprica', descricao: 'Batatas cortadas em gomos, temperadas com alecrim e páprica defumada.', preco: 18.00, destaque: false },
    { id: 6, nome: 'Batata Canoa com Molho Especial', descricao: 'Batatas em formato canoa, super crocantes, acompanhadas de molho da casa.', preco: 20.00, destaque: false },
    { id: 7, nome: 'Batata Doce Frita', descricao: 'Palitos de batata doce frita, uma opção mais saudável.', preco: 17.00, destaque: false },
    { id: 8, nome: 'Porção de Onion Rings', descricao: 'Anéis de cebola empanados e fritos, acompanha molho barbecue.', preco: 22.00, destaque: false },
    { id: 9, nome: 'Batata Maluca 3D MIX', descricao: 'Fritas grande, cheddar, catupiry, bacon, calabresa e ovo de codorna.', preco: 35.00, destaque: false },
    { id: 10, nome: 'Mini Batatas Recheadas (6 unidades)', descricao: 'Mini batatas cozidas e recheadas com cream cheese e ervas finas.', preco: 24.00, destaque: false }
  ],
  bebidas: [
    { id: 1, nome: 'Refrigerante Lata (350ml)', descricao: 'Coca-Cola, Guaraná Antarctica, Fanta Laranja, Sprite.', preco: 6.00, destaque: false },
    { id: 2, nome: 'Refrigerante 600ml', descricao: 'Coca-Cola, Guaraná Antarctica.', preco: 9.00, destaque: false },
    { id: 3, nome: 'Refrigerante 2 Litros', descricao: 'Coca-Cola, Guaraná Antarctica, Fanta.', preco: 15.00, destaque: false },
    { id: 4, nome: 'Suco Natural de Laranja (400ml)', descricao: 'Laranja espremida na hora.', preco: 8.00, destaque: false },
    { id: 5, nome: 'Suco Natural de Limão (400ml)', descricao: 'Limão fresco espremido.', preco: 7.50, destaque: false },
    { id: 6, nome: 'Suco Natural de Abacaxi com Hortelã (400ml)', descricao: 'Refrescante combinação.', preco: 9.00, destaque: false },
    { id: 7, nome: 'Suco Polpa (400ml)', descricao: 'Sabores: Manga, Maracujá, Caju, Uva, Goiaba.', preco: 7.00, destaque: false },
    { id: 8, nome: 'Água Mineral sem Gás (500ml)', descricao: 'Água mineral natural.', preco: 4.00, destaque: false },
    { id: 9, nome: 'Água Mineral com Gás (500ml)', descricao: 'Água mineral gaseificada.', preco: 4.50, destaque: false },
    { id: 10, nome: 'Cerveja Long Neck Nacional', descricao: 'Skol, Brahma, Antarctica.', preco: 8.00, destaque: false },
    { id: 11, nome: 'Cerveja Long Neck Premium', descricao: 'Heineken, Budweiser, Stella Artois.', preco: 10.00, destaque: true },
    { id: 12, nome: 'Mate Leão Copo (300ml)', descricao: 'Chá mate gelado.', preco: 5.00, destaque: false },
    { id: 13, nome: 'Guaravita (Copo)', descricao: 'Tradicional guaraná natural.', preco: 3.50, destaque: false },
    { id: 14, nome: 'Caldo de Cana (400ml)', descricao: 'Puro ou com limão/abacaxi.', preco: 7.00, destaque: false },
    { id: 15, nome: 'Vinho Tinto Taça (Suave/Seco)', descricao: 'Seleção da casa.', preco: 12.00, destaque: false }
  ]
};

// Exportando os dados para uso em outros arquivos
export { cardapio, categorias };