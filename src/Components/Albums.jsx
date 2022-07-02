import Album from "./Album";

export default function Albums(props) {
    const { albums } = props;
    const { users } = props;

    return (
        <>
            {
                (albums) ? (
                    <>
                        {albums.map((currentAlbum) => {
                            return (
                                <Album key={currentAlbum["id"]} currentAlbum={currentAlbum} users={users}></Album>
                            )
                        })}
                    </>
                ) : (
                    <>
                    </>
                )}
        </>
    );
}