import * as React from 'react';
import { Card, CardContent, Typography, Box, IconButton } from '@mui/material';

const PriceCard = ({ request, response }) => {
    // Hardcoded values
    const price = response
    console.log(`request: ${request}`)
    console.log(`response: ${response}`)

    return (
        <Card sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', margin: '20px', alignContent: 'center', borderRadius: '16px', boxShadow: 3 }}>
            <CardContent>
                <Box sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ alignItems: 'center' }}>
                        <Typography sx={{ fontSize: 14, color: 'text.secondary', fontWeight: 'bold' }}>
                            PREDICTED LISTING PRICE
                        </Typography>
                        <Typography variant="h2" component="div">
                            {request.location}
                        </Typography>
                        <Typography variant="h3" component="div">
                            {price}
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}

export default PriceCard
