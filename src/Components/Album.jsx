import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stack } from "react-bootstrap";
import AlbumTitle from "./AlbumTitle";

export default function Album(props) {
    const { currentAlbum } = props;
    const { users } = props;

    const [name, setName] = useState("");
    const navigate = useNavigate();

    const navigateToAlbumDetails = () => {
        navigate(`/album/${currentAlbum["id"]}`, { state: { id: currentAlbum["id"], title: currentAlbum["title"], name: users[currentAlbum["userId"] - 1].name, userId: currentAlbum["userId"] } });
    };

    useEffect(() => {
        if (users.length !== 0) {
            setName(users[currentAlbum["userId"] - 1].name);
        }
    }, [users, name, currentAlbum]);

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "white", marginLeft: "400px", marginRight: "400px" }}>
                <Stack gap={3} style={{ marginTop: "20px" }}>
                    <div className="bg-success">
                        <AlbumTitle title={currentAlbum["title"]}></AlbumTitle>
                        <Stack direction="horizontal" gap={5}>
                            <div>
                                <h6 style={{ paddingLeft: "10px" }}>User: {name}</h6>
                            </div>

                            <div className="ms-auto">
                                <button style={{ color: "white" }} className="btn bg-transparent" onClick={navigateToAlbumDetails}>VIEW MORE</button>
                            </div>
                        </Stack>
                    </div>
                </Stack>
            </div>
        </>
    )
}