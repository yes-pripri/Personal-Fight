
import girlImg from '../../../public/girl.png'
import Image from 'next/image'

export function Hero() {
  return(
      <section className="bg-black text-white relative overflow-hidden">
        
        <div>
          <Image
             src={girlImg}
             alt="garota"
             fill
             sizes='100vw'
             priority
             className='object-cover opacity-30 lg:hidden'
 
          />
        </div>
      
        <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">

          <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative ">
            <div className="space-y-6">
              <h1 
              className="text-5xl md:text-6xl lg: 7xl font-bold leading-10"
              data-aos="fade-right"
              > 
              DESCUBRA SUA FORÇA!
              
              </h1>  
              <p className="lg:text-lg text-gray-400" >O treino de Personal Fight vai muito além da luta, treinamos
                disciplina, autoconfiança e equilíbrio, transformando não só o corpo, mas também
                 a mente e a vida de quem pratica.
              </p>
              <div data-aos="zoom-in"></div>
                <a 
                  href="#"
                  className="bg-red-500 px-5 py-2 rounded-md font-semibold flex items-center
                  justify-center w-fit transition-transform duration-300 hover:scale-110"
                  data-aos="zoom-in-down"

                  >
              
                    START NOW 
                </a>

              <div className="mt-8">
                <p className="text-3xl mb-8">
                  <b className="bg-gray-400 text-gray-700 px-2 py-1 rounded-md">Primeira aula grátis!
                  </b>
                </p>
              </div>
            </div>

            <div className="hidden md:block h-full relative">
              <Image
                src={girlImg}
                alt="garota"
                className='object-contain'
                fill
                sizes="(max-width: 768px) 0vw, 50vw"
                quality={100}
                priority
                 
              />
            </div>
            
          </article>
            
        </div>
      </section>
  )
}