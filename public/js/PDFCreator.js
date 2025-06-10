window.onload = function () {
  const { jsPDF } = window.jspdf;

  // INPUTS
  let Prodescription = document.querySelector("#iddescriçao");
  let Proprazo = document.querySelector("#idprazo");
  let Propreco = document.querySelector("#idpreço");

  let clientslct = document.querySelector("#Clientselector");

  // SELECTOR CLIENTES
  const clientData = JSON.parse(localStorage.getItem("ClientsData")) || [];

  // TEXTOS PARA USAR NO PDF
  let TxtDescrição = document.querySelector("#textdescrição").innerHTML;
  let TxtPrazo = document.querySelector("#textprazo").innerHTML;
  let TxtPreço = document.querySelector("#textpreço").innerHTML;

  // FUNÇÃO PRA CRIAR PDF
  function GerarPDF() {
    let Options = document.querySelector("#idformularios");
    let OptionsValue = Options.value;

    if (clientslct.value === "") {
      alert("Por favor, selecione um cliente!");
      return;
    }

    const cliente = clientData.find(c => c.id == clientslct.value);
    if (!cliente) {
      alert("Cliente não encontrado!");
      return;
    }

    const doc = new jsPDF();

    // Título
    doc.setFontSize(18);
    doc.setTextColor(40, 40, 40);
    doc.text(" Proposta Comercial", 10, 15);

    // Linha
    doc.setLineWidth(0.5);
    doc.line(10, 18, 200, 18);

    // Dados do Cliente
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(" Dados do Cliente:", 10, 30);
    doc.text(`• Nome: ${cliente.name}`, 10, 40);
    doc.text(`• Email: ${cliente.email}`, 10, 50);
    doc.text(`• Razão Social: ${cliente.razao}`, 10, 60);
    doc.text(`• CNPJ: ${cliente.cnpj}`, 10, 70);

    // Linha divisória
    doc.setDrawColor(180, 180, 180);
    doc.line(10, 75, 200, 75);

    // Detalhes da proposta
    doc.setFontSize(12);
    doc.text(" Detalhes da Proposta:", 10, 85);
    doc.text(`• ${TxtDescrição} ${Prodescription.value}`, 10, 95);
    doc.text(`• ${TxtPrazo} ${Proprazo.value}`, 10, 105);
    doc.text(`• ${TxtPreço} R$ ${Propreco.value}`, 10, 115);
    doc.text(`• Tipo de Impressão: ${OptionsValue}`, 10, 125);

    // Rodapé
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text("Gerado automaticamente por Matheus Diedrichs", 10, 280);

    const pdfUrl = doc.output("bloburl");
    window.open(pdfUrl, "_blank");
  }

  // EVENTO DE CLIQUE
  document.querySelector("#proposalsubmit").addEventListener("click", (event) => {
    event.preventDefault();
    GerarPDF();
    CreatePropolse(); // Assumindo que essa função já existe
  })}