import mariadb from "mariadb";

const pool = mariadb.createPool({
  host: "database",
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 1,
});


export const getWordsText = async () => {
  let conn;
  try {
    conn = await pool.getConnection();
    const res =  await conn.query(`
        SELECT old_text
        FROM page
                 JOIN revision ON page.page_latest = revision.rev_id
                 JOIN content ON revision.rev_sha1 = content.content_sha1
                 JOIN text
                      ON SUBSTRING_INDEX(content.content_address, ":", -1) = text.old_id
        WHERE page.page_title = 'Words';
    `);
    return res[0].old_text.toString();
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.end();
  }
}
