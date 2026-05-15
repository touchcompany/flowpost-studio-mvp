# cPanel Node.js Setup

Use this file when the domain opens static HTML but `/api/health` returns 404.

## Node.js App values

In cPanel > Setup Node.js App:

```txt
Application URL: app.touch.com.co
Application root: app.touch.com.co
Application startup file: cpanel-server.js
Application mode: Production
```

The application root must contain:

```txt
cpanel-server.js
server.js
package.json
index.html
app.js
styles.css
```

## Environment variables

Minimum:

```env
APP_PUBLIC_URL=https://app.touch.com.co
HOST=0.0.0.0
DATA_PROVIDER=local
ENABLE_REAL_PUBLISHING=false
ENABLE_REAL_PROVISIONING=false
```

If cPanel assigns its own port, remove the custom `PORT` variable in the UI. If cPanel requires a port, use the port cPanel shows for the Node.js app.

## After saving

1. Save variables.
2. Run NPM Install.
3. Restart App.
4. Open:

```txt
https://app.touch.com.co/api/health
```

Expected response:

```json
{"ok":true,"dataProvider":"local"}
```

If `/api/health` still returns Apache 404, the domain is still serving static files and the Node.js app is not attached to `app.touch.com.co`.
