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
app.get('/page',(request,response) => { 
    response.render('index')
})
app.get('/bookgs',(request,response) => {
    response.render('bookgs')
})
app.get('/bookbp',(request,response) => {
    response.render('bookbp')
})
app.get('/joinus',(request,response) => {
    response.render('joinus')
})
app.get('/msanews',(request,response) => {
    response.render('msanews')
})
app.get('/msaactivity',(request,response) => {
    response.render('msaactivity')
})
app.get('/bookdrive',(request,response) => {
    response.render('bookdrive')
})
app.get('/login',(request,response) => {
    response.render('login')
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
