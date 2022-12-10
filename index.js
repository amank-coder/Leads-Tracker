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

