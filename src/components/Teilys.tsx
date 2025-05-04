import { useEffect, useState, Fragment } from 'react';

type Teily = {
    name: String
}
function Teilys() {
    const [teilys, setTeilys] = useState<Teily[]>([]);
    const [name, setName] = useState("");

    useEffect(() => {
        fetchList()
    }, []);

    const fetchList = async () => {
        fetch('https://teily-backend-v1-latest.onrender.com/teily')
            .then(res => res.json())
            .then(data => {
                // console.log("Fetched teilys", data)
                setTeilys(data)
            })
            .catch(err => console.error('Fetch error:', err));

    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Teily object with name field
        const teily = { name };
        try {
            const response = await fetch("https://teily-backend-v1-latest.onrender.com/teily", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(teily),
            });
            if (response.ok) {
                setName("")
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
                <ul>
                    {teilys.map((t, i) => (
                        <li key={i}>{t.name}</li>

                    ))}
                </ul>
            </div>
        </Fragment>
    );
}

export default Teilys;
