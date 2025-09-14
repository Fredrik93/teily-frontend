export interface Teily {
    id: string;
    task: string;
    completed: boolean;
}

export type NewTeily = Omit<Teily, 'id'>;