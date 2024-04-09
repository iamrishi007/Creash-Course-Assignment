// fill in javascript code here// fill in javascript code here

let name = document.getElementById('name')
let employeeID = document.getElementById('employeeID')
let department = document.getElementById('department')
let exp = document.getElementById('exp')
let email = document.getElementById('email')
let mbl = document.getElementById('mbl')

let form = document.querySelector('form')
let tbody = document.querySelector('tbody')


let list = []

form.addEventListener('submit', function (e) {
          e.preventDefault()
          let obj = {}
          obj.name = name.value
          obj.employeeID = employeeID.value
          obj.department = department.value
          obj.exp = exp.value
          obj.email = email.value
          obj.mbl = mbl.value
          tbody.innerText = ""
          list.push(obj)

          list.forEach(elm => {
                    let row = document.createElement('tr')
                    let td1 = document.createElement('td')
                    let td2 = document.createElement('td')
                    let td3 = document.createElement('td')
                    let td4 = document.createElement('td')
                    let td5 = document.createElement('td')
                    let td6 = document.createElement('td')
                    let td7 = document.createElement('td')

                    td1.innerText = elm.name
                    td2.innerText = elm.employeeID
                    td3.innerText = elm.department
                    td4.innerText = elm.exp
                    td5.innerText = elm.email
                    td6.innerText = elm.mbl

                    if (Number(elm.exp) > 5) {
                              td7.innerText = "Senior"
                    }

                    else if (Number(elm.exp) >= 2 || Number(elm.exp) <= 5) {
                              td7.innerText = "Junior"
                    }

                    else {
                              td7.innerText = "Fresher"
                    }


                    let delBtn = document.createElement("td")
                    delBtn.textContent = "Delete"
                    delBtn.style.backgroundColor = "red"

                    delBtn.addEventListener('click', function () {
                              row.textContent = " "
                    })
                    row.append(td1, td2, td3, td4, td5, td6, td7, delBtn)
                    tbody.append(row)

          })
})