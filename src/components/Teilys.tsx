import { useEffect, useState, Fragment } from 'react';
import { Teily } from '../models/Teily';
import TeilyItem from './TeilyItem';
import { fetchTeilys, createTeily, updateTeily } from '../services/TeilyService';


function Teilys() {
    const [teilys, setTeilys] = useState<Teily[]>([]);
    const [id, setId] = useState("");
    const [task, setTask] = useState("");
    const [completed, setCompleted] = useState(false)

    const getTeilys = async () => {
        try {
            const data = await fetchTeilys();
            console.log("Fetched teilys", data);
            setTeilys(data);
        } catch (err) {
            console.error("Component fetch error:", err);
        }
    };

    useEffect(() => {
        getTeilys();
    }, []);

    const handleToggleCompleted = async (id: string, isCompleted: boolean) => {
        try {
            await updateTeily(id, isCompleted); // Call the service method to update the Teily
            await getTeilys(); // Refetch the list after updating a teily
        } catch (error) {
            console.error("Error updating teily:", error);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const teily = { id, task, completed };

        try {
            await createTeily(teily);  // Call the service method to create the Teily
            setTask("");
            setCompleted(false);
            await getTeilys();  // Refetch the list after adding a new teily
        } catch (error) {
            console.error("Error creating teily:", error);
        }
    };

    return (
        <Fragment>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <input type="text" placeholder='A teily' value={task} onChange={(e) => setTask(e.target.value)}
                    required />
                <button type="submit">Create</button>
            </form>
            <div>

                {teilys.map((teily, i) => (
                    <TeilyItem key={i} teily={teily} onToggleCompleted={handleToggleCompleted} />

                ))}

            </div>
        </Fragment>
    );
}

export default Teilys;
