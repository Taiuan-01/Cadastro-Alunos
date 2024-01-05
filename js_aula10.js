function adicionarUsuario() {
    const nome = document.getElementById("nome").value;
    const nota = document.getElementById("nota").value;
  

    if (nome && nota) {
        const tabela = document.getElementById("tabela");
        const novaTab = tabela.insertRow(tabela.rows.length);

        const tab1 = novaTab.insertCell(0);
        const tab2 = novaTab.insertCell(1);
        

        tab1.innerHTML = nome;
        tab2.innerHTML = nota;
      

        document.getElementById("forms").reset();
    }
}