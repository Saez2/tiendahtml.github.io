$(document).ready(function(){
    $(".inicio").click(function(){
        $(".c-central").load("paginas/index.html");
        return false;
    });
    $(".juegos").click(function(){
        $(".c-central").load("paginas/juegos.html");
        return false;
    });
    $(".contacto").click(function(){
        $(".c-central").load("paginas/contacto.html");
        return false;
    });
    $(".foro").click(function(){
        $(".c-central").load("paginas/foro.html");
        return false;
    });
    $(".consulta").click(function(){
        $(".c-central").load("paginas/consultas.html");
        return false;
    });
});