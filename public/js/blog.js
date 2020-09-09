$(document).ready(() => {
  $("#blog-submit").on("click", event => {
    event.preventDefault();
    alert("click");
    $.ajax({
      method: "GET",
      url: "/blog1"
    }).then(alert("success"));
    // $.post("/api/blog", {
    //   Name: $("#author").val(),
    //   blog: $("#blog-box").val()
    // })
    //   .then(() => {
    //     window.location.replace("/members");
    //     // If there's an error, log the error
    //   })
    //   .catch(err => {
    //     console.log(err);
    //     console.log("wrong user/passowrd", err.statusText);
    //   });
  });
  alert("Hi");
});
