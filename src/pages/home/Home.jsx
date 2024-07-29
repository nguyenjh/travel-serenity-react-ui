import "./home.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import Featured from "../../components/featured/Featured"
import PropertyList from "../../components/propertyList/PropertyList"
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import Savings from "../../components/savings/Savings"

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <h1 className="homeTitle">Travel more, spend less</h1>
                <h3 className="homeSubtitle">Promotions, deals, and special offers for you</h3>
                <Savings/>
                <h1 className="homeTitle">Trending destinations</h1>
                <h3 className="homeSubtitle">Most popular choices for travelers from the United States</h3>
                <Featured/>
                <h1 className="homeTitle">Browse by property type</h1>
                <PropertyList/>
                <h1 className="homeTitle">Home guests love</h1>
                <FeaturedProperties/>
        
                <MailList/>
                <Footer/>
            </div>
        </div>
    )
}

export default Home