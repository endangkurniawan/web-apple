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
        // const _navSibling = _navWrapper.siblings(".footer__nav__item");

        // Untuk menghandle apabila ingin ditutup ketika ada yang dibuka
        // if (_navSibling.hasClass("footer__nav--active")) {
        //   _navSibling.removeClass("footer__nav--active");
        //   _navSibling.find(".footer__nav__list").slideUp(300);
        //   _navSibling.find(".footer__nav__title").removeClass("active");
        // }

        if (_this.hasClass("active")) {
          _navWrapper.find(".footer__nav__list").slideUp(300);
          _navWrapper.removeClass("footer__nav--active");
          _this.removeClass("active");
        } else {
          _navWrapper.find(".footer__nav__list").slideDown(300);
          _navWrapper.addClass("footer__nav--active");
          _this.addClass("active");
        }
      }
    });
  };

  // - init
  const init = () => {
    $(document).ready(() => {
      if ($(".footer").length) {
        handleAccordionFooter();
      }
    });
  };

  return {
    init,
  };
})();

export default Footer;
