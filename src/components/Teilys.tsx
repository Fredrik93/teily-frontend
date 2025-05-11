import { useEffect, useState, Fragment } from 'react';
import { Teily } from './Teily';
import TeilyItem from './TeilyItem';


function Teilys() {
    const [teilys, setTeilys] = useState<Teily[]>([]);
    const [name, setName] = useState("");
    const [completed, setCompleted] = useState(false)

    useEffect(() => {
        fetchList()
    }, []);

    const fetchList = async () => {
        // fetch('https://teily-backend-v1-latest.onrender.com/teily')
        fetch('http://localhost:8080/teily')

            .then(res => res.json())
            .then(data => {
                console.log("Fetched teilys", data)
                setTeilys(data)
            })
            .catch(err => console.error('Fetch error:', err));

    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Teily object with name field
        const teily = { name, completed };
        try {
            // const response = await fetch("https://teily-backend-v1-latest.onrender.com/teily", {
            const response = await fetch("http://localhost:8080/teily", {

                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(teily),
            });
            if (response.ok) {
                setName("")
                setCompleted(false)
                await fetchList()
            } else {
                const errorText = await response.text()
                console.error("Error: ", errorText)
            }
        } catch (error) {
            console.error("error:", error)
        }
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <input type="text" placeholder='A teily' value={name} onChange={(e) => setName(e.target.value)}
                    required />
                <button type="submit">Create</button>
            </form>
            <div>

                {teilys.map((t, i) => (
                    <TeilyItem key={i} name={t.name} completed={t.completed} />
                    //<li key={i}>  {t.name} - completed: {t.completed ? "Yes" : "No"}</li>

                ))}

            </div>
        </Fragment>
    );
}

export default Teilys;
