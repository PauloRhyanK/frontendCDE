import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { TaskTable } from "./Layout/Ciclo/TaskTable";
import "./Ciclo.css"

function Ciclo({ checks, name, path }) {
  const [bullet, setBullet] = useState(
    Array.from({ length: checks }, () => "[ ]")
  );

  useEffect(() => {
    setBullet(Array.from({ length: checks }, () => "[ ]"));
  }, [checks]);

  const columns = [
    { field: 'name', headerName: 'TaskName', size: 2 },
    { field: 'difficulty', headerName: 'Dificuldade', size: 2 },
    { field: 'qt_content', headerName: 'Quant. Conteudo', size: 2 },
    { field: 'total_hours', headerName: 'Horas Totais', size: 2 },
    { field: 'concluded', headerName: 'Concluído', size: 2 },
  ];

  const rows = [
    {
      name: "Comp Gráfica",
      difficulty: 5,
      qt_content: 4,
      total_hours: 10,
      concluded: 3,
    }
  ];


  return (
    <div id="Main-Container">
      <header>
        <p>Ciclo</p>
        <h1 className="tt-b">Faculdade</h1>
        <p>01/07 até 05/12 de 2024</p>
      </header>

      {/* <section className="section_content">
        <h5>
          {name} path {path} : {checks} checks
        </h5>
        {bullet.map((element, index) => (
          <p key={index}> {element} </p>
        ))}
        <TaskTable rows={rows} columns={columns} />
      </section> */}
    </div>
  );
}

export default Ciclo;
