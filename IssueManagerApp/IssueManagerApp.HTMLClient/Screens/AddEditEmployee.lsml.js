﻿/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditEmployee.created = function (screen) {
    var lastname;
    var firstname

    if (screen.Employee.LastName !== undefined) {
        lastname = screen.Employee.LastName;
        firstname = screen.Employee.FirstName;
        screen.details.displayName = "Edit " + firstname + " " + lastname;
    }
    else {
        screen.details.displayName = "Add New Employee";
    }

    if (myapp.permissions["LightSwitchApplication:CanEditEmployees"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
        screen.findContentItem("IssueAssignmentsTab").isReadOnly = false;
        screen.findContentItem("FurtherActionsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
        screen.findContentItem("IssueAssignmentsTab").isReadOnly = true;
        screen.findContentItem("FurtherActionsTab").isReadOnly = true;
    }
};