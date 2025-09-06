async function initPopup() {
  try {
    let noteArea = document.getElementById("note");
    let saveButton = document.getElementById("save");

    // Load saved note
    let result = await chrome.storage.local.get(["note"]);
    if (result.note) {
      noteArea.value = result.note;
    }

    // Save note on button click
    saveButton.addEventListener("click", async (e) => {
      e.preventDefault();
      await chrome.storage.local.set({ note: noteArea.value });
      document.getElementById("status").innerHTML = "Note Saved!";
      //   alert("Note saved!");
    });
  } catch (error) {
    console.error("Error:", error);
  }
}
initPopup();
