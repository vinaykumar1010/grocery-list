
        const btnEle = document.getElementById('btn');
        btnEle.innerText = "Add";

        btnEle.addEventListener('click', function(event) {
            // Get values of the 2 inputs;
            let name = document.getElementById('item-name-input').value;
            let price = document.getElementById('item-price-input').value;

            if(price > 0) {

                // Add the values to the table (point 3)
                
                document.getElementById('table-body').innerHTML+= `<tr>
                    <td data-ns-test="item-name">${name}</td>
                    <td data-ns-test="item-price">${price}</td>
                    </tr>`;
                
                // Update grand total
              
                let total = parseInt(document.getElementById('total').innerText);
                total+=parseInt(price);
                document.getElementById('total').innerHTML = total;
                
                // clear inputs
    
                document.getElementById('item-name-input').value = "";
                document.getElementById('item-price-input').value = "";
            }
            else {
                alert("Please provide valid inputs");
                console.log("Please provide valid inputs");
            }

        })

