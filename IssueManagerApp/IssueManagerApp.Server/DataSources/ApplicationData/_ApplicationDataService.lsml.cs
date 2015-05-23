using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
using Microsoft.LightSwitch.Security.Server;
using LightSwitchApplication.UserCode;
namespace LightSwitchApplication
{
    public partial class ApplicationDataService
    {
        partial void Issues_Validate(Issue entity, EntitySetValidationResultsBuilder results)
        {
            if (entity.TargetResolutionDate != null & entity.DateRaised != null)
            {
                if (entity.TargetResolutionDate < entity.DateRaised)
                {
                    results.AddEntityError("The target date cannot be earlier than the date raised");
                }
            }

            if (entity.TargetResolutionDate != null & entity.CorrectiveActionCompletionTargetDate != null)
            {
                if (entity.TargetResolutionDate < entity.CorrectiveActionCompletionTargetDate)
                {
                    results.AddEntityError("The corrective action must be completed on or before the target resolution date");
                }
            }

            if (entity.TargetResolutionDate != null & entity.PreventativeActionCompletionTargetDate != null)
            {
                if (entity.TargetResolutionDate < entity.PreventativeActionCompletionTargetDate)
                {
                    results.AddEntityError("The preventative action must be completed on or before the target resolution date");
                }
            }
        }

        partial void FurtherActions_Validate(FurtherAction entity, EntitySetValidationResultsBuilder results)
        {
            if (entity.Issue.TargetResolutionDate != null & entity.TargetCompletionDate != null)
            {
                if (entity.Issue.TargetResolutionDate < entity.TargetCompletionDate)
                {
                    results.AddEntityError("The target date for this further action cannot be latter than the overall target date for the issue");
                }
            }

            if (entity.TargetCompletionDate != null & entity.DateAssigned != null)
            {
                if (entity.TargetCompletionDate < entity.DateAssigned)
                {
                    results.AddEntityError("The target date cannot be earlier than the date assigned");
                }
            }
        }

        partial void FurtherActions_Updating(FurtherAction entity)
        {
            UpdateStatusAndPercent(entity);
        }

        partial void FurtherActions_Inserting(FurtherAction entity)
        {
            UpdateStatusAndPercent(entity);
        }

        private void UpdateStatusAndPercent(FurtherAction entity)
        {
            if (entity.Status == "C")
            {
                entity.PercentCompleted = 1;
            }

            if (entity.PercentCompleted == 1)
            {
                entity.Status = "C";
            }
        }

        partial void Employees_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployees);
        }

        partial void Employees_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployees);
        }

        partial void Employees_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployees);
        }

        partial void FurtherActions_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditFurtherActions);
        }

        partial void FurtherActions_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditFurtherActions);
        }

        partial void FurtherActions_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditFurtherActions);
        }

        partial void IssueComments_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditIssueComments);
        }

        partial void IssueComments_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditIssueComments);
        }

        partial void IssueComments_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditIssueComments);
        }

        partial void Issues_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditIssues);
        }

        partial void Issues_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditIssues);
        }

        partial void Issues_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditIssues);
        }

        partial void IssueTypes_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditIssueTypes);
        }

        partial void IssueTypes_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditIssueTypes);
        }

        partial void IssueTypes_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditIssueTypes);
        }

        partial void Issues_Inserted(Issue entity)
        {
            if (entity.AssignedTo.Email != string.Empty)
            {
                string subject = "New Issue Assigned to you";

                string message = string.Format("<html><body>Dear {0} {1}.<br></br><p>The following Issue has been assigned to you for resolution:<br></br>Issue Title: {2}.<br></br>Issue Description: {3}.<br></br>Priority: {4}.<br></br>Date Assigned: {5}.<br></br>Target Resolution Date: {6}.<br></br></p></body></html>", entity.AssignedTo.FirstName, entity.AssignedTo.LastName, entity.IssueTitle, entity.IssueDescription, entity.Priority, entity.DateRaised, entity.TargetResolutionDate);

                List<string> mailTos = new List<string>();

                mailTos.Add(entity.AssignedTo.Email);

                SendEmail(mailTos, subject, message);
            }
        }


        partial void FurtherActions_Inserted(FurtherAction entity)
        {
            if (entity.AssignedTo.Email != string.Empty)
            {
                string subject = "New Further Action Assigned to you";

                string message = string.Format("<html><body>Dear {0} {1}.<br></br><p>The following Issue Further Action has been assigned to you for resolution:<br></br>Issue Title: {2}.<br></br>Issue Description: {3}.<br></br>Further Action Title: {4}.<br></br>Priority: {5}.<br></br>Date Assigned: {6}.<br></br>Target Completion Date: {7}.<br></br></p></body></html>", entity.AssignedTo.FirstName, entity.AssignedTo.LastName, entity.Issue.IssueTitle, entity.Issue.IssueDescription, entity.ActionTitle, entity.Priority, entity.DateAssigned, entity.TargetCompletionDate);

                List<string> mailTos = new List<string>();

                mailTos.Add(entity.AssignedTo.Email);

                SendEmail(mailTos, subject, message);
            }
        }        
        
        private void SendEmail(List<string> mailTos, string subject, string message)
        {
            if (System.Net.NetworkInformation.NetworkInterface.GetIsNetworkAvailable())
            {
                if (mailTos.Count() != 0)
                {
                    MailHelper mailHelper = new MailHelper();

                    mailHelper.SendMail(mailTos, subject, message);
                }
            }
        }

        partial void MyIssues_PreprocessQuery(ref IQueryable<Issue> query)
        {
            query = from issue in query
                    where issue.AssignedTo.UserName == this.Application.User.Name
                    select issue;
        }

        partial void MyFurtherActions_PreprocessQuery(ref IQueryable<FurtherAction> query)
        {
            query = from furtherAction in query
                    where furtherAction.AssignedTo.UserName == this.Application.User.Name
                    select furtherAction;
        }

    }
}
