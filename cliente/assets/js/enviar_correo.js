async function sendEmail(user, subj, url_html) {
  var body = {
    from: "myspotcr@gmail.com",
    to: user.email,
    email: user.email,
    subject: subj,
    name: user.name,
    password: user.password,
    html: url_html,
    url: url_html,
  };
  try {
    const response = await fetch("/enviarCorreo", {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
  } catch (error) {
    console.log(error + "");
  }
}
