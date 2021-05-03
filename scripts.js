
let alunos2P =["Anton","Rafael","Bruno","David","Diogo"];

let ulAlunos = document.getElementById("lista-alunos");

for(let index=0;index<alunos2P.length;index++)
{
    const aluno = alunos2P[index];
    let liAlunos = document.createElement("li");

    liAlunos.innerText=aluno;
    
     ulAlunos.append(liAlunos);
}

let disciplinas2P =["PSI","RC","SO","MAT","FQ"];

let ulDisciplinas = document.getElementById("lista-disciplinas");

for(let index=0;index<alunos2P.length;index++)
{
    const disciplina = disciplinas2P[index];
    let liDisciplinas = document.createElement("li");

    liDisciplinas.innerText=disciplina;
    
    ulDisciplinas.append(liDisciplinas);
}