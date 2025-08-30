const textInput = document.getElementById("textInput");
const generateBtn = document.getElementById("generateBtn");
const qrcode_container = document.getElementById("qrcode-container");
const placeholder_text = document.getElementById("placeholder-text");

const generateQRCode = () => {
  // alert()

  try {
    const text = textInput.value.trim();
    if (text === "") {
      placeholder_text.classList.add("text-red-800");
      placeholder_text.innerText = "please write somethings";
      return;
    }
    placeholder_text.remove();

    new QRCode(qrcode_container, {
      text: text,
      width: 160,
      hight: 160,
      colorDark: "black",
      colorLight: "white",
      correctLevel:QRCode.CorrectLevel.M
    //   correctLevel: QRCode.CorrectLevel.H,
    });
    textInput.value=''
  } catch (error) {
    console.log(error);
  }
};

generateBtn.addEventListener("click", generateQRCode);
textInput.addEventListener('keydown',generateQRCode)
