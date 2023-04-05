function submit1(myFormRef){
	
	
	
	let fname=myFormRef.firstname.value;
	
	if(fname==""){
		alert("Name must be filled out");
		return false;
	}

	
	
	let f2name=myFormRef.lastname.value;
	
	if(f2name==""){
		alert("Last name must be filled out");
		return false;
	}
	
	
	
	
	let f1name=myFormRef.email.value;
	
	if(f1name==""){
		alert("Email must be filled out");
		return false;
		
	}
	
	/*if(f1name==""){
		alert("Should enter a valid email!");
		return false;
		myFormRef.email.value = "";
	}*/
	
	
	
	
	/*let at = email.indexOf("@");
	let dot=email.lastIndexOf(".");
	if(at<1||dot<at+2||dot+2>=email.length)
	{
		alert("Not a valid email")
        return false;
    }*/

	
	return (true)
	
	
}
