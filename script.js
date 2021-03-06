const submitButton = document.getElementById("submitButton");
const feedbackButton = document.getElementById("feedbackButton");
const newsletterFieldName = document.getElementById("newsletterFieldName");
const newsletterFieldEmail = document.getElementById("newsletterFieldEmail");
const feedbackArea = document.getElementById("feedbackArea");
const errorFeedback = document.getElementById("errorFeedback");

function saveToLocalStorage() {
  const newsletterValueName = newsletterFieldName.value;
  const newsletterValueEmail = newsletterFieldEmail.value;

  if (newsletterValueName.length > 0 && newsletterValueEmail.length > 0) {
    localStorage.setItem("newsletterValueName", newsletterValueName);
    localStorage.setItem("newsletterValueEmail", newsletterValueEmail);

    alert("Submit succesful");
  }
}

function saveFeedbackToLS(value) {
  localStorage.setItem("feedback", value);
}

function submitFeedback() {
  errorFeedback.style.display = "none";
  var feedbackValue = document.forms["feedbackForm"]["feedbackText"].value;
  if (feedbackValue == "" || feedbackValue == null) {
    errorFeedback.style.display = "block";
    return false;``
  } else {
    saveFeedbackToLS(feedbackValue);
    alert("Feedback submitted succesfully");
  }
}

feedbackArea.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    submitFeedback();
  }
});

feedbackButton.addEventListener("click", () => {
  submitFeedback();
});

