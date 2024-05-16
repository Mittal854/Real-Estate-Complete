import './homePage.css'
import Heading from './heading'
import SearchBar from '../../components/searchbar/SearchBar'

function HomePage() {
    return (
        <div className='homepageMain' >
            <div className='homePage'>
                <div className="textcontainer">
                    <div className="wrapper">
                        <h1 className="title">
                            Find Real Estate &  Get Your Dream Place
                        </h1>
                        <p className='picText'>
                            Welcome to <b>HomeHaven</b>, where your dream home awaits! Discover a vast array of exquisite properties tailored to your lifestyle and preferences. Whether you're searching for a chic urban apartment or a sprawling countryside estate, we are here to guide you every step of the way. Start your journey towards finding the perfect home today!
                        </p>
                        {/* <SearchBar /> */}
                        {/* <div className="boxes">
                            <div className="box">
                                <h1>16+</h1>
                                <h2>Years Of Experience</h2>
                            </div>
                            <div className="box">
                                <h1>200</h1>
                                <h2>Award Gained</h2>
                            </div>
                            <div className="box">
                                <h1>2000</h1>
                                <h2>Property Ready</h2>
                            </div>
                        </div> */}
                    </div>
                </div>
                {/* <div className="imgcontainer">
                <img src="/bg.png" alt="" />
            </div> */}
            </div>

            <Heading/>

        </div>

    )
}

export default HomePage