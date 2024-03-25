import React from 'react'
import CustomBarChart from './BarChart'
import RentalTypeDensityPieChart from './PieChart'
import VacancyCard from './VacancyCard'
import OneBed from './OneBed'
import TwoBed from './TwoBed'



const Block = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                <VacancyCard />
                <OneBed />
                <TwoBed />
            </div>
            {/* ... */}
            <div style={{ flex: 1 }}></div>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <CustomBarChart />
                <RentalTypeDensityPieChart />
            </div>
        </div>
    );
}

export default Block
