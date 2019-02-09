function palindrome(text){
	if(text.replace(/[\W_]+/g, "").toLowerCase().split("").reverse().join("")  == text.toLowerCase().replace( /[\W_]+/g, "")){
    return true;
  }else{
    return false;
  }
}


console.log(palindrome('eye'));