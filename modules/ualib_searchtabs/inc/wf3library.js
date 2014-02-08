





// WF3 Library functions

var iButtomImg = '';
var helpImage = '';

var FieldText = [
  ['wf_keyword', 'Keyword'],
  ['wf_title', 'Title'],
  ['wf_author', 'Author'],
  ['wf_subject', 'Subject'],
  ['wf_abstract', 'Abstract'],
  ['wf_all', 'All Fields'],
  ['wf_description', 'Description']
];

iButtonImg = '/images/ibutton.gif';
helpImage = '/images/i_60.jpg';

function getCookie(cookiename)
{
	var result = null;
	var myCookie = " " + document.cookie + ";";
	var searchName = " " + cookiename + "=";
	var startOfCookie = myCookie.indexOf(searchName);
	var endOfCooke;

	if (startOfCookie != -1)
	{
		startOfCookie += searchName.length;
		endOfCookie = myCookie.indexOf(";", startOfCookie);
		if(endOfCookie == -1) { endOfCookie = myCookielength(); }
		result = unescape(myCookie.substring(startOfCookie, endOfCookie));

	}
	return result;
}

// Return the customer assigned database name from the arrays
function getDisplayName(inField, defaultName)
{
	var outName = defaultName;
	if (typeof(databaseList) == 'undefined')
		return outName;

	for (j = 0; j < databaseList.length; j++)
	{
		if (databaseList[j][0] == inField)
		{
			outName = databaseList[j][1];
			return outName;
		}
	}

	return outName;
}

// Generate the date range in the searchbox

function showDateRange(startYear)
{
  var today = new Date();
  currentYear = today.getYear();
  if (currentYear < 1900)
  {
    currentYear += 1900;
  }
  //wf_from_year
  document.write('From&nbsp;');
  document.write('<select class="datebox" name="wf_from_year" size="1" disabled>');
  document.write('<option value="' + startYear + '" selected>' + startYear + '</option>');
  for (i=startYear +  1; i <= currentYear ; i++)
  {
    document.write('<option value="' + i + '">' + i + '</option>');
  }

   //wf_to_year
  document.write('</select>&nbsp;To&nbsp;');
  document.write('<select class="datebox" name="wf_to_year" size="1" disabled>');
  document.write('<option value="' + currentYear + '" selected>' + currentYear + '</option>');
  for (i=currentYear - 1; i >= startYear ; i--)
  {
    document.write('<option value="' + i + '">' + i + '</option>');
  }

  document.write('</select>');
}

function setSearch(nSearch)
{
  searchType = nSearch;
}

// Untested, not currently used

function onLoadCategories(catName, state)
{
  if (typeof(catName) == 'undefined')
  {
    catName = 'All Resources';
  }
  if (typeof(state) == 'undefined')
  {
    state = true;
  }
  for (i=0; i<category.length; i++)
  {
    if ( category[i][0][0] == catName)
    {
      if (document.wfform.CheckAll.length == null)
      {
        document.wfform.CheckAll.checked = true;
      }
      else
      {
        document.wfform.CheckAll[i].checked=true;
      }
      catFunction(i,state);
    }
  }//end of for
document.wfform.wf_term1.focus();
}

// Used to add a hidden list of databases to a quick search

function addHiddenInput(categoryName, databaseAdd, databaseOmit)
{
  if (typeof(categoryName) == 'undefined')
  {
    categoryName = category[0][0][0];
  }

  if (typeof(databaseAdd) == 'undefined')
  {
    databaseAdd = '';
  }

  if (typeof(databaseOmit) == 'undefined')
  {
    databaseOmit = '';
  }

  hiddenValue = '';

  for (i=0; i< category.length; i++)
  {
    if (categoryName.indexOf(category[i][0][0]) >= 0)
    {
      for (j=0; j<category[i][1].length; j++)
      {
        if (databaseOmit.indexOf(category[i][1][j]) < 0)
        {
          hiddenValue += ',' + category[i][1][j];
        }
      }
    }
  }

  if (databaseAdd.length > 0)
  {
    hiddenValue += ',' + databaseAdd;
  }
  hiddenValue = hiddenValue.substr(1);

  document.write('<input type="hidden" name="Databases" ');
  document.write('value="' + hiddenValue + '">');
}

// Validates terms and checkboxes without setting a cookie

function checkDBsNoCookie()
{
  var count = document.wfform.Databases.length;
  var noneSelected = true;
  var missing = 1;
  var temp = '';

  if (document.wfform.wf_term1.value.length > 0)
  {
    missing = 0;
  }
  if (document.wfform.wf_term2)
  {
    if (document.wfform.wf_term2.value.length > 0)
    {
      missing = 0;
    }
  }
  if (document.wfform.wf_term3)
  {
    if (document.wfform.wf_term3.value.length > 0)
    {
      missing = 0;
    }
  }

  if (missing == 1)
  {
	alert('Please enter a search term!');
  	return false;
  }

  if (document.wfform.Databases.value != null)
  {
    return true;
  }
  else
  {
    if (document.wfform.Databases.length == null)
    {
      // Only one checkbox present
      if (document.wfform.Databases.checked == true)
      {
        noneSelected = false;
      }
    }
    else
    {
      noneSelected = true;
      for (i=0; i< document.wfform.Databases.length; i++)
      {
        if (document.wfform.Databases[i].checked == true)
        {
          noneSelected = false;
        }
      }//end of for
    }//end of else
    if (noneSelected == true)
    {
 		alert('Please select at least one database!');
      return false;
    }
    else
    {
      return true;
    }
  }
}

// Sets the structure cookie that displays the search string on the result page and checks that at least
// one database is chosen and that a search term is picked..

function checkDBs()
{
  var sCookieText = '';
  var sDatabaseCookie = '';
  var count = document.wfform.Databases.length;
  var noneSelected = true;
  var missing = 1;
  var temp = '';

  if (document.wfform.wf_term1.value.length > 0)
  {
    missing = 0;
  }
  if (document.wfform.wf_term2)
  {
    if (document.wfform.wf_term2.value.length > 0)
    {
      missing = 0;
    }
  }
  if (document.wfform.wf_term3)
  {
    if (document.wfform.wf_term3.value.length > 0)
    {
      missing = 0;
    }
  }

  if (missing == 1)
  {
	alert('Please enter a search term!');
  	return false;
  }


  if (document.wfform.wf_field1.value != 'wf_keyword')
  {
    sCookieText += document.wfform.wf_field1.options[document.wfform.wf_field1.selectedIndex].value + "):(";
    sCookieText += document.wfform.wf_term1.value + "):(";
  }
  else
  {
    sCookieText += "wf_keyword):(";
    sCookieText += document.wfform.wf_term1.value + "):(";
  }
  if (document.wfform.wf_term2)
  {
    sCookieText += document.wfform.wf_op2.options[document.wfform.wf_op2.selectedIndex].value + "):(";
    sCookieText += document.wfform.wf_field2.options[document.wfform.wf_field2.selectedIndex].value + "):(";
    sCookieText += document.wfform.wf_term2.value + "):(";
  }
  else
  {
    sCookieText += '):():():(';
  }
  if (document.wfform.wf_term3)
  {
    sCookieText += document.wfform.wf_op3.options[document.wfform.wf_op3.selectedIndex].value + "):(";
    sCookieText += document.wfform.wf_field3.options[document.wfform.wf_field3.selectedIndex].value + "):(";
    sCookieText += document.wfform.wf_term3.value + "):(";
  }
  else
  {
    sCookieText += '):():():(';
  }
  
  if (document.wfform.wf_all_years)
  {
    if (document.wfform.wf_all_years.value != null)
    {
      sCookieText += document.wfform.wf_all_years.value + '):(0):(0):(';
    }
    else
    {
      if (document.wfform.wf_all_years[0].checked == true)
      {
        sCookieText += 'yes):(0):(0):(';
      }
      else
      {
        sCookieText += document.wfform.wf_all_years[1].value + '):(';
        sCookieText += document.wfform.wf_from_year.selectedIndex + '):(';
        sCookieText += document.wfform.wf_to_year.selectedIndex + '):(';
      }
    }
  }
  if (document.wfform.wf_ftonly)
  {
    sCookieText += document.wfform.wf_ftonly.checked + '):(';
  }
  if (document.wfform.wf_peeronly)
  {
    sCookieText += document.wfform.wf_peeronly.checked + '):(';
  }

  sCookieText = sCookieText.substr(0, sCookieText.length - 3);
  document.cookie = 'wf_search_structure=' + sCookieText + '; Path=/';

  if (document.wfform.Databases.value != null)
  {
    sDatabaseCookie += document.wfform.Databases.value;
    document.cookie = 'wf_selected_databases=' + sDatabaseCookie + '; Path=/';
    return true;
  }
  else
  {
    if (document.wfform.Databases.length == null)
    {
      // Only one checkbox present
      if (document.wfform.Databases.checked == true)
      noneSelected = false;
    }
    else
    {
      noneSelected = true;
      for (i=0; i< document.wfform.Databases.length; i++)
      {
        if (document.wfform.Databases[i].checked == true)
        {
          noneSelected = false;
          sDatabaseCookie += document.wfform.Databases[i].value + ',';
          //break;
        }
      }//end of for
    }//end of else
    if (noneSelected == true)
    {    
      alert('Please select at least one database!');
      return false;
    }
    else
    {
      sDatabaseCookie = sDatabaseCookie.substr(0, sDatabaseCookie.length - 1);
      document.cookie = 'wf_selected_databases=' + sDatabaseCookie + '; Path=/';
      return true;
    }
  }
}

function validateTerms()
{
	boolDBs = checkDBs();
	if (boolDBs == false)
	{
	  return false;
	}
	return true;
}

//--------------------------------------------------------------------------------
// catFunction - Selects all the dbs in a category
//---------------------------------------------------------------------------------
function catFunction(index,state,subname)
{
  var wfnames = new Array;
  var dbGroup = new Array;
  var subdbGroup;
  var catCount = 0;

  //if (typeof(subname) != 'undefined')
  //	eval(subdbGroup + " = subname");

  for (m=0; m<document.wfform.Databases.length; m++)
  {
    document.wfform.Databases[m].checked = false;
  }

  // document.wfform.CheckAll.length
  if (document.wfform.CheckAll.length != null)
  {
    catCount = document.wfform.CheckAll.length;
  }
  else
  {
    catCount = 1;
  }

  for (i=0; i<catCount; i++)
  {
  	if (catCount != 1)
  	{
      state = document.wfform.CheckAll[i].checked;
    }
    else
    {
      state = document.wfform.CheckAll.checked;
    }
    if (state == true)
    {
      if (catCount != 1)
      {
        wfnames = document.wfform.CheckAll[i].value.split(",");
      }
      else
      {
        wfnames = document.wfform.CheckAll.value.split(",");
      }
      for (l=0; l<document.wfform.Databases.length; l++)
      {
        dbGroup[l]=document.wfform.Databases[l].value;
      }
      for (k=0; k<document.wfform.Databases.length; k++)
      {
        for (l=0; l<wfnames.length; l++)
        {
          if (dbGroup[k] == wfnames[l])
          {
            document.wfform.Databases[k].checked = true;
          }
        }// end of first for
      }//end of for
    }
  }

  // Subcat code
  if (typeof(document.wfform.CheckSubAll) != 'undefined')
  {
    if (document.wfform.CheckSubAll.length != null)
    {
      catCount = document.wfform.CheckSubAll.length;
    }
    else
    {
      catCount = 1;
    }

    var wfnames = new Array;
    var dbGroup = new Array;

    // document.wfform.CheckSubAll.length
    for (i=0; i < catCount; i++)
    {
      if (catCount != 1)
      {
        state = document.wfform.CheckSubAll[i].checked;
      }
      else
      {
        state = document.wfform.CheckSubAll.checked;
      }
      if (state == true)
      {
        if (catCount != 1)
        {
          subdbArray = document.wfform.CheckSubAll[i].value.split(":::");
        }
        else
        {
          subdbArray = document.wfform.CheckSubAll.value.split(":::");
        }
        eval("subdbGroup = " + subdbArray[1] + "[" + subdbArray[0] + "]");

        for (j=0; j<subdbGroup[1].length; j++)
        {
          wfnames[j] =  subdbGroup[1][j];
        }

        for (l=0; l<document.wfform.Databases.length; l++)
        {
          dbGroup[l]=document.wfform.Databases[l].value;
        }

        for (k=0; k<document.wfform.Databases.length; k++)
        {
          for (l=0; l<wfnames.length; l++)
          {
            if (dbGroup[k] == wfnames[l])
            {
              document.wfform.Databases[k].checked = true;
            }
          }// end of first for
        }//end of for
      }
    }
  }
}

// Displays category list - Handle + images

function showSubjectList(subjectOmit, descriptionText, subjectOnly, categoryClick, nCols)
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
  if(typeof(g_SubjectTemplate) == 'undefined')
  {
    g_SubjectTemplate = MAIN_SUBJECT_T;
  }

  // Use the default template if g_SubjectDatabaseTemplate is not set
  if(typeof(g_SubjectDatabaseTemplate) == 'undefined')
  {
    g_SubjectDatabaseTemplate = SUBJECT_DATABASE_T;
  }

  // Use the default template if g_SubjectDatabaseTemplate is not set
  if(typeof(subjectOnly) == 'undefined')
  {
    subjectOnly = true;
  }

  if (typeof(subjectOmit) == 'undefined')
  {
    subjectOmit = '';
  }

  if (typeof(descriptionText) == 'undefined')
  {
    descriptionText = '';
  }

  if (typeof(nCols) == 'undefined')
  {
    nCols = 1;
  }

  if (subjectOmit.indexOf('^') > 0)
  {
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
    catCount++;

    catName = category[i][0][0];

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
        var subcat_array;
        var subcat = catName;

        // Setup the array variable the first time through
        // Use the first 3 characters from each word and remove the spaces
        subcat = subcat.replace(/&/g,'');
        subcat = subcat.replace(/\*/g,'');
        subcat = subcat.replace(/-/g,'');
        subcat = subcat.replace(/\?/g,'');
        subcat = subcat.replace(/,/g,'');
        subcat = subcat.replace(/'/g,'');
        subcat = subcat.replace(/\!/g,'');
        subcat = subcat.replace(/\./g,'');
        subcat = subcat.replace(/\(/g,'');
        subcat = subcat.replace(/\)/g,'');
        subcat = subcat.replace(/\//g,'');
        subcat_array = subcat.split(" ");
        subcat = "";
        for (p=0; p<subcat_array.length; p++)
        {
          if (!subcat_array[p])
          {
            continue;
          }
          if (subcat_array[p].length < 3)
          {
            subcat += subcat_array[p].substring(0, subcat_array[p].length);
          }
          else
          {
            subcat += subcat_array[p].substring(0, 3);
          }
        }
        subcat = subcat.replace(/\s/g,'');
        subcat_array="";

        eval("if (typeof(" + subcat + ") != 'undefined')" + "	subcat_array = " + subcat);

        sCheckbox = '<input type="checkbox" title="Check box to include in search" name="CheckAll" value="';
        sCheckbox += wfSubNames + '"';
        sCheckbox += ' onClick="javascript:catFunction('+ currIdx +',this.checked);">';
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
      sTemplate = sTemplate.replace(/<<category image>>/g,
        "<td width=\"10%\" align=\"right\"><a href=\"JavaScript:showHideLayer('WFDB" + i + "');JavaScript:swap('WFSign" + i + "')\">" +
        "<IMG class=\"arrowbutton\"" +
        "src=\"images/plus_on.gif\" name=\"WFSign" + i + "\"></a></td>");
    }
    else
    {
      sTemplate = sTemplate.replace(/<<category image>>/g, "<td width=\"10%\">&nbsp;</td>");
    }
    sTemplate = sTemplate.replace(/<<checkbox>>/g, sCheckbox);
    sTemplate = sTemplate.replace(/<<category name>>/g, "<font class=\"categorytitle\">" + catName + "</font>");

    document.write(sTemplate);

    for (p=0; p<subcat_array.length; p++)
    {
      sSubTemplate = MAIN_SUBSUBJECT_T;
      sSubTemplate = sSubTemplate;
      sSubCheckbox = '<input type="checkbox" title="Check box to include in search" name="CheckSubAll" value="';
      sSubCheckbox += p + ':::' + subcat + '"';
      sSubCheckbox += ' onClick="javascript:catFunction('+ p +', this.checked, '+ subcat +');">';

      sSubTemplate = sSubTemplate.replace(/<<subcheckbox>>/g, sSubCheckbox);
      sSubTemplate = sSubTemplate.replace(/<<subcategory name>>/g, subcat_array[p][0][0]);
      document.write("<div class=\"categorytitle\" id=\"WFDB" + i + "\">" + sSubTemplate + "</div>");
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

// Display all the databases for a specific category

function showDBsForCatName(categoryName, descriptionText, nCols, omitDatabase, format,top)
{
  var wf_access = 0;

  // Use the default template if g_CheckboxTemplate is not present
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

  for (i=0; i< category.length; i++)
  {
    if (category[i][0][0] == categoryName)
    {
      var offset = 0;
      var dbCount = category[i][1].length;

      for(j=0; j < category[i][1].length; j++)
      {
        wfname = category[i][1][j];
        for (k = 0; k < databaseList.length; k++)
        {
          if (databaseList[k][0] == wfname)
          {
            dbArray = databaseList[k];
            if ((wf_access == 1 && dbArray[2] != 2) || dbArray[0] == 'wf_iefbr14' || dbArray[1] == '')
            {
              dbCount--;
            }
          }
        }
      }
      if (typeof(nCols) != 'undefined')
      {
        offset = Math.ceil((dbCount) / nCols);
      }
      if (nCols == 1)
      {
        offset = 0;
      }
      var rowNum = 0;
      var colNum = 0;
      var count = 0;
      var anchors = omitDatabase;
      var text="";
      var textanchor="";
      var isTop = 0;

      // Emergency fix due to misuse of omitDatabase
      if (omitDatabase.length >= 0)
      {
        omitDatabase = '';
      }

      for (j=0; j < category[i][1].length; j++)
      {
        wfname = category[i][1][count];
        for (k=0; k < databaseList.length; k++)
        {
          if (databaseList[k][0] == wfname)
          {
            dbArray = databaseList[k];
          }
        }

        if ((wf_access == 1 && dbArray[2] != 2) || dbArray[0] == 'wf_iefbr14' || dbArray[1] == '' || (omitDatabase.indexOf(dbArray[0]) >= 0))
        {
          count++;
          continue;
        }

        isTop = 0;
        if ((rowNum == 0) && (colNum < nCols))
        {
          if(count > 0)
          {
            //document.write(top);
            document.write('</td>');
          }
          document.write('<td>');
          colNum ++;
        }

        sTemplate = g_CheckboxTemplate;

        sCheckbox = '';
        sDBname = '';
        sDescLink = '';

        wfName = dbArray[0];
        dbName = dbArray[1];
        sDBDesc = dbArray[7];
        sDBname = dbName;
        sIconDesc = dbArray[9];

        for (p = 0;p < format.length ; p++)
        {
          if (sDBname.charAt(0) == format[p] && format[p]!="*")
          {
            format[p]="*";
            document.write(top);
            isTop = 1;
            j--;
            break;
          }
        }

        if (isTop == 0)
        {
          if (dbArray[6] != '')
          {
            sNativeLink =   dbArray[6];
            sNativeLink = '<a class=dblink href="' + sNativeLink + '" title="Click to access this resource directly">';
          }
          else
          {
            sNativeLink = '';
          }
          sDescLink = '<a href="javascript:showHelp(\'/help.html?wffield=';
          sDescLink += wfName;
          sDescLink += '\');">' + descriptionText + '</a>';

          sCheckbox = '<input type="checkbox" title="Check box to include in search" name="' + g_CheckboxName + '" value="';
          sCheckbox += wfName + '">';

          if (sDBname.indexOf('<!-- link only -->') >= 0)
          {
            sCheckbox = '<input type="checkbox" name="" disabled="disabled">';
          }

          sTemplate = sTemplate.replace(/<<checkbox>>/g, sCheckbox);
          sTemplate = sTemplate.replace(/<<description link>>/g, sDescLink);
          sTemplate = sTemplate.replace(/<<database name>>/g, sDBname);
          sTemplate = sTemplate.replace(/<<database description>>/g, sDBDesc);
          sTemplate = sTemplate.replace(/<<native link>>/g, sNativeLink);
          sTemplate = sTemplate.replace(/<<icon description>>/g, sIconDesc);

          for (l = 0 ; l < anchors.length ; l++)
          {
            if (sDBname.charAt(0) == anchors[l])
            {
              if ( anchors[l] != "*" )
              {
                text = anchors[l];
                anchors[l]= "*" ;
                textanchor = "<a name='"+text+"'></a>";
              }
              break;
            }
          }
          document.write(textanchor);
          document.write(sTemplate);

          count++;
          if (rowNum == (offset - 1))
          {
            rowNum = 0;
          }
          else
          {
            rowNum++;
          }
        }
      }
      break;
    }
  }
  //document.write(top);
}

// Return a comma-delimited list of wf_names for a category

function formCategoryList(categoryName)
{
  dbValue='';
  for (i=0; i< category.length; i++)
  {
    if (categoryName == category[i][0][0])
    {
      for (j=0; j<category[i][1].length; j++)
      {
        dbValue += ',' + category[i][1][j];
      }
      break;
    }
  }
  return dbValue.substr(1);
}

// Return a comma-delimited list of wf_names for a subcategory

function formSubcategoryList(categoryName, subcategoryName)
{
  var subcat = categoryName;
  var dbVal = '';

  subcat = subcat.replace(/&/g,'');
  subcat = subcat.replace(/\*/g,'');
  subcat = subcat.replace(/-/g,'');
  subcat = subcat.replace(/\?/g,'');
  subcat = subcat.replace(/,/g,'');
  subcat = subcat.replace(/'/g,'');
  subcat = subcat.replace(/\!/g,'');
  subcat = subcat.replace(/\./g,'');
  subcat = subcat.replace(/\(/g,'');
  subcat = subcat.replace(/\)/g,'');
  subcat = subcat.replace(/\//g,'');
  subcat_array = subcat.split(" ");
  subcat = "";

  for (p=0; p<subcat_array.length; p++)
  {
    if (!subcat_array[p] && subcat_array[p] != '')
    {
      return '';
    }

    if (subcat_array[p].length < 3)
    {
      subcat += subcat_array[p].substring(0, subcat_array[p].length);
    }
    else
    {
      subcat += subcat_array[p].substring(0, 3);
    }
  }
  subcat_array = '';
  subcat = subcat.replace(/\s/g,'');
  eval("if (typeof(" + subcat + ") != 'undefined')" + "	subcat_array = " + subcat);

  for (p=0; p < subcat_array.length; p++)
  {
    if (subcat_array[p][0][0] == subcategoryName)
    {
      return subcat_array[p][1];
    }
  }
  return '';
}

// Create the top layer

function initLayer()
{
  var divID
  var obj;
  var divs = document.getElementsByTagName("div");
  for (var i = 0; i < divs.length; i++)
  {
    divID = divs[i].id;

    if (!divID)
    {
      continue;
    }

    if (divID.substr(0, 4) == 'WFDB')
    {
      divs[i].style.display = 'none';
    }
  }
}

// Swap out the top layer

function showHideLayer(divName)
{
  var divID
  var obj;
  var divs = document.getElementsByTagName("div");
  for (var i = 0; i < divs.length; i++)
  {
    divID = divs[i].id;

    if (!divID)
    {
      continue;
    }

    if (divID.substr(0, 4) == 'WFDB')
    {
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
}

// Image swap

function swap(imgName)
{
  if (document.images[imgName].src.indexOf('images/plus_on.gif') > 0)
  {
    document.images[imgName].src='images/plus_off.gif';
  }
  else
  {
    document.images[imgName].src='images/plus_on.gif';
  }
}

// Function to trap the enter key
function checkSubmit(event, oForm)
{
  var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
  if (keyCode == 13)
  {
    if (checkDBs())
    {
      oForm.submit();
      return false;
    }
  }
  return true;
}

// RESULT TEMPLATE FUNCTIONS

function lookupFieldText(wfField)
{
  for (i=0; i<FieldText.length; i++)
  {
    if (wfField == FieldText[i][0])
    {
      return FieldText[i][1];
    }
  }
  return 'Keyword';
}

// Make sure there are no undefined variables in the list
function createSearchStruct(sDelimitedString)
{
  var aSearchStruct = '';

  if (sDelimitedString.indexOf('):(') >= 0)
  {
    aSearchStruct = sDelimitedString.split('):(');
  }
  else
  {
    aSearchStruct = sDelimitedString.split(':');
  }

  // Make sure we have all 13 parts to the structure
  for (i=aSearchStruct.length; i<13; i++)
  {
    aSearchStruct.push('');
  }

  // Make sure we do not have any undfined elements and swap out %20 for spaces if it comes from a QS
  for (i=0; i<aSearchStruct.length; i++)
  {
    if (typeof(aSearchStruct[i]) == 'undefined')
    {
      aSearchStruct[i] = '';
    }
    if (typeof(aSearchStruct[i]) == 'string')
    {
      aSearchStruct[i] = aSearchStruct[i].replace(/%20/g, ' ');
    }
  }
  return aSearchStruct;
}

function onLoadFormUpdateNoCookie()
{
  if (aSearchStruct)
  {
    if (document.wfform.wf_term1)
    {
      document.wfform.wf_term1.value = aSearchStruct[1];
    }
    if (document.wfform.wf_term2)
    {
      document.wfform.wf_term2.value = aSearchStruct[4];
    }
    if (document.wfform.wf_term3)
    {
      document.wfform.wf_term3.value = aSearchStruct[7];
    }

    // Set the selection boxes
    for (i=0; i<document.wfform.elements.length; i++)
    {
      curField = 'undefined';
      nArrayIdx = -1;
      // Field1
      if (document.wfform.elements[i].name == 'wf_field1')
      {
        nArrayIdx = 0;
        curField = document.wfform.elements[i];
      }
      // Field2
      if (document.wfform.elements[i].name == 'wf_field2')
      {
        nArrayIdx = 3;
        curField = document.wfform.elements[i];
      }
      // Field3
      if (document.wfform.elements[i].name == 'wf_field3')
      {
        nArrayIdx = 6;
        curField = document.wfform.elements[i];
      }
      // Op2
      if (document.wfform.elements[i].name == 'wf_op2')
      {
        nArrayIdx = 2;
        curField = document.wfform.elements[i];
      }
      // Op3
      if (document.wfform.elements[i].name == 'wf_op3')
      {
        nArrayIdx = 5;
        curField = document.wfform.elements[i];
      }

      if (curField == 'undefined')
      {
        continue;
      }

      if (curField.options != null)
      {
        for (j=0; j<curField.options.length; j++)
        {
          if(curField.options[j].value == aSearchStruct[nArrayIdx])
          {
            curField.selectedIndex = j;
          }
        }
      }
    }

    // Set the ft, peer-reviewed and date range restrictions
    if (aSearchStruct[11] == 'true')
    {
      document.wfform.wf_ftonly.checked = true;
    }
	if (aSearchStruct[12] == 'true')
    {
      if (document.wfform.wf_peeronly)
      {
        document.wfform.wf_peeronly.checked = true;
      }
    }
    if (aSearchStruct[8] == 'range')
    {
      document.wfform.wf_all_years[1].checked = true;
      document.wfform.wf_from_year.selectedIndex = aSearchStruct[9];
      document.wfform.wf_from_year.disabled = false;
      document.wfform.wf_to_year.selectedIndex = aSearchStruct[10];
      document.wfform.wf_to_year.disabled = false;
    }
  }

  if (document.wfform.Databases.value == '')
  {
    document.wfform.Databases.value = sSelectedDatabases;
  }
}

// Make sure there are no undefined variables in the list
function onLoadFormUpdate()
{
  if (aSearchStruct)
  {
    if (document.wfform.wf_term1)
    {
      document.wfform.wf_term1.value = aSearchStruct[1];
    }
    if (document.wfform.wf_term2)
    {
      document.wfform.wf_term2.value = aSearchStruct[4];
    }
    if (document.wfform.wf_term3)
    {
      document.wfform.wf_term3.value = aSearchStruct[7];
    }

    // Set the selection boxes
    for (i=0; i<document.wfform.elements.length; i++)
    {
      curField = 'undefined';
      nArrayIdx = -1;
      // Field1
      if (document.wfform.elements[i].name == 'wf_field1')
      {
        nArrayIdx = 0;
        curField = document.wfform.elements[i];
      }
      // Field2
      if (document.wfform.elements[i].name == 'wf_field2')
      {
        nArrayIdx = 3;
        curField = document.wfform.elements[i];
      }
      // Field3
      if (document.wfform.elements[i].name == 'wf_field3')
      {
        nArrayIdx = 6;
        curField = document.wfform.elements[i];
      }
      // Op2
      if (document.wfform.elements[i].name == 'wf_op2')
      {
        nArrayIdx = 2;
        curField = document.wfform.elements[i];
      }
      // Op3
      if (document.wfform.elements[i].name == 'wf_op3')
      {
        nArrayIdx = 5;
        curField = document.wfform.elements[i];
      }

      if (curField == 'undefined')
      {
        continue;
      }

      if (curField.options != null)
      {
        for (j=0; j<curField.options.length; j++)
        {
          if(curField.options[j].value == aSearchStruct[nArrayIdx])
          {
            curField.selectedIndex = j;
          }
        }
      }
    }

    // Set the ft, peer-reviewed and date range restrictions
    if (aSearchStruct[11] == 'true')
    {
      document.wfform.wf_ftonly.checked = true;
    }
	if (aSearchStruct[12] == 'true')
    {
      if (document.wfform.wf_peeronly)
      {
        document.wfform.wf_peeronly.checked = true;
      }
    }
    if (aSearchStruct[8] == 'range')
    {
      document.wfform.wf_all_years[1].checked = true;
      document.wfform.wf_from_year.selectedIndex = aSearchStruct[9];
      document.wfform.wf_from_year.disabled = false;
      document.wfform.wf_to_year.selectedIndex = aSearchStruct[10];
      document.wfform.wf_to_year.disabled = false;
    }
  }
  // Set the database value, if we come in from a QS
  if (document.wfform.Databases.value != null)
  {
    sDatabaseCookie = getCookie('wf_selected_databases');
    document.wfform.Databases.value = sDatabaseCookie;
  }
}

// Validates rtmpl input without setting cookies

function setFormNoCookie()
{
  if (document.wfform.wf_term1)
  {
    if (document.wfform.wf_term1.value.length > 0)
    {
      missing = 0;
    }
  }
  if (document.wfform.wf_term2)
  {
    if (document.wfform.wf_term2.value.length > 0)
    {
      missing = 0;
    }
  }
  if (document.wfform.wf_term3)
  {
    if (document.wfform.wf_term3.value.length > 0)
    {
      missing = 0;
    }
  }

  if (missing == 1)
  {
  	
  	return false;
  }

  if (document.wfform.Databases.value == '')
  {
    document.wfform.Databases.value = sSelectedDatabases;
  }
  return true;
}


// Set the wf_search_structure cookie so we can display the text search string on the result page.

function setForm()
{
  var sCookieText = '';
  var sDatabaseCookie = '';

  if (document.wfform.wf_term1)
  {
    if (document.wfform.wf_term1.value.length > 0)
    {
      missing = 0;
    }
  }
  if (document.wfform.wf_term2)
  {
    if (document.wfform.wf_term2.value.length > 0)
    {
      missing = 0;
    }
  }
  if (document.wfform.wf_term3)
  {
    if (document.wfform.wf_term3.value.length > 0)
    {
      missing = 0;
    }
  }

  if (document.wfform.wf_field1.options)
  {
    sCookieText += document.wfform.wf_field1.options[document.wfform.wf_field1.selectedIndex].value + "):(";
  }
  else
  {
    sCookieText += "wf_keyword):(";
  }

  sCookieText += document.wfform.wf_term1.value + "):(";
  if (document.wfform.wf_term2)
  {
    sCookieText += document.wfform.wf_op2.options[document.wfform.wf_op2.selectedIndex].value + "):(";
    sCookieText += document.wfform.wf_field2.options[document.wfform.wf_field2.selectedIndex].value + "):(";
    sCookieText += document.wfform.wf_term2.value + "):(";
  }
  else
  {
    sCookieText += '):():():(';
  }
  if (document.wfform.wf_term3)
  {
    sCookieText += document.wfform.wf_op3.options[document.wfform.wf_op3.selectedIndex].value + "):(";
    sCookieText += document.wfform.wf_field3.options[document.wfform.wf_field3.selectedIndex].value + "):(";
    sCookieText += document.wfform.wf_term3.value + '):(';
  }
  else
  {
    sCookieText += '):():():(';
  }

  if (document.wfform.wf_all_years)
  {
    if (document.wfform.wf_all_years[1].checked)
    {
      sCookieText += document.wfform.wf_all_years[1].value + '):(';
      sCookieText += document.wfform.wf_from_year.selectedIndex + '):(';
      sCookieText += document.wfform.wf_to_year.selectedIndex + '):(';
    }
    else
    {
      sCookieText += document.wfform.wf_all_years[0].value + '):(0):(0):(';
    }
  }
  if (document.wfform.wf_ftonly)
  {
    sCookieText += document.wfform.wf_ftonly.checked + '):(';
  }
  else
  {
    sCookieText += 'false):(';
  }
  if (document.wfform.wf_peeronly)
  {
    sCookieText += document.wfform.wf_peeronly.checked + '):(';
  }
  else
  {
    sCookieText += 'false):(';
  }
  sCookieText = sCookieText.substr(0, sCookieText.length - 3);
  document.cookie = 'wf_search_structure=' + sCookieText + '; Path=/';

  if (document.wfform.Databases.value == '')
  {
    document.wfform.Databases.value = getCookie('wf_selected_databases');
  }
}

// This function works just like setForm() but encodes the terms for unicode support
function setForm2()
{
  var sCookieText = '';
  var sDatabaseCookie = '';

  if (document.wfform.wf_term1)
  {
    if (document.wfform.wf_term1.value.length > 0)
    {
      missing = 0;
    }
  }
  if (document.wfform.wf_term2)
  {
    if (document.wfform.wf_term2.value.length > 0)
    {
      missing = 0;
    }
  }
  if (document.wfform.wf_term3)
  {
    if (document.wfform.wf_term3.value.length > 0)
    {
      missing = 0;
    }
  }

  if (document.wfform.wf_field1.options)
  {
    sCookieText += document.wfform.wf_field1.options[document.wfform.wf_field1.selectedIndex].value + "):(";
  }
  else
  {
    sCookieText += "wf_keyword):(";
  }

  sCookieText += escape(document.wfform.wf_term1.value) + "):(";
  if (document.wfform.wf_term2)
  {
    sCookieText += document.wfform.wf_op2.options[document.wfform.wf_op2.selectedIndex].value + "):(";
    sCookieText += document.wfform.wf_field2.options[document.wfform.wf_field2.selectedIndex].value + "):(";
    sCookieText += escape(document.wfform.wf_term2.value) + "):(";
  }
  else
  {
    sCookieText += '):():():(';
  }
  if (document.wfform.wf_term3)
  {
    sCookieText += document.wfform.wf_op3.options[document.wfform.wf_op3.selectedIndex].value + "):(";
    sCookieText += document.wfform.wf_field3.options[document.wfform.wf_field3.selectedIndex].value + "):(";
    sCookieText += escape(document.wfform.wf_term3.value) + '):(';
  }
  else
  {
    sCookieText += '):():():(';
  }

  if (document.wfform.wf_all_years)
  {
    if (document.wfform.wf_all_years[1].checked)
    {
      sCookieText += document.wfform.wf_all_years[1].value + '):(';
      sCookieText += document.wfform.wf_from_year.selectedIndex + '):(';
      sCookieText += document.wfform.wf_to_year.selectedIndex + '):(';
    }
    else
    {
      sCookieText += document.wfform.wf_all_years[0].value + '):(0):(0):(';
    }
  }
  if (document.wfform.wf_ftonly)
  {
    sCookieText += document.wfform.wf_ftonly.checked + '):(';
  }
  else
  {
    sCookieText += 'false):(';
  }
  if (document.wfform.wf_peeronly)
  {
    sCookieText += document.wfform.wf_peeronly.checked + '):(';
  }
  else
  {
    sCookieText += 'false):(';
  }
  sCookieText = sCookieText.substr(0, sCookieText.length - 3);
  document.cookie = 'wf_search_structure=' + sCookieText + '; Path=/';

  if (document.wfform.Databases.value == '')
  {
    document.wfform.Databases.value = getCookie('wf_selected_databases');
  }
}

// Popup the thesaurus search

function initThesaurus(wfThrsName)
{
  // Retrieve the search information from the form
  var localClientID = document.wfform.Client_ID.value;

  if (localClientID == 'nysl_temp')
    localClientID = 'nysl';

  // Create URL
  var thrsUrl = '/cgi-bin/webfeat.dll?Command=Search&format=JS&rtmpl=thrs';
  thrsUrl += '&Databases=' + wfThrsName;
  thrsUrl += '&Client_ID=' + localClientID;
  thrsUrl += '&wf_field1=' + aSearchStruct[0];
  thrsUrl += '&wf_term1=' + aSearchStruct[1];
  thrsUrl += '&wf_op2=' + aSearchStruct[2];
  thrsUrl += '&wf_field2=' + aSearchStruct[3];
  thrsUrl += '&wf_term2=' + aSearchStruct[4];
  thrsUrl += '&wf_op3=' + aSearchStruct[5];
  thrsUrl += '&wf_field3=' + aSearchStruct[6];
  thrsUrl += '&wf_term3=' + aSearchStruct[7];

  // open the Thesaurus window
  // Attributes for the new Thesaurus window
  var gThrsWinAttr = 'height=300,width=250,resizable=yes,scrollbars=yes,location=no,status=0,toolbar=no,';
  gThrsWinAttr += 'personalbar=no,menubar=no,left=730,top=150,screenX=730,screenY=150';
  newWin = window.open(thrsUrl, '_thrs', gThrsWinAttr);
  newWin.focus();
  //newWin.document.open();
  //newWin.document.writeln(thrsUrl);
  //newWin.document.close();
}

// Select or deselect all

function changeSelect()
{

	var checkOn = false;

	if (document.wfform.select.checked)
		checkOn = true;

	if (document.wfform.Databases.length == null)
	{
		// Only one checkbox present
		document.wfform.Databases.checked = checkOn;
	}
	else
	{
		for (i=0; i< document.wfform.Databases.length; i++)
			document.wfform.Databases[i].checked = checkOn;
	}

}

function checkForm()
{
	if (document.wfform.wf_term1.value == "")
	{
		alert('Please enter a search term!');
		return false;
	}
	return true;
}

// Function to trap the enter key
function checkResultSubmit(event, oForm)
{
  var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
  if (keyCode == 13)
  {
    if (checkForm())
    {
      setForm();
      oForm.submit();
      return false;
    }
  }
  return true;
}

function decodeQueryURL(QueryString)
{
  var encodedUrlString = unescape(QueryString);
  encodedUrlString = encodedUrlString.replace(/\+/g, ' ');
  return encodedUrlString;
}

function parseQueryString(QueryString)
{
  QueryString = QueryString.replace('?', '');

  var aParamList = QueryString.split('&');
  var aSearchStruct = ['','','','','','','','','','','',0,0];
  var sDatabaseCookie = '';

  for (i=0; i<aParamList.length; i++)
  {
    var elemPair = aParamList[i].split('=');

    if (elemPair.length < 2)
    {
      alert ('Bad pair: ' + i);
    }

    if (elemPair[0] == 'wf_field1')
    {
      aSearchStruct[0] = elemPair[1];
    }
    else if (elemPair[0] == 'wf_term1')
    {
      aSearchStruct[1] = decodeQueryURL(elemPair[1]);
    }
    else if (elemPair[0] == 'wf_op2')
    {
      aSearchStruct[2] = elemPair[1];
    }
    else if (elemPair[0] == 'wf_field2')
    {
      aSearchStruct[3] = elemPair[1];
    }
    else if (elemPair[0] == 'wf_term2')
    {
      aSearchStruct[4] = decodeQueryURL(elemPair[1]);
    }
    else if (elemPair[0] == 'wf_op3')
    {
      aSearchStruct[5] = elemPair[1];
    }
    else if (elemPair[0] == 'wf_field3')
    {
      aSearchStruct[6] = elemPair[1];
    }
    else if (elemPair[0] == 'wf_term3')
    {
      aSearchStruct[7] = decodeQueryURL(elemPair[1]);
    }
    else if (elemPair[0] == 'wf_all_years')
    {
      aSearchStruct[8] = elemPair[1];
    }
    else if (elemPair[0] == 'wf_from_year')
    {
      aSearchStruct[9] = elemPair[1];
    }
    else if (elemPair[0] == 'wf_to_year')
    {
      aSearchStruct[10] = elemPair[1];
    }
    else if (elemPair[0] == 'wf_ftonly')
    {
      aSearchStruct[11] = 'true';
    }
    else if (elemPair[0] == 'wf_peeronly')
    {
      aSearchStruct[12] = 'true';
    }
    else if (elemPair[0] == 'Databases')
    {
      document.cookie = 'wf_selected_databases=' + elemPair[1] + '; Path=/';
    }
  }

  if (aSearchStruct[8] == 'range')
  {
    var count = 0;
    var today = new Date();
    var currentYear = today.getYear();
    if (currentYear < 1900)
    {
      currentYear += 1900;
    }
    for (x = startYear; x <= currentYear; x++)
    {
      if (aSearchStruct[9] == x)
      {
        aSearchStruct[9] = count;
      }
      count++;
    }
    count = 0;
    for (x = currentYear; x >= startYear; x--)
    {
      if (aSearchStruct[10] == x)
      {
        aSearchStruct[10] = count;
      }
      count++;
    }
  }

  for (i = 0; i < aSearchStruct.length; i++)
  {
    if (typeof(aSearchStruct[i]) == 'string')
    {
      aSearchStruct[i] = aSearchStruct[i].replace(/%20/g, ' ');
    }
  }

  return(aSearchStruct);
}

// Added for old systems upgraded to WF3

function showSubjectListWF2(subjectOmit, descriptionText, subjectOnly, bShowNumbers)
{
	// Use the default template if g_SubjectTemplate is not set
	if(typeof(g_SubjectTemplate) == 'undefined')
		g_SubjectTemplate = MAIN_SUBJECT_T;

	// Use the default template if g_SubjectDatabaseTemplate is not set
	if(typeof(g_SubjectDatabaseTemplate) == 'undefined')
		g_SubjectDatabaseTemplate = SUBJECT_DATABASE_T;

	// Use the default template if g_SubjectDatabaseTemplate is not set
	if(typeof(subjectOnly) == 'undefined')
		subjectOnly = true;

	if (typeof(subjectOmit) == 'undefined')
		subjectOnly = '';

	if (typeof(descriptionText) == 'undefined')
		descriptionText = '';

	//Show total number of databases in a category
	if (typeof(bShowNumbers) == 'undefined')
		bShowNumbers = true;

	//Click  databases belonging to a category (SFPL)
	if (typeof(categoryClick) == 'undefined')
		categoryClick = false;

	var subSelIdx = 0;

	// Loop through the category array to build the page
	for (i=0; i<category.length; i++)
	{
		var subSelBegin = subSelIdx;
		var subSelEnd = subSelIdx;
		if (subjectOmit.indexOf(category[i][0][0]) >= 0)
			continue;

		catName = category[i][0][0];

		if (bShowNumbers)
		{
			catName += ' ( ' + category[i][1].length + ' )'
			catName += '<a name="' + category[i][0][0] + '">';
			catLength= category[i][1].length;
		}

		wfSubNames = '';

		// Build the complete subject wf_name list first
		for (j=0; j<category[i][1].length; j++)
		{
			// bschelp 04/01/2003
			// Check to see if the user has the correct access rights
			wfname = category[i][1][j];

			for (k=0; k<databaseList.length; k++)
				if (databaseList[k][0] == wfname)
					dbArray = databaseList[k];

			//tkamdar 10/17/2003
			//check if dbname has <!-- link only, then reduce subSelEnd count by 1
			if (dbArray[11].indexOf('<!-- link only -->') >= 0)
				{ subSelEnd--;}

			wfSubNames += ',' + wfname;
			subSelEnd++;
		}

		// bschelp 04/01/2003
		// If there are no wf_names for this category, don't create the checkbox
		if (wfSubNames.length == 0)
			continue;

		wfSubNames = wfSubNames.substr(1);

		sTemplate = g_SubjectTemplate;
		sCheckbox = '';

		if (subjectOnly)
		{
			sCheckbox = '<input type="checkbox" name="Databases" value="';
			sCheckbox += wfSubNames + '">';
		}
		else
		{
			sCheckbox = '<input type="checkbox" name="CategoryBoxes" value=""';
			sCheckbox += ' onClick="subSel(' + subSelBegin + ',' + subSelEnd;
			sCheckbox += ', this.checked)">';
		}

		// Set the Index for the next group
		subSelIdx = subSelEnd;

		sTemplate = sTemplate.replace(/<<checkbox>>/g, sCheckbox);
		sTemplate = sTemplate.replace(/<<category name>>/g, catName);
		document.write(sTemplate);

		// Now build the individual database entries
		for (j=0; j<category[i][1].length; j++)
		{
			wfname = category[i][1][j];

			for (k=0; k<databaseList.length; k++)
				if (databaseList[k][0] == wfname)
					dbArray = databaseList[k];

			sTemplate = g_SubjectDatabaseTemplate;
			sCheckbox = '';
			sDBname = '';
			sDescLink = '';

			wfName = dbArray[0];
			dbName = dbArray[1];
			sDBDesc = dbArray[7];
			sNativeLink = '<a href="' + dbArray[6] + '">';

			sDescLink = '<a href="javascript:showHelp(\'/help.html?wffield=';
			sDescLink += wfName;
			sDescLink += '\');">' + descriptionText + '</a>';

			sDBname = dbName;

			//tkamdar 09/24 to align link only xlators and skip checkbox
			if (sDBname.indexOf('<!-- link only -->') >= 0)
				{ sCheckbox = '&nbsp;&nbsp;&nbsp;&nbsp;';	}
			else
			{
			sCheckbox = '<input type="checkbox" name="Databases" value="';
			sCheckbox += wfName + '">';
			}

			sTemplate = sTemplate.replace(/<<checkbox>>/g, sCheckbox);
			sTemplate = sTemplate.replace(/<<database name>>/g, sDBname);
			sTemplate = sTemplate.replace(/<<description link>>/g, sDescLink);
			sTemplate = sTemplate.replace(/<<database description>>/g, sDBDesc);
			sTemplate = sTemplate.replace(/<<native link>>/g, sNativeLink);

			document.write(sTemplate);
		}

	}
}

// Upgraded showDBsForCatName
var CHECKBOX_TEMPLATE_D = '<TD align="left" width="10%"><<checkbox>></TD><TD ALIGN="left"><font class="databasetitle"><<native link>><<database name>></a></font></TD>';

function showDBsForCatName2(categoryName, descriptionText, nCols, omitDatabase, format, top)
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
        sDBDesc = dbArray[7];
        sDBname = dbName;
        sIconDesc = dbArray[9];

        if (dbArray[6] != '')
        {
          sNativeLink =   dbArray[6];
          sNativeLink = '<a class=dblink href="' + sNativeLink + '" title="Click to access this resource directly">';
        }

        sDescLink = '<a href="javascript:showHelp(\'/help.html?wffield=';
        sDescLink += wfName;
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
        sCheckbox = '<input type="checkbox" title="Check box to include in search" name="' + g_CheckboxName + '" value="';
        sCheckbox += wfName + '">';
        }

        sTemplate = sTemplate.replace(/<<checkbox>>/g, sCheckbox);
        sTemplate = sTemplate.replace(/<<database name>>/g, sDBname);
        sTemplate = sTemplate.replace(/<<description link>>/g, sDescLink);
        sTemplate = sTemplate.replace(/<<database description>>/g, sDBDesc);
        sTemplate = sTemplate.replace(/<<native link>>/g, sNativeLink);
        sTemplate = sTemplate.replace(/<<icon description>>/g, sIconDesc);

        for (l = 0 ; l < anchors.length ; l++)
        {
          if (sDBname.charAt(0) == anchors[l])
          {
            if ( anchors[l] != "*" )
            {
              text = anchors[l];
              anchors[l]= "*" ;
              textanchor = "<a name='"+text+"'></a>";
            }
          break;
          }
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

        document.write(textanchor);
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
