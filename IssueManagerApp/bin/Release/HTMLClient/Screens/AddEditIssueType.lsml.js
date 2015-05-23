/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditIssueType.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditIssueTypes"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};