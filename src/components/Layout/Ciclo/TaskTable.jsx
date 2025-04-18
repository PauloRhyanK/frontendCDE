import './TaskTable.css';
export function TaskTable({ rows, columns }) {
  const gerarTamanhos = (array) => {
    if (!array || array.length === 0) return "";
    return array.map((element) => `${element.size || 1}fr`).join(" ");
  };

  const imprimirItens = (obItens) => {
    return Object.entries(obItens).map((value, index) => {
      <div
        key={index}
        className="table-cell"
      >
        {index !== 0 && (
          <span style={{ borderLeft: "2px solid rgb(129 129 129)", margin: 10, borderRadius: '100%' }}></span>
        )}
        {value}
      </div>
    })
  };


  return (
    <div className="table" >
      <div className="table-columns" style={{ gridTemplateColumns: gerarTamanhos(columns) }} >
        {columns.map((column, index) => (
          <div
            key={index}
            className="table-column"
          >
            {index !== 0 && (
              <span style={{ borderLeft: "2px solid rgb(129 129 129)", margin: 10, borderRadius: '100%' }}></span>
            )}
            {column.headerName}
          </div>
        ))}

      </div>
      <div className="table-rows" style={{ gridTemplateColumns: gerarTamanhos(columns) }} >
        {rows.map((row) => (
          Object.values(row).map((value, index) => (
            <div
              key={index}
              className="table-cell"
            >
              {index !== 0 && (
                <span style={{ borderLeft: "2px solid rgb(129 129 129)", margin: 10, borderRadius: '100%' }}></span>
              )}
              {value}
            </div>
          ))
        ))}
      </div>
    </div>
  )
}