function validaLogin(usuario, senha){
    //alert(`Você digitou ${usuario} ${senha}`)
    if (!usuario) {
        alert('É obrigatório informar o usuário');
        return false
    }
    if (!senha) {
        alert('É obrigatório informar a senha');
        return false
    }
    if(usuario==='aluno@fatecitu.edu.br' && senha==='123456'){
        //Carregaremos uma nova página
        console.log("Vai carregar o menu")
        window.location.href = "http://127.0.0.1:5500/menu.html"
        alert('Seja bem vindo!')
        
    } else {
        console.error("Erro na autenticação")
        alert('Os dados de autenticação são inválidos!')
    }
}