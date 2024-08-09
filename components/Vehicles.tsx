/* eslint-disable @next/next/no-img-element */
const Vehicles = () => {
    return (
        <section id="vehicles" className='auto py-20 bg-GrayP'>
            <div className='maxWidth'>
                <h1 className="text-center text-black uppercase">um pouco mais</h1>
                <h1 className="text-center text-5xl font-Oswald uppercase text-black">Do nosso estoque</h1>
                <div className="border-b-4 mx-auto mt-3 border-red-700 w-[300px]" />
                <article className="mt-20 mb-10 flex justify-center gap-x-12 gap-y-8 flex-wrap">

                    <div className="max-w-[293px] cursor-pointer lg:w-1/3">
                        <div className="">
                            <img className="w-[293px] h-[293px] object-cover" src="Car1.webp" alt="" />
                        </div>
                        <div className="bg-white py-4">
                            <h1 className="text-gray-500 text-center font-semibold">Mercedes 190E</h1>
                            <h1 className="text-black text-center">R$89.000,00</h1>
                            <div className="text-center mt-2">
                                <a className="text-white bg-black py-1 px-2 rounded uppercase" href="">saiba mais</a>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-[293px] cursor-pointer lg:w-1/3">
                        <div className="">
                            <img className="w-[293px] h-[293px] object-cover" src="Car2.webp" alt="" />
                        </div>
                        <div className="bg-white py-4">
                            <h1 className="text-gray-500 text-center font-semibold">Fusca 1300L 1976</h1>
                            <h1 className="text-black text-center">R$135.000,00</h1>
                            <div className="text-center mt-2">
                                <a className="text-white bg-black py-1 px-2 rounded uppercase" href="">saiba mais</a>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-[293px] cursor-pointer lg:w-1/3">
                        <div className="">
                            <img className="w-[293px] h-[293px] object-cover" src="Car3.webp" alt="" />
                        </div>
                        <div className="bg-white py-4">
                            <h1 className="text-gray-500 text-center font-semibold">Porsche GT3</h1>
                            <h1 className="text-black text-center">R$2.650.000,00</h1>
                            <div className="text-center mt-2">
                                <a className="text-white bg-black py-1 px-2 rounded uppercase" href="">saiba mais</a>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-[293px] cursor-pointer lg:w-1/3">
                        <div className="">
                            <img className="w-[293px] h-[293px] object-cover" src="Car1.webp" alt="" />
                        </div>
                        <div className="bg-white py-4">
                            <h1 className="text-gray-500 text-center font-semibold">Mercedes 190E</h1>
                            <h1 className="text-black text-center">R$89.000,00</h1>
                            <div className="text-center mt-2">
                                <a className="text-white bg-black py-1 px-2 rounded uppercase" href="">saiba mais</a>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-[293px] cursor-pointer lg:w-1/3">
                        <div className="">
                            <img className="w-[293px] h-[293px] object-cover" src="Car2.webp" alt="" />
                        </div>
                        <div className="bg-white py-4">
                            <h1 className="text-gray-500 text-center font-semibold">Fusca 1300L 1976</h1>
                            <h1 className="text-black text-center">R$135.000,00</h1>
                            <div className="text-center mt-2">
                                <a className="text-white bg-black py-1 px-2 rounded uppercase" href="">saiba mais</a>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-[293px] cursor-pointer lg:w-1/3">
                        <div className="">
                            <img className="w-[293px] h-[293px] object-cover" src="Car3.webp" alt="" />
                        </div>
                        <div className="bg-white py-4">
                            <h1 className="text-gray-500 text-center font-semibold">Porsche GT3</h1>
                            <h1 className="text-black text-center">R$2.650.000,00</h1>
                            <div className="text-center mt-2">
                                <a className="text-white bg-black py-1 px-2 rounded uppercase" href="">saiba mais</a>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-[293px] cursor-pointer lg:w-1/3">
                        <div className="">
                            <img className="w-[293px] h-[293px] object-cover" src="Car3.webp" alt="" />
                        </div>
                        <div className="bg-white py-4">
                            <h1 className="text-gray-500 text-center font-semibold">Porsche GT3</h1>
                            <h1 className="text-black text-center">R$2.650.000,00</h1>
                            <div className="text-center mt-2">
                                <a className="text-white bg-black py-1 px-2 rounded uppercase" href="">saiba mais</a>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-[293px] cursor-pointer lg:w-1/3">
                        <div className="">
                            <img className="w-[293px] h-[293px] object-cover" src="Car1.webp" alt="" />
                        </div>
                        <div className="bg-white py-4">
                            <h1 className="text-gray-500 text-center font-semibold">Mercedes 190E</h1>
                            <h1 className="text-black text-center">R$89.000,00</h1>
                            <div className="text-center mt-2">
                                <a className="text-white bg-black py-1 px-2 rounded uppercase" href="">saiba mais</a>
                            </div>
                        </div>
                    </div>
                </article>

                <div className="text-center">
                    <button className="bg-black rounded py-2 px-4 uppercase lg:text-xl lg:px-6">Ver mais</button>
                </div>
            </div>
        </section>
    );
}
export default Vehicles