import img1 from '../../assets/sec-1.jpg'
import img2 from '../../assets/sec-2.jpg'
import img3 from '../../assets/sec-3.jpg'
import Unisexsecsion from '../Unisexsecsion/Unisexsecsion';
const FirstSection = () => {
    return (
        <div className='max-w-[1440px]'>
            <section className="first_section md:mt-[100px] mt-14 lg:mt-[100px] ">
                <div className="section-1 flex justify-center items-center flex-wrap lg:flex-nowrap overflow-hidden gap-2  md:gap-5">
                    <div className="card border border-[#C94428] top-sell gift flex justify-center  space-y-6 p-4 w-72 h-80    items-center flex-col">
                        <img src={img1} alt="" className='overflow-hidden w-72 h-56 rounded-lg' />
                        <div className=" flex justify-center items-center flex-col gap-3">
                            <p className='text-xl font-semibold'>Most Loved Designs</p>
                            <h3>This Week Top Sell</h3>
                        </div>
                    </div>
                    <div className="border-[#C94428] border card designoftheweek overflow-hidden  flex justify-center space-y-6 p-4 w-72 h-80  item items-center flex-col lg:flex-col-reverse gap-3 ">
                        <img src={img2} alt="" className='w-72 h-56 rounded-lg' />
                        <div className=" flex justify-center items-center flex-col gap-1">
                            <p className='text-xl font-semibold'>Design of the Week</p>
                            <h2>Do Not Miss The Details</h2>
                        </div>
                    </div>
                    <div className="border-[#C94428] border card md:mt-10 lg:mt-0 flex justify-center  space-y-6 p-4 w-72 h-80 overflow-hidden   items-center flex-col  ">
                        <img src={img3} alt="" className='w-72 h-56 rounded-lg' />
                        <div className=" flex justify-center items-center flex-col gap-1">
                            <p className='text-xl font-semibold'>Looking For Gifts ?</p>
                            <h2>Not Expensive But Great Gift</h2>
                        </div>
                    </div>
                </div>
            </section>
            <div className='mt-[100px]'>
                <div className="flex justify-center flex-col items-center w-3/4  mx-auto ">
                    <h1 className='text-4xl w-1/2 text-center'>Meticulously crafted with the finest quality leather</h1>
                </div>
            </div>
            <section className='flex justify-center  flex-col-reverse  lg:flex-row items-center lg:gap-10 md:gap-20 gap-10 flex-wrap lg:flex-nowrap'>
                <div className='lg:w-[90%] ms-5 w-full'>
                    <Unisexsecsion />
                </div>
                <div className=' lg:flex hidden justify-center items-center flex-col gap-2   w-full'>
                    <h1 className='text-4xl text-center'>Handcrafted with 100% leather</h1>
                    <div className='h-[3px] bg-[#44484F] mt-4 mb-4 w-2/4 mx-auto '></div>

                </div>
            </section>
        </div>
    );
};


export default FirstSection;