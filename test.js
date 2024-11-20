const mysql = require('mysql2');

// MySQL 연결 설정
const connection = mysql.createConnection({
  host: '192.168.56.101',
  port: 4567,
  user: 'kimdohyun',
  password: '@dh001030',
  database: 'madang',
});

// 데이터베이스 연결
connection.connect();
console.log('=========================\n');
// 새로운 책 추가
const newBook = {
  bookid: 101,
  bookname: 'New Book Title',
  publisher: 'New Publisher',
};
const insertQuery =
  'INSERT INTO Book (bookid, bookname, publisher) VALUES (?, ?, ?)';
connection.query(
  insertQuery,
  [newBook.bookid, newBook.bookname, newBook.publisher],
  (err, results) => {
    if (err) throw err;
    console.log('데이터 삽입:', newBook);

    // 삽입 후 전체 데이터 조회
    connection.query('SELECT * FROM Book', (err, results) => {
      if (err) throw err;
      console.log('새로운 책 추가 이후:');
      results.forEach((row) => {
        console.log(`${row.bookid}  ${row.bookname}  ${row.publisher}`);
      });
      console.log('\n=========================\n\n');

      // 추가한 책 삭제
      const deleteQuery = 'DELETE FROM Book WHERE bookid = ?';
      connection.query(deleteQuery, [newBook.bookid], (err, results) => {
        if (err) throw err;
        console.log('데이터 삭제:', newBook.bookid);

        // 삭제 후 전체 데이터 조회
        connection.query('SELECT * FROM Book', (err, results) => {
          if (err) throw err;
          console.log('삭제한 이후:');
          results.forEach((row) => {
            console.log(`${row.bookid}  ${row.bookname}  ${row.publisher}`);
          });

          console.log('\n=========================\n\n');
          // 특정 책 검색
          const searchQuery = 'SELECT * FROM Book WHERE publisher = ?';
          const searchPublisher = 'Pearson';
          connection.query(searchQuery, [searchPublisher], (err, results) => {
            if (err) throw err;
            console.log(`책 출판사가 ${searchPublisher}인 경우:`);
            results.forEach((row) => {
              console.log(`${row.bookid}  ${row.bookname}  ${row.publisher}`);
            });
            console.log('\n=========================\n\n');
            // 연결 종료
            connection.end();
          });
        });
      });
    });
  }
);
