/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.AddEditEmployee.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEmployee
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.AddEditEmployee,
            value: lightSwitchApplication.AddEditEmployee
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.AddEditEmployee,
            value: lightSwitchApplication.Employee
        },
        top: {
            _$class: msls.ContentItem,
            _$name: "top",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        UserName: {
            _$class: msls.ContentItem,
            _$name: "UserName",
            _$parentName: "top",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "top",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "top",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: String
        },
        bottom: {
            _$class: msls.ContentItem,
            _$name: "bottom",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "bottom",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: String
        },
        Current: {
            _$class: msls.ContentItem,
            _$name: "Current",
            _$parentName: "bottom",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: Boolean
        },
        IssueAssignmentsTab: {
            _$class: msls.ContentItem,
            _$name: "IssueAssignmentsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.AddEditEmployee,
            value: lightSwitchApplication.AddEditEmployee
        },
        IssueAssignments1: {
            _$class: msls.ContentItem,
            _$name: "IssueAssignments1",
            _$parentName: "IssueAssignmentsTab",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.AddEditEmployee,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditEmployee,
                _$entry: {
                    elementType: lightSwitchApplication.Issue
                }
            }
        },
        RowTemplate2: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate2",
            _$parentName: "IssueAssignments1",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Issue,
            value: lightSwitchApplication.Issue
        },
        IssueType: {
            _$class: msls.ContentItem,
            _$name: "IssueType",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Issue,
            value: lightSwitchApplication.IssueType
        },
        IssueTitle: {
            _$class: msls.ContentItem,
            _$name: "IssueTitle",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Issue,
            value: String
        },
        DateRaised: {
            _$class: msls.ContentItem,
            _$name: "DateRaised",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Issue,
            value: Date
        },
        TargetResolutionDate: {
            _$class: msls.ContentItem,
            _$name: "TargetResolutionDate",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Issue,
            value: Date
        },
        Priority1: {
            _$class: msls.ContentItem,
            _$name: "Priority1",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Issue,
            value: String
        },
        Status1: {
            _$class: msls.ContentItem,
            _$name: "Status1",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Issue,
            value: String
        },
        FurtherActionsTab: {
            _$class: msls.ContentItem,
            _$name: "FurtherActionsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.AddEditEmployee,
            value: lightSwitchApplication.AddEditEmployee
        },
        FurtherActions: {
            _$class: msls.ContentItem,
            _$name: "FurtherActions",
            _$parentName: "FurtherActionsTab",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.AddEditEmployee,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditEmployee,
                _$entry: {
                    elementType: lightSwitchApplication.FurtherAction
                }
            }
        },
        FurtherActionsTemplate: {
            _$class: msls.ContentItem,
            _$name: "FurtherActionsTemplate",
            _$parentName: "FurtherActions",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.FurtherAction,
            value: lightSwitchApplication.FurtherAction
        },
        Issue_IssueTitle: {
            _$class: msls.ContentItem,
            _$name: "Issue_IssueTitle",
            _$parentName: "FurtherActionsTemplate",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.FurtherAction,
            value: String
        },
        ActionTitle: {
            _$class: msls.ContentItem,
            _$name: "ActionTitle",
            _$parentName: "FurtherActionsTemplate",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.FurtherAction,
            value: String
        },
        DateAssigned: {
            _$class: msls.ContentItem,
            _$name: "DateAssigned",
            _$parentName: "FurtherActionsTemplate",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.FurtherAction,
            value: Date
        },
        TargetCompletionDate: {
            _$class: msls.ContentItem,
            _$name: "TargetCompletionDate",
            _$parentName: "FurtherActionsTemplate",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.FurtherAction,
            value: Date
        },
        PercentCompleted: {
            _$class: msls.ContentItem,
            _$name: "PercentCompleted",
            _$parentName: "FurtherActionsTemplate",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.FurtherAction,
            value: String
        },
        Priority: {
            _$class: msls.ContentItem,
            _$name: "Priority",
            _$parentName: "FurtherActionsTemplate",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.FurtherAction,
            value: String
        },
        Status: {
            _$class: msls.ContentItem,
            _$name: "Status",
            _$parentName: "FurtherActionsTemplate",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.FurtherAction,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEmployee
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditEmployee, {
        /// <field>
        /// Called when a new AddEditEmployee screen is created.
        /// <br/>created(msls.application.AddEditEmployee screen)
        /// </field>
        created: [lightSwitchApplication.AddEditEmployee],
        /// <field>
        /// Called before changes on an active AddEditEmployee screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditEmployee screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditEmployee],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("columns"); }],
        /// <field>
        /// Called after the top content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        top_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("top"); }],
        /// <field>
        /// Called after the UserName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserName_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("UserName"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("LastName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the bottom content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        bottom_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("bottom"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("Email"); }],
        /// <field>
        /// Called after the Current content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Current_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("Current"); }],
        /// <field>
        /// Called after the IssueAssignmentsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueAssignmentsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("IssueAssignmentsTab"); }],
        /// <field>
        /// Called after the IssueAssignments1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueAssignments1_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("IssueAssignments1"); }],
        /// <field>
        /// Called after the RowTemplate2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate2_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("RowTemplate2"); }],
        /// <field>
        /// Called after the IssueType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueType_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("IssueType"); }],
        /// <field>
        /// Called after the IssueTitle content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueTitle_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("IssueTitle"); }],
        /// <field>
        /// Called after the DateRaised content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateRaised_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("DateRaised"); }],
        /// <field>
        /// Called after the TargetResolutionDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TargetResolutionDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("TargetResolutionDate"); }],
        /// <field>
        /// Called after the Priority1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Priority1_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("Priority1"); }],
        /// <field>
        /// Called after the Status1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status1_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("Status1"); }],
        /// <field>
        /// Called after the FurtherActionsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FurtherActionsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("FurtherActionsTab"); }],
        /// <field>
        /// Called after the FurtherActions content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FurtherActions_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("FurtherActions"); }],
        /// <field>
        /// Called after the FurtherActionsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FurtherActionsTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("FurtherActionsTemplate"); }],
        /// <field>
        /// Called after the Issue_IssueTitle content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Issue_IssueTitle_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("Issue_IssueTitle"); }],
        /// <field>
        /// Called after the ActionTitle content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActionTitle_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("ActionTitle"); }],
        /// <field>
        /// Called after the DateAssigned content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateAssigned_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("DateAssigned"); }],
        /// <field>
        /// Called after the TargetCompletionDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TargetCompletionDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("TargetCompletionDate"); }],
        /// <field>
        /// Called after the PercentCompleted content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PercentCompleted_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("PercentCompleted"); }],
        /// <field>
        /// Called after the Priority content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Priority_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("Priority"); }],
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("Status"); }]
    });

    lightSwitchApplication.AddEditFurtherAction.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditFurtherAction
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditFurtherAction,
            data: lightSwitchApplication.AddEditFurtherAction,
            value: lightSwitchApplication.AddEditFurtherAction
        },
        ActionTitle: {
            _$class: msls.ContentItem,
            _$name: "ActionTitle",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditFurtherAction,
            data: lightSwitchApplication.AddEditFurtherAction,
            value: String
        },
        AssignmentGroup: {
            _$class: msls.ContentItem,
            _$name: "AssignmentGroup",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditFurtherAction,
            data: lightSwitchApplication.AddEditFurtherAction,
            value: lightSwitchApplication.FurtherAction
        },
        DateAssigned: {
            _$class: msls.ContentItem,
            _$name: "DateAssigned",
            _$parentName: "AssignmentGroup",
            screen: lightSwitchApplication.AddEditFurtherAction,
            data: lightSwitchApplication.FurtherAction,
            value: Date
        },
        TargetCompletionDate: {
            _$class: msls.ContentItem,
            _$name: "TargetCompletionDate",
            _$parentName: "AssignmentGroup",
            screen: lightSwitchApplication.AddEditFurtherAction,
            data: lightSwitchApplication.FurtherAction,
            value: Date
        },
        AssignedTo: {
            _$class: msls.ContentItem,
            _$name: "AssignedTo",
            _$parentName: "AssignmentGroup",
            screen: lightSwitchApplication.AddEditFurtherAction,
            data: lightSwitchApplication.FurtherAction,
            value: lightSwitchApplication.Employee
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "AssignedTo",
            screen: lightSwitchApplication.AddEditFurtherAction,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditFurtherAction,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditFurtherAction,
            data: lightSwitchApplication.Employee,
            value: String
        },
        PriorityGroup: {
            _$class: msls.ContentItem,
            _$name: "PriorityGroup",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditFurtherAction,
            data: lightSwitchApplication.AddEditFurtherAction,
            value: lightSwitchApplication.AddEditFurtherAction
        },
        Priority: {
            _$class: msls.ContentItem,
            _$name: "Priority",
            _$parentName: "PriorityGroup",
            screen: lightSwitchApplication.AddEditFurtherAction,
            data: lightSwitchApplication.AddEditFurtherAction,
            value: String
        },
        PercentCompleted: {
            _$class: msls.ContentItem,
            _$name: "PercentCompleted",
            _$parentName: "PriorityGroup",
            screen: lightSwitchApplication.AddEditFurtherAction,
            data: lightSwitchApplication.AddEditFurtherAction,
            value: String
        },
        Status: {
            _$class: msls.ContentItem,
            _$name: "Status",
            _$parentName: "PriorityGroup",
            screen: lightSwitchApplication.AddEditFurtherAction,
            data: lightSwitchApplication.AddEditFurtherAction,
            value: String
        },
        ActionOutcome: {
            _$class: msls.ContentItem,
            _$name: "ActionOutcome",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditFurtherAction,
            data: lightSwitchApplication.AddEditFurtherAction,
            value: String
        },
        DateCompleted: {
            _$class: msls.ContentItem,
            _$name: "DateCompleted",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditFurtherAction,
            data: lightSwitchApplication.AddEditFurtherAction,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditFurtherAction
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditFurtherAction, {
        /// <field>
        /// Called when a new AddEditFurtherAction screen is created.
        /// <br/>created(msls.application.AddEditFurtherAction screen)
        /// </field>
        created: [lightSwitchApplication.AddEditFurtherAction],
        /// <field>
        /// Called before changes on an active AddEditFurtherAction screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditFurtherAction screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditFurtherAction],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditFurtherAction().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the ActionTitle content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActionTitle_postRender: [$element, function () { return new lightSwitchApplication.AddEditFurtherAction().findContentItem("ActionTitle"); }],
        /// <field>
        /// Called after the AssignmentGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssignmentGroup_postRender: [$element, function () { return new lightSwitchApplication.AddEditFurtherAction().findContentItem("AssignmentGroup"); }],
        /// <field>
        /// Called after the DateAssigned content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateAssigned_postRender: [$element, function () { return new lightSwitchApplication.AddEditFurtherAction().findContentItem("DateAssigned"); }],
        /// <field>
        /// Called after the TargetCompletionDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TargetCompletionDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditFurtherAction().findContentItem("TargetCompletionDate"); }],
        /// <field>
        /// Called after the AssignedTo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssignedTo_postRender: [$element, function () { return new lightSwitchApplication.AddEditFurtherAction().findContentItem("AssignedTo"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditFurtherAction().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditFurtherAction().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditFurtherAction().findContentItem("LastName"); }],
        /// <field>
        /// Called after the PriorityGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PriorityGroup_postRender: [$element, function () { return new lightSwitchApplication.AddEditFurtherAction().findContentItem("PriorityGroup"); }],
        /// <field>
        /// Called after the Priority content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Priority_postRender: [$element, function () { return new lightSwitchApplication.AddEditFurtherAction().findContentItem("Priority"); }],
        /// <field>
        /// Called after the PercentCompleted content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PercentCompleted_postRender: [$element, function () { return new lightSwitchApplication.AddEditFurtherAction().findContentItem("PercentCompleted"); }],
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: [$element, function () { return new lightSwitchApplication.AddEditFurtherAction().findContentItem("Status"); }],
        /// <field>
        /// Called after the ActionOutcome content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActionOutcome_postRender: [$element, function () { return new lightSwitchApplication.AddEditFurtherAction().findContentItem("ActionOutcome"); }],
        /// <field>
        /// Called after the DateCompleted content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateCompleted_postRender: [$element, function () { return new lightSwitchApplication.AddEditFurtherAction().findContentItem("DateCompleted"); }]
    });

    lightSwitchApplication.AddEditIssue.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditIssue
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.AddEditIssue,
            value: lightSwitchApplication.AddEditIssue
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.AddEditIssue,
            value: lightSwitchApplication.Issue
        },
        IssueTitle: {
            _$class: msls.ContentItem,
            _$name: "IssueTitle",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.Issue,
            value: String
        },
        top: {
            _$class: msls.ContentItem,
            _$name: "top",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.Issue,
            value: lightSwitchApplication.Issue
        },
        IssueType: {
            _$class: msls.ContentItem,
            _$name: "IssueType",
            _$parentName: "top",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.Issue,
            value: lightSwitchApplication.IssueType
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "IssueType",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.IssueType,
            value: lightSwitchApplication.IssueType
        },
        DateRaised: {
            _$class: msls.ContentItem,
            _$name: "DateRaised",
            _$parentName: "top",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.Issue,
            value: Date
        },
        IssueOwner: {
            _$class: msls.ContentItem,
            _$name: "IssueOwner",
            _$parentName: "top",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.Issue,
            value: lightSwitchApplication.Employee
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "IssueOwner",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        FirstName1: {
            _$class: msls.ContentItem,
            _$name: "FirstName1",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName1: {
            _$class: msls.ContentItem,
            _$name: "LastName1",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.Employee,
            value: String
        },
        StatusGroup: {
            _$class: msls.ContentItem,
            _$name: "StatusGroup",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.Issue,
            value: lightSwitchApplication.Issue
        },
        Status: {
            _$class: msls.ContentItem,
            _$name: "Status",
            _$parentName: "StatusGroup",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.Issue,
            value: String
        },
        Priority: {
            _$class: msls.ContentItem,
            _$name: "Priority",
            _$parentName: "StatusGroup",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.Issue,
            value: String
        },
        AssignedTo: {
            _$class: msls.ContentItem,
            _$name: "AssignedTo",
            _$parentName: "StatusGroup",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.Issue,
            value: lightSwitchApplication.Employee
        },
        RowTemplate2: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate2",
            _$parentName: "AssignedTo",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.Employee,
            value: String
        },
        DescriptionGroup: {
            _$class: msls.ContentItem,
            _$name: "DescriptionGroup",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.Issue,
            value: lightSwitchApplication.Issue
        },
        IssueDescription: {
            _$class: msls.ContentItem,
            _$name: "IssueDescription",
            _$parentName: "DescriptionGroup",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.Issue,
            value: String
        },
        bottom: {
            _$class: msls.ContentItem,
            _$name: "bottom",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.Issue,
            value: lightSwitchApplication.Issue
        },
        TargetResolutionDate: {
            _$class: msls.ContentItem,
            _$name: "TargetResolutionDate",
            _$parentName: "bottom",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.Issue,
            value: Date
        },
        DateIssueClosed: {
            _$class: msls.ContentItem,
            _$name: "DateIssueClosed",
            _$parentName: "bottom",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.Issue,
            value: Date
        },
        ImpactTab: {
            _$class: msls.ContentItem,
            _$name: "ImpactTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.AddEditIssue,
            value: lightSwitchApplication.AddEditIssue
        },
        IssueImpactAssessment: {
            _$class: msls.ContentItem,
            _$name: "IssueImpactAssessment",
            _$parentName: "ImpactTab",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.AddEditIssue,
            value: String
        },
        CorrectiveActionTab: {
            _$class: msls.ContentItem,
            _$name: "CorrectiveActionTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.AddEditIssue,
            value: lightSwitchApplication.AddEditIssue
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "CorrectiveActionTab",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.AddEditIssue,
            value: lightSwitchApplication.AddEditIssue
        },
        CATargetDate: {
            _$class: msls.ContentItem,
            _$name: "CATargetDate",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.AddEditIssue,
            value: Date
        },
        DateCACompleted: {
            _$class: msls.ContentItem,
            _$name: "DateCACompleted",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.AddEditIssue,
            value: Date
        },
        CorrectiveAction: {
            _$class: msls.ContentItem,
            _$name: "CorrectiveAction",
            _$parentName: "CorrectiveActionTab",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.AddEditIssue,
            value: String
        },
        PreventativeActionTab: {
            _$class: msls.ContentItem,
            _$name: "PreventativeActionTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.AddEditIssue,
            value: lightSwitchApplication.AddEditIssue
        },
        PAGroup: {
            _$class: msls.ContentItem,
            _$name: "PAGroup",
            _$parentName: "PreventativeActionTab",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.AddEditIssue,
            value: lightSwitchApplication.AddEditIssue
        },
        PATargetDate: {
            _$class: msls.ContentItem,
            _$name: "PATargetDate",
            _$parentName: "PAGroup",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.AddEditIssue,
            value: Date
        },
        DatePACompleted: {
            _$class: msls.ContentItem,
            _$name: "DatePACompleted",
            _$parentName: "PAGroup",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.AddEditIssue,
            value: Date
        },
        PreventativeAction: {
            _$class: msls.ContentItem,
            _$name: "PreventativeAction",
            _$parentName: "PreventativeActionTab",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.AddEditIssue,
            value: String
        },
        FurtherActionsTab: {
            _$class: msls.ContentItem,
            _$name: "FurtherActionsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.AddEditIssue,
            value: lightSwitchApplication.AddEditIssue
        },
        FurtherActions: {
            _$class: msls.ContentItem,
            _$name: "FurtherActions",
            _$parentName: "FurtherActionsTab",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.AddEditIssue,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditIssue,
                _$entry: {
                    elementType: lightSwitchApplication.FurtherAction
                }
            }
        },
        FurtherActionsTemplate: {
            _$class: msls.ContentItem,
            _$name: "FurtherActionsTemplate",
            _$parentName: "FurtherActions",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.FurtherAction,
            value: lightSwitchApplication.FurtherAction
        },
        ActionTitle: {
            _$class: msls.ContentItem,
            _$name: "ActionTitle",
            _$parentName: "FurtherActionsTemplate",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.FurtherAction,
            value: String
        },
        AssignedTo1: {
            _$class: msls.ContentItem,
            _$name: "AssignedTo1",
            _$parentName: "FurtherActionsTemplate",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.FurtherAction,
            value: lightSwitchApplication.Employee
        },
        FirstName2: {
            _$class: msls.ContentItem,
            _$name: "FirstName2",
            _$parentName: "AssignedTo1",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName2: {
            _$class: msls.ContentItem,
            _$name: "LastName2",
            _$parentName: "AssignedTo1",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.Employee,
            value: String
        },
        DateAssigned: {
            _$class: msls.ContentItem,
            _$name: "DateAssigned",
            _$parentName: "FurtherActionsTemplate",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.FurtherAction,
            value: Date
        },
        TargetCompletionDate: {
            _$class: msls.ContentItem,
            _$name: "TargetCompletionDate",
            _$parentName: "FurtherActionsTemplate",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.FurtherAction,
            value: Date
        },
        Priority1: {
            _$class: msls.ContentItem,
            _$name: "Priority1",
            _$parentName: "FurtherActionsTemplate",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.FurtherAction,
            value: String
        },
        Status1: {
            _$class: msls.ContentItem,
            _$name: "Status1",
            _$parentName: "FurtherActionsTemplate",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.FurtherAction,
            value: String
        },
        IssueCommentsTab: {
            _$class: msls.ContentItem,
            _$name: "IssueCommentsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.AddEditIssue,
            value: lightSwitchApplication.AddEditIssue
        },
        IssueComments1: {
            _$class: msls.ContentItem,
            _$name: "IssueComments1",
            _$parentName: "IssueCommentsTab",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.AddEditIssue,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditIssue,
                _$entry: {
                    elementType: lightSwitchApplication.IssueComment
                }
            }
        },
        RowTemplate5: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate5",
            _$parentName: "IssueComments1",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.IssueComment,
            value: lightSwitchApplication.IssueComment
        },
        CommentDate: {
            _$class: msls.ContentItem,
            _$name: "CommentDate",
            _$parentName: "RowTemplate5",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.IssueComment,
            value: Date
        },
        Comment: {
            _$class: msls.ContentItem,
            _$name: "Comment",
            _$parentName: "RowTemplate5",
            screen: lightSwitchApplication.AddEditIssue,
            data: lightSwitchApplication.IssueComment,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditIssue
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditIssue, {
        /// <field>
        /// Called when a new AddEditIssue screen is created.
        /// <br/>created(msls.application.AddEditIssue screen)
        /// </field>
        created: [lightSwitchApplication.AddEditIssue],
        /// <field>
        /// Called before changes on an active AddEditIssue screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditIssue screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditIssue],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("columns"); }],
        /// <field>
        /// Called after the IssueTitle content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueTitle_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("IssueTitle"); }],
        /// <field>
        /// Called after the top content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        top_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("top"); }],
        /// <field>
        /// Called after the IssueType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueType_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("IssueType"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the DateRaised content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateRaised_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("DateRaised"); }],
        /// <field>
        /// Called after the IssueOwner content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueOwner_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("IssueOwner"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the FirstName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName1_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("FirstName1"); }],
        /// <field>
        /// Called after the LastName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName1_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("LastName1"); }],
        /// <field>
        /// Called after the StatusGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StatusGroup_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("StatusGroup"); }],
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("Status"); }],
        /// <field>
        /// Called after the Priority content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Priority_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("Priority"); }],
        /// <field>
        /// Called after the AssignedTo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssignedTo_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("AssignedTo"); }],
        /// <field>
        /// Called after the RowTemplate2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate2_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("RowTemplate2"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("LastName"); }],
        /// <field>
        /// Called after the DescriptionGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DescriptionGroup_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("DescriptionGroup"); }],
        /// <field>
        /// Called after the IssueDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueDescription_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("IssueDescription"); }],
        /// <field>
        /// Called after the bottom content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        bottom_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("bottom"); }],
        /// <field>
        /// Called after the TargetResolutionDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TargetResolutionDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("TargetResolutionDate"); }],
        /// <field>
        /// Called after the DateIssueClosed content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateIssueClosed_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("DateIssueClosed"); }],
        /// <field>
        /// Called after the ImpactTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ImpactTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("ImpactTab"); }],
        /// <field>
        /// Called after the IssueImpactAssessment content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueImpactAssessment_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("IssueImpactAssessment"); }],
        /// <field>
        /// Called after the CorrectiveActionTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CorrectiveActionTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("CorrectiveActionTab"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("Group"); }],
        /// <field>
        /// Called after the CATargetDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CATargetDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("CATargetDate"); }],
        /// <field>
        /// Called after the DateCACompleted content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateCACompleted_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("DateCACompleted"); }],
        /// <field>
        /// Called after the CorrectiveAction content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CorrectiveAction_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("CorrectiveAction"); }],
        /// <field>
        /// Called after the PreventativeActionTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PreventativeActionTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("PreventativeActionTab"); }],
        /// <field>
        /// Called after the PAGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PAGroup_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("PAGroup"); }],
        /// <field>
        /// Called after the PATargetDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PATargetDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("PATargetDate"); }],
        /// <field>
        /// Called after the DatePACompleted content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DatePACompleted_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("DatePACompleted"); }],
        /// <field>
        /// Called after the PreventativeAction content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PreventativeAction_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("PreventativeAction"); }],
        /// <field>
        /// Called after the FurtherActionsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FurtherActionsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("FurtherActionsTab"); }],
        /// <field>
        /// Called after the FurtherActions content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FurtherActions_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("FurtherActions"); }],
        /// <field>
        /// Called after the FurtherActionsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FurtherActionsTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("FurtherActionsTemplate"); }],
        /// <field>
        /// Called after the ActionTitle content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActionTitle_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("ActionTitle"); }],
        /// <field>
        /// Called after the AssignedTo1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssignedTo1_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("AssignedTo1"); }],
        /// <field>
        /// Called after the FirstName2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName2_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("FirstName2"); }],
        /// <field>
        /// Called after the LastName2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName2_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("LastName2"); }],
        /// <field>
        /// Called after the DateAssigned content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateAssigned_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("DateAssigned"); }],
        /// <field>
        /// Called after the TargetCompletionDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TargetCompletionDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("TargetCompletionDate"); }],
        /// <field>
        /// Called after the Priority1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Priority1_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("Priority1"); }],
        /// <field>
        /// Called after the Status1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status1_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("Status1"); }],
        /// <field>
        /// Called after the IssueCommentsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueCommentsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("IssueCommentsTab"); }],
        /// <field>
        /// Called after the IssueComments1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueComments1_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("IssueComments1"); }],
        /// <field>
        /// Called after the RowTemplate5 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate5_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("RowTemplate5"); }],
        /// <field>
        /// Called after the CommentDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CommentDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("CommentDate"); }],
        /// <field>
        /// Called after the Comment content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Comment_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssue().findContentItem("Comment"); }]
    });

    lightSwitchApplication.AddEditIssueComment.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditIssueComment
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditIssueComment,
            data: lightSwitchApplication.AddEditIssueComment,
            value: lightSwitchApplication.AddEditIssueComment
        },
        CommentDate: {
            _$class: msls.ContentItem,
            _$name: "CommentDate",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditIssueComment,
            data: lightSwitchApplication.AddEditIssueComment,
            value: Date
        },
        Comment: {
            _$class: msls.ContentItem,
            _$name: "Comment",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditIssueComment,
            data: lightSwitchApplication.AddEditIssueComment,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditIssueComment
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditIssueComment, {
        /// <field>
        /// Called when a new AddEditIssueComment screen is created.
        /// <br/>created(msls.application.AddEditIssueComment screen)
        /// </field>
        created: [lightSwitchApplication.AddEditIssueComment],
        /// <field>
        /// Called before changes on an active AddEditIssueComment screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditIssueComment screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditIssueComment],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssueComment().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the CommentDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CommentDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssueComment().findContentItem("CommentDate"); }],
        /// <field>
        /// Called after the Comment content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Comment_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssueComment().findContentItem("Comment"); }]
    });

    lightSwitchApplication.AddEditIssueType.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditIssueType
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditIssueType,
            data: lightSwitchApplication.AddEditIssueType,
            value: lightSwitchApplication.AddEditIssueType
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditIssueType,
            data: lightSwitchApplication.AddEditIssueType,
            value: lightSwitchApplication.IssueType
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditIssueType,
            data: lightSwitchApplication.IssueType,
            value: lightSwitchApplication.IssueType
        },
        IssueTypeName: {
            _$class: msls.ContentItem,
            _$name: "IssueTypeName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditIssueType,
            data: lightSwitchApplication.IssueType,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditIssueType,
            data: lightSwitchApplication.IssueType,
            value: lightSwitchApplication.IssueType
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditIssueType
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditIssueType, {
        /// <field>
        /// Called when a new AddEditIssueType screen is created.
        /// <br/>created(msls.application.AddEditIssueType screen)
        /// </field>
        created: [lightSwitchApplication.AddEditIssueType],
        /// <field>
        /// Called before changes on an active AddEditIssueType screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditIssueType screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditIssueType],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssueType().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssueType().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssueType().findContentItem("left"); }],
        /// <field>
        /// Called after the IssueTypeName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueTypeName_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssueType().findContentItem("IssueTypeName"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditIssueType().findContentItem("right"); }]
    });

    lightSwitchApplication.BrowseEmployees.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseEmployees
        },
        EmployeeList: {
            _$class: msls.ContentItem,
            _$name: "EmployeeList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.BrowseEmployees,
            value: lightSwitchApplication.BrowseEmployees
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "EmployeeList",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.BrowseEmployees,
            value: String
        },
        Employee: {
            _$class: msls.ContentItem,
            _$name: "Employee",
            _$parentName: "EmployeeList",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.BrowseEmployees,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseEmployees,
                _$entry: {
                    elementType: lightSwitchApplication.Employee
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Employee",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        UserName: {
            _$class: msls.ContentItem,
            _$name: "UserName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: String
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: String
        },
        Current: {
            _$class: msls.ContentItem,
            _$name: "Current",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseEmployees
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseEmployees, {
        /// <field>
        /// Called when a new BrowseEmployees screen is created.
        /// <br/>created(msls.application.BrowseEmployees screen)
        /// </field>
        created: [lightSwitchApplication.BrowseEmployees],
        /// <field>
        /// Called before changes on an active BrowseEmployees screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseEmployees screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseEmployees],
        /// <field>
        /// Called after the EmployeeList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeList_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("EmployeeList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("Search"); }],
        /// <field>
        /// Called after the Employee content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employee_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("Employee"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the UserName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserName_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("UserName"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("LastName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("Email"); }],
        /// <field>
        /// Called after the Current content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Current_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("Current"); }]
    });

    lightSwitchApplication.BrowseIssues.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseIssues
        },
        IssueList: {
            _$class: msls.ContentItem,
            _$name: "IssueList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseIssues,
            data: lightSwitchApplication.BrowseIssues,
            value: lightSwitchApplication.BrowseIssues
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "IssueList",
            screen: lightSwitchApplication.BrowseIssues,
            data: lightSwitchApplication.BrowseIssues,
            value: String
        },
        Issue: {
            _$class: msls.ContentItem,
            _$name: "Issue",
            _$parentName: "IssueList",
            screen: lightSwitchApplication.BrowseIssues,
            data: lightSwitchApplication.BrowseIssues,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseIssues,
                _$entry: {
                    elementType: lightSwitchApplication.Issue
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Issue",
            screen: lightSwitchApplication.BrowseIssues,
            data: lightSwitchApplication.Issue,
            value: lightSwitchApplication.Issue
        },
        IssueType: {
            _$class: msls.ContentItem,
            _$name: "IssueType",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseIssues,
            data: lightSwitchApplication.Issue,
            value: lightSwitchApplication.IssueType
        },
        IssueTitle: {
            _$class: msls.ContentItem,
            _$name: "IssueTitle",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseIssues,
            data: lightSwitchApplication.Issue,
            value: String
        },
        DateRaised: {
            _$class: msls.ContentItem,
            _$name: "DateRaised",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseIssues,
            data: lightSwitchApplication.Issue,
            value: Date
        },
        TargetResolutionDate: {
            _$class: msls.ContentItem,
            _$name: "TargetResolutionDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseIssues,
            data: lightSwitchApplication.Issue,
            value: Date
        },
        AssignedTo: {
            _$class: msls.ContentItem,
            _$name: "AssignedTo",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseIssues,
            data: lightSwitchApplication.Issue,
            value: lightSwitchApplication.Employee
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "AssignedTo",
            screen: lightSwitchApplication.BrowseIssues,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "AssignedTo",
            screen: lightSwitchApplication.BrowseIssues,
            data: lightSwitchApplication.Employee,
            value: String
        },
        Priority: {
            _$class: msls.ContentItem,
            _$name: "Priority",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseIssues,
            data: lightSwitchApplication.Issue,
            value: String
        },
        Status: {
            _$class: msls.ContentItem,
            _$name: "Status",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseIssues,
            data: lightSwitchApplication.Issue,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseIssues
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseIssues, {
        /// <field>
        /// Called when a new BrowseIssues screen is created.
        /// <br/>created(msls.application.BrowseIssues screen)
        /// </field>
        created: [lightSwitchApplication.BrowseIssues],
        /// <field>
        /// Called before changes on an active BrowseIssues screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseIssues screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseIssues],
        /// <field>
        /// Called after the IssueList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueList_postRender: [$element, function () { return new lightSwitchApplication.BrowseIssues().findContentItem("IssueList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseIssues().findContentItem("Search"); }],
        /// <field>
        /// Called after the Issue content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Issue_postRender: [$element, function () { return new lightSwitchApplication.BrowseIssues().findContentItem("Issue"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseIssues().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the IssueType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueType_postRender: [$element, function () { return new lightSwitchApplication.BrowseIssues().findContentItem("IssueType"); }],
        /// <field>
        /// Called after the IssueTitle content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueTitle_postRender: [$element, function () { return new lightSwitchApplication.BrowseIssues().findContentItem("IssueTitle"); }],
        /// <field>
        /// Called after the DateRaised content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateRaised_postRender: [$element, function () { return new lightSwitchApplication.BrowseIssues().findContentItem("DateRaised"); }],
        /// <field>
        /// Called after the TargetResolutionDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TargetResolutionDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseIssues().findContentItem("TargetResolutionDate"); }],
        /// <field>
        /// Called after the AssignedTo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssignedTo_postRender: [$element, function () { return new lightSwitchApplication.BrowseIssues().findContentItem("AssignedTo"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.BrowseIssues().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.BrowseIssues().findContentItem("LastName"); }],
        /// <field>
        /// Called after the Priority content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Priority_postRender: [$element, function () { return new lightSwitchApplication.BrowseIssues().findContentItem("Priority"); }],
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: [$element, function () { return new lightSwitchApplication.BrowseIssues().findContentItem("Status"); }]
    });

    lightSwitchApplication.BrowseIssueTypes.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseIssueTypes
        },
        IssueTypeList: {
            _$class: msls.ContentItem,
            _$name: "IssueTypeList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseIssueTypes,
            data: lightSwitchApplication.BrowseIssueTypes,
            value: lightSwitchApplication.BrowseIssueTypes
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "IssueTypeList",
            screen: lightSwitchApplication.BrowseIssueTypes,
            data: lightSwitchApplication.BrowseIssueTypes,
            value: String
        },
        IssueType: {
            _$class: msls.ContentItem,
            _$name: "IssueType",
            _$parentName: "IssueTypeList",
            screen: lightSwitchApplication.BrowseIssueTypes,
            data: lightSwitchApplication.BrowseIssueTypes,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseIssueTypes,
                _$entry: {
                    elementType: lightSwitchApplication.IssueType
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "IssueType",
            screen: lightSwitchApplication.BrowseIssueTypes,
            data: lightSwitchApplication.IssueType,
            value: lightSwitchApplication.IssueType
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseIssueTypes
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseIssueTypes, {
        /// <field>
        /// Called when a new BrowseIssueTypes screen is created.
        /// <br/>created(msls.application.BrowseIssueTypes screen)
        /// </field>
        created: [lightSwitchApplication.BrowseIssueTypes],
        /// <field>
        /// Called before changes on an active BrowseIssueTypes screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseIssueTypes screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseIssueTypes],
        /// <field>
        /// Called after the IssueTypeList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueTypeList_postRender: [$element, function () { return new lightSwitchApplication.BrowseIssueTypes().findContentItem("IssueTypeList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseIssueTypes().findContentItem("Search"); }],
        /// <field>
        /// Called after the IssueType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueType_postRender: [$element, function () { return new lightSwitchApplication.BrowseIssueTypes().findContentItem("IssueType"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseIssueTypes().findContentItem("RowTemplate"); }]
    });

    lightSwitchApplication.BrowseMyFurtherActions.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMyFurtherActions
        },
        FurtherActionList: {
            _$class: msls.ContentItem,
            _$name: "FurtherActionList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseMyFurtherActions,
            data: lightSwitchApplication.BrowseMyFurtherActions,
            value: lightSwitchApplication.BrowseMyFurtherActions
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "FurtherActionList",
            screen: lightSwitchApplication.BrowseMyFurtherActions,
            data: lightSwitchApplication.BrowseMyFurtherActions,
            value: String
        },
        FurtherAction: {
            _$class: msls.ContentItem,
            _$name: "FurtherAction",
            _$parentName: "FurtherActionList",
            screen: lightSwitchApplication.BrowseMyFurtherActions,
            data: lightSwitchApplication.BrowseMyFurtherActions,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseMyFurtherActions,
                _$entry: {
                    elementType: lightSwitchApplication.FurtherAction
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "FurtherAction",
            screen: lightSwitchApplication.BrowseMyFurtherActions,
            data: lightSwitchApplication.FurtherAction,
            value: lightSwitchApplication.FurtherAction
        },
        IssueType: {
            _$class: msls.ContentItem,
            _$name: "IssueType",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyFurtherActions,
            data: lightSwitchApplication.FurtherAction,
            value: lightSwitchApplication.IssueType
        },
        IssueTitle: {
            _$class: msls.ContentItem,
            _$name: "IssueTitle",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyFurtherActions,
            data: lightSwitchApplication.FurtherAction,
            value: String
        },
        ActionTitle: {
            _$class: msls.ContentItem,
            _$name: "ActionTitle",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyFurtherActions,
            data: lightSwitchApplication.FurtherAction,
            value: String
        },
        DateAssigned: {
            _$class: msls.ContentItem,
            _$name: "DateAssigned",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyFurtherActions,
            data: lightSwitchApplication.FurtherAction,
            value: Date
        },
        TargetCompletionDate: {
            _$class: msls.ContentItem,
            _$name: "TargetCompletionDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyFurtherActions,
            data: lightSwitchApplication.FurtherAction,
            value: Date
        },
        Priority: {
            _$class: msls.ContentItem,
            _$name: "Priority",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyFurtherActions,
            data: lightSwitchApplication.FurtherAction,
            value: String
        },
        PercentCompleted: {
            _$class: msls.ContentItem,
            _$name: "PercentCompleted",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyFurtherActions,
            data: lightSwitchApplication.FurtherAction,
            value: String
        },
        Status: {
            _$class: msls.ContentItem,
            _$name: "Status",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyFurtherActions,
            data: lightSwitchApplication.FurtherAction,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMyFurtherActions
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseMyFurtherActions, {
        /// <field>
        /// Called when a new BrowseMyFurtherActions screen is created.
        /// <br/>created(msls.application.BrowseMyFurtherActions screen)
        /// </field>
        created: [lightSwitchApplication.BrowseMyFurtherActions],
        /// <field>
        /// Called before changes on an active BrowseMyFurtherActions screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseMyFurtherActions screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseMyFurtherActions],
        /// <field>
        /// Called after the FurtherActionList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FurtherActionList_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyFurtherActions().findContentItem("FurtherActionList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyFurtherActions().findContentItem("Search"); }],
        /// <field>
        /// Called after the FurtherAction content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FurtherAction_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyFurtherActions().findContentItem("FurtherAction"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyFurtherActions().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the IssueType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueType_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyFurtherActions().findContentItem("IssueType"); }],
        /// <field>
        /// Called after the IssueTitle content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueTitle_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyFurtherActions().findContentItem("IssueTitle"); }],
        /// <field>
        /// Called after the ActionTitle content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActionTitle_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyFurtherActions().findContentItem("ActionTitle"); }],
        /// <field>
        /// Called after the DateAssigned content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateAssigned_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyFurtherActions().findContentItem("DateAssigned"); }],
        /// <field>
        /// Called after the TargetCompletionDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TargetCompletionDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyFurtherActions().findContentItem("TargetCompletionDate"); }],
        /// <field>
        /// Called after the Priority content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Priority_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyFurtherActions().findContentItem("Priority"); }],
        /// <field>
        /// Called after the PercentCompleted content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PercentCompleted_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyFurtherActions().findContentItem("PercentCompleted"); }],
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyFurtherActions().findContentItem("Status"); }]
    });

    lightSwitchApplication.BrowseMyIssues.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMyIssues
        },
        IssueList: {
            _$class: msls.ContentItem,
            _$name: "IssueList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseMyIssues,
            data: lightSwitchApplication.BrowseMyIssues,
            value: lightSwitchApplication.BrowseMyIssues
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "IssueList",
            screen: lightSwitchApplication.BrowseMyIssues,
            data: lightSwitchApplication.BrowseMyIssues,
            value: String
        },
        Issue: {
            _$class: msls.ContentItem,
            _$name: "Issue",
            _$parentName: "IssueList",
            screen: lightSwitchApplication.BrowseMyIssues,
            data: lightSwitchApplication.BrowseMyIssues,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseMyIssues,
                _$entry: {
                    elementType: lightSwitchApplication.Issue
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Issue",
            screen: lightSwitchApplication.BrowseMyIssues,
            data: lightSwitchApplication.Issue,
            value: lightSwitchApplication.Issue
        },
        IssueType: {
            _$class: msls.ContentItem,
            _$name: "IssueType",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyIssues,
            data: lightSwitchApplication.Issue,
            value: lightSwitchApplication.IssueType
        },
        IssueTitle: {
            _$class: msls.ContentItem,
            _$name: "IssueTitle",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyIssues,
            data: lightSwitchApplication.Issue,
            value: String
        },
        DateRaised: {
            _$class: msls.ContentItem,
            _$name: "DateRaised",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyIssues,
            data: lightSwitchApplication.Issue,
            value: Date
        },
        TargetResolutionDate: {
            _$class: msls.ContentItem,
            _$name: "TargetResolutionDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyIssues,
            data: lightSwitchApplication.Issue,
            value: Date
        },
        AssignedToGroup: {
            _$class: msls.ContentItem,
            _$name: "AssignedToGroup",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyIssues,
            data: lightSwitchApplication.Issue,
            value: lightSwitchApplication.Issue
        },
        AssignedTo_FirstName: {
            _$class: msls.ContentItem,
            _$name: "AssignedTo_FirstName",
            _$parentName: "AssignedToGroup",
            screen: lightSwitchApplication.BrowseMyIssues,
            data: lightSwitchApplication.Issue,
            value: String
        },
        AssignedTo_LastName: {
            _$class: msls.ContentItem,
            _$name: "AssignedTo_LastName",
            _$parentName: "AssignedToGroup",
            screen: lightSwitchApplication.BrowseMyIssues,
            data: lightSwitchApplication.Issue,
            value: String
        },
        Priority: {
            _$class: msls.ContentItem,
            _$name: "Priority",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyIssues,
            data: lightSwitchApplication.Issue,
            value: String
        },
        Status: {
            _$class: msls.ContentItem,
            _$name: "Status",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyIssues,
            data: lightSwitchApplication.Issue,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMyIssues
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseMyIssues, {
        /// <field>
        /// Called when a new BrowseMyIssues screen is created.
        /// <br/>created(msls.application.BrowseMyIssues screen)
        /// </field>
        created: [lightSwitchApplication.BrowseMyIssues],
        /// <field>
        /// Called before changes on an active BrowseMyIssues screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseMyIssues screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseMyIssues],
        /// <field>
        /// Called after the IssueList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueList_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyIssues().findContentItem("IssueList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyIssues().findContentItem("Search"); }],
        /// <field>
        /// Called after the Issue content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Issue_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyIssues().findContentItem("Issue"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyIssues().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the IssueType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueType_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyIssues().findContentItem("IssueType"); }],
        /// <field>
        /// Called after the IssueTitle content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueTitle_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyIssues().findContentItem("IssueTitle"); }],
        /// <field>
        /// Called after the DateRaised content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateRaised_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyIssues().findContentItem("DateRaised"); }],
        /// <field>
        /// Called after the TargetResolutionDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TargetResolutionDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyIssues().findContentItem("TargetResolutionDate"); }],
        /// <field>
        /// Called after the AssignedToGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssignedToGroup_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyIssues().findContentItem("AssignedToGroup"); }],
        /// <field>
        /// Called after the AssignedTo_FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssignedTo_FirstName_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyIssues().findContentItem("AssignedTo_FirstName"); }],
        /// <field>
        /// Called after the AssignedTo_LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssignedTo_LastName_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyIssues().findContentItem("AssignedTo_LastName"); }],
        /// <field>
        /// Called after the Priority content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Priority_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyIssues().findContentItem("Priority"); }],
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyIssues().findContentItem("Status"); }]
    });

    lightSwitchApplication.Home.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Home
        },
        Menu: {
            _$class: msls.ContentItem,
            _$name: "Menu",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: lightSwitchApplication.Home
        },
        StatsGroup: {
            _$class: msls.ContentItem,
            _$name: "StatsGroup",
            _$parentName: "Menu",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: lightSwitchApplication.Home
        },
        OverdueText: {
            _$class: msls.ContentItem,
            _$name: "OverdueText",
            _$parentName: "StatsGroup",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: String
        },
        DueTodayText: {
            _$class: msls.ContentItem,
            _$name: "DueTodayText",
            _$parentName: "StatsGroup",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: String
        },
        InProgressText: {
            _$class: msls.ContentItem,
            _$name: "InProgressText",
            _$parentName: "StatsGroup",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: String
        },
        UnassignedText: {
            _$class: msls.ContentItem,
            _$name: "UnassignedText",
            _$parentName: "StatsGroup",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: String
        },
        MenuGroup: {
            _$class: msls.ContentItem,
            _$name: "MenuGroup",
            _$parentName: "Menu",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: lightSwitchApplication.Home
        },
        Issues: {
            _$class: msls.ContentItem,
            _$name: "Issues",
            _$parentName: "MenuGroup",
            screen: lightSwitchApplication.Home
        },
        MyIssues: {
            _$class: msls.ContentItem,
            _$name: "MyIssues",
            _$parentName: "MenuGroup",
            screen: lightSwitchApplication.Home
        },
        MyFurtherActions: {
            _$class: msls.ContentItem,
            _$name: "MyFurtherActions",
            _$parentName: "MenuGroup",
            screen: lightSwitchApplication.Home
        },
        Employees: {
            _$class: msls.ContentItem,
            _$name: "Employees",
            _$parentName: "MenuGroup",
            screen: lightSwitchApplication.Home
        },
        IssueTypes: {
            _$class: msls.ContentItem,
            _$name: "IssueTypes",
            _$parentName: "MenuGroup",
            screen: lightSwitchApplication.Home
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Home
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Home, {
        /// <field>
        /// Called when a new Home screen is created.
        /// <br/>created(msls.application.Home screen)
        /// </field>
        created: [lightSwitchApplication.Home],
        /// <field>
        /// Called before changes on an active Home screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Home screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Home],
        /// <field>
        /// Called after the Menu content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Menu_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Menu"); }],
        /// <field>
        /// Called after the StatsGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StatsGroup_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("StatsGroup"); }],
        /// <field>
        /// Called after the OverdueText content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OverdueText_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("OverdueText"); }],
        /// <field>
        /// Called after the DueTodayText content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DueTodayText_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("DueTodayText"); }],
        /// <field>
        /// Called after the InProgressText content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InProgressText_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("InProgressText"); }],
        /// <field>
        /// Called after the UnassignedText content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnassignedText_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("UnassignedText"); }],
        /// <field>
        /// Called after the MenuGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MenuGroup_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("MenuGroup"); }],
        /// <field>
        /// Called after the Issues content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Issues_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Issues"); }],
        /// <field>
        /// Called after the MyIssues content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MyIssues_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("MyIssues"); }],
        /// <field>
        /// Called after the MyFurtherActions content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MyFurtherActions_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("MyFurtherActions"); }],
        /// <field>
        /// Called after the Employees content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employees_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Employees"); }],
        /// <field>
        /// Called after the IssueTypes content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueTypes_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("IssueTypes"); }]
    });

    lightSwitchApplication.MobileHome.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.MobileHome
        },
        Menu: {
            _$class: msls.ContentItem,
            _$name: "Menu",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.MobileHome,
            data: lightSwitchApplication.MobileHome,
            value: lightSwitchApplication.MobileHome
        },
        StatsGroup: {
            _$class: msls.ContentItem,
            _$name: "StatsGroup",
            _$parentName: "Menu",
            screen: lightSwitchApplication.MobileHome,
            data: lightSwitchApplication.MobileHome,
            value: lightSwitchApplication.MobileHome
        },
        OverdueText: {
            _$class: msls.ContentItem,
            _$name: "OverdueText",
            _$parentName: "StatsGroup",
            screen: lightSwitchApplication.MobileHome,
            data: lightSwitchApplication.MobileHome,
            value: String
        },
        DueTodayText: {
            _$class: msls.ContentItem,
            _$name: "DueTodayText",
            _$parentName: "StatsGroup",
            screen: lightSwitchApplication.MobileHome,
            data: lightSwitchApplication.MobileHome,
            value: String
        },
        InProgressText: {
            _$class: msls.ContentItem,
            _$name: "InProgressText",
            _$parentName: "StatsGroup",
            screen: lightSwitchApplication.MobileHome,
            data: lightSwitchApplication.MobileHome,
            value: String
        },
        UnassignedText: {
            _$class: msls.ContentItem,
            _$name: "UnassignedText",
            _$parentName: "StatsGroup",
            screen: lightSwitchApplication.MobileHome,
            data: lightSwitchApplication.MobileHome,
            value: String
        },
        MenuGroup: {
            _$class: msls.ContentItem,
            _$name: "MenuGroup",
            _$parentName: "Menu",
            screen: lightSwitchApplication.MobileHome,
            data: lightSwitchApplication.MobileHome,
            value: lightSwitchApplication.MobileHome
        },
        Issues: {
            _$class: msls.ContentItem,
            _$name: "Issues",
            _$parentName: "MenuGroup",
            screen: lightSwitchApplication.MobileHome
        },
        MyIssues: {
            _$class: msls.ContentItem,
            _$name: "MyIssues",
            _$parentName: "MenuGroup",
            screen: lightSwitchApplication.MobileHome
        },
        MyFurtherActions: {
            _$class: msls.ContentItem,
            _$name: "MyFurtherActions",
            _$parentName: "MenuGroup",
            screen: lightSwitchApplication.MobileHome
        },
        Employees: {
            _$class: msls.ContentItem,
            _$name: "Employees",
            _$parentName: "MenuGroup",
            screen: lightSwitchApplication.MobileHome
        },
        IssueTypes: {
            _$class: msls.ContentItem,
            _$name: "IssueTypes",
            _$parentName: "MenuGroup",
            screen: lightSwitchApplication.MobileHome
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.MobileHome
        }
    };

    msls._addEntryPoints(lightSwitchApplication.MobileHome, {
        /// <field>
        /// Called when a new MobileHome screen is created.
        /// <br/>created(msls.application.MobileHome screen)
        /// </field>
        created: [lightSwitchApplication.MobileHome],
        /// <field>
        /// Called before changes on an active MobileHome screen are applied.
        /// <br/>beforeApplyChanges(msls.application.MobileHome screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.MobileHome],
        /// <field>
        /// Called to determine if the Blank method can be executed.
        /// <br/>canExecute(msls.application.MobileHome screen)
        /// </field>
        Blank_canExecute: [lightSwitchApplication.MobileHome],
        /// <field>
        /// Called to execute the Blank method.
        /// <br/>execute(msls.application.MobileHome screen)
        /// </field>
        Blank_execute: [lightSwitchApplication.MobileHome],
        /// <field>
        /// Called after the Menu content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Menu_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("Menu"); }],
        /// <field>
        /// Called after the StatsGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StatsGroup_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("StatsGroup"); }],
        /// <field>
        /// Called after the OverdueText content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OverdueText_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("OverdueText"); }],
        /// <field>
        /// Called after the DueTodayText content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DueTodayText_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("DueTodayText"); }],
        /// <field>
        /// Called after the InProgressText content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InProgressText_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("InProgressText"); }],
        /// <field>
        /// Called after the UnassignedText content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnassignedText_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("UnassignedText"); }],
        /// <field>
        /// Called after the MenuGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MenuGroup_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("MenuGroup"); }],
        /// <field>
        /// Called after the Issues content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Issues_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("Issues"); }],
        /// <field>
        /// Called after the MyIssues content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MyIssues_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("MyIssues"); }],
        /// <field>
        /// Called after the MyFurtherActions content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MyFurtherActions_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("MyFurtherActions"); }],
        /// <field>
        /// Called after the Employees content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employees_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("Employees"); }],
        /// <field>
        /// Called after the IssueTypes content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueTypes_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("IssueTypes"); }]
    });

}(msls.application));