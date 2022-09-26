import express from"express";
import cors from "cors";
import ("./dbConfig.js") ; 



const app = express();
const port = process.env.PORT || 5000;
import promotionsRouter from './routes/promotion.js' ;

app.use('/', promotionsRouter);
app.use(cors());
app.use(express.json());


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

