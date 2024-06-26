import * as React from 'react';
import { Card, CardContent, Typography, Box, IconButton } from '@mui/material';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


const TwoBed = () => {
    // Hardcoded values
    const twobeds = 130;
    const percentChange = -5;

    return (
        <Card sx={{ margin: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column', minWidth: 220, maxHeight: 220, alignContent: 'center', borderRadius: '16px', boxShadow: 3 }}>
            <CardContent>
                <Box sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ alignItems: 'center' }}>
                        <Typography sx={{ fontSize: 14, color: 'text.secondary', fontWeight: 'bold' }}>
                            TWO BEDROOMS
                        </Typography>
                        <Typography variant="h3" component="div">
                            {twobeds}
                        </Typography>
                        <Box sx={{ alignItems: 'center', color: 'error.main' }}> {/* Use `error.main` for red color */}
                            {/* <ArrowDownwardIcon /> */}
                            <Typography sx={{ ml: 0.5 }}>
                                Down {Math.abs(percentChange)}% Since last month
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}

export default TwoBed
