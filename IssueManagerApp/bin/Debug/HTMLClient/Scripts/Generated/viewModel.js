/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function AddEditEmployee(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditEmployee screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Employee" type="msls.application.Employee">
        /// Gets or sets the employee for this screen.
        /// </field>
        /// <field name="IssueAssignments" type="msls.VisualCollection" elementType="msls.application.Issue">
        /// Gets the issueAssignments for this screen.
        /// </field>
        /// <field name="FurtherActions" type="msls.VisualCollection" elementType="msls.application.FurtherAction">
        /// Gets the furtherActions for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditEmployee.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditEmployee", parameters);
    }

    function AddEditFurtherAction(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditFurtherAction screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="FurtherAction" type="msls.application.FurtherAction">
        /// Gets or sets the furtherAction for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditFurtherAction.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditFurtherAction", parameters);
    }

    function AddEditIssue(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditIssue screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Issue" type="msls.application.Issue">
        /// Gets or sets the issue for this screen.
        /// </field>
        /// <field name="IssueComments" type="msls.VisualCollection" elementType="msls.application.IssueComment">
        /// Gets the issueComments for this screen.
        /// </field>
        /// <field name="FurtherActions" type="msls.VisualCollection" elementType="msls.application.FurtherAction">
        /// Gets the furtherActions for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditIssue.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditIssue", parameters);
    }

    function AddEditIssueComment(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditIssueComment screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="IssueComment" type="msls.application.IssueComment">
        /// Gets or sets the issueComment for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditIssueComment.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditIssueComment", parameters);
    }

    function AddEditIssueType(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditIssueType screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="IssueType" type="msls.application.IssueType">
        /// Gets or sets the issueType for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditIssueType.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditIssueType", parameters);
    }

    function BrowseEmployees(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseEmployees screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Employees" type="msls.VisualCollection" elementType="msls.application.Employee">
        /// Gets the employees for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseEmployees.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseEmployees", parameters);
    }

    function BrowseIssues(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseIssues screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Issues" type="msls.VisualCollection" elementType="msls.application.Issue">
        /// Gets the issues for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseIssues.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseIssues", parameters);
    }

    function BrowseIssueTypes(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseIssueTypes screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="IssueTypes" type="msls.VisualCollection" elementType="msls.application.IssueType">
        /// Gets the issueTypes for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseIssueTypes.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseIssueTypes", parameters);
    }

    function Home(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Home screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="OverdueText" type="String">
        /// Gets or sets the overdueText for this screen.
        /// </field>
        /// <field name="DueTodayText" type="String">
        /// Gets or sets the dueTodayText for this screen.
        /// </field>
        /// <field name="InProgressText" type="String">
        /// Gets or sets the inProgressText for this screen.
        /// </field>
        /// <field name="UnassignedText" type="String">
        /// Gets or sets the unassignedText for this screen.
        /// </field>
        /// <field name="details" type="msls.application.Home.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Home", parameters);
    }

    function MobileHome(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the MobileHome screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="OverdueText" type="String">
        /// Gets or sets the overdueText for this screen.
        /// </field>
        /// <field name="DueTodayText" type="String">
        /// Gets or sets the dueTodayText for this screen.
        /// </field>
        /// <field name="InProgressText" type="String">
        /// Gets or sets the inProgressText for this screen.
        /// </field>
        /// <field name="UnassignedText" type="String">
        /// Gets or sets the unassignedText for this screen.
        /// </field>
        /// <field name="details" type="msls.application.MobileHome.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "MobileHome", parameters);
    }

    msls._addToNamespace("msls.application", {

        AddEditEmployee: $defineScreen(AddEditEmployee, [
            { name: "Employee", kind: "local", type: lightSwitchApplication.Employee },
            {
                name: "IssueAssignments", kind: "collection", elementType: lightSwitchApplication.Issue,
                getNavigationProperty: function () {
                    if (this.owner.Employee) {
                        return this.owner.Employee.details.properties.IssueAssignments;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("IssueOwner").expand("IssueType");
                }
            },
            {
                name: "FurtherActions", kind: "collection", elementType: lightSwitchApplication.FurtherAction,
                getNavigationProperty: function () {
                    if (this.owner.Employee) {
                        return this.owner.Employee.details.properties.FurtherActions;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("Issue").expand("AssignedTo");
                }
            }
        ], [
        ]),

        AddEditFurtherAction: $defineScreen(AddEditFurtherAction, [
            { name: "FurtherAction", kind: "local", type: lightSwitchApplication.FurtherAction }
        ], [
        ]),

        AddEditIssue: $defineScreen(AddEditIssue, [
            { name: "Issue", kind: "local", type: lightSwitchApplication.Issue },
            {
                name: "IssueComments", kind: "collection", elementType: lightSwitchApplication.IssueComment,
                getNavigationProperty: function () {
                    if (this.owner.Issue) {
                        return this.owner.Issue.details.properties.IssueComments;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            },
            {
                name: "FurtherActions", kind: "collection", elementType: lightSwitchApplication.FurtherAction,
                getNavigationProperty: function () {
                    if (this.owner.Issue) {
                        return this.owner.Issue.details.properties.FurtherActions;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("AssignedTo");
                }
            }
        ], [
        ]),

        AddEditIssueComment: $defineScreen(AddEditIssueComment, [
            { name: "IssueComment", kind: "local", type: lightSwitchApplication.IssueComment }
        ], [
        ]),

        AddEditIssueType: $defineScreen(AddEditIssueType, [
            { name: "IssueType", kind: "local", type: lightSwitchApplication.IssueType }
        ], [
        ]),

        BrowseEmployees: $defineScreen(BrowseEmployees, [
            {
                name: "Employees", kind: "collection", elementType: lightSwitchApplication.Employee,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.Employees;
                }
            }
        ], [
        ]),

        BrowseIssues: $defineScreen(BrowseIssues, [
            {
                name: "Issues", kind: "collection", elementType: lightSwitchApplication.Issue,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.Issues.expand("IssueType").expand("AssignedTo");
                }
            }
        ], [
        ]),

        BrowseIssueTypes: $defineScreen(BrowseIssueTypes, [
            {
                name: "IssueTypes", kind: "collection", elementType: lightSwitchApplication.IssueType,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.IssueTypes;
                }
            }
        ], [
        ]),

        Home: $defineScreen(Home, [
            { name: "OverdueText", kind: "local", type: String },
            { name: "DueTodayText", kind: "local", type: String },
            { name: "InProgressText", kind: "local", type: String },
            { name: "UnassignedText", kind: "local", type: String }
        ], [
        ]),

        MobileHome: $defineScreen(MobileHome, [
            { name: "OverdueText", kind: "local", type: String },
            { name: "DueTodayText", kind: "local", type: String },
            { name: "InProgressText", kind: "local", type: String },
            { name: "UnassignedText", kind: "local", type: String }
        ], [
        ]),

        showAddEditEmployee: $defineShowScreen(function showAddEditEmployee(Employee, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditEmployee screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditEmployee", parameters, options);
        }),

        showAddEditFurtherAction: $defineShowScreen(function showAddEditFurtherAction(FurtherAction, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditFurtherAction screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditFurtherAction", parameters, options);
        }),

        showAddEditIssue: $defineShowScreen(function showAddEditIssue(Issue, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditIssue screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditIssue", parameters, options);
        }),

        showAddEditIssueComment: $defineShowScreen(function showAddEditIssueComment(IssueComment, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditIssueComment screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditIssueComment", parameters, options);
        }),

        showAddEditIssueType: $defineShowScreen(function showAddEditIssueType(IssueType, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditIssueType screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditIssueType", parameters, options);
        }),

        showBrowseEmployees: $defineShowScreen(function showBrowseEmployees(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseEmployees screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseEmployees", parameters, options);
        }),

        showBrowseIssues: $defineShowScreen(function showBrowseIssues(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseIssues screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseIssues", parameters, options);
        }),

        showBrowseIssueTypes: $defineShowScreen(function showBrowseIssueTypes(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseIssueTypes screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseIssueTypes", parameters, options);
        }),

        showHome: $defineShowScreen(function showHome(options) {
            /// <summary>
            /// Asynchronously navigates forward to the Home screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("Home", parameters, options);
        }),

        showMobileHome: $defineShowScreen(function showMobileHome(options) {
            /// <summary>
            /// Asynchronously navigates forward to the MobileHome screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("MobileHome", parameters, options);
        })

    });

}(msls.application));
