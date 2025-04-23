let clientname = document.querySelector("#idnome")
let clientmail = document.querySelector("#ide-mail")
let clientrazao = document.querySelector("#idrazao")
let clientcnpj = document.querySelector("#idcnpj")

// Botão de enviar do formulário
let subclient = document.querySelector("#clientsubmit")

class Client {
        constructor(id, name, email, razao, cnpj) {
        this.id = id,
        this.name = name,
        this.email = email,
        this.razao = razao,
        this.cnpj = cnpj
    }
}

const ClientsData = JSON.parse(localStorage.getItem("ClientsData")) || []

subclient.addEventListener("click", () => {
    const client = new Client(
        id = ClientsData.length + 1,
        clientname.value,
        clientmail.value,
        clientrazao.value,
        clientcnpj.value
    )

ClientsData.push(client)

localStorage.setItem("ClientsData", JSON.stringify(ClientsData))

console.log(localStorage.setItem("ClientsData", JSON.stringify(ClientsData)))

console.log("Lenght dos clients" + ClientsData.length)

console.log(ClientsData)
})