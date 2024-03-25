import React from 'react'
import CustomBarChart from './BarChart'
import RentalTypeDensityPieChart from './PieChart'
import VacancyCard from './VacancyCard'
// import BarChartMockup from './BarChart'



const Block = () => {
    return (
        <div>
            <CustomBarChart></CustomBarChart>
            <RentalTypeDensityPieChart></RentalTypeDensityPieChart>
            <VacancyCard></VacancyCard>
        </div>
    )
}

export default Block
