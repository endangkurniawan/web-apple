/* ------------------------------------------------------------------------------
@name: Footer
@description: Component Js Footer
--------------------------------------------------------------------------------- */

const Footer = (() => {
  // - handleAccordionFooter
  const handleAccordionFooter = () => {
    $(".js-footer-accordion .footer__nav__title").on("click", function (e) {
      if ($(window).width() <= 991.98) {
        const _this = $(this);
        const _navWrapper = _this.parents(".footer__nav__item");

        // handle untuk menutup semua yang terbuka
        // $(".footer__nav__item")
        //   .not(_navWrapper)
        //   .removeClass("footer__nav--active")
        //   .find(".footer__menu")
        //   .slideUp(300);
        // $(".footer__nav__item")
        //   .not(_navWrapper)
        //   .find(".footer__nav__title")
        //   .removeClass("active");

        // Handle item yang diklik
        if (_this.hasClass("active")) {
          _navWrapper.find(".footer__menu").slideUp(300);
          _navWrapper.removeClass("footer__nav--active");
          _this.removeClass("active");
        } else {
          _navWrapper.find(".footer__menu").slideDown(300);
          _navWrapper.addClass("footer__nav--active");
          _this.addClass("active");
        }
      }
    });
  };

  // - hanlePaddingBottomMain
  const handlePaddingBottomMain = () => {
    if ($(window).width() > 767.96) {
      const _heightFooter = $(".footer").innerHeight();
      $(".js-main-site").css("padding-bottom", `${_heightFooter}px`);
    } else {
      $(".js-main-site").removeAttr("style");
    }
  };

  // - init
  const init = () => {
    $(document).ready(() => {
      if ($(".footer").length) {
        handleAccordionFooter();
        handlePaddingBottomMain();
      }
    });
  };

  return {
    init,
    setPaddingBottomMain: handlePaddingBottomMain,
  };
})();

export default Footer;
