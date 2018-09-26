# VueJs Githug Authentication

## Description

VueJs Github Authentication Example

Unlike other social authentications, Github authentication flow is bit different and requires to go through frontend and backend calls to get the user to authorise to your app.

Github Web application flow

#### Step-1: User is redirected to request their Github Identity - *FRONTEND*
    `GET https://github.com/login/oauth/authorize`

#### Step-2: User is redirected back to your site by Github with temporary code - *BACKEND*
    If the user accept the request, Github redirects back to the site with a temporary `code` and `state`
    `GET http://yoursite.dev.com?code={code}&state={state}`

    Exchange this code for access token

    Request => `POST https://github.com/login/oauth/access_token` with the following form data

                `client_id, client_secret, code, redirect_uri, state`
    
    *Here is the main problem. We can't make the above POST request from the browser directly due to security issue. One would have to make that call through backend API call. This is the part that confuses many developers* as Github documentation is not that clear*
    As demonstrated here https://github.com/manjufy/nodejs-github-auth

    Response => `access_token=e72e16c7e42f292c6912e7710c838347ae178b4a&token_type=bearer`

### Step-3: Now use the access token to access the API - *FRONTEND*
    Now with the access token, we can make a request to Github API on behalf of a user and get access to user information

    `curl -H "Authorization: token OAUTH-TOKEN" https://api.github.com/user`




NOTE: add this to your hosts file `dev.githubauth.com` or any localhost name you prefer

DEPENDENCY:  https://github.com/manjufy/nodejs-github-auth/blob/master/src/server.js

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Github Authentication

https://developer.github.com/v3/guides/basics-of-authentication/


https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/
