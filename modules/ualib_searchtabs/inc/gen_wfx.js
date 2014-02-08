  function formCategoryListLinks(categoryName)
{
var dbSplitValue;
var dbFinal='';
 var dbValue='';
 var dbNameFinal;
 
  for (i=0; i< category.length; i++)
  {
    if (categoryName == category[i][0][0])
    {
      for (j=0; j<category[i][1].length; j++)
      {
        dbValue += ',' + category[i][1][j];
      }
	  
      //alert(dbValue);
      dbSplitValue = dbValue.split(",");
      for (p=0; p< dbSplitValue.length; p++)
      {
        for (z=0; z< databaseList.length; z++)
        {
          if (databaseList[z][0] == dbSplitValue[p])
          {
            dbNameFinal = databaseList[z][1];
            //document.write(dbSplitValue[p]);
            //alert(dbSplitValue);
            if (dbNameFinal.indexOf('link only') < 0)
            {
              dbFinal += ',' + dbSplitValue[p];
              //alert("string is: " + dbFinal);
            }
          }
        }
		}
        break;
      }
    }
    return dbFinal.substr(1);
}


  // This function is called during the form submit to set required cookies
  function setForm()
  {
    var sCookieText = '';    
	 sCookieText += document.wfform.wf_field1.value + ":";
    //sCookieText += document.wfform.wf_field1.options[document.wfform.wf_field1.selectedIndex].value + ":";
    sCookieText += document.wfform.wf_term1.value + ":";    
    document.cookie = 'wf_search_structure=' + sCookieText + '; Path=/';      

	 var dbs = document.wfform.Databases.value;
	document.cookie = 'wf_selected_databases=' + dbs + '; Path=/';
    //document.cookie = 'wf_selected_databases=' + document.wfform.Databases.options[document.wfform.Databases.selectedIndex].value + '; Path=/';
	//alert(document.wfform.Databases.value);
  }
  
  function useWF(catname) {
  document.write('<form name="wfform" action="http://wfxsearch.webfeat.org/wfsearch/search" method="GET">');

    document.write('<input type="hidden" name="Command" value="Search">');
    document.write('<input type="hidden" name="Client_ID" value="10235">');
    document.write('<input type="hidden" name="rtmpl" value="js">');
    document.write('<input type="hidden" name="format" value="JS">');    
    document.write('<input type="hidden" name="wf_all_years" value="yes">');    
    document.write('<input type="hidden" name="utf-8" value="wf_codeset">');    
    document.write('<input type="hidden" name="noserial" value="1">');

    document.write('Enter term: <input type="text" name="wf_term1" size="20" value="">');
    document.write('<input type="hidden" name="wf_field1" value="wf_keyword">');
	document.write('<input type="hidden" name="wf_all_years" value="yes">');
    document.write('<br/><br/>');

	document.write('<input type="hidden" name="Databases" value="' + formCategoryListLinks(catname) + '">');
    document.write('<br/><br/>');
    document.write('<input type="submit" value="Search" onClick="setForm();">');
  	document.write('</form>'); 
  
}



function showHide(divID, visFlag)
{
  if (visFlag == 1)
  {
    document.getElementById(divID).style.visibility = 'visible';
    document.getElementById(divID).style.display = 'inline';
    document.getElementById(divID + '_desc').style.visiblity = 'hidden';
    document.getElementById(divID + '_desc').style.display = 'none';
  }
  else
  {
    document.getElementById(divID).style.visibility = 'hidden';
    document.getElementById(divID).style.display = 'none';
    document.getElementById(divID + '_desc').style.visibility = 'visible';
    document.getElementById(divID + '_desc').style.display = 'inline';
  }
}

function showDBsForCatNameClient(categoryName, descriptionText, nCols, omitDatabase, format, top)
{
  // Make sure everything is defined or the default

  var goodDbs = new Array();

  if(typeof(g_CheckboxTemplate) == 'undefined')
  {
    g_CheckboxTemplate = CHECKBOX_TEMPLATE_D;
  }

  if(typeof(g_CheckboxName) == 'undefined')
  {
    g_CheckboxName = 'Databases';
  }

  if (typeof(categoryName) == 'undefined')
  {
    categoryName = category[0][0][0];
  }

  if(typeof(descriptionText) == 'undefined')
  {
    descriptionText = '';
  }

  if(typeof(nCols) == 'undefined')
  {
    nCols = 1;
  }

  if(typeof(omitDatabase) == 'undefined')
  {
    omitDatabase = '';
  }

  if(typeof(format) == 'undefined')
  {
    format = '';
  }

  if(typeof(top) == 'undefined')
  {
    top = '';
  }

  if(typeof(anchors) == 'undefined')
  {
    var anchors = new Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
  }

  for (i=0; i< category.length; i++)
  {
    if (category[i][0][0] == categoryName)
    {
      var offset = 0;
      var dbCount = category[i][1].length;
      var goodCount = 0;

      for(j=0; j<category[i][1].length; j++)
      {
        wfname = category[i][1][j];
        for (k = 0; k < databaseList.length; k++)
        {
          if (databaseList[k][0] == wfname)
          {
            dbArray = databaseList[k];
            goodDbs[goodCount] = wfname;
            goodCount++;
          }
        }
      }

      if (typeof(nCols) != 'undefined')
      {
        if (nCols == 1)
        {
          offset = 0;
        }
        else
        {
          offset = Math.ceil((dbCount) / nCols);
        }
      }

      var useIdx = 0;
      var rowNum = 0;
      var colNum = 0;
      var count = 0;
      var shouldColor = 0;
      var text='';
      var textanchor='';
      var letterChange = 0;

      for (j = 0; j < goodDbs.length; j++)
      {
        if (offset != 0)
        {
          useIdx = (colNum * offset) + rowNum;
        }
        else
        {
          useIdx = j;
        }

        wfname = goodDbs[useIdx];

        for (k=0; k<databaseList.length; k++)
        {
          if (databaseList[k][0] == wfname)
          {
            dbArray = databaseList[k];
          }
        }

        if (count == 0)
        {
          if (offset % 2 == 0)
          {
            sTemplate = '<tr class="datarowson">' + g_CheckboxTemplate;
            currentColor = 'on';
          }
          else
          {
            sTemplate = '<tr class="datarowsoff">' + g_CheckboxTemplate;
            currentColor = 'off';
          }
        }
        else
        {
          sTemplate = g_CheckboxTemplate;
        }

        sCheckbox = '';
        sDBname = '';
        sDescLink = '';
        sNativeLink = '';

        wfName = dbArray[0];
        dbName = dbArray[1];
        sDBDesc = dbArray[5];
        sDBname = dbName;
        sIconDesc = dbArray[9];


        for (l = 0 ; l < anchors.length ; l++)
        {
          if (sDBname.charAt(0) == anchors[l])
          {
            if ( anchors[l] != "*" )
            {
              text = anchors[l];
              anchors[l]= "*" ;
              letterChange = 1;
            }
          break;
          }
        }

        if (dbArray[6] != '')
        {
          sNativeLink = '<a ';
          if (letterChange == 1)
          {
            sNativeLink += 'name="' + text + '" ';
            letterChange = 0;
          }
          sNativeLink += 'class=dblink href="' + dbArray[6] + '">';
        }
		
		
		
		
		
		

		sDescLink = '<a href="javascript:showHelp(\'help.html?Client_ID=' + Client_ID + '&wf_name=' + wfName;
		//sDescLink += '\');">' + descriptionText + '</a>';
		sDescLink += '\');">';
        if (descriptionText == '<<database name>>')
        {
			sDescLink += sDBname;
        }
        else
        {
			sDescLink += descriptionText;
        }
        sDescLink += '</a>';
		

		

        if (sDBname.indexOf('link only') >= 0)
        {
          sCheckbox = '<input type="checkbox" disabled>';
        }
        else
        {
			sCheckbox = '<input type="checkbox" name="' + g_CheckboxName + '" value="';
			if (dbArray[3] == 1) {
				sCheckbox += wfName + '" checked>';
			} else {
				sCheckbox += wfName + '">';
			}
		}

		var wfNameDesc = wfName + "_desc";
		sTemplate = sTemplate.replace(/<<dbNameDesc>>/g, wfNameDesc);
		sTemplate = sTemplate.replace(/<<dbName>>/g, wfName);
        sTemplate = sTemplate.replace(/<<checkbox>>/g, sCheckbox);
        sTemplate = sTemplate.replace(/<<database name>>/g, sDBname);
        sTemplate = sTemplate.replace(/<<description link>>/g, sDescLink);
        sTemplate = sTemplate.replace(/<<database description>>/g, sDBDesc);
        sTemplate = sTemplate.replace(/<<native link>>/g, sNativeLink);
        
        if (dbArray[11] != 2) {
        	sTemplate = sTemplate.replace(/<<auth desc>>/g, "<br><bean:message key='searchForm.authIncomplete'/>");
        } else {
	        sTemplate = sTemplate.replace(/<<auth desc>>/g, "");
	    }                        

        for (p = 0;p < format.length ; p++)
        {
          if (sDBname.charAt(0) == format[p] && format[p]!="*")
          {
            format[p]="*";
            document.write(top);
            break;
          }
        }

        document.write(sTemplate);

        count++;

        if (offset != 0)
        {
          if (colNum == (nCols - 1))
          {
            colNum = 0;
            rowNum++;
            document.write('</tr>');

            if(currentColor == 'off')
            {
              document.write('<tr class="datarowson">');
              currentColor = 'on';
            }
            else
            {
              document.write('<tr class="datarowsoff">');
              currentColor = 'off';
            }
          }
          else
          {
            colNum++;
          }
        }
        else
        {
          document.write('</tr>');
          if(currentColor == 'off')
          {
            document.write('<tr class="datarowson">');
            currentColor = 'on';
          }
          else
          {
            document.write('<tr class="datarowsoff">');
            currentColor = 'off';
          }
        }
      }
      break;
    }
  }
}

function showSubjectListClient(subjectOmit, descriptionText, subjectOnly, categoryClick, nCols)
{
  var subSelIdx = 0;
  //Find number of categories to show
  var numCategories = category.length;
  var categoryStr ='';
  var offset = 0;
  var useIdx = 0;
  var rowNum = 0;
  var colNum = 0;
  var currIdx = 0;

  // Use the default template if g_SubjectTemplate is not set
  if(typeof(g_SubjectTemplate) == 'undefined') {
    g_SubjectTemplate = MAIN_SUBJECT_T;
  }

  // Use the default template if g_SubjectDatabaseTemplate is not set
  if(typeof(g_SubjectDatabaseTemplate) == 'undefined') {
    g_SubjectDatabaseTemplate = SUBJECT_DATABASE_T;
  }

  // Use the default template if g_SubjectDatabaseTemplate is not set
  if(typeof(subjectOnly) == 'undefined') {
    subjectOnly = true;
  }

  if (typeof(subjectOmit) == 'undefined') {
    subjectOmit = '';
  }

  if (typeof(descriptionText) == 'undefined') {
    descriptionText = '';
  }

  if (typeof(nCols) == 'undefined') {
    nCols = 1;
  }

  if (subjectOmit.indexOf('^') > 0) {
    var omitArray = subjectOmit.split('^');
  }

  for (i=0; i<category.length; i++)
  {
    // Added to allow parsing of ^-delimited omit lists
    if (omitArray != null)
    {
      for (x = 0; x < omitArray.length; x++)
      {
        if (category[i][0][0] == omitArray[x])
        {
          numCategories--;
        }
      }
    }
    else
    {
      if (subjectOmit.indexOf(category[i][0][0]) >= 0)
      {
        numCategories--;
      }
    }
    categoryStr += i + ':' + category[i][0][0] + ' ';
  }

  if (typeof(nCols) != 'undefined')
  {
    offset = Math.ceil(numCategories / nCols);
  }
  if (nCols == 1)
  {
    offset = 0;
  }

  document.write('<td width="30%" class="arrowcell">');

  // Loop through the category array to build the page

  var catCount = 0;
  var skipCat = 0;

  for (i=0; i<category.length; i++)
  {
    var subSelBegin = subSelIdx;
    var subSelEnd = subSelIdx;
    
    if (typeof(category[i][1]) == 'undefined') {
    	continue;
    }
        
    if (omitArray != null)
    {
      for (x = 0; x < omitArray.length; x++)
      {
        if (category[i][0][0] == omitArray[x])
        {
          skipCat = 1;
        }
      }
    }
    else
    {
      if (subjectOmit.indexOf(category[i][0][0]) >= 0)
      { 
        skipCat = 1;
      }
    }
    	    
    if (skipCat == 1)
    {
      skipCat = 0;  
      continue;
    }
    catCount++;;
    catName = category[i][0][0];
    catId = category[i][0][5];
    		
    wfSubNames = '';

    if (rowNum == 0)
    {
      if (catCount > 1)
      {
        document.write('</td>');
        document.write('<td width="30%" class="arrowcell">');
      }
    }
        

    // Build the complete subject wf_name list first
    for (j=0; j<category[i][1].length; j++)
    {
      wfSubNames += ',' + category[i][1][j];
      subSelEnd++;
    }

    wfSubNames = wfSubNames.substr(1);

    sTemplate = g_SubjectTemplate;
    sCheckbox = '';

    if (subjectOnly)
    {
      if (categoryClick)
      {
        // Get the subcategory and checkbox
        var subcat_array = "";
        var subcat  = "cat" + i;
				
        eval("if (typeof(" + subcat + ") != 'undefined')" + "	subcat_array = " + subcat);

        sCheckbox = '<input type="checkbox" title="Check box to include in search" name="CheckAll" value="';
        sCheckbox += wfSubNames + '"';
        sCheckbox += ' onClick="javascript:catFunction('+ currIdx +',this.checked,\'' + subcat + '\',1);">';
      }
      else
      {
        var subcat_array = "";
        sCheckbox = '<input type="checkbox" title="Check box to include in search" name="Databases" value="';
        sCheckbox += wfSubNames + '">';
      }
    }
    else
    {
      sCheckbox = '<input type="checkbox" title="Check box to include in search" name="CategoryBoxes" value=""';
      sCheckbox += ' onClick="subSel(' + subSelBegin + ',' + subSelEnd;
      sCheckbox += ', this.checked)">';
    }
    currIdx++;

    // Set the Index for the next group
    subSelIdx = subSelEnd;

    eval("WFSign" + i + "='+'");
    var noSubcats = 0;
    eval("if (typeof(" + subcat + ") == 'undefined')" + "  noSubcats = 1");
    if (noSubcats == 0)
    {
		if(subcat_array.length > 0)
		{
			sTemplate = sTemplate.replace(/<<category image>>/g,
				"<a href=\"JavaScript:showHideLayer('WFDB" + i + "');JavaScript:swap('WFSign" + i + "')\">" +
				"<IMG class=\"arrowbutton\"" +
				"src=\"/images/plus_on.gif\" name=\"WFSign" + i + "\"></a>");
		}
		else
		{
			sTemplate = sTemplate.replace(/<<category image>>/g, "");
		}
			
    }
    else
    {
      sTemplate = sTemplate.replace(/<<category image>>/g,"");
    }
    sTemplate = sTemplate.replace(/<<checkbox>>/g, sCheckbox);
	var newCatName = catName.replace(/&/g, "%26");
    //sTemplate = sTemplate.replace(/<<category name>>/g, "<font class=\"categorytitle\">" + catName + "</font>");
	sTemplate = sTemplate.replace(/<<category name>>/g, "<A CLASS=\"categorytitle\" HREF=\"genCats.asp?cid=10235&catName=" + newCatName + "&subcatName=none\"><FONT CLASS='categorytitle'>" + catName + "</A>");

    document.write(sTemplate);

    for (p=0; p<subcat_array.length; p++)
    {
      sSubTemplate = MAIN_SUBSUBJECT_T;
      sSubTemplate = sSubTemplate;
      sSubCheckbox = '<input type="checkbox" title="Check box to include in search" name="CheckSubAll" value="';
      sSubCheckbox += p + ':::' + subcat + ':::' + i + '"';
      sSubCheckbox += ' onClick="javascript:catFunction('+ p +', this.checked, \''+ subcat +'\', 0);">';
	  
	  var newSubcat = subcat_array[p][0][0].replace(/&/g, "%26");

      sSubTemplate = sSubTemplate.replace(/<<subcheckbox>>/g, sSubCheckbox);
      //sSubTemplate = sSubTemplate.replace(/<<subcategory name>>/g, subcat_array[p][0][0]);
	  sSubTemplate = sSubTemplate.replace(/<<subcategory name>>/g, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<A CLASS=\"categorytitle\" HREF=\"genCats.asp?cid=10235mainCat=" + newCatName + "&subcatName=" + newSubcat + "\">" + subcat_array[p][0][0] + "</A>");
	  
	  document.write("<div class=\"subcategorytitle\" id=\"WFDB" + i + "\">" + sSubTemplate + "</div>");			
    }

    if (rowNum == (offset - 1))
    {
      rowNum = 0;
    }
    else
    {
      rowNum++;
    }
  }
  document.write('</td>');
}


//This will be the category list on the main page
function showSubjectDBs(selectName, categoryOmit, omitDatabase, nCols)
{
  if (typeof(selectName) == 'undefined')
  {
    selectName = 'Databases';
  }

  if (typeof(categoryOmit) == 'undefined')
  {
    categoryOmit = '';
  }

  if (typeof(omitDatabase) == 'undefined')
  {
    omitDatabase = '';
  }

  endIndex = 0;
  rowNum = 0;
  dbCount = 0;
  curCol = 1;

  var offset = Math.ceil(category.length / nCols);
  var count = 1;

  document.write('<tr>');
  for (i=0; i< category.length; i++)
  {
    if (categoryOmit.indexOf(category[i][0][0]) >= 0)
    {
	
	//alert(categoryOmit.indexOf(category[i][0][0]));
      continue;
    }

    if (count % offset == 1)
    {
      document.write('<td valign="top" width="30%" class="arrowcell">');
    }

    var sDatabases='';
    sOptionValue = '';
    sOptionText = category[i][0][0];

    for (j = 0; j < category[i][1].length; j++)
    {
      wfname = category[i][1][j];

      for (k=0; k<databaseList.length; k++)
      {
        if (databaseList[k][0] == wfname)
        {
          dbArray = databaseList[k];
        }
      }

      sDatabases += '&nbsp;&nbsp;&nbsp;' + dbArray[1] + ' ';
      sDatabases += '<a href="javascript:showHelp(\'/help.html?wffield=';
      sDatabases += dbArray[0]+'\')">' + dbArray[9] + '</a><br>\n';

      if (dbArray[1].indexOf('<!-- link only -->') >= 0)
      {
        continue;
      }

      sOptionValue += ',' + category[i][1][j];
    }

    sOptionValue = sOptionValue.substr(1);

    //document.write('&nbsp;<input type="checkbox" name="Databases" id="' + sOptionValue + '" value=' + sOptionValue + '> </font>');
    //document.write('<label for="' + sOptionValue + '">' + sOptionText + '</label><BR>\n');
	
	var newCatName = sOptionText.replace(/&/g, "%26");

    document.write('&nbsp;<input type="checkbox" name="Databases" id="' + sOptionValue + '" value=' + sOptionValue + '> </font>');
    document.write("<A CLASS=\"categorytitle\" HREF=\"genCats.asp?cid=10235&catName=" + newCatName + "&subcatName=none\"><FONT CLASS='categorytitle'>" + sOptionText + "</A><BR>\n");
	

    count++;
    if (count % offset == 0)
    {
      count = 1;
      document.write('</td>');
    }
  }
  document.write('</tr>');
}





//The rest of these functions are somewhat specific to the Results page
function makeScoreboardHeader()
{
  var temp = '<td class="SBhead" valign="top" align="right" width="10%"><a class="SBhead" href="#WF" onClick="wfToggleSortSBTotal()">' + langStrings[lang_hits_idx][lang] + '</a></td>';
 temp += '<td class="SBhead" valign="top" align="left" WIDTH="50"><a class="SBhead" href="#WF" onClick="wfToggleSortSBName()">' + langStrings[lang_database_idx][lang] + '</a></td>';
  temp += '<tr><td colspan="2" VALIGN="TOP"><HR WIDTH="100%" SIZE="1" COLOR="#dddddd"></td>';
  return temp;
}


      
//----------------------------------------------------------------------
// returns the scoreboard data header
//----------------------------------------------------------------------
function makeScoreboardRow(bLinked, i)
{
  var rowClass = "wfsbdata" + i % 2;

  var temp = '<tr>';
  temp += '<td class="' + rowClass + '" valign="top" align="right"><<count>>&nbsp;&nbsp;</td>';
  if (bLinked) {
    temp += '<td class="' + rowClass + '" valign="top"><a class="SBCol" href="#<<wf name>>"><<db name>></a></td>';
  } else {
    temp += '<td class="' + rowClass + '" valign="top"><span class="SBCol"><<db name>></span></td>';
  }

  temp += '</tr>';
  
  temp = temp.replace(/<<wf name>>/g, wfScore[i].WFname);
  temp = temp.replace(/<<db name>>/g, wfScore[i].DisplayName);
  temp = temp.replace(/<<count>>/g, wfScore[i].Total);
  
  return temp;
}





function wfWriteScoreboard(bLinked)
{
  if (!bUseScoreboard) {
    return;
  }

  // Update the mode setting
  if (bLinked) {
    wfbSBLinked = true;
  } else {
    wfbSBLinked = false;
  }

  var i;
  var temp = '';
  temp += '<table border="0" width="285" cellpadding=0 cellspacing=0>';
  temp += '<tr>' + makeScoreboardHeader() + '</tr>';

  for (i = 0; i < wfScore.length; ++i) {
    temp += makeScoreboardRow(bLinked, i);
  }

  temp += '</table>';

  if (document.getElementById("WFsb2")) {
    document.getElementById("WFsb2").innerHTML = temp;
  }
}







//Providing category drop-down list on Results page
function showResultsCategoryBox(selectName, categoryOmit)
{
//var selectedCatName26 = getCookie('selectedCatName');
 //selectedCatName26 = selectedCatName26.replace(/\+/g, '');
var sSelectedDatabases = getCookie('wf_selected_databases');

//alert("categoryOmit: " + categoryOmit);

	document.write('<select name="' + selectName + '">');
//document.write('<option selected>Choose a Category</option>');

//alert(sSelectedDatabases);
var catDisplayMSG = "User Selected Resources";
document.write('<option selected value="' + sSelectedDatabases + '">' + catDisplayMSG + '</option>');
	for (i=0; i< category.length; i++)
	{
	
	
		if (categoryOmit.indexOf(category[i][0][0]) >= 0)
			continue;

		sOptionValue = '';
		sOptionText = '';

		sOptionText = category[i][0][0];

		for (j = 0; j < category[i][1].length; j++)
		{
			sOptionValue += ',' + category[i][1][j];
		}

		sOptionValue = sOptionValue.substr(1);

		document.write('<option value="' + sOptionValue + '">');
		//document.write(sOptionText + '</option>\n');
		document.write(sOptionText + '</option>\n');
	}
	document.write('</select>');
}


//Overloading to add a 'pre-1900' option
function showDateRangeAla(startYear)
{
  var today = new Date();
  currentYear = today.getYear();
  if (currentYear < 1900)
  {
    currentYear += 1900;
  }
  //wf_from_year
  document.write('From:');
  document.write('<select class="datebox" name="wf_from_year" size="1" disabled>');
  document.write('<option value="1700">pre-1900</option>');
  document.write('<option value="' + startYear + '" selected>' + startYear + '</option>');
  for (i=startYear +  1; i <= currentYear ; i++)
  {
    document.write('<option value="' + i + '">' + i + '</option>');
  }

   //wf_to_year
  document.write('</select>&nbsp;To:');
  document.write('<select class="datebox" name="wf_to_year" size="1" disabled>');
  document.write('<option value="' + currentYear + '" selected>' + currentYear + '</option>');
  for (i=currentYear - 1; i >= startYear ; i--)
  {
    document.write('<option value="' + i + '">' + i + '</option>');
  }

  document.write('</select>');
}
