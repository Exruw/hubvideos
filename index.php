<?php
header('Content-type: application/json; charset=utf-8');

$dir    = './flist';
$files1 = array_slice(scandir($dir),2);
$exclusion = array("\.\.");
$list = json_encode($files1, JSON_PRETTY_PRINT);
print($list);
?>