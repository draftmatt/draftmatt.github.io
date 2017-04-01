CFMessage={};cfinitmsg=function(){var m=CFMessage;m['http']='http'
m['bind']='bind'
m['widget']='widget'
m['global']='global'
m['debug']='debug'
m['info']='info'
m['error']='error'
m['window']='window'
m['loading']='Loading...'
m['globalErrorHandler.alert']=' [Enable debugging by adding \'cfdebug\' to your URL parameters to see more information]'
m['ajax.sendmessage.get']='HTTP GET {0}'
m['ajax.sendmessage.post']='HTTP POST {0} , params: {1}'
m['ajax.sendmessage.error']='{0} Error: {1}'
m['ajax.submitform.formnotfound']='ColdFusion.Ajax.submitForm: Form not found, form id: {0}'
m['ajax.submitform.submitting']='Submitting form, id:  {0}'
m['ajax.submitform.success']='Form submission successful, form id: {0}'
m['ajax.submitform.error']='ColdFusion.Ajax.submitForm: {0} Error submitting form, id: {1} : {2}'
m['navigate.urlrequired']='ColdFusion.navigate: URL is required'
m['navigate.invalidhttpmethod']='ColdFusion.navigate: Invalid HTTP method {0}, HTTP method must be GET or POST'
m['navigate.formnotfound']='ColdFusion.navigate: Form {0} not found'
m['navigate.towindow']='Navigating to: {0}'
m['navigate.tocontainer']='Navigating to {0} in the container: {1}'
m['ajax.replacehtml.elnotfound']='Error replacing HTML, element not found: {0}'
m['ajax.replacehtml.replacing']='Replacing markup for element: {0} from URL {1} with params {2}'
m['ajax.replacehtml.error']='{0} Error retrieving markup for element {1} : {2}'
m['ajax.replacehtml.connectionerror']='Error retrieving markup for element {0}, unable to open connection to URL {1} : {2}'
m['ajax.replacehtml.connectionerrordisplay']='Error: Unable to open connection to URL {0} : {1}'
m['ajax.replacehtml.success']='Replaced markup for element: {0}'
m['ajax.replacehtml.jserror']='Error processing JavaScript in markup for element {0}: {1}'
m['ajax.checkimportedtag.error']='Imports for tag {0} are missing. Use CFAJAXIMPORT to import them on your main page.'
m['bind.register.elnotfound']='Bind failed, element not found: {0}'
m['bind.register.duplicateel']='Bind failed, duplicate elements found for id or name: {0}'
m['bind.assignvalue.elnotfound']='Bind failed, element not found: {0}'
m['bind.assignvalue.selboxerror']='Bind failed for select box {0}, bind value is not a 2D array or valid serialized query'
m['bind.assignvalue.selboxmissingvaldisplay']='Bind failed for select box {0}, value and/or display attributes must be specified on the cfselect tag when binding to a query'
m['bind.assignvalue.selboxinvalidvaldisplay']='Bind failed for select box {0}, columns matching the value or display attributes specified on the cfselect tag are not present in the query'
m['bind.assignvalue.success']='Assigned bind value: \'{0}\' to {1}.{2}'
m['bind.jsbindhandler.invoking']='JavaScript bind, invoking function: {0}'
m['bind.urlbindhandler.response']='URL invocation response: {0}'
m['bind.urlbindhandler.jsonerror']='Error parsing JSON response: {0}'
m['bind.urlbindhandler.httperror']='{0} Error invoking URL {1} : {2}'
m['ajax.urlbindhandler.connectionerror']='Unable to open connection to URL {0} : {1}'
m['getelementvalue.noelementname']='ColdFusion.getElementValue: Element name is required for this function'
m['getelementvalue.elnotfound']='ColdFusion.getElementValue: {0}.{1} not found'
m['bind.getbindelementvalue.elnotfound']='Element not found: {0}'
m['bind.getbindelementvalue.simplevalrequired']='Bind value for element: {0}.{1} must be a simple value'
m['log.title']='ColdFusion AJAX Logger'
m['log.collapse']='Collapse'
m['log.pause']='Pause'
m['log.clear']='Clear'
m['spry.setupcomplete']='CF/Spry integration setup complete'
m['spry.bindhandler.loadingcfc']='Loading Spry dataset {0} with data from CFC: {1} , function: {2} , arguments: {3}'
m['spry.bindhandler.loadingurl']='Loading Spry dataset {0} with data from URL: {1}'
m['spry.bindhandler.error']='Error loading Spry dataset {0} from URL: {1} with params {2}'
m['ajaxproxy.invoke.invoking']='Invoking CFC: {0} , function: {1} , arguments: {2}'
m['ajaxproxy.invoke.response']='CFC invocation response: {0}'
m['ajaxproxy.invoke.error']='{0} Error invoking CFC {1} : {2}'
m['ajaxproxy.sethttpmethod.invalidmethod']='CFAJAXPROXY.setHTTPMethod, Invalid HTTP method:{0}. HTTP method must be GET or POST'
m['ajaxproxy.setqueryformat.invalidformat']='CFAJAXPROXY.setQueryFormat, Invalid query format:{0}. Query format must be row or column'
m['ajaxproxy.setreturnformat.invalidformat']='CFAJAXPROXY.setReturnFormat, Invalid return format:{0}. Return format must be plain, json or wddx'
m['ajaxproxy.init.created']='Created JavaScript proxy for CFC: {0}'
m['autosuggest.loadautosuggest.invalidvalue']='Bind failed for autosuggest {0}, bind value is not a 1D array of strings'
m['autosuggest.checktomakebindcall.fetching']='Fetching data for autosuggest id: {0} , current value: \'{1}\''
m['autosuggest.getAutosuggestObject.notfound']='ColdFusion.Autosuggest.getAutosuggestObject: No autosuggest exists by the name {0}'
m['grid.init.created']='Created grid, id: {0}'
m['grid.init.toolbar.page']='Page'
m['grid.init.toolbar.of']='of {0}'
m['grid.refresh.notfound']='ColdFusion.Grid.refresh: The grid with the name {0} could not be found'
m['grid.refresh.success']='Refreshed grid, id: {0}'
m['grid.sort.notfound']='ColdFusion.Grid.sort: Grid not found, id: {0}'
m['grid.sort.colnotfound']='ColdFusion.Grid.sort: Column not found: {0} for grid id: {1}'
m['grid.sort.invalidsortdir']='ColdFusion.Grid.sort: Invalid sort direction: {0} for grid id: {1}. Sort direction must be ASC or DESC'
m['grid.getgridobject.missinggridname']='ColdFusion.Grid.getGridObject: gridname is required for this function'
m['grid.getgridobject.notfound']='ColdFusion.Grid.getGridObject: No grid exists by the name {0}'
m['grid.fireselectionchangeevent.fire']='Firing selection change event for grid id: {0}'
m['grid.cellclick.targetnotfound']='Grid HREF target not found: {0}'
m['grid.loaddata.loaded']='Data loaded for grid, id: {0}'
m['grid.extproxy.loadresponse.emptyresponse']='CFGRID: Response is empty'
m['grid.extproxy.loadresponse.totalrowcountmissing']='CFGRID: TOTALROWCOUNT missing from response data'
m['grid.extproxy.loadresponse.totalrowcountinvalid']='CFGRID: TOTALROWCOUNT must be a positive integer'
m['grid.extproxy.loadresponse.querymissing']='CFGRID: QUERY missing in response object'
m['grid.extproxy.loadresponse.queryinvalid']='CFGRID: QUERY is not a valid serialized Query object'
m['grid.getTopToolbar.notfound']='ColdFusion.Grid.getTopToolbar: No grid exists by the name {0}'
m['grid.showTopToolbar.notfound']='ColdFusion.Grid.showTopToolbar: No grid exists by the name {0}'
m['grid.hideTopToolbar.notfound']='ColdFusion.Grid.hideTopToolbar: No grid exists by the name {0}'
m['grid.refreshTopToolbar.notfound']='ColdFusion.Grid.refreshTopToolbar: No grid exists by the name {0}'
m['grid.getBottomToolbar.notfound']='ColdFusion.Grid.getBottomToolbar: No grid exists by the name {0}'
m['grid.showBottomToolbar.notfound']='ColdFusion.Grid.showBottomToolbar: No grid exists by the name {0}'
m['grid.hideBottomToolbar.notfound']='ColdFusion.Grid.hideBottomToolbar: No grid exists by the name {0}'
m['grid.refreshBottomToolbar.notfound']='ColdFusion.Grid.refreshBottomToolbar: No grid exists by the name {0}'
m['layout.gettablayout.notfound']='ColdFusion.Layout.getTabLayout: Tab layout not found, id: {0}'
m['layout.enabletab.enabled']='Enabled tab, id: {0} in tab container, id: {1}'
m['layout.enabletab.notfound']='ColdFusion.Layout.enableTab: Tab layout not found, id: {0}'
m['layout.disabletab.disabled']='Disabled tab, id: {0} in tab container, id: {1}'
m['layout.disabletab.notfound']='ColdFusion.Layout.disableTab: Tab layout not found, id: {0}'
m['layout.selecttab.selected']='Selected tab, id: {0} in tab container, id: {1}'
m['layout.selecttab.notfound']='ColdFusion.Layout.selectTab: Tab layout not found, id: {0}'
m['layout.hidetab.hide']='Hide tab, id: {0} in tab container, id: {1}'
m['layout.hidetab.notfound']='ColdFusion.Layout.hideTab: Tab layout not found, id: {0}'
m['layout.showtab.show']='Show tab, id: {0} in tab container, id: {1}'
m['layout.showtab.notfound']='ColdFusion.Layout.showTab: Tab layout not found, id: {0}'
m['layout.createtab.invalidname']='ColdFusion.Layout.createTab: The layout name for the tab requires a string value'
m['layout.createtab.emptyname']='ColdFusion.Layout.createTab: The layout name for the tab being created is required and cannot be empty'
m['layout.createtab.invalidareaname']='ColdFusion.Layout.createTab: The layout area name for the tab requires a string value'
m['layout.createtab.emptyareaname']='ColdFusion.Layout.createTab: The layout area name for the tab being created is required and cannot be empty'
m['layout.createtab.invalidtitle']='ColdFusion.Layout.createTab: The title for the tab requires a string value'
m['layout.createtab.emptytitle']='ColdFusion.Layout.createTab: The title for the tab being created is required and cannot be empty'
m['layout.createtab.invalidurl']='ColdFusion.Layout.createTab: The url for the tab requires a string value'
m['layout.createtab.emptyurl']='ColdFusion.Layout.createTab: The url for the tab being created is required and cannot be empty'
m['layout.createtab.duplicateel']='ColdFusion.Layout.createTab: An element with the same id already exists, id: {0}'
m['layout.createtab.invalidconfig']='ColdFusion.Layout.createTab: Invalid config object passed'
m['layout.createtab.invalidoverflow']='ColdFusion.Layout.createTab: Invalid value for overflow. The only valid values are VISIBLE, SCROLL, AUTO and HIDDEN'
m['layout.createtab.notfound']='ColdFusion.Layout.createTab: Tab layout not found, id: {0}'
m['layout.createtab.success']='ColdFusion.Layout.createTab: Created new tab {0} in tab layout {1}'
m['layout.getborderlayout.notfound']='ColdFusion.Layout.getBorderLayout: Border layout not found, id: {0}'
m['layout.showarea.shown']='{0} area shown for border layout id: {1}'
m['layout.showarea.areanotfound']='ColdFusion.Layout.showArea: Border layout area not found: {0}'
m['layout.showarea.notfound']='ColdFusion.Layout.showArea: Border layout not found, id: {0}'
m['layout.hidearea.hidden']='{0} area hidden for border layout id: {1}'
m['layout.hidearea.areanotfound']='ColdFusion.Layout.hideArea: Border layout area not found: {0}'
m['layout.hidearea.notfound']='ColdFusion.Layout.hideArea: Border layout not found, id: {0}'
m['layout.collpasearea.collapsed']='{0} area collapsed for border layout id: {1}'
m['layout.collpasearea.areanotfound']='ColdFusion.Layout.collapseArea: Border layout area not found: {0}'
m['layout.collpasearea.notfound']='ColdFusion.Layout.collapseArea: Border layout not found, id: {0}'
m['layout.expandarea.expanded']='{0} area expanded for border layout id: {1}'
m['layout.expandarea.areanotfound']='ColdFusion.Layout.expandArea: Border layout area not found: {0}'
m['layout.expandarea.notfound']='ColdFusion.Layout.expandArea: Border layout not found, id: {0}'
m['layout.accordion.initialized']='Accordion layout is initialized for id: {0}'
m['layout.accordion.childinitialized']='Accordion panel is initialized for id: {0}'
m['layout.getaccordionlayout.notfound']='ColdFusion.Layout.getAccordionLayout: Accordion layout not found, id: {0}'
m['layout.hideaccordion.layoutnotfound']='ColdFusion.Layout.hideAccordion: Accordion layout not found, id: {0}'
m['layout.hideaccordion.panelnotfound']='ColdFusion.Layout.hideAccordion: Accordion child panel not found, id: {0}'
m['layout.showaccordion.layoutnotfound']='ColdFusion.Layout.showAccordion: Accordion layout not found, id: {0}'
m['layout.showaccordion.panelnotfound']='ColdFusion.Layout.showAccordion: Accordion child panel not found, id: {0}'
m['layout.showaccordion.layoutnotfound']='ColdFusion.Layout.showAccordion: Accordion layout not found, id: {0}'
m['layout.showaccordion.panelnotfound']='ColdFusion.Layout.showAccordion: Accordion child panel not found, id: {0}'
m['layout.expandaccordion.layoutnotfound']='ColdFusion.Layout.expandAccordion: Accordion layout not found, id: {0}'
m['layout.expandaccordion.panelnotfound']='ColdFusion.Layout.expandAccordion: Accordion child panel not found, id: {0}'
m['layout.collapseaccordion.layoutnotfound']='ColdFusion.Layout.collapseAccordion: Accordion layout not found, id: {0}'
m['layout.collapseaccordion.panelnotfound']='ColdFusion.Layout.collapseAccordion: Accordion child panel not found, id: {0}'
m['layout.hideaccordion.hidden']='{0} panel hidden for accordion layout id: {1}'
m['layout.showaccordion.shown']='{0} panel shown for accordion layout id: {1}'
m['layout.expandaccordion.expanded']='{0} panel expanded for accordion layout id: {1}'
m['layout.collapseaccordion.collapsed']='{0} panel collapsed for accordion layout id: {1}'
m['layout.createaccordionpanel.invalidaccordionpanelname']='ColdFusion.Layout.createAccordionPanel: The value of name for Accordion panel cannot be null or non-string object, id: {0}'
m['layout.createaccordionpanel.emptyaccordionpanelname']='ColdFusion.Layout.createAccordionPanel: The value of name for Accordion panel cannot be empty string, id: {0}'
m['layout.createaccordionpanel.invalidtitle']='ColdFusion.Layout.createAccordionPanel: The value of title cannot be null, empty or non-string object, id: {0}'
m['layout.createaccordionpanel.invalidurl']='ColdFusion.Layout.createAccordionPanel: The value of url cannot be null, empty or non-string object, id: {0}'
m['layout.createaccordionpanel.duplicateel']='ColdFusion.Layout.createAccordionPanel: An element with the same id already exists, id: {0}'
m['layout.createaccordionpanel.invalidconfig']='ColdFusion.Layout.createAccordionPanel: Invalid config object passed'
m['layout.createaccordionpanel.invalidoverflow']='ColdFusion.Layout.createAccordionPanel: Invalid value for overflow. The only valid values are VISIBLE, SCROLL, AUTO and HIDDEN'
m['layout.createaccordionpanel.invalidtitleicon']='ColdFusion.Layout.createAccordionPanel: If defiend, the value of titleicon must be a string type,id: {0}'
m['layout.createaccordionpanel.invalidoverflowforfillheight']='ColdFusion.Layout.createAccordionPanel: When fillheight set to true, overflow valid values are SCROLL and AUTO'
m['layout.createaccordionpanel.created']='Accordion child panel created for id: {0}'
m['pod.init.creating']='Creating pod: {0}'
m['tooltip.gettooltip.fetch']='Fetching markup for tooltip, id: {0}'
m['tree.refresh.notfound']='ColdFusion.Tree.refresh: The tree with the name {0} could not be found'
m['tree.refresh.statictree']='ColdFusion.Tree.refresh: Refresh has no effect on a static tree'
m['tree.refresh.success']='Refreshed tree, id: {0}'
m['tree.gettreeobject.emptyname']='ColdFusion.Tree.getTreeObject: treename is required for this function'
m['tree.gettreeobject.notfound']='ColdFusion.Tree.getTreeObject: No tree exists by the name {0}'
m['tree.loadnodes.invalidbindvalue']='Bind failed for tree {0}, bind value is not a 1D array of key value pairs'
m['tree.loadnodes.success']='Nodes loaded for tree, id: {0}'
m['tree.fireselectionchangeevent.fire']='Firing selection change event for tree id: {0}'
m['tree.initializetree.success']='Created tree, id: {0}'
m['window.create.nullname']='ColdFusion.Window.create: window name needs to be specified'
m['window.create.emptyname']='ColdFusion.Window.create: window name cannot be empty'
m['window.create.duplicatename']='Error creating window {0}, found another window with the same name. Windows must have unique names.'
m['window.create.creating']='Creating window: {0}'
m['window.getupdatedconfigobject.invalidconfig']='ColdFusion.Window.create: Invalid config object passed for window {0}'
m['window.getupdatedconfigobject.invalidinitshow']='ColdFusion.Window.create: The value of initshow in the config object must be Boolean for window {0}'
m['window.getupdatedconfigobject.invalidcenter']='ColdFusion.Window.create: The value of center in the config object must be Boolean for window {0}'
m['window.getupdatedconfigobject.invalidresizable']='ColdFusion.Window.create: The value of resizable in the config object must be Boolean for window {0}'
m['window.getupdatedconfigobject.invaliddraggable']='ColdFusion.Window.create: The value of draggable in the config object must be Boolean for window {0}'
m['window.getupdatedconfigobject.invalidclosable']='ColdFusion.Window.create: The value of closable in the config object must be Boolean for window {0}'
m['window.getupdatedconfigobject.invalidmodal']='ColdFusion.Window.create: The value of modal in the config object must be Boolean for window {0}'
m['window.getupdatedconfigobject.invalidrefreshonshow']='ColdFusion.Window.create: The value of refreshonshow in the config object must be Boolean for window {0}'
m['window.getupdatedconfigobject.invalidheight']='ColdFusion.Window.create: The value of height in the config object must be a positive integer for window {0}'
m['window.getupdatedconfigobject.invalidwidth']='ColdFusion.Window.create: The value of width in the config object must be a positive integer for window {0}'
m['window.getupdatedconfigobject.invalidminwidth']='ColdFusion.Window.create: The value of minwidth in the config object must be a positive integer for window {0}'
m['window.getupdatedconfigobject.invalidminheight']='ColdFusion.Window.create: The value of minheight in the config object must be a positive integer for window {0}'
m['window.getupdatedconfigobject.invalidheightvalue']='ColdFusion.Window.create: The value of height must be greater than the value of minheight for window {0}'
m['window.getupdatedconfigobject.invalidx']='ColdFusion.Window.create: The value of x in the config object must be a positive integer for window {0}'
m['window.getupdatedconfigobject.invalidy']='ColdFusion.Window.create: The value of y in the config object must be a positive integer for window {0}'
m['window.getupdatedconfigobject.minhwnotallowed']='ColdFusion.Window.create: minwidth or minheight cannot be used when resizable=false for window: {0}'
m['window.show.shown']='Window shown, id: {0}'
m['window.show.notfound']='ColdFusion.Window.show: Window not found, id: {0}'
m['window.hide.hidden']='Window hidden, id: {0}'
m['window.hide.notfound']='ColdFusion.Window.hide: Window not found, id: {0}'
m['window.onshow.notfound']='ColdFusion.Window.onShow: Window not found, id: {0}'
m['window.onhide.notfound']='ColdFusion.Window.onHide: Window not found, id: {0}'
m['window.getwindowobject.emptyname']='ColdFusion.Window.getWindowObject: windowname is required for this function'
m['window.getwindowobject.notfound']='ColdFusion.Window.getWindowObject: No window exists by the name {0}'
m['richtext.initialize.success']='Created rich text editor: {0}'
m['richtext.firechangeevent.firechange']='Firing change event for rich text editor: {0}'
m['richtext.initialize.getvalue.notready']='Warning: Unable to get bind value from rich text editor: {0}. Do not bind on load to a rich text editor, it may not be initialized completely during page load.'
m['richtext.geteditorobject.missingtextareaname']='ColdFusion.RichText.getEditorObject: textareaname is required for this function'
m['richtext.geteditorobject.notfound']='ColdFusion.RichText.getEditorObject: No rich text editor exists by the name {0}'
m['progressbar.create.created']='ProgressBar created, id: {0}'
m['progressbar.start.started']='ProgressBar started, id: {0}'
m['progressbar.stop.stopped']='ProgressBar stopped, id: {0}'
m['progressbar.stop.nonrunning']='ColdFusion.ProgressBar.stop: Progressbar not running, id: {0}'
m['progressbar.getProgressBarObject.missingprogressbarid']='ColdFusion.ProgressBar: ProgressBar  config object not found for id: {0}'
m['progressbar.getProgressBarObject.missingprogressbarcomponent']='ColdFusion.ProgressBar: ProgressBar component is not initialized for id: {0}'
m['progressbar.update.invalidoncomplete']='ColdFusion.ProgressBar.update: The value of oncomplete must be a valid js function, id: {0}'
m['progressbar.update.invalidinterval']='ColdFusion.ProgressBar.update: The value of interval must be a positive number(in ms), id: {0}'
m['progressbar.update.invalidduration']='ColdFusion.ProgressBar.update: The value of duration must be a positive number(in ms), id: {0}'
m['progressBar.update.notfound']='ColdFusion.ProgressBar.update: ProgressBar  object not found for id: {0}'
m['progressbar.updatestatus.invalidstatus']='ColdFusion.ProgressBar.updateStatus: The value of status: {1} should be numeric, id: {0}'
m['progressbar.show.shown']='ProgressBar shown, id: {0}'
m['progressbar.reset.reset']='ProgressBar reset done, id: {0}'
m['progressbar.hide.hidden']='ProgressBar hidden, id: {0}'
m['progressbar.update.updated']='ProgressBar updated, id: {0}'
m['progressbar.updatestatus.updated']='ProgressBar status updated, id: {0}'
m['messagebox.show.shown']='Messagebox shown, id: {0}'
m['message.create.created']='Messagebox created, id: {0} and type {1}'
m['messagebox.updatemessage.updated']='Messagebox message updated, id: {0}'
m['messagebox.updatetitle.updated']='Messagebox title updated, id: {0}'
m['messagebox.update.updated']='Messagebox updated, id: {0}'
m['messagebox.getmessageboxobject.missingmessageboxid']='ColdFusion.MessageBox.getMessageBoxObject: MessageBox object is not found for id: {0}'
m['messagebox.show.invalidbuttontype']='ColdFusion.MessageBox.show: The value of buttontype: {1} is not a valid for messagebox buttontype for id: {0}'
m['messagebox.create.invalidname']='ColdFusion.MessageBox.create:  The value of name cannot be null, empty or non-string value.'
m['messagebox.create.duplicatename']='ColdFusion.MessageBox.create: creation failed, duplicate messagebox found, id : {0}'
m['messagebox.create.invalidmessage']='ColdFusion.MessageBox.create: The value of message cannot be null, empty or non-string value, id: {0}'
m['messagebox.create.invalidtitle']='ColdFusion.MessageBox.create: The value of title cannot be null, empty or non-string value, id: {0}'
m['messagebox.create.invalidtype']='ColdFusion.MessageBox.create: The value of type cannot be null or non-string value, id: {0}'
m['messagebox.create.emptytype']='ColdFusion.MessageBox.create: The value of type cannot be empty, id: {0}'
m['messagebox.create.invalidcallback']='ColdFusion.MessageBox.create: callback is not a function object, id: {0}'
m['messagebox.create.invalidtypeandbuttontypecombination']='ColdFusion.MessageBox.create: Messagebox buttontype cannot not be defined for type other than confirm, id: {0}'
m['messagebox.create.invalidbuttontype']='ColdFusion.MessageBox.create: The value of buttontype  {1}  is invalid for type confirm, id: {0}'
m['messagebox.create.widthnotnumeric']='ColdFusion.MessageBox.create: The value of width {1}  should be numeric, id: {0}'
m['messagebox.create.xnotnumeric']='ColdFusion.MessageBox.create: The value of x {1}  should be numeric, id: {0}'
m['messagebox.create.ynotnumeric']='ColdFusion.MessageBox.create: The value of y {1}  should be numeric, id: {0}'
m['messagebox.create.invalidicon']='ColdFusion.MessageBox.create: The value of icon {1} is invalid for id: {0}. Valid values are error, info, question and warning.'
m['messagebox.update.invalidconfigobject']='ColdFusion.MessageBox.update: config object passed for update is not a valid javascript object for id: {0}'
m['messagebox.update.nameupdatenotallowed']='ColdFusion.MessageBox.update: MessageBox name cannot be updated, id: {0}'
m['messagebox.update.typeupdatenotallowed']='ColdFusion.MessageBox.update: MessageBox type cannot be updated, meddaid: {0}'
m['messagebox.update.invalidmessage']='ColdFusion.MessageBox.update: The value of message cannot be non-string value, id: {0}'
m['messagebox.update.invalidtitle']='ColdFusion.MessageBox.update: The value of title cannot be non-string value, id: {0}'
m['messagebox.update.invalidlabelok']='ColdFusion.MessageBox.update: The value of labelok cannot be null, empty or non-string value, id: {0}'
m['messagebox.update.invalidlabelno']='ColdFusion.MessageBox.update: The value of labelno cannot be null, empty or non-string value, id: {0}'
m['messagebox.update.invalidlabelyes']='ColdFusion.MessageBox.update: The value of labelyes cannot be null, empty or non-string value, id: {0}'
m['messagebox.update.invalidlabelcancel']='ColdFusion.MessageBox.update: The value of labelcancel cannot be null, empty or non-string value, id: {0}'
m['messagebox.update.invalidtypeformultiline']='ColdFusion.MessageBox.update: The multiline property cannot be defined for a type other than Prompt'
m['messagebox.update.invalidwidth']='ColdFusion.MessageBox.update: The value of width  should be numeric, id: {0}'
m['messagebox.update.invalidicon']='ColdFusion.MessageBox.update: The value of icon {1} is invalid for id: {0}. Valid values are error, info, question and warning.'
m['messagebox.update.invalidcallbackhandler']='ColdFusion.MessageBox.update: callback should be function object, id: {0}'
m['messagebox.update.xnotnumeric']='ColdFusion.MessageBox.update: The value of x {1} should be numeric, id: {0}'
m['messagebox.update.ynotnumeric']='ColdFusion.MessageBox.update: The value of y: {1} should be numeric, id: {0}'
m['messagebox.update.invalidbodystyle']='ColdFusion.MessageBox.update: The value of invalidbodystyle should be string object, id: {0}'
m['messagebox.update.invalidtypeandbuttontypecombination']='ColdFusion.MessageBox.update: Messagebox buttontype cannot not be defined for type other than confirm, id: {0}'
m['messagebox.update.invalidbuttontype']='ColdFusion.MessageBox.update: The value of buttontype  should be YESNO or YESNOCANCEL for type confirm for id: {0}'
m['mediaplayer.onfinish.called']='ColdFusion.MediaPlayer: onFinish js function called, id: {0}'
m['mediaplayer.onstart.called']='ColdFusion.MediaPlayer: onStart js function called, id: {0}'
m['mediaplayer.onload.called']='ColdFusion.MediaPlayer: onLoad js function called, id: {0}'
m['mediaplayer.initialized']='ColdFusion.MediaPlayer: Player initialized, id: {0}'
m['mediaplayer.setsource.notfound']='ColdFusion.MediaPlayer.setSource:  mediaplayer not found, id: {0}'
m['mediaplayer.resize.notfound']='ColdFusion.MediaPlayer.resize:  mediaplayer not found, id: {0}'
m['mediaplayer.stopplay.notfound']='ColdFusion.MediaPlayer.stopPlay:  mediaplayer not found, id: {0}'
m['mediaplayer.setmute.notfound']='ColdFusion.MediaPlayer.setMute:  mediaplayer not found, id: {0}'
m['mediaplayer.setvolume.notfound']='ColdFusion.MediaPlayer.setVolume:  mediaplayer not found, id: {0}'
m['mediaplayer.setvolume.invalidvalue']='ColdFusion.MediaPlayer.setVolume:  Invalid volume range specified, id: {0}.Allowed range is between 0 to 1'
m['mediaplayer.startplay.notfound']='ColdFusion.MediaPlayer.startPlay:  mediaplayer not found, id: {0}'
m['mediaplayer.setsource.sourceset']='ColdFusion.MediaPlayer.setsource:  Source set to {1} for mediaplayer: {0}'
m['mediaplayer.resize.invalidvalue']='ColdFusion.MediaPlayer.resize: Invalid width or height specified, id: {0}'
m['mediaplayer.getplayer.notfound']='ColdFusion.MediaPlayer.getPlayer:  mediaplayer not found, id: {0}'
m['mediaplayer.settitle.invalidtitle']='ColdFusion.MediaPlayer.setTitle: Invalid title specified'
m['fileupload.initialized']='ColdFusion.FileUpload: FileUpload component initialized for id: {0}'
m['fileupload.cancelupload.notfound']='ColdFusion.FileUpload.cancelUpload:  Fileupload component not found for id: {0}'
m['fileupload.clearallfiles.notfound']='ColdFusion.FileUpload.clearAllFiles:  Fileupload component not found for id: {0}'
m['fileupload.startupload.notfound']='ColdFusion.FileUpload.startUpload:  Fileupload component not found for id: {0}'
m['fileupload.cancelupload.cancelled']='ColdFusion.FileUpload.cancelUpload:  Upload cancelled for id: {0}'
m['fileupload.startupload.started']='ColdFusion.FileUpload.startUpload:  Upload started for id: {0}'
m['fileupload.clearallfiles.cleared']='ColdFusion.FileUpload.clearAllFiles:  Files slected for upload got cleared for id: {0}'
m['fileupload.getSelectedFiles.notfound']='ColdFusion.FileUpload.getSelectedFiles:  Fileupload component not found for id: {0}'
m['button.initialized']='ColdFusion.Button: Button component initialized for id: {0}'
m['button.component.notfound']='ColdFusion.Button.:  Button component not found for id: {0}'
m['button.show.shown']='ColdFusion.Button.show:  Button shown. id: {0}'
m['button.hide.hidden']='ColdFusion.Button.hide:  Button hidden. id: {0}'
m['button.enable.enabled']='ColdFusion.Button.enable:  Button enabled. id: {0}'
m['button.disable.disabled']='ColdFusion.Button.disable:  Button disabled. id: {0}'
m['slider.disable.notfound']='ColdFusion.Slider.disable:  Slider  not found for id: {0}'
m['slider.enable.notfound']='ColdFusion.Slider.enable:  Slider  not found for id: {0}'
m['slider.hide.notfound']='ColdFusion.Slider.hide:  Slider  not found for id: {0}'
m['slider.show.notfound']='ColdFusion.Slider.show:  Slider  not found for id: {0}'
m['slider.setvalue.notfound']='ColdFusion.Slider.setValue:  Slider  not found for id: {0}'
m['slider.getvalue.notfound']='ColdFusion.Slider.getValue:  Slider  not found for id: {0}'
m['slider.initialized']='ColdFusion.Slider: Slider component initialized for id: {0}'
m['slider.show.shown']='ColdFusion.Slider.show:  Slider  shown for id: {0}'
m['slider.hide.hidden']='ColdFusion.Slider.hide:  Slider  hidden for id: {0}'
m['slider.disable.disabled']='ColdFusion.Slider.disable:  Slider  disabled for id: {0}'
m['slider.enable.enabled']='ColdFusion.Slider.enable:  Slider  enabled for id: {0}'
m['map.initialized']='ColdFusion.Map: Map component initialized for id: {0}'
m['map.setcenter.latlngnonnumeric']='ColdFusion.Map.setCenter: The value of latitude|longitude ({1}|{2}) should be numeric for id: {0}'
m['map.setcenter.addressnotstring']='ColdFusion.Map.setCenter: Address should be a string object for id: {0}'
m['map.setcenter.invalidcenter']='ColdFusion.Map.setCenter: center should be a textual address or latitude/longitude pair, id: {0}'
m['map.marker.addressnotstring']='ColdFusion.Map.parseMarker: Address should be a string object'
m['map.marker.latlngnonnumeric']='ColdFusion.Map.parseMarker: The value of latitude|longitude ({0}|{1}) should be numeric.'
m['map.marker.latlngnonnumeric']='ColdFusion.Map.parseMarker: The value of latitude|longitude ({0}|{1}) should be numeric.'
m['map.loadMap.error']='ColdFusion.Map.onError: Error occured while loading map. Error code({1}){2}'
m['map.markerbind.binderror']='ColdFusion.Map.binderror: BindError:{0}'
m['map.getmappanelobject.notfound']='ColdFusion.Map.getMapObject: Map not found for id {0}'
m['map.addmarker.addressnotfound']='ColdFusion.Map.addMarker: Mapitem address "{0}" not found'
m['map.addmarker.markeradded']='ColdFusion.Map.addMarker: {1} markers added  for map: {0}'
m['map.setcenter.centerset']='ColdFusion.Map.setCenter: center set for map: {0}'
m['map.hide.notfound']='ColdFusion.Map.hide: Map not found for id {0}'
m['map.show.notfound']='ColdFusion.Map.show: Map not found for id {0}'
m['map.refresh.notfound']='ColdFusion.Map.refresh: Map not found for id {0}'}
cfinitmsg();