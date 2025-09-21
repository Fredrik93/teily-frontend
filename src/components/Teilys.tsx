import { useEffect, useState, Fragment } from 'react';
import { mapTeily, Teily } from '../models/Teily';
import { NewTeily } from '../models/NewTeily';
import TeilyItem from './TeilyItem';
import { fetchTeilys, createTeily, updateTeily, deleteTeily } from '../services/TeilyService';
import { auth } from '../login/firebase';


function Teilys() {
    const [teilys, setTeilys] = useState<Teily[]>([]);
    const [task, setTask] = useState("");
    const [completedTeilys, setCompletedTeilys] = useState<Teily[]>([])

    const getTeilys = async () => {
        const user = auth.currentUser;
        if (!user) throw new Error("Not logged in")

        try {
            const token = await user.getIdToken()
            const data = await fetchTeilys(token);
            console.log("Fetched teilys", data);
            setTeilys(data.map(mapTeily))
            return data.map(mapTeily);
        } catch (err) {
            console.error("Component fetch error:", err);
        }
    };

    useEffect(() => {
        getTeilys();
    }, []);

    const handleDelete = async (id: string) => {
        const user = auth.currentUser;
        if (!user) throw new Error("Not logged in")

        try {
            const token = await user.getIdToken()
            await deleteTeily(token, id)
            await getTeilys()

        } catch (error) {
            console.error("Error deleting teily: ", error)
        }
    }
    const handleToggleCompleted = async (id: string, isCompleted: boolean) => {
        const user = auth.currentUser;
        if (!user) throw new Error("Not logged in")

        try {
            const token = await user.getIdToken()
            await updateTeily(token, id, isCompleted); // Call the service method to update the Teily
            await getTeilys(); // Refetch the list after updating a teily
            // Update the list of completed teilys 
        } catch (error) {
            console.error("Error updating teily:", error);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const teily: NewTeily = { task };
        const user = auth.currentUser;
        if (!user) throw new Error("Not logged in")
        const token = await user.getIdToken()
        try {

            await createTeily(token, teily);  // Call the service method to create the Teily
            setTask("");
            await getTeilys();  // Refetch the list after adding a new teily
        } catch (error) {
            console.error("Error creating teily:", error);
        }
    };

    const updateCompletedTeilys = (teilys: Teily[]) => {
        console.log("entered update teilys ", teilys)
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <input type="text" placeholder='A teily' value={task} onChange={(e) => setTask(e.target.value)}
                    required />
                <button type="submit">Create</button>
            </form>
            <div>
                <div>
                    {/* If all todos are done show a message " youre done! " */}
                    <h5> Todos </h5>
                    {teilys
                        .filter(teily => !teily.completed) // keep only not completed
                        .map((teily, i) => (
                            <TeilyItem
                                key={i}
                                teily={teily}
                                onToggleCompleted={handleToggleCompleted}
                                onDelete={handleDelete}
                            />
                        ))}
                </div>
                <div>
                    
                    <h5> Completed </h5>
                    {teilys
                        .filter(teily => teily.completed) // keep only completed
                        .map((teily, i) => (
                            <TeilyItem
                                key={i}
                                teily={teily}
                                onToggleCompleted={handleToggleCompleted}
                                onDelete={handleDelete}
                            />
                        ))}
                </div>
            </div>
        </Fragment>
    );
}


export default Teilys;
