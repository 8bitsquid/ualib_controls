<div class="searchtabs-wrapper">
	<!-- Elements that create the translucent tab butotn effect. -->
	<!-- The "tablist" itself renders on top of the "tadscreen" elements -->
	<!-- so that the lower opacity doesn't apply to the tab text as well. -->
  <div class="tabscreen-wrapper">
    <div class="tabscreen">
      <div class="tabscreen-left"></div>
      <div class="tabscreen-mid"></div>
      <div class="tabscreen-right"></div>
    </div>
  </div>

  <ul class="tablist">
    <li class="searchtab tab-selected">
      <a>Scout</a>
    </li>
    <li class="searchtab">
      <a>Databases</a>
    </li>
    <li class="searchtab">
      <a>E-Journals</a>
    </li>
    <li class="searchtab">
      <a>Digital Archives</a>
    </li>
     <li class="searchtab">
      <a>Site</a>
    </li>
  </ul>

  <div class="searchtab-content-wrapper">

	  <div class="searchtab-content single-search" id="tab-0">
	  <!-- EBSCOhost Custom Search Box Begins -->
  	  <form action="" onsubmit="return ebscoHostSearchGo(this);" method="post" >
    	  <input id="ebscohostwindow" name="ebscohostwindow" type="hidden" value="1" />
	      <input id="ebscohosturl" name="ebscohosturl" type="hidden" value="http://search.ebscohost.com/login.aspx?direct=true&site=eds-live&scope=site&type=0&custid=s4594951&groupid=main&profid=eds&mode=and&authtype=ip,guest" />
  	    <input id="ebscohostsearchsrc" name="ebscohostsearchsrc" type="hidden" value="db" />
      	<input id="ebscohostsearchmode" name="ebscohostsearchmode" type="hidden" value="+AND+" />
      	<input id="ebscohostkeywords" name="ebscohostkeywords" type="hidden" value="" />

      	<div class="single-search-input">
        	<input id="ebscohostsearchtext" class="tab-searchbox" name="ebscohostsearchtext" type="text"  title="search" rel="Books, full-text articles online, and more..."/>
        	<input onClick="_gaq.push(['_trackEvent', 'Searchtabs', 'Submit', 'Scout Search']);" type="submit" value="" />
					<label for="ebscohostsearchtext">Search</label>
      	</div>
      	<div class="tab-0-opt round-btm">
          <input type="checkbox" id="chkFullText" name="chkFullText" />
          <label for="chkFullText">Full Text Online</label>
      	</div>
    	</form>
  	</div>

  	<div class="searchtab-content single-search" id="tab-1">
			<form action="/databases/search-result" method="POST">
	      <div class="single-search-input">
  	      <input class="tab-searchbox" type="text" name="Title" rel="Search Databases" />
    	    <input onClick="_gaq.push(['_trackEvent', 'Searchtabs', 'Submit', 'Databases Search']);" type="submit" value="">
      	</div>
			</form>
  	</div> 


  	<div class="searchtab-content single-search" id="tab-2">
    	<form method="GET"  name="SS_EJPSearchForm" action="http://QS7QK6UB8P.search.serialssolutions.com/">
      	<input type="hidden" name="V" value="1.0"/>
	  		<input value="100" name="N" type="hidden" />
      	<input type="hidden" name="L" value="QS7QK6UB8P"/>
      	<input type="hidden" name="SS_searchTypeAll" value="yes"/>
	  		<input type="hidden" name="SS_searchTypeBook" value="yes"/>
	  		<input type="hidden" name="SS_searchTypeJournal" value="yes"/>
	  		<input type="hidden" name="SS_searchTypeOther" value="yes"/>
	  		<input type="hidden" name="SS_searchTypesUsed" value="yes" />
	  		
      	<div class="single-search-input">
        	<input type="text" class="tab-searchbox" name="C" id="SS_CFocusTag" rel="Search E-Journals, E-Books, and more..."/>
	    		<input onClick="_gaq.push(['_trackEvent', 'Searchtabs', 'Submit', 'Ejournals Search']);" type="submit" value=""/>
	  		</div>
	  		
	  		<select name="S">
	        <option value="AC_T_B">Title begins with</option>
  	      <option value="AC_T_M">Title equals</option>
    	    <option value="T_W_A">Title contains all words</option>
      	  <option value="I_M">ISSN equals</option>
      	</select>
    	</form>
  	</div>

  	<div class="searchtab-content single-search" id="tab-3">
    	<form id="digColl">
	      <div class="single-search-input">
		  	  <input type="text" rel="Historical material, finding aids, and more..." class="tab-searchbox" title="simple search field" id="digColl_txt" />
	  	  	<input onClick="_gaq.push(['_trackEvent', 'Searchtabs', 'Submit', 'Acumen Search']);" type="submit" value="" title="Search" class="searchbutton" />
	  		</div>
    	</form>
  	</div>

		<div class="searchtab-content single-search" id="tab-4">
			<!-- Search box form -->
			<form onsubmit="return executeQuery();" id="cse-search-box-form-id">
				<div class="single-search-input">
  				<!-- This is the input searc box -->
  				<input class="tab-searchbox" type="text" id="searchbox" rel="Search the Library Website" size="" autocomplete="off"/>
  				<!-- This is the search button -->
  				<input type="submit" value=""/>
  			</div>
			</form>
			<!-- End of search box form -->
			<!-- Place this tag where you want the search results to render -->
			<gcse:searchresults-only></gcse:searchresults-only>
		</div> 
  </div>
</div>