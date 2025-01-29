import { useEffect, useState } from "react";

function Ciclo({ checks, name, path }) {
  const [bullet, setBullet] = useState(
    Array.from({ length: checks }, () => "[ ]")
  );

  useEffect(() => {
    setBullet(Array.from({ length: checks }, () => "[ ]"));
  }, [checks]);

  return (
    <div>
      <h5>
        {name} path {path} : {checks} checks
      </h5>
      {bullet.map((element, index) => (
        <p key={index}> {element} </p>
      ))}
    </div>
  );
}

export default Ciclo;
