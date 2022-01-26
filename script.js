console.log('Its Working')

let theme = localStorage.getItem('theme')

if(theme == null){
    setTheme('light')
}
else{
        setTheme(theme)
    }


let themeDots = document.getElementsByClassName('theme-button')

for(var i = 0; i < themeDots.length ; i++)
{
    themeDots[i].addEventListener('click', function()
    {
       
        let mode = this.dataset.mode
        console.log('Clciked: ',mode)
        setTheme(mode)
        
    }) 
}

function setTheme(mode)
{
   
    
    if(mode == 'standard')
    {
        document.getElementById('theme-style').href="pink.css"
        
    }

    if(mode == 'light')
    {
        document.getElementById('theme-style').href="purple.css"
        
    }

    if(mode == 'dark')
    {
        document.getElementById('theme-style').href="dark.css"
        
    }

    localStorage.setItem('theme',mode)
   
}