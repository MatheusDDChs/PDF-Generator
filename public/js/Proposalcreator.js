// INPUTS
let Prodescription = document.querySelector("#iddescriçao")
let Proprazo = document.querySelector("#idprazo")
let Propreco = document.querySelector("#idpreço")
// ENVIAR VALORES
let submit = document.querySelector("#proposalsubmit")

// TEXTOS PARA TROCAR COM SWITCH
let TxtDescrição = document.querySelector("#textdescrição")
let TxtPrazo = document.querySelector("#textprazo")
let TxtPreço = document.querySelector("#textpreço")

// BUSCAR OS CLIENTES
const client = JSON.parse(localStorage.getItem("ClientsData")) || []
let clientslct = document.querySelector("#Clientselector")

client.forEach(client => {
    const opt = document.createElement("option");
    opt.value = client.id;
    opt.textContent = `${client.name} - ${client.cnpj}`
    clientslct.appendChild(opt)
});


// CRIAR A PROPOSTA
class Proposta {
    constructor(id, clientId, description, prazo, price) {
        this.id = id
        this.clientidId = clientId
        this.description = description
        this.prazo = prazo
        this.price = price
    }
}

const PropostaData = JSON.parse(localStorage.getItem("PropostaData")) || []

submit.addEventListener("click", () => {
    const order = new Proposta(
        id = PropostaData.length + 1,
        clientidId = client.length + 1,
        Prodescription.value,
        Proprazo.value,
        Propreco.value
    )

    PropostaData.push(order)
    console.log(PropostaData)
})

localStorage.setItem("PropostaData", JSON.stringify(PropostaData))

// <SELECT>
let Options = document.querySelector("#idformularios")
let OptionsValue = Options.value
























Options.addEventListener("change", () => {
let OptionsValue = Options.value

    console.log(OptionsValue)
    switch (OptionsValue) {
        case "Simples":
            TxtDescrição.innerHTML = "Descrição do Serviço: "
            TxtPrazo.innerHTML = "Prazo do Trabalho: "
            TxtPreço.innerHTML = "Preço: "
            break
        case "Moderno":
            TxtDescrição.innerHTML = "Tipo do Frete"
            TxtPrazo.innerHTML = "Prazo de entrega:"
            TxtPreço.innerHTML = "Valor do Frete: "
            break
        case "Corporativo":
            TxtDescrição.innerHTML = "Descrição do Produto:"
            TxtPrazo.innerHTML = "Dias de produção:"
            TxtPreço.innerHTML = "Valor do Produto: "
            break
        default:
            TxtDescrição.innerHTML = "Descrição do Serviço: "
            TxtPrazo.innerHTML = "Prazo do Trabalho: "
            TxtPreço.innerHTML = "Preço: "
            break
    }
})

