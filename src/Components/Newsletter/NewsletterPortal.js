import ReactDOM from "react-dom";

const NewsletterPortal = ({ children }) => {
  const el = document.getElementById("Newsletter");
  return ReactDOM.createPortal(children, el);
};

export default NewsletterPortal;
