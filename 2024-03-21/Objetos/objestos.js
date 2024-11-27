//1
const carro = {
    marca:"renault",
    modelo:"Clio",
    ano: 2015
}

//2
console.log(Object.keys(carro.ano))

carro.ano = 2021 
// ou 
carro["ano"] = 2021

//3
carro.cor = "Preto";
delete carro.modelo;
console.log(carro);

//4
const pessoa = {
    nome: "João",
    idade: 30,
    cumprimentar: function() {
      console.log(`Olá, meu nome é ${this.nome}`);
    }
}

//5
const produto = {
    nome:"nome",
    preco:"preco",
    categoria:"categoria"
}

for(let propriedade in produto){
    console.log(`${produto}: ${produto[propriedade]}`);
}

//6

const biblioteca = [
    { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", anoPublicacao: 1954 },
    { titulo: "1984", autor: "George Orwell", anoPublicacao: 1949 },
    { titulo: "Orgulho e Preconceito", autor: "Jane Austen", anoPublicacao: 1813 }
  ];
  
  biblioteca.forEach(livro => console.log(livro.titulo));
 
  //7
  const carrinho = {
    itens: [
      { nome: "Camisa", preco: 50 },
      { nome: "Calça", preco: 100 }
    ],
    calcularTotal: function() {
      return this.itens.reduce((total, item) => total + item.preco, 0);
    }
  };
  
  console.log(carrinho.calcularTotal()); 


  //8
  const aluno = {
    nome: "Maria",
    idade: 21,
    curso: "Ciências da Computação"
  };
  
  const { nome, curso } = aluno;
  
  console.log(`Nome: ${nome}, Curso: ${curso}`);

  //9
  const estoque = [
    { id: 1, nome: "Caneta", quantidade: 10 },
    { id: 2, nome: "Caderno", quantidade: 15 }
  ];
  
  function atualizarQuantidade(id, novaQuantidade) {
    const produto = estoque.find(item => item.id === id);
    if (produto) {
      produto.quantidade = novaQuantidade;
    }
  }
  
  atualizarQuantidade(2, 30);
  console.log(estoque);

  //10
  const usuarios = [
    { nome: "Alice", idade: 25, email: "alice@example.com" },
    { nome: "Bob", idade: 30, email: "bob@example.com" },
    { nome: "Carol", idade: 22, email: "carol@example.com" }
  ];
  
  const nomesEmails = usuarios.map(({ nome, email }) => ({ nome, email }));
  
  console.log(nomesEmails);
  
  