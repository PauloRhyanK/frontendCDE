import { useState } from "react";

function NewCiclo({ setArray }) {
  const [tabName, setTabName] = useState();
  const [tabPath, setTabPath] = useState();
  const [tabCheck, setTabCheck] = useState();

  return (
    <>
      <form>
        <input
          type="text"
          onChange={(e) => {
            setTabName(e.target.value);
          }}
        />
        <input
          type="text"
          onChange={(e) => {
            setTabPath(e.target.value);
          }}
        />
        <input
          type="number"
          onChange={(e) => {
            setTabCheck(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            if (tabCheck && tabName && tabPath) {
              setArray((prevItens) => [
                ...prevItens,
                {
                  name: tabName,
                  path: tabPath,
                  checks: tabCheck,
                },
              ]);
            }
          }}
        >
          Criar Ciclo
        </button>
      </form>
    </>
  );
}

export default NewCiclo;
