/*
   ┌─────────────────────────────────────────────────────────────────────────┐
┌──┤  Hi, I'm glad you are a curiosity programmer, I hope you are successful.├──┐
│  └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│                                                                               │
│                                                                               │
│                                                                               │
│                        ┌─────────────────────────────┐                        │
└────────────────────────┤       Amirreza Heydari      ├────────────────────────┘
                         └─────────────────────────────┘
*/

let input_recaptcha = document.getElementById("captcha-input");
let submit_captcha = document.getElementById("submit-captcha");
let output_result_recaptcha = document.getElementById("output-result-recaptcha");
let random_number = Math.floor(Math.random() * 10);
let random_number2 = Math.floor(Math.random() * 100);
let All = random_text(1) + random_number + random_text(1) + random_number2;
let form_captcha = document.getElementById("form-captcha");
// let All = random_number2;

function random_text(text_length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < text_length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
// output_result_recaptcha.innerHTML = All;

function convert_image(text) {
    var c = document.getElementById("Canvas-recaptcha");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 100, 50);
    ctx.fillStyle = '#bbb';
    ctx.fillRect(100, 20, 100, 50)
    var gradient = ctx.createLinearGradient(0, 0, 200, 100);
    gradient.addColorStop(0, '#111');
    gradient.addColorStop(1, '#aaa');
    ctx.fillStyle = gradient;
    var fontface = "Courier";
    ctx.font = "30px Courier";
    ctx.textAlign = 'center';
    var fontsize = 30;
    do {
        fontsize--;
        ctx.font = fontsize + "px " + fontface;
    } while (ctx.measureText(text).width > c.width)
    ctx.fillText(text, 150, 55);
}

function cheker_captcha() {
    // document.write(input_recaptcha.value);
    // let input_recaptcha = document.getElementById("captcha-input").value;
    if (input_recaptcha.value == All) {
        output_result_recaptcha.innerHTML = '<div class="alert alert-success" role="alert">با موفقیت تایید شدی :)</div>';
        setTimeout(() => {
            form_captcha.style.display = "none";
        }, 3000);
    } else {
        output_result_recaptcha.innerHTML = '<div class="alert alert-danger" role="alert">تایید نشدی :(</div>';
        setTimeout(() => {
            location.reload();

        }, 2000);
    }
}
submit_captcha.addEventListener("click", cheker_captcha);
window.onload = convert_image(All);

/**
Web Design BY :)
┌────────────────────┐
│      CLAROTM       │
│  ───────────────   │
│     Contact Me     │
│                    │
│    0998 1040 774   │
│                    │
│    0939 5574 353   │
│   ───────────────  │
│     iseokar.ir     │
│                    │
│     ClaroTM.ir     │
│                    │
└────────────────────┘
*/