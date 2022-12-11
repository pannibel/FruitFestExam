// export function insertOrder(payload) {
//     const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlkamxtY3F6cWl6cHhzaWV6d2RkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY3MjQ0MzIsImV4cCI6MTk4MjMwMDQzMn0.7y7YweeSat5hG4kUIUdj8pqHjVLiisZuRgZKar5nT78'
//     const url = "https://ydjlmcqzqizpxsiezwdd.supabase.co";
//     fetch(url + "/rest/v1/simpleshop", {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlkamxtY3F6cWl6cHhzaWV6d2RkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY3MjQ0MzIsImV4cCI6MTk4MjMwMDQzMn0.7y7YweeSat5hG4kUIUdj8pqHjVLiisZuRgZKar5nT78',
//             Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlkamxtY3F6cWl6cHhzaWV6d2RkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY3MjQ0MzIsImV4cCI6MTk4MjMwMDQzMn0.7y7YweeSat5hG4kUIUdj8pqHjVLiisZuRgZKar5nT78',
//             Prefer: "return-representation",

//         },
//         body: JSON.stringify(payload),
//     })

// }
export function reserveSpot() {
    let testValue
    const url = "http://localhost:8080/";
    fetch(url + "reserve-spot", {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "area": "Alfheim",
            "amount": 2
        }),
    })
        .then((response) => response.json())
        .then((response) => console.log(response, response.id)).then((response) => testValue = response.id)
        .catch((err) => console.error(err))
}
export function confirmReservation(idValue) {

    const url = "http://localhost:8080/";
    fetch(url + "reserve-spot", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "id": idValue
        }),
    })
        .then((response) => response.json())
        // .then((response) => console.log(response, response.id))
        .catch((err) => console.error(err))
}

export function insertOrder(payload) {
    const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlkamxtY3F6cWl6cHhzaWV6d2RkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY3MjQ0MzIsImV4cCI6MTk4MjMwMDQzMn0.7y7YweeSat5hG4kUIUdj8pqHjVLiisZuRgZKar5nT78'
    const url = "https://ydjlmcqzqizpxsiezwdd.supabase.co";
    fetch(url + "/rest/v1/simpleshop", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlkamxtY3F6cWl6cHhzaWV6d2RkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY3MjQ0MzIsImV4cCI6MTk4MjMwMDQzMn0.7y7YweeSat5hG4kUIUdj8pqHjVLiisZuRgZKar5nT78',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlkamxtY3F6cWl6cHhzaWV6d2RkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY3MjQ0MzIsImV4cCI6MTk4MjMwMDQzMn0.7y7YweeSat5hG4kUIUdj8pqHjVLiisZuRgZKar5nT78',
            Prefer: "return-representation",

        },
        body: JSON.stringify(payload),
    })

}