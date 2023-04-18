//โหลด module มาใช้งาน
const express = require('express') 
const ejs = require('ejs')
//สร้าง object จาก express
const app = express() 
// สร้างตัวเเปร port
let PORT = process.env.PORT || 3000;
//ตั้งค่าให้รู้จัก static files 
app.use(express.static('statics'))
//ตั้งค่า dafalut template engine
app.set('view engine', 'ejs')
//กำหนด path
app.use('/bootstrap',
    express.static(__dirname + '/node_modules/bootstrap/dist'))

app.get('/',(request,response) => { 
    response.render('indexpage')
})
app.get('/salepage',(request,response) => { 
    response.render('salepage')
})
app.get('/bookdrive',(request,response) => {
    response.render('bookdrive')
})
app.get('/servicepage',(request,response) => {
    response.render('servicepage')
})
app.get('/bookgs',(request,response) => {
    response.render('bookgs')
})
app.get('/bodypage',(request,response) => {
    response.render('bodypage')
})
app.get('/bookbp',(request,response) => {
    response.render('bookbp')
})
app.get('/marketingpage',(request,response) => {
    response.render('marketingpage')
})
app.get('/aboutuspage',(request,response) => {
    response.render('aboutuspage')
})
app.get('/joinus',(request,response) => {
    response.render('joinus')
})

function render(response, file){
    response.status(200)
    response.type('text/html')
    response.sendFile(path.join(__dirname, file))
}
app.use((request,response) =>{
    response.status(404) 
    response.type('text/html')
    response.send('404 Not Found')
})
//สร้างการเชื่อมต่อที่ port 3000 callback function ทำเมื่อเชื่อมต่อสำเร็จ
app.listen(PORT, ()=> console.log('Server started'));
