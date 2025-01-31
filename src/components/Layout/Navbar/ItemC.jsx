import { Link } from "react-router-dom";
import { IoMdRadioButtonOn } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { useState } from "react";

function ItemC({ index, tab }) {
  const [check, setCheck] = useState(false);

  const handleClick = () => {
    setCheck((prevCheck) => !prevCheck);
  };

  return (
    <>
      <li key={index} onClick={handleClick}>
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
