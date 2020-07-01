import React from "react";
import "./ImageModal.scss";

const ImageModal = (props) => {
  return (
    <>
      {props.isOpen ? (
        <div className="Modal-wrapper">
          <div className="MyModalImages">
            <div className="button-wrap">
              <button onClick={props.close}> close </button>
            </div>

            {props.data.map((img) => {
              return <img alt="product-img-in-full-size" src={img} />;
            })}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ImageModal;
