/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseIssueTypes.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditIssueTypes"]) {
        screen.findContentItem("AddIssueType").isEnabled = true;
    }
    else {
        screen.findContentItem("AddIssueType").isEnabled = false;
    }
};