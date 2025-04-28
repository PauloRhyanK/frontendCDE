import { useEffect, useState } from "react";

function Ciclo({ ciclo }) {
  const [bullet, setBullet] = useState(
    Array.from({ length: ciclo.checks }, () => "[ ]")
  );

  useEffect(() => {
    setBullet(Array.from({ length: ciclo.checks }, () => "[ ]"));
  }, [ciclo.checks]);

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
    },
    {
      name: "Comp Gráfica",
      difficulty: 5,
      qt_content: 4,
      total_hours: 10,
      concluded: 8,
    }
  ];


  return (
    <div id="Main-Container">
      <header>
        <p className="category">Ciclo</p>
        <h1 className="h1">Faculdade</h1>
        <p className="date">01/07 até 05/12 de 2024</p>
      </header>

      <main id="table">
        <table>
          <thead>
            <tr className="tb-header">
              <th className="materias">Matérias</th>
              <th className="checks">Horas concluidas</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td>{row.name}</td>
                <td>
                  {Array.from({ length: row.concluded }, (_, index) => (
                    <input
                      key={index}
                      type="checkbox"
                      name={`checkbox-${rowIndex}-${index}`}
                      id={`checkbox-${rowIndex}-${index}`}
                    />
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default Ciclo;
