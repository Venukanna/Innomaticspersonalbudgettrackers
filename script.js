// JavaScript functionality for adding and deleting transactions

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const tableBody = document.querySelector('tbody');

    // Add transaction functionality
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        const amount = form.querySelector('input[type="number"]').value;
        const category = form.querySelector('select').value;
        const description = form.querySelector('input[type="text"]').value;
        const date = form.querySelector('input[type="date"]').value;
        const type = form.querySelector('input[name="type"]:checked').nextElementSibling.innerText;

        // Create a new row
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${date}</td>
            <td>${category}</td>
            <td>${description}</td>
            <td>${type === 'Income' ? '+' : '-'}${amount}</td>
            <td><span class="${type === 'Income' ? 'income-badge' : 'expense-badge'}">${type}</span></td>
            <td class="action-buttons">
                <button class="edit-btn"><i class="fas fa-edit"></i></button>
                <button class="delete-btn"><i class="fas fa-trash"></i></button>
            </td>
        `;

        // Append the new row to the table
        tableBody.appendChild(newRow);

        // Clear the form
        form.reset();
    });

    // Delete transaction functionality
    tableBody.addEventListener('click', (event) => {
        if (event.target.closest('.delete-btn')) {
            const row = event.target.closest('tr');
            row.remove(); // Remove the row from the table
        }
    });
});
