import React, { useState, useEffect } from 'react';
import axios from 'axios';

type Brand = {
    codigo: string;
    nome: string;
};

type Model = {
    codigo: string;
    nome: string;
};

type Year = {
    codigo: string;
    nome: string;
};

const Sell = () => {
    const [brands, setBrands] = useState<Brand[]>([]);
    const [models, setModels] = useState<Model[]>([]);
    const [years, setYears] = useState<Year[]>([]);
    const [selectedBrand, setSelectedBrand] = useState<string>('');
    const [selectedModel, setSelectedModel] = useState<string>('');
    const [selectedYear, setSelectedYear] = useState<string>('');

    useEffect(() => {
        fetchBrands();
    }, []);

    const fetchBrands = async () => {
        try {
            const response = await axios.get<Brand[]>('https://parallelum.com.br/fipe/api/v1/carros/marcas');
            setBrands(response.data);
        } catch (error) {
            console.error('Erro ao buscar marcas:', error);
        }
    };

    const fetchModels = async (brandCode: string) => {
        try {
            const response = await axios.get<{ modelos: Model[] }>(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandCode}/modelos`);
            setModels(response.data.modelos);
        } catch (error) {
            console.error('Erro ao buscar modelos:', error);
        }
    };

    const fetchYears = async (brandCode: string, modelCode: string) => {
        try {
            const response = await axios.get<Year[]>(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandCode}/modelos/${modelCode}/anos`);
            setYears(response.data);
        } catch (error) {
            console.error('Erro ao buscar anos:', error);
        }
    };

    const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const brandCode = e.target.value;
        setSelectedBrand(brandCode);
        setSelectedModel('');
        setYears([]);
        fetchModels(brandCode);
    };

    const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const modelCode = e.target.value;
        setSelectedModel(modelCode);
        fetchYears(selectedBrand, modelCode);
    };

    return (
        <section id="sell" className='auto bg-white py-20 gradient'>
            <div className='maxWidth'>
                <h1 className="text-center text-black uppercase">Complete o formulário e</h1>
                <h1 className="text-center text-5xl font-Oswald uppercase text-black">Venda seu carro</h1>
                <div className="border-b-4 mx-auto mt-3 border-red-700 w-[300px]" />

                <form className="border-2 border-black mt-20 max-w-[900px] mx-auto py-8 rounded-xl bg-[#1F232C]" action="">
                    <h1 className="text-white text-center text-4xl font-Oswald pt-4 uppercase">Seus dados</h1>
                    <h1 className="text-center text-white uppercase pb-12">Pessoais</h1>

                    <div className="flex flex-col gap-4 w-[90%] mx-auto lg:flex-row">
                        <input placeholder="Nome completo*" className="outline-none px-1 py-2 text-white bg-transparent border-b-2 lg:w-1/2" type="text" />
                        <input placeholder="Telefone para contato*" className="outline-none px-1 py-2 text-white bg-transparent border-b-2 lg:w-1/2" type="text" />
                    </div>

                    <div className="flex flex-col gap-4 mt-4 w-[90%] mx-auto lg:flex-row">
                        <input placeholder="Cidade*" className="outline-none px-1 py-2 text-white bg-transparent border-b-2 lg:w-1/2" type="text" />
                        <input placeholder="E-mail*" className="outline-none px-1 py-2 text-white bg-transparent border-b-2 lg:w-1/2" type="text" />
                    </div>

                    <div className="flex flex-col gap-4 mt-4 w-[90%] mx-auto">
                        <textarea placeholder="Informações adicionais" className="outline-none px-1 py-2 text-white bg-transparent border-b-2 lg:w-full resize-none h-24"></textarea>
                    </div>

                    <h1 className="text-white text-center text-4xl font-Oswald py-12 uppercase">Informações do Veículo</h1>

                    {/* Select para Marca */}
                    <div className="flex flex-col gap-4 mt-4 w-[90%] mx-auto lg:flex-row">
                        <select
                            value={selectedBrand}
                            onChange={handleBrandChange}
                            className="outline-none px-1 py-2 text-white bg-[#1F232C] border-b-2 lg:w-1/2"
                        >
                            <option value="">Selecione a Marca</option>
                            {brands.map((brand) => (
                                <option key={brand.codigo} value={brand.codigo}>{brand.nome}</option>
                            ))}
                        </select>

                        {/* Select para Modelo */}
                        <select
                            value={selectedModel}
                            onChange={handleModelChange}
                            className="outline-none px-1 py-2 text-white bg-[#1F232C] border-b-2 lg:w-1/2"
                            disabled={!selectedBrand}
                        >
                            <option value="">Selecione o Modelo</option>
                            {models.map((model) => (
                                <option key={model.codigo} value={model.codigo}>{model.nome}</option>
                            ))}
                        </select>
                    </div>

                    {/* Select para Ano */}
                    <div className="flex flex-col gap-4 mt-4 w-[90%] mx-auto lg:flex-row">
                        <select
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(e.target.value)}
                            className="outline-none px-1 py-2 text-white bg-[#1F232C] border-b-2 lg:w-1/2"
                            disabled={!selectedModel}
                        >
                            <option value="">Selecione o Ano</option>
                            {years.map((year) => (
                                <option key={year.codigo} value={year.codigo}>{year.nome}</option>
                            ))}
                        </select>
                        <input placeholder="Placa" className="outline-none px-1 py-2 text-white bg-transparent border-b-2 lg:w-1/2" type="text" />
                    </div>

                    <div className="flex flex-col gap-4 mt-4 w-[90%] mx-auto lg:flex-row">
                        <input placeholder="Cor*" className="outline-none px-1 py-2 text-white bg-transparent border-b-2 lg:w-1/2" type="text" />
                        <input placeholder="Combustível*" className="outline-none px-1 py-2 text-white bg-transparent border-b-2 lg:w-1/2" type="text" />
                    </div>

                    <div className="flex flex-col gap-4 mt-4 w-[90%] mx-auto lg:flex-row">
                        <input placeholder="Quilometragem*" className="outline-none px-1 py-2 text-white bg-transparent border-b-2 lg:w-1/2" type="text" />
                        <input placeholder="Possui Multas ou Pendências?*" className="outline-none px-1 py-2 text-white bg-transparent border-b-2 lg:w-1/2" type="text" />
                    </div>

                    <div className="flex flex-col gap-4 mt-4 w-[90%] mx-auto lg:flex-row">
                        <input placeholder="Preço Esperado*" className="outline-none px-1 py-2 text-white bg-transparent border-b-2 lg:w-1/2" type="text" />
                        <input placeholder="Estado de Conservação*" className="outline-none px-1 py-2 text-white bg-transparent border-b-2 lg:w-1/2" type="text" />
                    </div>

                    <div className="flex flex-col gap-4 mt-4 w-[90%] mx-auto mb-10">
                        <textarea placeholder="Informações adicionais" className="outline-none px-1 py-2 text-white bg-transparent border-b-2 lg:w-full resize-none h-24"></textarea>
                    </div>

                    <div className='text-center'>
                        <button className='text-center uppercase bg-red-600 py-2 px-20 rounded-full'>Enviar</button>
                    </div>

                    <h1 className="text-center text-white uppercase mt-4 text-[12px]">Em breve, um de nossos consultores entrará em contato via E-mail e Telefone</h1>

                </form>
            </div>
        </section>
    );
}

export default Sell;
