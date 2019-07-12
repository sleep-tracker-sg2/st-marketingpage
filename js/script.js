let btn = document.querySelector('#mobile__nav-button');

    btn.addEventListener('click', function() {
        let mobileList = document.querySelector('#mobile__nav-list');
    
        if(mobileList.style.top <= "0px"){
            mobileList.style.top = "80px";
        }else{
            mobileList.style.top = "-160px";
        }
    })
