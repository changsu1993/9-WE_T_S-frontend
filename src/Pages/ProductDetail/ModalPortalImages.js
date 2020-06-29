import ReactDOM from 'react-dom';

const ModalPortalImages = ({ children }) => {
  const el = document.getElementById('images');
  return ReactDOM.createPortal(children, el);
};

export default ModalPortalImages;