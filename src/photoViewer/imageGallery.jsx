import ImageUrls from './imageSelector';

function ImageGallery({ setURL }) {
    const galleryImgs = ImageUrls.map((url, i) =>
        <img role="thumbnail" key={i} data-testid={i} className="thumbnail" src={url} onClick={() => setURL(url)} />
    );

    return (
        <div>
            {galleryImgs}
        </div>
    );
}

export { ImageGallery };