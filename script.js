
var currentTab = document.getElementsByClassName("tab");
	for(var i=0; i<currentTab.length; i++)
	{
		currentTab[i].addEventListener("click",showTab);
		
	}



function showTab(){
	

	var temp = document.getElementById(this.dataset.target);
	for(var i=0; i<currentTab.length; i++)
	{
		var target=document.getElementById(currentTab[i].dataset.target);
		if(target.classList.contains("show") && target!=temp)
		{
			target.classList.remove("show");
		}
	}
	temp.classList.add("show");

	
	asdasdasdsadsad
}