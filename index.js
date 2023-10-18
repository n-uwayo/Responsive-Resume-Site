const content = document.getElementsByClassName("content")[0];
const button = document.getElementById("apl");
const form = document.getElementById("form");
const button1 = document.getElementById("submit");
const reply = document.getElementById("repl");

function main() {
    button.addEventListener("click", e => {
        form.classList.toggle("frm");
    })
}
main();
button1.addEventListener("click", e => {
    form.classList.toggle("submit");
    // console.log(fname.value+" "+lname.value);
    reply.classList.toggle("repl");
    if (fname.value && lname.value && email.value) {
        reply.innerText = `Thank you, ${fname.value} ${lname.value}!
    your message is successfully received.`;
        console.log(`${fname.value} ${lname.value} ${email.value}`)
    } else {
        reply.innerText = `Please, fill all the fields correctly!!`
        console.log(`${fname.value} ${lname.value} ${email.value} `);

        setTimeout(() => {
            Message();
        }, 3000)
    }
})

function Message() {
    reply.classList.add("up");
    reply.innerText = `Please,Refresh and click on Contact button to obtain the form again!!!.`
}
Message();