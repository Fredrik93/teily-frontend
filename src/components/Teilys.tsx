import { useEffect, useState, Fragment } from 'react';
import { Teily } from '../models/Teily';
import TeilyItem from './TeilyItem';
import { fetchTeilys, createTeily } from '../services/TeilyService';


function Teilys() {
    const [teilys, setTeilys] = useState<Teily[]>([]);
    const [name, setName] = useState("");
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


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const teily = { name, completed };

        try {
            await createTeily(teily);  // Call the service method to create the Teily
            setName("");
            setCompleted(false);
            await getTeilys();  // Refetch the list after adding a new teily
        } catch (error) {
            console.error("Error creating teily:", error);
        }
    };

    return (
        <Fragment>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <input type="text" placeholder='A teily' value={name} onChange={(e) => setName(e.target.value)}
                    required />
                <button type="submit">Create</button>
            </form>
            <div>

                {teilys.map((teily, i) => (
                    <TeilyItem key={i} teily={teily} />

                ))}

            </div>
        </Fragment>
    );
}

export default Teilys;
