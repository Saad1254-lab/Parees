var menus =document.getElementById("section2")



function menu(){
   menus.classList.toggle("active2")
}
fetch('mens.json')
  .then(response => response.json())
  .then(data => {
    const cardContainer = document.getElementById('card-container');

    data.cards.forEach(card => {
      const cardElement = document.createElement('div');
      cardElement.classList.add("cardbody");
      cardElement.innerHTML = `
      <img src="${card.imageUrl}" alt="Card Image" style=" margin-top:-8px; width: 108%; height: 60%; border-bottom:1px solid black  ">
      <h3 style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif ; ">${card.name}</h3>
      <p style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;  ">${card.description}</p>
      <a href='${card.page}' download class="btn1" style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; border-radius:8px; background-color:black; color:white; padding: 5px 5px 5px 5px; text-decoration:none;  ">${card.btn}</a>
        
      `;

      // cardElement.addEventListener('click', () => {
      //   window.location.href = card.page;
      // });
      cardContainer.appendChild(cardElement);
    });
  })

  .catch(error => console.error('Error fetching JSON:', error));


fetch('women.json')
  .then(response => response.json())
  .then(data => {
    const cardContainer = document.getElementById('card-container1');

    data.cards.forEach(card => {
      const cardElement = document.createElement('div');
      cardElement.classList.add("cardbody");
      cardElement.innerHTML = `
      <img src="${card.imageUrl}" alt="Card Image" style="margin-top:-8px; width: 108%; height: 60%; border-bottom:1px solid black  ">
      <h3 style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif ; ">${card.name}</h3>
      <p style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;  ">${card.description}</p>
      <a href='${card.page}' download class="btn1" style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; border-radius:8px; background-color:black; color:white; padding: 5px 5px 5px 5px; text-decoration:none;  ">${card.btn}</a>
        
      `;

      // cardElement.addEventListener('click', () => {
      //   window.location.href = card.page;
      // });
      cardContainer.appendChild(cardElement);
    });
  })
  .catch(error => console.error('Error fetching JSON:', error));


fetch('kids.json')
  .then(response => response.json())
  .then(data => {
    const cardContainer = document.getElementById('card-container2');

    data.cards.forEach(card => {
      const cardElement = document.createElement('div');
      cardElement.classList.add("cardbody");
      cardElement.innerHTML = `
      <img src="${card.imageUrl}" alt="Card Image" style="margin-top:-8px; width: 108%; height: 60%; border-bottom:1px solid black  ">
      <h3 style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif ; ">${card.name}</h3>
      <p style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;  ">${card.description}</p>
      <a href='${card.page}' download class="btn1" style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; border-radius:8px; background-color:black; color:white; padding: 5px 5px 5px 5px; text-decoration:none;  ">${card.btn}</a>
        
      `;

      // cardElement.addEventListener('click', () => {
      //   window.location.href = card.page;
      // });
      cardContainer.appendChild(cardElement);
    });
  })
  .catch(error => console.error('Error fetching JSON:', error));

