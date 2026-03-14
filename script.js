function clipboard_copy(text, msg) {
    navigator.clipboard.writeText(text).then(
        function() {
            alert("Copied " + msg + " to clipboard.");
        },
        function(err) {
            alert("Could not copy text because an error occurred: " + err);
        }
    );
}