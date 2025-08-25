
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import QRCode from "react-qr-code";

export default function Naturaispremium() {
  const produtos = [
    { nome: "Chá Verde Orgânico", preco: "R$ 25,00", img: "https://images.unsplash.com/photo-1505577058444-a3dab90d4253", categoria: "Chás" },
    { nome: "Mel Puro Silvestre", preco: "R$ 30,00", img: "https://images.unsplash.com/photo-1607619056574-7a1e44c8c7b4", categoria: "Mel" },
    { nome: "Castanha-do-Pará", preco: "R$ 45,00/kg", img: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2", categoria: "Grãos e Castanhas" },
    { nome: "Farinha de Linhaça", preco: "R$ 18,00", img: "https://images.unsplash.com/photo-1604908177253-74a2d2e3f3a4", categoria: "Grãos e Castanhas" },
    { nome: "Óleo de Coco Extra Virgem", preco: "R$ 35,00", img: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03", categoria: "Óleos" },
    { nome: "Suplemento Natural Spirulina", preco: "R$ 55,00", img: "https://images.unsplash.com/photo-1629970136604-4fcb7631c6f3", categoria: "Suplementos" },
    { nome: "Mix de Frutas Secas", preco: "R$ 40,00/kg", img: "https://images.unsplash.com/photo-1604152135912-04a579b4f8b7", categoria: "Frutas Secas" },
    { nome: "Chia Orgânica", preco: "R$ 22,00", img: "https://images.unsplash.com/photo-1604908177094-df44fcbb40f1", categoria: "Grãos e Castanhas" }
  ];

  const categorias = ["Todos", "Chás", "Mel", "Grãos e Castanhas", "Óleos", "Suplementos", "Frutas Secas"];
  const [filtro, setFiltro] = useState("Todos");
  const [busca, setBusca] = useState("");
  const [mensagem, setMensagem] = useState("");
  const pixKey = "+5549999225224";

  const produtosFiltrados = produtos.filter(p => (filtro === "Todos" || p.categoria === filtro) && p.nome.toLowerCase().includes(busca.toLowerCase()));

  const copiarPix = () => {
    navigator.clipboard.writeText(pixKey);
    setMensagem("Chave Pix copiada com sucesso! Faça o pagamento para processar seu pedido.");
    setTimeout(() => setMensagem(""), 4000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white text-gray-900">
      {/* Hero */}
      <section className="text-center py-20 bg-green-100">
        <h1 className="text-5xl font-bold text-green-800">Naturaispremium</h1>
        <p className="mt-4 text-xl text-green-700">Produtos naturais para sua saúde e bem-estar</p>
        <Button onClick={copiarPix} className="mt-6 bg-green-600 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-green-700">Copiar Chave Pix</Button>
        {mensagem && <p className="mt-4 text-green-800 font-semibold">{mensagem}</p>}
      </section>

      {/* QR Code Pix Fixo */}
      <section className="text-center py-10 bg-green-50">
        <h2 className="text-2xl font-semibold mb-4">Pague via Pix</h2>
        <QRCode value={pixKey} size={180} className="mx-auto" />
        <p className="mt-2 text-green-700">Escaneie ou copie a chave para pagar</p>
      </section>

      {/* Barra de busca */}
      <section className="py-6 px-6">
        <input 
          type="text" 
          placeholder="Buscar produto..." 
          value={busca} 
          onChange={e => setBusca(e.target.value)} 
          className="w-full md:w-1/2 p-3 rounded-xl border border-gray-300 mb-6"
        />
      </section>

      {/* Catálogo de Produtos */}
      <section className="py-16 px-6">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categorias.map((cat, index) => (
            <Button key={index} onClick={() => setFiltro(cat)} className={`px-4 py-2 rounded-2xl shadow-md ${filtro === cat ? "bg-green-600 text-white" : "bg-green-100 text-green-700 hover:bg-green-200"}`}>{cat}</Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {produtosFiltrados.map((produto, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="shadow-lg rounded-2xl overflow-hidden bg-white">
              <img src={produto.img} alt={produto.nome} className="w-full h-48 object-cover" />
              <Card className="border-none shadow-none">
                <CardContent className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{produto.nome}</h3>
                  <p className="text-green-700 font-bold mt-2">{produto.preco}</p>
                  <Button onClick={copiarPix} className="mt-4 bg-green-600 text-white w-full">Copiar Chave Pix</Button>
                  {mensagem && <p className="mt-2 text-green-800 font-semibold">{mensagem}</p>}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contato */}
      <section className="text-center py-16 bg-green-50">
        <h2 className="text-3xl font-semibold">Entre em Contato</h2>
        <p className="mt-2">Estamos prontos para atender você!</p>
        <Button onClick={copiarPix} className="mt-6 bg-green-600 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-green-700">Copiar Chave Pix</Button>
        {mensagem && <p className="mt-4 text-green-800 font-semibold">{mensagem}</p>}
      </section>

      {/* Rodapé */}
      <footer className="py-6 bg-green-700 text-white text-center">
        <p>© {new Date().getFullYear()} Naturaispremium. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
