import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import AlbumDetails from "./Components/AlbumDetails";

export default function RoutesFile() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}></Route>
                    <Route path="/album/:id" element={<AlbumDetails />} />
                    <Route path="*" element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                    />
                </Routes>
            </BrowserRouter>
        </>
    )
}