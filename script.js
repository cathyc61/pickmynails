const cards = document.querySelectorAll('.nail-card');
const confirmBtn = document.getElementById('confirmBtn');
const modal = document.getElementById('modal');
const selectedStyleText = document.getElementById('selectedStyleName');
const waLink = document.getElementById('waLink');

let selectedStyle = null;

// Add click event to each card
cards.forEach(card => {
    card.addEventListener('click', () => {
        cards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        selectedStyle = card.getAttribute('data-style');
        
        confirmBtn.disabled = false;
        confirmBtn.innerText = "Confirm Choice 💅";
    });
});

// Handle confirm button click
confirmBtn.addEventListener('click', () => {
    if (selectedStyle) {
        // Update text in modal
        selectedStyleText.innerText = selectedStyle;
        
        // Create the pre-written message
        const message = `${selectedStyle}`;
                
        // Encode the message so it works in a URL
        const encodedMessage = encodeURIComponent(message);
                
        // Set up the links for SMS and WhatsApp
        waLink.href = `https://api.whatsapp.com/send?phone=85260805756&text=${encodedMessage}!This%20%F0%9F%91%8D%F0%9F%8F%BD`;

        // Show Modal
        modal.classList.add('active');
    }
});

// Function to close the modal
function closeModal() {
    modal.classList.remove('active');
    
    // Reset selection after closing
    cards.forEach(c => c.classList.remove('selected'));
    selectedStyle = null;
    confirmBtn.disabled = true;
    confirmBtn.innerText = "Select a style first!";
}