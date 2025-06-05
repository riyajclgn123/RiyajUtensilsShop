export async function sendMessageToBot(message) {
  try {
    const response = await fetch("https://riyajutensilsshop.onrender.com/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();
    return data.reply;
  } catch (error) {
    console.error("Chatbot error:", error);
    return "Sorry, something went wrong.";
  }
}
