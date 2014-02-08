function getTab(tabNum, prefix){
		var isBranch = false;
		if (prefix == 'branch'){
			isBranch = true;
			prefix = '';
		}
		var tabs = new Array(1);
		var count = 0;
		var elm = document.getElementById(prefix+'tab_content').getElementsByTagName('div');
		var tabContainer = document.getElementById('tab_content');
		
		for (var i=0; i<elm.length; i++){
			var tmp = document.getElementById(prefix+'tab'+(i+1));
			if (tmp != null)
				tabs[count] = tmp;
			count++;
		}
		
		for (var i=0; i<tabs.length; i++){
			if (isBranch && (tabNum == 1)){
				tabContainer.style.background = 'url(images/branchtabbg.png) repeat-x top left';
				tabContainer.style.paddingTop = '0px';
			}
			else if(prefix==''){
				tabContainer.style.background = '#d3d3d3 url(images/tabbg_lav.png) repeat-x top left';
				tabContainer.style.paddingTop = '6px';
			}
			if (prefix == ''){
				//var tmp = document.getElementById('tabBar');
				if (document.getElementById('tabBar')){
					document.getElementById('tabBar').style.display = (tabNum == 1) ? 'block' : 'none';
				}
			}
			if ((i+1) == tabNum){
				tabs[i].className = prefix+'selected_tab_content';
				document.getElementById(prefix+'tablist').getElementsByTagName('li')[i].className = prefix+'select_tab';
				document.getElementById(prefix+'tablist').getElementsByTagName('li')[i].getElementsByTagName('a')[0].blur();
			}
			else{
				tabs[i].className = prefix+'norm_tab_content';
				document.getElementById(prefix+'tablist').getElementsByTagName('li')[i].className = prefix+'norm_tab';
			}
	 	}
	}
	
function tabHover(elm){
	var liNode = elm.parentNode;
	liNode.className = (liNode.classNode == 'norm_tab') ? 'norm_tab_hover' : 'norm_tab';
}

function fixTabsIE(){
	if(browser.isMicrosoft){
	if (document.getElementById('tablist') != null){
	var numTabs = document.getElementById('tablist').getElementsByTagName('li').length;
	for (var i=1; i<numTabs; i++){
		var currID = i+1;
		var currElm = document.getElementById('tab'+currID);
		if (i==1)
			var offset = document.getElementById('tab'+(currID+1)).offsetTop - currElm.offsetTop;
		var newTopVal = (offset*i);
		currElm.style.top = -newTopVal+'px';
	}
	}

	var numTabs = document.getElementById('search_tablist').getElementsByTagName('li').length;
	for (var i=1; i<numTabs; i++){
		var currID = i+1;
		var currElm = document.getElementById('search_tab'+currID);
		if (i==1)
			var offset = document.getElementById('search_tab'+(currID+1)).offsetTop - currElm.offsetTop;
		var newTopVal = (offset*i);
		currElm.style.top = -newTopVal+'px';
	}
	}
}

window.onload = makeDoubleDelegate(window.onload, fixTabsIE);
function setDB(){
            document.wfform.Databases.value = formCategoryListLinks(document.getElementById('set_db').value);
          }
function dbInfo(){
  if (! window.focus)return true;
  var dbToGet = document.getElementById('set_db').value;
  newwindow = window.open('http://www.lib.ua.edu/content/es_qs_dbinfo2.php?db='+dbToGet, 'What_Am_I_Searching', ' width=350, height=350, menubar=no, toolbar=no, location=no, directories=no, status=no');
  return false;
}
$(window).load(function(){ 
         var db = formCategoryListLinks(document.getElementById('set_db').value);
		 document.getElementById('Databases').value = db;
         // document.write('<input type="hidden" name="Databases" id="Databases" value="'+db+'">');
          
	});

//---> Function for Digital Collections tab to search Acumen
 $(document).ready(function(){
  $('#digColl').submit(function(e){
    e.preventDefault();
    var search = '';
    var s = $('#digColl_txt').val();
    var sArray = s.split(" ");
    for (var i=0; i<sArray.length; i++)
      search += sArray[i]+((i+1 != sArray.length) ? "+" : "");
    window.location.href = 'http://acumen.lib.ua.edu/s/all/_and/_contains_all/All/'+search;
   });
 });