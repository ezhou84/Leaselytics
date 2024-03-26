import * as React from 'react';
import { PieChart } from '@mui/x-charts';

function RentalTypeDensityPieChart() {
    const rentalTypeData = [
        { id: 0, value: 40, label: 'Apartment/Condo' },
        { id: 1, value: 30, label: 'House' },
        { id: 2, value: 15, label: 'Room Only' },
        { id: 3, value: 15, label: 'Townhouse' },
    ];

    const colors = ['#4877ee', '#ffcc00', '#ff6b6b', '#8fd14f'];

    return (
        <PieChart
            series={[
                {
                    data: rentalTypeData,
                },
            ]}
            colors={colors}
            width={600}
            height={300}
        />
    );
}

export default RentalTypeDensityPieChart;
