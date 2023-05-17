
async function handleAddTour(event) {
    try {
        event.preventDefault();
        var tourName = event.target.tourName.value
        var price = event.target.price.value
        var imgURL = event.target.imgURL.value
        if(!imgURL || !price || !tourName) throw new Error("no data from client on handleAddTour")
        
        var response = await axios.post("/api/tours", {tourName, price, imgURL})
        console.log(response.data)
        if (response.data.ok) {
            const root = document.querySelector('#root')
            root.innerHTML="<p>Tour was Added!</p>"
        }


    } catch (error) {
        console.error(error.message)
    }
} 

async function handleGetAlltours() {
try {
    const response = await axios.get("/api/tours")

    if(response.data.toursDB) {
        const root = document.querySelector('#root')
        let html ="";
        response.data.toursDB.forEach(tour => {
            html += `<div>
            <img src="${tour.imgURL}" style="width:200px;"/>
            <h3>${tour.tourName}</h3>
            <p>${tour.price}$</p>
            </div>`
        });
        root.innerHTML = html;
    }
} catch (error) {
    console.error(error)
}
}