var menus =document.getElementById("section2")



function menu(){
   menus.classList.toggle("active2")
}
fetch('brands.json')
  .then(response => response.json())
  .then(data => {
    const cardContainer = document.getElementById('card-container');

    data.cards.forEach(card => {
      const cardElement = document.createElement('div');
      cardElement.classList.add("cardbody");
      cardElement.innerHTML = `
        <img src="${card.imageUrl}" alt="Card Image" style="width: 108%; height: 110%; ">
        
      `;

      cardElement.addEventListener('click', () => {
        window.location.href = card.page;
      });
      cardContainer.appendChild(cardElement);
    });
  })
  .catch(error => console.error('Error fetching JSON:', error));

