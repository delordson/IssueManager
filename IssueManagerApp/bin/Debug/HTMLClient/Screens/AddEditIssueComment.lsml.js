/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditIssueComment.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditIssueComments"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};