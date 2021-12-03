$(function() {

  $("#input").keyup(function () {
    hasher.update();
  });

  $("#input").change(function () {
    hasher.update();
  });

  // Click on tab (Hash/HMAC/...)
  $("#tabs li").click(function () {
    // highlight active tab, remove highlight on everything else
    $("#tabs li").removeClass("on")
    $(this).addClass("on")

    // show/hide optional fields
    if (tabs[this.id] == tabs.hmac || tabs[this.id] == tabs.cipher) {
      $("#input-password-wrapper").show();
    } else {
      $("#input-password-wrapper").hide();
    }

    hasher.tab = tabs[this.id]
    hasher.init()
    hasher.update()
    $("#input-value").focus()
  })

  /*
   * Hash navigation
   */
  onHashChange = function () {
    let hash = window.location.hash.slice(1)
    if (hash == "about") {
      $("#about").show()
    } else {
      $("#about").hide()
    }
  }
  $(window).bind('hashchange', onHashChange)

  /*
   * Init
   */
  onHashChange()
  hasher.init()
  hasher.update()
});