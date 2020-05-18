<?php foreach($result as $key=>$val): ?>
<tr>
    <form id="update-data" >
        <th scope="row">
            <?php echo $val[0]?>
        </th>
        
        <input id="id" type="hidden" name="id" value="<?php echo $val[0]?>">
        
        <td>
            <input id="username" type="text" name="username" value="<?php echo $val[1] ?>"> 
        </td>
        <td>
            <input id="email" type="email" name="email" value="<?php echo $val[2] ?>"> 
        </td> 
        <td>              
            <input id="password" type="password" name="password" value="<?php echo $val[3] ?>"> 
        </td>
        <td>
            <input id="submit" class="btn btn-primary" type="submit" value="Update" onclick="update()">               
        </td>
    </form>
</tr>
<?php endforeach?>




