$(function (){
    let user = new User("Karl Marten", "Mägi", "24.07.1999",
     "Computer Science", 5);

    let courses = [
        new Course("Introduction to programming", 1, 21),
        new Course("Calculus", 1, 30),
        new Course("Python for dummies", 2, 56),
        new Course("How to handle school stress", 1, 100)
    ];

    init();

    function init(){
        $("#name").text(user.firstname + " " + user.lastname);
        $("#birthdate").text(user.birthdate);
        $("#faculty").text(user.faculty);
        $("#gpa strong").text(user.gpa);
        


        for(let i = 0; i < courses.length; i++){
            
        }
    }

});