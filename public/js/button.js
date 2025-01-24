// Ajout de l'événement au bouton "Read more"
document.getElementById("read-more-btn").addEventListener("click", function() {
    var moreText = document.getElementById("more-text");
    var btn = document.getElementById("read-more-btn");

    if (moreText.style.display === "none") {
      moreText.style.display = "block";  // Affiche le texte supplémentaire
      btn.innerHTML = "Read less";       // Change le texte du bouton
    } else {
      moreText.style.display = "none";   // Cache le texte supplémentaire
      btn.innerHTML = "Read more";       // Réinitialise le texte du bouton
    }
  });

      // Ajout de l'événement au bouton "Read more"
      document.getElementById("read-more-btn-nutrition").addEventListener("click", function() {
        var moreText = document.getElementById("more-text-nutrition");
        var btn = document.getElementById("read-more-btn-nutrition");
    
        if (moreText.style.display === "none") {
          moreText.style.display = "block";  // Affiche le texte supplémentaire
          btn.innerHTML = "Read less";       // Change le texte du bouton
        } else {
          moreText.style.display = "none";   // Cache le texte supplémentaire
          btn.innerHTML = "Read more";       // Réinitialise le texte du bouton
        }
      });
    
          // Ajout de l'événement au bouton "Read more"
          document.getElementById("read-more-btn-dietetique").addEventListener("click", function() {
            var moreText = document.getElementById("more-text-dietetique");
            var btn = document.getElementById("read-more-btn-dietetique");
        
            if (moreText.style.display === "none") {
              moreText.style.display = "block";  // Affiche le texte supplémentaire
              btn.innerHTML = "Read less";       // Change le texte du bouton
            } else {
              moreText.style.display = "none";   // Cache le texte supplémentaire
              btn.innerHTML = "Read more";       // Réinitialise le texte du bouton
            }
          });
    