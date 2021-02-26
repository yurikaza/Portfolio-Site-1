function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav-list") {
      x.className += " active";
    } else {
      x.className = "nav-list";
    }
  }