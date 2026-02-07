<form method="POST" action="?/report" enctype="multipart/form-data">
    <label>
        Name
        <input type="text" name="name" />
    </label>
    <label>
        Description
        <textarea name="desc"></textarea>
    </label>
    <label>
        Image
        <input type="file" name="image">
    </label>
    <button>Submit Report</button>
</form>