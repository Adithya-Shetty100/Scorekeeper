var p1=document.querySelector("#play1");
var p2=document.querySelector("#play2");
var s1=document.querySelector("#one");
var s2=document.querySelector("#two");
var max=document.querySelector("p span");
var take= document.querySelector("input[type='number' ]");
var sc1=0;
var sc2=0;
var r=document.querySelector("#reset");
var gameOver=false;
var winScore=5;


p1.addEventListener("click",function(){
	sc1++;
	if (!gameOver)
	{
		if (sc1<= winScore)
			s1.textContent=sc1;

		if(sc1===winScore)
		{	gameOver=true;
			one.classList.add("winner");
		}
}

});

p2.addEventListener("click",function(){
	sc2++;

	if (!gameOver)
	{
		if (sc2<=winScore )
			s2.textContent=sc2;

		if(sc2===winScore)
		{	gameOver=true;
			two.classList.add("winner");}
}
});

r.addEventListener("click",function(){
		s1.textContent=0;
		s2.textContent=0;
		sc1=0;
		sc2=0;
		gameOver=false;
		one.classList.remove("winner");
		two.classList.remove("winner");
});

take.addEventListener("change",function(){
		var t=Number(take.value);
		winScore=t;
		max.textContent=winScore;
});






