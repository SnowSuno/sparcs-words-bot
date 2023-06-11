import mariadb from "mariadb";

const pool = mariadb.createPool({
  host: "database",
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 1,
});

export const testQuery = async () => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query("SELECT 1 as val");
    return rows;
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.end();
  }
}
