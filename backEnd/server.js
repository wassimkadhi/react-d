import express from"express";
import cors from "cors";
import bodyParser from 'body-parser';
import ("./dbConfig.js") ; 



const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
const port = process.env.PORT || 5000;
import promotionsRouter from './routes/promotionRoutes.js' ;
import officierRouter from'./routes/officierRoutes.js';

app.use('/promotions', promotionsRouter);
app.use('/officiers',officierRouter);
app.use(cors());
app.use(express.json());


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

