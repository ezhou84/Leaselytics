import * as React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

const PriceCard = ({ request, response }) => {
    const price = response.price;

    return (
        <Card sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', margin: '20px', alignContent: 'center', borderRadius: '16px', boxShadow: 3 }}>
            <CardContent>
                <Box sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ alignItems: 'center' }}>
                        <Typography sx={{ fontSize: 24, color: 'text.secondary', fontWeight: 'bold' }}>
                            PREDICTED LISTING PRICE
                        </Typography>
                        <Typography variant="h2" component="div">
                            <b>${price}/month</b>
                        </Typography>
                        <Typography variant="h4" component="div">
                            {request.location}
                        </Typography>
                        <Typography variant="h4" component="div">
                            {request.type}, {request.bed} Bed, {request.bath} Bath, {request.sqft} Sqft
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default PriceCard;
