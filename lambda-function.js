exports.handler = function(event, context, callback) {
    const request = event.Records[0].cf.request;

    const response = {
        status: '301',
        statusDescription: 'Found',
        headers: {
            location: [{
                key: 'Location',
                value: `https://taskcluster-artifacts.net${request.uri}`,
            }]
        }
    }

    callback(null, response);
};

