function deleteForever() {
  var labelName = ''; //choose your label

  // Get labelId of label_name
  var label = Gmail.Users.Labels.list("me").labels.find(label => label.name === labelName);

  if (label) {
    // Filter messages with labelId
    var messages = Gmail.Users.Messages.list("me", {
      "labelIds": label.id
    }).messages;

    // If messages are not empty
    if (messages && messages.length > 0) {
      // Get ids of the messages
      var ids = messages.map(message => message.id);

      // Bulk delete the messages
      Gmail.Users.Messages.batchDelete({"ids": ids}, "me");
    }
  }
}

// Create a time-driven trigger to run the function at the time you want
function createTimeDrivenTrigger() {
  // Delete existing triggers to avoid duplicates
  var existingTriggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < existingTriggers.length; i++) {
    ScriptApp.deleteTrigger(existingTriggers[i]);
  }

  // Create a new time-driven trigger
  ScriptApp.newTrigger('deleteForever')
      .timeBased()
      .atHour()   //put your hour, for example if you want it to run at 22:00, put .atHour(22)
      .everyDays(1) //daily
      .create();
}
