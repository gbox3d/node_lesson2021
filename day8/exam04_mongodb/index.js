import express from 'express'
import dotenv from 'dotenv'
import { MongoClient } from 'mongodb'
dotenv.config();


(async () => {
    try {
        //mongodb 접속
        const db_client = new MongoClient(process.env.MONGODB_URL);

        await db_client.connect()
        // console.log(_result)
        console.log(`db connect ok`);

        //express 실행
        const app = express();
        app.use(express.json()); //json 미들웨어 등록 , 바디파서

        if (process.env.NODE_ENV == 'dev') {
            app.get('/hello', (req, res) => {
                res.json({ r: 'ok' })
            });
        }

        app.post('/insert', async (req, res) => {

            try {
                const database = db_client.db('node_stduy');
                const memo = database.collection('memo');

                console.log(req.body)

                let _res = await memo.insertOne(req.body);

                res.json({ r: 'ok', d: _res });
            }
            catch (e) {
                res.json({ r: 'err', err: e })
            }
        });

        app.get('/find/skip/:skip/limit/:limit', async (req, res) => {
            try {
                console.log(req.params)
                const database = db_client.db('node_stduy');
                const memo = database.collection('memo');
                let cursor = await memo.find()
                    .skip(parseInt(req.params.skip))
                    .limit(parseInt(req.params.limit));

                let items = await cursor.toArray();
                res.json({ r: 'ok', d: items });
            }
            catch (e) {
                res.json({ r: 'err', err: e })
            }
        })

        app.listen(process.env.PORT, () => {

            if (process.env.NODE_ENV == 'dev') {
                console.log(`server started at : ${process.env.PORT}`);
            }
        })

    }
    catch (e) {
        console.log(e);
    }

})();



