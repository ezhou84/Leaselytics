import Header from "./Header.js";
import FiltersForm from "./FiltersForm.js";
import Block from "./Block.js";

import React, { useState } from "react";

function Home() {
    const [request, setRequest] = useState({});
    const [response, setResponse] = useState({});
    const [parentPrediction, setParentPrediction] = useState(null);
    const [savedPredictions, setSavedPredictions] = useState({});

    const handleResponse = (req, newResponse) => {
        setRequest(req);
        setResponse(newResponse);
        setParentPrediction(null);
    };
    
      const handleLocationChange = (headerPrediction) => {
        setParentPrediction(headerPrediction);
    };
    
      const appendPrediction = (newPrediction) => {
        setSavedPredictions((prevPredictions) => ({
          ...prevPredictions,
          [newPrediction.req.location]: newPrediction,
        }));
    };

    return (
        <div
            className="container"
            style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "80%",
            }}
        >
            <Header
                onLocationChange={handleLocationChange}
                locations={Object.keys(savedPredictions)}
            />
            <FiltersForm onResponse={handleResponse} />
            {Object.keys(response).length > 0 && (
                <div className="block">
                    <Block
                        request={request}
                        response={response}
                        appendPrediction={appendPrediction}
                        parentPrediction={parentPrediction}
                        savedPredictions={savedPredictions}
                    />
                </div>
            )}
        </div>
    );
}

export default Home;
