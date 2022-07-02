import { useState } from "react";
import { useEffect } from "react"
import PaginatedAlbums from "./Components/PaginatedAlbums";

export default function App() {
    const [albums, setAlbums] = useState([]);
    const [users, setUsers] = useState([]);

    async function fetchUrl(url, index) {
        const response = await fetch(url);
        const data = await response.json();
        
        if (index === 0) {
            setAlbums(data);
        } else if (index === 1) {
            setUsers(data);
        }
    }

    useEffect(() => {
        const urls = [
            "https://jsonplaceholder.typicode.com/albums/",
            "http://jsonplaceholder.typicode.com/users"
        ];
        
        urls.map((currentURL, index) => {
            fetchUrl(currentURL, index);
        })
    }, []);

    return (
        <>
            <h2 style={{ textAlign: "center", marginTop: "25px" }}>List of Albums</h2>
            <div>
                {
                    (albums.length !== 0) ? (
                        <>
                            <PaginatedAlbums albums={albums} users={users} />
                        </>
                    ) : (
                        <>
                        </>
                    )
                }
            </div>
        </>
    )
}