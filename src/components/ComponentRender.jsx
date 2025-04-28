import { useParams } from "react-router";
import Ciclo from "./Ciclo";

function ComponentRender({ components }) {
  const { id } = useParams();
  const ciclo = components[Number(id)];

  return <Ciclo ciclo={ciclo} />;
}

export default ComponentRender;
