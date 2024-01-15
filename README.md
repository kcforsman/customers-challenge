# customers web app coding challenge
The purpose of this challenge is to highlight the engineer’s skills. Therefore, feel free to show-off
and speak to your solution for how and why you chose to do things the way you choose to do
them.
Assessment:
1. Using Angular 13 or above (via VS Code) and .NET Core (via Visual Studio), create a
simple CRUD application for &quot;Customer&quot; (First Name, Last Name, Email, Created
Date/Time, Last Updated Date/Time) communicating to service.
2. Allow for Updates from the list of customers while requiring adds via form
3. Ensure the application uses session storage to highlight the last customer selected.
4. Ensure application has at least 100 records.
5. Provide repository link for Dynatron Tech Team to download code for review.
6. Be prepared to speak to your solution on scheduled Tech Call.

While listing every possible factor that could impact an application would both be two exhaustive
for this assessment and also provide some answers potentially to things you should implement
or at least speak to. Therefore, if there are factors you feel compelled to implement to showcase
your talent, feel free. If there are other things you choose not to implement because it would be
too time consuming, feel free to speak to it so we are able to understand you do have the
knowledge but it would be impractical to implement for this assessment. That decision is left to
you on how much and how little to include.

Some further questions that would normally ask on an actual work project. Requirements gathering:
- Are we looking for a single-page application? Should there be different views? Calling out depending on use case for this app everything could be packed into a single view with modals and expanding ux features (accordion table) versus user to being able to click into the details of a single entity. Create form could be a unique form on its own page or modal?
- Some users find standard tables difficult to read quickly and retain the details. Do we what a table or cards?
- How do we expect the entity might change with time?
- Are all fields actually required? (Could email be optional for example?)
- Do we need to track user usage and the way data has been changed or deleted over time?
- Are there any uniqueness constraints?
- What does “2. Allow for Updates from the list of customers while requiring adds via form” mean? Baseline understanding is users can edit a row through the table display? Should users be able to edit in place on the list itself? What guardrails do we want to ensure a user is intending to update and hasn’t accidentally selected and “fat-fingered” the entry? What UX experience are we looking for the Update Feature
- What fields are editable? (Assuming just first name, last name, and email)
- Do we want to be able to fully/truly delete a customer from the database? Or should delete actually be “deactivate” so users can audit all customer if needed? Is there a world we we need to reactivate a customer? Any security concerns that we need a way to fully delete a customers data to meet GDRP standards? (Identifiable information collected for this app could be the combination of First Name and Last Name as well as the email address)
- What type of screen are we developing for? Do we need a mobile view? Do we care about responsive design?
- How do we what the customers list displayed? Alphabetically or a date? 
