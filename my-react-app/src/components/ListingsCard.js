import * as React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const ListingsCard = ({ address, price, imagePath, bed, bath }) => {

    return (
        <Card sx={{ boxShadow: 3 }}>
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                        <CardMedia
                            component="img"
                            alt="Rental Listing"
                            image={imagePath}
                            style={{ borderRadius: 16 }}
                        />
                        <Typography variant="h3" component="div">
                            {price}
                        </Typography>
                        <Typography component="div">
                            {address}
                        </Typography>
                        <Typography component="div">
                            {bed} bedrooms, {bath} bathrooms
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default ListingsCard;
