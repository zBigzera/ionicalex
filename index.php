<?php
include "conexao.php";
include "bootstrap.html";
    $q_alunos = mysqli_query($con, "SELECT * FROM tblaluno");
    $q_turmas = mysqli_query($con, "SELECT * FROM tblturma");
    $mensagem = isset($_GET['mensagem']) ? $_GET['mensagem'] : "";
    if(isset($_REQUEST['cadastrar'])){
        $cadastro = $_REQUEST['cadastrar'];
        if($cadastro=="alunos"){$cadastro="aluno";}else if($cadastr=="turmas"){$cadastro="turma";}
    }
    if (isset($_GET['exclusao']) && $_GET['exclusao'] == 1) { ?>
        <div id="alert" class="alert alert-success alert-dismissible fade show" role="alert">
            <?php echo $mensagem; ?>
           <a href="index.php"> <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
    </a>
            <?php } ?>
        </div>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Oficina Musical</title>
    <script src="https://kit.fontawesome.com/c8e9db5282.js" crossorigin="anonymous"></script>
    </head>

<body>   
<style>
    .product-image {
  width: 100px; /* Defina o tamanho desejado para a imagem */
  height: 100px;
  object-fit: cover; /* Ajusta a imagem para preencher o contêiner */
  border-radius: 5%; /* Adiciona bordas arredondadas */
}
    .card-container {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      margin-top: 50px;
    }

    .card {
      width: 25%;
      text-align: center;
    }

    .card-body {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .card-title {
      margin-left: 10px;
    }
  </style>
</head>
<body>
    <div class="card-container">
    
             
     
      <div class="card">
        <div class="card-body">
             <a href='cadastrar.php?cad=2'>
          <i class="fas fa-users fa-5x"></i>
          <h5 class="card-title">Cadastrar Turma</h5>
        </div>
              </a>
      </div>

    </div>
<div class="container">

         
<div class="table-responsive">
    <table class="table table-hover table-striped">
        <thead>
            <tr>
            <th class="col-1 d-none d-md-table-cell">Código</th>
                <th class="col-2">Nome</th>
                <th class="col-1">Turma</th>
                <th class="col-1">Turno</th>
                <th class="col-1">Excluir</th>
            </tr>
        </thead>
        <tbody>
            <?php while ($row1 = mysqli_fetch_array($q_alunos)) { ?>
                <tr>
                    <input type='hidden' name='codigoaluno' value='<?= $row1['codigoaluno'] ?>'>
                    <td class="col-1 d-none d-md-table-cell"><?= $row1['codigoaluno'] ?></td>
                    <td class="col-2"><?= $row1['nome'] ?></td>
                    <td class="col-1">
                   
                          <?php 
                          $q_ambas =  mysqli_query($con, "SELECT * FROM tblturma, tblaluno WHERE tblturma.codigoturma=tblaluno.codigoturma AND tblaluno.codigoaluno=$row1[codigoaluno]");
                          while($row2=mysqli_fetch_array($q_ambas)){
                            ?><?=$row2["modalidade"]?><?php
                            
                          }
                          ?>
        
                    </td>
                    <td class="col-1">
                      <?php 
                          $q_ambas =  mysqli_query($con, "SELECT * FROM tblturma, tblaluno WHERE tblturma.codigoturma=tblaluno.codigoturma AND tblaluno.codigoaluno=$row1[codigoaluno]");
                          while($row2=mysqli_fetch_array($q_ambas)){
                            ?><?=$row2["turno"]?><?php
                            
                          }
                          ?>
                    </td>
                    <td class="col-1">
                                <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#confirmDeleteModal<?= $row1['codigoaluno'] ?>">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                                </svg>
                                <span class="d-none d-md-inline">Excluir</span>
                            </button>
                    </td>
                </tr>
                <div class="modal fade" id="confirmDeleteModal<?= $row1['codigoaluno'] ?>" tabindex="-1" aria-labelledby="confirmDeleteModalLabel" aria-hidden="true">
                <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="confirmDeleteModalLabel">Confirmação de Exclusão</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <p>Deseja realmente excluir o aluno?</p>
        </div>
      <!-- index.php -->
      <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
    <form action="excluir.php" method="post">
        <input type="hidden" name="codigoaluno" value="<?= $row1['codigoaluno'] ?>">
        <button class="btn btn-danger" name="excluir">Excluir</button>
    </form>
</div>
    </div>
</div>

            <?php } ?>
        </tbody>
    </table>


</div>


    <div class="table-responsive">    <table class="table table-hover table-striped">
    <thead>
        <tr>
            <th class="col-4 d-none d-md-table-cell">Código</th>
            <th class="col-4">Modalidade</th>
            <th class="col-3">Turno</th>
            <th class="col-3">Inserir</th>
            <th class="col-4">Excluir</th>
        </tr>
    </thead>
    <tbody>
        <?php while ($row = mysqli_fetch_array($q_turmas)) { ?>
            <tr>
                <input type="hidden" name="codigoturma" value="<?= $row['codigoturma'] ?>">
                <td><?= $row['codigoturma'] ?></td>
                <td><?= $row['modalidade'] ?></td>
                <td><?= $row['turno'] ?></td>
                <td>
                    <a href="cadastrar.php?cadastrar=<?=$row['codigoturma']?>">                   
                        <button class="btn btn-primary">
                    <span class="d-none d-md-inline">Inserir</span>
                    </button>
        </a>
                </td>
                <td>
                    <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#confirmDeleteModal<?= $row['codigoturma'] ?>">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                        </svg>
                        <span class="d-none d-md-inline">Excluir</span>
                    </button>
                </td>
            </tr>
            <!-- Modal de confirmação de exclusão -->
            <div class="modal fade" id="confirmDeleteModal<?= $row['codigoturma'] ?>" tabindex="-1" aria-labelledby="confirmDeleteModalLabel<?= $row['codigoturma'] ?>" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="confirmDeleteModalLabel<?= $row['codigoturma'] ?>">Confirmação de Exclusão</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>Deseja realmente excluir a turma?</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <form action="excluir.php" method="post">
                            <input type="hidden" name="codigoturma" value="<?= $row['codigoturma'] ?>">
                            <button class="btn btn-danger" name="excluir">Excluir</button>
        </form>
        </div>
    </div>
</div>

            <?php } ?>
        </tbody>
    </table>
    </div>
</div>
 
</tbody>
            </body>
</html>
