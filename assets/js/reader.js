var options = {
    'cookiePolicy': ImmersiveReader.CookiePolicy.Enable
};

ImmersiveReader.launchAsync(YOUR_TOKEN, microreadertamuhack2020, YOUR_DATA, options);

const htmlContent = document.getElementById('immersive-reader-content').innerHTML;

const data = {
    chunks: [{
        content: htmlContent,
        mimeType: 'text/html'
    }]
};

ImmersiveReader.launchAsync(YOUR_TOKEN, microreadertamuhack2020, data, YOUR_OPTIONS);
