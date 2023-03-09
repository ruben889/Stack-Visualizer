/// create a box shape containing the text/num from input
/// push button (takes input and adds the box)
/// active stack in our javscript file
// if stack is empty give user error message when popping 

// Lets get a basic protype First!

// our stack!
stack = []
const text = $("stackarea")

function $(ID)
{
 return document.getElementById(ID)
}

// pointer/id to the child node
// div name + length of stack div1.. div2.. div3..

function Push()
{ 

    // if stack is empty append child
    // is stack is full  insert before
    var item = $("stackinput")
    var value = item.value
    stack.push(value)
    if(stack.length === 1)
    {
    let stackDiv = document.createElement("div")
    stackDiv.setAttribute("id","div"+stack.length)
    stackDiv.setAttribute("class","stackcomponent")
    stackDiv.append(value)
    text.appendChild(stackDiv)
    
    setTimeout(function(){
        stackDiv.className +=" in"
    },0)

    }
    else
    {
    console.log(text.children)

    let refDiv = $("div"+String(stack.length-1))
    let stackDiv = document.createElement("div")
    stackDiv.setAttribute("class","stackcomponent")
    stackDiv.setAttribute("id","div"+stack.length)
    stackDiv.append(value)
    text.insertBefore(stackDiv,refDiv)

    setTimeout(function(){
        stackDiv.className +=" in"
    },0)
    }


}

function Pop()
{
    if(stack.length == 0)
    {
        console.log("Stack is Empty!")
    }
    else{
    let refDiv = $("div"+String(stack.length))
    refDiv.className = "stackcomponent"
    setTimeout(function(){
        refDiv.parentNode.removeChild(refDiv)
    },500)
    stack.pop()
    }

}


// div is a block element it takes the entire width of where it is 
// span in an inline element it just wraps around its contain