function updateTime() {
  const t = document.getElementById("time")

  if (t) {
    const now = new Date()
    const offset = 10 // UTC +10

    const utc = new Date(now.getTime() + offset * 60 * 60 * 1000)
    const time = utc.toISOString().slice(11, 16)

    t.textContent = time
  }
}

updateTime()
setInterval(updateTime, 1000)