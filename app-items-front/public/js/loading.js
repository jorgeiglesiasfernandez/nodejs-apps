/**
 * @author Jorge Iglesias/Spain/IBM@ES
 * @description
 * <p>
 * Loading
 * </p>
 */

/**
 * Div parent name
 */
var DIV_LOADING = 'loading';

/**
 * Add loading div to parent div
 *
 * @param parent, parent id div
 * @param title, title
 * @return format div string
 * @see carbon-components
 */
function addLoading(parent,title) {
  var d = document.getElementById(parent);

  if (d != undefined) {
    var p = '';

    p += '<div class="bx--loading-overlay">';
    p += '  <div data-loading class="bx--loading">';
    p += '    <svg class="bx--loading__svg" viewBox="-75 -75 150 150">';
    p += '      <title>'+title+'</title>';
    p += '      <circle class="bx--loading__stroke" cx="0" cy="0" r="37.5" />';
    p += '    </svg>';
    p += '  </div>';
    p += '</div>';

    d.innerHTML += p;
  }
  else {
    console.log('Error adding loading to div:' + parent);
  }
}

/**
 * Show loading
 */
function showLoading() {
  document.getElementById(DIV_LOADING).style = "display:inline";
}

/**
 * Hide loading
 */
function hideLoading() {
  document.getElementById(DIV_LOADING).style = "display:none";
}
