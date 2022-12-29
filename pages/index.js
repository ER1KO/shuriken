import Head from 'next/head'
import Image from 'next/image'
import Parallax from 'parallax-js'
import { useEffect,useState } from 'react';
import Modal from 'react-modal';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper';


Modal.setAppElement('#MainPage');

export default function Home() { 
  
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
      const scene = document.getElementById('introParallax');
      const parallaxInstance = new Parallax(scene);
      return () => parallaxInstance.destroy();
  },[]);

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <>
      <Head>
        <title>Shuriken - NTS Audio</title>
        <meta name="description" content="Le Shuriken in ear sono auricolari custom interamente ideati, disegnati e prodotti a Milano. Il team di NTS Audio, da grande appassionato di gaming, ha pensato di portare l'esperienza sonora unica dell'audio custom nel mondo dei videogames. Le in-ear sono completamente lavorate a mano nel nostro laboratorio." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />       
      </Head>
      <main id="MainPage">
        <Modal
          isOpen={modalIsOpen}          
          onRequestClose={closeModal}          
          contentLabel="Shuriken">
          <div className='bg-[#010102] min-h-screen'>
            <div className='flex justify-center p-5'>
              <Image
                src="/logo.png"
                alt="Shuriken in ear"
                width={43}
                height={43}
              />
            </div>
            <div className='embed-container p-0 flex items-center justify-center'>
              <iframe width="1440" height="810" src="https://www.youtube-nocookie.com/embed/mFIN7o65ldQ?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className='close-modal text-center p-5'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className='w-10 h-10 fill-white cursor-pointer inline-block' onClick={closeModal}><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
            </div>
          </div>
        </Modal>
        <header>
          <div className='flex justify-center pt-8'>
            <Image
              src="/logo.png"
              alt="Shuriken"
              width={43}
              height={43}
            />
          </div>
        </header>
        <section className='intro max-w-screen flex justify-center relative lg:mt-[-75px] lg:mx-auto'>          
          <div className="marquee">
            <Image
              src="/scritta-shurike.jpg"
              alt="Shuriken in ear"
              width={3650}
              height={588}                  
            />
          </div>
          <div id='introParallax' className='lg:mt-0 lg:ml-[0] lg:mr-[0] ml-[-34%] mr-[-34%] mt-[-22%]'>
            <div data-depth="0">
              <Image
                src="/shuriken-main-text.png"
                alt="Shuriken in ear"
                width={1920}
                height={1080}          
              />
            </div>
              <div data-depth=".05">
                <Image
                  src="/shuriken-preview-dx.png"
                  alt="Shuriken in ear"
                  width={1920}
                  height={1080}                  
                />
              </div>
              <div data-depth=".05">
                <Image
                  src="/shuriken-preview-sx.png"
                  alt="Shuriken in ear"
                  width={1920}
                  height={1080}
                />
              </div>
          </div>
          <div className='text-center lg:text-[2.2vw] text-[28px] absolute h-full flex flex-wrap item-center lg:pt-[18%] sm:pt-[9%] pt-[25%] gap-2 items-center indusrty-light'>
            <div>
              <div>
                <span className='industry-bold'>HEAR</span>
                <span>&nbsp;YOUR&nbsp;</span>
                <span className='industry-bold'>ENEMY</span>
              </div> 
              <div className='inline-block leading-[1]'>
                <a href='https://www.ntsaudio.it/negozio/shuriken/' title='Prenota ora' target='_blank' rel='noopener nofollow noreferrer' className='cursor-pointer'>
                  <Image
                    src="/prenota-ora-button.png"
                    alt="Prenota ora"
                    width={186}
                    height={65}
                  />
                </a>
              </div>             
            </div>
          </div>    
          <div className='w-full text-[15px] absolute sm:bottom-[11%] bottom-[4%] text-center'>
              <div className='flex text-[#FFD362] underline uppercase items-baseline justify-center leading-[1]'>
                <span className='cursor-pointer' onClick={ () => {  setIsOpen(true) } } >Guarda il video                   
                </span>
                
              </div>
            </div>      
        </section>
        <section className='flex bg-video xl:p-60 p-36'></section>   
        <section className='model-shuriken'>    
          <section className='intro-shuriken xl:grid xl:grid-cols-2 xl:gap-4 xl:px-44 xl:py-20 p-5'>
            <div className='xl:mt-[-180px] text-center'>
              <Image
                src="/Moonryde-Shuriken.jpg"
                alt="Moonryde Shuriken"
                width={751}
                height={645}
                className='inline-block'          
              />
            </div>
            <div className='xl:mt-0 mt-10'>
              <div className='section-title uppercase text-[35px] indusrty-light'>
                The <span className='industry-bold'>next gen</span> earphones
              </div>
              <div className='content-section text-[22px] leading-[28px]'>
                <p>
                Le Shuriken sono il risultato degli sforzi congiunti tra i migliori gamers e fonici italiani, un prodotto d&apos;eccellenza pensato per 
                i giocatori competitivi ma adatto a chiunque voglia godersi un&apos;esperienza audio ai massimi livelli.</p><br />
                <p>Goditi il suono nitido e potente grazie alla tecnologia innovativa abbinata ad una lavorazione fatta a mano su misura per ogni singolo cliente.</p>
                <Image
                  src="/made-in-italy.png"
                  alt="Custom Shuriken in ear made in italy"
                  width={216}
                  height={41}
                  className='mt-5'
                />
              </div>
            </div>
          </section>
          <section className='xl:grid xl:grid-cols-2 xl:gap-4 xl:px-44 xl:py-20 p-5'>
            <div className='text-center'>
                <Image
                  src="/shuriken.gif"
                  alt="Custom Shuriken in ear made in italy"
                  width={700}
                  height={700}
                  className='inline-block'                
                />
            </div>
            <div className='mt-20'>
              <div className='section-title uppercase text-[35px] mb-10 indusrty-light'>
                <span className='industry-bold'>Specifiche</span> Tecniche
              </div>
              <div className='content-section text-[22px] leading-[28px]'>
                <p>4x Driver Balanced Armature (2x per cuffia)</p>
                <p>Impedenza 32Ω</p>
                <p>Sensibilità 115 dB a 1Khz</p>
                <p>Frequenza 20-22KHz</p><br />
                <p className='mb-4'>Cosa è incluso nella confezione?</p>
                <ul className='list-disc list-inside'>
                  <li>Cavo</li> 
                  <li>In Ear</li>
                  <li>Custodia granata per il trasporto</li> 
                  <li>Eartips (set da 6 per la versione no calco)</li>
                  <li>Scovolino per la pulizia</li>
                  <li>Garanzia 2 anni </li>
                </ul>
                <Image
                  src="/Kunai-upcoming.jpg"
                  alt="Kunai eq audio upcoming 2023"
                  width={299}
                  height={60}
                  className='mt-10'
                />              
              </div>
            </div>
          </section>
        </section>
        <section className='section-nts xl:grid xl:grid-cols-2 xl:gap-4 xl:px-44 xl:py-44 p-0'>
          <div className='xl:text-right bg-black bg-opacity-75 xl:bg-transparent xl:p-0 p-5'>
              <Image
                src="/NTS.png"
                alt="NTS Audio"
                width={205}
                height={45}
                className='mb-10 inline-block'
              /> 
            <div className='section-title text-[35px] leading-[1] mb-10 xl:text-right'>
              <p className='industry-bold uppercase'>Ottimizato per il gaming</p>
              <p className='indusrty-light'>da fonici NTS Audio</p>
            </div>
            <div className='content-section text-[22px] leading-[28px] xl:text-right'>
              <p>
              I nostri auricolari custom sono interamente ideati, disegnati e prodotti a Milano. Il team di NTS Audio, da grande appassionato di gaming, ha pensato di portare l&apos;esperienza sonora unica dell&apos;audio custom nel mondo dei videogames. Le in-ear sono completamente lavorate a mano nel nostro laboratorio.</p>
              <br /><p>La perfetta aderenza delle cuffie nella parte interna dell&apos;orecchio le rendono comodissime ed offrono un ottimo isolamento acustico.</p>
              <p>Il tutto per un esperienza audio senza precedenti!</p>
            </div>
          </div>
        </section>
        <section className='xl:py-20 py-10'>
          <div className='section-title uppercase text-[35px] mb-20 indusrty-light text-center'>
            <span className='industry-bold'>Upgrade</span> & <span className='industry-bold'>Accessori</span>
          </div>
          <div className='lg:min-w-[1920px] lg:w-screen w-[1023px] m-auto'>
            <Swiper
              spaceBetween={5}                    
              slidesPerView={1}                                    
              loop={true}
              simulateTouch={false}              
              modules={[Autoplay]}
              autoplay={{delay:0,disableOnInteraction:false}}
              speed={55000}>            
              <SwiperSlide>
                  <div className='flex mb-[5px] gap-[5px]'>
                    <div className='w-1/5'>
                      <div className='card-accessori foam industry-bold'>FOAM EARTIP</div>
                      <div className='card-accessori mobile industry-bold'>MODULO MOBILE</div>
                    </div>
                    <div className='w-1/5'>
                      <div className='card-accessori wirless industry-bold'>MODULO WIRLESS</div>
                      <div className='card-accessori eartip industry-bold'>EARTIP AGGIUNTIVI</div>
                    </div>
                    <div className='w-2/5'>
                      <div className='card-accessori calco industry-bold'>CALCO</div>
                    </div>
                    <div className='w-1/5'>
                      <div className='card-accessori cavo industry-bold'>CAVO CON MICROFONO</div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className='card-accessori cavo-premium industry-bold'>CAVO PREMIUM CON LUNGHEZZE VARIABILI</div>
                    </div>
                  </div>
              </SwiperSlide>                          
            </Swiper>
          </div>
          <div className='lg:p-10 py-10 px-2'>
            <p className='uppercase text-[#4B4B4B] block text-center'>Accessori e Upgrade acquistabili separatamente.</p>
            <p className='uppercase text-[#4B4B4B] block text-center'>Tutte le immagini sono inserite a scopoo illustrativo. I prodotti possono subire modifiche.</p>
          </div>
        </section>
        <section className='min-h-screen p-10 section-kunai-software'>
            <div className='flex h-screen justify-center items-center'>
              <div className='text-center'>
                <Image
                  src="/kunai-logo.png"
                  alt="Kunai eq Software"
                  width={104}
                  height={104}   
                  className='inline-block mb-10'             
                />
                <div className='text-[35px] industry-bold uppercase leading-[1]'>Kunai Eq Software</div>
                <div className='text-[#4B4B4B] text-[35px] leading-[1] indusrty-light'>upcoming in 2023</div>
              </div>
            </div>
        </section>
        <footer>
          <div className='flex p-10 justify-center items-center'>
              <a href='https://unloaded.gg' title='Unloaded' target='_blank' rel='noopener nofollow noreferrer'>
              <svg width="147" className='hover:fill-[#ffd200]' height="28" viewBox="0 0 147 28" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M45.4851 23.26C49.4651 23.26 51.4451 21.26 51.4451 17.96V8.7H47.9051V18.02C47.9051 19.42 47.1251 20.42 45.4851 20.42C43.7451 20.42 43.0251 19.48 43.0251 18.08V8.7H39.4851V17.96C39.4851 21.3 41.4851 23.26 45.4851 23.26ZM53.296 23H56.756V16.34C56.756 15.84 56.716 14 56.716 14H56.756C56.756 14 57.536 15.54 57.776 15.92L61.976 23H65.536V8.7H62.076V15.48C62.076 15.98 62.116 17.7 62.116 17.7H62.076C62.076 17.7 61.316 16.28 61.096 15.88L56.856 8.7H53.296V23ZM67.4953 23H77.4553V20H71.0353V8.7H67.4953V23ZM84.796 20.46C82.496 20.46 81.316 18.48 81.316 15.88C81.316 13.28 82.496 11.28 84.796 11.28C87.116 11.28 88.256 13.28 88.256 15.88C88.256 18.48 87.116 20.46 84.796 20.46ZM84.776 23.34C89.116 23.34 91.856 20.16 91.856 15.88C91.856 11.6 89.116 8.42 84.776 8.42C80.456 8.42 77.716 11.6 77.716 15.88C77.716 20.16 80.456 23.34 84.776 23.34ZM91.339 23H94.899L95.719 20.42H100.719L101.559 23H105.279L100.119 8.7H96.479L91.339 23ZM96.539 17.88L97.639 14.42C97.879 13.68 98.219 12.4 98.219 12.4H98.259C98.259 12.4 98.579 13.68 98.819 14.42L99.899 17.88H96.539ZM109.824 20.02V11.66H111.944C114.164 11.66 115.424 13.34 115.424 15.94C115.424 18.56 114.224 20.02 111.904 20.02H109.824ZM106.284 23H112.164C113.964 23 115.404 22.54 116.524 21.7C118.124 20.48 119.004 18.46 119.004 15.94C119.004 11.56 116.344 8.7 112.384 8.7H106.284V23ZM120.386 23H131.346V20H123.926V16.94H130.186V14.18H123.926V11.62H131.226V8.7H120.386V23ZM136.484 20.02V11.66H138.604C140.824 11.66 142.084 13.34 142.084 15.94C142.084 18.56 140.884 20.02 138.564 20.02H136.484ZM132.944 23H138.824C140.624 23 142.064 22.54 143.184 21.7C144.784 20.48 145.664 18.46 145.664 15.94C145.664 11.56 143.004 8.7 139.044 8.7H132.944V23Z" />
                <path d="M29.2142 4.54648V27.8096H3.07849C8.23631 26.3148 13.3941 24.8193 18.5519 23.3244C12.3682 15.5494 6.18443 7.77502 0 0C8.01011 6.47223 16.0195 12.9445 24.0297 19.4173C25.7576 14.4602 27.4856 9.50301 29.2142 4.54648Z" />
              </svg>
              </a>
          </div>
        </footer>
      </main>
    </>
  )
}
