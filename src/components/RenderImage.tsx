import Data from "../data.type";
import Spinner from "./Spinner";
import "./RenderImage.css";

interface RenderImageProps {
  imageUrls: Data[];
  loading: boolean;
}

function RenderImage({ imageUrls, loading }: RenderImageProps) {
  const renderImages = (imageUrls: Data[]) => {
    if (imageUrls.length > 1) return <div className="grid">{renderMultipleImages(imageUrls)}</div>;
    else {
      const { url } = imageUrls[0];
      return renderSingleImage(url);
    }
  };

  const renderSingleImage = (url: string) => {
    return (
      <div className="content">
        <img src={url} alt={url} key={1} />
      </div>
    );
  };

  const renderMultipleImages = (imageUrls: Data[]) => {
    const renderData = [];

    for (let i = 0; i < imageUrls.length; i += 2) {
      if (!imageUrls[i + 1]) {
        renderData.push(renderSingleImage(imageUrls[i].url));
        return renderData;
      }

      const { url: url1 } = imageUrls[i];
      const { url: url2 } = imageUrls[i + 1];

      renderData.push(
        <div className="row">
          <div className="col" key={i}>
            <img src={url1} alt={url1} key={i} />
          </div>
          <div className="col" key={i + 1}>
            <img src={url2} alt={url2} key={i + 1} />
          </div>
        </div>
      );
    }

    return renderData;
  };

  // const renderData = () => {
  //   if (loading) return <Spinner />;
  //   else if (imageUrls.length) return renderImages(imageUrls);
  //   else return "Image Goes Here";
  // };

  return (
    <div style={{ marginTop: "2em" }}>
      {loading ? (
        <Spinner />
      ) : imageUrls.length ? (
        renderImages(imageUrls)
      ) : (
        <div
          style={{
            fontSize: "3em",
            textAlign: "center",
            color: "gray",
          }}
          className="content"
        >
          Image Goes Here
        </div>
      )}
      {/* {renderData()} */}
    </div>
  );
}

export default RenderImage;
