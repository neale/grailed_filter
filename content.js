function filterEssentials() {
    const listings = document.querySelectorAll('.feed-item'); // Update this selector based on Grailed's HTML structure

    listings.forEach(listing => {
        const title = listing.querySelector('.listing-item-link'); // Update this selector as well
        if (title && title.innerText.toLowerCase().includes('essentials')) {
            listing.style.display = 'none';
        }
    });
}

// Run the filter when the page loads
window.addEventListener('load', filterEssentials);

// Since Grailed might load more items dynamically, set an interval to re-run the filter
setInterval(filterEssentials, 100);

