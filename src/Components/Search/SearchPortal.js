import ReactDOM from "react-dom";

const SearchPortal = ({ children }) => {
  const el = document.getElementById("Search");
  return ReactDOM.createPortal(children, el);
};

export default SearchPortal;
