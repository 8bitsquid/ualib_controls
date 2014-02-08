





var AUTH_STATUS_NONE = 0;
var AUTH_STATUS_REQUESTED = 1;
var AUTH_STATUS_COMPLETE = 2;
var AUTH_STATUS_ON_HOLD = 3;

function showHelp( strURL )
{
    window.open(strURL, "Help", "height=400,width=500,resizable=yes,scrollbars=yes,location=no,status=no,toolbar=no,personalbar=no,menubar=no");
}

function showCategory( strURL )
{
    window.open(strURL, "Help", "height=400,width=500,resizable=yes,scrollbars=yes,location=no,status=no,toolbar=no,personalbar=no,menubar=no");
}

function checkCatalog(wfName)
{
	if (typeof(document.wfform.Databases.length) != 'undefined') 
	{
	  	for (m=0; m<document.wfform.Databases.length; m++) 
  		{
	  		if (document.wfform.Databases[m].value == wfName) {
				document.wfform.Databases[m].checked = document.wfform.catalog.checked;
			}
		}
	}
}


function wfUpdateSBDiags()
{
  return;
  
  var prevSB = document.getElementById("WFsb2").innerHTML;
  var diagFound = 0;
  var newSB = '';
  var innerStr = '';
  for (i = 0; i < stripArray.length; i++)
  {
    if (stripArray[i] != 'null')
    {

        for (x = 0; x < databaseList.length; x++)
        {
            if (databaseList[x][0] == stripArray[i])
            {
            dbName = databaseList[x][1];
            }
        }

        innerStr += '<tr>';
        innerStr += '<td NOWRAP class="wfsbdata0" align="right" valign="top">0&nbsp;&nbsp;</td>';
        innerStr += '<td NOWRAP class="wfsbdata0" valign="top"><i><font color="red">' + dbName + '</font></i></td>';
        innerStr += '<td NOWRAP class="wfsbdata0">&nbsp;&nbsp;</td>';
        innerStr += '<td class="wfsbdata0" valign="top"><font color="red">Resource unavailable</font></td>';
        innerStr += '</tr>';

      diagFound = 1;
    }
  }


  if (diagFound == 1)
  {
    if (prevSB.length == 0)
        prevSB = '<table border="0" cellpadding="0" cellspacing="0" width="100%"></table>';

    prevSB = prevSB.substring(0, prevSB.length - 8);
    prevSB += innerStr + '</table>';
    document.getElementById("WFsb2").innerHTML = prevSB;
  }
}

function initLayer()
{
	var divID, obj;
	var divs = document.getElementsByTagName("div");
	for (var i = 0; i < divs.length; i++)
	{
		divID = divs[i].id;

		if (!divID)
			continue;

		if (divID.substr(0, 4) == 'WFDB')
			divs[i].style.display = 'none';
	}
}


function showHideLayer(divName)
{
	var divID, obj;
	var divs = document.getElementsByTagName("div");
	for (var i = 0; i < divs.length; i++)
	{
		divID = divs[i].id;

		if (!divID)
			continue;

		if (divID.substr(0, 4) == 'WFDB')
			if (divID == divName)
			{
				if (divs[i].style.display == 'block')
				{
					divs[i].style.display = 'none';
				}
				else
				{
					divs[i].style.display = 'block';
				}
			}
	}
}

function swap(imgName)
{
	if (document.images[imgName].src.indexOf('images/plus_on.gif') > 0)
		document.images[imgName].src='images/plus_off.gif';
	else
		document.images[imgName].src='images/plus_on.gif';
}



// catFunction
function catFunction(index, state, subname, isCat)
{
  var wfnames = new Array;
  var dbGroup = new Array;
  var subdbGroup;
  
  var dblength = 1;
  
  // If only 1 database, Databases.length is undefined.
  if (typeof(document.wfform.Databases.length) != 'undefined') 
  {	
  	for (m=0; m<document.wfform.Databases.length; m++)
  	{  	
		if ((typeof (document.wfform.catalog) != 'undefined') &&
			(document.wfform.catalog.checked == true) &&
			(document.wfform.Databases[m].value == document.wfform.catalog.value))
		{
			document.wfform.Databases[m].checked = true;
		}
		else {
			document.wfform.Databases[m].checked = false; 		
  		}
	}
	
	for (i=0; i<document.wfform.CheckAll.length; i++) 
	{
		localstate = document.wfform.CheckAll[i].checked;
		if (localstate == true) 
		{
			for (j=0; j<category[i+1][1].length; j++) {
				wfnames[j] =  category[i+1][1][j];				
			}
	
			for (l=0; l<document.wfform.Databases.length; l++) {
				dbGroup[l]=document.wfform.Databases[l].value;
			}
	
			for (k=0; k<document.wfform.Databases.length; k++)
			{
				for (l=0; l<wfnames.length; l++)
				{
					if (dbGroup[k] == wfnames[l]) {
						document.wfform.Databases[k].checked = true;
					}
				}
			}
		}
	}
  }
  else
  { 
	document.wfform.Databases.checked = false;

	for (i=0; i<document.wfform.CheckAll.length; i++)
	{
		localstate = document.wfform.CheckAll[i].checked;
	
		if (localstate == true)
		{
			for (j=0; j<category[i][1].length; j++) {
				wfnames[j] =  category[i][1][j];
			}
			dbGroup[0]=document.wfform.Databases.value;
	
			for (l=0; l<wfnames.length; l++) 
	        {
				if (dbGroup[0] == wfnames[l]) {	                 
					document.wfform.Databases.checked = true;	
				}
			}
		}
	}
  }  
  
  var wfnames = new Array;
  var dbGroup = new Array;
  
  // If only 1 Database, CheckSubAll.length is undefined.
  if ( typeof(document.wfform.CheckSubAll) != 'undefined'
  	&& typeof(document.wfform.CheckSubAll.length) != 'undefined') 
  {  	  
	  for (i=0; i<document.wfform.CheckSubAll.length; i++)
	  {
		subdbArray = document.wfform.CheckSubAll[i].value.split(":::");
		parentCat = subdbArray[2] - 1;	
	    if (isCat == 1)
		{
			if (parentCat == index)
				document.wfform.CheckSubAll[i].checked = state;
		}
	
		localstate = document.wfform.CheckSubAll[i].checked;
		if ((document.wfform.CheckAll[parentCat].checked == true) && (localstate == true))
			continue;			

		if (localstate == true)
		{
			eval("subdbGroup = " + subdbArray[1] + "[" + subdbArray[0] + "]");
	
			for (j=0; j<subdbGroup[1].length; j++) {
				wfnames[j] =  subdbGroup[1][j];
			}

			if (typeof(document.wfform.Databases.length) != 'undefined')
			{
				for (l=0; l<document.wfform.Databases.length; l++) {
					dbGroup[l]=document.wfform.Databases[l].value;
				}
		
				for (k=0; k<document.wfform.Databases.length; k++)
				{
					for (l=0; l<wfnames.length; l++)
					{
						if (dbGroup[k] == wfnames[l]) {
							document.wfform.Databases[k].checked = true;
						}
					}
				}
			}
			else
			{

				dbGroup[0]=document.wfform.Databases.value;
		
				for (l=0; l<wfnames.length; l++)
				{
					if (dbGroup[0] == wfnames[l]) {
						document.wfform.Databases.checked = true;
					}
				}		
			}
		}
		else if (document.wfform.CheckAll[parentCat].checked == true) {
			document.wfform.CheckAll[parentCat].checked = false;
		}
	  }
  }
  else if ( typeof(document.wfform.CheckSubAll) != 'undefined')
  {    
	subdbArray = document.wfform.CheckSubAll.value.split(":::");
    if (isCat == 1)
	{
		if (subdbArray[2] == index) {
			document.wfform.CheckSubAll.checked = state;
		}
	}

	localstate = document.wfform.CheckSubAll.checked;

	//if ((document.wfform.CheckAll[subdbArray[2]].checked == true) && (localstate == true)) {
	//	continue;
	//}
		
	if (localstate == true)
	{
		eval("subdbGroup = " + subdbArray[1] + "[" + subdbArray[0] + "]");

		for (j=0; j<subdbGroup[1].length; j++) {
			wfnames[j] =  subdbGroup[1][j];
		}

		for (l=0; l<document.wfform.Databases.length; l++) {
			dbGroup[l]=document.wfform.Databases[l].value;
		}

		for (k=0; k<document.wfform.Databases.length; k++)
		{
			for (l=0; l<wfnames.length; l++)
			{
				if (dbGroup[k] == wfnames[l]) {
					document.wfform.Databases[k].checked = true;
				}
			}
		}
	}
	else if (document.wfform.CheckAll[subdbArray[2]].checked == true) {
		document.wfform.CheckAll[subdbArray[2]].checked = false;
	} 
  }  
}


function showSubjectListWFX(subjectOmit, descriptionText, subjectOnly, categoryClick, nCols)
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

  document.write('<td class="arrowcell" colspan="2" rowspan="2" width="50%">');

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

	if (catId != 0)
	{
		descLink = '<a style="{text-decoration: underline; }" href="javascript:showCategory(\'showCategory.do?catId=' + catId + '\')">'+catName + '</a>';
		catName = descLink;
	}
    wfSubNames = '';

    if (rowNum == 0)
    {
      if (catCount > 1)
      {
        document.write('</td>');
        document.write('<td class="arrowcell" colspan="2" rowspan="2" width="50%">');
      }
    }
    else
    {
      // document.write('<br><div class=wfcatbot></div>');
      //document.write('<br>');
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
				"src=\"images/plus_on.gif\" name=\"WFSign" + i + "\"></a>");
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
    sTemplate = sTemplate.replace(/<<category name>>/g, "<font class=\"categorytitle\">" + catName + "</font>");

    document.write(sTemplate);

    for (p=0; p<subcat_array.length; p++)
    {
      sSubTemplate = MAIN_SUBSUBJECT_T;
      sSubTemplate = sSubTemplate;
      sSubCheckbox = '<input type="checkbox" title="Check box to include in search" name="CheckSubAll" value="';
      sSubCheckbox += p + ':::' + subcat + ':::' + i + '"';
      sSubCheckbox += ' onClick="javascript:catFunction('+ p +', this.checked, \''+ subcat +'\', 0);">';

      sSubTemplate = sSubTemplate.replace(/<<subcheckbox>>/g, sSubCheckbox);
      sSubTemplate = sSubTemplate.replace(/<<subcategory name>>/g, subcat_array[p][0][0]);
	  
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

function showCategoryBox(selectName, categoryOmit)
{
	document.write('<select name="' + selectName + '">');

	for (i=0; i< category.length; i++)
	{
		if (categoryOmit.indexOf(category[i][0][0]) >= 0)
			continue;

		sOptionValue = '';
		sOptionText = '';

		sOptionText = category[i][0][0];

		for (j = 0; j < category[i][1].length; j++) {
			sOptionValue += ',' + category[i][1][j];
		}

		sOptionValue = sOptionValue.substr(1);

		document.write('<option value="' + sOptionValue + '">');
		document.write(sOptionText + '</option>\n');
	}
	document.write('</select>');
}

