<?php
header('Content-type: application/json');
header("Access-Control-Allow-Origin: *"); 

include 'conexao.php';

$data=array(); 

if(isset($_REQUEST['codigoturma'])){       
     $q =  mysqli_query($con, "SELECT * FROM tblturma, tblaluno WHERE tblturma.codigoturma=tblaluno.codigoturma AND tblturma.codigoturma=$_REQUEST[codigoturma]");
    }else{
 
        $q=mysqli_query($con, "SELECT * FROM tblturma");}




while ($row=mysqli_fetch_array($q)){		
    $data[]=$row; 
}
echo json_encode($data); 

?>