setInterval(() => {
  const now = new Date();

  // 24-hour format
  const time24hr = now.toISOString().substr(11, 8);
  console.log(time24hr);

  // 12-hour format
  const hours12hr = now.getHours() % 12 || 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = now.getHours() >= 12 ? "PM" : "AM";
  const time12hr = `${hours12hr}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${ampm}`;
  console.log(time12hr);
}, 1000);
