function sendRequest() {
  const requestID = '123';
  $.ajax({
    url: '/myUrl',
    success(response) {
      alert(`Request ${requestID} returned`);
    },
  });
}
