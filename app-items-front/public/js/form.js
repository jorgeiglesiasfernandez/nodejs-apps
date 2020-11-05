/**
 * @author Jorge Iglesias/Spain/IBM@ES
 * @description
 * <p>
 * Required fields
 * </p>
 */

/**
 * Validate if form field required are empty
 *
 * @return boolean, if true, all required elements are filled
 */
function validateForm() {
  var b = true;

  // Hide notifications
  hideNotification('div_error');
  hideNotification('div_warning');
  hideNotification('div_success');

  var requiredElements = document.getElementById("form").querySelectorAll("[required]");
  for (var i = 0; i < requiredElements.length; i++) {
    var e = requiredElements[i];
    if (e.value.length == 0) {
      showNotificationMessage('div_warning','Required','Required value for ' + e.name);
      e.focus();
      b = false;
      break;
    }
  }

  return b;
}
