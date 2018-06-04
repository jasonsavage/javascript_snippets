import isEditableInput from './isEditableInput';

/**
 * Disables the "goBack" browser functionality when the user presses the Backspace key.
 */
export function disableBackspaceHistoryNavigation () {
	$(document).on('keydown', function (evt) {
		if (evt.keyCode === 8 && !isEditableInput(evt.srcElement || evt.target)) {
			evt.preventDefault();
            return false;
		}
        return true;
	});
}
