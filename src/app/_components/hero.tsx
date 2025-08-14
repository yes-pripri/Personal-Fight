
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
// 
          /> 
        </div>
      
        <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">

          <article className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative ">
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
                <div className="mt-8">
                  <p className="text-2xl mb-8 text-center md:text-left">
                    <b className="bg-transparent text-red-400 px-0.5 py-0.5 
                    rounded-md sm:px-2 sm:py-1 inline-block">
                    Convide um amigo e garantam juntos a primeira aula gratuita!

                   </b>
                  </p>
            </div>
            </div>

            <div className="hidden md:block h-full relative"
              data-aos="fade-left">
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