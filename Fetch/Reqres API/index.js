let rootID = document.getElementById('root')
let div1 = document.createElement('div')
div1.className='div1'

let btn1 = document.getElementById('btn')

btn1.addEventListener('click', () => {
     fetchData()
})

async function fetchData() {

     try {
          let res = await fetch('https://reqres.in/api/users?page=1')
          let finRes = await res.json()

          finRes.data.forEach(element => {


               let div2 = document.createElement('div')
               div2.className = "div2"


               let avtar = document.createElement('img')
               avtar.src = element.avatar


               let p1 = document.createElement('p')
               p1.innerHTML = element.first_name

               let p2 = document.createElement('p')
               p2.innerHTML = element.last_name

               let p3 = document.createElement('p')
               p3.innerHTML = element.email


               div2.append(avtar, p1, p2, p3)
               div1.append(div2)
               rootID.append(div1)

          });
     } catch (error) {
          console.log(error);
     }
}
