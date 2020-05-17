const http = require('http');


const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === "/") {
        res.setHeader('Content-Type', 'text/html');
        res.write("<html>");
        res.write("<head>");
        res.write("<title>Home</title>")
        res.write("</head>");
        res.write("<body>");
        res.write("<p>Welcome to my app</p>");
        res.write("</body>");
        res.write("</html>");
        return res.end();
    } else if (url === "/users") {
        res.setHeader('Content-Type', 'text/html');
        res.write("<html>");
        res.write("<head>");
        res.write("<title>Users</title>")
        res.write("</head>");
        res.write("<body>");
        res.write("<ul>");
        res.write("<li> user1 </li>");
        res.write("<li> user2 </li>");
        res.write("<li> user3 </li>");
        res.write("</ul>");
        res.write("</body>");
        res.write("</html>");
        return res.end();
    } else if (url === "/create-user") {
        if (method === "GET") {
            res.setHeader('Content-Type', 'text/html');
            res.write("<html>");
            res.write("<head>");
            res.write("<title>Users</title>")
            res.write("</head>");
            res.write("<body>");
            res.write('<form method="POST" action="/create-user">');
            res.write('<input type="text" name="name">');
            res.write('<button type="submit">Create</button>');
            res.write("</form>");
            res.write("</body>");
            res.write("</html>");
            return res.end();
        } else if (method === "POST") {
            const body = [];
            req.on('data', (chunk) => {
                console.log(chunk);
                body.push(chunk);
            });
            req.on('end', () => {
                const parsedBody = Buffer.concat(body).toString();
                const name = parsedBody.split('=')[1];
                console.log(name);
                res.statusCode = 201;
                res.setHeader('Content-Type', 'text/html');
                res.write("<html>");
                res.write("<head>");
                res.write("<title>Home</title>")
                res.write("</head>");
                res.write("<body>");
                res.write("<p>User Create Successful</p>");
                res.write("</body>");
                res.write("</html>");
                return res.end();
            });
        }
    }
});

server.listen(3000);