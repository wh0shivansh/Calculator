const screen = document.getElementById('display');
buttons = document.querySelectorAll('button');
let screenVal = "";
let isBracket = true;
const theme1 = document.getElementById('theme1');
const theme2 = document.getElementById('theme2');
const theme3 = document.getElementById('theme3');
const mainBody = document.querySelector("body");
const lastQuery = document.getElementById('last-query');


theme2.addEventListener('click',()=>{  
    // console.log('clicked');
    mainBody.style.backgroundColor="#e6e6e6";
    colorBtn = document.querySelectorAll('.color-change');
    for(item of colorBtn){
        item.style.backgroundColor="goldenrod";
        // item.classList.add('color-change');
    }
})

theme1.addEventListener('click',()=>{  
    // console.log('clicked');
    mainBody.style.backgroundColor="goldenrod";
    colorBtn = document.querySelectorAll('.color-change');
    for(item of colorBtn){
        item.style.backgroundColor='rgb(180, 37, 37)';
    }
})

theme3.addEventListener('click',()=>{  
    // console.log('clicked');
    mainBody.style.backgroundColor="skyblue";
    colorBtn = document.querySelectorAll('.color-change');
    for(item of colorBtn){
        item.style.backgroundColor=' rgb(46, 109, 46)';
    }
})

for(btn of buttons){
    btn.addEventListener('click',(e)=>{
        btnText = e.target.innerText;
        if(btnText == "AC"){
            screen.value = "";
            isBracket=true;
        }
        else if(btnText == "="){
            lastQuery.innerText = screen.value;
            
            try{
                let displayValue = eval(screen.value);
                screen.value=displayValue;
            }
            catch(err){
                console.log(err);
                screen.value="Error";
                isBracket=true;
            }
        }
        else if(btnText == "<-"){
            screen.value = screen.value.slice(0,-1);
        }
        else if(btnText == "()"){
            if(isBracket){
                screen.value+="(";
                isBracket=!isBracket;
            }
            else{
                screen.value += ")";
                isBracket=!isBracket;
            }
        }
        else{
            // let strEval = String(eval(screen.value));
                screen.value+=btnText;
        }
    })
}

