/**
 * @author Jorge Iglesias/Spain/IBM@ES
 * @description
 * <p>
 * Call API REST
 * </p>
 */

/**
 * Add loading div to parent div
 *
 * @param url, url
 * @param data, json object
 * @param success, success
 * @param error, error callback
 */
 function call(url,data,success,error) {

   // Call to API
   $.ajax({
     url: url,
     type: 'POST',
     data: data,
     dataType: 'json',
     success: function(response){
       success(response);
     },
     error: function(err) {
       error(err);
     }
   });
 }
