
import {MapPin, Facebook, Instagram} from 'lucide-react'

export function Footer() {
    return(
      <div>

        
      <section className="bg-black text-white py-10 px-6 md:px-20 text-center">
        <div className="flex items-center justify-center gap-2">
          <MapPin className="w-5 h-5 text-red-500" />
          <span className="text-lg">Rua Exemplo, 123 - Florianópolis/SC</span>
        </div>
      </section>

      <footer className="bg-zinc-950 text-gray-400 py-6 text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" className="hover:text-white">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-white">
            <Instagram className="w-6 h-6" />
          </a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Personal Fight. Todos os direitos reservados.</p>
      </footer>
    </div>
    )
}