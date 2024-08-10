/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook, faSquareInstagram, faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Main = () => {

    const iconVariant = {
        hidden: { opacity: 0, transform: "translateX(30px)" },
        visible: { opacity: 1, transform: "translateX(0px)", transition: { duration: 1, delay: 1.5 } }
    };
    return (
        <section id='main' className='auto bgMain'>
            <div className='maxWidth flex flex-col items-center justify-center h-full'>

                <article>
                    <h1 className='font-Oswald text-3xl text-center text-white uppercase lg:text-7xl'>Seu Lugar para Comprar e Vender</h1>
                    <h1 className='font-Oswald text-3xl text-center  text-white uppercase mt-4 lg:text-7xl'>Veículos com Tranquilidade</h1>
                    <div className='text-center mt-10'>
                        <a className='bg-black rounded py-2 px-4 uppercase lg:text-xl lg:px-6 text-white' href="">Fale Conosco</a>
                    </div>
                </article>

                <article className="text-white relative top-[160px] lg:top-[260px]">
                    <motion.img
                        className="w-[100px]"
                        src="Seta.png"
                        alt="Seta"
                        animate={{ y: [0, -20, 0] }}  // Animação de movimento vertical
                        transition={{
                            duration: 1.5,  // Duração do ciclo completo
                            repeat: Infinity,  // Repetição infinita
                            ease: "easeInOut"  // Suavização da animação
                        }}/>
                </article>

                <motion.article
                    className="text-white flex flex-col absolute bottom-20 right-8"
                    variants={iconVariant}
                    initial="hidden"
                    animate="visible">
                    <a href="#" aria-label="Instagram"><FontAwesomeIcon className="text-GreenS text-3xl mb-2" icon={faSquareInstagram} /></a>
                    <a href="#" aria-label="Whatsapp"><FontAwesomeIcon className="text-GreenS text-3xl mb-2" icon={faSquareWhatsapp} /></a>
                    <a href="#" aria-label="Facebook"><FontAwesomeIcon className="text-GreenS text-3xl mb-2" icon={faSquareFacebook} /></a>
                </motion.article>
            </div>
        </section>
    );
}

export default Main;
