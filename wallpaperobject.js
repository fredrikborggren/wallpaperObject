window.wallpaperObject = window.wallpaperObject || (function() {

    function enable(elementId, backgroundColor, backgroundImage, backgroundRepeat, backgroundPosition, backgroundAttachment, clickThrough, impressionTracker) {
        var el = null, 
            win = 'undefined' === typeof inFIF || 'undefined' === typeof inDapIF ? window : window.parent,
            doc = 'undefined' === typeof inFIF || 'undefined' === typeof inDapIF ? document : win.document;
        if ((el = (doc.getElementById(elementId) || doc.body))) {
            el.style.cursor = 'pointer';
            el.style.display = 'block';
            el.style.backgroundColor = backgroundColor || '';
            el.style.backgroundImage = 'url('+ backgroundImage + ')' || '';
            el.style.backgroundRepeat = backgroundRepeat || '';
            el.style.backgroundPosition = backgroundPosition || '';
            el.style.backgroundAttachment = backgroundAttachment || '';
            doc.body.style.width = doc.body.style.width = '100%';
            doc.body.style.height = doc.body.style.height = '100%';

            if (clickThrough) {

                win.wallpaperClick = function(ev, id, click) {
                    if (ev = ev || win.event) {
                        var targetElement = ev.target || ev.srcElement;
                        if (targetElement === doc.body || ~targetElement.className.indexOf(id)) {
                            win.open('_ADCLICK_' + click);
                        }
                    }
                }

                if (el.addEventListener) {
                    el.addEventListener('click', function(e) {
                        win.wallpaperClick(e, elementId, clickThrough);
                    }, false); 
                } else if (el.attachEvent) {
                    el.attachEvent('onclick', function(e) {
                        win.wallpaperClick(e, elementId, clickThrough);
                    });
                }
            }
        }

    }

    return {
        enable: enable
    }

})();
