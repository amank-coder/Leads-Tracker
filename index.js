//ctrl+/
// document.getElementById("count-el").innerText="5"
// let age=5
//string wins
// let count=0

// let countEl=document.getElementById("count-el")
// let saveEl=document.getElementById("save-el")

// function increment()
// {
// 	count=count+1
// 	countEl.innerText=count
// }
// //TextContent

// function save()
// {
// 	let countStr=" " + count + " - "
// 	saveEl.innerText+=countStr
// 	count=0
// 	countEl.innerText=0

// }





// let num1=8
// let num2=6

// document.getElementById("num1-el").textContent=num1
// document.getElementById("num2-el").textContent=num2

// let resEl=document.getElementById("result")

// function add()
// {
// 	let res=num1+num2
// 	resEl.textContent="Result: "+ res

// }

// function sub()
// {
// 	let res=num1-num2
// 	resEl.textContent="Result: " + res	
// }

// function mult()
// {
// 	let res=num1*num2
// 	resEl.textContent="Result: " + res
// }

// function div()
// {
// 	let res=num1/num2
// 	resEl.textContent="Result: " + res 
// }



// let player={
// 	name:"Per",
// 	chips:145   //sayhello:function(){console.log("hi")}
// 	            //player.sayhello()
// }

// let cards=[]
// let hasBlackjack=false
// let isAlive=false
// let sum=0
// let message=""

// sumEl=document.getElementById("sum-el")
// messageEl=document.getElementById("message-el")
// cardEl=document.getElementById("card-el")
// playerEl=document.getElementById("player-el")

// playerEl.textContent=player.name+": $"+player.chips

// function getRandomCard()
// {
// 	let randomNumber=Math.floor(Math.random()*13)+1
// 	if(randomNumber===1)
// 	{
// 		return 11
// 	}
// 	else if(randomNumber>10)
// 	{
// 		return 10
// 	}
// 	else
// 	{
// 		return randomNumber
// 	}
// }


// function startGame()
// {
// 	isAlive=true
// 	let firstCard=getRandomCard()
// 	let secondCard=getRandomCard()
// 	cards=[firstCard,secondCard]
// 	sum=firstCard+secondCard
	
// 	renderGame()
// }

// function renderGame()
// {
// 	if(sum<21)
// 	{
// 	message="Do you want to draw another card?"
// 	}
// 	else if(sum===21)
// 	{
// 	message="You've got black jack"
// 	hasBlackjack=true
// 	}
// 	else
// 	{
// 	message="You are out of game!"
// 	isAlive=false
// 	}
// 	messageEl.textContent=message
// 	sumEl.textContent="Sum: "+sum
//     cardEl.textContent="Card:"
//     for(let i=0;i<cards.length;i++)
//     {
//     	cardEl.textContent+=" "+cards[i]
//     }
// }

// function newCard()
// {

// 	if(isAlive===true && hasBlackjack===false)
// 	{

// 		let card=getRandomCard()
// 		sum+=card
// 		cards.push(card)
// 		renderGame()	
// 	}
	
// }

// ---------Practice----------

// 

// -------------Chrome Extension--------------

let myLead=[]
const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")
const deleteBtn=document.getElementById("delete-btn")
const tabBtn=document.getElementById("tab-btn")
//localStorage can store only strings

//localStorage.setItem("myLead","www.abc.com")
//console.log(localStorage.getItem("myLead"))
// localStorage.clear()

// localStorage.clear()

const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)

if(leadsFromLocalStorage)
{
	myLead=leadsFromLocalStorage
	render(myLead)
}


tabBtn.addEventListener("click",function(){
	    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
		myLead.push(tabs[0].url)
		localStorage.setItem("myLeads",JSON.stringify(myLead))
		render(myLead)
		console.log(tabs[0].url)
	})	
})


deleteBtn.addEventListener("dblclick",function()
{
	localStorage.clear()
	myLead=[]
	render(myLead)
})

inputBtn.addEventListener("click",function(){
	myLead.push(inputEl.value)
  	inputEl.value=""
  	localStorage.setItem("myLeads",JSON.stringify(myLead))
  	render(myLead)

  	console.log(localStorage.getItem("myLeads"))
})

function render(Lead)
{
	let listItems=""
	for(let i=0;i<Lead.length;i++)
	{
	listItems+=`<li>
					<a target='_blank' href='#'>${Lead[i]}</a>
				</li>`
	//ulEl.innerHTML+="<li>" + myLead[i] + "</li>"
	// const li=document.createElement("li")
	// li.textContent=myLead[i]
	// ulEl.append(li)
	}
	ulEl.innerHTML=listItems
}

//[] is not false

