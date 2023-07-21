function saveToLocalStorage(event){                
    event.preventDefault();
    let date = event.target.date.value;
    let description = event.target.description.value;
    let category = event.target.category.value;
    let expenseAmount = event.target.expenseAmount.value;
    let expensedetails = {
        date,
        description,
        category,
        expenseAmount
    };
    localStorage.setItem(expensedetails.date, JSON.stringify(expensedetails));
    showExpenseDetailsOnScreen(expensedetails);
};

function showExpenseDetailsOnScreen(expensedetails){
    let parent = document.getElementById('list-of-items');
    let child = document.createElement('li');
    child.textContent =  expensedetails.date + "==>>" + expensedetails.description + "==>>" +
    expensedetails.category + "==>>"+expensedetails.expenseAmount +" ";

    let deleteBtn = document.createElement('input');
    deleteBtn.type = 'button';
    deleteBtn.value = 'Delete';
    deleteBtn.classList = "btn btn-danger me-1"
    deleteBtn.onclick = () => {
        localStorage.removeItem(expensedetails.date);
        parent.removeChild(child);
    }
    
    let editBtn = document.createElement('input');
    editBtn.type = 'button';
    editBtn.value = 'Edit';
    editBtn.classList = "btn btn-secondary";
    editBtn.onclick = () => {
        localStorage.removeItem(expensedetails.date);
        parent.removeChild(child);
        document.getElementById('dateInput').value = expensedetails.date;
        document.getElementById('descriptionInput').value = expensedetails.description;
        document.getElementById('category').value = expensedetails.category;
        document.getElementById('expenseAmount').value = expensedetails.expenseAmount;
    }

    child.appendChild(deleteBtn);
    child.appendChild(editBtn);
    parent.appendChild(child);
    child.className = "list-group-item";
    parent.classList = "list-group mt-3";

    document.getElementById('dateInput').value = " "
    document.getElementById('descriptionInput').value = " "
    document.getElementById('category').value = " "
    document.getElementById('expenseAmount').value = " "
}