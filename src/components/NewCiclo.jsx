import { useState } from "react";
import { IoMdAdd as Add, IoMdClose as Close } from "react-icons/io";
import { FaPen, Pen } from "react-icons/fa";


function NewCiclo({ setArray }) {
  const [tabName, setTabName] = useState();
  const [totalHours, setTotalHours] = useState();
  const [materias, setMaterias] = useState([]);
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
  };

  const setMateria = (materia, qtPeso, qtConteudo, qtDificuldade) => {
    let newMateria = {
      name: materia,
      peso: qtPeso,
      conteudo: qtConteudo,
      dificuldade: qtDificuldade,
      checks: 0
    }
    setMaterias(newMateria);
  }

  return (
    <>
      <button id="BNewCicle">
        <Add />
        Novo Ciclo
      </button>
      <div id="ModalNewCicle">
        <form>
          <header>
            <h1 className="title">Novo Ciclo</h1>
            <button onClick={(e) => { e.preventDefault() }}>
              <Close />
            </button>
          </header>
          <fieldset className="header">
            <div className="inputBox">
              <label htmlFor="nameCicle">Nome do Ciclo</label>
              <input type="text" name="nameCicle" id="nameCicle" placeholder="nome do ciclo..." />
            </div>
            <div className="inputBox">
              <label htmlFor="totalHours">Horas totais</label>
              <input type="number" min="0" step={10} name="totalHours" id="totalHours" placeholder="00" />
            </div>
          </fieldset>
          <fieldset className="mattes">
            <div>
              <div className="inputBox">
                <label htmlFor="nameMatter">Materia</label>
                <input type="text" name="nameMatter" id="nameMatter" placeholder="nome da materia..." />
              </div>
              <div className="numbersInput">
                <div className="inputBox">
                  <label htmlFor="difficulty">Dificuldade</label>
                  <input type="number" min={0} max={5} name="difficulty" id="difficulty" placeholder="0" />
                </div>
                <div className="inputBox">
                  <label htmlFor="qtContent">Conteudo</label>
                  <input type="number" min={0} max={5} name="qtContent" id="qtContent" placeholder="0" />
                </div>
                <div className="inputBox">
                  <label htmlFor="qtWeight">Peso</label>
                  <input type="number" min={0} max={5} name="qtWeight" id="qtWeight" placeholder="0" />
                </div>
                <div className="addMatter">
                  <label htmlFor="addMatter">Adicionar Materia</label>
                  <button onClick={(e) => { e.preventDefault() }} id="addMatter">
                    add
                    <Add />
                  </button>
                </div>
              </div>
            </div>
            <ul className="matterList">
              <li className="header-list">
                <p className="header-text">
                  Titulo
                </p>
                <p>Dificuldade</p>
                <p>Conteudo</p>
                <p>Peso</p>
                <p>Horas</p>

              </li>
              <li>
                <p className="cell">
                  Titulo
                </p>
                <p className="cell">10</p>
                <p className="cell">5</p>
                <p className="cell">2</p>
                <p className="cell">4</p>
              </li>
              <li>
                <p className="cell">
                  Titulo
                </p>
                <p className="cell">10</p>
                <p className="cell">5</p>
                <p className="cell">2</p>
                <p className="cell">4</p>
              </li>
              <li>
                <p className="cell">
                  Titulo
                </p>
                <p className="cell">10</p>
                <p className="cell">5</p>
                <p className="cell">2</p>
                <p className="cell">4</p>
              </li>
              <li>
                <p className="cell">
                  Titulo
                </p>
                <p className="cell">10</p>
                <p className="cell">5</p>
                <p className="cell">2</p>
                <p className="cell">4</p>
              </li>
              <li>
                <p className="cell">
                  Titulo
                </p>
                <p className="cell">10</p>
                <p className="cell">5</p>
                <p className="cell">2</p>
                <p className="cell">4</p>
              </li>
              <li>
                <p className="cell">
                  Titulo
                </p>
                <p className="cell">10</p>
                <p className="cell">5</p>
                <p className="cell">2</p>
                <p className="cell">4</p>
              </li>
              <li>
                <p className="cell">
                  Titulo
                </p>
                <p className="cell">10</p>
                <p className="cell">5</p>
                <p className="cell">2</p>
                <p className="cell">4</p>
              </li>
            </ul>
          </fieldset>
        </form>
      </div>

    </>
  );
}

export default NewCiclo;
