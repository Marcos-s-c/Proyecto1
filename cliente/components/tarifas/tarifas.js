function edit() {
  Swal.fire({
    title: "Digite el monto por hora",
    input: "number",
    inputAttributes: {
      autocapitalize: "off",
    },
  });
}
