$(document).ready(function(){
    //Esta linha envolve todo o código jQuery para garantir que ele só seja executado quando o DOM estiver totalmente carregado.

    $("#task-form").hide();
    //Esconde o formulário de entrada de tarefas assim que a página é carregada.

    $('header button').click(function () {
        $("#task-form").slideToggle();
        //Define um manipulador de eventos de clique para o botão no cabeçalho. 
        //Quando o botão é clicado, o formulário de entrada de tarefas é alternado entre mostrar e ocultar usando o efeito de slide.
    })

    $('#task-form').submit(function(event){
        // Adiciona tarefa ao submeter o formulário
        event.preventDefault();
        //Evita o comportamento padrão do formulário de enviar os dados e atualizar a página.
        var taskName = $('#task-manager').val();
        //Obtém o valor do campo de entrada de texto onde o nome da tarefa é inserido.
        if(taskName.trim() !== ''){
            //Verifica se o nome da tarefa não está vazio após remover espaços em branco extras. Se não estiver vazio, a tarefa é adicionada à lista de tarefas.
            $('#task-list').append('<li><span class="task-name">' + taskName + '</span><span class="task-actions"><button class="complete-btn">Concluir</button><button class="delete-btn">Excluir</button></span></li>');
            //Adiciona o HTML da tarefa à lista de tarefas existente.
            $('#task-manager').val('');
            //Limpa o campo de entrada de texto após a adição da tarefa
        }
    });

    // Marca tarefa como concluída ao clicar no botão "Concluir"
    $(document).on('click', '.complete-btn', function(){
        $(this).closest('li').find('.task-name').toggleClass('completed');
    });

    // Exclui a tarefa ao clicar no botão "Excluir"
    $(document).on('click', '.delete-btn', function(){
        $(this).closest('li').remove();
    });
});
