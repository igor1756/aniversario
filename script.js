document.getElementById('form').addEventListener('submit', function(event){

    event.preventDefault();

    const name = document.getElementById('name').value;
    const nascimento = document.getElementById('birth-date').value;
    console.log(name);
    console.log(nascimento);
    /*

    var datePattern = /^(\d{2})\/(\d{2})\/(\d{4})$/;

    // Verifica se a data recebida corresponde ao padrão
    if(!datePattern.test(nascimento)){
        //document.getElementById('error-message').textContent = 'Formato de data inválido.';
        return;
    }



    console.log('Nome: ', name);
    console.log('Aniversario: ', nascimento);

    alert(`Aniversário do ${name} cadastrado com sucesso!`);

    */
    document.getElementById('form').reset();
});
