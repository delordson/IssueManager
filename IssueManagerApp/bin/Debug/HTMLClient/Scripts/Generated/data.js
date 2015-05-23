/// <reference path="../Scripts/msls.js" />

window.myapp = msls.application;

(function (lightSwitchApplication) {

    var $Entity = msls.Entity,
        $DataService = msls.DataService,
        $DataWorkspace = msls.DataWorkspace,
        $defineEntity = msls._defineEntity,
        $defineDataService = msls._defineDataService,
        $defineDataWorkspace = msls._defineDataWorkspace,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString;

    function Issue(entitySet) {
        /// <summary>
        /// Represents the Issue entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this issue.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this issue.
        /// </field>
        /// <field name="IssueTitle" type="String">
        /// Gets or sets the issueTitle for this issue.
        /// </field>
        /// <field name="DateRaised" type="Date">
        /// Gets or sets the dateRaised for this issue.
        /// </field>
        /// <field name="IssueDescription" type="String">
        /// Gets or sets the issueDescription for this issue.
        /// </field>
        /// <field name="IssueOwner" type="msls.application.Employee">
        /// Gets or sets the issueOwner for this issue.
        /// </field>
        /// <field name="Status" type="String">
        /// Gets or sets the status for this issue.
        /// </field>
        /// <field name="Priority" type="String">
        /// Gets or sets the priority for this issue.
        /// </field>
        /// <field name="IssueType" type="msls.application.IssueType">
        /// Gets or sets the issueType for this issue.
        /// </field>
        /// <field name="AssignedTo" type="msls.application.Employee">
        /// Gets or sets the assignedTo for this issue.
        /// </field>
        /// <field name="IssueImpactAssessment" type="String">
        /// Gets or sets the issueImpactAssessment for this issue.
        /// </field>
        /// <field name="TargetResolutionDate" type="Date">
        /// Gets or sets the targetResolutionDate for this issue.
        /// </field>
        /// <field name="CorrectiveAction" type="String">
        /// Gets or sets the correctiveAction for this issue.
        /// </field>
        /// <field name="CorrectiveActionCompletionTargetDate" type="Date">
        /// Gets or sets the correctiveActionCompletionTargetDate for this issue.
        /// </field>
        /// <field name="DateCorrectiveActionCompleted" type="Date">
        /// Gets or sets the dateCorrectiveActionCompleted for this issue.
        /// </field>
        /// <field name="PreventativeAction" type="String">
        /// Gets or sets the preventativeAction for this issue.
        /// </field>
        /// <field name="PreventativeActionCompletionTargetDate" type="Date">
        /// Gets or sets the preventativeActionCompletionTargetDate for this issue.
        /// </field>
        /// <field name="DatePreventativeActionCompleted" type="Date">
        /// Gets or sets the datePreventativeActionCompleted for this issue.
        /// </field>
        /// <field name="DateIssueClosed" type="Date">
        /// Gets or sets the dateIssueClosed for this issue.
        /// </field>
        /// <field name="FurtherActions" type="msls.EntityCollection" elementType="msls.application.FurtherAction">
        /// Gets the furtherActions for this issue.
        /// </field>
        /// <field name="IssueComments" type="msls.EntityCollection" elementType="msls.application.IssueComment">
        /// Gets the issueComments for this issue.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this issue.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this issue.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this issue.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this issue.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this issue.
        /// </field>
        /// <field name="details" type="msls.application.Issue.Details">
        /// Gets the details for this issue.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Employee(entitySet) {
        /// <summary>
        /// Represents the Employee entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this employee.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this employee.
        /// </field>
        /// <field name="UserName" type="String">
        /// This is the user name of the 
        /// </field>
        /// <field name="LastName" type="String">
        /// Gets or sets the lastName for this employee.
        /// </field>
        /// <field name="FirstName" type="String">
        /// Gets or sets the firstName for this employee.
        /// </field>
        /// <field name="Email" type="String">
        /// Gets or sets the email for this employee.
        /// </field>
        /// <field name="Current" type="Boolean">
        /// Gets or sets the current for this employee.
        /// </field>
        /// <field name="FurtherActions" type="msls.EntityCollection" elementType="msls.application.FurtherAction">
        /// Gets the furtherActions for this employee.
        /// </field>
        /// <field name="IssueAssignments" type="msls.EntityCollection" elementType="msls.application.Issue">
        /// Gets the issueAssignments for this employee.
        /// </field>
        /// <field name="OwnedIssues" type="msls.EntityCollection" elementType="msls.application.Issue">
        /// Gets the ownedIssues for this employee.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this employee.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this employee.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this employee.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this employee.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this employee.
        /// </field>
        /// <field name="details" type="msls.application.Employee.Details">
        /// Gets the details for this employee.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function FurtherAction(entitySet) {
        /// <summary>
        /// Represents the FurtherAction entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this furtherAction.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this furtherAction.
        /// </field>
        /// <field name="Issue" type="msls.application.Issue">
        /// Gets or sets the issue for this furtherAction.
        /// </field>
        /// <field name="ActionTitle" type="String">
        /// Gets or sets the actionTitle for this furtherAction.
        /// </field>
        /// <field name="AssignedTo" type="msls.application.Employee">
        /// Gets or sets the assignedTo for this furtherAction.
        /// </field>
        /// <field name="ActionOutcome" type="String">
        /// Gets or sets the actionOutcome for this furtherAction.
        /// </field>
        /// <field name="DateAssigned" type="Date">
        /// Gets or sets the dateAssigned for this furtherAction.
        /// </field>
        /// <field name="TargetCompletionDate" type="Date">
        /// Gets or sets the targetCompletionDate for this furtherAction.
        /// </field>
        /// <field name="PercentCompleted" type="String">
        /// Gets or sets the percentCompleted for this furtherAction.
        /// </field>
        /// <field name="Priority" type="String">
        /// Gets or sets the priority for this furtherAction.
        /// </field>
        /// <field name="Status" type="String">
        /// Gets or sets the status for this furtherAction.
        /// </field>
        /// <field name="DateCompleted" type="Date">
        /// Gets or sets the dateCompleted for this furtherAction.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this furtherAction.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this furtherAction.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this furtherAction.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this furtherAction.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this furtherAction.
        /// </field>
        /// <field name="details" type="msls.application.FurtherAction.Details">
        /// Gets the details for this furtherAction.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function IssueType(entitySet) {
        /// <summary>
        /// Represents the IssueType entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this issueType.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this issueType.
        /// </field>
        /// <field name="IssueTypeName" type="String">
        /// Gets or sets the issueTypeName for this issueType.
        /// </field>
        /// <field name="Issues" type="msls.EntityCollection" elementType="msls.application.Issue">
        /// Gets the issues for this issueType.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this issueType.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this issueType.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this issueType.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this issueType.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this issueType.
        /// </field>
        /// <field name="details" type="msls.application.IssueType.Details">
        /// Gets the details for this issueType.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function IssueComment(entitySet) {
        /// <summary>
        /// Represents the IssueComment entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this issueComment.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this issueComment.
        /// </field>
        /// <field name="Comment" type="String">
        /// Gets or sets the comment for this issueComment.
        /// </field>
        /// <field name="CommentDate" type="Date">
        /// Gets or sets the commentDate for this issueComment.
        /// </field>
        /// <field name="Issue" type="msls.application.Issue">
        /// Gets or sets the issue for this issueComment.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this issueComment.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this issueComment.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this issueComment.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this issueComment.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this issueComment.
        /// </field>
        /// <field name="details" type="msls.application.IssueComment.Details">
        /// Gets the details for this issueComment.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ApplicationData(dataWorkspace) {
        /// <summary>
        /// Represents the ApplicationData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="Issues" type="msls.EntitySet">
        /// Gets the Issues entity set.
        /// </field>
        /// <field name="Employees" type="msls.EntitySet">
        /// Gets the Employees entity set.
        /// </field>
        /// <field name="FurtherActions" type="msls.EntitySet">
        /// Gets the FurtherActions entity set.
        /// </field>
        /// <field name="IssueTypes" type="msls.EntitySet">
        /// Gets the IssueTypes entity set.
        /// </field>
        /// <field name="IssueComments" type="msls.EntitySet">
        /// Gets the IssueComments entity set.
        /// </field>
        /// <field name="details" type="msls.application.ApplicationData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Represents the data workspace.
        /// </summary>
        /// <field name="ApplicationData" type="msls.application.ApplicationData">
        /// Gets the ApplicationData data service.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Gets the details for this data workspace.
        /// </field>
        $DataWorkspace.call(this);
    };

    msls._addToNamespace("msls.application", {

        Issue: $defineEntity(Issue, [
            { name: "Id", type: Number },
            { name: "IssueTitle", type: String },
            { name: "DateRaised", type: Date },
            { name: "IssueDescription", type: String },
            { name: "IssueOwner", kind: "reference", type: Employee },
            { name: "Status", type: String },
            { name: "Priority", type: String },
            { name: "IssueType", kind: "reference", type: IssueType },
            { name: "AssignedTo", kind: "reference", type: Employee },
            { name: "IssueImpactAssessment", type: String },
            { name: "TargetResolutionDate", type: Date },
            { name: "CorrectiveAction", type: String },
            { name: "CorrectiveActionCompletionTargetDate", type: Date },
            { name: "DateCorrectiveActionCompleted", type: Date },
            { name: "PreventativeAction", type: String },
            { name: "PreventativeActionCompletionTargetDate", type: Date },
            { name: "DatePreventativeActionCompleted", type: Date },
            { name: "DateIssueClosed", type: Date },
            { name: "FurtherActions", kind: "collection", elementType: FurtherAction },
            { name: "IssueComments", kind: "collection", elementType: IssueComment },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Employee: $defineEntity(Employee, [
            { name: "Id", type: Number },
            { name: "UserName", type: String },
            { name: "LastName", type: String },
            { name: "FirstName", type: String },
            { name: "Email", type: String },
            { name: "Current", type: Boolean },
            { name: "FurtherActions", kind: "collection", elementType: FurtherAction },
            { name: "IssueAssignments", kind: "collection", elementType: Issue },
            { name: "OwnedIssues", kind: "collection", elementType: Issue },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        FurtherAction: $defineEntity(FurtherAction, [
            { name: "Id", type: Number },
            { name: "Issue", kind: "reference", type: Issue },
            { name: "ActionTitle", type: String },
            { name: "AssignedTo", kind: "reference", type: Employee },
            { name: "ActionOutcome", type: String },
            { name: "DateAssigned", type: Date },
            { name: "TargetCompletionDate", type: Date },
            { name: "PercentCompleted", type: String },
            { name: "Priority", type: String },
            { name: "Status", type: String },
            { name: "DateCompleted", type: Date },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        IssueType: $defineEntity(IssueType, [
            { name: "Id", type: Number },
            { name: "IssueTypeName", type: String },
            { name: "Issues", kind: "collection", elementType: Issue },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        IssueComment: $defineEntity(IssueComment, [
            { name: "Id", type: Number },
            { name: "Comment", type: String },
            { name: "CommentDate", type: Date },
            { name: "Issue", kind: "reference", type: Issue },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ApplicationData: $defineDataService(ApplicationData, lightSwitchApplication.rootUri + "/ApplicationData.svc", [
            { name: "Issues", elementType: Issue },
            { name: "Employees", elementType: Employee },
            { name: "FurtherActions", elementType: FurtherAction },
            { name: "IssueTypes", elementType: IssueType },
            { name: "IssueComments", elementType: IssueComment }
        ], [
            {
                name: "Issues_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Issues },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Issues(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Employees_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Employees },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Employees(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "FurtherActions_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.FurtherActions },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/FurtherActions(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "IssueTypes_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.IssueTypes },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/IssueTypes(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "IssueComments_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.IssueComments },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/IssueComments(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "OverDueIssues", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.Issues },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/OverDueIssues()",
                        {
                        });
                }
            },
            {
                name: "IssuesDueToday", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.Issues },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/IssuesDueToday()",
                        {
                        });
                }
            },
            {
                name: "InProgressIssues", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.Issues },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/InProgressIssues()",
                        {
                        });
                }
            },
            {
                name: "UnassignedIssues", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.Issues },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/UnassignedIssues()",
                        {
                        });
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "ApplicationData", type: ApplicationData }
        ])

    });

}(msls.application));
