btnAdd.onclick = function(){
    let customerName = inptName.value
    let customerStreet = inptStreet.value
    let customerCity = inptCity.value
    let customerState = inptState.value
    let customerZip = inptZip.value
    let query = "INSERT INTO customer (`name`,`street`, `city`, `state`, `zipcode`) VALUES ('" + customerName + "', '" + customerStreet + "', '" + customerCity + "','" + customerState + "', '"+ customerZip + "')"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
    if (req.status == 200) { 
        if (req.responseText == 500)    
            lblMessage2.value = "You have successfully added the customer!"
        else
            lblMessage2.value = "There was a problem with adding the customer to the database."
    } else 
        lblMessage2.value = "Error: " + req.status
}