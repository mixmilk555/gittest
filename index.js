function changeCo() {
    let color1 = document.querySelector('#in1').value
    let color2 = document.querySelector(`#in2`).value
    // alert(color1)
    // alert(color2)
    document.querySelector('h1').style.color = color1
    document.querySelector('h1').style.backgroundColor = color2
}