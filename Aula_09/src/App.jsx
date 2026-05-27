import Header from './components/Header';
import ProductCard from './components/ProductCard';
import './styles/global.css';

function App() {
  const produtos = [
    { nome: 'Notebook Gamer', preco: 5000 },
    { nome: 'Mouse Sem Fio', preco: 150 },
    { nome: 'Monitor UltraWide', preco: 1200 },
    { nome: 'Teclado Mecânico', preco: 350 }
  ];

  return (
    <div>
      {/* 1. Componente Header do Catálogo[cite: 2] */}
      <Header />
      
      {/* 2. Container com alinhamento e espaçamento CSS[cite: 2] */}
      <main className="catalogo-container">
        {produtos.map((produto, index) => (
          <ProductCard 
            key={index}
            nome={produto.nome}
            preco={produto.preco}
          />
        ))}
      </main>
    </div>
  );
}

export default App; //[cite: 2]