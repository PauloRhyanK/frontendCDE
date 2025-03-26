## Ciclo

- id_ciclo *PK
- string Name
- int checks
- date DataInicio
- date DataFinal
- int QuantCiclos
- int Estado 
- int Progresso

## Task

- id_ task *PK
- task_name
- Dificulty
- Conteudo
- Horas
- Horas concluidas
- Estado
- id_ciclo *EK
  
