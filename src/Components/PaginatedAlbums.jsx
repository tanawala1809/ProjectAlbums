import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Albums from "./Albums";
import "../css/PaginatedAlbums.css";

export default function PaginatedAlbums(props) {
    const { albums } = props;
    const { users } = props;

    const [currentAlbums, setCurrentAlbums] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [startOffSet, setStartOffSet] = useState(0);
    const [endOffset, setEndOffSet] = useState(0);

    const albumsPerPage = 5;

    useEffect(() => {
        let currentEndOffset = startOffSet + albumsPerPage;
        console.log(`Loading items from ${startOffSet} to ${currentEndOffset}`);
        setCurrentAlbums(albums.slice(startOffSet, endOffset));
        setPageCount(Math.ceil(albums.length / albumsPerPage));
        setEndOffSet(currentEndOffset);
    }, [startOffSet, albumsPerPage, endOffset]);

    const handlePageClick = (event) => {
        const newOffset = event.selected * albumsPerPage % albums.length;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setStartOffSet(newOffset);
    };

    return (
        <>
            <Albums albums={currentAlbums} users={users}></Albums>
            <ReactPaginate
                className="paginatedAlbums"
                nextLabel="Next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed = {4}
                marginPagesDisplayed = {2}
                pageCount = {pageCount}
                previousLabel = "< Previous"
                pageClassName = "page-item"
                pageLinkClassName = "page-link"
                previousClassName = "page-item"
                previousLinkClassName = "page-link"
                nextClassName = "page-item"
                nextLinkClassName = "page-link"
                breakLabel = "..."
                breakClassName = "page-item"
                breakLinkClassName = "page-link"
                containerClassName = "pagination"
                activeClassName = "active"
                renderOnZeroPageCount = {null}
            />
        </>
    )
}