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

export function confirmReservation(idValue) {

    const url = "https://bitter-grass-7071.fly.dev/";
    fetch(url + "fullfill-reservation", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(idValue),
    })
        .then((response) => response.json())
        // .then((response) => console.log(response, response.id))
        .catch((err) => console.error(err))
}

export function insertOrder(payload) {
    const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlkamxtY3F6cWl6cHhzaWV6d2RkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY3MjQ0MzIsImV4cCI6MTk4MjMwMDQzMn0.7y7YweeSat5hG4kUIUdj8pqHjVLiisZuRgZKar5nT78'
    const url = "https://ydjlmcqzqizpxsiezwdd.supabase.co";
    fetch(url + "/rest/v1/rangerFest", {
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