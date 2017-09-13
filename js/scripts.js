$(document).ready(function() {
  $("#formSurvey").submit(function() {
    var citizenNameInput = $("input#citizenName").val();
    var favoriteFoodInput = $("select#favoriteFood").val();
    var favoriteMusicInput = $("input:radio[name=favoriteMusic]:checked").val();
    var dobInput = $("#born").val();
    var colorInput = $("#color").val();

    $(".citizenName").text(citizenNameInput);
    $(".favoriteFood").text(favoriteFoodInput);
    $(".favoriteMusic").text(favoriteMusicInput);
    $(".dob").text(dobInput);
    $(".color").text(colorInput);

    $("#confirmation").show();

    event.preventDefault();
  })
})
