let alunos2P =["Anton","Rafael","Bruno","David","Diogo"];

let ulAlunos = document.getElementById("lista-alunos");

for(let index =0;index<alunos2P.length;index++)
{
    const aluno = alunos2P[index];
    let liAlunos = documento.createElement("li");

    liAlunos.innerText=aluno;

     ulAlunos.append(liAlunos);
}