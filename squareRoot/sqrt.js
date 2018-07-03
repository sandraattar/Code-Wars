function findNextSquare(sq){
    var root1;
    var root2;
    if(Math.sqrt(sq)%1 ===0){
         root1=Math.sqrt(sq)
         root2=root1+1
    }else{
        return -1;
    }
    return root2*root2;
}
