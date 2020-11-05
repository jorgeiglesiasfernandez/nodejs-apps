/**
 * @author Jorge Iglesias/Spain/IBM@ES
 * @description
 * <p>
 * Service model
 * </p>
 */

/**
 * Init on load page
 * @see loading.js
 * @see notification.js
 */
function serviceInit() {
  // add notification div
  addLoading(DIV_LOADING,'Loading');

  // add notification div
  addNotification(DIV_NOTIFICATIONS,'div_error','error','none','','',true);
  addNotification(DIV_NOTIFICATIONS,'div_warning','warning','none','','',true);
  addNotification(DIV_NOTIFICATIONS,'div_success','success','none','','',true);
}

/**
 * Call to API Rest
 *
 * @param url, url
 * @param data, json object
 * @param success, success
 * @param error, error callback
 * @see rest.js
 */
function serviceCall(url,success,error) {
  showLoading();
  hideNotification('div_error');
  hideNotification('div_warning');
  hideNotification('div_success');
  var data = createRequest();
  call(url,data,success,error);
}
