# Gmail Delete Label

This is a Google Apps Script (.gs) written in JavaScript that allows you to specify a Gmail label you've created. Every day at a specific hour, it will automatically delete all emails with that particular label.

To use this script, follow these steps:

1. Open https://script.google.com/ using the Google Account associated with the email address containing the label.

2. In the file `code.gs`, you must specify the label and the scheduled deletion time (instructions are self-documented inside the file).

3. To create the time trigger, follow these steps:
   - In the code, under the function 'createTimeDrivenTrigger' set the hour you want it to run under '.atHour()'
   - Save the code.
   - On the top bar, between "Debug" and "Execution Log," choose the function "createTimeDrivenTrigger."
   - Click on "Run."

Before running the script, ensure you have added the Gmail API by following these steps:

**Enable the Gmail API:**
- Open the Apps Script project.
- Click on "Editor" and then "Code."
- Next to "Services," click "Add a service" (+).
- Select "Gmail API" and click "Add."

For additional guidance on setting up the Gmail API, refer to the [official documentation](https://developers.google.com/gmail/api/quickstart/apps-script).
