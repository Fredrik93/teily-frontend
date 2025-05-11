import { Teily } from '../models/Teily';

const API_URL = 'http://localhost:8080/teily';


// Fetch all teilys
export const fetchTeilys = async (): Promise<Teily[]> => {
    try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error('Failed to fetch teilys');
        return await res.json();
    } catch (error) {
        console.error('Service fetch error:', error);
        throw error;
    }
};


// Create a new teily
export const createTeily = async (teily: Teily) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(teily),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText);
        }

        return await response.json(); // You could return the new teily, if needed
    } catch (error) {
        console.error('Service create error:', error);
        throw error;
    }
};