import Data from "../data.type";
import Spinner from "./Spinner";

interface RenderImageProps {
  imageUrls: Data[];
  loading: boolean;
}

function RenderImage({ imageUrls, loading }: RenderImageProps) {
  const renderImages = (imageUrls: Data[]) => {
    const renderData = imageUrls.map(({ url }, i) => {
      return <img src={url} alt={url} key={+i + 1} />;
    });

    return renderData;
  };

  // const renderData = () => {
  //   if (loading) return <Spinner />;
  //   else if (imageUrls.length) return renderImages(imageUrls);
  //   else return "Image Goes Here";
  // };

  return (
    <div style={{ marginTop: "3em" }}>
      <div
        style={{
          border: "1px solid #000",
          padding: "15px",
          width: "1024px",
          height: "1024px",
          margin: "auto",
          fontSize: "3em",
          textAlign: "center",
          color: "grey",
        }}
      >
        {loading ? <Spinner /> : imageUrls.length ? renderImages(imageUrls) : "Image Goes Here"}
        {/* {renderData()} */}
      </div>
    </div>
  );
}

export default RenderImage;
