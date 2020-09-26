$(document).ready(function() {
  $("#gaeYolk").click(function(e) {
    $("#gaeYolk,#shadNu,#theMist,#joeRick,#jasonAlex,#olregRoo").css(
      "opacity",
      0.5
    );
    $(".detailbot p").html(
      "The 30th Times-in-row Boxing Champion from Russia. Start Boxing since age of 10 and Rise through the rank in Boxing World at the age of 22. Nicknamed as “Babayaga”, Yolk is respected by others because his accomplishment. Now he headed toward Xtreme Chaser to fulfil his Journey as a Conqueror"
    );
    $(this).css("opacity", 1);
    $(".detailtop h1").text("Gae Yolk");
    $(".character").css("background-image", 'url("./assets/GaeYolk.jpg")');
  });

  $("#shadNu").click(function(e) {
    $("#gaeYolk,#shadNu,#theMist,#joeRick,#jasonAlex,#olregRoo").css(
      "opacity",
      0.5
    );
    $(this).css("opacity", 1);
    $(".detailtop h1").text("Shad Nu Elduardo");
    $(".character").css(
      "background-image",
      'url("./assets/ShadNuElduardo.jpg")'
    );
    $(".detailbot p").html(
      "Young Prodigy from Egypt. The 4th Brother of Nu Family. Learning Technique of Nu Arts from really young age, make him one of The Best in Egypt. He won every Local Tournament he enter since the age of 15. Looking forward for a new challenge and rumor of Xtreme Chaser is finally comeback, he Took his time and money travel to the Esylum Island."
    );
  });

  $("#theMist").click(function(e) {
    $("#gaeYolk,#shadNu,#theMist,#joeRick,#jasonAlex,#olregRoo").css(
      "opacity",
      0.5
    );
    $(this).css("opacity", 1);
    $(".detailtop h1").text("The Mist");
    $(".character").css("background-image", 'url("./assets/Themist.jpg")');
    $(".detailbot p").html(
      "A tall man surrounded by mysteries, no one know his true identity and thus people who defeated by him start calling him “The Mist”. With Absolute Strength he hold people said he defeated his opponents with only 2 or 3 fist, make him one of the few Participant of Xtreme Chaser that make it to top 12. Who is he? And what is his intention joining Xtreme Chaser?"
    );
  });

  $("#joeRick").click(function(e) {
    $("#gaeYolk,#shadNu,#theMist,#joeRick,#jasonAlex,#olregRoo").css(
      "opacity",
      0.5
    );
    $(this).css("opacity", 1);
    $(".detailtop h1").text("Joe Ricksarm");
    $(".character").css("background-image", 'url("./assets/JoeRicksarm.jpg")');
    $(".detailbot p").html(
      "A criminal that have been wanted in many Countries due to his Slaughter cases. Nicknamed “The Bloodbath” he don’t give any mercy to his opponent what so ever, he will fight until his opponent either death or surrender. His Swift and Deathly technique making him a walking Killing Machine. He looking for a greater power, that’s why he join Xtreme Chaser."
    );
  });

  $("#jasonAlex").click(function(e) {
    $("#gaeYolk,#shadNu,#theMist,#joeRick,#jasonAlex,#olregRoo").css(
      "opacity",
      0.5
    );
    $(this).css("opacity", 1);
    $(".detailtop h1").text("Jason Alexander");
    $(".character").css(
      "background-image",
      'url("./assets/JasonAlexander.jpg")'
    );
    $(".detailbot p").html(
      "Once an army back in the United States, he one of the Young Soldier back in world war 2 but his Ages doesn’t slow him a little bit. He developed a new combat technique named Close Quarter Combat (CQC for short) a deathly technique for Hand-to-hand combat, with this he almost win every close combat he encountered. To prove this, he joined Xtreme Chaser Tournament."
    );
  });

  $("#olregRoo").click(function(e) {
    $("#gaeYolk,#shadNu,#theMist,#joeRick,#jasonAlex,#olregRoo").css(
      "opacity",
      0.5
    );
    $(this).css("opacity", 1);
    $(".detailtop h1").text("Olreg Roo-Ki");
    $(".character").css("background-image", 'url("./assets/OlregRooKi.jpg")');
    $(".detailbot p").html(
      "A Bodybuilder from French, weight around 2 Tons and can lift weight twice as his own Weight, making him so called “The Moving Mountain”. Those Muscle aren’t for show, he resists almost every attack landed on him. He believe that he is The Strongest in the world, and to make sure of that, he join the Xtreme Chaser Tournament."
    );
  });
});
