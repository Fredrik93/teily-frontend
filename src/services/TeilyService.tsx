import {  Teily } from '../models/Teily';
import { NewTeily } from '../models/NewTeily';
// The local environment 
const API_URL = 'http://localhost:8080/teilys'
// The test environment 
//const API_URL = 'https://teily-backend-0-1.onrender.com/teilys';
// The production environment 
//const API_URL = 'https://teily-backend.onrender.com/teilys';


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
export const createTeily = async (teily: NewTeily) => {
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


// Update a teily's isCompleted status. 
export const updateTeily = async (id: string, isCompleted: boolean) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(isCompleted),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText);
        }
        console.log("Teily updated successfully" + id + " completed: " + isCompleted);
        return await response.json(); // You could return the updated teily, if needed
    } catch (error) {
        console.error('Service update error:', error);
        throw error;
    }
};

export const deleteTeily = async (id: string) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText);
        }

        console.log("Teily deleted successfully: " + id);
    } catch (error) {
        console.error('Service delete error:', error);
        throw error;
    }
};
 export const getTeilys = async () => {
        try {
            const data = await fetchTeilys();
            console.log("Fetched teilys", data);
            return await data
        } catch (err) {
            console.error("Component fetch error:", err);
        }
    };