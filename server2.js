const express = require('express');
const routerMhs = require('./routers/mahasiswa')
const routerMk = require('./routers/matakuliah')
const routerNilai = require('./routers/nilai')
const app = express();
const port = 3000;
const cors = require('cors')
const session = require = ('express-session')
const routerUser = require('./routers/user')


app.use(express.json());
app.use(cors({
    origin:'*'
}));
app.use(routerUser)
app.use(routerMhs)
app.use(routerMk)
app.use(routerNilai)
app.use(express.urlencoded({ extended: true }));
app.use(session)({
    secret: "secret-key",
    resave: false,
    saveUnintialized: false
})


app.listen(port, () => {
    console.log(`Server berjalan pada localhost:${port}`);
});