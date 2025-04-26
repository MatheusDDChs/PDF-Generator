window.onload = function () {
const { jsPDF } = window.jspdf;
// CRIAR PDF COM JS PDF

// INPUTS
let Prodescription = document.querySelector("#iddescriçao")
let Proprazo = document.querySelector("#idprazo")
let Propreco = document.querySelector("#idpreço")

let clientslct = document.querySelector("#Clientselector")
// SELECTOR CLIENTES

// TEXTOS PARA USAR NO PDF
let TxtDescrição = document.querySelector("#textdescrição").innerHTML
let TxtPrazo = document.querySelector("#textprazo").innerHTML
let TxtPreço = document.querySelector("#textpreço").innerHTML


//FUNÇÃO PRA CRIAR PDF
function GerarPDF() {
    let Options = document.querySelector("#idformularios")
    let OptionsValue = Options.value

if (clientslct.value === "") {
        alert("Por favor, selecione um cliente!");
        return;
    }

const doc = new jsPDF();

doc.text(`${"ID: " + clientslct.value} ${"Tipo de impressão:  " + OptionsValue}` , 10, 10);
doc.text(`${TxtDescrição} ${Prodescription.value}` , 10, 20);
doc.text(`${TxtPrazo} ${Proprazo.value}` , 10, 30);
doc.text(`${TxtPreço} ${Propreco.value}` , 10, 40);

const pdfUrl = doc.output("bloburl");
window.open(pdfUrl, "_blank");
}
// ADICIONAR O EVENTO DE CLIQUE NO BOTÃO

document.querySelector("#proposalsubmit").addEventListener("click",
    (event) => {
        event.preventDefault();
        GerarPDF();
        CreatePropolse()
    }
)}