const daily = document.querySelector('.daily');
const weekly = document.querySelector('.weekly');
const monthly = document.querySelector('.monthly');

const work = document.querySelector('.orange h1');
const workPrevious = document.querySelector('.orange .time');
const play = document.querySelector('.cyan h1');
const playPrevious = document.querySelector('.cyan .time');
const study = document.querySelector('.pink h1');
const studyPrevious = document.querySelector('.pink .time');
const exercise = document.querySelector('.green h1');
const exercisePrevious = document.querySelector('.green .time');
const social = document.querySelector('.purple h1');
const socialPrevious = document.querySelector('.purple .time');
const selfCare = document.querySelector('.yellow h1');
const selfCarePrevious = document.querySelector('.yellow .time');

let allResponse = " ";
async function fetchJsonFile() {
    const jsonFile = await fetch('data.json');
  const response  =  await jsonFile.json()
 allResponse = response;

//   for(let i = 0; i < response.length; i++){
//       const allData = response[i]
//      const dailyData = allData.timeframes.daily;
//      const weeklyData = allData.timeframes.weekly;
//      const monthlyData = allData.timeframes.monthly;
//     //console.log( dailyData, weeklyData , monthlyData)

//     dailyButton(dailyData)
//      weeklyButton(weeklyData)
//     monthlyButton(monthlyData);

  //}

    console.log(response)

    // for (item of items) {
    //     await promiseAction(item)
    // }
}
fetchJsonFile()

//const jsonFile = fetch('data.json');


// jsonFile.then(response => {
//     return  response.json()})
// .then((dataArr) =>{
//    // console.log(dataArr[2].timeframes.daily.previous)
//     dataArr.forEach(data=>{
//         console.log(data)
//       if(data.timeframes.monthly){
//         console.log('monthly ' + data.timeframes.monthly.current)
//  } else if(data.timeframes.weekly){
//      console.log('weekly ' + data.timeframes.weekly.current)
//  } else if(data.timeframes.daily){
//   console.log('daily ' + data.timeframes.daily.current)
//  }
//     })
      

   
//    console.log(dataArr[0])
   
//     dailyButton(dataArr)
//     weeklyButton(dataArr)
//    monthlyButton(dataArr);
   
//})

//;
//daily

daily.addEventListener('click',(e)=>{
    console.log(allResponse)
    //console.log('weekly clicked')
    // return new Promise(resolve =>{
    //     console.log(resolve)
    // })
 
    dailyButton(allResponse)
})

function dailyButton(data){
    console.log(data)
    
    work.innerHTML = `
    <h1>${data[0].timeframes.daily.current}hrs</h1>
    `; 
    workPrevious.innerHTML =`
    <p class="time">Yesterday - ${data[0].timeframes.daily.previous}hrs</p>
    `;
    
    play.innerHTML = `
    <h1>${data[1].timeframes.daily.current}hrs</h1>
    `; 
    playPrevious.innerHTML =`
    <p class="time">Yesterday- ${data[1].timeframes.daily.previous}hrs</p>
    `;
    
    study.innerHTML = `
    <h1>${data[2].timeframes.daily.current}hrs</h1>
    `; 
    studyPrevious.innerHTML =`
    <p class="time">Yesterday - ${data[2].timeframes.daily.previous}hrs</p>
    `;

    exercise.innerHTML = `
    <h1>${data[3].timeframes.daily.current}hrs</h1>
    `; 
    exercisePrevious.innerHTML =`
    <p class="time">Yesterday - ${data[3].timeframes.daily.previous}hrs</p>
    `;

    social.innerHTML = `
    <h1>${data[4].timeframes.daily.current}hrs</h1>
    `; 
    socialPrevious.innerHTML =`
    <p class="time">Yesterday - ${data[4].timeframes.daily.previous}hrs</p>
    `;
    
    selfCare.innerHTML = `
    <h1>${data[5].timeframes.daily.current}hrs</h1>
    `; 
    selfCarePrevious.innerHTML =`
    <p class="time">Yesterday - ${data[5].timeframes.daily.previous}hrs</p>
    `;

}

//weekly

weekly.addEventListener('click',()=>{
    //console.log('weekly clicked')
    console.log(allResponse)
 
   weeklyButton(allResponse)
})

function weeklyButton(data){
    console.log(data)
    work.innerHTML = `
    <h1>${data[0].timeframes.daily.current}hrs</h1>
    `; 
    workPrevious.innerHTML =`
    <p class="time">Last Week - ${data[0].timeframes.daily.previous}hrs</p>
    `;
    
    play.innerHTML = `
    <h1>${data[1].timeframes.weekly.current}hrs</h1>
    `; 
    playPrevious.innerHTML =`
    <p class="time">Last Week- ${data[1].timeframes.weekly.previous}hrs</p>
    `;
    
    study.innerHTML = `
    <h1>${data[2].timeframes.weekly.current}hrs</h1>
    `; 
    studyPrevious.innerHTML =`
    <p class="time">Last Week - ${data[2].timeframes.weekly.previous}hrs</p>
    `;

    exercise.innerHTML = `
    <h1>${data[3].timeframes.weekly.current}hrs</h1>
    `; 
    exercisePrevious.innerHTML =`
    <p class="time">Last Week - ${data[3].timeframes.weekly.previous}hrs</p>
    `;

    social.innerHTML = `
    <h1>${data[4].timeframes.weekly.current}hrs</h1>
    `; 
    socialPrevious.innerHTML =`
    <p class="time">Last Week - ${data[4].timeframes.weekly.previous}hrs</p>
    `;
    
    selfCare.innerHTML = `
    <h1>${data[5].timeframes.weekly.current}hrs</h1>
    `; 
    selfCarePrevious.innerHTML =`
    <p class="time">Last Week - ${data[5].timeframes.weekly.previous}hrs</p>
    `;
}

//monthy

monthly.addEventListener('click',()=>{
    //console.log('weekly clicked')
    console.log(allResponse)
 
   monthlyButton(allResponse)
})

function monthlyButton(data,i){
    console.log(data)
    work.innerHTML = `
    <h1>${data[0].timeframes.monthly.current}hrs</h1>
    `; 
    workPrevious.innerHTML =`
    <p class="time">Last Month - ${data[0].timeframes.monthly.previous}hrs</p>
    `;
    
    play.innerHTML = `
    <h1>${data[1].timeframes.monthly.current}hrs</h1>
    `; 
    playPrevious.innerHTML =`
    <p class="time">Last Month- ${data[1].timeframes.monthly.previous}hrs</p>
    `;
    
    study.innerHTML = `
    <h1>${data[2].timeframes.monthly.current}hrs</h1>
    `; 
    studyPrevious.innerHTML =`
    <p class="time">Last Month - ${data[2].timeframes.monthly.previous}hrs</p>
    `;

    exercise.innerHTML = `
    <h1>${data[3].timeframes.monthly.current}hrs</h1>
    `; 
    exercisePrevious.innerHTML =`
    <p class="time">Last Month - ${data[3].timeframes.monthly.previous}hrs</p>
    `;

    social.innerHTML = `
    <h1>${data[4].timeframes.monthly.current}hrs</h1>
    `; 
    socialPrevious.innerHTML =`
    <p class="time">Last Month - ${data[4].timeframes.monthly.previous}hrs</p>
    `;
    
    selfCare.innerHTML = `
    <h1>${data[5].timeframes.monthly.current}hrs</h1>
    `; 
    selfCarePrevious.innerHTML =`
    <p class="time">Last Month - ${data[5].timeframes.monthly.previous}hrs</p>
    `;

}

