import { useEffect, useState } from 'react';

type Teily = {
    name: String
}
function Teilys() {
    const [teilys, setTeilys] = useState<Teily[]>([]);

    useEffect(() => {
        fetch('https://teily-backend-v1-latest.onrender.com/teily')
            .then(res => res.json())
            .then(data => {
                console.log("Fetched teilys", data)
                setTeilys(data)
            })
            .catch(err => console.error('Fetch error:', err));
    }, []);

    return (
        <div>
            <h2>Teilys</h2>
            <ul>
                {teilys.map((t, i) => (
                    <li key={i}>{t.name}</li>

                ))}
            </ul>
        </div>
    );
}

export default Teilys;
