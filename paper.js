function calc() {
    selectedValue = document.querySelector('#paper-select').value;
    inputNumber = document.querySelector('#paper-number').value;

    if(selectedValue == "무림백상60") {
        thickness = 71;
    }
    else if(selectedValue == "무림백상70") {
        thickness = 82;
    }
    else if(selectedValue == "무림백상80") {
        thickness = 95;
    }
    else if(selectedValue == "무림백상90") {
        thickness = 105;
    }
    else if(selectedValue == "무림백상100") {
        thickness = 115;
    }
    else if(selectedValue == "무림스노우80") {
        thickness = 71;
    }
    else if(selectedValue == "무림스노우90") {
        thickness = 81;
    }
    else if(selectedValue == "무림스노우100") {
        thickness = 92;
    }
    else if(selectedValue == "무림스노우120") {
        thickness = 108;
    }
    else if(selectedValue == "무림스노우150") {
        thickness = 140;
    }
    else if(selectedValue == "한솔뉴플65") {
        thickness = 70;
    }
    else if(selectedValue == "한솔뉴플70") {
        thickness = 71;
    }
    else if(selectedValue == "한솔뉴플80") {
        thickness = 81;
    }
    else if(selectedValue == "한솔뉴플90") {
        thickness = 91;
    }
    else if(selectedValue == "한솔뉴플100") {
        thickness = 101;
    }

    result = thickness * inputNumber / 2000 + " mm";

    resultElement = document.querySelector('#result-area');
    resultElement.innerText = result;
}