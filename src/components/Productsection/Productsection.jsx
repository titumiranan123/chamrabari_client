import Productcard from "./Productcard";

const Productsection = () => {
    return (
        <div className='mt-20 flex justify-center items-center flex-col'>
            <div className='flex justify-center items-center mb-10 flex-col'>
                <h2 className='text-3xl font-bold'>Trending Products </h2>
                <div className='bg-[#f8f8f8] w-20 h-[4px]'></div>
            </div>
            <Productcard />
            <div className='flex justify-center items-center '>
                <button className="mt-2 bg-[#C94428] bg-opacity-69 text-white font-semibold px-4 py-2 rounded-lg focus:outline-none">View More</button>
            </div>
        </div>
    );
};

export default Productsection;