import ImageUrls from './imageSelector';

function Gallery({setCount}) {

    const galleryImgs = ImageUrls.map((url, i) => <img className="thumbnail" src={url} onClick={() => setCount(i)} />);

    return (
        <div>
            {galleryImgs}
        </div>
    );
}

export { Gallery };