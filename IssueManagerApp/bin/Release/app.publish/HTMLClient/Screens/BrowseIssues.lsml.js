/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseIssues.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditIssues"]) {
        screen.findContentItem("AddIssue").isEnabled = true;
    }
    else {
        screen.findContentItem("AddIssue").isEnabled = false;
    }
};