// - utilities
import { Scrolllable } from "utilities";

const Header = (() => {
  // - handleSearchToggle
  const handleSearchToggle = () => {
    $(".js-toggle-search").on("click", (e) => {
      e.stopPropagation();
      $(".header__form").toggle();
      if ($(".header__form").is(":visible")) {
        $(".header__form .search-input").focus();
      }
    });

    $(document).on("click", (e) => {
      if (!$(e.target).closest(".header__form, .js-toggle-search").length) {
        $(".header__form").hide();
      }
    });
  };

  const handleMegamenu = () => {
    let isMegamenuVisible = false;

    const showMegamenu = (targetMenu) => {
      $(".mega-menu").hide(); // Hide all megamenus first
      targetMenu.css("display", "block"); // Show the target megamenu
      isMegamenuVisible = true;
    };

    const hideMegamenu = () => {
      $(".mega-menu").hide();
      isMegamenuVisible = false;
    };

    $(".header__nav__item.has-mega-menu").on("click", function (e) {
      if ($(window).width() <= 992) {
        const megamenu = $(this).find(".mega-menu");
        if (isMegamenuVisible && megamenu.is(":visible")) {
          hideMegamenu();
        } else {
          showMegamenu(megamenu);
        }
      }
    });

    $(".arrow-prev").on("click", (e) => {
      e.stopPropagation();
      hideMegamenu();
      $(".js-burger-menu").removeClass("show");
    });
  };

  // - handleShowNavigation
  const handleShowNavigation = () => {
    $(".js-burger-menu").on("click", (e) => {
      const _this = $(e.currentTarget);
      handleToggleMenu(_this, _this.hasClass("show"));
    });
  };

  // - handleToggleMenu
  const handleToggleMenu = (selector, status) => {
    if (status) {
      $("body").removeClass("show-menu");
      selector.removeClass("show");
      Scrolllable.enable();
    } else {
      $("body").addClass("show-menu");
      selector.addClass("show");
      Scrolllable.disable();
    }
  };

  // - handleCloseNavEsc
  const handleCloseNav = () => {
    $(document).on("keyup", (e) => {
      if (e.which === 27) {
        if ($(".js-burger-menu").hasClass("show")) {
          handleToggleMenu($(".js-burger-menu"), true);
        }
      }
    });
  };

  // - handleHideMenu
  const handleHideMenu = () => {
    if ($(window).width() > 992) {
      handleToggleMenu($(".js-burger-menu"), true);
    }
  };

  // handleClickMenu
  const handleClickMenu = () => {
    $(".js-header-nav .header__nav__link").on("click", (e) => {
      const _target = $(e.currentTarget).attr("href");
      const _parent = $(e.currentTarget).parents(".header__nav__item");
      let _targetPosition = 0;

      if (_target !== "#home") {
        _targetPosition = $(_target).offset().top;
        if ($(window).scrollTop() > _targetPosition) {
          // _targetPosition = _targetPosition - $('.header').outerHeight();
          _targetPosition -= $(".header").outerHeight();
        }
      }

      if ($(window).width() < 992) {
        handleToggleMenu($(".js-burger-menu"), true);
      }

      $(".header__nav__item").removeClass("header__nav__item--active");
      _parent.addClass("header__nav__item--active");

      $("html, body").animate(
        {
          scrollTop: _targetPosition,
        },
        700
      );
      e.preventDefault();
    });
  };

  // - init
  const init = () => {
    handleSearchToggle();
    handleMegamenu();
    handleShowNavigation();
    handleCloseNav();
    handleClickMenu();
  };

  return {
    init,
    hideMenu: handleHideMenu,
  };
})();

export default Header;
