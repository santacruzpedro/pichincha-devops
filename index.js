exports.handler = async (event) => {
    // TODO implement
    console.info(event);
    const name = event.to
    const response = {
        statusCode: 200,
        message:JSON.stringify(`Hello ${name} your message will be send`)
    };
    return response;
  };