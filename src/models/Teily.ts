export interface Teily {
    id: string;
    task: string;
    isCompleted: boolean;
}

export type NewTeily = Omit<Teily, 'id'>;