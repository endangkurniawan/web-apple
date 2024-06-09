/*-----------------------------------------------------------------
@name : Components | Window Resize
@description: set resize window
-------------------------------------------------------------------
*/

// --- components
import { Header } from "components";

const WindowResize = (() => {
  let _timeout = false,
    _delta = 100,
    _rtime;

  // - handleWindowResize
  const handleWindowResize = () => {
    $(window).on("resize", () => {
      _rtime = new Date();
      if (_timeout === false) {
        _timeout = true;
        $("body").addClass("hold-transition");
        setTimeout(handleWindowResizeEnd, _delta);
      }
    });
  };

  const handleWindowResizeEnd = () => {
    if (new Date() - _rtime < _delta) {
      setTimeout(handleWindowResizeEnd, _delta);
    }
    // - end on window resize
    else {
      _timeout = false;
      $("body").removeClass("hold-transition");
      Header.hideMenu();
    }
  };

  // - init
  const init = () => {
    handleWindowResize();
    handleWindowResizeEnd();
  };

  return {
    init,
  };
})();

export default WindowResize;
