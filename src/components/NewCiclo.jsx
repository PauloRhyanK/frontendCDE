import { useState } from "react";
import { IoMdAdd as Add } from "react-icons/io";
import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalDialog,
  DialogTitle,
  DialogContent,
  Stack,
  Button,
} from "@mui/joy";

function NewCiclo({ setArray }) {
  const [tabName, setTabName] = useState();
  const [tabCheck, setTabCheck] = useState();
  const [isOpen, setIsOpen] = useState(false);
  let titulo = "Criar Ciclo";
  let subTitulo = "Insira as informações do seu novo ciclo de estudos";
  let uiVariant = "outlined";
  let uiSize = "md";

  const openModal = () => {
    setIsOpen(true);
  };

  const createCycle = (e) => {
    e.preventDefault();
    setArray((prevItens) => [
      ...prevItens,
      { name: tabName, checks: tabCheck },
    ]);
  };

  return (
    <>
      <Button
        color="primary"
        startDecorator={<Add />}
        variant="solid"
        onClick={openModal}
      >
        Criar Ciclo
      </Button>

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <ModalDialog>
          <DialogTitle>{titulo}</DialogTitle>
          <DialogContent>{subTitulo}</DialogContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              createCycle(e);
              setIsOpen(false);
            }}
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Nome do ciclo</FormLabel>
                <Input
                  onChange={(e) => {
                    setTabName(e.target.value);
                  }}
                  placeholder="Insira o nome do Ciclo..."
                  type="text"
                  variant={uiVariant}
                  size={uiSize}
                  required
                ></Input>
              </FormControl>
              <FormControl>
                <FormLabel>Quantidade de Itens:</FormLabel>
                <Input
                  onChange={(e) => {
                    setTabCheck(e.target.value);
                  }}
                  placeholder="Número de itens"
                  type="number"
                  variant={uiVariant}
                  size={uiSize}
                  required
                ></Input>
              </FormControl>
              <Button type="submit">Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </>
  );
}

export default NewCiclo;
