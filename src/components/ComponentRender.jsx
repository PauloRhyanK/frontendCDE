import { useParams } from "react-router";
import Ciclo from "./Ciclo";

function ComponentRender({ components }) {
  const { id } = useParams();
  const ciclo = components[Number(id)];

  return <Ciclo checks={ciclo.checks} name={ciclo.name} path={ciclo.path} />;
}

export default ComponentRender;
