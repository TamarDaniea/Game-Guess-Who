let btn = document.querySelector('button');
let inputname = document.querySelector('#inputname');
let inputpass = document.querySelector('#inputpass');
function isStrongPassword(inputpass) {
    if (inputpass.value.length < 8) {
        return false;
    }
    const hasUpperCase = /[A-Z]/.test(inputpass.value);
    const hasLowerCase = /[a-z]/.test(inputpass.value);
    const hasDigit = /\d/.test(inputpass.value);
    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(inputpass.value);

    return hasUpperCase && hasLowerCase && hasSpecialChar;
}
btn.addEventListener('click', () => {
    if (inputname.value !== '' && inputpass.value !== ''&&isStrongPassword(inputpass)) {
        let check = localStorage.getItem('users');
        let flag = true;

        if (!check) {
            let users = [];
            localStorage.setItem("users", JSON.stringify(users));
            flag = false;
        } else {
            check = JSON.parse(check);
            flag = false;

            for (let i = 0; i < check.length && !flag; i++) {
                if (check[i].password === inputpass.value) {
                    flag = true;
                    localStorage.setItem("currentUser", JSON.stringify({ name: inputname.value, singUp: false }));
                }
            }
        }

        if (!flag) {
            check.push({ password: inputpass.value, name: inputname.value });
            let currentUser = {
                name: inputname.value,
                singUp: true
            };
            localStorage.setItem("currentUser", JSON.stringify(currentUser));
            localStorage.setItem("users", JSON.stringify(check));
        }

        window.open("/גלרייה/gallery.html", "_self");
    } else {
        alert("אנא מלא את כל השדות או בדוק האם סיסמתך חזקה ומכילה אותיות גדולות וקטנות מספר ותו מיוחד");
    }
});
