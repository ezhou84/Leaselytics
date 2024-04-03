import * as React from 'react';
import { Card, CardContent, Typography, Box, IconButton } from '@mui/material';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const VacancyCard = () => {
    // Hardcoded values 
    const vacancies = 560;
    const percentChange = 12;

    return (
        <Card sx={{ margin: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column', minWidth: 220, maxHeight: 220, borderRadius: '16px', boxShadow: 3 }}>
            <CardContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography sx={{ fontSize: 14, color: 'text.secondary', fontWeight: 'bold' }}>
                            VACANCIES
                        </Typography>
                        <Typography variant="h3" component="div">
                            {vacancies}
                        </Typography>
                        <Box sx={{ alignItems: 'center', color: 'success.main' }}>
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
