exports.main = async (context, sendResponse) => {
  try {
    const { params = {} } = context;
    const name = params.name || 'World';
    
    console.log('Hello-world function called with name:', name);
    
    return sendResponse({
      statusCode: 200,
      body: {
        success: true,
        message: `Hello ${name}! This function was deployed via GitHub integration.`,
        timestamp: new Date().toISOString(),
        environment: 'HubSpot Serverless via GitHub',
        function: 'hello-world',
        availableActions: [
          'Basic greeting: ?name=YourName',
          'Contact form: ?action=contact&name=Name&email=email&message=message',
          'Newsletter: ?action=newsletter&email=email'
        ]
      }
    });
    
  } catch (error) {
    console.error('Hello-world function error:', error);
    return sendResponse({
      statusCode: 500,
      body: {
        success: false,
        error: 'Internal server error',
        message: error.message
      }
    });
  }
};
