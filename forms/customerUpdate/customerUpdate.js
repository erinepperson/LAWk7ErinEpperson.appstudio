btnUpdate.onclick = function(){
let newName = inptNewName.value
    let oldName = inptOldName.value
    query = "SELECT * FROM customer WHERE `name` = '" + oldName + "'"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
    if (req.status == 200) {
        customerData = JSON.parse(req.responseText)
        if (customerData.length > 0) {
            query = "UPDATE customer SET `name` ='" + newName + "' WHERE `name` = '" + oldName + "'"
            req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
            if (req.status ==  200)  
                if (req.responseText == 500)   
                    lblMessage3.value = `You have successfully updated ${oldName} to ${newName}.`
                else
                    lblMessage3.value = `There was a problem updating ${oldName} to ${newName}.`
            else   
                lblMessage3.value = `Error: ${req.status}`
        }
    } // if 200
}