const express = require('express')
const path = require('path')
const app = express()

const indexRoute=require('./routes/index.js')



food=['돈까스','김밥','떡볶이','샌드위치','쌀국수','치킨','자장면','초밥','콜라비빔밥','오므라이스']

ind=Math.floor(Math.random()*food.length)

const pickMyFood=()=>{
    const food=['돈까스','김밥','떡볶이','샌드위치','쌀국수','치킨','자장면','초밥','콜라비빔밥','오므라이스']
    const ind=Math.floor(Math.random()*food.length)
    return food[ind];
}
const mbti = [
    'INTJ - 용의주도한 전략가 (Architect)',
    '​INTP - 논리적인 사색가 (Logician)',
    'ENTJ - 대담한 ​통솔자 (Commander)',
    'ENTP - ​뜨거운 논쟁을 즐기는 변론가 (Debater)',
    'INFJ - 선의의 옹호자 (Advocate)',
    'INFP - ​열정적인 중재자 (Mediator)',
    'ENFJ - 정의로운 사회운동가 (Protagonist)',
    'ENFP - ​재기발랄한 활동가 (Campaigner)',
    'ISTJ - 청렴결백한 논리주의자 (Logistician)',
    'ISFJ - 용감한 수호자 (Defender)',
    'ESTJ - ​엄격한 관리자 (Executive)',
    'ESFJ - 사교적인 외교관 (Consul)',
    'ISTP - 만능 재주꾼 (Virtuoso)',
    'ISFP - ​호기심 많은 예술가 (Adventurer)',
    'ESTP - ​모험을 즐기는 사업가 (Entrepreneur)',
    'ESFP - 자유로운 영혼의 연예인 (Entertainer)'
]
const direction=['동','서','남','북']
const reward=['우정','행운','제품','지혜','즐거움','놀라움']

const randInd=function(arr){
    return Math.floor(Math.random()*arr.length)
}
app.set('views',path.join(__dirname,'views'))
app.set('view engine','pug');


app.use('/',indexRoute);

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname,'index.html'))
// })
app.get('/lucky',(req,res)=>{
    res.send(`<p></p>오늘 당신이 ${direction[randInd(direction)]}쪽으로 가신다면<p>오늘 만날 귀인은 바로 ${mbti[randInd(mbti)]}입니다.<p>그는 당신에게 소중한 인연입니다.`)
})
app.get('/food',(req,res)=>{
    text=pickMyFood()
    res.send(`오늘 당신에게 추천드리는 음식은 ${text} 입니다!`)
})
app.get('/webtoon', (req, res) => {
    res.send('현재준비중입니다!')
})
app.get('/profile', (req, res) => {
    res.send('INFP개발자')
})
// req: request(요청), 사용자의 브라우저 정보, 질문(주소창), 로그인정보 
// response(응답) : 사이트 내용 html
app.use((err,req,res,next)=>{
    console.log(err)
    res.status(500).send(err.message)
})//에러처리를 위한 구문

app.listen(3000, () => {
    console.log('3000번 포트에서 웹서버를 실행중입니다...')
})
