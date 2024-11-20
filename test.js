const mysql = require('mysql2');

// MySQL 연결 정보
const connection = mysql.createConnection({
  host: '192.168.56.101',
  port: 4567,
  user: 'kimdohyun',
  password: '@dh001030',
  database: 'madang',
});

// 데이터베이스 연결 및 쿼리 실행
connection.connect();
connection.query('SELECT * FROM Book', (err, results) => {
  results.forEach((row) => {
    console.log(`${row.bookid}  ${row.bookname}  ${row.publisher}`);
  });
  connection.end();
});
