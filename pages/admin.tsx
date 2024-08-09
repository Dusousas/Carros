import NavBar from "@/components/NavBar";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Admin = () => {
    return (
        <>
            <NavBar />
            <section className='auto bgMain'>
                <div className='maxWidth flex items-center justify-center h-full'>
                    <article className="bg-[#1F232C] py-10 px-32 rounded-xl relative overflow-hidden">

                        <div className="absolute bottom-0 left-0 right-0">
                            <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: "100px", width: "100%", display: "block", position: "relative", }}>
                                <path d="M0.00,49.98 C180.00,150.00 320.00,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ fill: "#ffffff" }} />
                            </svg>
                        </div>

                        <h1 className="text-center mb-10 text-2xl uppercase font-Oswald font-bold">LOGOTIPO</h1>
                        <h1 className="font-Oswald text-4xl text-center uppercase">Admin Panel</h1>
                        <p className="text-center text-gray-500">Control panel login</p>

                        <form className="flex flex-col gap-4 mt-10 outline-none" action="">
                            <div className="flex items-center gap-4">
                                <FontAwesomeIcon icon={faUser} className="" />
                                <input placeholder="admin" className="outline-none px-1 py-2 text-white bg-transparent border-b-2" type="text" />
                            </div>
                            <div className="flex items-center gap-4">
                                <FontAwesomeIcon icon={faKey} className="" />
                                <input placeholder="**********" className="outline-none px-1 py-2 text-white bg-transparent border-b-2" type="password" />
                            </div>
                            <div className="py-2 mb-20">
                                <button className="bg-red-600 py-2 px-6 rounded-full">Login</button>
                            </div>
                        </form>
                    </article>

                </div>
            </section>
        </>
    );
}
export default Admin;
