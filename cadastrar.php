<?php
include "conexao.php";
include "bootstrap.html";
if(isset($_REQUEST['cad'])){
    $cadastrar=2;
}else if(isset($_REQUEST['cadastrar'])){$cadastrar=1;}
?>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Área</title>
    <script src="https://kit.fontawesome.com/c8e9db5282.js" crossorigin="anonymous"></script>
    </head>

<body> 
<div class="container">
    <?php switch($cadastrar){
        case 1:{?>
        <form method="post" action="inserir.php">
                <fieldset>
                    <legend class="text-center d-flex align-items-center justify-content-center">
                        Cadastrar
                        <span class="d-none d-sm-inline ms-2">Aluno</span>
                    </legend>
                    <div class="form-group m-2">
                        <label for="nome">Nome:</label>
                        <input type="text" required name="nome" class="form-control" id="nome" placeholder="Digite o nome do aluno">
                    </div>
                 
                        <input type="hidden" name="turma" class="form-control" id="nome" value="<?=$_REQUEST['cadastrar']?>">

                    <div class="form-group pt-3">
                        <input type="submit" value="Cadastrar" name="enviaraluno" class="btn btn-primary w-100">
                    </div>
                </fieldset>
            </form>
    <?php break;};
    case 2:{?>
  <form method="post" action="inserir.php">
                <fieldset>
                    <legend class="text-center d-flex align-items-center justify-content-center">
                        Cadastrar
                        <span class="d-none d-sm-inline ms-2">Turma</span>
                    </legend>
                    <div class="form-group m-2">
                        <label for="nome">Modalidade:</label>
                        <input type="text" required name="nome" class="form-control" id="nome" placeholder="Digite o nome da modalidade">
                    </div>
                    <div class="form-group m-2">
                <label for="turno">Turno:</label>     
                <select name="turno">
                        <option value="manha">Manhã</option>
                        <option value="tarde">Tarde</option>
                        <option value="noite">Noite</option>
                      </select>   
                </div>
                    <div class="form-group pt-3">
                        <input type="submit" value="Cadastrar" name="enviarturma" class="btn btn-primary w-100">
                    </div>
                </fieldset>
            </form>



   <?php break; };default:{?>
       <div style="margin:auto;margin-top:10%;text-align:center;border: 1px solid #ccc; background-color: #f5f5f5; padding: 10px; margin-bottom: 10px; width: 50%; height:25%;">
       <p style="margin: 0;">Selecione um tipo de cadastro</p>
       <a href="index.php" style="text-decoration: none;"><button style="padding: 5px 10px; background-color: #4CAF50; color: white; border: none; border-radius: 3px; cursor: pointer;">Voltar</button></a>
   </div>
   <?php
}
             };?>
</div>
</body>
</html>