import boxeImg from '../../../public/boxe.png'
import Image from "next/image"

export function Plans() {
    return (

     <section className="bg-zinc-950 text-white py-16 px-6 md:px-20">

        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12"
          data-aos="fade-up"
          data-aos-duration="800"
          >
            
            ESCOLHA SUA MODALIDADE</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-gray-950 rounded-xl p-6"
            data-aos="flip-left"
            >
              <h3 className="text-2xl font-semibold mb-2">🥊 Boxe</h3>
              <p className="text-gray-400 mb-4">Aprenda técnicas reais de boxe com treinos intensos para melhorar resistência e foco.</p>
              <ul className="text-sm text-gray-300 list-disc list-inside mb-4">
                <li>Aulas 3x por semana</li>
                <li>Turmas para todos os níveis</li>
                <li>Equipamentos incluídos</li>
              </ul>
              <p className="text-lg font-bold text-indigo-600">R$ 199/mês</p>
            </div>
            <div className="bg-gray-950 rounded-xl p-6"
            data-aos="flip-right"
            >
              <h3 className="text-2xl font-semibold mb-2"> 🇹🇭 Muay Thai</h3>
              <p className="text-gray-400 mb-4">Arte marcial tailandesa completa, ideal para autodefesa, disciplina e condicionamento físico.</p>
              <ul className="text-sm text-gray-300 list-disc list-inside mb-4">
                <li>Aulas 3x por semana</li>
                <li>Turmas mistas e femininas</li>
                <li>Técnicas de ataque e defesa</li>
              </ul>
              <p className="text-lg font-bold text-indigo-600">R$ 239/mês</p>

            </div>
          </div>
        </div>
    </section>
)
}

