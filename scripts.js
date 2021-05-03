
let alunos2P =["Anton","Rafael","Bruno","David","Diogo"];

let ulAlunos = document.getElementById("lista-alunos");

for(let index=0;index<alunos2P.length;index++)
{
    const aluno = alunos2P[index];
    let liAlunos = document.createElement("li");

    liAlunos.innerText=aluno;
    
     ulAlunos.append(liAlunos);
}

let disciplinas2P =["PSI","RC","SO","MAT","FQ", "PT"];

let ulDisciplinas = document.getElementById("lista-disciplinas");

for(let index=0;index<disciplinas2P.length;index++)
{
    const disciplina = disciplinas2P[index];
    let liDisciplinas = document.createElement("li");

    liDisciplinas.innerText=disciplina;
    
    ulDisciplinas.append(liDisciplinas);
}
let tbody = document.getElementById("tabelabody");
let writetr = document.createElement("tr");
let writetr2 = document.createElement("tr");

for(let index=0;index<disciplinas2P.length;index++)
{
    const disciplina = disciplinas2P[index];
    let writetd = document.createElement("td");
    writetd.innerText=disciplina;

    if(index > 2) {
        writetr2.append(writetd);
    }
    else {

        writetr.append(writetd);
    }
}
tbody.append(writetr);
tbody.append(writetr2);