/* ### Theme 1 */
one.addEventListener('click', () =>{
    one.style.opacity='1';
    two.style.opacity='0';
    three.style.opacity='0';
    document.body.style.backgroundColor = "hsl(222, 26%, 31%)";
    header[0].style.color = "hsl(0, 0%, 100%)";
    keypadCircle.style.backgroundColor = "hsl(223, 31%, 20%)";
    display.style.backgroundColor = "hsl(224, 36%, 15%)";
    display.style.color = "hsl(0, 0%, 100%)";
    keyboard.style.backgroundColor = "hsl(223, 31%, 20%)";

    btn.forEach(btn => {
        btn.style.backgroundColor="hsl(30, 25%, 89%)";
        btn.style.boxShadow=" 0.02rem 0.2rem hsl(28, 16%, 65%)";
        btn.style.color="hsl(221, 14%, 31%)";

    });

    buttons[3].style.backgroundColor = " hsl(225, 21%, 49%)";
    buttons[3].style.boxShadow = "hsl(224, 28%, 35%)";
    buttons[16].style.backgroundColor = "hsl(225, 21%, 49%)";
    buttons[16].style.boxShadow = "hsl(224, 28%, 35%)";
    buttons[17].style.backgroundColor = "hsl(6, 63%, 50%)";
    buttons[17].style.boxShadow = "hsl(6, 70%, 34%);"  
});


/* ### Theme 2 */
two.addEventListener('click', () =>{
    one.style.opacity='0';
    two.style.opacity='1';
    three.style.opacity='0';
    document.body.style.backgroundColor = " hsl(0, 0%, 90%)";
    header[0].style.color = "hsl(198, 20%, 13%)";
    keypadCircle.style.backgroundColor = "hsl(0, 5%, 81%)";
    display.style.backgroundColor = "hsl(0, 0%, 93%)";
    display.style.color = "hsl(198, 20%, 13%)";
    keyboard.style.backgroundColor = "hsl(0, 5%, 81%)";
   
    btn.forEach(btn => {
        btn.style.backgroundColor="hsl(0, 0%, 90%)";
        btn.style.boxShadow=" 0.02rem 0.2rem hsl(35, 11%, 61%)";
        btn.style.color="hsl(60, 10%, 19%)";

    });

    buttons[3].style.backgroundColor = "hsl(185, 42%, 37%)";
    buttons[3].style.boxShadow = "hsl(185, 58%, 25%)";
    buttons[16].style.backgroundColor = "hsl(185, 42%, 37%)";
    buttons[16].style.boxShadow = "hsl(185, 58%, 25%)";
    buttons[17].style.backgroundColor = "hsl(25, 98%, 40%)";
    buttons[17].style.boxShadow = "hsl(25, 99%, 27%);"

})

/* ### Theme 3 */
three.addEventListener('click', () =>{
    one.style.opacity="0";
    two.style.opacity="0";
    three.style.opacity="1";
    document.body.style.backgroundColor = "hsl(268, 75%, 9%)";
    header[0].style.color = "hsl(52, 100%, 62%)";
    keypadCircle.style.backgroundColor = "hsl(268, 71%, 12%)"
    display.style.backgroundColor = "hsl(268, 71%, 12%)";
    display.style.color = "hsl(52, 100%, 62%)";
    keyboard.style.backgroundColor = "hsl(268, 71%, 12%)";
    
    btn.forEach(btn => {
        btn.style.backgroundColor="hsl(268, 47%, 21%)";
        btn.style.boxShadow=" 0.02rem 0.2rem hsl(290, 70%, 36%)";
        btn.style.color="hsl(52, 100%, 62%)";
    });

    buttons[3].style.backgroundColor = " hsl(281, 89%, 26%)";
    buttons[3].style.boxShadow = "hsl(285, 91%, 52%)";
    buttons[16].style.backgroundColor = "hsl(281, 89%, 26%)";
    buttons[16].style.boxShadow = "hsl(285, 91%, 52%)";
    buttons[17].style.backgroundColor = "hsl(176, 100%, 44%)";
    buttons[17].style.boxShadow = "hsl(177, 92%, 70%);"
});