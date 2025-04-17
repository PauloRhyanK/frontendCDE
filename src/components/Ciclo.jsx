import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

function Ciclo({ checks, name, path }) {
  const [bullet, setBullet] = useState(
    Array.from({ length: checks }, () => "[ ]")
  );

  useEffect(() => {
    setBullet(Array.from({ length: checks }, () => "[ ]"));
  }, [checks]);

  const columns = [
    {
      fied: 'id', headerName: 'nameColumn', width: 10
    },
    {
      fied: 'id', headerName: 'nameColumn', width: 10
    },
    {
      fied: 'id', headerName: 'nameColumn', width: 10
    },
  ];

  const rows = [
    { dados: dados,
      dados: dados,
      dados: dados,

    }
  ]

  return (
    <section className="section_content">
      <h5>
        {name} path {path} : {checks} checks
      </h5>
      {bullet.map((element, index) => (
        <p key={index}> {element} </p>
      ))}
          <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    </section>
  );
}

export default Ciclo;
