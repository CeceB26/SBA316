// Cache the form element//
const subscribeForm = document.getElementById("subscribe-form");
//logged to confirm the redult shows in inspect
console.log(subscribeForm);

//Chache the Raido Buttons
const radioButtons = document.querySelectorAll("input[name='subscribe']");
//Logged to confirm results
//BOM method #2
console.log(radioButtons);

/*This is making it so the following is happening.
 1. all fields are required to be completed and with the correct formating in order to submit. 
 2.If not message will appear to advise end user how to correct. 
 3.The browser will store previous used inputs and pop up if input starts to match previous entry to allow for quick fill of all fields required.
 4.Once submitted "thank You" message appears and the form reset automatically.*/
 //Event Listener #1
 //Form input with html attribute validation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("subscribe-form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const yesRadio = document.getElementById("subscribe-yes");
  const noRadio = document.getElementById("subscribe-no");
   // ✅ Event-based validation (runs when user leaves the email field)
  emailInput.addEventListener("blur", function () {
    if (emailInput.value.trim() === "") {
      emailInput.style.border = "2px solid red";
    } else {
      emailInput.style.border = "";
    }
  });
//Event Listener #2
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = nameInput.value;
    const email = emailInput.value;

    let subscribeChoice = "";
    if (yesRadio.checked) {
      subscribeChoice = "yes";
    } else if (noRadio.checked) {
      subscribeChoice = "no";
    }

    if (fullName === "" || email === "" || subscribeChoice === "") {
      alert("Please complete all fields.");
      return;
    }
});

    const message = document.createElement("p");
     //Text modification method used
    message.textContent = "Thank you for submitting the form!";
    //parent → child insertion//
    //Used appendChild to add new element//
 // Modified attribute in response to user interaction (submit)
    form.classList.add("submitted");

     /*Modified attributes of element in response to user interaction. After the form is submited a windows alert will pop with message*/
 // 1️⃣ Alert the user
 //BOM method #1
    window.alert("Thank you for subscribing!");

// 2️⃣ Modify CSS class in response to interaction
    form.classList.add("submitted");

    form.reset();
  });

//Iterate a collection of elements 
const faqItems = document.getElementsByClassName("faq-item");
//Console log to check in Inspect
console.log(faqItems);
//adding a border to the left side of each FAQ secition in the list
for (let i = 0; i < faqItems.length; i++) {
  faqItems[i].style.borderLeft = "4px solid #1f3a5f";
  faqItems[i].style.paddingLeft = "10px";
}


//Created new Element: a <p> to html. note (formating) in the main section of the html. Includes the style inline
document.addEventListener("DOMContentLoaded", function () {
  const note = document.createElement("p");

  note.textContent = "These FAQs are updated for the Central Ohio market.";
 
  note.style.backgroundColor = "#e7f1ff";
  note.style.padding = "10px";
  note.style.border = "1px solid #1f3a5f";

  const mainSection = document.querySelector("main");
  mainSection.prepend(note);
});

//Use HTML templating with the cloneNode method to create templated content. 
/*1. the template was added to the pottom of the webpage.  Not inline with orginal contecnt so you can see the template works.
2.I will be able to comment this out and move around but the cleaninest and simplicity using HTML and clone*/
const template = document.getElementById("faq-template");
const mainSection = document.querySelector("main");

const newFaqs = [
  {
    question: "Is Central Ohio still competitive?",
    answer: "Yes, especially in high-demand suburbs."
  },
  {
    question: "Can ADUs be rented long-term?",
    answer: "It depends on local zoning and permits."
  }
];

for (let i = 0; i < newFaqs.length; i++) {
  const clone = template.content.cloneNode(true);

  const h3 = clone.querySelector("h3");
  const p = clone.querySelector("p");

  h3.textContent = newFaqs[i].question;
  p.textContent = newFaqs[i].answer;

template.parentNode.insertBefore(clone, template);
}


