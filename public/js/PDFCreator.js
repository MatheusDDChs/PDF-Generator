document.addEventListener("DOMContentLoaded", () => {
const { jsPDF } = window.jspdf;

let Options = document.querySelector("#idformularios")

// INPUTS
let Prodescription = document.querySelector("#iddescriçao")
let Proprazo = document.querySelector("#idprazo")
let Propreco = document.querySelector("#idpreço")

// ENVIAR VALORES
let submit = document.querySelector("#proposalsubmit")

// TEXTOS PARA USAR NO PDF
let TxtDescrição = document.querySelector("#textdescrição").innerHTML
let TxtPrazo = document.querySelector("#textprazo").innerHTML
let TxtPreço = document.querySelector("#textpreço").innerHTML


//FUNÇÃO PRA CRIAR PDF
submit.addEventListener("click", function GeneratePDF(event) {
event.preventDefault()

const doc = new jsPDF();

let OptionsValue = Options.value

doc.text(`${TxtDescrição} ${Prodescription.value}` , 10, 10);
doc.text(`${TxtPrazo} ${Proprazo.value}` , 10, 20);
doc.text(`${TxtPreço} ${Propreco.value}` , 10, 30);

const pdfUrl = doc.output("bloburl");
window.open(pdfUrl, "_blank");
})
})