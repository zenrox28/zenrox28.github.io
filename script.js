let gallery = document.getElementById('gallery_container')

let columns = [
    (left = []),
    (center = []),
    (right = [])
]
let columnIndex = 0

fetch('./gallery/index.json')
    .then((response) => response.json())
    .then(data => {
        // console.log(data.items)

        for(let i = 0; i < data.items.length; i++) {
            columns[columnIndex].push(`
                <img src="${data.items[i].url}" class="gallery_image">
            `)
            if(columnIndex <2) {
                columnIndex++
            } else {
                columnIndex = 0
            }
        }

        
        columns = [
            (left = [`
                <div class="column">${columns[0].join("")}</div>
            `]),
            (center = [`
                <div class="column">${columns[1].join("")}</div>
            `]),
            (right = [`
                <div class="column">${columns[2].join("")}</div>
            `]),
        ]

        gallery.innerHTML = columns.join("")
    })