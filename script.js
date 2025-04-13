window.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".menu").addEventListener("click", () => {
        document.querySelector("nav ul").classList.toggle("active")

        if(document.querySelector("nav ul").classList.contains("active")){
            document.querySelector(".menu").innerHTML = "<i class='fas fa-x'></i>"
        }
        else{
            document.querySelector(".menu").innerHTML = "<i class='fas fa-bars'></i>"
        }
        document.querySelector("header").style.backgroundColor = "white"
    })

    window.addEventListener("scroll", () => {
        if(document.documentElement.scrollTop > 100) {
            document.querySelector("header").style.backgroundColor = "white"
        }
        else {
            document.querySelector("header").style.backgroundColor = "transparent"
        }
    })

    let properties = [
        {
            image: "/assets/houses/h1.jpg",
            location: {
                place: "Accra, Legon",
                feel: "Luxury"
            },
            category: "residential"
        },
        {
            image: "/assets/houses/h2.jpg",
            location: {
                place: "Accra, Legon",
                feel: "Luxury"
            },
            category: "residential"
        },
        {
            image: "/assets/houses/h3.jpg",
            location: {
                place: "Accra, Legon",
                feel: "Luxury"
            },
            category: "commercial"
        },
        {
            image: "/assets/houses/h4.jpg",
            location: {
                place: "Accra, Legon",
                feel: "Luxury"
            },
            category: "residential"
        },
        {
            image: "/assets/houses/h5.jpg",
            location: {
                place: "Accra, Legon",
                feel: "Luxury"
            },
            category: "residential"
        },
        {
            image: "/assets/houses/h6.jpg",
            location: {
                place: "Accra, Legon",
                feel: "Luxury"
            },
            category: "commercial"
        },
        {
            image: "/assets/houses/h7.jpg",
            location: {
                place: "Accra, Legon",
                feel: "Luxury"
            },
            category: "residential"
        },
        {
            image: "/assets/houses/h8.jpg",
            location: {
                place: "Accra, Legon",
                feel: "Luxury"
            },
            category: "residential"
        },
        {
            image: "/assets/houses/h9.jpg",
            location: {
                place: "Accra, Legon",
                feel: "Luxury"
            },
            category: "residential"
        },
        {
            image: "/assets/houses/h10.jpg",
            location: {
                place: "Accra, Legon",
                feel: "Luxury"
            },
            category: "commercial"
        },
        {
            image: "/assets/houses/h11.jpg",
            location: {
                place: "Accra, Legon",
                feel: "Luxury"
            },
            category: "residential"
        },
        {
            image: "/assets/houses/h12.jpg",
            location: {
                place: "Accra, Legon",
                feel: "Luxury"
            },
            category: "commercial"
        },
        {
            image: "/assets/houses/h13.jpg",
            location: {
                place: "Accra, Legon",
                feel: "Luxury"
            },
            category: "residential"
        },
        {
            image: "/assets/houses/h14.jpg",
            location: {
                place: "Accra, Legon",
                feel: "Luxury"
            },
            category: "residential"
        },
        {
            image: "/assets/houses/h15.jpg",
            location: {
                place: "Accra, Legon",
                feel: "Luxury"
            },
            category: "commercial"
        },
   
    ]

    function renderProperties(limit){
        let propertiesHTML = ""

        for(let i = 0; i < limit; i++){
            propertiesHTML += `
            <div class="showcase-block" style="background: no-repeat url('.${properties[i].image}') center/cover;">
                <span class="cat">${properties[i].category}</span>
                <div class="">
                <span><i class="fas fa-location-dot"></i> ${properties[i].location.place}</span>
                <span>${properties[i].location.feel}</span>
                </div>
            </div>
            `
        }
        document.querySelector(".showcase-cont").innerHTML = propertiesHTML
    }

    renderProperties(5)
    
    let filtered = properties
    document.querySelector("#property").addEventListener("click", (e) => {

        
        if(e.target.textContent === "Show all properties"){
            renderProperties(properties.length)
            e.target.textContent = "Show less"
        }
        else if(e.target.textContent === "Show less"){
            renderProperties(5)
            e.target.textContent = "Show all properties"
        }
        else if(e.target.textContent === "All"){
            properties = filtered
            renderProperties(properties.length)
        }
        else if(e.target.textContent === "Residential"){
            let temp = filtered.filter(item => item.category === "residential")
            properties = temp
            renderProperties(temp.length)
        }
        else if(e.target.textContent === "commercial"){
            let temp = filtered.filter(item => item.category === "commercial")
            properties = temp
            renderProperties(temp.length)
        }
    })
    
    
})

