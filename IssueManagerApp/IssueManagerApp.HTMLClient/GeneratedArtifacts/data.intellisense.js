/// <reference path="data.js" />

(function (lightSwitchApplication) {

    msls._addEntryPoints(lightSwitchApplication.Issue, {
        /// <field>
        /// Called when a new issue is created.
        /// <br/>created(msls.application.Issue entity)
        /// </field>
        created: [lightSwitchApplication.Issue]
    });

    msls._addEntryPoints(lightSwitchApplication.Employee, {
        /// <field>
        /// Called when a new employee is created.
        /// <br/>created(msls.application.Employee entity)
        /// </field>
        created: [lightSwitchApplication.Employee]
    });

    msls._addEntryPoints(lightSwitchApplication.FurtherAction, {
        /// <field>
        /// Called when a new furtherAction is created.
        /// <br/>created(msls.application.FurtherAction entity)
        /// </field>
        created: [lightSwitchApplication.FurtherAction]
    });

    msls._addEntryPoints(lightSwitchApplication.IssueType, {
        /// <field>
        /// Called when a new issueType is created.
        /// <br/>created(msls.application.IssueType entity)
        /// </field>
        created: [lightSwitchApplication.IssueType]
    });

    msls._addEntryPoints(lightSwitchApplication.IssueComment, {
        /// <field>
        /// Called when a new issueComment is created.
        /// <br/>created(msls.application.IssueComment entity)
        /// </field>
        created: [lightSwitchApplication.IssueComment]
    });

}(msls.application));
