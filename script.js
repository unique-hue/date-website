const noButton = document.querySelector(".no");

if (noButton) {

    function moveNoButton() {

        const container = document.querySelector(".buttons");

        const maxX = container.clientWidth - noButton.offsetWidth;
        const maxY = container.clientHeight - noButton.offsetHeight;

        const x = Math.random() * Math.max(maxX, 0);
        const y = Math.random() * Math.max(maxY, 0);

        noButton.style.left = x + "px";
        noButton.style.top = y + "px";
        noButton.style.transform = "none";
    }


    noButton.addEventListener("pointerenter", moveNoButton);

    noButton.addEventListener("pointerdown", moveNoButton);
}



const yesButton = document.querySelector(".yes");

if (yesButton) {

    yesButton.addEventListener("click", function() {

        window.location.href = "date.html";

    });

}



const planButton = document.querySelector("#planButton");

if (planButton) {

    planButton.addEventListener("click", function() {

        const date = document.querySelector("#date").value;
        const place = document.querySelector("#place").value;


        if (date === "" || place === "") {

            alert("Please choose a date and place first 😭");

            return;
        }


        alert(
            "Date planned! 🌹💕\n\n" +
            "Date: " + date +
            "\nPlace: " + place
        );

    });

}