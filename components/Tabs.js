// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
import axios from 'axios' 

const tabEntryPoint = document.querySelector('.topics')


function newTabs(topic) {
    const tabDiv = document.createElement('div')

    tabDiv.classList.add('tab')

    tabDiv.textContent = topic



    return tabDiv
}

axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then(res => {
        const topic = res.data.topics 

        // console.log("topic", topic);

        topic.forEach(topic => {
            const topicTab = newTabs(topic)

            // console.log("topicTab", topicTab);

            tabEntryPoint.appendChild(topicTab)
        })
    })
    .catch(err => {
    // console.log("err", err);
    })