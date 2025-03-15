import { useState, useEffect } from 'react';
import DataManager from '../assets/utils/DataManager';

export const useResumeData = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                // Check if data is already in session storage
                if (DataManager.hasData('person')) {
                    setLoading(false);
                    return;
                }

                // If not, fetch and initialize
                const response = await fetch('/resume-data.json'); // Adjust path as needed
                const resumeData = await response.json();
                DataManager.initialize(resumeData);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        loadData();
    }, []);

    return {
        person: DataManager.getPerson(),
        experience: DataManager.getExperience(),
        skills: DataManager.getSkills(),
        loading,
        error
    };
};
