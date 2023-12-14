document.getElementById('reclamationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Reclamación enviada correctamente. ¡Gracias!');
});

document.getElementById('openDenunciaForm').addEventListener('click', function() {
    document.getElementById('denunciaForm').style.display = 'block';
});

function submitDenuncia() {
       alert('Denuncia enviada correctamente. ¡Gracias por tu colaboración!');
    document.getElementById('denunciaForm').style.display = 'none';
}