async function handleGetAllTours() {
  try {
    //@ts-ignore
    const { data } = await axios.get("/api/v1/tours");
    if (!data) throw new Error("no data from server on client get all tours");
    console.log(data);
    if (data.toursDB.length > 0) {
      const root = document.querySelector("#root") as HTMLDivElement;
      let html = "";
      data.toursDB.forEach((tour) => {
        html =
          html +
          `<div>
        <img style="width: 200px;" src="${tour.imgSRC}"/>
          <h3>${tour.name}</h3>
          <p>${tour.price}$</p>
        </div>`;
      });
      root.innerHTML = html;
    }
  } catch (error) {
    console.error(error.messasge);
  }
}

async function addTour(event) {
  try {
    event.preventDefault();
    const tourName = event.target.elements.tourName.value;
    const price = event.target.elements.price.value;
    const imgSRC = event.target.elements.imgSRC.value;
    console.log(imgSRC);
    //@ts-ignore
    const { data } = await axios.post("/api/v1/tours", {
      tourName,
      price,
      imgSRC,
    });
    console.log(data);
  } catch (error) {
    console.error(error.messasge);
  }
}