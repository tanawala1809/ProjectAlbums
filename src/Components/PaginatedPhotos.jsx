import React from "react";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "../css/AlbumDetails.css";
import "../css/PaginatedPhotos.css";

export default function PaginatedPhotos(props) {
    const { photos, title, name } = props;

    const [currentPhotos, setcurrentPhotos] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [startOffSet, setStartOffSet] = useState(0);
    const [endOffset, setEndOffSet] = useState(0);

    const photosPerPage = 9;

    useEffect(() => {
        let currentEndOffset = startOffSet + photosPerPage;
        console.log(`Loading items from ${startOffSet} to ${currentEndOffset}`);
        setcurrentPhotos(photos.slice(startOffSet, endOffset));
        setPageCount(Math.ceil(photos.length / photosPerPage));
        setEndOffSet(currentEndOffset);
    }, [startOffSet, photosPerPage, endOffset, photos]);

    const handlePageClick = (event) => {
        const newOffset = event.selected * photosPerPage % photos.length;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setStartOffSet(newOffset);
    };

    return (
        <>
            <h3 style={{ textAlign: "center", marginTop: "20px" }}>Album: {title}</h3>
            <h5 style={{ textAlign: "center", marginTop: "10px", marginBottom: "25px" }}>Uploaded By: {name}</h5>
            <div className="main-container">
                <div className="grid-container">
                    {
                        (currentPhotos !== null) ? (
                            currentPhotos.map((currentPhoto) => {
                                return (
                                    <>
                                        <div className="grid-item">
                                            <img className="image" src={currentPhoto["url"]} />
                                            <br />
                                            <div className="textDecoration">
                                                <strong>{currentPhoto["title"]}</strong>
                                            </div>
                                        </div>
                                    </>
                                );
                            })
                        ) : (
                            <>
                            </>
                        )
                    }
                </div>
            </div>

            <ReactPaginate
                className="paginatedPhotos"
                nextLabel="Next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={4}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="< Previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </>
    );
}