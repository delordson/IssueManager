/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditIssue.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditIssues"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
        screen.findContentItem("ImpactTab").isReadOnly = false;
        screen.findContentItem("CorrectiveActionTab").isReadOnly = false;
        screen.findContentItem("PreventativeActionTab").isReadOnly = false;
        screen.findContentItem("FurtherActionsTab").isReadOnly = false;
        screen.findContentItem("IssueCommentsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
        screen.findContentItem("ImpactTab").isReadOnly = true;
        screen.findContentItem("CorrectiveActionTab").isReadOnly = true;
        screen.findContentItem("PreventativeActionTab").isReadOnly = true;
        screen.findContentItem("FurtherActionsTab").isReadOnly = true;
        screen.findContentItem("IssueCommentsTab").isReadOnly = true;
    }
};