let rootID = document.getElementById('root')
let div1 = document.createElement('div')
div1.className='div1'

let btn1 = document.getElementById('btn')

// btn1.addEventListener('click', () => {
//      fetchData()
// })

async function fetchData() {

     try {
          let res = await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries')
          let finRes = await res.json()
          // console.log(finRes.data);

          
          finRes.data.forEach(element => {

               console.log(element);
               let div2 = document.createElement('div')
               div2.className = "div2"


               let p1 = document.createElement('p')
               p1.innerHTML = element.country

               let p2 = document.createElement('p')
               p2.innerHTML = "id : "+ element.id

               let p3 = document.createElement('p')
               p3.innerHTML = "Rank : "+ element.Rank

               let p4 = document.createElement('p')
               p4.innerHTML ="population : "+ element.population


               div2.append(p1, p2, p3,p4)
               div1.append(div2)
               rootID.append(div1)

          });
     } catch (error) {
          console.log(error);
     }
}

 fetchData()
