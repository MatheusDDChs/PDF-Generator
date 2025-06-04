function RenderPropostas() {
    const PropostaData = JSON.parse(localStorage.getItem("PropostaData")) || []
    const clientData = JSON.parse(localStorage.getItem("ClientsData")) || []
    const list = document.querySelector("#propostaslist")

    list.innerHTML = PropostaData.map((proposta) => {
        // Buscar o cliente correspondente
        const cliente = clientData.find(c => c.id == proposta.clientId)

        return `
            <div style="border:1px solid #ddd; padding:10px; margin:10px 0; border-radius:8px;">
                <strong>ID da Proposta:</strong> ${proposta.id}<br>
                <strong>Cliente:</strong> ${cliente ? cliente.name : "Cliente não encontrado"}<br>
                <strong>CNPJ:</strong> ${cliente ? cliente.cnpj : "Desconhecido"}<br>
                <strong>Descrição:</strong> ${proposta.description}<br>
                <strong>Prazo:</strong> ${proposta.prazo}<br>
                <strong>Preço:</strong> R$ ${proposta.price}<br>
                <button id="Edit">Editar</button>
                <button id="PDFGenerate">PDF</button>
            </div>
        `
    }).join("")

}