let rootID = document.getElementById("root");
let btn1 = document.getElementById('btn');

btn1.addEventListener('click', function() {
    fetchData();
});

async function fetchData() {
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/todos');
        let filRes = await res.json();

        filRes.forEach((elm) => {

            let div1 = document.createElement('div');
            div1.className = 'cont';

            let p1 = document.createElement('p');
            p1.innerHTML = elm.userId;

            let p2 = document.createElement('p');
            p2.innerHTML = elm.title;

            let p3 = document.createElement('p');
            p3.innerHTML = elm.completed;

            let p4 = document.createElement('p');
            p4.innerHTML = elm.id;

            console.log(elm);

            div1.append(p1, p2, p3, p4);
            rootID.append(div1);

        });

    } catch (error) {
        console.log(error);
    }
}
