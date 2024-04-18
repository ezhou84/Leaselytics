import * as React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const ListingsCard = ({ address, price, imagePath, sqft, bed, bath, type }) => {

    return (
        <Card sx={{ boxShadow: 3, display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexGrow: 1 }}>
                    <Box sx={{ wordWrap: 'break-word', overflowWrap: 'break-word', width: '100%' }}>
                        <CardMedia
                            component="img"
                            alt="Rental Listing"
                            image={imagePath}
                            style={{ borderRadius: 16 }}
                        />
                        <Typography variant="h3" component="div" sx={{ width: '100%' }}>
                            {price}
                        </Typography>
                        <Typography component="div" sx={{ width: '100%' }}>
                            {address}
                        </Typography>
                        <Typography component="div" sx={{ width: '100%' }}>
                            {type}, {bed}, {bath}, {sqft}
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default ListingsCard;
