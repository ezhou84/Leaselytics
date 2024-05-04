import * as React from 'react';
import { Button, Box } from '@mui/material';
import ListingsCard from './ListingsCard.js';

const Listings = ({ units }) => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const handleNext = () => {
        setActiveIndex((prevActiveIndex) => (prevActiveIndex + 1) % units.length);
    };

    const handlePrev = () => {
        setActiveIndex((prevActiveIndex) => (prevActiveIndex - 1 + units.length) % units.length);
    };

    return (
        <Box sx={{ width: 500, flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', my: 2 }}>
            <Box sx={{ flexGrow: 1, position: 'relative', width: '70%', height: '70%' }}>
                {units.map((unit, index) => (
                    <Box
                        key={index}
                        position={index === activeIndex ? 'relative' : 'absolute'}
                        top={0}
                        left={0}
                        right={0}
                        bottom={0}
                        sx={{ transition: 'opacity 0.5s', opacity: index === activeIndex ? 1 : 0, width: '100%', height: '100%' }}
                    >
                        {index === activeIndex && (
                            <ListingsCard
                                address={unit.address}
                                price={unit.price}
                                imagePath={unit.imagePath}
                                bed={unit.bed}
                                bath={unit.bath}
                            />
                        )}
                    </Box>
                ))}
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', mt: 2 }}>
                <Button onClick={handlePrev}>&lt;</Button>
                <Button onClick={handleNext}>&gt;</Button>
            </Box>
        </Box>
    );
};

export default Listings;
