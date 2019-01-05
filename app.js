const express	=	require("express");
const app		=	express();
const port		=	3000;

app.use((req, res, next) => {
	req.time = Date().toString()
	next()
})

app.get('/', (req, res) => res.send(`Hello at ${req.time}`))

/*app.get('/', (req, res) => console.log(res))*/

app.listen(port, () => console.log(`App Started at ${port}`))