/**
 * @author Jorge Iglesias/Spain/IBM@ES
 * @description
 * <p>
 * Notificactions
 * </p>
 */

/**
 * Div parent name
 */
var DIV_NOTIFICATIONS = 'notifications'; // for alerts and warnings

/**
 * Add notification div to parent div
 *
 * @param parent, parent id div
 * @param id, div id
 * @param type, notification type
 * @param display, style display
 * @param title, title
 * @param subtitle, subtitle
 * @param close, display close button
 * @return format div string
 * @see carbon-components
 */
function addNotification(parent,id,type,display,title,subtitle,close) {
  var d = document.getElementById(parent);

  if (d != undefined) {
    var p = '';

    if (id != undefined && id != '') {
      var n_display = display ==''?'none':display;

      p += '<div id="'+id+'" style="display:'+n_display+'">';
      p += '  <div data-notification class="bx--inline-notification bx--inline-notification--'+type+'" role="alert">';
      p += '    <div class="bx--inline-notification__details">';
      p += '      <svg class="bx--inline-notification__icon" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">';

      if (type == 'error') {
        p += '        <path d="M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm3.5 13.5l-8-8 1-1 8 8-1 1z"></path><path d="M13.5 14.5l-8-8 1-1 8 8-1 1z" data-icon-path="inner-path" opacity="0"></path>';
      }
      else if (type == 'warning') {
        p += '        <path d="M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm-.8 4h1.5v7H9.2V5zm.8 11c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"></path><path d="M9.2 5h1.5v7H9.2V5zm.8 11c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" data-icon-path="inner-path" opacity="0"></path>';
      }
      else if (type == 'success') {
        p += '        <path d="M10 1c-4.9 0-9 4.1-9 9s4.1 9 9 9 9-4 9-9-4-9-9-9zM8.7 13.5l-3.2-3.2 1-1 2.2 2.2 4.8-4.8 1 1-5.8 5.8z"></path><path fill="none" d="M8.7 13.5l-3.2-3.2 1-1 2.2 2.2 4.8-4.8 1 1-5.8 5.8z" data-icon-path="inner-path" opacity="0"></path>';
      }
      p += '      </svg>';
      p += '      <div class="bx--inline-notification__text-wrapper">';
      p += '        <p id="'+id+'-title" class="bx--inline-notification__title">'+title+'</p>';
      p += '        <p id="'+id+'-subtitle" class="bx--inline-notification__subtitle">'+subtitle+'</p>';
      p += '      </div>';
      p += '    </div>';
      if (close) {
        var str = 'this.parentElement.style.display="none"';
        p += '  <button data-notification-btn class="bx--inline-notification__close-button" type="button" onclick="hideNotification(\''+id+'\');">';
        p += '    <svg focusable="false" preserveAspectRatio="xMidYMid meet" style="will-change: transform;" xmlns="http://www.w3.org/2000/svg" class="bx--inline-notification__close-icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M12 4.7l-.7-.7L8 7.3 4.7 4l-.7.7L7.3 8 4 11.3l.7.7L8 8.7l3.3 3.3.7-.7L8.7 8z"></path></svg>';
        p += '  </button>';
      }
      p += '  </div>';
      p += '</div>';
    }
    else {
      console.log('Error creating notification message.');
    }

    d.innerHTML += p;
  }
  else {
    console.log('Error adding notification to div : ' + parent);
  }
}

/**
 * Show notification div
 *
 * @param id, div id
 * @param title, title
 * @param subtitle, subtitle
 */
function showNotificationMessage(id,title,subtitle) {
  var d = document.getElementById(id);

  if (d != undefined) {
    d.style.display='inline';
    if (title != '') {
      var t = document.getElementById(id+'-title');
      t.innerHTML = title;
    }
    if (subtitle != '') {
      var t = document.getElementById(id+'-subtitle');
      t.innerHTML = subtitle;
    }
  }
  else {
    console.log('Error showing notification message div : ' + id);
  }
}

/**
 * Hide notification div
 *
 * @param id, div id
 */
function hideNotification(id) {
  var d = document.getElementById(id);

  if (d != undefined) {
    d.style.display='none';
  }
  else {
    console.log('Error hidden notification div:' + id);
  }
}
