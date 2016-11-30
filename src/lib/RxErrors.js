
class RxErrors {
  constructor(response) {
    this.error = true;
    this.message = response;
    this.data = {
      errors: [response],
      error: response
    }
  }

  //do something here with airbrake
}

export default RxErrors
