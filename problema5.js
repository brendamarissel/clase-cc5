function problema5(n){
  var i = n;

  
  function verificar(i){
    for (var j = 1; j <= n; j++) {
     
      if( i % j !== 0 ){ return false; }
    };
    return true;
  }
  
  while( !(verificar(i)) ){ i+=n; }
  return i;
}