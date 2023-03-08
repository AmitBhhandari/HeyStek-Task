const personListEl = document.getElementById('person-list');
const nextBtnEl = document.getElementById('next-btn');
const data = [
  {
      "name": "John Smith",
      "location": "New York, NY"
  },
  {
      "name": "Jane Doe",
      "location": "Los Angeles, CA"
  },
  {
      "name": "Bob Johnson",
      "location": "Chicago, IL"
  },
  {
      "name": "Emily Davis",
      "location": "Houston, TX"
  },
  {
      "name": "Michael Brown",
      "location": "Phoenix, AZ"
  },
  {
      "name": "Sarah Miller",
      "location": "Philadelphia, PA"
  },
  {
      "name": "David Garcia",
      "location": "San Antonio, TX"
  },
  {
      "name": "Jessica Rodriguez",
      "location": "San Diego, CA"
  },
  {
      "name": "Mark Wilson",
      "location": "Dallas, TX"
  },
  {
      "name": "Elizabeth Martinez",
      "location": "San Jose, CA"
  },
  {
      "name": "Joshua Hernandez",
      "location": "Austin, TX"
  },
  {
      "name": "Karen Moore",
      "location": "Jacksonville, FL"
  },
  {
      "name": "Brian Jackson",
      "location": "Fort Worth, TX"
  },
  {
      "name": "Heather Anderson",
      "location": "Columbus, OH"
  },
  {
      "name": "Teresa Thomas",
      "location": "Charlotte, NC"
  },
  {
      "name": "Dennis Mitchell",
      "location": "Indianapolis, IN"
  },
  {
      "name": "Cynthia Lee",
      "location": "Seattle, WA"
  },
  {
      "name": "Adam Hall",
      "location": "Denver, CO"
  },
  {
      "name": "Nancy Allen",
      "location": "El Paso, TX"
  },
  {
      "name": "Lisa King",
      "location": "Washington, DC"
  },
  {
      "name": "William Wright",
      "location": "Boston, MA"
  },
  {
      "name": "Mary Scott",
      "location": "Nashville, TN"
  },
  {
      "name": "Kathryn Green",
      "location": "Portland, OR"
  },
  {
      "name": "Gerald Baker",
      "location": "Vancouver, BC"
  },
  {
      "name": "Eric Cooper",
      "location": "Sacramento, CA"
  },
  {
      "name": "Stephanie Gomez",
      "location": "Oklahoma City, OK"
  },
  {
      "name": "Edward Kelly",
      "location": "Tulsa, OK"
  },
  {
      "name": "Ashley Sanders",
      "location": "Winnipeg, MB"
  }
]



let startIndex = 0;

function renderPersonList(startIndex) {
  personListEl.innerHTML = '';
  
  for (let i = startIndex; i < startIndex + 3 && i < data.length; i++) {
    const person = data[i];
    const personEl = document.createElement('div');
    personEl.classList.add('person');
    
    const serialNumberEl = document.createElement('div');
    serialNumberEl.classList.add('person-serial-number');
    serialNumberEl.innerText = `#${i+1}`;
    personEl.appendChild(serialNumberEl);
    
    const nameEl = document.createElement('div');
    nameEl.classList.add('person-name');
    nameEl.innerText = `Name: ${person.name}`;
    personEl.appendChild(nameEl);
    
    const locationEl = document.createElement('div');
    locationEl.classList.add('person-location');
    locationEl.innerText = `Location: ${person.location}`;
    personEl.appendChild(locationEl);
    
    personListEl.appendChild(personEl);
  }
}

renderPersonList(startIndex);

nextBtnEl.addEventListener('click', () => {
  startIndex += personListEl.children.length;
  
  if (startIndex >= data.length) {
    alert('No more people!');
    startIndex = data.length - personListEl.children.length;
  }
  
  renderPersonList(startIndex);
});