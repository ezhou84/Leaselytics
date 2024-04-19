import * as React from 'react';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ListingsCard from './ListingsCard.js';

const NearestNeighbours = ({ neighbours }) => {
    console.log(neighbours);

    return (
        <Card sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', margin: '20px', alignContent: 'center', borderRadius: '16px', boxShadow: 3 }}>
            <CardContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: 24, color: 'text.secondary', fontWeight: 'bold', mb: 2 }}>
                        MOST SIMILAR UNITS
                    </Typography>
                    <Grid container spacing={2} justifyContent="center" alignItems="stretch" sx={{ display: 'flex', flexWrap: 'wrap', height: '100%' }}>
                        {neighbours.map((unit, index) => (
                            <Grid
                                item
                                key={index}
                                xs={12}
                                sm={12}
                                md={6}
                                lg={4}
                                xl={4}
                            >
                                <ListingsCard
                                    address={unit.address}
                                    price={unit.price}
                                    sqft={unit.sqft}
                                    bed={unit.bed}
                                    bath={unit.bath}
                                    type={unit.type}
                                    neighbourhood={unit.neighbourhood}
                                    imagePath={unit.link}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </CardContent>
        </Card>
    );
};

export default NearestNeighbours;
