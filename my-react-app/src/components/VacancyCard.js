import * as React from 'react';
import { Card, CardContent, Typography, Box, IconButton } from '@mui/material';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const VacancyCard = () => {
    // Hardcoded values 
    const vacancies = 560;
    const percentChange = 12;

    return (
        <Card sx={{ margin: '20px', minWidth: 220, maxHeight: 150, borderRadius: '16px', boxShadow: 3 }}>
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                        <Typography sx={{ fontSize: 14, color: 'text.secondary', fontWeight: 'bold' }}>
                            VACANCIES
                        </Typography>
                        <Typography variant="h3" component="div">
                            {vacancies}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', color: 'success.main' }}>
                            {/* <ArrowUpwardIcon /> */}
                            <Typography sx={{ ml: 0.5 }}>
                                Up {percentChange}% Since last month
                            </Typography>
                        </Box>
                    </Box>
                    {/* <IconButton color="primary" sx={{ bgcolor: 'primary.light', '&:hover': { bgcolor: 'primary.dark' }, borderRadius: '50%' }}>
                        <Typography sx={{ color: 'white', fontSize: '1.25rem' }}>$</Typography>
                    </IconButton> */}
                </Box>
            </CardContent>
        </Card>
    );
}

export default VacancyCard;
