import * as React from 'react';
import { BarChart } from '@mui/x-charts';

const rentalData = [
    { month: 'Jan', price: 1200 },
    { month: 'Feb', price: 1250 },
    { month: 'Mar', price: 1300 },
    { month: 'Apr', price: 1350 },
    { month: 'May', price: 1400 },
    { month: 'Jun', price: 1450 },
    { month: 'Jul', price: 1500 },
    { month: 'Aug', price: 1550 },
    { month: 'Sep', price: 1600 },
    { month: 'Oct', price: 1650 },
    { month: 'Nov', price: 1700 },
    { month: 'Dec', price: 1750 },
];

const accentColor = '#4877ee';

const dataset = rentalData.map(data => ({ month: data.month, value: data.price }));

function CustomBarChart() {
    return (
        <div>

            <BarChart
                dataset={dataset}
                xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                series={[
                    {
                        color: accentColor,
                        label: 'Average Rental Price',
                        dataKey: 'value',
                        valueFormatter: value => `$${value.toLocaleString()}`,
                    },
                ]}
                width={800}
                height={400}
            />

        </div>

    );
}

export default CustomBarChart;
