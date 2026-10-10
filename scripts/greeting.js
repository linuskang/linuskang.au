function updateGreeting() {
  const g = document.getElementById("greeting");

  if (g) {
    const now = new Date();
    const hour = now.getHours();

    let greeting;

    if (hour >= 5 && hour < 12) {
      greeting = "Good morning!";
    } else if (hour >= 12 && hour < 18) {
      greeting = "Good afternoon!";
    } else {
      greeting = "Good evening!";
    }

    g.textContent = greeting;
  }
}

updateGreeting();
setInterval(updateGreeting, 1000);