
async function handleAddTour(event) {
    try {
        event.preventDefault();
        var tourName = event.target.tourName.value
        var price = event.target.price.value
        var imgURL = event.target.imgURL.value
        if(!imgURL || !price || !tourName) throw new Error("no data from client on handleAddTour")
        
        var response = await axios.post("/api/tours", {tourName, price, imgURL})
        console.log(response)

    } catch (error) {
        console.error(error.message)
    }
} 