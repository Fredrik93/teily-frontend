export interface Teily {
    id: string;
    task: string;
    completed: boolean;
}

// Data object sent from backend
export interface TeilyModel {
    id: string;
    task: string;
    isCompleted: boolean;
}

// Convert backend model to frontend 
export function mapTeily(src: TeilyModel): Teily {
    return {
        id: src.id,
        task: src.task,
        completed: src.isCompleted
    }
}