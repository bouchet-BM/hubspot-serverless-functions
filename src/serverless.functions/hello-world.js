exports.main = async (context, sendResponse) => {
  const { params = {} } = context;
  const name = params.name || 'World';
  
  return sendResponse({
    statusCode: 200,
    body: { 
      message: `Hello ${name} from functions!`,
      timestamp: new Date().toISOString(),
      success: true,
      deployed_via: 'GitHub Integration',
      function: 'hello-world'
    }
  });
};