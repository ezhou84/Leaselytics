import * as React from 'react';
import { Card, CardContent, Typography, Box, IconButton } from '@mui/material';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const OneBed = () => {
    // Hardcoded values 
    const onebeds = 380;
    const percentChange = 5;

    return (
        <Card sx={{ margin: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column', minWidth: 220, maxHeight: 220, borderRadius: '16px', boxShadow: 3 }}>
            <CardContent>
                <Box sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ alignItems: 'center' }}>
                        <Typography sx={{ fontSize: 14, color: 'text.secondary', fontWeight: 'bold' }}>
                            ONE BEDROOMS
                        </Typography>
                        <Typography variant="h3" component="div">
                            {onebeds}
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

export default OneBed
