
customerDelete.onshow=function(){
     // get all the customer data from the database when program loads
    query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

    if (req.status == 200) { //transit worked.
        customerData = JSON.parse(req.responseText)  // parse data in an array
        console.log(customerData)
    } else 
        // transit error
        lblMessages1 = `Error: ${req.status}`
    

    let customerNameDel = inptNameDel.value
    let found = false
    for (i = 0; i < customerData.length; i++) {
        if (customerNameDel == customerData[i][1]){
            found = true
            break 
        }
    }
        
    if (found == false) 
       lblMessage1.value = "That customer name is not in the database."
    else if (found == true) {
      query = "DELETE FROM customer WHERE petName = '" + petNameDel + "'"      
      req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + databaseSchema + "&query=" + query)
      if (req.status == 200) //transit worked.
            if (req.responseText == 500)    
                lblMessage1.value = `You have successfully deleted the customer named ${customerNameDel}`
            else
                lblMessage1.value = `There was a problem deleting ${customerNameDel} from the database.`
      else
        lblMessage1.value = `Error: ${req.status}`
    }
}

