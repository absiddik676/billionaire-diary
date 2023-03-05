let fetchData = []
console.log(fetchData);
const lodeData = async() =>{
    loader(true)
    const res  = await fetch('../data.JSON')
    const data = await res.json()
    // fetchData.push = data
    displayData(data);
    
}


const displayData = (allData)=>{
    const tableBody = document.getElementById('table-body')
    tableBody.innerHTML = " "
    allData.forEach(data =>{
        fetchData.push(data)
        const tr = document.createElement('tr')
        tr.classList.add('bg-neutral-300')
        const {personName,rank,countryOfCitizenship,finalWorth,industries,naturalId} = data
        tr.innerHTML = `
            <td class="bg-neutral-300 border-b-0">${personName} <label for="my-modal" onclick="singleData('${naturalId}')"  ><i class="fa-solid fa-eye"></i</label></td>
            <td class="bg-neutral-300 border-b-0">${countryOfCitizenship} </td>
            <td class="bg-neutral-300 border-b-0">${industries[0]}</td>
            <td class="bg-neutral-300 border-b-0">${rank}</td>
            <td class="bg-neutral-300 border-b-0">$${finalWorth}</td>
        `
        tableBody.appendChild(tr)
        loader(false)
    })
    const table = document.getElementById('table')
    table.classList.remove('hidden')
    
}

const loader = isLoading=>{
    const loader = document.getElementById('loader')
    if(isLoading === true){
        loader.classList.remove('hidden')
    }
    else{
        loader.classList.add('hidden')
    }
}

const singleData = id =>{
    const data = fetchData.find(singleData => singleData.naturalId === id);
    const {personName,bios,person,countryOfCitizenship,city,state,birthDate,gender,financialAssets} = data
    console.log(data);
    const modal = document.getElementById('modal')
    modal.innerHTML = ' '
    const  div = document.createElement('div')
    div.innerHTML = `       
            <input type="checkbox" id="my-modal" class="modal-toggle " />
            <div  class="modal">
            <div class="modal-box">
                <h3 class="font-bold text-lg text-center">${personName}</h3>
                <h4  class="font-bold text-lg text-center">Biography</h4>
                <p class="py-4">${bios[0]}</p>
                <div class="flex gap-4">
                <img class="w-6/12 h-auto mt-5 rounded-md" src="${person.squareImage}" alt="Album"/>
                <div >
                <h3 class="font-bold text-lg text-center">General Information </h3> 
                <hr class="border-b border-black">
                <h3 class="font-bold text-1xl ">Citizenship: <span class="text-lg font-normal">${countryOfCitizenship}</span> </h3>
                <h3 class="font-bold text-1xl ">State: <span class="text-lg font-normal">${state}</span> </h3>
                <h3 class="font-bold text-1xl ">City: <span class="text-lg font-normal">${city}</span> </h3>
                <h3 class="font-bold text-1xl ">Birth Date: <span class="text-lg font-normal">${birthDate}</span> </h3>
                <h3 class="font-bold text-1xl ">Gender: <span class="text-lg font-normal">${gender}</span> </h3>
                <h3 class="font-bold text-lg text-center mt-5">Financial Information </h3> 
                <hr class="border-b border-black">
                <h3 class="font-bold text-1xl ">Exchange: <span class="text-lg font-normal">${financialAssets[0].exchange}</span> </h3>
                <h3 class="font-bold text-1xl ">ticker: <span class="text-lg font-normal">${financialAssets[0].ticker}</span> </h3>
                <h3 class="font-bold text-1xl ">Total Shares: <span class="text-lg font-normal">${financialAssets[0].numberOfShares}</span> </h3>
                <h3 class="font-bold text-1xl ">Share Price: <span class="text-lg font-normal">${(financialAssets[0].sharePrice).toFixed(2)}</span> </h3>
                </div>
                </div>
                <div class="modal-action">
                <label for="my-modal" ><i class="fa-solid fa-x mark fa-2xl cursor-pointer"></i></label>
                </div>
            </div>
            </div>
        
    `
    modal.appendChild(div)
    
}
const lodeAllData = async() =>{
    loader(true)
    const res  = await fetch('../all.JSON')
    const data = await res.json()
    displayData(data);
    
}
const RichestTechnology = async() =>{
    loader(true)
    const res  = await fetch('../all.JSON')
    const data = await res.json()
    displayData(data);
    
}




lodeData()
