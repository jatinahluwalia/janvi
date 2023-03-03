const bmi_btn = document.querySelector(".bmi-btn")
const weight = document.querySelector(".weight")
const height = document.querySelector(".height")
const dialog = document.querySelector("dialog")

bmi_btn.addEventListener("click", event=>{
    const weightValue = weight.value
    const heightValue = height.value / 100
    const bmi = weightValue / (heightValue * heightValue)
    dialog.innerText = "Your BMI is" + (Math.round(bmi*100)/100) 
    dialog.showModal()
})