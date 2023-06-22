<html>
    <head>
        <title>Oficina de Musicas::Inserir</title>
    </head>
    <body>
        <?php
        include 'conexao.php';
 
if(isset($_POST['enviaraluno'])){
  $nome=$_POST['nome'];
  $turma = $_POST['turma'];
  $sql = "INSERT INTO tblaluno(nome,codigoturma)VALUES ('$nome','$turma')";
  echo"<center>";
  
  if (mysqli_query($con, $sql)) {
    echo "Você inseriu o aluno $nome com sucesso!<br><br>";
  } else {
    echo "Error: " . $sql . "<br>" . mysqli_error($con);
  }  
        
        echo"</center>";
}else if(isset($_POST['enviarturma'])){

        $nome=$_POST['nome'];
        $turno=$_POST['cpf'];
    
        $sql = "INSERT INTO tblturma(modalidade, turno)VALUES ('$nome', '$turno')";
        echo"<center>";
        
        if (mysqli_query($con, $sql)) {
          echo "Você inseriu a turma $nome com sucesso!<br><br>";
        } else {
          echo "Error: " . $sql . "<br>" . mysqli_error($con);
  }  
        echo"</center>";
}
        ?>
             <button><a href="index.php">Voltar</a></button>
    </body>
</html>