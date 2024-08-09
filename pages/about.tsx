import NavBar from "@/components/NavBar";

const about = () => {
  return (
    <>
      <NavBar />
      <section className='auto py-20'>
        <div className='maxWidth'>
          <h1 className="text-center">um pouco mais</h1>
          <h1 className="text-center text-5xl font-Oswald uppercase">Da nossa história</h1>
          <div className="border-b-4 mx-auto mt-3 border-red-700 w-[300px]"  />
        </div>
      </section>
    </>

      );
}
export default about