const loadPhones = async () => {
    try {
        const url = `https://openapi.programming-hero.com/api/phones?search=iphone`;
        const res = await fetch(url);
        const data = await res.json();
        displayPhone(data);
    } catch (error) {
        console.error('Error fetching phone data:', error);
    }
};

const displayPhone = phones => {
    const phonesContainer = document.getElementById('phones-container');
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
            <div class="card">
                <img src="${phone.image}" class="card-img-top" alt="${phone.name}">
                <div class="card-body">
                    <h5 class="card-title">${phone.name}</h5>
                    <p class="card-text">${phone.description}</p>
                </div>
            </div>
        `;
        phonesContainer.appendChild(phoneDiv);
    });
};

loadPhones();
