import Banner from '../Banner/Banner';
import Faq from '../../FAQ/Faq';
import './Home.css';
import Product from '../../Product/Product';

const Home = () => {
    return (
        <>
            <div className="m-3">
                <Banner></Banner>
            </div>
            <div>
                <Product></Product>
            </div>
            <div>
                <Faq></Faq>
            </div>
        </>
    );
};

export default Home;