import React, { useState } from 'react';
import CustomBarChart from './BarChart.js';
import RentalTypeDensityPieChart from './PieChart.js';
import VacancyCard from './VacancyCard.js';
import OneBed from './OneBed.js';
import TwoBed from './TwoBed.js';
import Listings from './Listings.js';
import unit1 from ".././unit_images/2107_928_HOMER_STREET.jpg";
import unit2 from ".././unit_images/303_1985_W_8TH_AVENUE.jpeg";
import unit3 from ".././unit_images/3F_2338_WESTERN_PARKWAY.jpeg";
import unit4 from ".././unit_images/311_1050_BROUGHTON_STREET.jpeg";
import NearestNeighbours from './NearestNeighbours.js';
import PriceCard from './PriceCard.js';


const Block = ({ request, response }) => {

    const [isSubmitted, setIsSubmitted] = useState(true);

    const units = [
        {
            address: "2107 928 HOMER STREET",
            city: "",
            price: "$2,950",
            imagePath: unit1,
            bed: 1,
            bath: 1
        },
        {
            address: "303 1985 W 8TH AVENUE",
            city: "",
            price: "$2,750",
            imagePath: unit2,
            bed: 1,
            bath: 1
        },
        {
            address: "3F 2338 WESTERN PARKWAY",
            city: "",
            price: "$3,850",
            imagePath: unit3,
            bed: 2,
            bath: 2
        },
        {
            address: "311 1050 BROUGHTON STREET",
            city: "",
            price: "$3,500",
            imagePath: unit4,
            bed: 1,
            bath: 1
        }
    ];
    return (
        <div>
            {isSubmitted && (
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <PriceCard request={request} response={response} />
                        <NearestNeighbours neighbours={response.neighbours} />
                        {/* <div style={{ display: 'flex', flexDirection: 'column', marginRight: '20px' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', marginRight: '20px' }}>
                                <Listings units={units} />
                                <VacancyCard />
                                <OneBed />
                                <TwoBed />
                            </div>
                        </div> */}
                    </div>

                    {/* Spacer div to push the bottom content down */}
                    {/* <div style={{ flex: 1 }}></div> */}

                    {/* Bottom content for bar and pie charts */}
                    {/* <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <CustomBarChart />
                        <RentalTypeDensityPieChart />
                    </div> */}
                </div>
            )}
        </div>
    );
};

export default Block;
