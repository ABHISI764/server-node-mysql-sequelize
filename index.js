const express = require('express');
const app = express();
const cors = require('cors')

const db = require('./models');
app.use(express.json());
app.use(cors());

const postRouter = require('./routes/Posts');
app.use("/post",postRouter)
const commentsRouter = require('./routes/Comments');
app.use("/Comments",commentsRouter)


db.sequelize.sync().then(()=> {
    app.listen(3001,()=> {
        console.log("Server running on port 30001");
    })
})
