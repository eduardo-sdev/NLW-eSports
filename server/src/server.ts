import express from "express"

const app = express()

app.get('/', (req, res) => {
    return res.json([

        { id: 1, name: 'foobar' },
        { id: 2, name: 'foobar2' }
    ])
})

app.listen(3333)

