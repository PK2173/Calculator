let string = "";
let ShowValue = document.querySelector('.input')
let buttons = document.querySelectorAll('.cell')

Array.from(buttons).forEach((Element) => {
    Element.addEventListener('click', (e) => {
        if (e.target.innerHTML == 'AC') {
            string = "";
            ShowValue.value = string
        }
        else if(e.target.innerHTML == '←'){
            string = string.slice(0, -1); 
            ShowValue.value = string
        }
        else if (e.target.innerHTML == '=') {
            if (string.includes('%')) {
                value1 = string.split('%')[0]
                value2 = string.split('%')[1]
                console.log(typeof (string), value1, value2);
                try {
                    string = JSON.parse(value1) * JSON.parse(value2) / 100
                } catch (error) {
                    myFunction(error);
                    string = "";
                    ShowValue.value = string
                }
                // string = string.replace('=' , '')
                ShowValue.value = string
            } else {
                string = string.replace('X', '*')
                try {
                    string = eval(string)
                } catch (error) {
                    myFunction();
                    string = "";
                    ShowValue.value = string
                }
                // string = string.replace('=' , '')
                ShowValue.value = string
            }
        }
        else {
            string = string + e.target.innerHTML;
            ShowValue.value = string
            // console.log(string);
        }
    })
})


function myFunction(e) {
    var popup = document.getElementById("myPopup");
    document.querySelectorAll('.popuptext').value = e
    popup.classList.toggle("show");
}