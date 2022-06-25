/* const myNumber = 1;  */
/* $myNumber = 1;
$my2Number = 1;
$sum= $myNumber+$my2Number;
console.log($sum); */

$keyelements=document.querySelectorAll('.key');
 console.log($keyelements); 

$notes={
do:'01-do.mp3',
dodiesis: '02-dodiesis.mp3',
re: '03-re.mp3',
rediesis: '04-rediesis.mp3',
mi: '05-mi.mp3',
fa: '06-fa.mp3',
fadiesis: '07-fadiesis.mp3',
sol: '08-sol.mp3',
soldiesis: '09-soldiesis.mp3',
la: '10-la.mp3',
ladiesis: '11-ladiesis.mp3',
si: '12-si.mp3',
}

 function Play(key){
    
    $audioelement = new Audio();
    $note = $notes [key];
    $audioelement.src = 'sounds/' + $note;
    console.log('$audioelement.src');
    $audioelement.play();
}



$keyelements.forEach(function($keyelement){
     $keyelement.addEventListener('touchend', function(){
        $key = $keyelement.id;
    Play($key);
});
});


