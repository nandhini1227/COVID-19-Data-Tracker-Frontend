

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const CovidTracker = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCovidData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/historical-data');
                const { cases } = response.data;

                const labels = Object.keys(cases);
                const caseData = Object.values(cases);

                setData({
                    labels,
                    datasets: [
                        {
                            label: 'COVID-19 Cases',
                            data: caseData,
                            borderColor: 'rgba(75,192,192,1)',
                            fill: false,
                        },
                    ],
                });
            } catch (error) {
                setError('Failed to fetch data');
            } finally {
                setLoading(false);
            }
        };

        fetchCovidData();
    }, []);

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>{error}</h2>;

    return (
        <div>
            <h2>COVID-19 Historical Data Tracker</h2>
            <Line data={data} />
        </div>
    );
};

export default CovidTracker;
