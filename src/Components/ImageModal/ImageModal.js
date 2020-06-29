import React from "react";
import "./ImageModal.scss";

const ImageModal = (props) => {
  return (
    <React.Fragment>
      {props.isOpen ? (
        <React.Fragment>
          <div className="Modal-wrapper">
            <div className="MyModalImages">
              <div className="button-wrap">
                <button onClick={props.close}> close </button>
              </div>
              {props.data.map((imgObject) => {
                return (
                  <img alt="product-img-in-full-size" src={imgObject.img} />
                );
              })}
            </div>
          </div>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
};

export default ImageModal;
