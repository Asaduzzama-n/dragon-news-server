const express = require('express');
const cors = require('cors');
const app = express();
const port =process.env.PORT || 5000;

app.use(cors());
const categories = require('./data/categories.json');
const news = require('./data/news.json');

app.get('/',(req,res)=>{
    res.send('server is live');
})

app.get('/news-category',(req,res)=>{
    res.send(categories);
})

app.get('/news',(req,res)=>{
    res.send(news);
})

app.get('/category/:id',(req,res)=>{
    
    const id = req.params.id;
    if(id == '08'){
        res.send(news)
    }else{
        const category_news = news.filter(c =>c.category_id === id);
        res.send(category_news);
    }

})

app.get('/news/:id',(req,res)=>{
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews);
})

app.listen(port,()=>{
    console.log('server is running');
})