ORYX.I18N.PropertyWindow.dateFormat = "d/m/y";

ORYX.I18N.View.East = "属性";
ORYX.I18N.View.West = "Modeling Elements";

ORYX.I18N.Oryx.title	= "Smartdot";
ORYX.I18N.Oryx.pleaseWait = "正在加载编辑器, 请稍等...";
ORYX.I18N.Edit.cutDesc = "剪贴选择的图形";
ORYX.I18N.Edit.copyDesc = "复制选择的图形";
ORYX.I18N.Edit.pasteDesc = "从剪贴板粘贴";
ORYX.I18N.ERDFSupport.noCanvas = "The xml document has no canvas node included!";
ORYX.I18N.ERDFSupport.noSS = "The Smartdot Process Editor canvas node has no stencil set definition included!";
ORYX.I18N.ERDFSupport.deprText = "Exporting to eRDF is not recommended anymore because the support will be stopped in future versions of the Smartdot Process Editor. If possible, export the model to JSON. Do you want to export anyway?";
ORYX.I18N.Validator.description = "Validation of BPMN models (e.g. deadlocks)";
ORYX.I18N.Feedback.name = "Support";
ORYX.I18N.Feedback.desc = "邮件支持";
ORYX.I18N.Feedback.pTitle = "Contact us for any kind of support request or feedback";
ORYX.I18N.Feedback.pEmpty = "* Please describe your request. Please provide as detailed information as possible.\n* For bug reports, please list the steps how to reproduce the problem and describe the output you expected.";
ORYX.I18N.Feedback.pAttachDesc = "This information can be helpful for debugging purposes. If your model contains any sensitive data, remove it before sending or uncheck this behavior.";
ORYX.I18N.BPMN2DTRPXMI.DTRPXMIExportDescription = "Exports current model to XMI (requires stencil set extension 'BPMN Subset for Design Thinking')"; 
ORYX.I18N.Save.pleaseWait = "Please wait<br/>while saving...";
ORYX.I18N.Feedback.failureMsg = "Unfortunately, the message could not be sent. Please contact the Smartdot Support via email to [supportMailAdresse] .";
ORYX.I18N.Feedback.invalid = "Feedback";
ORYX.I18N.Feedback.invalidMsg = "Please fill out all required fields.";

ORYX.I18N.Save.saveAs = "保存一个副本...";
ORYX.I18N.Save.saveAsDesc = "保存一个副本...";
ORYX.I18N.Save.saveAsTitle = "保存一个副本...";
ORYX.I18N.Save.savedAs = "副本已保存";
ORYX.I18N.Save.savedDescription = "The process diagram is stored under";
ORYX.I18N.Save.notAuthorized = "You are currently not logged in. Please <a href='/p/login' target='_blank'>log in</a> in a new window so that you can save the current diagram.";
ORYX.I18N.Save.transAborted = "The saving request took too long. You may use a faster internet connection. If you use wireless LAN, please check the strength of your connection.";
ORYX.I18N.Save.noRights = "You do not have the required rights to store that model. Please check in the <a href='/p/explorer' target='_blank'>Smartdot Explorer</a> if you still have the rights to write in the target directory.";
ORYX.I18N.Save.comFailed = "The communication with the Smartdot server failed. Please check your internet connection. If the problem resides, please contact the Smartdot Support via the envelope symbol in the toolbar.";
ORYX.I18N.Save.failed = "保存流程时发生错误，请稍后重试。如果始终无法保存，请联系系统维护人员。";
ORYX.I18N.Save.exception = "保存流程时发生错误，请稍后重试。如果始终无法保存，请联系系统维护人员。";
ORYX.I18N.Save.retrieveData = "Please wait, data is retrieving.";

if(!ORYX.I18N.Functionality) ORYX.I18N.Functionality = {};
ORYX.I18N.Functionality.shortenTitle = "Shorten/Stretch Edges";
ORYX.I18N.Functionality.shortenDescription = "推动图形 (Ctrl+M)";

/** New Language Properties: 31.05.2009*/
if(!ORYX.I18N.Help) ORYX.I18N.Help = {};
ORYX.I18N.Help.help 	= "User Guide";
ORYX.I18N.Help.helpDesc = "帮助手册";
ORYX.I18N.Help.group	= "Help";
ORYX.I18N.Help.openUGNewWindow = "Open user guide in new window.";

/** New Language Properties: 10.6.09*/
if(!ORYX.I18N.ShapeMenuPlugin) ORYX.I18N.ShapeMenuPlugin = {};
ORYX.I18N.ShapeMenuPlugin.morphMsg = "Transform shape";
ORYX.I18N.ShapeMenuPlugin.morphWarningTitleMsg = "Transform shape";
ORYX.I18N.ShapeMenuPlugin.morphWarningMsg = "There are child shapes which cannot be contained in the transformed element.<br/>Do you want to transform anyway?";


/** New Language Properties: 14.07.09*/
if (!window.Signavio) { window.Signavio = {};};
if (!Signavio.I18N) { Signavio.I18N = {};};
if (!Signavio.I18N.Repository) { Signavio.I18N.Repository = {};};
if (!Signavio.I18N.Repository.Folder) { Signavio.I18N.Repository.Folder = {};};
Signavio.I18N.Repository.Folder["public"] = "Shared documents";
Signavio.I18N.Repository.Folder["private"] = "My documents";
Signavio.I18N.Repository.Folder.trash = "Trash";
Signavio.I18N.Repository.Folder["published"] = "Public documents";


if (!Signavio.I18N.Editor) { Signavio.I18N.Editor = {};};

if (!Signavio.I18N.Editor.Linking) { Signavio.I18N.Editor.Linking = {};};
Signavio.I18N.Editor.Linking.CreateDiagram = "Create a new diagram";
Signavio.I18N.Editor.Linking.UseDiagram = "Use existing diagram";
Signavio.I18N.Editor.Linking.UseLink = "Use web link";
Signavio.I18N.Editor.Linking.Close = "Close";
Signavio.I18N.Editor.Linking.Cancel = "Cancel";
Signavio.I18N.Editor.Linking.UseName = "Adopt diagram name";
Signavio.I18N.Editor.Linking.UseNameHint = "Replaces the current name of the modeling element ({type}) with the name of the linked diagram.";
Signavio.I18N.Editor.Linking.CreateTitle = "Establish link";
Signavio.I18N.Editor.Linking.AlertSelectModel = "You have to select a model.";
Signavio.I18N.Editor.Linking.ButtonLink = "Link diagram";
Signavio.I18N.Editor.Linking.LinkNoAccess = "You have no access rights to this diagram.";
Signavio.I18N.Editor.Linking.LinkUnavailable = "The diagram is unavailable.";
Signavio.I18N.Editor.Linking.RemoveLink = "Remove link";
Signavio.I18N.Editor.Linking.EditLink = "Edit Link";
Signavio.I18N.Editor.Linking.OpenLink = "Open";
Signavio.I18N.Editor.Linking.BrokenLink = "The link is broken!";
Signavio.I18N.Editor.Linking.PreviewTitle = "Preview";
Signavio.I18N.Editor.Linking.TimTaskList = "Define list of task for T!M";
Signavio.I18N.Editor.Linking.TimTaskListLink = "edit TaskList";

if (!Signavio.I18N.PlausibilityChecker) { Signavio.I18N.PlausibilityChecker = {};};

Signavio.I18N.PlausibilityChecker.name = "Plausibility Check for Calculation";
Signavio.I18N.PlausibilityChecker.group = "Verification";
Signavio.I18N.PlausibilityChecker.desc = "Check completeness";
Signavio.I18N.PlausibilityChecker.noErrors = "Plausibility check successful.";
Signavio.I18N.PlausibilityChecker.invalid = "Invalid answer from server.";
Signavio.I18N.PlausibilityChecker.checkingMessage = "Checking ...";
Signavio.I18N.PlausibilityChecker.notice = "Move the mouse over an icon to see the message.";

Signavio.I18N.PlausibilityChecker.EPC_PLAUS_NO_LABEL_FOR_NODE = "Element's name is missing.";
Signavio.I18N.PlausibilityChecker.EPC_PLAUS_NO_FREQUENCY = "The attribute frequency is set incorrectly. It has to be a natural number greater than 0.";
Signavio.I18N.PlausibilityChecker.EPC_PLAUS_0_POSITION_FOR_FUNC = "Association with position is missing.";
Signavio.I18N.PlausibilityChecker.EPC_PLAUS_SEVERAL_POSITIONS_FOR_FUNC = "For several associated positions, one position has to be marked as performing.";
Signavio.I18N.PlausibilityChecker.EPC_PLAUS_SEVERAL_STRONGPOSITIONS_FOR_FUNC = "Association with only one performing (or untyped) positions allowed. Please refine responsibilities!";
Signavio.I18N.PlausibilityChecker.EPC_PLAUS_NO_TIME_FOR_FUNC = "The attribute 'execution time' is set incorrectly. It has to be a rational number greater than 0.";
Signavio.I18N.PlausibilityChecker.EPC_PLAUS_PROB_SUM_NOT_1 = "The sum of all outgoing arc-probabilities has to be exactly 1.";
Signavio.I18N.PlausibilityChecker.EPC_PLAUS_PROB_NOT_BETWEEN_0_AND_1 = "The execution probability of an arc has to be between 0 and 1.";
Signavio.I18N.PlausibilityChecker.EPC_PLAUS_OR_CONNECTOR_CONTAINED = "There must be no or-conncetors in the model.";
Signavio.I18N.PlausibilityChecker.EPC_PLAUS_DEAD_LOCK_IN_MODEL = "The model contains a deadlock.";
Signavio.I18N.PlausibilityChecker.EPC_PLAUS_ENDLESS_LOOP_IN_MODEL = "The model contains an endless loop.";
Signavio.I18N.PlausibilityChecker.EPC_PLAUS_MULTI_MERGE_IN_MODEL = "The model contains a multi-merge.";
Signavio.I18N.PlausibilityChecker.EPC_PLAUS_MULT_ERRORS = "Multiple Errors:";
Signavio.I18N.PlausibilityChecker.EPC_PLAUS_NO_COSTS_FOR_FUNC = "The attribute Execution Costs is not set.";
Signavio.I18N.PlausibilityChecker.EPC_PLAUS_NO_COSTCENTER_FOR_FUNC = "The attribute Cost Center is not set.";
Signavio.I18N.PlausibilityChecker.EPC_PLAUS_NO_PROBS_DEFINED = "There are no probabilities defined. Analysis algorithms will assume an equal distribution.";
Signavio.I18N.PlausibilityChecker.EPC_PLAUS_NO_START_EVENT = "There is no start event derfined.";

ORYX.I18N.SyntaxChecker.MULT_ERRORS = "Multiple Errors:";
Signavio.I18N.PlausibilityChecker.MULTIPLE_ERRORS = "Multiple Issues:";

Signavio.I18N.PlausibilityChecker.BPMN_SYNTAX_NO_STARTEVENT = "The process diagram needs a start event.";
Signavio.I18N.PlausibilityChecker.BPMN_SYNTAX_NO_ENDEVENT = "The process diagram needs an end event.";
Signavio.I18N.PlausibilityChecker.BPMN_SYNTAX_NO_SOURCE = "This edge needs a source.";
Signavio.I18N.PlausibilityChecker.BPMN_SYNTAX_NO_TARGET = "This edge needs a target.";
Signavio.I18N.PlausibilityChecker.BPMN_SYNTAX_NO_INCOMING_CONTROL_FLOW = "This node needs incoming sequence flow.";
Signavio.I18N.PlausibilityChecker.BPMN_SYNTAX_NO_OUTGOING_CONTROL_FLOW = "This node needs outgoing sequence flow.";
Signavio.I18N.PlausibilityChecker.BPMN_SYNTAX_NOT_CONNECTED = "This node needs to be connected.";
Signavio.I18N.PlausibilityChecker.BPMN_SYNTAX_POOL_NOT_ON_CANVAS = "This pool has to be placed directly onto the canvas.";
Signavio.I18N.PlausibilityChecker.BPMN_SYNTAX_LANE_NOT_IN_POOL_OR_LANE = "This lane has to be placed into a pool or a lane.";
Signavio.I18N.PlausibilityChecker.BPMN_SYNTAX_LANE_NOT_IN_POOL = "This lane has to be placed into a pool.";

Signavio.I18N.PlausibilityChecker.TIM_PLAUS_MISSING_ASSIGNEE = "This lane's assignment expression has to be set.";
Signavio.I18N.PlausibilityChecker.TIM_PLAUS_INVALID_ASSIGNEE = "This lane's assignment expression is invalid.";
Signavio.I18N.PlausibilityChecker.TIM_PLAUS_NOT_EXISTING_LANE = "A referenced lane does not exist.";
Signavio.I18N.PlausibilityChecker.TIM_PLAUS_MISSING_NAME = "This element needs a name";
Signavio.I18N.PlausibilityChecker.TIM_PLAUS_INVALID_NAME = "This element's name is invalid";
Signavio.I18N.PlausibilityChecker.TIM_PLAUS_MISSING_DURATION = "This element needs a duration";
Signavio.I18N.PlausibilityChecker.TIM_PLAUS_INVALID_DURATION = "This element's duration is invalid";
Signavio.I18N.PlausibilityChecker.TIM_PLAUS_MISSING_OWNER = "The process diagram needs an owner";
Signavio.I18N.PlausibilityChecker.TIM_PLAUS_MISSING_DEPLOYER = "The process diagram needs a deployer";
Signavio.I18N.PlausibilityChecker.TIM_PLAUS_MISSING_STARTER = "The process diagram needs a starter";
Signavio.I18N.PlausibilityChecker.TIM_PLAUS_MISSING_HANDLER_CLASS = "This element needs a handler class";
Signavio.I18N.PlausibilityChecker.TIM_PLAUS_MISSING_HANDLER_FOR_ACTION = "An action of this element is missing a handler class.";
Signavio.I18N.PlausibilityChecker.TIM_PLAUS_MISSING_TASKS = "This activity needs at least one task.";
Signavio.I18N.PlausibilityChecker.TIM_PLAUS_MISSING_NAME_FOR_TASK = "One of the activity's tasks is missing a name.";
Signavio.I18N.PlausibilityChecker.TIM_PLAUS_MISSING_SWIMLANE_ASSIGNMENT_FOR_TASK = "One of the activity's tasks is missing a swimlane assignment.";
Signavio.I18N.PlausibilityChecker.TIM_PLAUS_INVALID_FORMDEF = "The defined form is invalid.";
Signavio.I18N.PlausibilityChecker.TIM_PLAUS_TERM_DEADLOCK = "There is a deadlock here.";
Signavio.I18N.PlausibilityChecker.TIM_PLAUS_TERM_UNSAFE = "There is a multi merge here.";
Signavio.I18N.PlausibilityChecker.TIM_PLAUS_TERM_UNBOUNDED = "The termination behaviour of this model could not be checked.";
Signavio.I18N.PlausibilityChecker.TIM_PLAUS_TERM_MAXSTATES = "The termination behaviour of this model could not be checked.";
Signavio.I18N.PlausibilityChecker.TIM_PLAUS_OUTGOING_ARC_UNNAMED = "An outgoing arc is unnamed. When deploying to a T!M engine, the arc will be renamed!";
Signavio.I18N.PlausibilityChecker.TIM_PLAUS_OUTGOING_ARC_NOT_UNIQUE = "Outgoing arcs' names are not unique.";
Signavio.I18N.PlausibilityChecker.TIM_PLAUS_DISABLED_ESC_CALC = "The escalation calculation is disabled for the process diagram. This causes no time calculations.";
Signavio.I18N.PlausibilityChecker.TIM_PLAUS_INVALID_HANDLER_FOR_XOR_SPLIT = "XOR split gateways having an start event ancestor, must have a handler class called smartformdecision.";
Signavio.I18N.PlausibilityChecker.TIM_WARNING_LINKED_SUBPROCESS = "The linked subprocess must be deployed beforehand.";
Signavio.I18N.PlausibilityChecker.TIM_PLAUS_UNSUPPORTED_STENCIL = "This stencil is not support by the T!M engine in a sequence flow.";
Signavio.I18N.PlausibilityChecker.TIM_PLAUS_LINKING_AND_TASKLIST = "This subprocess has both defined, a list of tasks and a linked process model.";

Signavio.I18N.PlausibilityChecker.BPMN20_PLAUS_NO_LABEL_FOR_NODE = "Element's name is missing.";
Signavio.I18N.PlausibilityChecker.BPMN20_PLAUS_FORBIDDEN_TYPE = "Element is not supported by calculations.";
Signavio.I18N.PlausibilityChecker.BPMN20_PLAUS_DEPRECATED_TYPE = "Element is going to be ignored when analysing the model.";
Signavio.I18N.PlausibilityChecker.BPMN20_PLAUS_DEPRECATED_PROPERTY_LOOP = "Looping behaviour is going to be ignored when analysing the model.";
Signavio.I18N.PlausibilityChecker.BPMN20_PLAUS_DEPRECATED_PROPERTY_TRANSACTION = "Transactional behaviour is going to be ignored when analysing the model.";
Signavio.I18N.PlausibilityChecker.BPMN20_PLAUS_HAS_NO_LANE = "There is no lane nor process participant associated with this element.";
Signavio.I18N.PlausibilityChecker.BPMN20_PLAUS_HAS_NO_COSTCENTER = "The attribute Cost Center is not set.";
Signavio.I18N.PlausibilityChecker.BPMN20_PLAUS_HAS_NO_EXECUTIONTIME = "The attribute Execution Time is not set.";
Signavio.I18N.PlausibilityChecker.BPMN20_PLAUS_HAS_NO_EXECUTIONCOSTS = "The attribute Execution Costs is not set.";
Signavio.I18N.PlausibilityChecker.BPMN20_PLAUS_HAS_NO_FREQUENCY = "The attribute Frequency is not set.";
Signavio.I18N.PlausibilityChecker.BPMN20_PLAUS_INVALID_PROBABILITY = "The execution probability of an arc has to be between 0 and 1.";
Signavio.I18N.PlausibilityChecker.BPMN20_PLAUS_NO_PROBS_DEFINED = "There are no probabilities defined. Analysis algorithms will assume an equal distribution.";
Signavio.I18N.PlausibilityChecker.BPMN20_PLAUS_PROB_SUM_NOT_1 = "The sum of all outgoing arc-probabilities has to be exactly 1.";
Signavio.I18N.PlausibilityChecker.BPMN20_PLAUS_NO_IMCOMING_CONTROLFLOW = "The element needs to have an incoming sequence flow.";
Signavio.I18N.PlausibilityChecker.BPMN20_PLAUS_DEAD_LOCK_IN_MODEL = "The model contains a deadlock.";
Signavio.I18N.PlausibilityChecker.BPMN20_PLAUS_ENDLESS_LOOP_IN_MODEL = "The model contains an endless loop.";
Signavio.I18N.PlausibilityChecker.BPMN20_PLAUS_MULTI_MERGE_IN_MODEL = "The model contains a multi-merge.";
Signavio.I18N.PlausibilityChecker.BPMN20_PLAUS_INVALID_LOOPMAX = "The attribute loop maximum holds an invalid value.";


Signavio.I18N.PlausibilityChecker.COMMED_PLAUS_NO_POOL = "Workflow needs a Pool.";
Signavio.I18N.PlausibilityChecker.COMMED_PLAUS_NO_START = "Workflow needs a Start Event.";
Signavio.I18N.PlausibilityChecker.COMMED_PLAUS_NO_END = "Workflow needs a End Event.";
Signavio.I18N.PlausibilityChecker.COMMED_PLAUS_MORE_THAN_1_START = "A workflow may only have one Start Event";
Signavio.I18N.PlausibilityChecker.COMMED_PLAUS_MORE_THAN_1_POOL = "A workflow may only have one Pool.";
Signavio.I18N.PlausibilityChecker.COMMED_PLAUS_NO_OUT_FLOW = "Element needs an outgoing Sequence Flow";
Signavio.I18N.PlausibilityChecker.COMMED_PLAUS_NO_IN_FLOW = "Element needs an incomming Sequence Flow.";
Signavio.I18N.PlausibilityChecker.COMMED_PLAUS_NON_GATEWAY_SPLIT = "Only Gateways can have more than one outgoing Sequence Flow.";
Signavio.I18N.PlausibilityChecker.COMMED_PLAUS_XOR_MULTIPLE_IN_MULTIPLE_OUT = "Branching Gateways may only have one outgoing Sequence Flow.";
Signavio.I18N.PlausibilityChecker.COMMED_PLAUS_INVALID_WFPARAM = "The Workflowparameter contain errors";
Signavio.I18N.PlausibilityChecker.COMMED_PLAUS_ROOT_NOT_POOL = "A Lane has to be inside a Pool.";
Signavio.I18N.PlausibilityChecker.COMMED_PLAUS_NO_ELSE_BRANCH = "A Gateway needs at least one 'Otherwise' path.";
Signavio.I18N.PlausibilityChecker.COMMED_PLAUS_MORE_THAN_1_ELSE_BRANCH = "A Gateway may only have one path with the option 'Otherwise' set.";
Signavio.I18N.PlausibilityChecker.COMMED_PLAUS_MORE_THAN_1_STD_ERROR = "A Gateway may only have one path with the option 'Standarderror' set.";
Signavio.I18N.PlausibilityChecker.COMMED_PLAUS_IDENTICAL_CONDITION = "A Gateway can not include two paths with an identical Expression.";
Signavio.I18N.PlausibilityChecker.COMMED_PLAUS_NO_COMMED_SUBPROCESS = "Element has no reference to a CARESTATION Workflow.";
Signavio.I18N.PlausibilityChecker.COMMED_PLAUS_INVALID_MAPPING = "Parametermapping is invalid.";
Signavio.I18N.PlausibilityChecker.COMMED_PLAUS_INVALID_COMMED_SUBPROCESS = "The validation of the referenced Workflow was not successful.";
Signavio.I18N.PlausibilityChecker.COMMED_PLAUS_DEPRECATED_SERVICE = "The referenced Service is outdated.";
Signavio.I18N.PlausibilityChecker.COMMED_PLAUS_INVALID_SERVICE = "The referenced Service is invalid.";
Signavio.I18N.PlausibilityChecker.COMMED_PLAUS_DEPRECATED_BO = "The referenced BO is outdated.";
Signavio.I18N.PlausibilityChecker.COMMED_PLAUS_INVALID_BO = "The referenced BO is invalid.";
Signavio.I18N.PlausibilityChecker.COMMED_PLAUS_NO_BO = "Task should be linked to a BO.";
Signavio.I18N.PlausibilityChecker.COMMED_PLAUS_NO_SERVICE = "Task should be linked with a Service.";
Signavio.I18N.PlausibilityChecker.COMMED_PLAUS_NO_TASK_AFTER_TIMER = "A Timer Event should be followed by a Task.";
Signavio.I18N.PlausibilityChecker.COMMED_PLAUS_UNCAUGHT_EXCEPTION = "Element can throw uncatched exceptions.";
Signavio.I18N.PlausibilityChecker.COMMED_PLAUS_NO_ROLE_MAPPING = "Element has no role.";
Signavio.I18N.PlausibilityChecker.COMMED_PLAUS_LANE_IN_LANE = "Nested Lanes are not supported.";
Signavio.I18N.PlausibilityChecker.COMMED_PLAUS_INVALID_LANE = "Element doesn't fit the Type of its Lane.";
Signavio.I18N.PlausibilityChecker.COMMED_PLAUS_NO_NAME_ATTRIBUTE = "Element has no name";
Signavio.I18N.PlausibilityChecker.COMMED_PLAUS_INVALID_WFVAR = "Id, Name und Datatyp of a Workflow Variable must be set.";
Signavio.I18N.PlausibilityChecker.COMMED_PLAUS_INVALID_BO_AND_SCRIPT = "It may only set a BO-Call or a Script.";
Signavio.I18N.PlausibilityChecker.COMMED_PLAUS_NO_USER_TASK_PREDECESSOR = "This XOR Gateway requires a preceeding User Task";
Signavio.I18N.PlausibilityChecker.COMMED_PLAUS_INVALID_TASK = "Only User and Service Tasks are supported within CareStation workflows.";
Signavio.I18N.PlausibilityChecker.COMMED_PLAUS_UNSUPPORTED_NODE = "This node is not supported within CareStation workflows.";

if (!Signavio.I18N.Glossary_Support) { Signavio.I18N.Glossary_Support = {}; }

Signavio.I18N.Glossary_Support.newTitle = "New Entry";
Signavio.I18N.Glossary_Support.newDesc = "Creates a new dictionary entry";
Signavio.I18N.Glossary_Support.newError = "There already exists an entry with the name '{title}'.<br/>Would you like to add it anyway?";
Signavio.I18N.Glossary_Support.noRightTitle = "No Rights";
Signavio.I18N.Glossary_Support.noRightDescription = "You have no rights to create or edit any glossary entry. Please ask the administrator of this workspace to get more information.";

Signavio.I18N.Glossary_Support.create = "Create a new dictionary entry";
Signavio.I18N.Glossary_Support.createButton = "Create";
Signavio.I18N.Glossary_Support.attachments = "Attachments";
Signavio.I18N.Glossary_Support.title = "New Entry";
Signavio.I18N.Glossary_Support.description = "Please provide a short description of the dictionary entry";
Signavio.I18N.Glossary_Support.cancel = "Cancel";
Signavio.I18N.Glossary_Support.close = "Close";
Signavio.I18N.Glossary_Support.category = "Category";



Signavio.I18N.Glossary_Support.DOCUMENT = "Documents";
Signavio.I18N.Glossary_Support.ORG_UNIT = "Organizational Units";
Signavio.I18N.Glossary_Support.IT_SYSTEM = "IT Systems";
Signavio.I18N.Glossary_Support.ACTIVITY = "Activities";
Signavio.I18N.Glossary_Support.STATE = "Events";

Signavio.I18N.Glossary_Support.renameEmpty = "No dictionary entry";
Signavio.I18N.Glossary_Support.renameLoading = "Searching...";

Signavio.I18N.Glossary_Support.previewTitle = "Dictionary Entry";

Signavio.I18N.Glossary_Support.removeTitle = "Remove Dictionary Linking";
Signavio.I18N.Glossary_Support.removeDesc = "You are going to remove the linking to the dictionary entry.<br/>Do you want to continue?";
Signavio.I18N.Glossary_Support.changeTitle = "Dictionary differs from element label";
Signavio.I18N.Glossary_Support.changeDesc = "You are going to change only the label without changing the linked dictionary entry. The link remains active. You will, however, lose the possibility to propagate changes of the spelling from the dictionary item to this label automatically.<br/>Do you want to continue?";

Signavio.I18N.Glossary_Support.openTitle = "Open Dictionary";
Signavio.I18N.Glossary_Support.openDesc = "You are going to open the dictionary.<br/>Before editing a dictionary item, please save all your process diagrams and close all editors.";

Signavio.I18N.Glossary_Support.noneDescription = "No Description";
Signavio.I18N.Glossary_Support.noneAttachment = "No Attachment";
Signavio.I18N.Glossary_Support.noneLinks = "No Diagrams";

Signavio.I18N.Glossary_Support.linksTitle = "Other diagrams referencing the entry:";
Signavio.I18N.Glossary_Support.attachmentsTitle = "Attachments:";
Signavio.I18N.Glossary_Support.waiting = "Please wait while loading...";

Signavio.I18N.Glossary_Support.removeLink = "Remove link";
Signavio.I18N.Glossary_Support.openGlossary = "Open in dictionary";

Signavio.I18N.Glossary_Support.tooltipCreate = "Create a new dictionary entry.";
Signavio.I18N.Glossary_Support.tooltipInfo = "This element has a related dictionary entry. By clicking you will get more information.";
Signavio.I18N.Glossary_Support.tooltipInfoWarning = "This element has a related dictionary entry, but which is not contained anymore in the title of it. By clicking, you get more information.";

Signavio.I18N.Glossary_Support.noWritePerm = "Missing access rights";
Signavio.I18N.Glossary_Support.noWritePermDesc = "You do not have write access for the dictionary.";

Signavio.I18N.Glossary_Support.noGlossaryEntryTitle = "Dictionary entry not available";
Signavio.I18N.Glossary_Support.noGlossaryEntryDesc = "The dictionary entry is not available anymore.<br/>Do you want to remove the linking?";


Signavio.I18N.Glossary_Support.noData = "No values are defined.";
Signavio.I18N.Glossary_Support.description = "Description";
Signavio.I18N.Glossary_Support.attachments = "Attached Documents";
Signavio.I18N.Glossary_Support.linkedModels = "Linked Models";
Signavio.I18N.Glossary_Support.linkedGlossaryItems = "Linked Glossary Items";

if(!ORYX.I18N.Subprocessing) ORYX.I18N.Subprocessing = {};
ORYX.I18N.Subprocessing.Subprocess = "Subprocess";
ORYX.I18N.Subprocessing.NewSubprocess = "新建流程图";
ORYX.I18N.Subprocessing.CreateSubprocess = "Create linked subprocess";
ORYX.I18N.Subprocessing.AutomaticSubprocess = "Automatically generated subprocess";
ORYX.I18N.Subprocessing.OpenSubprocess = "After creating, open the subprocess in a new window";
ORYX.I18N.Subprocessing.NewNameSubprocess = "The name of the new diagramm ";
ORYX.I18N.Subprocessing.PluginDescription = "Automatic Merging of subprocesses";
ORYX.I18N.Subprocessing.Attention = "Attention";
ORYX.I18N.Subprocessing.AttentionDesc = "Attention, through the combination of the selected items to a subprocess, the semantics of the process model could be changed. Continue?";
ORYX.I18N.Subprocessing.Rollback = 'If you want to undo this step, then the diagram "{0}" is not deleted. You can delete it manually.';
ORYX.I18N.Subprocessing.Cancel = "Cancel";
ORYX.I18N.Subprocessing.SelectedItems = "Selected shapes";
ORYX.I18N.Subprocessing.SubprocessCreated = "Subprocess is being created...";
ORYX.I18N.Subprocessing.OpenedSubprocess = "Collapsed subprocess";
ORYX.I18N.Subprocessing.Description = "The selected elements will be combined into a new BPMN 2.0 diagram. It creates a new diagramm and copies the elements into the new diagramm. The current elements on the current diagramm are now replaced by a collapsed subprocess.";
ORYX.I18N.Subprocessing.Information = "Information";

/** New Language Properties: 08.09.2009*/
if(!ORYX.I18N.PropertyWindow) ORYX.I18N.PropertyWindow = {};
ORYX.I18N.PropertyWindow.oftenUsed = "Main properties";
ORYX.I18N.PropertyWindow.moreProps = "More properties";

ORYX.I18N.PropertyWindow.freqTitle = "Edit Frequency";
ORYX.I18N.PropertyWindow.freqPerYear = "Frequency per Year";
ORYX.I18N.PropertyWindow.region = "Region";
ORYX.I18N.PropertyWindow.useRegions = "Calculate regions separately";
ORYX.I18N.PropertyWindow.buttonAdd = "Add a region";
ORYX.I18N.PropertyWindow.addPromptTitle = "Region Name";
ORYX.I18N.PropertyWindow.addPromptMsg = "Please enter the new region\'s name:";
ORYX.I18N.PropertyWindow.addErrorTitle = "Region Name Not Unique";
ORYX.I18N.PropertyWindow.addErrorMsg = "The name of a region has to be unique";
ORYX.I18N.PropertyWindow.buttonDelete = "Delete this region";
ORYX.I18N.PropertyWindow.deletConfirmTitle = "Confirmation";
ORYX.I18N.PropertyWindow.deletConfirmMsg = "You want to delete a region from this list.<br />Are you sure, that this region and all its defined start-frequencies should be deleted from all EPC models?";
ORYX.I18N.PropertyWindow.error = "Error";
ORYX.I18N.PropertyWindow.retrieveError = "Could not retrieve the global region list";
ORYX.I18N.PropertyWindow.text = "Edit text";
ORYX.I18N.PropertyWindow.storeError = "Could not store modification globally";


ORYX.I18N.PropertyWindow.btnOpen = "Open";
ORYX.I18N.PropertyWindow.btnRemove = "Remove";
ORYX.I18N.PropertyWindow.btnEdit = "Edit";
ORYX.I18N.PropertyWindow.btnUp = "Move up";
ORYX.I18N.PropertyWindow.btnDown = "Move down";
ORYX.I18N.PropertyWindow.createNew = "Create new";

ORYX.I18N.PropertyWindow.complex_part1 = "Editor for ";
ORYX.I18N.PropertyWindow.complex_part2 = " property";

/** New Language Properties: 09.10.2009 */
if(!Signavio.I18N.Migration) Signavio.I18N.Migration = {};
Signavio.I18N.Migration.Title = "Migrate BPMN 1.2 to BPMN 2.0";
Signavio.I18N.Migration.group = "Export";
Signavio.I18N.Migration.Description = "Migrates a BPMN 1.2 model to a BPMN 2.0 model.";
Signavio.I18N.Migration.MigrationError = "An error occurred while migrating the data.";
Signavio.I18N.Migration.NewModelCreationError = "An error occurred while creating the new model.";
if(!ORYX.I18N.PropertyWindow) ORYX.I18N.PropertyWindow = {};
ORYX.I18N.PropertyWindow.oftenUsed = "Main attributes";
ORYX.I18N.PropertyWindow.moreProps = "More attributes";
ORYX.I18N.PropertyWindow.characteristicNr = "Cost &amp; Resource Analysis";
ORYX.I18N.PropertyWindow.meta = "Custom attributes";

if(!ORYX.I18N.PropertyWindow.Category){ORYX.I18N.PropertyWindow.Category = {};};
ORYX.I18N.PropertyWindow.Category.popular = "主要属性";
ORYX.I18N.PropertyWindow.Category.characteristicnr = "Cost &amp; Resource Analysis";
ORYX.I18N.PropertyWindow.Category.others = "更多";
ORYX.I18N.PropertyWindow.Category.meta = "Custom Attributes";
ORYX.I18N.PropertyWindow.Category.saperion = "SAPERION Attributes";
ORYX.I18N.PropertyWindow.Category.carestation = "CARESTATION Attributes";
ORYX.I18N.PropertyWindow.Category.tim = "T!M Attributes";
ORYX.I18N.PropertyWindow.Category.view = "视图";

if(!ORYX.I18N.PropertyWindow.ListView) ORYX.I18N.PropertyWindow.ListView = {};
ORYX.I18N.PropertyWindow.ListView.title = "Edit: ";
ORYX.I18N.PropertyWindow.ListView.dataViewLabel = "Already existing entries.";
ORYX.I18N.PropertyWindow.ListView.dataViewEmptyText = "No list entries.";
ORYX.I18N.PropertyWindow.ListView.addEntryLabel = "Add a new entry";
ORYX.I18N.PropertyWindow.ListView.buttonAdd = "Add";
ORYX.I18N.PropertyWindow.ListView.save = "Save";
ORYX.I18N.PropertyWindow.ListView.cancel = "Cancel";

/** New Language Properties: 02.02.2010 */
if(!Signavio.I18N.PDFExport) Signavio.I18N.PDFExport = {};
Signavio.I18N.PDFExport.offerTitleDesc 		= "You can print your diagram across multiple pages. Please select the layout you would like to have for your PDF export.";
Signavio.I18N.PDFExport.optionWindowTitle 	= "Print as PDF";
Signavio.I18N.PDFExport.message				= "The document has been printed.";
Signavio.I18N.PDFExport.buttonTitle 		= "Print";
Signavio.I18N.PDFExport.closeTitle 			= "Cancel";
Signavio.I18N.PDFExport.fitToPage 			= "Fit to one page";
Signavio.I18N.PDFExport.clipAllSides 		= "Continuous print (2-dimensional)";
Signavio.I18N.PDFExport.clipBottom			= "Continuous print (vertical)";
Signavio.I18N.PDFExport.clipRight			= "Continuous print (horizontal)";
Signavio.I18N.PDFExport.landscape			= "Landscape";
Signavio.I18N.PDFExport.portrait			= "Portrait";
Signavio.I18N.PDFExport.sketchy				= "Use sketchy mode (BETA)";
Signavio.I18N.PDFExport.branding 			= "Remove Smartdot logos";
Signavio.I18N.PDFExport.blackWhite 			= "Show in black/white";
Signavio.I18N.PDFExport.premiumOnly 		= "This feature is only available in the Professional Edition.";

/** New Language Properties 02.11.2010 */
if(!Signavio.I18N.ViewsEditor) Signavio.I18N.ViewsEditor = {};
Signavio.I18N.ViewsEditor.name				= "Edit Views";
Signavio.I18N.ViewsEditor.group				= "Views";
Signavio.I18N.ViewsEditor.description		= "Create and edit views";
Signavio.I18N.ViewsEditor.show				= "Show {0}";
Signavio.I18N.ViewsEditor.expanded			= "Expanded";
Signavio.I18N.ViewsEditor.view				= "View ";
Signavio.I18N.ViewsEditor.addView			= "Create a new view";
Signavio.I18N.ViewsEditor.dummyText			= "New view";
Signavio.I18N.ViewsEditor.defaultView		= "Original";
Signavio.I18N.ViewsEditor.defaultDescription= "";
Signavio.I18N.ViewsEditor.allDataObjects	= "Show all Data Objects";
Signavio.I18N.ViewsEditor.allComments		= "Show all Comments";
Signavio.I18N.ViewsEditor.allITSysteme		= "Show all IT-Systems";
Signavio.I18N.ViewsEditor.removeView		= "Remove View";
Signavio.I18N.ViewsEditor.removeViewText	= "Do you really want to remove '{0}'?";
Signavio.I18N.ViewsEditor.blankTitle		= "Title";
Signavio.I18N.ViewsEditor.blankDescription	= "Description";
Signavio.I18N.ViewsEditor.duplicateTitles	= "Duplicate titles";
Signavio.I18N.ViewsEditor.duplicateTitlesTxt= "Views are supposed to have unique titles.";


if(!Signavio.I18N.Buttons) Signavio.I18N.Buttons = {};
Signavio.I18N.Buttons.save		= "Save";
Signavio.I18N.Buttons.cancel 	= "Cancel";
Signavio.I18N.Buttons.remove	= "Remove";

if(!Signavio.I18N.btn) {Signavio.I18N.btn = {};}
Signavio.I18N.btn.btnEdit = "Edit";
Signavio.I18N.btn.btnRemove = "Remove";
Signavio.I18N.btn.moveUp = "Move up";
Signavio.I18N.btn.moveDown = "Move down";

if(!Signavio.I18N.field) {Signavio.I18N.field = {};}
Signavio.I18N.field.Url = "URL";
Signavio.I18N.field.UrlLabel = "Label";
Signavio.I18N.field.ID = "Element ID";

if(!Signavio.I18N.Offer) {Signavio.I18N.Offer = {};}
Signavio.I18N.Offer.autoLayouterTitle = "Autolayouter";
Signavio.I18N.Offer.autoLayouterDescription = "Layouts the current diagram.";

/* Syntax Checker */
if(!ORYX.I18N.SyntaxChecker) {ORYX.I18N.SyntaxChecker = {};}
ORYX.I18N.SyntaxChecker.BPMN2_GATEWAY_WITH_NO_INCOMING_SEQUENCE_FLOW = "The Gateway must have a minimum of one incoming Sequence Flow.";
ORYX.I18N.SyntaxChecker.MESSAGEFLOW_END_MUST_BE_PARTICIPANT_MSGEVENT_ACTIVITY = "The message flow's target must be a participant, message event or activity.";
ORYX.I18N.SyntaxChecker.MESSAGEFLOW_START_MUST_BE_PARTICIPANT_MSGEVENT_ACTIVITY = "The message flow's source must be a participant, message event or activity.";
ORYX.I18N.SyntaxChecker.BPMN_EVENTBASEDGATEWAY_BADCONTINUATION = "An Event-Based Gateway must be followed by either a catching intermediated event or a receiving activity.";

/* Multilanguage */
if(!Signavio.I18N.Multilanguage) {Signavio.I18N.Multilanguage = {};}
Signavio.I18N.Multilanguage.DE = "German";
Signavio.I18N.Multilanguage.DE_Short = "ger";
Signavio.I18N.Multilanguage.ENG = "English";
Signavio.I18N.Multilanguage.ENG_Short = "eng";


/* Locking */
if(!Signavio.I18N.Locking) {Signavio.I18N.Locking = {};}
Signavio.I18N.Locking.notAuthorized = "";//您还没有登陆
Signavio.I18N.Locking.notOnline = "Attention, you are currently not online.";
Signavio.I18N.Locking.noRights = "Warning, you have no rights to save the model.";
Signavio.I18N.Locking.timeout = "Attention, your internet might be too slow.";
Signavio.I18N.Locking.connectionProblem = "Attention, the server could not been reached.";
Signavio.I18N.Locking.editing = "The following users are also currently editing:";
Signavio.I18N.Locking.remoteEdited = "Attention, the current diagram has been saved from <span title='{company}' class='x-user'>{name}</span> lately.";

/* Copy&Paste */
if(!Signavio.I18N.CopyPaste) {Signavio.I18N.CopyPaste = {};}
Signavio.I18N.CopyPaste.Note = "Information";
Signavio.I18N.CopyPaste.CopyWait = "Sending copied elements to server";
Signavio.I18N.CopyPaste.PasteWait = "Pasting copied elements";
Signavio.I18N.CopyPaste.NotPastable = "Pasting the copied elements at this particular position is not allowed. This could be due to containment relation restrictions of the modeling language.";
Signavio.I18N.CopyPaste.WrongNamespace = "Copying elements between different diagram types is not allowed.";
Signavio.I18N.CopyPaste.SkipedShapes = "Some elements could not be copied. The clipboard contains elements that are not available in current selected modeling subset.";
Signavio.I18N.CopyPaste.CopyFail = "Server connection problem occurred.";

/* Richtext */
if (!Signavio.I18N.Richtext) {Signavio.I18N.Richtext = {};}
Signavio.I18N.Richtext.richtext = "Richtext";
Signavio.I18N.Richtext.richtextDesc = 'Expand the toolbar with additional Richtext functionality.';
Signavio.I18N.Richtext.font = 'Font Family';
Signavio.I18N.Richtext.fontSize = 'Font Size';
Signavio.I18N.Richtext.bold = 'Bold';
Signavio.I18N.Richtext.italic = 'Italic';
Signavio.I18N.Richtext.color = 'Font Color';
Signavio.I18N.Richtext.bordercolor = 'Border Color';
Signavio.I18N.Richtext.bgcolor = 'Background Color';
Signavio.I18N.Richtext.clear = 'Remove Formatting';
Signavio.I18N.Richtext.copyStyle = 'Transfer Formatting';
Signavio.I18N.Richtext.selectFont = 'Select Font Family';
Signavio.I18N.Richtext.defaultColor = 'Automatic';
Signavio.I18N.Richtext.fontDesc = 'Select a font family for the chosen elements.';
Signavio.I18N.Richtext.fontSizeDesc = 'Select a font size for the chosen elements.';
Signavio.I18N.Richtext.boldDesc = '加粗字体/取消加粗.';
Signavio.I18N.Richtext.italicDesc = '斜体/取消斜体.';
Signavio.I18N.Richtext.colorDesc = '字体颜色.';
Signavio.I18N.Richtext.bgcolorDesc = '填充颜色.';
Signavio.I18N.Richtext.clearDesc = '清除格式.';
Signavio.I18N.Richtext.copyStyleDesc = '应用样式.';
Signavio.I18N.Richtext.borderColorDesc = '选择边框颜色.';


/* Google Translate */
if (!Signavio.I18N.GoogleTranslate) {Signavio.I18N.GoogleTranslate = {};}
Signavio.I18N.GoogleTranslate.btnTitle = "Translate with Microsoft© Bing";
Signavio.I18N.GoogleTranslate.labelWaiting = "Translation will be performed...";
Signavio.I18N.GoogleTranslate.labelNoElements = "No elements are found to translate.";
Signavio.I18N.GoogleTranslate.labelConfirm = "All data will be translated with the Microsoft© Bing Translate API. Would you like to continue?";
Signavio.I18N.GoogleTranslate.labelFailure = "Something went wrong, please try again or contact the <a href='mailto:[supportMailAdresse]'>Support</a>.";


/* Vertical Pools in BPMN 2.0 */
if (!Signavio.I18N.BPMN20pools) {Signavio.I18N.BPMN20pools = {};}
Signavio.I18N.BPMN20pools.warningBoxTitle = "Change Diagram Orientation";
Signavio.I18N.BPMN20pools.warningBoxMsg = "You are about to change the orientation of the diagram. The orientation of all elements is changed. Do you want to proceed?";
Signavio.I18N.BPMN20pools.modelingDirectionSwitch = "流程图方向";
Signavio.I18N.BPMN20pools.horizontal = "水平";
Signavio.I18N.BPMN20pools.vertical = "垂直";

/* Rotate Process Map */
if (!Signavio.I18N.RotateProcessmap) {Signavio.I18N.RotateProcessmap = {};}
Signavio.I18N.RotateProcessmap.description = "Rotate process map";

/* View Definition in Attribute Panel */
if (!Signavio.I18N.ViewDefinition) {Signavio.I18N.ViewDefinition = {};}
Signavio.I18N.ViewDefinition.comboboxStateOpened = "Pool is opened";
Signavio.I18N.ViewDefinition.comboboxStateClosed = "Pool is hidden";
Signavio.I18N.ViewDefinition.comboboxStateCollapse = "Pool is collapsed";
Signavio.I18N.ViewDefinition.comboboxStateOnlyContent = "Only content";
Signavio.I18N.ViewDefinition.createView = "Create new view";
Signavio.I18N.ViewDefinition.viewsConfig = "View configuration";
Signavio.I18N.ViewDefinition.views = "Stakeholder-specific views";
Signavio.I18N.ViewDefinition.roles = "Roles";
Signavio.I18N.ViewDefinition.dataobjects = "Dataobjects";
Signavio.I18N.ViewDefinition.itsystems = "IT-Systems";
Signavio.I18N.ViewDefinition.comments = "Comments";
Signavio.I18N.ViewDefinition.originalView = "Original view";
Signavio.I18N.ViewDefinition.name = "Name";
Signavio.I18N.ViewDefinition.viewDate1 = "View from ";
Signavio.I18N.ViewDefinition.viewDate2 = " at ";
Signavio.I18N.ViewDefinition.noDescription = "No description available";
Signavio.I18N.ViewDefinition.description = "Description";
Signavio.I18N.ViewDefinition.preview = "Preview";
Signavio.I18N.ViewDefinition.cancel = "Cancel";
Signavio.I18N.ViewDefinition.save = "Create new view";
Signavio.I18N.ViewDefinition.saveChanges = "Save changes";  
Signavio.I18N.ViewDefinition.synchronScroll = "Synchronous Scrolling";
Signavio.I18N.ViewDefinition.deleteView = "Delete view";
Signavio.I18N.ViewDefinition.attention = "Attention";
Signavio.I18N.ViewDefinition.attentionDescription = "Do you really want to delete the view?";
Signavio.I18N.ViewDefinition.views = "视图";
Signavio.I18N.ViewDefinition.existingViews = "Exisiting views: ";
Signavio.I18N.ViewDefinition.preview = "Preview is loading...";
Signavio.I18N.ViewDefinition.originalPreview = "Original view is loading...";
Signavio.I18N.ViewDefinition.previewTitle = "Preview";
Signavio.I18N.ViewDefinition.visibleCheckboxesInfo = "Here you have the possibility to check, whether the selected elements of the model, are visible or hidden in the view. Active checkbox means, that the element(s) are visible in the relevant view.";
Signavio.I18N.ViewDefinition.createNewView = "Create new view";
Signavio.I18N.ViewDefinition.descriptionCreateView = "Here you have the possibility to define new views or to edit exisitng views. You can hide single elements or hide elements wiht a specific type.";
Signavio.I18N.ViewDefinition.descriptionViewCheckbox = "Selected elements are visible in following views: ";
Signavio.I18N.ViewDefinition.warningName1 = 'The name of the view is already taken.';
Signavio.I18N.ViewDefinition.warningName2 = "The name of the view can't be emtpy or already taken.";
Signavio.I18N.ViewDefinition.saveDuplicateButton = "Save as duplicate... ";
Signavio.I18N.ViewDefinition.nameOfView = 'Name of the new view:' ;
Signavio.I18N.ViewDefinition.viewToolTip1 ="The selected elements can't be changed because they are hidden from parent elements." ;
Signavio.I18N.ViewDefinition.viewToolTip2 ="The selected elements can't be changed because their type is hidden in this view." ;
Signavio.I18N.ViewDefinition.viewToolTip3 = "The selected elements can't be changed because they are hidden from parent elements and also their type is hidden in this view." ;
Signavio.I18N.ViewDefinition.viewToolTip4 = "In this view [verb1] [count1] [element1] visible and [count2] [element2] not visible.";
Signavio.I18N.ViewDefinition.is = " is ";
Signavio.I18N.ViewDefinition.are = " are ";
Signavio.I18N.ViewDefinition.element = " element ";
Signavio.I18N.ViewDefinition.elements = " elements ";
Signavio.I18N.RotateProcessmap.description = "Rotate process map";

/* Process Template Editor */
if(!Signavio.I18N.ProcessTemplates) {Signavio.I18N.ProcessTemplates = {}; }
Signavio.I18N.ProcessTemplates.processAttributeMultiEmpty = "Please select the attribute, that should be displayed here.";
Signavio.I18N.ProcessTemplates.processAttributeEmpty = "Please select the attributes, that should be displayed here.";
Signavio.I18N.ProcessTemplates.andMore = "and #{times} more...";
Signavio.I18N.ProcessTemplates.allAttributes = "All attributes";
Signavio.I18N.ProcessTemplates.ownAttributes = "Own attributes";
Signavio.I18N.ProcessTemplates.customAttributes = "Custom attributes";
Signavio.I18N.ProcessTemplates.processTableAttributeEmpty = "Please choose attributes.";
Signavio.I18N.ProcessTemplates.countMore = "#{count} more...";
Signavio.I18N.ProcessTemplates.tocTooltip = "The table of contents is currently empty, as you haven't added any sections, yet.You can add sections on a following page. Changes you make will then automatically show up in the table of contents.";
Signavio.I18N.ProcessTemplates.tocPreview = "The preview of the table of contents is currently disabled.\n\nTo get a preview, please activate the option \"Preview\"";
Signavio.I18N.ProcessTemplates.name = "Name";
Signavio.I18N.ProcessTemplates.description = "Description";
Signavio.I18N.ProcessTemplates.activityName = "Name";