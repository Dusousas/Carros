/* eslint-disable @next/next/no-img-element */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook, faSquareInstagram, faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
    return (
        <section id="contact" className='auto bgContact py-20'>
            <div className='maxWidth'>
                <h1 className="text-center text-white uppercase">Sua concessionária</h1>
                <h1 className="text-center text-5xl font-Oswald uppercase text-white">Entre em Contato</h1>
                <div className="border-b-4 mx-auto mt-3 border-red-700 w-[300px]" />

                <article className=" bg-transparent flex flex-col items-center mx-auto  py-4 max-w-[1460px] mt-10 lg:bg-white lg:rounded-lg lg:flex-row">
                    <div className="flex flex-col-reverse items-center w-full justify-center gap-1 lg:flex-row ">
                        <form className="w-full  bg-gray-900 flex flex-col justify-center p-8 h-[600px] max-w-[700px] lg:w-1/2 lg:rounded-lg" action="">
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col lg:flex-row gap-4">
                                    <input placeholder="Nome completo*" className="outline-none px-1 py-2 text-white bg-transparent border-b-2 lg:w-1/2" type="text" />
                                    <input placeholder="Telefone para contato*" className="outline-none px-1 py-2 text-white bg-transparent border-b-2 lg:w-1/2" type="text" />
                                </div>
                                <div className="flex flex-col lg:flex-row gap-4 mt-4">
                                    <input placeholder="Cidade*" className="outline-none px-1 py-2 text-white bg-transparent border-b-2 lg:w-1/2" type="text" />
                                    <input placeholder="E-mail*" className="outline-none px-1 py-2 text-white bg-transparent border-b-2 lg:w-1/2" type="text" />
                                </div>
                                <textarea placeholder="Informações adicionais" className="outline-none px-1 py-2 text-white bg-transparent border-b-2 lg:w-full resize-none h-24 mt-4"></textarea>
                                <button type="submit" className="mt-6 bg-red-700 text-white py-2 px-4 rounded-lg">Enviar mensagem</button>
                            </div>
                        </form>

                        <div className="flex justify-end items-center  lg:w-1/2 lg:flex-row ">
                            {/* <img src="/bgform.jpg" alt="Imagem de contato" className="rounded-lg w-full block object-cover h-[600px] max-w-[700px]" /> */}
                            <div className="bgForm flex flex-col items-center justify-center gap-4 rounded-lg w-full object-cover h-[600px] max-w-[700px]">
                                <h1 className="text-center text-white uppercase">Ficou com alguma dúvida?</h1>
                                <h1 className="text-center text-5xl font-Oswald uppercase text-white">Fale conosco</h1>
                                <p className="text-center">Não perca mais tempo e entre em contato com nossa equipe de especialistas. Teremos o mais prazer em ajudar você.</p>
                                <article className="flex items-center justify-center  gap-4">
                                    <a href="#" aria-label="Instagram"><FontAwesomeIcon className="text-GreenS text-3xl mb-2" icon={faSquareInstagram} /></a>
                                    <a href="#" aria-label="Whatsapp"><FontAwesomeIcon className="text-GreenS text-3xl mb-2" icon={faSquareWhatsapp} /></a>
                                    <a href="#" aria-label="Facebook"><FontAwesomeIcon className="text-GreenS text-3xl mb-2" icon={faSquareFacebook} /></a>
                                </article>
                            </div>
                        </div>
                    </div>
                </article>

                <h1 className="text-center text-5xl font-Oswald uppercase text-white mt-10">Onde estamos localizados?</h1>
                <div className="border-b-4 mx-auto mt-3 border-red-700 w-[300px]" />

                <iframe className="mt-10" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467692.40058804944!2d-46.92562909716427!3d-23.681433205154804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1723297178623!5m2!1spt-BR!2sbr" width="100%" height="400"></iframe>
            </div>
        </section>
    );
}
export default Contact;
