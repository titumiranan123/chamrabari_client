import Category from "../../components/Category/Category";
import FirstSection from "../../components/Firstsection/FIrstsection";
import Header from "../../components/Header/Header";
import Productsection from "../../components/Productsection/Productsection";
import Testimonial from "../../components/Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Header />
            <FirstSection />
            <Productsection />
            <Category />
            <Testimonial />
        </div>
    );
};

export default Home;