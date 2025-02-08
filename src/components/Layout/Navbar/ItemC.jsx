import { Link } from "react-router-dom";
import { IoMdRadioButtonOn } from "react-icons/io";
import { FaCircle } from "react-icons/fa";

function ItemC({ index, tab, check, onClick }) {
  return (
    <>
      <li key={index} onClick={() => onClick(index)}>
        {check ? (
          <IoMdRadioButtonOn color="white" />
        ) : (
          <FaCircle color="#689DC9" />
        )}

        <Link className="noLink" to={`/pages/${index}`}>
          <h6>{tab.name}</h6>
        </Link>
      </li>
    </>
  );
}

export default ItemC;
