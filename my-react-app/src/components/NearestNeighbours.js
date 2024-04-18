import * as React from 'react';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ListingsCard from './ListingsCard.js';

const NearestNeighbours = ({ neighbours }) => {
    console.log(neighbours);

    return (
        <Card sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', margin: '20px', alignContent: 'center', borderRadius: '16px', boxShadow: 3 }}>
            <CardContent>
                <Box sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: 20, color: 'text.secondary', fontWeight: 'bold', mb: 2 }}>
                        MOST SIMILAR UNITS
                    </Typography>
                    <Grid container spacing={2}>
                        {neighbours.map((unit, index) => (
                            <Grid
                                item
                                key={index}
                                xs={12}
                                sm={6}
                                md={6}
                                lg={4}
                                xl={4}
                            >
                                <ListingsCard
                                    address={unit.address}
                                    price={unit.price}
                                    // imagePath={unit.imagePath}
                                    sqft={unit.sqft}
                                    bed={unit.bed}
                                    bath={unit.bath}
                                    type={unit.type}
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
