$(document).ready(function() {
  $("#formSurvey").submit(function() {
    var citizenNameInput = $("input#citizenName").val();
    var favoriteFoodInput = $("select#favoriteFood").val();
    var favoriteMusicInput = $("input:radio[name=favoriteMusic]:checked").val();

    $(".citizenName").text(citizenNameInput);
    $(".favoriteFood").text(favoriteFoodInput);
    $(".favoriteMusic").text(favoriteMusicInput);

    $("#confirmation").show();

    event.preventDefault();
  })
})
