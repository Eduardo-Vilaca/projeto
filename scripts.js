let alunos2P =["Anton","Rafael","Bruno","David","Diogo"];

let uAlunos = document.getElementById("lista-alunos");

for(let index =0;index<alunos2P.length;index++)
{
    //buscar aluno ao array
    const aluno = alunos2p[index];
    //Criar o <li>
    let liAlunos = documento.createElement("li");
    // adicionar o nome do aluno ao <li>
    liAlunos.innerText=aluno;

    //Adicional o <li> ao <ul>
     uAlunos.append(liAlunos);
}