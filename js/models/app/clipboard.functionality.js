$(document).ready(function() {
    function button_fireCopyAnimation() {
        $('.before-copy').css('display', 'none');
        $('.after-copy').css('display', 'inline');
    }

    function button_clearCopyAnimation() {
        $('.after-copy').css('display', 'none');
        $('.before-copy').css('display', 'inline');
    }

    function button_copyToClipboard(button) {
        var clipboard = new Clipboard(button);
        clipboard.on('success', function (e) {
            button_fireCopyAnimation();
            $(this).on('mousemove', function () {
                button_clearCopyAnimation();
            });
            e.clearSelection();
        });
    };

    button_copyToClipboard('.btn');
});