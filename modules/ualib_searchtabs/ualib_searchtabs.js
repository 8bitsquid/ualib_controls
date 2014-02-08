Drupal.behaviors.ualib_searchtabs = function(context){
	
  var tab_container = $('.searchtabs-wrapper', context);
  var branch = Drupal.settings.ualib.branch;
  var img_path = '/sites/all/themes/ua_libraries/images/searchtabs/';
  
  // number of random images available for each library branch subtheme and the main theme
  var imgs = {main: 6, gorgas: 4, hoole: 1, mclure: 1, rodgers: 2};
  
  // extension used for image files, as the file name of the image to load
  // is determined by the branch $var determined by the ualib_controls module
  var img_ext = '.jpg';
  
  // The background image for the searchtabs
  var image = new Image();
  
  //---> If at a branch page, then build path to a background image for that branch
  // e.g., image path for Gorgas Library branch page could look like '/sites/all/themes/ua_libraries/images/searchtabs/gorgas/gorgas-1.jpg'
  if (branch != false){
    img_path += branch.lib_name + '/' + branch.lib_name + '-';
    img_path += rndImg(imgs[branch.lib_name]) + img_ext;
  }
  else{
    img_path += rndImg(imgs['main']) + img_ext;
  }
  
  image.onload = function(){
	  tab_container.css('background-image', 'url("'+ image +'")');
  };
  image.src = img_path;
  
  // Set the width of the select/middle tabscreen to the width of the
  // selected tab in the tablist.
  $('.tabscreen-mid').css('width', $('.tab-selected').width());
  $('.searchtab', context).each(function(index, elm){
    $(this).click(function(){
      $('.tab-selected', context).removeClass('tab-selected');
      $(this).addClass('tab-selected');
      shiftTab($(this).width(), $(this).position(), index);
    });
  });
  
  //---> Calculates random image based off of the imgs object defined above.
  function rndImg(n){
	 return Math.floor(Math.random() * n) + 1;
  }
  
  //---> Function to shift tab and tab content
  // @param	w	The width of the tablist element being selected
  // @param p	The position of the tablist element
  // @param i	The index of the tablist element in the tablist, which corellates to the searchtab content index
  function shiftTab(w, p, i){
    
	// Resize the tabscreen's select/middle element to the width of the selected tablist element
    $('.tabscreen-mid', context).animate({
      width: w
      },
      300
    );
    
    // Move the tabscreen so that the select/middle tabscreen element aligns with the selected tablist element
    $('.tabscreen', context).animate({
      marginLeft: p.left - tab_container.width()
      },
      300
    );
    
    // Move the selected searchtab content into view
    $('.searchtab-content-wrapper').animate({
      marginLeft: i*tab_container.width()
      },
      300
    );
  }
  
  //---> Handle search box filler text, set by the "rel" attribute on the input field
  $('.tab-searchbox').each(function(i, e){
    if ($(e).val() == ""){
      $(this).val($(e).attr('rel'));
    }
    
    $(e).blur(function(){
      var sug = $(this).attr('rel');
      if ($(this).val() == ""){
        $(this).val(sug);
      }
    }).focus(function(){
      var sug = $(this).attr('rel');
      if ($(this).val() == sug){
        $(this).val('');
      }
    });
  });
  
    //---> Function for Digital Collections tab to search Acumen
   $('#digColl').submit(function(e){
     e.preventDefault();
     var search = '';
     var s = $('#digColl_txt').val();
     var sArray = s.split(" ");
     for (var i=0; i<sArray.length; i++)
       search += sArray[i]+((i+1 != sArray.length) ? "+" : "");
     window.location.href = 'http://acumen.lib.ua.edu/solr?q='+search;
    });
   
   // For Google's Custom Search engine used as Site Search
   function executeQuery() {
       var input = document.getElementById('searchbox');
       var element = google.search.cse.element.getElement('searchresults-only0');
       if (input.value == '') {
         element.clearAllResults();
       } else {
         element.execute(input.value);
       }
       return false;
     }

   (function() {
       var cx = '003453353330912650815:yikbvrueo84';
       var gcse = document.createElement('script'); gcse.type = 'text/javascript'; gcse.async = true;
       gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
           '//www.google.com/cse/cse.js?cx=' + cx;
       var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(gcse, s);
     })();
};