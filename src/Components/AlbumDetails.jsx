import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PaginatedPhotos from "./PaginatedPhotos";

export default function AlbumDetails() {
    const location = useLocation();
    const { title, id, name } = location.state;
    const [photos, setPhotos] = useState([]);
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
            .then((data) => {
                return data.json();
            })
            .then((data) => {
                setPhotos(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id]);

    return (
        <>
            <PaginatedPhotos photos={photos} title={title} name={name} />
        </>
    )
}