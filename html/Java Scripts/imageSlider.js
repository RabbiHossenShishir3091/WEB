var images = ["pictures/1.jpg","pictures/2.jpg","pictures/3.jpg","pictures/4.jpg","pictures/5.jpg","pictures/6.jpg","pictures/7.jpg","pictures/8.jpg","pictures/9.jpg"];

var imageTag = document.querySelector("img"); 

var count = 0;

//function next1(){
	//document.write("go")
//}

function next(){
	count++;
	
	if(count >= images.lenght){
		count=0;
		imageTag.src = images[count];
	}else{
		
		imageTag.src = images[count];
	}
}

function prev(){

	count--;
	
	if(count < 0){
		count = images.lenght - 1;
		imageTag.src = images[count];
	}
	else{
		imageTag.src = images[count];
	}
}