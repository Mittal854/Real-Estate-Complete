import './heading.css'

function Heading() {
    return (
        <>
        <div>
            <div className='heading1'>
                    <h2 class="h1">The Most Rental Listings</h2>
                    <p className='p1'>Choose from over 1 million apartments, houses, condos, and townhomes for rent.</p>
                </div>

                <div class="container">
                    <div class="listing">
                        <img src="https://img.etimg.com/thumb/width-420,height-315,imgsize-51014,resizemode-75,msid-95359901/industry/services/property-/-cstruction/housing-sale-increased-by-24-during-july-sep-report/housing.jpg" alt="" />
                        <div class="details">
                            <h2>Renting made simple</h2>
                            <p>Browse the highest quality listings, apply online, sign your lease, and even pay your rent from any device.</p>
                        </div>
                    </div>
                </div>
        </div>
        <div>
        

            <div class="container">
                <div class="listing">
                    <img src="https://media.istockphoto.com/id/1409298953/photo/real-estate-agents-shake-hands-after-the-signing-of-the-contract-agreement-is-complete.jpg?s=612x612&w=0&k=20&c=SFybbpGMB0wIoI0tJotFqptzAYK_mICVITNdQIXqnyc=" alt="" />
                    <div class="details">
                        <h2>Discover Homeownership on HomeHaven</h2>
                        <p>Stay up-to-date using our tips and guides on rent payments , leasing , management solutions , and more....</p>
                    </div>
                </div>
            </div>
    </div>
    <div>
    

        <div class="container">
            <div class="listing">
                <img src="https://propertylisthub.com/wp-content/uploads/2021/07/Vintage1-1-500x328.jpg" alt="" />
                <div class="details">
                    <h2>Explore Your Options</h2>
                    <p>Connect with more than 75 million renters looking for new homes using our excellent marketing platform.</p>
                </div>
            </div>
        </div>
</div>
</>
    );
};

export default Heading;