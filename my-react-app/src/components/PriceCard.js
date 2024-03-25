import * as React from 'react';
import { Card, CardContent, Typography, Box, IconButton } from '@mui/material';

const PriceCard = () => {
    // Hardcoded values
    const price = 1500

    return (
        <Card sx={{ margin: '20px', width: 748, minHeight: 280, alignContent: 'center', borderRadius: '16px', boxShadow: 3 }}>
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                        <Typography sx={{ fontSize: 14, color: 'text.secondary', fontWeight: 'bold' }}>
                            Predicted Listing Price
                        </Typography>
                        <Typography variant="h3" component="div">
                            ${price}
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}

export default PriceCard
