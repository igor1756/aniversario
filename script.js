document.getElementById('form').addEventListener('submit', function(event){

    event.preventDefault();

    const name = document.getElementById('name').value;
    const nascimento = document.getElementById('birth-date').value;

    console.log('Nome: ', name);
    console.log('Aniversario: ', nascimento);

    alert(`Aniversário do ${name} cadastrado com sucesso!`);

    document.getElementById('form').reset();
});
