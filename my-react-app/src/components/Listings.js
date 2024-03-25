import * as React from 'react';
import { Grid } from '@mui/material';
import ListingsCard from './ListingsCard';

const Listings = ({ units }) => {

    return (
        <Grid container spacing={2}>
            {units.map((unit, index) => (
                <Grid key={index} item lg={3} md={4} sm={6} xs={12}>
                    <ListingsCard
                        address={unit.address}
                        price={unit.price}
                        imagePath={unit.imagePath}
                        bed={unit.bed}
                        bath={unit.bath}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default Listings;
