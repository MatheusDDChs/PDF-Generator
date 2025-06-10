function RenderPropostas() {
    const PropostaData = JSON.parse(localStorage.getItem("PropostaData")) || [];
    const clientData = JSON.parse(localStorage.getItem("ClientsData")) || [];
    const list = document.querySelector("#propostaslist");

    list.innerHTML = PropostaData.map((proposta, index) => {
        const cliente = clientData.find(c => c.id == proposta.clientId);

        return `
            <div style="border:1px solid #ddd; padding:10px; margin:10px 0; border-radius:8px;">
                <strong>ID da Proposta:</strong> ${proposta.id}<br>
                <strong>Cliente:</strong> ${cliente ? cliente.name : "Cliente não encontrado"}<br>
                <strong>CNPJ:</strong> ${cliente ? cliente.cnpj : "Desconhecido"}<br>
                <strong>Descrição:</strong> ${proposta.description}<br>
                <strong>Prazo:</strong> ${proposta.prazo}<br>
                <strong>Preço:</strong> R$ ${proposta.price}<br>
                <button class="edit-btn" data-id="${proposta.id}">Editar</button>
                <button class="pdf-btn" data-id="${proposta.id}">PDF</button>
            </div>
        `;
    }).join("");

    // Adiciona evento para os botões de PDF
    document.querySelectorAll(".pdf-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const propostaId = btn.dataset.id;
            const proposta = PropostaData.find(p => p.id == propostaId);
            const cliente = clientData.find(c => c.id == proposta.clientId);

            if (!proposta || !cliente) {
                alert("Erro ao localizar dados para o PDF.");
                return;
            }

            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();

            doc.setFont("Helvetica", "normal");
            doc.setFontSize(12);

            doc.text("Proposta de Serviço", 10, 10);

            doc.setLineWidth(0.5);
            doc.line(10, 15, 200, 15);  

            doc.text(`ID da Proposta: ${proposta.id}`, 10, 20);
            doc.text(`Cliente: ${cliente.name}`, 10, 30);
            doc.text(`CNPJ: ${cliente.cnpj}`, 10, 40);

            doc.setDrawColor(180, 180, 180);
            doc.line(10, 50, 200, 50);

            doc.text(`Descrição: ${proposta.description}`, 10, 60);
            doc.text(`Prazo: ${proposta.prazo}`, 10, 70);
            doc.text(`Preço: R$ ${proposta.price}`, 10, 80);

            doc.save(`proposta-${proposta.id}.pdf`);

            const pdfUrl = doc.output("bloburl");
            window.open(pdfUrl, "_blank");
        });
    });
}
