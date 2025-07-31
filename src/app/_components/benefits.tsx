import Image from "next/image"
import boxeImg from "../../../public/boxe.png"

import { Dumbbell, ShieldCheck, Users, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-indigo-600" />,
    title: "Profissionais Qualificados",
    description: "Treine com os melhores! Nossos instrutores são certificados e experientes.",
  },
  {
    icon: <Dumbbell className="w-8 h-8 text-indigo-600" />,
    title: "Equipamentos Modernos",
    description: "Oferecemos os equipamentos para garantir seu melhor desempenho.",
  },
  {
    icon: <Users className="w-8 h-8 text-indigo-600" />,
    title: "Ambiente para Todos",
    description: "Do iniciante ao avançado, temos planos e treinos para cada perfil.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-indigo-600" />,
    title: "Resultados Reais",
    description: "Histórias de superação de verdade, como a que você vai construir aqui.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10"
        data-aos="fade-up"
        data-aos-duration="800"
        >
          POR QUE NOS ESCOLHER?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-950 rounded-2xl p-6 shadow-lg hover:shadow-red-500/30
               transition-shadow"
            >
              <div className="mb-4 ">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
