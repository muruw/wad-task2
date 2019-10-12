$(function() {
  let user = new User(
    "Karl Marten",
    "Mägi",
    "24.07.1999",
    "Computer Science",
    5
  );

  let courses = [
    new Course("Introduction to programming", 1, 21),
    new Course("Calculus", 1, 30),
    new Course("Python for dummies", 2, 56),
    new Course("How to handle school stress", 1, 100)
  ];

  init();
  
  function init() {

    $("#name").text(user.firstname + " " + user.lastname);
    $("#birthdate").text(user.birthdate);
    $("#faculty").text(user.faculty);
    $("#gpa strong").text(user.gpa);

    $("tbody").empty();

    for(let i = 0; i < courses.length; i++){

      let column = $("<tr></tr>");
    
      const index = $("<td></td>").text(i + 1);
      const td = $("<td></td>").text(courses[i].title);
      const td2 = $("<td></td>").text(courses[i].semester);
      const td3= $("<td></td>").text(courses[i].grade);
    
      column.append(index, td, td2, td3);
      $("tbody").append(column);  
    }

    $("#profile-button").click(function() {
      $("#courses-container").removeClass("active");
      $("#courses-button").removeClass("active");
      $("#profile-container").addClass("active");
      $("#profile-button").addClass("active");
    });

    $("#courses-button").click(function() {
      $("#profile-container").removeClass("active");
      $("#profile-button").removeClass("active");
      $("#courses-container").addClass("active");
      $("#courses-button").addClass("active");
    });

    $(".blue-button").click(function() {
      $("#add-course").toggle();
    });

    $("#cancel-course").click(function() {
      $(".input").val("");
      $("#add-course").hide();
    });
  }
});
