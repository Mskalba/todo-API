module.exports = {
    "up": "CREATE TABLE IF NOT EXISTS todo(\n" +
        "    title TEXT, id INT AUTO_INCREMENT, description TEXT, priority TINYINT, author TEXT, extra TEXT, url TEXT, parent_todo_id INT, PRIMARY KEY (id)" +
        ")",
    "down": ""
};
