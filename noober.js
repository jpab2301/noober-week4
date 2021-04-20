window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)

  // 🔥 start here: write the recipe (algorithm), then write the code
  let serviceLevel
  for (let i=0; i<json.length; i++){
    let ride=json[i]
    
    // define service level
    passengers=ride.numberOfPassengers
    if (ride.purpleRequested){
      serviceLevel=`Noober Purple`
    }
    else if (passengers>3){
      serviceLevel=`Noober XL`
    }
    else{
      serviceLevel=`Noober X`
    }
   
    
       // Create a variable for the HTML element we're going to add to
   let oderDetails=document.querySelector(`.rides`)
       // Insert HTML into the products element, using the data from each product
 
       //insert variables into the copied HTML code
   oderDetails.insertAdjacentHTML(`beforeend`,`
   <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
   <i class="fas fa-car-side"></i>
   <span>${serviceLevel}</span>
 </h1>

 <div class="border-4 border-gray-900 p-4 my-4 text-left">
   <div class="flex">
     <div class="w-1/2">
       <h2 class="text-2xl py-1">${ride.passengerDetails.first} ${ride.passengerDetails.last}</h2>
       <p class="font-bold text-gray-600">${ride.passengerDetails.phoneNumber}</p>
     </div>
     <div class="w-1/2 text-right">
       <span class="rounded-xl bg-gray-600 text-white p-2">
         ${passengers}
       </span>
     </div>
   </div>
   <div class="mt-4 flex">
     <div class="w-1/2">
       <div class="text-sm font-bold text-gray-600">PICKUP</div>
       <p>${ride.pickupLocation.address}</p>
       <p>${ride.pickupLocation.city}, ${ride.pickupLocation.state} ${ride.pickupLocation.zip}</p>
     </div>
     <div class="w-1/2">
       <div class="text-sm font-bold text-gray-600">DROPOFF</div>
       <p>${ride.dropoffLocation.address}</p>
       <p>${ride.dropoffLocation.city}, ${ride.dropoffLocation.state} ${ride.dropoffLocation.zip}</p>
     </div>
   </div>
 </div>`)
 }
    







})