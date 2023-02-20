import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import TourPackage from '../TourPackage/TourPackage';

const TourPackages = () => {
    const [packages, setPackages]= useState([]);
    console.log(packages);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/tour-packages`) 
            .then(res => res.json())
            .then(data => {setPackages(data)
                // const reverseData = data.slice().reverse();
                // setServices(reverseData.slice(0, 8));
            });
    }, []);
    return (
        <div className="mb-4">
		<div class="text-center bg-white px-4 py-3 mb-3">
						<h1 class="text-18 text-bold text-center border-bottom pb-3 mb-3">Travel Bangladesh : <span class="text-red">Tour Packages</span></h1>
						<p> Discovery Bangladesh operate various regular, customize and special Bangladesh tour packages round the year. Which include  <br /> luxury Bangladesh tour packages, City Sightseeing and River Cruising tour packages, Archaeological Sites & Cultural Tour, <br /> Adventure & Wildlife tours and many more tour packages. <br /> Come and explore Bangladesh with us and Discover Bangladesh Naturally! </p>
						<p><strong>Tour Packages From Discovery Bangladesh</strong></p>
						<p> We operate tailor made custom tour packages as well as regular tour packages. You also can fix several tour packages together <br /> and make your tour longer and smother. Similarly, if you want relaxed tour, you can split our regular tour packages. </p>
					</div>

        <Container>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4">

                {packages.map(tourpackage => <TourPackage key={tourpackage._id} tourpackage={tourpackage} />)}
            </div>
        </Container>
    </div>
    );
};

export default TourPackages;

