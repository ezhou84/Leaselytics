import React from 'react';
import NearestNeighbours from './NearestNeighbours.js';
import PriceCard from './PriceCard.js';
import { Button } from '@mui/material';


const Block = ({ request, response, appendPrediction, parentPrediction, savedPredictions }) => {

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {parentPrediction ? (
                    <div>
                            <PriceCard request={savedPredictions[parentPrediction].req} response={{predictedPrice: savedPredictions[parentPrediction].predictedPrice}} />
                            <NearestNeighbours neighbours={savedPredictions[parentPrediction].neighbours} />
                    </div>
                ) : (
                    <div>
                        <PriceCard request={request} response={response} />
                        <NearestNeighbours neighbours={response.neighbours} />
                    </div>
                )}
                <Button
                    variant="contained"
                    sx={{
                    my: 2,
                    backgroundColor: '#4877ee',
                    '&:hover': {
                        backgroundColor: '#1e3264'
                    },
                    }}
                    onClick={() => {
                        appendPrediction(response);
                    }}>
                    <b>Save Prediction</b>
                </Button>
            </div>
        </div>
    );
};

export default Block;
